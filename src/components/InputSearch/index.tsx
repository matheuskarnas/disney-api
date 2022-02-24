import { TextField, Box } from '@mui/material';
import { useState, useEffect } from 'react';

export const InputSearch = () => {
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
        // if (timer !== undefined) {
        //     console.log('first timer', timer)
        //     console.log('secound timer', timer)
        // }
        // timer = setTimeout(() => {
        // }, 1000)
        console.log('cath', nameForSearch);

    }, [nameForSearch])

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
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



