import React, { useState } from 'react'
import useCategories from '../../hooks/useCategories'
import { Box, Tabs, Tab, Paper } from '@mui/material';
import Loader from '../../ui/Loader';

export default function Categories({ onSelect }) {
  const { data, isLoading, isError, error } = useCategories();
  const [value, setValue] = useState(0);

  if (isLoading) return <Loader />
  if (isError) return <Box sx={{ color: 'red', p: 2 }}>{error.message}</Box>
  console.log(data);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', mt: 2, mb: 4 }}>
      <Paper
        elevation={0}
        sx={{
          backgroundColor:'background.default',
          width: { xs: '95%', md: '50%' }, 
          border: '1px solid',
          borderColor:'text.primary',
          borderRadius: '4px',
          overflow: 'hidden',
          ml: 0 
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto" 
          allowScrollButtonsMobile
          sx={{
            minHeight: '48px',
            '& .MuiTabs-indicator': {
              backgroundColor: 'text.primary',
              height: '2px',
            },
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '0.80rem',
              color: 'text.primary',
              minWidth: 'auto', 
              padding: '12px 15px',
              '&.Mui-selected': {
                color: '',
              },
            },
            '& .MuiTabs-scrollButtons': {
              width: '40px',
              '&.Mui-disabled': { opacity: 0.3 },
            }
          }}
        >
          <Tab
            label="ALL"
            onClick={() => onSelect("ALL")}
          />

          {data?.response?.data?.map((category) => (
            <Tab
              key={category.id}
              label={category.name}
              onClick={() => onSelect(category.id)}
            />
          ))}
        </Tabs>
      </Paper>
    </Box>
  )
}