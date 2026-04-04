import React, { useState } from 'react'
import Categories from '../../components/categories/Categories'
import Products from '../../components/products/Products'
import FilterDrower from '../../components/drower/FilterDrower';

export default function Shop() {
  const [currentCat, setCurrentCat] = useState("ALL");

  return (
    <div>
      <Categories onSelect={setCurrentCat} />
      <FilterDrower onSelect={setCurrentCat} currentCat={currentCat} drower='Filter' />
      <Products currentCat={currentCat} />
    </div>
  )
}
