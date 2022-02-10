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
            columnSpacing="1rem"
            rowSpacing="1rem"
            px={4}
            
        >
            {arrayCharacters.map(({ _id, name, imageUrl }) => (
                <CardCharacters
                    _id={_id}
                    name={name}
                    imageUrl={imageUrl}
                />
            ))}
        </Grid>
    )
} 