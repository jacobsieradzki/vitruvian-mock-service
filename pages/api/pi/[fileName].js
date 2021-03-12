import { readSensorOutputFile } from "@h/fileOutput.js";

export default function getRequest(req, res) {
  const {
    query: { fileName },
  } = req;

  console.log('req');
  console.log(req.referer);
  console.log(req, res)

  return readSensorOutputFile(req, res, `assets/ios/${fileName}`);
}