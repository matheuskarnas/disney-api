import { Box, Slider, Stack } from "@mui/material";
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

export const Header = () => {
    
    return (
        <>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <VolumeDown />
                <Slider aria-label="Volume" value={2}  />
                <VolumeUp />
            </Stack>
            <Slider  defaultValue={30} aria-label="Disabled slider" />
        </>
    )
}
