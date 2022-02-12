import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import { HomeCardProps } from '../../App';
import BasicModal from '../Modal';


export function CardCharacters({ name, _id, imageUrl }: HomeCardProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <BasicModal _id={_id} handleClose={handleClose} isOpen={open} />
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
            src={imageUrl}
            style={{ width: '100%', maxHeight: '15rem',  borderRadius: '12px' }}
          />
          <h1>{name}</h1>
        </Box>
      </Grid>
    </>


  )
}
