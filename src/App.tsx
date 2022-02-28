import { Header } from './components/Header';
import { ListOfCharacters } from './components/ListOfCharacters';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useState } from "react"
import { responseApi } from './services/apiCall';
import { Footer } from './components/Footer';

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
  enemies?: string[];
}

export type ArrayOfCharactersProps = {
  arrayCharacters: AllDataOfCharters[];
}

export const baseUrl = 'https://api.disneyapi.dev/characters?page=1'


export const App = () => {
  const [characters, setCharacters] = useState<AllDataOfCharters[]>([])
  const [validation, setValidation] = useState<string>(baseUrl)

  useEffect(() => {
    if (validation !== undefined) {
      const teste = async () => {
        const [data, nextPage] = await responseApi(validation)
        setCharacters(prev => [...prev, ...data])
        setValidation(nextPage)
      }
      teste()
    }
  }, [validation])

  return (
    <Box
      bgcolor='secundary.main'
      color='primary.main'
      px='5rem'
      minHeight='100vh'
    >
      <Header />
      <h1>Tesxte</h1>
      <h1>{characters.length}</h1>      
      <ListOfCharacters characters={characters} />
      <Footer />
    </Box>
  )
}