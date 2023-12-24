import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = ({ name }) => {
  return (
    <AppBar position="static" color="primary" sx={{ width: '100%', height: '100px' }}>
      <Toolbar sx={{ height: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo with custom style */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontSize: '2.2rem',
            fontWeight: 'bold',
            color: '#B0E0E6', // A light shade that will stand out against the background
            fontFamily: "'Roboto Condensed', sans-serif",
            textShadow: '0 0 1px #ADD8E6, 0 1px 1px #ADD8E6',
            letterSpacing: '2px',
          }}
        >
          {name}
        </Typography>

        {/* Navigation Links with custom styles and hover effects */}
        {['Tokens', 'Marketplace', 'Launchpad', 'Bridge'].map((text) => (
          <Button
            key={text}
            color="inherit"
            sx={{
              fontSize: '1rem',
              margin: '0 12px',
              color: '#e3f2fd', // A lighter shade for the text
              textShadow: '0 0 5px #819ca9, 0 0 10px #819ca9', // A subtle glow effect
              transition: 'color 0.3s, text-shadow 0.3s', // Smooth transition for hover effect
              '&:hover': {
                color: '#bbdefb', // Color changes on hover
                textShadow: '0 0 10px #bbdefb, 0 0 20px #bbdefb', // Enhanced glow effect on hover
              },
            }}
          >
            {text}
          </Button>
        ))}

        {/* Custom wallet button */}
        {/* Ensure this button has styles to match the rest of your navbar */}
        <w3m-button />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
