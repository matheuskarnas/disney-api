import { Box, Grid } from "@mui/material"
import { ArrayOfCharactersProps } from "../../App"
import { CardCharacters } from "../CardCharacters"


export const ListOfCharacters = () => {
    console.log('teste')
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            columnSpacing={25}
            px={'10rem'}
        >
            <CardCharacters _id={1} name="Olu Mel" imageUrl="https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png" />
        </Grid>
    )
} 