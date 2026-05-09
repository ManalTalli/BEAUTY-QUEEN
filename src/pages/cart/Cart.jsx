import React from 'react';
import {
  Box, Button, Container, IconButton, Typography, Grid, 
  Divider, Stack, useTheme, Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import useCart from '../../hooks/useCart';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import useUpdateCartItem from '../../hooks/useUpdateCartItem';
import useRemoveAllItem from '../../hooks/useRemoveAllItem';
import Loader from '../../ui/Loader';

export default function Cart() {
  const { data, isError, isLoading, error } = useCart();
  const { t } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();

  const { mutate: removeItem, isPending: removeItempend } = useRemoveFromCart();
  const { mutate: updateItem } = useUpdateCartItem();
  const { mutate: removeAllitem } = useRemoveAllItem();

  if (isLoading) return <Loader />;
  if (isError) return <Box sx={{ textAlign: 'center', py: 10, color: 'red' }}>{error.message}</Box>;

  const handleUpdateQty = (productId, action) => {
    const item = data.items.find((i) => i.productId === productId);
    const newCount = action === '-' ? item.count - 1 : item.count + 1;
    if (newCount > 0) updateItem({ productId, count: newCount });
  };

  const commonTextStyle = {
    fontFamily: "'Inter', sans-serif",
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: 'text.primary'
  };

  if (!data.items || data.items.length === 0) {
    return (
      <Container sx={{ mt: '150px', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Paper elevation={0} sx={{ p: { xs: 4, md: 8 }, borderRadius: '20px', bgcolor: 'transparent' }}>
          <ShoppingBagOutlinedIcon sx={{ fontSize: 100, color: 'secondary.main', opacity: 0.5, mb: 3 }} />
          <Typography variant="h4" sx={{ ...commonTextStyle, fontWeight: 800, mb: 2 }}>
            {t('Your cart is empty')}
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 4, maxWidth: '400px', mx: 'auto' }}>
            {t('Looks like you haven\'t added anything to your cart yet. Explore our latest products and find something you love!')}
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/Shop')}
            sx={{
              py: 2,
              px: 6,
              borderRadius: '50px',
              bgcolor: 'text.primary',
              fontWeight: 700,
              '&:hover': { bgcolor: 'secondary.main' }
            }}
          >
            {t('Start Shopping')}
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container disableGutters maxWidth={false} sx={{ mt: '150px', minHeight: '100vh' ,display:'flex',justifyContent:'center' }}>
      <Grid container>
        
        <Grid item xs={12} md={8} sx={{ 
            p: { xs: 3, md: 10 }, 
            bgcolor: 'secondary.light' 
        }}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: 5 }}>
            <Typography variant="h4" sx={{ ...commonTextStyle, fontWeight: 800 }}>{t('My Cart')}</Typography>
            <Typography sx={{ color: 'secondary.main', fontWeight: 500 }}>{data.items.length} {t('Items')}</Typography>
          </Stack>

          {data.items.map((item) => (
            <Box key={item.productId} sx={{ mb: 4 }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={8} sm={4}>
                  <Typography sx={{ ...commonTextStyle, fontSize: '0.85rem', fontWeight: 700 }}>{item.productName}</Typography>
                </Grid>

                <Grid item xs={6} sm={3}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                      <IconButton size="small" onClick={() => handleUpdateQty(item.productId, '-')}>
                          <RemoveIcon fontSize="small" />
                      </IconButton>
                      <Typography sx={{ fontWeight: 600, minWidth: '20px', textAlign: 'center' }}>{item.count}</Typography>
                      <IconButton size="small" onClick={() => handleUpdateQty(item.productId, '+')}>
                          <AddIcon fontSize="small" />
                      </IconButton>
                  </Stack>
                </Grid>

                <Grid item xs={4} sm={2}>
                  <Typography sx={{ fontWeight: 700, color: 'text.primary' }}>${item.totalPrice}</Typography>
                </Grid>

                <Grid item xs={2} sm={1}>
                  <IconButton onClick={() => removeItem(item.productId)} disabled={removeItempend}>
                    <DeleteOutlineIcon sx={{ color: 'secondary.main', '&:hover': { color: 'red' } }} />
                  </IconButton>
                </Grid>
              </Grid>
              <Divider sx={{ mt: 3, opacity: 0.5 }} />
            </Box>
          ))}

          <Button 
            onClick={() => removeAllitem()}
            sx={{ mt: 4, color: 'secondary.main', textTransform: 'none', fontWeight: 600}}
          >
            {t('Clear Cart')}
          </Button>
        </Grid>

        <Grid item xs={12} md={4} sx={{ 
          bgcolor: 'secondary.main', 
          p: { xs: 4, md: 10 },
          color: 'text.primary'
        }}>
          <Typography variant="h5"  sx={{ ...commonTextStyle, fontWeight: 800, mb: 6 }}>{t('Summary')}</Typography>
          
          <Stack spacing={4}>
            <Stack direction="row" justifyContent="space-between">
              <Typography sx={{ ...commonTextStyle, fontSize: '0.8rem' }}>{t('Subtotal')}</Typography>
              <Typography sx={{ fontWeight: 700,opacity: 0.8 }}>${data.cartTotal}</Typography>
            </Stack>

            <Box display={'flex'} justifyContent={'space-between'}>
                <Typography sx={{ ...commonTextStyle, fontSize: '0.8rem', mb: 1 }}>{t('Shipping')}</Typography>
                <Typography sx={{ opacity: 0.8,fontWeight: 700 }}>{t('Free')}</Typography>
            </Box>

            <Divider sx={{ borderColor: 'rgba(93, 64, 55, 0.1)' }} />

            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography sx={{ ...commonTextStyle, fontWeight: 900 }}>{t('Total')}</Typography>
              <Typography  sx={{ fontWeight: 800 }}>${data.cartTotal}</Typography>
            </Stack>

            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate('/Cart/Checkout')}
              sx={{
                bgcolor: 'text.primary', 
                color: 'background.paper',
                py: 2,
                mt: 4,
                borderRadius: '50px',
                fontWeight: 800,
                letterSpacing: '2px',
                '&:hover': { bgcolor: 'text.secondary', opacity: 0.9 }
              }}
            >
              {t('CHECKOUT')}
            </Button>
            
            <Box sx={{ mt: 4, textAlign: 'center', opacity: 0.6 }}>
                <img src="/paypal-logo.png" alt="" style={{ height: '20px', filter: 'grayscale(1)' }} />
            </Box>
          </Stack>
        </Grid>

      </Grid>
    </Container>
  );
}