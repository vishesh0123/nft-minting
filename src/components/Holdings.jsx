import React, { useEffect, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { usePublicClient } from 'wagmi'
import config from '../../config';
import { ethers, getAddress } from 'ethers';
import { useAccount } from 'wagmi'
import HoldingCard from './HoldingCard';




function Holdings() {
    const theme = useTheme();
    const provider = usePublicClient();
    const [logs, setLogs] = useState([]);
    const { address, isConnecting, isDisconnected } = useAccount()

    useEffect(() => {
        const fetchLogs = async () => {
            // const normalizedAddress = getAddress(address).slice(2);
            const normalizedAddress = getAddress("0x76A3a95a50F0a12e6E053c4b40a92C168Fc0e97b").slice(2);

            // Pad the address to 32 bytes
            const paddedAddress = normalizedAddress.padStart(64, '0'); // 64 hex characters = 32 bytes
            console.log(paddedAddress);

            const filter = {
                address: config.deployment,
                topics: ["0xa9b52a0a385a0f4661bf0036806b0a6054494184a759463e02f802fdbf0254c7", paddedAddress], // Filter by the event signature
            };

            try {
                const eventLogs = await provider.getLogs(filter);
                console.log(eventLogs);
                setLogs(eventLogs); // Update your state with the logs
            } catch (error) {
                console.error('Error fetching logs:', error);
            }
        };


        fetchLogs()
        console.log("fetched logs");

    }, [provider, address, isDisconnected]);


    return (
        <>
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
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: theme.spacing(1), // Adjust the spacing as needed
                    justifyContent: 'center',
                    // Add padding to the container to prevent cards from touching the edges
                    padding: theme.spacing(2),
                    maxWidth: '1000px'
                }}
            >
                {logs.length !== 0 && logs.map((log, index) => (
                    <Box
                        key={index}
                        sx={{
                            flexGrow: 1,
                            flexShrink: 1,
                            // maxWidth: 'calc(20% - 50px)', // Adjust the percentage and subtract the gap size
                            // minWidth: '150px', // Adjust minimum width as needed
                            // Ensure padding and borders are included in the width calculation
                            boxSizing: 'border-box',
                        }}
                    >
                        <HoldingCard log={log} /> {/* Pass log or other necessary props */}
                    </Box>
                ))}
            </Box>

        </>
    )
}

export default Holdings