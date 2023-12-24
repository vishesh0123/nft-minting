import React from 'react';
import { Box, Typography, Button, CircularProgress, LinearProgress, useTheme } from '@mui/material';
import CustomCard from './CustomCard';
import TokenName from './TokenName';
import { keyframes } from '@emotion/react';
import config from '../../config';

// Define keyframe animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const progressAnimation = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }
`;

const fadeInAndRise = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const MintingSection = ({ isMinting, mintProgress, onMint }) => {
  const theme = useTheme();

  return (
    <Box sx={{
      animation: `${fadeIn} 1s ease-out forwards`, // Applies the fade-in animation to the entire section
      'display': 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'
    }}>
      <TokenName token={config.token} tokendesc={config.tokendesc}/>
      <CustomCard sx={{
        animation: `${fadeInAndRise} 1s ease-out 0.5s forwards`, // Apply the same animation to the card
      }} />
      <Box sx={{
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 3,
        borderRadius: '16px',
        color: theme.palette.common.white,
        width: '500px',
        height: '1px',
        margin: '100px',
        animation: `${fadeIn} 1s ease-out 0.5s forwards`, // Delays the animation start
      }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: 1, flexDirection: 'column' }}>
          <Typography
            sx={{
              fontSize: '1.2rem', // Slightly larger text for emphasis
              fontWeight: 'bold', // Make it bold to stand out more
              color: '#B0E0E6', // A light shade that should stand out against darker backgrounds
              textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow for depth
              letterSpacing: '0.5px', // Adjust letter spacing for better readability
              borderRadius: '5px', // Slightly rounded corners for the background
            }}
          >
            POOK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FEE: 0.1 MATIC
          </Typography>

          <LinearProgress
            variant="determinate"
            value={50} // Assuming mintProgress is a state variable that updates during minting
            sx={{
              width: '100%',
              height: '10px',
              animation: `${progressAnimation} 2s ease-out forwards`, // Applies the width animation to the progress bar
              '.css-1kjriw0-MuiLinearProgress-bar1': {
                background: 'linear-gradient(145deg, #836FFF, #30cfd0)',
              },
            }}
          />
          <Typography
            sx={{
              fontSize: '1.2rem', // Slightly larger text for emphasis
              fontWeight: 'bold', // Make it bold to stand out more
              color: '#B0E0E6', // A light shade that should stand out against darker backgrounds
              textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow for depth
              letterSpacing: '0.5px', // Adjust letter spacing for better readability
              borderRadius: '5px', // Slightly rounded corners for the background
              marginLeft: "200px"
            }}
          >
            50%
          </Typography>
        </Box>
        <Box>
          {isMinting ? (
            <CircularProgress
              size={theme.spacing(6)}
              sx={{ color: theme.palette.primary.main }}
            />
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={onMint}
              sx={{
                color: theme.palette.primary.contrastText,
                background: `linear-gradient(145deg, #836FFF, #30cfd0)`,
                '&:hover': {
                  background: `linear-gradient(145deg, #836FFF, #30cfd0)`,
                },
                animation: `${fadeIn} 1s ease-out 1s forwards`, // Delays the button animation
              }}
            >
              <Typography>Mint</Typography>
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MintingSection;
