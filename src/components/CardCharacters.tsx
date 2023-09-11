import { Box, Grid } from '@mui/material'
import { useState } from 'react'
import { CharacterModal } from './Modal'
import { Character } from '../types/types'

type CardCharactersProps = {
  character: Character
}

export const CardCharacters = ({ character }: CardCharactersProps) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <CharacterModal
        character={character}
        handleClose={handleClose}
        isOpen={open}
      />
      <Grid onClick={() => handleOpen()} item>
        <Box
          bgcolor='background.paper'
          minWidth='300px'
          height='20rem'
          textAlign='center'
          display='flex'
          sx={{
            background: '#292631',
            borderRadius: '12px',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
          <img
            src={character.imageUrl}
            alt={`personagem de nome ${character.name}`}
            style={{
              width: '100%',
              maxHeight: '15rem',
              borderRadius: ' 12px 12px 0 0'
            }}
          />
          <h1 style={{ fontSize: '1.25rem' }}> {character.name} </h1>
        </Box>
      </Grid>
    </>
  )
}
