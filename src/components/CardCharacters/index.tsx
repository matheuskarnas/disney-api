import { Box, Grid } from '@mui/material';
import { HomeCardProps } from '../../App';



export function CardCharacters({ name, _id, imageUrl }: HomeCardProps) {
  return (
    <Grid
      onClick={() => console.log('CardCharacters', name, _id)}
      item



    >
      <Box
        bgcolor="background.paper"
        width='23rem'
        height='20rem'
        textAlign='center'
        sx={{ border: 1, }}
      >
        <img
          src={imageUrl}
          style={{ width: '100%', maxHeight: '15rem' }} />
        <h1>{name}</h1>
      </Box>
    </Grid>
  )
}
