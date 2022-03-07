import { TextField, Box, useTheme, useMediaQuery } from '@mui/material';
import { useState, useEffect } from 'react';

type InputSearchProps = {
    collectInput: (name: string) => void;
}

export const InputSearch = ({ collectInput }: InputSearchProps) => {
    const [nameForSearch, setNameForSearch] = useState('')

    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

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
            mt={smDown ? '1.5rem' : '3rem'}
            sx={{
                mx: 'auto',
                width: '70%',
                maxWidth: '900px'
            }}
        >
            <TextField
                fullWidth={true}
                size={smDown ? "small" : "medium"}
                id="outlined-basic"
                label="Busca por nome"
                variant="filled"
                onChange={(e) => newFindName(e.target.value)}
                sx={{
                    background: '#4b4659',
                    borderRadius: '1rem 1rem 0 0',
                }}
            />
        </Box >


    )
}



