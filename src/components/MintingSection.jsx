import React from 'react';
import { Box, Typography, Button, CircularProgress, LinearProgress, useTheme } from '@mui/material';
import CustomCard from './CustomCard';
import TokenName from './TokenName';
import { keyframes } from '@emotion/react';
import config from '../../config';
import { useSendTransaction, usePrepareSendTransaction } from 'wagmi'
import { parseEther } from 'viem';

// Define keyframe animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Adjusted progress animation for smoother transition
const smoothProgress = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }
`;

const MintingSection = ({ isMinting, mintProgress, onMint }) => {
  const theme = useTheme();

  const { config: conf } = usePrepareSendTransaction({
    value: parseEther('0.1'),
    to: config.deployment,
  })

  const { data, isLoading, isSuccess, sendTransaction } =
    useSendTransaction(conf)

  return (
    <Box sx={{
      animation: `${fadeIn} 1s ease-out forwards`,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'
    }}>
      <TokenName token={config.token} tokendesc={config.tokendesc} />
      <CustomCard sx={{
        animation: `${fadeIn} 1s ease-out 0.5s forwards`,
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
        // animation: `${fadeIn} 1s ease-out 0.5s forwards`,
      }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: 1, flexDirection: 'column' }}>
          <Typography
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#B0E0E6',
              textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
              letterSpacing: '0.5px',
              borderRadius: '5px',
            }}
          >
            POOK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FEE: 0.1 MATIC
          </Typography>

          <LinearProgress
            variant="determinate"
            value={50} // Make sure this value updates smoothly for a better animation
            sx={{
              width: '100%',
              height: '10px',
              animation: `${smoothProgress} 2s ease-out forwards`,
              '.css-1kjriw0-MuiLinearProgress-bar1': {
                background: 'linear-gradient(145deg, #836FFF, #30cfd0)',
              },
            }}
          />
          <Typography
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#B0E0E6',
              textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
              letterSpacing: '0.5px',
              borderRadius: '5px',
              marginLeft: "200px"
            }}
          >
            {50}%
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
              sx={{
                color: theme.palette.primary.contrastText,
                background: `linear-gradient(145deg, #836FFF, #30cfd0)`,
                '&:hover': {
                  background: `linear-gradient(145deg, #836FFF, #30cfd0)`,
                },
                // animation: `${fadeIn} 1s ease-out 1s forwards`,
              }}
              onClick={() => sendTransaction?.()}

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
