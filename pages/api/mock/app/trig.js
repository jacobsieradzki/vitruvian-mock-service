import { getRequestTextResponse } from "../../../../helper/request";

export default function getRequestHandler(req, res) {

  const { query } = req;

  var output = "";
  var postureFlag = false;
  for (var i = 0; i < 100; i++) {
    const y = Math.round(50 * (Math.sin(0.1*i) + 1));

    if (!!postureFlag && y < 75) {
      output += `slouch_alert\n`;
      postureFlag = false;
    } 
    if (!postureFlag && y >= 75) {
      postureFlag = true;
    }

    output += `posture ${y}\n`;
  }

  getRequestTextResponse(req, res, output);
}