import React from 'react';
import { Box, Container, Typography, Stack, Tab, Tabs, Divider, useTheme } from '@mui/material';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import useProflie from '../../hooks/useProflie';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlineIcon from '@mui/icons-material/ShoppingBagOutlined';

export default function Profile() {
  const { data } = useProflie();
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const currentTab = location.pathname.includes('Orders') ? 1 : 0;

  const handleTabChange = (event, newValue) => {
    if (newValue === 0) navigate('');
    else navigate('Orders');
  };

  return (
    <Container 
      disableGutters 
      maxWidth={false} 
      sx={{ 
        px: { xs: 3, md: 8 }, 
        marginTop: '120px', 
        minHeight: '100vh',
        bgcolor: 'background.default' 
      }}
    >
      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 800, 
            fontFamily: "'Playfair Display', serif", 
            color: 'text.primary',
            mb: 1
          }}
        >
          {data?.name ? `Hello, ${data.name}` : 'My Profile'}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', opacity: 0.8 }}>
          Manage your account settings and track your orders.
        </Typography>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs 
          value={currentTab} 
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              minWidth: 120,
              fontFamily: "'Inter', sans-serif",
              color: 'text.secondary'
            },
            '& .Mui-selected': {
              color: 'primary.main !important'
            }
          }}
        >
          <Tab icon={<PersonOutlineIcon sx={{ fontSize: 20 }} />} iconPosition="start" label="Personal Info" />
          <Tab icon={<ShoppingBagOutlineIcon sx={{ fontSize: 20 }} />} iconPosition="start" label="My Orders" />
        </Tabs>
      </Box>

      <Box 
        sx={{ 
          py: 4, 
          animation: 'fadeIn 0.5s ease-in-out',
          '@keyframes fadeIn': {
            from: { opacity: 0, transform: 'translateY(10px)' },
            to: { opacity: 1, transform: 'translateY(0)' }
          }
        }}
      >
        <Outlet />
      </Box>
    </Container>
  );
}