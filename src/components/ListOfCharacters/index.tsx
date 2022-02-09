import { Box, Grid } from "@mui/material"
import { ArrayOfCharactersProps } from "../../App"
import { CardCharacters } from "../CardCharacters"
import { HomeCardProps } from '../../App'


export const ListOfCharacters = () => {

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            columnSpacing={25}
            px={'10rem'}
        >
            <CardCharacters name="Olu Mel" img="https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png" />
            <CardCharacters name="Olu Mel" img="https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png" />
            <CardCharacters name="Olu Mel" img="https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png" />
            <CardCharacters name="Olu Mel" img="https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png" />
            <CardCharacters name="Olu Mel" img="https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png" />
            <CardCharacters name="Olu Mel" img="https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png" />
        </Grid>
    )
} 