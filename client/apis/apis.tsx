import request from "superagent";

export function fetchSeasons() {
  return request  
    .get('api/v1')
    .then(response => response.body)
}
