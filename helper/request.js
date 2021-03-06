
export const queryInt = (query, key, fallback) => (!!query[key]) ? parseInt(query[key]) : fallback;

export const internalError = (req, res, message = "Internal server API error") => res.status(500).end(message);
export const badRequestResponse = (req, res, message) => res.status(400).end(message);

export function notFoundResponse(req, res, message) {
  res.status(404).end(message);
}

export function getRequestTextResponse(req, res, result) {
  const { method } = req;

  switch (method) {
    case 'GET':
      var output = null;
      if (typeof(result) === "function") output = result();
      if (typeof(result) === "object") output = result;
      if (typeof(result) === "string") output = result;
      res.status(200).end(output);
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}

export function postRequestTextResponse(req, res, result) {
  const { method } = req;

  switch (method) {
    case 'POST':
      var output = null;
      if (typeof(result) === "function") output = result();
      if (typeof(result) === "object") output = result;
      if (typeof(result) === "string") output = result;
      res.status(200).send(output);
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}

export function getRequestJsonResponse(req, res, result) {
  const { method } = req;

  switch (method) {
    case 'GET':
      var output = null;
      if (typeof(result) === "function") output = result();
      if (typeof(result) === "object") output = result;
      console.log(output);
      res.status(200).json(output);
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}