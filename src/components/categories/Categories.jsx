import React from 'react'
import useCategories from '../../hooks/useCategories'
import { Box, Card, Grid } from '@mui/material';
import Loader from '../../ui/Loader';
import Link from '@mui/material/Link';
import { Link as routerLink } from 'react-router-dom';

export default function Categories() {
    const {data , isLoading ,isError , error} = useCategories ();
    if (isLoading) return <Loader/>
    if (isError) return <Box color={'red'}>{error.message}</Box>
  return (
    <Box width={'70%'}>
    <Grid container spacing={3}>
      {data.response.data.map (category=>
      <Grid  size={{xs:12,sm:6,md:4,lg:2.3}} textAlign='center' >
       <Card key={category.id} sx={{padding:'10px'}}>
        <Link component={routerLink} to ='/' underline='none' color='#111'>{category.name}</Link> 
        </Card>
        </Grid>
        )}      
      </Grid>
      </Box>
  )
}
