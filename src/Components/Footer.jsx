import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <div>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          More information
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Contact us at rnect@gmail.com
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          color="text.secondary"
          component="p"
        >
          Copyright © RNECT 2022       
        </Typography>
      </Box>
    </div>
  );
}