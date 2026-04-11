import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton'; // استيراد زر الأيقونة
import CloseIcon from '@mui/icons-material/Close'; // استيراد أيقونة الإغلاق
import { useTranslation } from 'react-i18next';
import Search from '../search/Search';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Typography } from '@mui/material';

export default function SearchDrower({ drower, color }) {
  const { t } = useTranslation();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }} // زدت العرض قليلاً ليكون مناسباً للبحث
      role="presentation"
    >
      {/* رأس الدروير يحتوي على زر الإغلاق */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={toggleDrawer(anchor, false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <Divider />
      
      {/* محتوى البحث */}
      <Box sx={{ p: 2 }}>
        <Search />
      </Box>
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
          <Button 
            onClick={toggleDrawer(anchor, true)} 
            sx={{ padding: '0px', display: 'flex', justifyContent: 'flex-start' }}
          >
            <Typography color={color} variant='h5' paddingTop={'5px'}>
              {drower}
            </Typography>
          </Button>
          
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {/* استدعاء الـ list التي تحتوي الآن على زر الإغلاق والبحث */}
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}