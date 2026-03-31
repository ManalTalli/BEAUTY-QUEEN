import React from 'react'
import Categories from '../../components/categories/Categories'
import Products from '../../components/products/Products'
import FilterDrower from '../../components/drower/FilterDrower';
import { useState } from 'react';
import { Slider } from '@mui/material';


export default function Shop() {
  
  return (
    <div>
      <Categories />
      <FilterDrower drower='Filter' />
      <Products />
      

    </div>
  )
}
