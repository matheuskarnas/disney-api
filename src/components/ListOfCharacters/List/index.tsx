import { AllDataOfCharters } from "../../../App"
import { CardCharacters } from "../../CardCharacters"

type ListProps = {
    characters: AllDataOfCharters[]
}

export const List = ({ characters }: ListProps) => {
    console.log(characters)
    return (
        <>  <h1>Titulo</h1>
            {characters.map(character => <CardCharacters character={character} />)}
        </>
    )

}