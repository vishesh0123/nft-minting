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

function CustomProgress({ value, max }) {
  const normalizedValue = (value / max) * 100;
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress
          variant="determinate"
          value={normalizedValue}
          sx={{
            '.css-1kjriw0-MuiLinearProgress-bar1': {
              background: `linear-gradient(145deg, #836FFF, #30cfd0)`, // Gradient for the progress bar
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

  // Your data could be fetched or passed in as props.
  const data = [
    {
      name: 'POOK',
      progress: 96.45,
      totalSupply: 10240000000,
      mintedPercent: '96.45%',
      holders: 25516,
      deployBlock: 51268782,
    },
  ];

  return (
    <Box sx={{ 'margin': '30px' }}>
      <TableContainer component={Paper} sx={{ background: 'linear-gradient(145deg, #6a5acd, #1e90ff)' }}>
        <Table aria-label="customized table">
          <TableHead sx={{ background: 'black', color: 'white' }}>
            <TableRow>
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
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">{index + 1}</TableCell>
                <TableCell>
                  <Typography color="white">{row.name}</Typography>
                </TableCell>
                <TableCell>
                  <CustomProgress value={row.progress} max={100} />
                </TableCell>
                <TableCell>
                  <Typography color="white">{row.totalSupply.toLocaleString()}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="white">{row.mintedPercent}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="white">{row.holders.toLocaleString()}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="white">{row.deployBlock.toLocaleString()}</Typography>
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
