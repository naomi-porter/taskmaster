import { Router } from "express";
import { getAllSeasons, seasonEpisodes, seasonContestant, addNewEpisode, removeEpisode } from "../db/exportDBInfo";

const router = Router()

// an array of all of the seasons
router.get('/seasons', (request, response) => {
  getAllSeasons()
    .then((allSeasonsInfoFromDB) => {
      response.json(allSeasonsInfoFromDB)
    })
    .catch((error) => {
      response.status(500).json({ msg: error.message })
    })
})

// for a specific season
// list all episodes and contestants
router.get('/seasons/:id', (request, response) => {

  const idToNumber = Number(request.params.id)

  seasonEpisodes(idToNumber)
    .then((episodesList) => {
     return seasonContestant(idToNumber)
      .then((contestantsList) => {
        response.json({ episodes: episodesList, contestants: contestantsList })
      })
    })
    .catch((error) => {
      response.status(500).json({ msg: error.message })
    })
})

// add a new episode
router.post('/episodes', (request, response) => {
  addNewEpisode(request.body)
    .then((addedEpisode) => {
      response.json(addedEpisode)     
    })
    .catch((error) => {
      response.status(500).json({ msg: error.message })
    })  
})

// delete an episode
router.delete('/episodes/:id', (request, response) => {
  
  const episodeId = Number(request.params.id)

  removeEpisode(episodeId)
  .then(() => {
    response.json({ msg: `Episode ${episodeId} deleted successfully` })     
  })
    .catch((error) => {
      response.status(500).json({ msg: error.message })
    })  
})

export default router
