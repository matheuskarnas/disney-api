import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import { AllDataOfCharters } from '../../App';
import BasicModal from '../Modal';


export function CardCharacters(character : AllDataOfCharters) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <BasicModal _id={character._id} handleClose={handleClose} isOpen={open} />
      <Grid
        onClick={() => handleOpen()}
        item
      >
        <Box
          bgcolor="background.paper"
          width='23rem'
          height='20rem'
          textAlign='center'
          sx={{ borderRadius: '12px' }}
        >
          <img
            src={character.imageUrl}
            style={{ width: '100%', maxHeight: '15rem',  borderRadius: '12px' }}
          />
          <h1>{character.name}</h1>
        </Box>
      </Grid>
    </>


  )
}
