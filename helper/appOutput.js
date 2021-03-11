import { APP_HELP_MENU } from "../data/appHelp";
import { getRequestTextResponse, getRequestJsonResponse } from "./request";

const ACTIVITY_TYPE = {
  0:  'POSTURE',
  1:  'SLOUCH_ALERT',
  2:  'SIT_ALERT',
  3:  'WALKING',
  4:  'WALKING_UPSTAIRS',
  5:  'WALKING_DOWNSTAIRS',
  6:  'SITTING',
  7:  'STANDING',
  8:  'LAYING',
  9:  'STAND_TO_SIT',
  10: 'SIT_TO_STAND',
  11: 'SIT_TO_LIE',
  12: 'LIE_TO_SIT',
  13: 'STAND_TO_LIE',
  14: 'LIE_TO_STAND',
};


// ### A function which should calculate a posture value range=[0-100] and return this value.
// posture(timestamp, interval):
export default function appOutput(req, res, posture) {
  const { query } = req;

  if (query.hasOwnProperty('help'))
    return getRequestTextResponse(req, res, APP_HELP_MENU);


  const queryInt = (key, fallback) => (!!query[key]) ? parseInt(query[key]) : fallback;

  const defaultTime = Math.round(new Date().getTime() / 1000) * 1000;
  var timestamp = queryInt('timestamp', defaultTime);
  const interval = queryInt('interval', 3600000);
  const n = queryInt('readings', 72);
  const alerts = queryInt('alerts',  5);
  const activities = queryInt('activities', 23);
  const format = query.format || '';

  var events = [];

  for (var i = 0; i < n; i++) {
    const val = posture(timestamp, interval);
    events.push([0, timestamp, val]);
    timestamp += interval;
  }

  const generateEventsBetweenActivities = (n, min, max) => {
    for (var i = 0; i < n; i++) {
      const index = randomNumberBetween(1, events.length);
      const timestamp = (events[index-1][1] + events[+1][1]) / 2;
      const alert = randomNumberBetween(min, max);
      insertAt([alert, timestamp], index, events);
    }
  }

  generateEventsBetweenActivities(alerts, 1, 2);
  generateEventsBetweenActivities(activities, 3, 14);

  returnOutput(req, res, events);
}

// ----------------------------------------
// Remote Access to Firebase
// ----------------------------------------

export function remoteOutput(req, res, events) {
  const { query } = req;

  if (query.hasOwnProperty('help'))
    return getRequestTextResponse(req, res, APP_HELP_MENU);

  returnOutput(req, res, events);
}

// ----------------------------------------
// Helper
// ----------------------------------------

const randomNumberBetween = (min, max) => Math.floor(Math.random() * max) + min;
const insertAt = (item, index, arr) => arr.splice(index, 0, item);

function returnOutput(req, res, events) {
  const format = req.query?.format || '';
  var output = "null";

  switch (format) {
    case 'JSON':
      getRequestJsonResponse(req, res, () => {
        return events.map(x => { return {
          activity: x[0], 
          activity_enum: ACTIVITY_TYPE[x[0]],
          timestamp: x[1],
          value: x[2],
        }});
      });
      return;

    case 'CSV':
      output = ['activity,timestamp,value']
        .concat(events
        .map(x => `${ACTIVITY_TYPE[x[0]] ?? 'NULL'},${x[1] ?? '0'},${x[2] ?? '0'}`)
        ).join('\n');
      getRequestTextResponse(req, res, output);
      return;

    case 'UNMINIFIED':
      output = events.map(x => x.join(' ')).join(';\n');
      getRequestTextResponse(req, res, output);
      return;

    default:
      output = events.map(x => x.join(' ')).join(';');
      getRequestTextResponse(req, res, output);
      return;
  }
}