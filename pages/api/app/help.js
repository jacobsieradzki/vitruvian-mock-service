import { APP_HELP_MENU } from "../../../data/appHelp";
import { getRequestTextResponse } from "../../../helper/request";

export default function getRequestHandler(req, res) {
  return getRequestTextResponse(req, res, APP_HELP_MENU);
};