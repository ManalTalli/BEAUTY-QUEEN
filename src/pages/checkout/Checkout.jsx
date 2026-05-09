import React, { useState } from 'react';
import {
  Box, Button, Container, Typography, Grid, Divider, Stack,
  useTheme, Radio, RadioGroup, FormControlLabel, FormControl, Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'; 
import useCart from '../../hooks/useCart';
import useCheckout from '../../hooks/useCheckout';
import Loader from '../../ui/Loader';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaymentsIcon from '@mui/icons-material/Payments';

export default function Checkout() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  
  const [isOrdered, setIsOrdered] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('Cash');

  const { data, isError, isLoading, error } = useCart();
  const { mutate: checkout, isPending } = useCheckout();

  if (isLoading) return <Loader />;
  if (isError) return <Box sx={{ textAlign: 'center', py: 10, color: 'red' }}>{error.message}</Box>;

  const handleCheckout = () => {
    checkout(paymentMethod, {
      onSuccess: () => {
        setIsOrdered(true);
      },
      onError: (err) => {
        console.error("Checkout Error:", err);
      }
    });
  };

  const commonTextStyle = {
    fontFamily: "'Inter', sans-serif",
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: isDarkMode ? 'text.primary' : '#5D4037'
  };

  if (!data.items || data.items.length === 0) {
    if (!isOrdered) { 
      return (
        <Container sx={{ mt: '150px', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Paper elevation={0} sx={{ p: { xs: 4, md: 8 }, borderRadius: '20px', bgcolor: 'transparent' }}>
            <ShoppingBagOutlinedIcon sx={{ fontSize: 100, color: 'secondary.main', opacity: 0.5, mb: 3 }} />
            <Typography variant="h4" sx={{ ...commonTextStyle, fontWeight: 800, mb: 2 }}>
              Your Cart is Empty
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 4, maxWidth: '400px', mx: 'auto' }}>
              You cannot proceed to checkout without any items in your cart.
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/Shop')}
              sx={{
                py: 2,
                px: 6,
                borderRadius: '50px',
                bgcolor: isDarkMode ? 'primary.main' : '#5D4037',
                color: isDarkMode ? '#2D2020' : '#FFF5F5',
                fontWeight: 700
              }}
            >
              Go to Shop
            </Button>
          </Paper>
        </Container>
      );
    }
  }

  if (isOrdered) {
    return (
      <Container maxWidth="sm" sx={{ mt: '150px', textAlign: 'center' }}>
        <Paper elevation={0} sx={{ p: 6, borderRadius: '20px', bgcolor: 'secondary.light' }}>
          <CheckCircleOutlineIcon sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
          <Typography variant="h4" sx={{ ...commonTextStyle, fontWeight: 800, mb: 2 }}>
            Thank You!
          </Typography>
          <Typography variant="body1" sx={{ color: 'secondary.main', mb: 4 }}>
            Your order has been placed successfully. We'll send you a confirmation email shortly.
          </Typography>
          <Button
            variant="contained"
            fullWidth
            onClick={() => navigate('/Shop')}
            sx={{
              py: 2,
              borderRadius: '50px',
              bgcolor: isDarkMode ? 'primary.main' : '#5D4037',
              fontWeight: 700
            }}
          >
            Continue Shopping
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container disableGutters maxWidth={false} sx={{ mt: '80px', minHeight: '100vh', bgcolor: 'background.default', display: 'flex', justifyContent: 'center' }}>
      <Grid container sx={{ minHeight: '100vh' }}>

        <Grid item xs={12} md={7} sx={{ p: { xs: 4, md: 10 }, bgcolor: 'secondary.light' }}>
          <Typography variant="h4" sx={{ ...commonTextStyle, fontWeight: 800, mb: 6 }}>
            Checkout
          </Typography>

          <Box sx={{ mb: 6 }}>
            <Typography variant="h6" sx={{ ...commonTextStyle, fontSize: '0.9rem', mb: 3, fontWeight: 700 }}>
              Shipping Information
            </Typography>
            <Typography variant="body1" color="secondary.main " sx={{ opacity: 0.7 }}>
              The items will be shipped to your registered address.
            </Typography>
          </Box>

          <Divider sx={{ mb: 6, opacity: 0.5 }} />

          <Box>
            <Typography variant="h6" sx={{ ...commonTextStyle, fontSize: '0.9rem', mb: 4, fontWeight: 700 }}>
              Payment Method
            </Typography>

            <FormControl component="fieldset" fullWidth>
              <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <Stack spacing={2}>
                  <Box sx={{
                    border: '1px solid',
                    borderColor: paymentMethod === 'Cash' ? 'secondary.main' : 'divider',
                    borderRadius: '8px', p: 2,
                    bgcolor: paymentMethod === 'Cash' ? (isDarkMode ? '#4125253a' : '#fff5f5') : 'transparent',
                    cursor: 'pointer'
                  }}>
                    <FormControlLabel value="Cash" control={<Radio sx={{ color: 'secondary.main', '&.Mui-checked': { color: 'secondary.main' } }} />}
                      label={
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <PaymentsIcon sx={{ color: 'secondary.main' }} />
                          <Box>
                            <Typography sx={{ fontWeight: 700, color: 'text.primary' }}>Cash on Delivery</Typography>
                            <Typography variant="caption" sx={{ color: 'secondary.main', opacity: 0.8 }}>Pay when you receive your order</Typography>
                          </Box>
                        </Stack>
                      }
                    />
                  </Box>

                  <Box sx={{
                    border: '1px solid',
                    borderColor: paymentMethod === 'Visa' ? 'secondary.main' : 'divider',
                    borderRadius: '8px', p: 2,
                    bgcolor: paymentMethod === 'Visa' ? (isDarkMode ? 'rgba(248, 192, 196, 0.05)' : '#FFF5F5') : 'transparent',
                    cursor: 'pointer'
                  }}>
                    <FormControlLabel value="Visa" control={<Radio sx={{ color: 'secondary.main', '&.Mui-checked': { color: 'secondary.main' } }} />}
                      label={
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <CreditCardIcon sx={{ color: 'secondary.main' }} />
                          <Box>
                            <Typography sx={{ fontWeight: 700, color: 'text.primary' }}>Credit Card / Visa</Typography>
                            <Typography variant="caption" sx={{ color: 'secondary.main', opacity: 0.8 }}>Secure online payment</Typography>
                          </Box>
                        </Stack>
                      }
                    />
                  </Box>
                </Stack>
              </RadioGroup>
            </FormControl>
          </Box>

          <Button
            variant="contained"
            disabled={isPending}
            onClick={handleCheckout}
            sx={{
              mt: 8, py: 2, px: 6, borderRadius: '50px', fontWeight: 900, fontSize: '1rem',
              bgcolor: isDarkMode ? 'primary.main' : '#5D4037',
              color: isDarkMode ? '#2D2020' : '#FFF5F5',
              '&:hover': { bgcolor: isDarkMode ? '#f79fa5' : '#452e28' }
            }}
          >
            {isPending ? 'Processing...' : `Pay $${data?.cartTotal?.toFixed(2)} Now`}
          </Button>
        </Grid>

        <Grid item xs={12} md={5} sx={{ bgcolor: 'secondary.main', p: { xs: 4, md: 10 }, color: isDarkMode ? '#F8C0C4' : '#5D4037' }}>
          <Typography variant="h5" sx={{ ...commonTextStyle, fontWeight: 800, mb: 6, color: 'inherit' }}>
            Order Summary
          </Typography>

          <Stack spacing={3} sx={{ mb: 6 }}>
            {data?.items?.map((item) => (
              <Stack key={item.productId} direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.9rem' }}>{item.productName}</Typography>
                  <Typography variant="caption" sx={{ opacity: 0.7 }}>Qty: {item.count}</Typography>
                </Box>
                <Typography sx={{ fontWeight: 700 }}>${item.totalPrice.toFixed(2)}</Typography>
              </Stack>
            ))}
          </Stack>

          <Divider sx={{ borderColor: 'inherit', opacity: 0.2, mb: 4 }} />

          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between">
              <Typography sx={{ opacity: 0.8 }}>Subtotal</Typography>
              <Typography sx={{ fontWeight: 600 }}>${data?.cartTotal?.toFixed(2)}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between" sx={{ pt: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 900 }}>Total</Typography>
              <Typography variant="h4" sx={{ fontWeight: 900 }}>${data?.cartTotal?.toFixed(2)}</Typography>
            </Stack>
          </Stack>
        </Grid>

      </Grid>
    </Container>
  );
}