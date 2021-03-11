import readMpuOutputFile from "../../../helper/fileOutput.js";

export default function getRequest(req, res) {
  const {
    query: { fileName },
  } = req;

  return readMpuOutputFile(req, res, `data/${fileName}`);
}