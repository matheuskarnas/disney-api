import { Grid, Pagination, Stack as MyPagination, useTheme } from "@mui/material"
import { useEffect, useState } from "react"
import { AllDataOfCharters } from "../App"
import { CardCharacters } from "./CardCharacters"
import { dataProvisoria } from '../assets/preData'
import { InputSearch } from "./InputSearch"

type ListOfCharactersprops = {
    characters: AllDataOfCharters[]
}

export const ListOfCharacters = ({ characters }: ListOfCharactersprops) => {
    const [page, setPage] = useState(0);
    const [amountPerPage, setAmountPerPage] = useState(50);
    const [filteredData, setFilteredData] = useState<AllDataOfCharters[]>([])
    const [dataForRender, setDataForRender] = useState<AllDataOfCharters[]>(dataProvisoria)

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
        if (filteredData.length > amountPerPage) {
            paginationData()

        } else {
            setDataForRender(filteredData)
        }
    }, [filteredData])

    const theme = useTheme()
    console.log('teste', theme.breakpoints)
    return (
        <>
            <InputSearch collectInput={collectInput} />
            <MyPagination
                spacing={2}
                mt='1.25rem'
                display='flex'
                justifyContent="center"
                direction="row"
                alignItems="center"
            >
                <Pagination
                    size="small"
                    siblingCount={0}
                    count={Math.ceil(filteredData.length / amountPerPage)}
                    page={page}
                    onChange={handleChange}
                    color="secondary"
                />
            </MyPagination>

            <Grid
                pb='3.1rem'
                px='1rem'
                mt='0.5rem'
                
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                columnSpacing="1rem"
                rowSpacing="1.75rem"
                
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