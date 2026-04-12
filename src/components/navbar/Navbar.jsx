import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Typography, Link,
  FormControl, MenuItem, Select, Badge, useTheme
} from '@mui/material';
import { Link as routerLink, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { useQueryClient } from '@tanstack/react-query';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import useAuthStore from '../../store/useAuthStore';
import useCart from '../../hooks/useCart';
import useThemeStore from '../../store/useThemeStore';
import i18n from '../../i18next';

import SearchDrower from '../drower/SearchDrower';
import AccountDrower from '../drower/AccountDrower';
import NavDrower from '../drower/NavDrower';

export default function Navbar() {
  const token = useAuthStore((state) => state.token);
  const [Language, setLanguage] = useState(i18n.language || 'en');
  const logout = useAuthStore((state) => state.logout);
  const { data } = useCart();
  const cartCount = data?.items?.length || 0;
  const navigate = useNavigate();
  const { t } = useTranslation();
  const mode = useThemeStore((state) => state.mode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const queryClient = useQueryClient();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  }

  const handleLogout = () => {
    logout(queryClient);
    navigate('/');
  }

  const commonTextStyle = {
    fontFamily: "'Inter', sans-serif", 
    fontSize: '0.9rem',
    fontWeight: 600,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: 'text.primary',
    textDecoration: 'none',
    transition: '0.3s',
    '&:hover': { opacity: 0.7, color: 'primary.main' }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed"
        sx={{
          backgroundColor: isScrolled ? 'background.default' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
          transition: 'all 0.4s ease',
          color: '#5D4037',
          borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
          py: isScrolled ? 0.5 : 1
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 5 } }}>
          
          <Box sx={{ mr: 2, display: { md: 'none' } }}>
            <NavDrower />
          </Box>

          {token ? (
            <>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '25px', flex: 1 }}>
                <Link component={routerLink} to={'/'} sx={commonTextStyle}>{t('Home')}</Link>
                <Link component={routerLink} to={'/Shop'} sx={commonTextStyle}>{t('Shop')}</Link>
                <Link component={HashLink} smooth to="/#About" sx={commonTextStyle}>{t('About Us')}</Link>
                <Link component={HashLink} smooth to="/#Service" sx={commonTextStyle}>{t('Services')}</Link>
                <Link component={HashLink} smooth to="/#faq" sx={commonTextStyle}>{t('FAQ')}</Link>
              </Box>

              <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <Link component={routerLink} to={'/'} sx={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{
                      ...commonTextStyle,
                      fontSize: isScrolled ? '1.4rem' : '1.7rem',
                      fontWeight: 900,
                      letterSpacing: isScrolled ? '4px' : '7px',
                      '&:hover': { color: '#5D4037', letterSpacing: '8px' }
                    }}
                  >
                    KASHOPE
                  </Typography>
                </Link>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1, justifyContent: 'flex-end' }}>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                   <SearchDrower drower={t('Search')} color={'text.primary'} variant={'subtitle1'} />
                </Box>

                <FormControl variant="standard" sx={{ display: { xs: 'none', md: 'flex' }}}>
                  <Select
                    value=""
                    displayEmpty
                    disableUnderline
                    renderValue={() => <Typography sx={commonTextStyle}>{t('ACCOUNT')}</Typography>}
                  >
                    <MenuItem component={routerLink} to="/Profile"><Typography variant='h5'>{t('Profile')}</Typography></MenuItem>
                    <MenuItem onClick={handleLogout}><Typography variant='h5'>{t('Logout')}</Typography></MenuItem>
                  </Select>
                </FormControl>

                <FormControl variant='standard' sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <Select
                    disableUnderline
                    value={Language}
                    onChange={(e) => handleLanguage(e.target.value)}
                    renderValue={() => <Typography sx={commonTextStyle}>{t('Language')}</Typography>}
                  >
                    <MenuItem value={'ar'}><Typography variant='h5'>{t('Arabic')}</Typography></MenuItem>
                    <MenuItem value={'en'}><Typography variant='h5'>{t('English')}</Typography></MenuItem>
                  </Select>
                </FormControl>

                <Link component={routerLink} to={'/Cart'} sx={{ ...commonTextStyle,display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                  <Badge badgeContent={cartCount} color="primary">
                    <ShoppingBagOutlinedIcon sx={{ fontSize: '1.4rem' }} />
                  </Badge>
                </Link>

                <IconButton onClick={toggleTheme} sx={{ p: 0 ,display: { xs: 'none', md: 'flex' }}}>
                  {mode === 'light' ? <DarkModeIcon sx={{ color: "text.primary", fontSize: '1.3rem' }} /> : <LightModeIcon sx={{ color: "text.primary", fontSize: '1.3rem' }} />}
                </IconButton>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '25px', flex: 1 }}>
                <Link component={routerLink} to={'/'} sx={commonTextStyle}>{t('Home')}</Link>
                <Link component={HashLink} smooth to="/#About" sx={commonTextStyle}>{t('About Us')}</Link>
                <Link component={HashLink} smooth to="/#Service" sx={commonTextStyle}>{t('Services')}</Link>
                <Link component={HashLink} smooth to="/#faq" sx={commonTextStyle}>{t('FAQ')}</Link>
              </Box>

              <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <Link component={routerLink} to={'/'} sx={{ textDecoration: 'none' }}>
                  <Typography sx={{ ...commonTextStyle, fontSize: isScrolled ? '1.4rem' : '1.7rem', fontWeight: 900, letterSpacing: '7px' }}>
                    KASHOPE
                  </Typography>
                </Link>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1, justifyContent: 'flex-end' }}>
                <FormControl variant='standard'>
                  <Select
                    disableUnderline
                    value={Language}
                    onChange={(e) => handleLanguage(e.target.value)}
                    renderValue={() => <Typography sx={commonTextStyle}>{t('Language')}</Typography>}
                  >
                    <MenuItem value={'ar'}><Typography variant='h5'>{t('Arabic')}</Typography></MenuItem>
                    <MenuItem value={'en'}><Typography variant='h5'>{t('English')}</Typography></MenuItem>
                  </Select>
                </FormControl>

                <AccountDrower  drower={t('ACCOUNT')} color={'text.primary'} />

                <IconButton onClick={toggleTheme} sx={{ p: 0 }}>
                  {mode === 'light' ? <DarkModeIcon sx={{ color: "text.primary", fontSize: '1.3rem' }} /> : <LightModeIcon sx={{ color: "text.primary", fontSize: '1.3rem' }} />}
                </IconButton>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}