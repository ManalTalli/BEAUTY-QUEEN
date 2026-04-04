import React from 'react'
import useCategories from '../../hooks/useCategories'
import { Box, Button, Card, Grid } from '@mui/material';
import Loader from '../../ui/Loader';
import Category from '../../ui/category/Category';

export default function Categories({onSelect}) {
    const {data , isLoading ,isError , error} = useCategories ();
    if (isLoading) return <Loader/>
    if (isError) return <Box color={'red'}>{error.message}</Box>
  return (
    <Box width={'70%'}>
    <Grid container>
     
      <Button onClick={() => onSelect("ALL")}>ALL</Button>
       {data.response.data.map (category=>
      <Category category={category} key={category.id} onSelect={onSelect}/>
      
        )}      
      </Grid>
      </Box>
  )
}
