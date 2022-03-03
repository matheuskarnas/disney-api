import { Box } from "@mui/material";
import logoImg from '../assets/images/disney-logo.png'

export const Header = () => (
    <Box
        height="8rem"
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

