import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 3 }}>
      <Container maxWidth="lg">
        <Typography variant="body1" color="text.secondary" align="center">
          © {new Date().getFullYear()} XRC.Market
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
