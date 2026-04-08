import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { Link as routerLink } from 'react-router-dom';
import { FormControl, IconButton, MenuItem, Select, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Registeration from '../registeration/Registeration';
import { useTranslation } from 'react-i18next';
import LineHover from '../lineHover/LineHover';
import MenuIcon from '@mui/icons-material/Menu';
import useAuthStore from '../../store/useAuthStore';
import SearchDrower from './SearchDrower';
import AccountDrower from './AccountDrower';
import { useState } from 'react';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import useCart from '../../hooks/useCart';
import useThemeStore from '../../store/useThemeStore';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function NavDrower() {
      const [Language, setLanguage] = useState('en');
  const { data } = useCart();
      const cartCount = data?.items?.length || 0;
        const mode = useThemeStore((state) => state.mode);
      
  const toggleTheme = useThemeStore((state => state.toggleTheme));

  const { t } = useTranslation();
  const token = useAuthStore((state) => state.token);
const handleLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  }
  const handleLogout = () => {
    logout(queryClient);
    navigate('/');
  }
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
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 440 }}
    role="presentation"
  >
    <Box sx={{ display: 'flex', justifyContent: 'flex-start'}}>
      <IconButton onClick={toggleDrawer(anchor, false)}>
        <CloseIcon />
      </IconButton>
    </Box>

  
  </Box>
);

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor} >
          <Button onClick={toggleDrawer(anchor, true)}><Typography variant='h5' sx={{ marginTop: 1 }} color='text.primary'><IconButton
            size="large"
            edge="start"
            color="text.primary"
            aria-label="menu"
          >
            <MenuIcon />
            
          </IconButton></Typography></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            color='primary'
             sx={{ mr: 2, display: { md: 'none' } }}
          >
            {list(anchor)}
            {token ?
            (
              <>
                <Box display={'flex'} flexDirection={'column'} sx={{ display: { xs:'flex',sm: 'flex', md: 'none' }, gap: '20px' }}>
                  <Link component={routerLink} to={'/Shop'} variant='h5' color="text.primary" underline='none'>{t('Shop')}</Link>
                  <Link component={routerLink} to={'/NewArrivals'} variant='h5' color="text.primary" underline='none'>{t('New Arrivals')}</Link>
                  <Link component={routerLink} to={'/Bestsellers'} variant='h5' color="text.primary" underline='none'>{t('Bestsellers')}</Link>
                  <Link component={routerLink} to={'/Gifts'} variant='h5' color="text.primary" underline='none'>{t('Gifts')}</Link>
                </Box>
              </>
            ) :
            (<></>)
          }
          


          <Box color='black' display='flex' flexDirection={'column'} gap='20px' paddingTop={'20px'} sx={{ display: { xs: 'flex', sm: 'none' } }}>
            {token ? (<>
              <SearchDrower drower={t('Search')} />
              <FormControl variant="standard" sx={{ marginTop: 1 }}>
                <Select
                  value=""
                  displayEmpty
                  disableUnderline
                  renderValue={() => (
                    <Typography variant="h5" sx={{ color: 'text.primary', cursor: 'pointer' }}>
                      {t('Account')}
                    </Typography>
                  )}
                  sx={{
                    '& .MuiSelect-select': {
                      paddingTop: '0px !important',
                      paddingBottom: '0px !important',
                      display: 'flex',
                      alignItems: 'center',
                    },
                    '& .MuiSvgIcon-root': {
                      color: 'text.primary',
                    }
                  }}
                >
                  <MenuItem component={routerLink} to="/Profile">
                    <Typography variant="h5">{t('Profile')}</Typography>
                  </MenuItem>


                  <MenuItem onClick={handleLogout}>
                    <Typography variant="h5">{t('Logout')}</Typography>
                  </MenuItem>
                </Select>
              </FormControl>

            </>)
              : (<></>)}
            <FormControl variant='standard' sx={{ marginTop: 1 }}>
              <Select
                disableUnderline
                sx={{
                  '& .MuiSelect-select': {
                    paddingTop: '0px !important',
                    paddingBottom: '0px !important',
                    display: 'flex',
                    alignItems: 'center',
                  },
                  '& .MuiSvgIcon-root': {
                    color: 'text.primary',
                  }
                }}
                labelId="Language-label"
                id="Language"
                value={Language}
                onChange={(e) => handleLanguage(e.target.value)}
                renderValue={() => (
                  <Typography variant='h5'>{t('Language')}</Typography>)}
              >
                <MenuItem value={'ar'}><Typography variant='h5'>{t('Arabic')}</Typography></MenuItem>
                <MenuItem value={'en'}><Typography variant='h5'>{t('English')}</Typography></MenuItem>
              </Select>
            </FormControl>
            {token ?
              (
                <>


                  <Link component={routerLink} to={'/Cart'} color="text.primary" underline='none' sx={{ marginTop: 1 }}><ShoppingBagOutlinedIcon />({cartCount})</Link>
                </>
              ) :
              (<>
                <AccountDrower drower={t('Account')} />

              </>)
            }

            <Button onClick={toggleTheme} color='inherit' sx={{display:'flex',justifyContent:'flex-start'}}>
              {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon sx={{ color: "text.primary", padding: "0px" }} />}
            </Button>
          </Box>


          </Drawer>
         
        </React.Fragment>
      ))}
    </div>
  );
}
