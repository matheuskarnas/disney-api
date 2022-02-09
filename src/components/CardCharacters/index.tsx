import { Box, Grid } from '@mui/material';
import { HomeCardProps } from '../../App';



export function CardCharacters({name, img, id}: HomeCardProps) {
  return (
    <Grid onClick={() => console.log('CardCharacters')} item maxWidth={'350px'}>
      <Box >
        <h1>{name}</h1>
        <img src={img} />
      </Box>
    </Grid>
  )
}
