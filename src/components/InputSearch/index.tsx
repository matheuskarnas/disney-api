import { TextField, Box } from '@mui/material';
import { useState, useEffect } from 'react';

type InputSearchProps = {
    collectInput: (name: string) => void;
}

export const InputSearch = ({ collectInput }: InputSearchProps) => {
    const [nameForSearch, setNameForSearch] = useState('')

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
            mt='5rem'
            sx={{ '& > :not(style)': { m: 1, width: '100%', }, }}
        // noValidate
        // autoComplete="off"
        // onSubmit={(e: React.SyntheticEvent) => {e.preventDefault()}}
        >
            <TextField
                id="outlined-basic"
                label="Busca por nome"
                variant="filled"
                onChange={(e) => newFindName(e.target.value)}
                sx={{
                    background: '#4b4659',
                    borderRadius: '1rem 1rem 0 0'
                }}
            />
        </Box>
    )
}



