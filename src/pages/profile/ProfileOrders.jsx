import React from 'react';
import useProflie from '../../hooks/useProflie';
import { Box, Typography, Paper, Stack, Divider, Grid } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

export default function ProfileOrders() {
  const { data } = useProflie();

  return (
    <Box sx={{ maxWidth: '60%' }}>
      <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, letterSpacing: '1px' }}>
        ORDER HISTORY
      </Typography>

      <Stack spacing={3}>
        {data?.orders?.length > 0 ? (
          data.orders.map((order) => (
            <Paper 
              key={order.id}
              elevation={0}
              sx={{ 
                p: 3, 
                borderRadius: '16px', 
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  borderColor: 'primary.main',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
                }
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={4}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase' }}>
                    Order Reference
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>
                    #{order.id}
                  </Typography>
                </Grid>

                <Grid item xs={6} md={4}>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.secondary' }}>
                    <CalendarTodayOutlinedIcon sx={{ fontSize: 16 }} />
                    <Typography sx={{ fontSize: '0.9rem', fontWeight: 500 }}>
                      {new Date(order.orderDate).toLocaleDateString('en-GB', {
                        day: 'numeric', month: 'short', year: 'numeric'
                      })}
                    </Typography>
                  </Stack>
                </Grid>

                <Grid item xs={6} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                  <Box 
                    sx={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: 1,
                      px: 2, py: 0.5, 
                      borderRadius: '50px',
                      bgcolor: 'secondary.light',
                      color: 'secondary.main',
                      border: '1px solid',
                      borderColor: 'secondary.main'
                    }}
                  >
                    <LocalShippingOutlinedIcon sx={{ fontSize: 14 }} />
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>
                      {String(order.status)}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Divider sx={{ my: 2, opacity: 0.5 }} />

              
            </Paper>
          ))
        ) : (
          <Box sx={{ textAlign: 'center', py: 10, opacity: 0.5 }}>
            <Typography>No orders found yet. Time to go shopping!</Typography>
          </Box>
        )}
      </Stack>
    </Box>
  );
}