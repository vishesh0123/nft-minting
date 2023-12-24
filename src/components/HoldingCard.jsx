import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const HoldingCard = ({ contractData }) => {

    return (
        <Box>
            <Card sx={{
                background: 'linear-gradient(145deg, #836FFF, #30cfd0)', // Semi-transparent yellow
                borderRadius: '16px', // Rounded corners
                overflow: 'hidden', // Ensures the shadow doesn't leak outside the border radius
                boxShadow: `0 0 2px 1px  #836FFF, // Soft glow inside
                  0 0 4px 1px  #836FFF, // Medium glow
                  0 0 6px 1px  #836FFF, // Large diffuse glow
                  0 0 8px 2px  #836FFF`, // Extra-large far-reaching glow
                transition: 'box-shadow 0.3s ease-in-out', // Smooth transition for hover effect
                '&:hover': {
                    boxShadow: `0 0 12px 3px  #836FFF, 
                    0 0 24px 5px  #836FFF, 
                    0 0 36px 7px  #836FFF,
                    0 0 48px 9px  #836FFF` // Enhanced glow on hover
                },
                marginTop: '25px',
                height: '150px',
                width: '230px'
            }}>
                <CardContent>
                    <Typography >
                        {contractData}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default HoldingCard;