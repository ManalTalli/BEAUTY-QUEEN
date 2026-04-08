import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useTranslation } from 'react-i18next';
import Search from '../search/Search';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Typography } from '@mui/material';

export default function SearchDrower({drower}) {
    const {t} = useTranslation ();
    const [state, setState] = React.useState({
    
      });
  

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>     
      <Divider />      
    </Box>
  );
  const location = useLocation();
  useEffect(() => {
    setState({ right: false });
  }, [location]);
  

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} sx={{padding:'0px',display:'flex',justifyContent:'flex-start'}}><Typography color="text.primary" variant='h5' paddingTop={'5px'}>{drower}</Typography></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Search />
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
