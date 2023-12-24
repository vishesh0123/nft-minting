import React from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material';
import { AccessTime, Close, Language } from '@mui/icons-material';

function LaunchPad() {
    return (
        <Card sx={{ maxWidth: 360, background: 'linear-gradient(160deg, #333, #1a1a2e)', margin: '50px' ,height:'400px' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' , fontWeight:'bold' }}>
                    Launchpad
                </Typography>
                <Box
                    component="img"
                    sx={{
                        height: 194,
                        width: '100%',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                    }}
                    alt="Polygon Runes"
                    src='src/assets/bg3.png'

                />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                    <Typography variant="h6" color="#B0E0E6">
                        $pook
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {/* Replace with icons as needed */}
                        <Language sx={{ color: '#fff' }} />
                        <Close sx={{ color: '#fff' }} />
                        <AccessTime sx={{ color: '#fff' }} />
                    </Box>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ color: '#fff' }}>
                    The first runes protocol is deployed on the polygon network, innovatively defining the inscription standard.
                </Typography>
            </CardContent>
        </Card>
    );
}


export default LaunchPad