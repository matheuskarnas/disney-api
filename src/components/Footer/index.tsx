import { Box } from "@mui/material"

export const Footer = () => {
    return (
        <Box
            height='5rem'
            width='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
            }}

        >
            <h2 style={{ fontSize: '0.75rem' }}>
                Projeto feito utilizando &nbsp;
                <a
                    href='https://disneyapi.dev/docs'
                    target='_blank'
                >
                    API disney
                </a>
            </h2>
        </Box >
    )
}