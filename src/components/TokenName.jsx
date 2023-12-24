import { Typography, useTheme , Box } from '@mui/material';
import React from 'react';

function TokenName() {
    const theme = useTheme(); // Access the theme values

    return (
        <Box>
            <Typography
                variant="h4"
                sx={{
                    color: '#B0E0E6', // Set the text color to your primary color
                    textShadow: `1px 1px 2px #000`, // Add a subtle text shadow,
                    marginTop:'5px'
                }}
            >
                $POOK
            </Typography>
            <Typography>
                The first runes protocol is deployed on the polygon network, innovatively defining the inscription standard.
            </Typography>
        </Box>
    );
}

export default TokenName;
