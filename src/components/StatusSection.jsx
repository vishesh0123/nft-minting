import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, useTheme } from '@mui/material';
import config from '../../config';
import abi from '../abi'
import { useContractReads } from 'wagmi'

const StatCard = ({ title, value }) => {
  const theme = useTheme();

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

const StatsSection = ({ state }) => {
  const theme = useTheme();

  const [minted, setMinted] = useState(0)
  const [total, setTotal] = useState(0)

  const wagmigotchiContract = {
    address: config.deployment,
    abi: abi,
  }

  const { data, isError, isLoading, isSuccess, refetch: refetchProjects } = useContractReads({
    contracts: [
      {
        ...wagmigotchiContract,
        functionName: 'counter',
      },
      {
        ...wagmigotchiContract,
        functionName: 'MAX_COUNT',
      },
    ],
  })

  useEffect(() => {
    refetchProjects?.();
    setMinted(Number(data[0].result))
    setTotal(Number(data[1].result))
    state(100 * Number(data[0].result) / Number(data[1].result))
  }, [isSuccess]);

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
      <StatCard title="Holders" value={25837} />
      <StatCard title="Minted" value={minted} />
      <StatCard title="Total Supply" value={total} />
    </Box>
  );
};

export default StatsSection;
