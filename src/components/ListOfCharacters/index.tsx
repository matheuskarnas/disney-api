import { Box, Grid } from "@mui/material"
import { ArrayOfCharactersProps } from "../../App"
import { CardCharacters } from "../CardCharacters"



export const ListOfCharacters = ({ arrayCharacters }: ArrayOfCharactersProps) => {
    console.log('ListOfCharacters', arrayCharacters)
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            columnSpacing={25}
            px={'10rem'}
        >
            {arrayCharacters.map(({_id, name, imageUrl}) => (
                <CardCharacters
                    _id={_id}
                    name={name}
                    imageUrl={imageUrl}
                />))}
            <CardCharacters _id={1} name="Olu Mel" imageUrl="https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png" />
        </Grid>
    )
} 