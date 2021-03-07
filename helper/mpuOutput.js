import { getRequestTextResponse, getRequestJsonResponse } from "./request";
import { readFileSync } from 'fs';

export default function readMpuOutputFile(req, res, fileName) {

  const { query } = req;

  const text = readFileSync(fileName, 'utf8');
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

  if (query.format === 'json') {
    getRequestJsonResponse(req, res, results);
  } else if (query.format === 'txt') {
    getRequestTextResponse(req, res, text);
  } else {
    const timestamp = new Date().getTime();
    const result = results[timestamp % results.length];
    const output = `${timestamp},${result.accelerometer.x},${result.accelerometer.y},${result.gryo.z},${result.gryo.x},${result.gryo.y},${result.gryo.z}`;
    console.log('testing...', timestamp, result, output);
    getRequestTextResponse(req, res, output);
  }
}