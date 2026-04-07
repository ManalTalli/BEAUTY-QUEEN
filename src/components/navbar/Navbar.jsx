import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import DropDown from '../dropdown/DropDown';
import Link from '@mui/material/Link';
import { Link as routerLink, useNavigate } from 'react-router-dom';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Logo from '../../assets/img/Logo.png'
import SearchDrower from '../drower/SearchDrower';
import AccountDrower from '../drower/AccountDrower';
import useAuthStore from '../../store/useAuthStore';
import useCart from '../../hooks/useCart';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18next';
import useThemeStore from '../../store/useThemeStore';
import { Button, FormControl, InputLabel, MenuItem, Select, Switch, useTheme } from '@mui/material';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import lightLogo from '../../assets/img/Logo.png';
import darkLogo from '../../assets/img/LOGODARk.png';

export default function Navbar() {
  const token = useAuthStore((state) => state.token);
  const [Language, setLanguage] = useState('en');
  const logout = useAuthStore((state) => state.logout);
  const { data } = useCart();
  const cartCount = data?.items?.length || 0;
  const navigate = useNavigate();
  const { t } = useTranslation();
  const mode = useThemeStore((state) => state.mode);
  const toggleTheme = useThemeStore((state => state.toggleTheme));
  const queryClient = useQueryClient();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  
  const handleLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  }
  const handleLogout = () => {
    logout(queryClient);
    navigate('/');
  }
  const logoSrc = isDarkMode ? darkLogo : lightLogo;


  return (
    <Box sx={{ flexGrow: 1, textTransform: 'uppercase' }} >
      <AppBar position="static" sx={{
        backgroundColor: 'primary',
        boxShadow: 'none'
      }} >
        <Toolbar display='flex' sx={{ justifyContent: 'space-between' }}>
          <IconButton sx={{ mr: 2, display: { sm: 'none' } }}
            size="large"
            edge="start"
            color="#000"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          {token ?
            (
              <>
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '24px' }}>
                  <Link component={routerLink} to={'/Shop'} variant='h5' color="text.primary" underline='none'>{t('Shop')}</Link>
                  <Link component={routerLink} to={'/NewArrivals'} variant='h5' color="text.primary" underline='none'>{t('New Arrivals')}</Link>
                  <Link component={routerLink} to={'/Bestsellers'} variant='h5' color="text.primary" underline='none'>{t('Bestsellers')}</Link>
                  <Link component={routerLink} to={'/Gifts'} variant='h5' color="text.primary" underline='none'>{t('Gifts')}</Link>
                </Box>
              </>
            ) :
            (<></>)
          }
          <Link component={routerLink} color="text.primary" to={'/'} ><img src={logoSrc} alt="" /></Link>
          

          <Box color='black' display='flex' gap='24px'>
            {token ? (<>
            <SearchDrower drower={t('Search')} />
            <FormControl variant="standard" sx={{ m: 1 }}>
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
            <FormControl variant='standard' sx={{ m: 1 }}>
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
                  

                  <Link component={routerLink} to={'/Cart'} color="text.primary" underline='none' sx={{ m: 1 }}><ShoppingBagOutlinedIcon />({cartCount})</Link>
                </>
              ) :
              (<>
                <AccountDrower drower={t('Account')} />

              </>)
            }

            <Button onClick={toggleTheme} color='inherit'>
              {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon sx={{ color: "text.primary" }} />}
            </Button>
          </Box>



        </Toolbar>
      </AppBar>

    </Box >



  );
}
