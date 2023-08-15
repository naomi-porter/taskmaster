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
