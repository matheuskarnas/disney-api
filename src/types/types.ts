export type Character = {
  _id: number
  name: string
  imageUrl: string
  url: string
  films?: string[]
  shortFilms?: string[]
  tvShows?: string[]
  videoGames?: string[]
  parkAttractions?: string[]
  allies?: string[]
  enemies?: string[]
}

export type Infos = {
  count: number
  nextPage: string | null
  previousPage: string | null
  totalPages: number
}
