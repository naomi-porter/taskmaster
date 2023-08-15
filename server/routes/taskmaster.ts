import { Router } from "express";
import { getAllSeasons, seasonEpisodes, seasonContestant } from "../db/exportDBInfo";

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

export default router
