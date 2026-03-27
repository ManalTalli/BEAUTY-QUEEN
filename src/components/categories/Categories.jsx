import React from 'react'
import useCategories from '../../hooks/useCategories'
import { Box, Card, Grid } from '@mui/material';
import Loader from '../../ui/Loader';

import Category from '../../ui/category/Category';

export default function Categories() {
    const {data , isLoading ,isError , error} = useCategories ();
    if (isLoading) return <Loader/>
    if (isError) return <Box color={'red'}>{error.message}</Box>
  return (
    <Box width={'70%'}>
    <Grid container spacing={3}>
      {data.response.data.map (category=>
      <Category category={category} key={category.id}/>
        )}      
      </Grid>
      </Box>
  )
}
