import { Header } from './components/Header'
import { ListOfCharacters } from './components/ListOfCharacters'
import { Box } from '@mui/material'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <Box bgcolor='secondary.main' color='primary.main' minHeight='100vh'>
      <Header />
      <ListOfCharacters />
      <Footer />
    </Box>
  )
}
