import React from 'react';
import { Typography, Grid, Paper, Box, Stack, Divider, useTheme } from '@mui/material';
import useProflie from '../../hooks/useProflie';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

export default function ProfileInfo() {
  const { data } = useProflie();
  const theme = useTheme();

  const infoItems = [
    { label: 'Full Name', value: data?.fullName, icon: <PersonOutlineOutlinedIcon fontSize="small" /> },
    { label: 'Email Address', value: data?.email, icon: <EmailOutlinedIcon fontSize="small" /> },
    { label: 'City', value: data?.city, icon: <LocationCityOutlinedIcon fontSize="small" /> },
    { label: 'Phone Number', value: data?.phoneNumber, icon: <LocalPhoneOutlinedIcon fontSize="small" /> },
  ];

  return (
    <Box   sx={{ maxWidth: '60%' }}>
      <Paper 
        elevation={0} 
        sx={{ 
          p: { xs: 3, md: 5 }, 
          borderRadius: '12px', 
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',  
          
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 800, 
            mb: 4, 
            fontFamily: "'Inter', sans-serif",
            color: 'primary.main' 
          }}
        >
          General Information
        </Typography>

        <Grid container spacing={4}>
          {infoItems.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Stack spacing={1}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.secondary' }}>
                  {item.icon}
                  <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: '1px' }}>
                    {item.label}
                  </Typography>
                </Stack>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontWeight: 500, 
                    color: 'text.primary',
                    fontSize: '1.1rem',
                    pl: 4 
                  }}
                >
                  {item.value || 'Not provided'}
                </Typography>
                {index < infoItems.length - 0 && <Divider sx={{ mt: 1, opacity: 0.5, display: { xs: 'block', sm: 'none' } }} />}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Box 
          sx={{ 
            mt: 6, 
            p: 3, 
            borderRadius: '8px', 
            bgcolor: theme.palette.mode === 'dark' ? 'rgba(248, 192, 196, 0.05)' : '#FFF5F5',
            border: '1px dashed',
            borderColor: 'primary.main'
          }}
        >
          <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 600 }}>
            * Your personal information is encrypted and secure. To update your data, please contact support.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}