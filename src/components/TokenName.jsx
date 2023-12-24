import { Typography, useTheme, Box } from '@mui/material';
import React from 'react';

function TokenName({ token, tokendesc }) {
    const theme = useTheme(); // Access the theme values

    return (
        <Box>
            <Typography
                variant="h4"
                sx={{
                    color: '#B0E0E6', // Set the text color to your primary color
                    textShadow: `1px 1px 2px #000`, // Add a subtle text shadow,
                    marginTop: '5px',
                    marginLeft: '15px'
                }}
            >
                {token}
            </Typography>
            <Typography
                sx={{
                    fontSize: '1rem', // Slightly larger text for emphasis
                    fontWeight: 'bold', // Make it bold to stand out more
                    color: '#B0E0E6', // A light shade that should stand out against darker backgrounds
                    textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow for depth
                    letterSpacing: '0.5px', // Adjust letter spacing for better readability
                    borderRadius: '5px', // Slightly rounded corners for the background,
                    margin: '15px'
                }}
            >
                {tokendesc}
            </Typography>

        </Box>
    );
}

export default TokenName;
