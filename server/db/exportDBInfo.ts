import db from './connection'

export function getAllSeasons() {
  return db('seasons').select()
}

// specific season's episodes
export function seasonEpisodes(id: number) {
  return db('episodes').select().where('season', id)
}

// specific season's contestants
export function seasonContestant(id: number) {
  return db('contestants').select().where('season', id)
}

interface addNewEpisodeToDB {
  season: number,
  title: string,
  image: string
}

// add a "new episode"
export function addNewEpisode(episodeToAdd: addNewEpisodeToDB) {
  return db('episodes')
    .insert(episodeToAdd)
    .then((ids) => {
      const [id] = ids;
      return db('episodes').where({ id }).first();
    })
}

// remove an episode
export function removeEpisode(id: number){
  return db('episodes').where('id', id).first().delete()
}

interface imageObject {
  image: string
}

// update episode details
export function updateEpisode(id: number, imageObject: imageObject){
  return db('episodes')
    .where('id', id)
    .update(imageObject)
    .then(() => {
      return db('episodes').where({ id }).first();
    })
}

