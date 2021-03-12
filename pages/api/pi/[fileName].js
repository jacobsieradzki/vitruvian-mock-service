import { readSensorOutputFile } from "@h/fileOutput.js";

export default function getRequest(req, res) {
  const {
    query: { fileName },
  } = req;

  return readSensorOutputFile(req, res, `./data/ios/${fileName}`);
}