import db from './connection'

export function getAllContestantInfo() {
  return db('contestants').select()
}
