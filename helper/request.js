
export function getRequestTextResponse(req, res, result) {
  const { method } = req;

  switch (method) {
    case 'GET':
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
      res.status(200).json(output);
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}