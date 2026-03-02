import React from 'react'
import useProduct from '../../hooks/useProduct'
import { useParams } from 'react-router-dom';
import Loader from '../../ui/Loader';
import { Box } from '@mui/material';

export default function ProductDetails() {
    const {id}=useParams();
    const {data , isLoading , isError , error}=useProduct(id);
    console.log(data);
    if (isLoading) return <Loader />
    if (isError) return <Box color='red' >{error.message}</Box>
    
  return (
    <div>
      details
    </div>
  )
}
