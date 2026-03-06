import React from 'react'
import useProduct from '../../hooks/useProduct'
import { useParams } from 'react-router-dom';
import Loader from '../../ui/Loader';
import { Box, Button, Card, CardMedia, Rating, Typography } from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart';

export default function ProductDetails() {
    const {id}=useParams();
    const {data , isLoading , isError , error}=useProduct(id);
    const {mutate,isPending} = useAddToCart ();
    console.log(data);
    if (isLoading) return <Loader />
    if (isError) return <Box color='red' >{error.message}</Box>
    const product=data.response;
    
  return (
    <Box>
      <Card sx={{display:'flex',padding:'30px',flexWrap:'wrap',gap:4}}>
        <CardMedia component={'img'} image={product.image} sx={{width:{xs:'100%',md:300, objectFit:'contain'}}}>
        </CardMedia>
        <Box sx={{flex:1}}>
          <Typography component={'h1'} variant='h3' gutterBottom>{product.name}</Typography>
          <Typography component={'span'} variant='body1' sx={{display:'block'}} gutterBottom>{product.price} $</Typography>
          <Rating readOnly value={product.rate}></Rating>
          <Typography variant='body1' gutterBottom color='#555'>{product.description}</Typography>
          <Typography color='text.secondery'>Avaiable Quantity : {product.quantity}</Typography>
          <Button disabled={isPending} color='primary' variant='contained' onClick={()=>mutate({
            ProductId:product.id,
            Count:1,
          })}>Add To Cart</Button>
        </Box>
      </Card>
      </Box>
  )
}
