import { Router } from "express";
import { getAllContestantInfo } from '../db/contestantsDB'

const router = Router()

router.get('/', (request, response) => {
    getAllContestantInfo()
      .then((contestantsInfoFromDB) => {
        response.json(contestantsInfoFromDB)
      })
      .catch((error) => {
        response.status(500).json({ msg: error.message })
      })
})

export default router
