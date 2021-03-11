import { APP_HELP_MENU } from "../data/appHelp";
import { getRequestTextResponse, getRequestJsonResponse } from "./request";

export default function mpuOutput(req, res, sensor) {
  const { query } = req;

  if (query.hasOwnProperty('help'))
    return getRequestTextResponse(req, res, APP_HELP_MENU);


  const queryInt = (key, fallback) => (!!query[key]) ? parseInt(query[key]) : fallback;

  const defaultTime = Math.round(new Date().getTime() / 1000) * 1000;
  const timestamp = queryInt('time', defaultTime);
  const format = query.format || '';

  const { x, y, z, } = sensor(timestamp);
  const event = [timestamp, x, y, z];

  var output = "null";

  switch (format) {
    case 'JSON':
      getRequestJsonResponse(req, res, () => {
        return {
          timestamp: event[0], 
          x: event[1],
          y: event[2],
          z: event[3],
        };
      });
      return;

    default:
      output = event.join(',');
      getRequestTextResponse(req, res, output);
      return;
  }
}