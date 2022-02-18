import { Grid } from "@mui/material"
import { AllDataOfCharters } from "../../App"
import { CardCharacters } from "../CardCharacters"

type ListOfCharactersprops = {
    arrayCharacters: AllDataOfCharters[]
}

export const ListOfCharacters = ({ arrayCharacters }: ListOfCharactersprops) => (
    <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        columnSpacing="1rem"
        rowSpacing="1rem"
        px={4}
    >
        {arrayCharacters.map((character: AllDataOfCharters) => (
            <CardCharacters
                character={character}
            />
        ))}
    </Grid>
)
