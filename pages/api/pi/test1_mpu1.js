import mpuOutput from "../../../helper/mpuOutput";

export default function getRequestHandler(req, res) {
  mpuOutput(req, res, function(x) {
    return { 
      x: 0,
      y: 10 * Math.sin(0.3 * x + 2.5),
      z: 1, 
    };
  });
}