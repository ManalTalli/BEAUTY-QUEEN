import React from 'react'
import useProducts from '../../hooks/useProducts'
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Loader from '../../ui/Loader';

export default function Products() {
  const {data , isLoading , isError , error} = useProducts ();
  if (isLoading) return <Loader/>
  if (isError) return <Box color={'red'}>{error.message}</Box>
  return (
    <Box paddingTop={'50px'} width={'100%'}>

        <Grid container gap={'30px'}>
          {data.response.data.map (product =>
          <Grid  size={{xs:12,sm:6,md:4,lg:2.3}} >
            <Card >
              <CardMedia component={'img'} image={product.image}></CardMedia>
              <CardContent>
                <Typography component={'h3'}>{product.name}</Typography>
                <Typography component={'span'} variant='body1'>{product.price}</Typography>
              </CardContent>
            </Card>
             </Grid>
            )}
          </Grid>
      
    </Box>
  )
}
