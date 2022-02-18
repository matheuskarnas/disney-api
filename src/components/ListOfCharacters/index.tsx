import { Grid } from "@mui/material"
import { AllDataOfCharters } from "../../App"
import { CardCharacters } from "../CardCharacters"

type ListOfCharactersprops = {
    characters: AllDataOfCharters[]
}

export const ListOfCharacters = ({ characters }: ListOfCharactersprops) => (
    <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        columnSpacing="1rem"
        rowSpacing="1rem"
        px={4}
    >
        {characters.map((character: AllDataOfCharters) => (
            <CardCharacters
                character={character}
            />
        ))}
    </Grid>
)
