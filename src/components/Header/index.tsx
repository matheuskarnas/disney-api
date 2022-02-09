import { Box, CardMedia } from "@mui/material";
import logoImg from '../../assets/images/disney-logo.png'

export const Header = () => {

    return (
        <Box
            height="5rem"
        >
            <CardMedia
                component="img"
                height="28px"
                width="2rem"
                image={logoImg}
                alt='Logo da Disney'
            />
        </Box>
    )
}
