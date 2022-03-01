import { Box } from "@mui/material";
import logoImg from '../assets/images/disney-logo.png'

export const Header = () => {

    return (
        <Box
            height="10rem"
            display='flex'
            justifyContent='center'
            pt='1.5rem'
        >
            <img
                style={{
                    maxHeight: '10rem'
                }}
                src={logoImg}
                alt="logotipo da disney"
            />
        </Box>
    )
}
