import React from 'react'
import useProducts from '../../hooks/useProducts'
import { Box } from '@mui/material';
import Loader from '../../ui/Loader';

export default function Products() {
  const {data , isLoading , isError , error} = useProducts ();
  if (isLoading) return <Loader/>
  if (isError) return <Box color={'red'}>{error.message}</Box>
  return (
    <div>
        <Box>{data.response.data.map (product => <Box key={product.key}>{product.name}</Box>)}</Box>
      
    </div>
  )
}
