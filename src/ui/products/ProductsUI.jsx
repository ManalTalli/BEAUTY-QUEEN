import { Card, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { Link as routerLink } from 'react-router-dom';

export default function ProductsUI({product}) {
  return (
    <Grid  size={{xs:12,sm:6,md:4,lg:2.3}}>
            <Link component={routerLink} to={`product/${product.id}`} sx={{textDecorationLine:'none'}}>
            <Card >
              <CardMedia component={'img'} image={product.image}></CardMedia>
              <CardContent>
                <Typography component={'h3'}>{product.name}</Typography>
                <Typography component={'span'} variant='body1'>{product.price}$</Typography>
                <Rating readOnly value={product.rate}></Rating>
              </CardContent>
            </Card>
            </Link>
             </Grid>
  )
}
