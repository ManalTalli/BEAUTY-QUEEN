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
import { Button } from '@mui/material';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export default function Navbar() {
  const langList = ['English', 'Arabic'];
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const { data } = useCart();
  const cartCount = data?.items?.length || 0;
  const navigate = useNavigate();
  const { t } = useTranslation();
  const mode = useThemeStore ((state)=>state.mode);
  const toggleTheme=useThemeStore ((state=>state.toggleTheme));
  const queryClient = useQueryClient();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  const handleLogout = () => {
    logout(queryClient);
    navigate('/');
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        background: "",
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
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '24px', textTransform: 'uppercase' }}>
                  <Link component={routerLink} to={'/Shop'} color='black' underline='none'>{t('Shop')}</Link>
                  <Link component={routerLink} to={'/NewArrivals'} color='black' underline='none'>{t('New Arrivals')}</Link>
                  <Link component={routerLink} to={'/Bestsellers'} color='black' underline='none'>{t('Bestsellers')}</Link>
                  <Link component={routerLink} to={'/Gifts'} color='black' underline='none'>{t('Gifts')}</Link>
                </Box>
              </>
            ) :
            (<></>)
          }
          <Link component={routerLink} to={'/'} ><img src={Logo} alt="" /></Link>

          <Box color='black' display='flex' gap='24px'>
            <Typography><DropDown title={t('Language')} items={langList} /></Typography>
            <button onClick={() => changeLanguage('ar')}>ar</button>
            <button onClick={() => changeLanguage('en')}>en</button>
            <Button onClick={toggleTheme} color='inherit'>
              {mode === 'light'?"dark":"light"}
            </Button>

            {token ?
              (
                <>
                  <SearchDrower drower='SEARCH'/>
                  <Box display='flex' alignItems={'center'} justifyContent={'space-between'} gap={'10px'}>
                    <Link component={routerLink} to={'/Profile'} color="primary" underline='none'>{t('Profile')}</Link>
                    <Link component={'button'} onClick={handleLogout} color="inherit" underline='none'>{t('Logout')}</Link>
                  </Box>
                  <Link component={routerLink} to={'/Cart'} color='#000' underline='none'><ShoppingBagOutlinedIcon />({cartCount})</Link>
                </>
              ) :
              (<>
                <AccountDrower drower='ACCOUNT' />
                
              </>)
            }
          </Box>



        </Toolbar>
      </AppBar>

    </Box >



  );
}
