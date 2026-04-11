import React, { useState } from 'react'
import Categories from '../../components/categories/Categories'
import Products from '../../components/products/Products'
import FilterDrower from '../../components/drower/FilterDrower';
import { Box, Container } from '@mui/material';

export default function Shop() {
  const [currentCat, setCurrentCat] = useState("ALL");

  return (
      <Container disableGutters sx={{px:3,marginTop:'100px'}} maxWidth={false} >
        <Box>
      <Categories onSelect={setCurrentCat} />
      <FilterDrower  onSelect={setCurrentCat} currentCat={currentCat} drower='Filter' />
      </Box>
      <Products currentCat={currentCat} /></Container>
  )
}
