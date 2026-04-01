import Box from '@mui/material/Box'
import React from 'react'
import useProducts from '../../hooks/useProducts';
import useSearch from '../../hooks/useSearch';
import TextField from '@mui/material/TextField';
import { List, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { Link as routerLink } from 'react-router-dom';

export default function Search() {
  const query = useProducts();
  const products = query.data?.response.data;
  console.log(products);
  const { filterData, searchTerm, setSearchTerm } = useSearch(products);
  return (
    <Box>
      <TextField value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <List>
        {searchTerm && filterData?.map((item) => (
          <List><Link component={routerLink} key={item.id} to={`shop/product/${item.id}`} sx={{ textDecorationLine: 'none' }}>{item.name}</Link></List>
        )
        )}
      </List>

    </Box>
  )
}
