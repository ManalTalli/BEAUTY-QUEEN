import React from 'react';
import useProduct from '../../hooks/useProduct';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../ui/Loader';
import { Box, Button, Card, CardMedia, Container, Rating, Typography, Stack, Divider, Chip, Avatar } from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart';
import Reviews from '../../components/reviews/Reviews';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useTranslation } from 'react-i18next';

export default function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useProduct(id);
  const { mutate, isPending } = useAddToCart();
  const checkout = useNavigate();
  const { t } = useTranslation();
  
  if (isLoading) return <Loader />
  if (isError) return <Box sx={{ color: 'red', textAlign: 'center', mt: 5 }}>{error.message}</Box>

  const product = data.response;

  return (
    <Container maxWidth="lg" sx={{ marginTop: '120px', pb: 8 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} sx={{ mb: 8 }}>

        <Box sx={{ flex: 1 }}>
          <Card elevation={0} sx={{ borderRadius: '24px', bgcolor: '#fdfdfd', p: 4 }}>
            <CardMedia
              component="img"
              image={product.image}
              sx={{ width: '100%', maxHeight: 500, objectFit: 'contain' }}
            />
          </Card>
        </Box>

        <Box sx={{ flex: 1, pt: 2 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
            {product.name}
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
            <Rating readOnly value={product.rate} precision={0.5} size="small" />
            <Chip label={t("In Stock")} color="success" size="small" variant="soft" sx={{ bgcolor: '#E8F5E9', color: '#2E7D32', fontWeight: 'bold' }} />
          </Stack>

          <Stack direction="row" spacing={2} alignItems="baseline" sx={{ mb: 3 }}>
            <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 700 }}>
              ${product.price}
            </Typography>
          </Stack>

          <Typography variant="body1" color="text.primary" sx={{ lineHeight: 1.8, mb: 4 }}>
            {product.description}
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Stack direction="row" spacing={2}>
            <Button
              disabled={isPending}
              variant="contained"
              size="large"
              startIcon={<ShoppingBagOutlinedIcon />}
              onClick={() => mutate({ ProductId: product.id, Count: 1 })}
              sx={{
                borderRadius: '12px',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                textTransform: 'none',
                boxShadow: 'none',
                '&:hover': { boxShadow: 'none', opacity: 0.9 }
              }}
            >
              {isPending ? t('Adding...') : t('Add To Cart')}
            </Button>
            
          </Stack>
        </Box>
      </Stack>

      <Box sx={{ mt: 10 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>{t('Customer Reviews')}</Typography>

        <Stack spacing={4}>
          {product?.reviews.map((prod, index) => (
            <Box key={index} sx={{ p: 3, borderRadius: '16px', border: '1px solid',borderColor:'primary.text' }}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                <Avatar sx={{ bgcolor: 'primary.main' }}>{prod.userName[0]}</Avatar>
                <Box>
                  <Typography sx={{ fontWeight: 'bold' }}>{prod.userName}</Typography>
                  <Rating readOnly value={prod.rating} size="small" />
                </Box>
                <Typography variant="caption" color="text.secondary" sx={{ ml: 'auto' }}>
                  {new Date(prod.createdAt).toLocaleDateString()}
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.primary" sx={{ ml: 7 }}>
                {prod.comment}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Box sx={{ mt: 6, p: 4, borderRadius: '24px' }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>{t('Leave a Review')}</Typography>
          <Reviews />
        </Box>
      </Box>
    </Container>
  );
}