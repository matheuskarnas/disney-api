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
            sx={{
                '& > :not(style)': { m: 1, width: '100%' },
            }}
            // noValidate
            // autoComplete="off"
            // onSubmit={(e: React.SyntheticEvent) => {e.preventDefault()}}
        >
            <TextField
                id="outlined-basic"
                label="Busca por nome"
                variant="outlined"
                onChange={(e) => newFindName(e.target.value)}
                sx={{ background: 'gray', }}
            />
        </Box>
    )
}



