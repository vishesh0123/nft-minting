import React from 'react';
import { Box, Typography, Paper, useTheme } from '@mui/material';
import config from '../../config';
import { useContractRead } from 'wagmi'
import abi from '../abi'
import { useWeb3Modal } from '@web3modal/wagmi/react'

const StatCard = ({ title, value }) => {
  const theme = useTheme();

  const {
    data,
    isError,
    isLoading,
    isSuccess,
    refetch: refetchProjects,
  } = useContractRead({
    address: config.deployment,
    abi: abi,
    functionName: "_inscription",
    onSuccess(data) {
      console.log(data);
    },
    onerror(error) {
      console.log(error);
    },
  });

  return (
    <Paper
      elevation={4} // Elevation for depth
      sx={{
        textAlign: 'center',
        p: theme.spacing(3),
        borderRadius: theme.shape.borderRadius,
        background: 'linear-gradient(145deg, #6a5acd, #1e90ff)',
        color: theme.palette.common.white,
        '&:hover': {
          boxShadow: `0 6px 20px ${theme.palette.primary.dark}`, // Subtle hover effect
        },
        width: '200px',
        cursor: 'pointer', // Indicate it's interactive
        transition: 'box-shadow 0.3s ease', // Smooth transition for the hover effect
      }}
    >
      <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
        {value}
      </Typography>
    </Paper>
  );
};

const StatsSection = ({ holders, minted, totalSupply }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '400px',
        mx: 'auto', // Horizontally center the stats section
        my: theme.spacing(4), // Margin top and bottom
        p: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: theme.spacing(3),
        // background: theme.palette.background.paper, // Adjust this color to fit your theme
      }}
    >
      <StatCard title="Holders" value={holders} />
      <StatCard title="Minted" value={minted} />
      <StatCard title="Total Supply" value={totalSupply} />
    </Box>
  );
};

export default StatsSection;
