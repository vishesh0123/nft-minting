import React from 'react';
import { AppBar, Toolbar, Typography, Button, CssBaseline, useScrollTrigger, Slide, Box } from '@mui/material';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = ({ name }) => {
  return (
    <>
      <CssBaseline />
      <HideOnScroll>
        <AppBar position="fixed" color="primary" sx={{ width: '100%', height: '100px' }}>
          <Toolbar sx={{ height: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Logo and other components */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontSize: '2.2rem',
                fontWeight: 'bold',
                color: '#B0E0E6',
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
      </HideOnScroll>
      {/* This Box acts as a spacer so content isn't hidden behind the AppBar */}
      <Box sx={{ height: '100px' }} />
    </>
  );
};

export default Navbar;
