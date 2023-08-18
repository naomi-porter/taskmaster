export interface seasonsObjectsInterface {
  id: number
  year: number
  image: string
}

export interface seasonData {
  episodes: [
    {
      id: number
      season: number
      title: string
      image: string
    },
  ],

  contestants: [
    {
      id: number
      name: string
      season: number
      final_score: number
      image: string
    },
  ]
}
