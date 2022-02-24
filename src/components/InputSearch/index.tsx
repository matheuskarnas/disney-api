import { TextField, Box } from '@mui/material';
import { useState, useEffect } from 'react';

export const InputSearch = () => {
    const [inputValue, setInputValue] = useState('')


    let time: NodeJS.Timeout 

    useEffect(() => {

        clearTimeout(time)
        
        time = setTimeout(() => {
            console.log('cath', inputValue);
        }, 1000)
        console.log('time', typeof time)
    }, [inputValue])

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                label="Busca por nome"
                variant="outlined"
                onChange={(e) => setInputValue(e.target.value)}
            />
        </Box>
    )
}

