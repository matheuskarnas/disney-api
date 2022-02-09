import { Header } from './components/Header';
import { ListOfCharacters } from './components/ListOfCharacters';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useState } from "react"

type Limit = {
  limit: number
}

export type HomeCardProps = {
  id?: number,
  name: string,
  img: string
}

export type ArrayOfCharactersProps = {
  allCharacters: HomeCardProps[]
}

export const App = () => {

  const baseApi = 'https://api.disneyapi.dev/characters/'

  const [characters, setCharacters] = useState<ArrayOfCharactersProps[]>([])

  useEffect(() => {
    fetch(baseApi)
      .then(response => response.json())
      .then(data => setCharacters(data.data));
  }, [])

  console.log(characters)
  return (
    <Box
      bgcolor='background.paper'
      color='primary.main'
    >
      <Header />
      <ListOfCharacters />
    </Box>
  )
}