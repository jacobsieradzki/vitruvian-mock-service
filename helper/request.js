
export default function getRequestTextResponse(req, res, result) {
  const { method } = req;

  switch (method) {
    case 'GET':
      const output = result();
      res.status(200).send(output);
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}