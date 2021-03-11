import mpuOutput from "../../../helper/mpuOutput";

export default function getRequestHandler(req, res) {
  mpuOutput(req, res, function(x) {
    return { 
      x: 0,
      y: 3 * Math.sin(0.1 * x),
      z: 1, 
    };
  });
}