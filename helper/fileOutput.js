import { getRequestTextResponse, getRequestJsonResponse, queryInt, notFoundResponse, badRequestResponse } from "./request";

const FILE_BASE_URL = "https://raw.githubusercontent.com/jacobsieradzki/vitruvian-hardware/main/"

export async function readSensorOutputFile(req, res, fileName) {

  const { query } = req;
  const interval = queryInt(query, 'interval', null);
  const queryTimestamp = queryInt(query, 'timestamp', null);
  const format = query?.format ?? "DEFAULT"

  if (format == 'DEFAULT' && (interval == null || queryTimestamp == null)) {
    badRequestResponse(req, res, 'Please specify timestamp and optionally interval in ms: \n\ne.g. To fetch the 4th reading which is at 2.0s\n.../api/pi/{fileName}?timestamp=2000&interval=500');
    return;
  }

  const text = await readFile(req, res, fileName);
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
  outputResults(req, res, results);
}


const outputResults = (req, res, results) => {
  const { query } = req;
  const queryTimestamp = queryInt(query, 'timestamp', null);

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
};

const readFile = async (req, res, path) => {
  try {
    const response = await fetch(FILE_BASE_URL + path);
    const text = await response.text();
    if (text?.length > 0) {
      return text
    } else {
      return null;
    }
  } catch (error) {
    var str = JSON.stringify(error);
    if (str === '{}') str = "Not found"
    notFoundResponse(req, res, `Error getting resource ${path}\n${str}`);
    return null;
  }
}