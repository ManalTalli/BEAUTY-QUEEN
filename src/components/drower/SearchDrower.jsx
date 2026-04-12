import * as React from 'react';
import { Box, Drawer, Button, IconButton, Typography, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Search from '../search/Search';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function SearchDrower({ drower, color,variant }) {
  const [state, setState] = React.useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setState({ ...state, [anchor]: open });
  };

  const location = useLocation();
  useEffect(() => {
    setState({ right: false });
  }, [location]);

  return (
    <div>
      <Button 
        onClick={toggleDrawer('right', true)} 
        sx={{ padding: '0px 6px 4px 0px ', textTransform: 'none' }}
      >
        <Typography color={color} variant={variant} sx={{  textTransform: 'uppercase' }}>
          {drower}
        </Typography>
      </Button>
      
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        PaperProps={{
          sx: { 
            width: { xs: '70%', sm: 380 }, 
            borderRadius: { xs: '15px 0 0 15px', sm: '20px 0 0 20px' }, 
            p: 3,
            bgcolor: 'background.paper'
          }
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
            Search Products
          </Typography>
          <IconButton onClick={toggleDrawer('right', false)} sx={{ bgcolor: 'background.paper' }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>

        <Box sx={{ flexGrow: 1, overflowY: 'auto',color:'text.primary' }}>
          <Search />
        </Box>
      </Drawer>
    </div>
  );
}