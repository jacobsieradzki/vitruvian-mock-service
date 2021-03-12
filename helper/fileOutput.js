import { getRequestTextResponse, getRequestJsonResponse, queryInt, notFoundResponse, badRequestResponse } from "./request";
import { readFileSync } from 'fs';

export default function readMpuOutputFile(req, res, fileName) {

  const { query } = req;

  const text = readFile(req, res, fileName);
  if (!text) return;

  const textArr = text.split('\n');

  var results = [];
  textArr.forEach(str => {
    if (str === "") return;

    if (str === '0' || parseFloat(str)) {
      results.push({ timestamp: parseFloat(str) || 0 });
    } else {
      const _split = str.split(':').map(str => str.split(',').map(x => x.trim()));
      const split = [].concat.apply([], _split);
      const attributeName = split[0].toLowerCase();
      const attributes = split.map(x => /^(.+) = (.+)$/g.exec(x)).filter(x => !!x).map(x => { 
        return { [x[1].toLowerCase()]: parseFloat(x[2]) || x[2] }
      }).reduce(function(prev, curr) {
        return { ...curr, ...prev };
      }, {});

      results[results.length-1][attributeName] = attributes;
    }
  });

  if (query.format === 'JSON') {
    getRequestJsonResponse(req, res, results);
  } else if (query.format === 'TXT') {
    getRequestTextResponse(req, res, text);
  } else {
    const timestamp = new Date().getTime();
    const result = results[timestamp % results.length];
    const output = `${timestamp},${result.accelerometer.x},${result.accelerometer.y},${result.gryo.z},${result.gryo.x},${result.gryo.y},${result.gryo.z}`;
    console.log('testing...', timestamp, result, output);
    getRequestTextResponse(req, res, output);
  }
}

export function readSensorOutputFile(req, res, fileName) {

  const { query } = req;
  const interval = queryInt(query, 'interval', null);
  const queryTimestamp = queryInt(query, 'timestamp', null);

  if (query.format == 'DEFAULT' && (interval == null || queryTimestamp == null)) {
    badRequestResponse(req, res, 'Please specify timestamp and optionally interval in ms: \n\ne.g. To fetch the 4th reading which is at 2.0s\n.../api/pi/{fileName}?timestamp=2000&interval=500');
    return;
  }

  const text = readFile(req, res, fileName);
  if (!text) return;

  const textArr = text.split('\n');

  var currentTimestamp = 0;
  var results = [];

  textArr.forEach((str, index) => {
    if (str === "") return;
    if (index === 0) return;

    const components = str.split(',');
    if (components.length !== 4) return;

    const x = parseFloat(components[1]);
    const y = parseFloat(components[2]);
    const z = parseFloat(components[3]);

    results.push({ timestamp: currentTimestamp, x, y, z });
    currentTimestamp += interval
  });

  console.log(`Parsed ${results.length} results.`);

  if (query.format === 'JSON') {
    getRequestJsonResponse(req, res, results);
  } else if (query.format === 'TXT') {
    const output = results.map(x => `${x.timestamp},${x.x},${x.y},${x.z}`).join('\n');
    getRequestTextResponse(req, res, "timestamp,x,y,z\n" + output);
  } else {
    var result = results.find(value => value.timestamp === queryTimestamp);
    if (result) {
      console.log(`Selected result matching timestamp ${queryTimestamp}`);
      const output = `${result.timestamp},${result.x},${result.y},${result.z}`;
      getRequestTextResponse(req, res, output);
    } else {
      notFoundResponse(req, res, `Reading not found at timestamp=${queryTimestamp}, interval=${interval}`);
    }
  }
}

const readFile = (req, res, path) => {
  try {
    const text = readFileSync(fileName, 'utf8');
    return text;
  } catch (error) {
    var str = JSON.stringify(error);
    if (str === '{}') str = "Not found"
    notFoundResponse(req, res, `Error getting resource ${path}\n${str}`);
  }
}