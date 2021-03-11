import { getRequestJsonResponse } from "../../helper/request";
import { SENSORS_TO_PI, PI_TO_ANDROID } from '../../../data/channels';

export default function getRequestHandler(req, res) {
  const { 
    query,
  } = req;

  var channels = SENSORS_TO_PI.concat(PI_TO_ANDROID);

  if (query.filter?.length > 0) {
    channels = channels.filter(function(channel) {
      return channel.filters.includes(query.filter);
    });
  }

  getRequestJsonResponse(req, res, function() {
    return channels;
  });
}