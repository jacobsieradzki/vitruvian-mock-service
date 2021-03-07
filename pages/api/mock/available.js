import { getRequestJsonResponse } from "../../../helper/request";
import { AVAILABLE_CHANNELS } from '../../../data/channels';

export default function getRequestHandler(req, res) {
  const { 
    query,
  } = req;

  var channels = AVAILABLE_CHANNELS;

  if (query.filter?.length > 0) {
    channels = channels.filter(function(channel) {
      return channel.filters.includes(query.filter);
    });
  }

  getRequestJsonResponse(req, res, function() {
    return channels;
  });
}