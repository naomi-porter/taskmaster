import request from "superagent";


export function fetchSeasons() {
  return request  
    .get('/api/v1/seasons')
    .then(response => response.body)
}

export function seasonContestantsAndEpisodes(id: string) {
  return request  
    .get(`/api/v1/seasons/${id}`)
    
    .then((response) => {
      console.log(response.body)
      return response.body
    })
}
