import { APP_HELP_MENU } from "../../../data/appHelp";
import appOutput from "../../../helper/appOutput";
import { getRequestTextResponse, getRequestJsonResponse } from "../../../helper/request";

const randomNumberBetween = (min, max) => Math.floor(Math.random() * max) + min;
const insertAt = (item, index, arr) => arr.splice(index, 0, item);

const ACTIVITY_TYPE = {
  POSTURE: 0,
  SLOUCH_ALERT: 1,
  SEDENTARY_ALERT: 2,
  DOWNSTAIRS: 3,
  JOGGING: 4,
  SITTING: 5,
  STANDING: 6,
  UPSTAIRS: 7,
  WALKING: 8
};

export default function getRequestHandler(req, res) {
  appOutput(req, res, function(timestamp, interval) {
    return Math.floor(25 * Math.sin((0.1 / interval) * timestamp + 80.1) + 55);
  });
}