import { Box, useMediaQuery, useTheme } from "@mui/material"

export const Footer = () => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box
            height={smDown ? '3rem' : '4.5rem'}
            width='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
            bgcolor='#000000d3'
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
            }}

        >
            <h2 style={{ fontSize:smDown ? '0.60rem' : '0.8rem'  }}>
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