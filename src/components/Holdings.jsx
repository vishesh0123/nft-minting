import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';




function Holdings() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                p: theme.spacing(2),
                display: 'inline-block', // So the box wraps around the text tightly
                border: `2px solid ${theme.palette.primary.main}`, // Solid border using the primary color
                boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.5)', // Shadow for depth
                background: 'linear-gradient(145deg, #6a5acd, #1e90ff)', // Gradient background
                '&:hover': {
                    animation: 'jelly 0.5s', // Bouncy animation on hover
                },
                margin: '50px'
            }}
        >
            <Typography
                sx={{
                    color: 'white', // White text color
                    fontWeight: 'bold', // Bold text
                    textShadow: '0px 0px 6px rgba(0, 0, 0, 0.3)', // Text shadow for readability
                    transition: 'transform 0.5s', // Smooth transition for the hover effect
                    '&:hover': {
                        transform: 'scale(1.05)', // Slightly increase size on hover
                    },
                }}
            >
                My Runes
            </Typography>
        </Box>
    )
}

export default Holdings