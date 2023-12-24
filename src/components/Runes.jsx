import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  Box,
  Typography,
  useTheme,
} from '@mui/material';
import config from '../../config';


function CustomProgress({ value, max }) {
  const theme = useTheme();
  const normalizedValue = (value / max) * 100;
  return (
    <Box display="flex" alignItems="center" width="100%">
      <Box width="100%" mr={1}>
        <LinearProgress
          variant="determinate"
          value={normalizedValue}
          sx={{
            height: '10px', // Increase height of progress bar
            borderRadius: theme.shape.borderRadius, // Use border radius from theme
            backgroundColor: theme.palette.grey[300], // Use theme color for background
            '.MuiLinearProgress-bar': {
              borderRadius: theme.shape.borderRadius, // Round the corners of the bar
              backgroundColor: `linear-gradient(145deg, #836FFF, #30cfd0)`, // Use theme colors for gradient
            },
          }}
        />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(normalizedValue)}%`}</Typography>
      </Box>
    </Box>
  );
}

function Runes() {
  const theme = useTheme(); // Access the theme values

  // Adjust the theme here if needed for color combinations
  const tableHeaderBgColor = theme.palette.primary.dark; // Darker shade for header
  const tableHeaderTextColor = theme.palette.common.white;
  const tableRowBgColor = theme.palette.primary.main; // Lighter shade for rows

  const data = [
    {
      name: config.token,
      progress: 100,
      totalSupply: 10240000000,
      mintedPercent: '100%',
      holders: 25515,
      deployBlock: 51268782,
    },
  ];

  return (
    <Box sx={{ margin: '30px' }}>
      <TableContainer component={Paper} elevation={4} sx={{ overflow: 'hidden', borderRadius: theme.shape.borderRadius }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow sx={{ background: 'linear-gradient(145deg, #836FFF, #30cfd0)', fontWeight: 'bold' }}>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Progress</TableCell>
              <TableCell>Total Supply</TableCell>
              <TableCell>Minted %</TableCell>
              <TableCell>Holders</TableCell>
              <TableCell>Deploy Block</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={row.name} sx={{ '&:nth-of-type(odd)': { background: 'linear-gradient(145deg, #836FFF, #30cfd0)' } }}>
                <TableCell component="th" scope="row">{index + 1}</TableCell>
                <TableCell>
                  <Typography color="white" fontWeight="bold">{row.name}</Typography>
                </TableCell>
                <TableCell>
                  <CustomProgress value={row.progress} max={100} />
                </TableCell>
                <TableCell>
                  <Typography color="white" fontWeight="bold">{row.totalSupply}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="white" fontWeight="bold">{row.mintedPercent}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="white" fontWeight="bold">{row.holders}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="white" fontWeight="bold">{row.deployBlock}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Runes;
