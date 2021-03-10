import { APP_HELP_MENU } from "../../../data/appHelp";
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
  const { query } = req;

  if (query.hasOwnProperty('help'))
    return getRequestTextResponse(req, res, APP_HELP_MENU);


// ### Show this help menu, don't need to put a value e.g. .../trig?help
// help          (bool) default=false

// ### Between readings in milliseconds (default: 1 hour)
// interval      (float) default=3600000 

// ### Number of random POSTURE_READINGS to display (default: 3 days of 1 hour intervals).
// readings      (int) default=72 

// ### Number of SLOUCH_ALERT and SEDENTARY_ALERT in the response. These are placed at a random index between 1-(interval-2) and the timestamp is mean of reading before and after.
// alerts        (int) default=5

// ### Number of 3-8 values in the response. These are placed at a random index between 1-(interval-2) and the timestamp is mean of reading before and after.
// activities    (int) default=23 

  const queryInt = (key, fallback) => (!!query[key]) ? parseInt(query[key]) : fallback;

  const defaultTime = Math.round(new Date().getTime() / 1000) * 1000;
  var timestamp = queryInt('timestamp', defaultTime);
  const interval = queryInt('interval', 3600000);
  const n = queryInt('readings', 72);
  const alerts = queryInt('alerts',  5);
  const activities = queryInt('activities', 23);
  const format = query.format || '';

  console.log({timestamp, interval, n, alerts, activities});

  var events = [];

  for (var i = 0; i < n; i++) {
    const val = Math.floor(25 * Math.sin((0.1 / interval) * timestamp + 80.1) + 55);
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
  generateEventsBetweenActivities(activities, 3, 8);

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
      console.log(['activity', 'timestamp', 'value']
      .concat(events));
      output = [['activity', 'timestamp', 'value']]
        .concat(events)
        .map(x => `${x[0] ?? '-1'},${x[1] ?? '0'},${x[2] ?? '0'}`)
        .join('\n');
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