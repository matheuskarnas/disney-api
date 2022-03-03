import { TextField, Box, useTheme, useMediaQuery } from '@mui/material';
import { useState, useEffect } from 'react';

type InputSearchProps = {
    collectInput: (name: string) => void;
}

export const InputSearch = ({ collectInput }: InputSearchProps) => {
    const [nameForSearch, setNameForSearch] = useState('')

    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    // console.log('teste', smDown)

    let timer: ReturnType<typeof setTimeout>

    const newFindName = (value: string) => {
        if (timer !== undefined) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            setNameForSearch(value)
        }, 1000)
    }

    useEffect(() => {
        collectInput(nameForSearch)
    }, [nameForSearch])

    return (
        <Box
            mt='1.5rem'
            mx='2rem'
            sx={{ '& > :not(style)': { m: 1, width: '100%', }, }}
        >
            <TextField
                size="small"
                id="outlined-basic"
                label="Busca por nome"
                variant="filled"
                onChange={(e) => newFindName(e.target.value)}
                sx={{
                    background: '#4b4659',
                    borderRadius: '1rem 1rem 0 0',
                }}
            />
        </Box>
    )
}



