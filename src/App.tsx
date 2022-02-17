import { Header } from './components/Header';
import { ListOfCharacters } from './components/ListOfCharacters';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useState } from "react"

export type AllDataOfCharters = {
  _id: number
  name: string;
  imageUrl: string;
  url: string;
  films?: string[];
  shortFilms?: string[];
  tvShows?: string[];
  videoGames?: string[];
  parkAttractions?: string[];
  allies?: string[];
  lenemiesimit?: string[];
}

export type ArrayOfCharactersProps = {
  arrayCharacters: AllDataOfCharters[];
}

export const baseUrl = 'https://api.disneyapi.dev/characters?page=1'

export const App = () => {
  const [characters, setCharacters] = useState<ArrayOfCharactersProps[]>([])
  const [validation, setValidation] = useState<string | undefined>(baseUrl)

  useEffect((url = validation) => {
    if (url !== undefined) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const collectionCharacters = data.data.map((character: AllDataOfCharters) =>  setCharacters({character}) )
          setValidation(data.nextPage)
          collectionCharacters
          // setCharacters([...characters, collectionCharacters])          
        })
    }
    console.log('fetch', characters)
  }, [validation])

  return (
    <Box
      bgcolor='secundary.main'
      color='primary.main'
    >
      {/* <Header /> */}
      <h1>Tesxte</h1>
      <h1>{characters.length}</h1>
      <ListOfCharacters arrayCharacters={characters} />
    </Box>
  )
}