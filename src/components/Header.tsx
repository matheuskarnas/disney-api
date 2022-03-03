import { Box, useMediaQuery, useTheme } from "@mui/material";
import logoImg from '../assets/images/disney-logo.png'

export const Header = () => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box
            height={smDown ? "8rem" : '10rem'}
            display='flex'
            justifyContent='center'
            pt='1.5rem'
        >
            <img
                src={logoImg}
                alt="logotipo da disney"
            />
        </Box>
    )
}
