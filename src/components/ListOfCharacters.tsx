import { Grid, Pagination, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import { AllDataOfCharters } from "../App"
import { CardCharacters } from "./CardCharacters"
import { dataProvisoria } from '../assets/preData'
import { InputSearch } from "./InputSearch"

type ListOfCharactersprops = {
    characters: AllDataOfCharters[]
}

export const ListOfCharacters = ({ characters/* todos os characters */ }: ListOfCharactersprops) => {
    const [page, setPage] = useState(0); // pagina atual
    const [amountPerPage, setAmountPerPage] = useState(50); // numero max de intens renderizados por vez
    const [filteredData, setFilteredData] = useState<AllDataOfCharters[]>([]) // Toda info que pode ser renderizada
    const [dataForRender, setDataForRender] = useState<AllDataOfCharters[]>(dataProvisoria) // exata informação que será renderizada

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => setPage(value);

    const paginationData = (n?: number) => {
        if (n === 0) { setPage(1) }

        const arrTemporary: AllDataOfCharters[] = []
        for (let i = (page - 1) * amountPerPage; i < amountPerPage * page && i < filteredData.length; i++) {
            arrTemporary.push(filteredData[i])
        }
        setDataForRender(arrTemporary)
    }

    useEffect(() => {
        console.log('Pagination', page)
        paginationData(page)
    }, [page])

    const collectInput = (name: string) => {
        if (name === '') {
            if (characters.length > 0) {
                setFilteredData(characters)
            } else {
                setFilteredData(dataProvisoria)
            }
        } else {
            const arrTemporary: AllDataOfCharters[] = []
            characters.map(character => {
                if (character.name.search(name) >= 0)
                    arrTemporary.push(character)
            })
            setFilteredData(arrTemporary)
        }
    }

    useEffect(() => {
        console.log("filteredData.length", filteredData.length)
        if (filteredData.length > amountPerPage) {
            paginationData()

        } else {
            setDataForRender(filteredData)
        }
    }, [filteredData])

    // console.log(filteredData)

    return (
        <>
            <InputSearch collectInput={collectInput} />
            <Stack
                spacing={2}
                mt='2rem'
                display='flex'
                justifyContent="center"
                direction="row"
                alignItems="center"
            >
                <Pagination
                    count={Math.ceil(filteredData.length / amountPerPage)}
                    page={page}
                    onChange={handleChange}
                    color="secondary"
                />
            </Stack>

            <Grid
                pb='5.1rem'
                mt='2rem'
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                columnSpacing="1rem"
                rowSpacing="1rem"
                px={4}
            >
                {dataForRender.length === 0
                    ? <h1>No Data</h1>
                    : dataForRender.map((character) =>
                        <CardCharacters
                            key={character._id}
                            character={character}
                        />
                    )
                }
            </Grid>
        </>
    )
}