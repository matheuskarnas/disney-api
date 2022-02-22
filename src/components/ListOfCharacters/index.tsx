import { Grid, Pagination, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import { AllDataOfCharters } from "../../App"
import { CardCharacters } from "../CardCharacters"
import { dataProvisoria } from '../../assets/preData'

type ListOfCharactersprops = {
    characters: AllDataOfCharters[]
}

export const ListOfCharacters = ({ characters }: ListOfCharactersprops) => {
    const [page, setPage] = useState(0);
    const [amountPerPage, setAmountPerPage] = useState(50);
    const [dataForRender, setDataForRender] = useState<AllDataOfCharters[]>(dataProvisoria)

    useEffect(() => {
        if (page === 0) { return }
        const selectDataForRender = () => {
            const arrTemporary: AllDataOfCharters[] = []
            for (let i = (page - 1) * amountPerPage; i < amountPerPage * page && i < 7438; i++) {
                arrTemporary.push(characters[i])
                console.log("for", arrTemporary)
            }
            setDataForRender(arrTemporary)
        }
        selectDataForRender()
    }, [page])

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => setPage(value);

    return (
        <>
            <Stack
                spacing={2}
                mb={15}
            >
                <Pagination
                    count={149}
                    page={page}
                    onChange={handleChange}
                    color="secondary"
                />
            </Stack>
            {
                dataForRender.map((character) => <CardCharacters character={character} />)
            }
        </>
    )
}