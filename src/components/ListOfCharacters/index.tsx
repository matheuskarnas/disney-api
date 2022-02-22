import { Grid, Pagination, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import { AllDataOfCharters } from "../../App"
import { CardCharacters } from "../CardCharacters"
import { List } from "./List"

type ListOfCharactersprops = {
    characters: AllDataOfCharters[]
}

export const ListOfCharacters = ({ characters }: ListOfCharactersprops) => {
    const [page, setPage] = useState(1);
    const [amountPerPage, setAmountPerPage] = useState(50);
    const [dataForRender, setDataForRender] = useState<AllDataOfCharters[]>([])

    useEffect(() => {
        setDataForRender([])
        let dataTemporaria: AllDataOfCharters[] = []
        for (let i = (page - 1) * amountPerPage; i < amountPerPage * page; i++) {
            dataTemporaria.push(characters[i])
        }
        setDataForRender(dataTemporaria)

    }, [page])

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    // const RenderPage = (data: AllDataOfCharters[]) => {
    //     data.map((character) => {
    //         console.log(character)
    //     })
    // }

    return (
        <>
            <Stack
                spacing={2}
                mb={15}
            >
                <Pagination
                    count={characters.length || 1}
                    page={page}
                    onChange={handleChange}
                    color="secondary"
                />
            </Stack>
            {/* <List characters={dataForRender} /> */}
        </>
    )
}


//  dataForRender.map(
//     (character: AllDataOfCharters) =>
//         <CardCharacters  
//         key={character._id}                            
//             character={character}
//         />
//  )