import appOutput from "../../../helper/appOutput";

export default function getRequestHandler(req, res) {
  appOutput(req, res, function(timestamp, interval) {
    return Math.floor(25 * Math.sin((0.1 / interval) * timestamp + 80.1) + 55);
  });
}