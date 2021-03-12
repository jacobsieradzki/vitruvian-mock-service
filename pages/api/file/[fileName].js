import readMpuOutputFile from "@h/fileOutput.js";

export default function getRequest(req, res) {
  const {
    query: { fileName },
  } = req;

  return readMpuOutputFile(req, res, `./data/${fileName}`);
}