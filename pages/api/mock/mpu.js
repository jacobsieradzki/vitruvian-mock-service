import { getRequestTextResponse } from "../../../helper/request";

export default function getRequestHandler(req, res) {
  const { query } = req;

  const date = new Date();
  var seed = date.getTime();

  var time = parseFloat(query?.time)
  if (time) seed = time;

  var x = 0;
  var y = 0;
  var z = 0;

  switch (query.id || '') {
    case 'test1_mpu1':
      x = 0;
      y = 2.5 * Math.sin(seed + 2.5);
      z = 1;
    case 'test1_mpu2':
      x = 0;
      y = 3 * Math.sin(1.5 * seed);
      z = 1;
    default:
      break;
  }

  const output = `${seed},${x},${y},${z}`;
  getRequestTextResponse(req, res, output);
}