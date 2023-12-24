import React from 'react';
import { AppBar, Toolbar, Typography, Button, CssBaseline, useScrollTrigger, Slide, Box, IconButton, Snackbar, Alert } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import config from '../../config';


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
            <Button onClick={() => { state({ route: false }) }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  // flexGrow: 1,
                  fontSize: '2.4rem',
                  fontWeight: 'bold',
                  color: '#B0E0E6',
                  fontFamily: "'Roboto Condensed', sans-serif",
                  textShadow: '0 0 1px #ADD8E6, 0 1px 1px #ADD8E6',
                  letterSpacing: '2px',
                  marginLeft: '15px'
                }}
              >
                {name}
              </Typography>
            </Button>
            {/* Navigation Links with custom styles and hover effects */}
            {['Runes', 'Marketplace', 'Launchpad', 'Bridge', 'Defi'].map((text) => (
              <Button
                key={text}
                color="inherit"
                sx={{
                  fontSize: '1.5rem',
                  margin: '0 30px',
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
            {/* Telegram Icon Button */}
            <IconButton
              color="inherit"
              aria-label="open telegram"
              onClick={() => window.open(config.projectTelegram, "_blank")} // Replace with your Telegram link
              sx={{
                color: '#e3f2fd', // A lighter shade for the icon
                '&:hover': {
                  color: '#bbdefb', // Color changes on hover
                },
              }}
            >
              <TelegramIcon />
            </IconButton>

            {/* Twitter Icon Button */}
            <IconButton
              color="inherit"
              aria-label="open twitter"
              onClick={() => window.open(config.projectTwitter, "_blank")} // Replace with your Twitter link
              sx={{
                color: '#e3f2fd', // A lighter shade for the icon
                '&:hover': {
                  color: '#bbdefb', // Color changes on hover
                },
              }}
            >
              <TwitterIcon />
            </IconButton>

            {/* Snackbar for displaying the coming soon message */}
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Change to appear at the top-center
              sx={{
                top: { sm: '100px', xs: '64px' }, // Offset by the approximate height of the AppBar
              }}>
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
