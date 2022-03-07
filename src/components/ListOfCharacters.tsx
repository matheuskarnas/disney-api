import { Box, Grid, Pagination, Stack as MyPagination, useMediaQuery, useTheme } from "@mui/material"
import { useEffect, useState } from "react"
import { AllDataOfCharters } from "../App"
import { CardCharacters } from "./CardCharacters"
import { dataProvisoria } from '../assets/preData'
import { InputSearch } from "./InputSearch"
import SearchOffOutlinedIcon from '@mui/icons-material/SearchOffOutlined';

type ListOfCharactersprops = {
    characters: AllDataOfCharters[]
}

export const ListOfCharacters = ({ characters }: ListOfCharactersprops) => {
    const [page, setPage] = useState(0);
    const [amountPerPage, setAmountPerPage] = useState(50);
    const [filteredData, setFilteredData] = useState<AllDataOfCharters[]>([])
    const [dataForRender, setDataForRender] = useState<AllDataOfCharters[]>(dataProvisoria)

    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const lgDown = useMediaQuery(theme.breakpoints.down('lg'))


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
        setPage(1)
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



    return (
        <>
            <InputSearch collectInput={collectInput} />
            {filteredData.length > amountPerPage
                ? <MyPagination
                    spacing={2}
                    mt='1.25rem'
                    display='flex'
                    justifyContent="center"
                    direction="row"
                    alignItems="center"
                >
                    <Pagination
                        size={smDown ? "small" : 'medium'}
                        siblingCount={smDown ? 0 : lgDown ? 1 : 2}
                        count={Math.ceil(filteredData.length / amountPerPage)}
                        page={page}
                        onChange={handleChange}
                        color="secondary"
                    />
                </MyPagination>
                : null
            }

            <Box
                width='100%'
                maxWidth='1110px'
                px={lgDown ? '5rem' : 0}
                mx='auto'

            >
                <Grid
                    pb={smDown ? '3.1rem' : '4.6rem'}
                    px='auto'
                    mt='0.5rem'
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    columnSpacing={smDown ? '1rem' : '3rem'}
                    rowSpacing="1.75rem"
                >
                    {dataForRender.length === 0
                        ? <Box alignItems='center' mt={'2.5rem'}>
                            <SearchOffOutlinedIcon sx={{
                                height: lgDown ? '100px' : '150px',
                                width: lgDown ? '100px' : '150px',
                            }} />
                        </Box>
                        : dataForRender.map((character) =>
                            <CardCharacters
                                key={character._id}
                                character={character}
                            />
                        )
                    }
                </Grid>
            </Box>
        </>
    )
}