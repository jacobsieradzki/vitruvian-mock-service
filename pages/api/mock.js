import getRequestTextResponse from "../../helper/request";

export default function getRequestHandler(req, res) {

  const { query } = req;

  getRequestTextResponse(req, res, function() {
    const date = new Date();
    const timestamp = date.getTime();
    const x = valueForSelector(timestamp, query.x);
    const y = valueForSelector(timestamp, query.y);
    const z = valueForSelector(timestamp, query.z);
    console.log('hey', x, y, z);    
    return `${timestamp},${x},${y},${z}`;
  });
}

function valueForSelector(input, selector) {
  switch (selector || "") {
    case 'sin':
      return Math.sin(input);
    case 'cos':
      return Math.cos(input);
    case 'tan':
      return Math.tan(input);
    default:
      return 0;
  }
}