import { Header } from './components/Header';
import { ListOfCharacters } from './components/ListOfCharacters';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useState } from "react"

type Limit = {
  limit: number
}

export type HomeCardProps = {
  _id: number;
  name: string;
  imageUrl: string
}

export type ArrayOfCharactersProps = {
  arrayCharacters: HomeCardProps[];
}

export const baseUrl = 'https://api.disneyapi.dev/characters/'

export const App = () => {
  const [characters, setCharacters] = useState<ArrayOfCharactersProps[]>([])

  useEffect(() => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(data => {
        const mappedData = data.data.map(({ _id, name, imageUrl }: HomeCardProps) => ({ _id, name, imageUrl }))
        setCharacters(mappedData)
      });
  }, [])


  console.log('characters', characters)
  return (
    <Box
      bgcolor='secundary.main'
      color='primary.main'
    >
      {/* <Header /> */}
      <ListOfCharacters arrayCharacters={characters} />
    </Box>
  )
}