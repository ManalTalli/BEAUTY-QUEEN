import Box from '@mui/material/Box'
import React from 'react'
import useProducts from '../../hooks/useProducts';
import useSearch from '../../hooks/useSearch';
import { List, Typography, TextField, ListItem, ListItemAvatar, Avatar, ListItemText, InputAdornment } from '@mui/material';
import Link from '@mui/material/Link';
import { Link as routerLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  const query = useProducts();
  const products = query.data?.response.data;
  const { filterData, searchTerm, setSearchTerm } = useSearch(products);

  return (
    <Box>
      <TextField 
        fullWidth
        placeholder="Search for products..."
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: 'primary.main' }} />
            </InputAdornment>
          ),
          sx: { borderRadius: '25px', bgcolor: 'background.paper' }
        }}
        sx={{ mb: 3 }}
      />

      <List sx={{ width: '100%' }}>
        {searchTerm && filterData?.length > 0 ? (
          filterData.map((item) => (
            <Link 
              component={routerLink} 
              key={item.id} 
              to={`shop/product/${item.id}`} 
              sx={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItem 
                alignItems="flex-start" 
                sx={{ 
                  mb: 1, 
                  borderRadius: '12px', 
                  '&:hover': { bgcolor: 'rgba(248, 192, 196, 0.1)' }, 
                  transition: '0.3s'
                }}
              >
                <ListItemAvatar>
                  <Avatar 
                    variant="rounded" 
                    src={item.image} 
                    sx={{ width: 50, height: 50, borderRadius: '8px' }} 
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {item.name}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                      ${item.price}
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
          ))
        ) : searchTerm ? (
          <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.primary', mt: 2 }}>
            No products found 
          </Typography>
        ) : null}
      </List>
    </Box>
  )
}