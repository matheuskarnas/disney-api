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

export const App = () => {

  const baseApi = 'https://api.disneyapi.dev/characters/'

  const [characters, setCharacters] = useState<ArrayOfCharactersProps[]>([])

  useEffect(() => {
    fetch(baseApi)
      .then(response => response.json())
      .then(data => {
        const mappedData = data.data.map(({ _id, name, imageUrl }: HomeCardProps) => ({ _id, name, imageUrl }))
        setCharacters(mappedData)
      });
  }, [])

  console.log(characters)
  return (
    <Box
      bgcolor='background.paper'
      color='primary.main'
    >
      {/* <Header /> */}
      <ListOfCharacters />
    </Box>
  )
}