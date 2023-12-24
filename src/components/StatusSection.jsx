import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';

const StatCard = ({ title, value }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        textAlign: 'center',
        p: theme.spacing(3),
        borderRadius: theme.shape.borderRadius,
        background: 'linear-gradient(145deg, #6a5acd, #1e90ff)',
        boxShadow: `0 4px 12px ${theme.palette.primary.dark}`,
        color: theme.palette.common.white,
        '&:hover': {
          background: 'linear-gradient(145deg, #836FFF, #30cfd0)',
          boxShadow: `0 6px 16px ${theme.palette.primary.main}`,
          transform: 'translateY(-3px)',
          transition: 'all 0.3s ease',
        },
        transition: 'all 0.3s ease',
        width: '200px'
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1">
        {value}
      </Typography>
    </Box>
  );
};

const StatsSection = ({ holders, minted, totalSupply }) => {
  return (
    <Box
      sx={{
        width: '25%',
        my: 4,
        p: 2,
        // border: '0px solid #B0E0E6',
        borderRadius: '16px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        // backdropFilter: 'blur(3px)',
        // background: 'rgba(255, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column', // Ensure everything stacks vertically
        alignItems: 'center', // Center align the items
        gap: 3,
      }}
    >
      <StatCard title="Holders" value={holders} />
      <StatCard title="Minted" value={minted} />
      <StatCard title="Total Supply" value={totalSupply} />
    </Box>
  );
};

export default StatsSection;

