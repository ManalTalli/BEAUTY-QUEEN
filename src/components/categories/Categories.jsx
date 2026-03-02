import React from 'react'
import useCategories from '../../hooks/useCategories/useCategories'
import { Box, CircularProgress } from '@mui/material';

export default function Categories() {
    const {data , isLoading ,isError , error} = useCategories ();
    if (isLoading) return <CircularProgress/>
    if (isError) return <Box color={'red'}>{error.message}</Box>
  return (
    <Box>{data.response.map (category=> <Box key={category.id}>{category.name} </Box>)}</Box>
  )
}
