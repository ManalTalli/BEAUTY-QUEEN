import React from 'react'
import useCategories from '../../hooks/useCategories'
import { Box, Card } from '@mui/material';
import Loader from '../../ui/Loader';

export default function Categories() {
    const {data , isLoading ,isError , error} = useCategories ();
    if (isLoading) return <Loader/>
    if (isError) return <Box color={'red'}>{error.message}</Box>
  return (
    <Box>{data.response.data.map (category=> <Box key={category.id}><Card>{category.name}</Card> </Box>)}</Box>
  )
}
