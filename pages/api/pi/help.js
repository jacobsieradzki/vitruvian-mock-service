import { PI_HELP_MENU } from "../../../data/piHelp";
import { getRequestTextResponse } from "../../../helper/request";

export default function getRequestHandler(req, res) {
  return getRequestTextResponse(req, res, PI_HELP_MENU);
};