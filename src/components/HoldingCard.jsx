import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const HoldingCard = ({ log }) => {

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
                height: '130px',
                width: '280px'
            }}>
                <CardContent>
                    <Typography>
                        ' data:,"p":"xrs- 20","op":"mint","tick":"pook"
                        <br/>
                        "amt":"1000"'
                    </Typography>
                    <Typography style={{ 'fontWeight': 'bold', marginTop: '10px' }} >
                        {(new Date(log.timeStamp * 1000)).toLocaleDateString()} {log.transactionHash.substring(0, 8)}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default HoldingCard;