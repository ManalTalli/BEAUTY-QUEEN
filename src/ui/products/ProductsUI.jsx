import { Card, CardContent, CardMedia, Grid, Rating, Typography, Box, Badge, Stack } from '@mui/material';
import Link from '@mui/material/Link';
import { Link as routerLink } from 'react-router-dom';

export default function ProductsUI({ product }) {
  return (
    <Grid xs={12} sm={6} md={4} lg={3} xl={2.4}>
      <Link
        component={routerLink}
        to={`product/${product.id}`}
        sx={{ textDecoration: 'none' }}
      >
        <Card
          elevation={0} 
          sx={{
            borderRadius: '16px',
            transition: '0.3s',
            backgroundColor: 'transparent',
            '&:hover': {
              transform: 'translateY(-5px)',
              '& .MuiCardMedia-root': { borderRadius: '20px' }
            }
          }}
        >
          <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
            

            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              sx={{
                height: '50vh',
                width: '100%',
                objectFit: 'contain', 
                bgcolor: 'rgba(246, 175, 175, 0.06)', 
                p: 2, 
                borderRadius: '16px',
                transition: '0.3s'
              }}
            />
          </Box>

          <CardContent >
            

            <Typography
              component="h3"
              sx={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'text.primary',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              {product.name}
            </Typography>

            <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 0.5 }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 'bold', color: 'text.secondary' }}
              >
                ${product.price}
              </Typography>
              
            </Stack>

            <Stack direction="row" alignItems="center" spacing={0.5} sx={{}}>
              <Rating
                readOnly
                value={product.rate}
                precision={0.5}
                size="small"
              />
         
            </Stack>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}