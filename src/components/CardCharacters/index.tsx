import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import { HomeCardProps } from '../../App';
import BasicModal from '../Modal';


export function CardCharacters({ name, _id, imageUrl }: HomeCardProps) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);  

  return (
    <Grid
      onClick={() => handleOpen()}      
      item
    >
      <Box
        bgcolor="background.paper"
        width='23rem'
        height='20rem'
        textAlign='center'
        sx={{ border: 1, }}

      >
        <BasicModal _id={_id} handleClose={handleClose} isOpen={open}/>
        <img
          src={imageUrl}
          style={{ width: '100%', maxHeight: '15rem' }} />
        <h1

        >{name}</h1>
      </Box>
    </Grid>

  )
}
