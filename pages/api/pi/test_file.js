import { readSensorOutputFile } from "@h/fileOutput.js";

export default function getRequest(req, res) {
  return readSensorOutputFile(req, res, 'data/gyroscope-1615560322849.csv');
}