import React from 'react';
import { AppBar, Toolbar, Typography, Button, CssBaseline, useScrollTrigger, Slide, Box } from '@mui/material';
import { Snackbar, Alert } from '@mui/material';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = ({ name, state }) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const handleClick = (text) => {
    if (['Marketplace', 'Bridge', 'Defi'].includes(text)) {
      setMessage(`${text} is coming soon!`);
      setOpen(true);
    } else {
      state({ route: true, path: text })
    }
    // Add more logic here if needed for other buttons
  };

  // Closes the snackbar
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

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
                fontSize: '2.4rem',
                fontWeight: 'bold',
                color: '#B0E0E6',
                fontFamily: "'Roboto Condensed', sans-serif",
                textShadow: '0 0 1px #ADD8E6, 0 1px 1px #ADD8E6',
                letterSpacing: '2px',
                marginLeft:'15px'
              }}
            >
              {name}
            </Typography>
            {/* Navigation Links with custom styles and hover effects */}
            {['Runes', 'Marketplace', 'Launchpad', 'Bridge', 'Defi'].map((text) => (
              <Button
                key={text}
                color="inherit"
                sx={{
                  fontSize: '1.2rem',
                  margin: '0 10px',
                  color: '#e3f2fd', // A lighter shade for the text
                  textShadow: '0 0 5px #819ca9, 0 0 10px #819ca9', // A subtle glow effect
                  transition: 'color 0.3s, text-shadow 0.3s', // Smooth transition for hover effect
                  '&:hover': {
                    color: '#bbdefb', // Color changes on hover
                    textShadow: '0 0 10px #bbdefb, 0 0 20px #bbdefb', // Enhanced glow effect on hover
                  },

                }}
                onClick={() => handleClick(text)}
              >
                {text}
              </Button>
            ))}

            {/* Snackbar for displaying the coming soon message */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                {message}
              </Alert>
            </Snackbar>

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
