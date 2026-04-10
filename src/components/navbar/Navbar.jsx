import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
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
import NavDrower from '../drower/NavDrower';
import { useEffect } from 'react';
import { HashLink, NavHashLink } from 'react-router-hash-link';

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
  const logoSrc = lightLogo;
  const [isScrolled, setIsScrolled] = useState(false);

  // مراقبة السكرول
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, textTransform: 'uppercase' }} >
      <AppBar position="fixed"
        sx={{
          backgroundColor: isScrolled ? 'primary.main' : 'transparent',
          boxShadow: isScrolled ? 3 : 'none',
          transition: 'all 0.2s ease-in-out',
          color: '#5D4037', // لون النصوص (البني الداكن)

          // الحالة عند التأشير بالماوس (حتى لو لم ينزل للسفل)
          '&:hover': {
            backgroundColor: 'rgba(248, 192, 196, 0.95)',
            backdropFilter: 'blur(8px)', // تأثير تغبيش أنيق خلف النافبار
          }
        }} >

        <Toolbar display='flex' sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ mr: 2, display: { md: 'none' } }}>
            <NavDrower />
          </Box>
          {token ?
            (
              <>
                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, gap: '20px' }}>
                  <Link component={routerLink} to={'/'} variant='h5' color="#5D4037" underline='none'>{t('Home')}</Link>
                  <Link component={routerLink} to={'/Shop'} variant='h5' color="#5D4037" underline='none'>{t('Shop')}</Link>
                  <Link component={HashLink} smooth to="/#About" variant='h5' color="#5D4037" underline='none'>{t('About Us')}</Link>
                  <Link component={HashLink} smooth to="/#Service" variant='h5' color="#5D4037" underline='none'>{t('Services')}</Link>
                  <Link component={HashLink} smooth to="/#faq" variant='h5' color="#5D4037" underline='none'>{t('FAQ')}</Link>
                </Box>
                <Link component={routerLink} color="#5D4037" to={'/'} ><img src={logoSrc} alt="" /></Link>

                <Box display='flex' gap={'20px'} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                  <Box sx={{ paddingTop: '7px' }}>
                    <SearchDrower drower={t('Search')} color={'#5D4037'} /></Box>
                  <FormControl variant="standard" sx={{ marginTop: 1 }}>
                    <Select
                      value=""
                      displayEmpty
                      disableUnderline
                      renderValue={() => (
                        <Typography variant="h5" sx={{ color: '#5D4037', cursor: 'pointer' }}>
                          {t('ACCOUNT')}
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
                          color: '#5D4037',
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
                          color: '#5D4037',
                        }
                      }}
                      labelId="Language-label"
                      id="Language"
                      value={Language}
                      onChange={(e) => handleLanguage(e.target.value)}
                      renderValue={() => (
                        <Typography variant='h5' color='#5D4037'>{t('Language')}</Typography>)}
                    >
                      <MenuItem value={'ar'}><Typography variant='h5'>{t('Arabic')}</Typography></MenuItem>
                      <MenuItem value={'en'}><Typography variant='h5'>{t('English')}</Typography></MenuItem>
                    </Select>
                  </FormControl>
                  <Link component={routerLink} to={'/Cart'} color="#5D4037" variant='h5' underline='none' sx={{ marginTop: 1 }}><ShoppingBagOutlinedIcon sx={{ width: '20px' }} />({cartCount})</Link>
                  <IconButton onClick={toggleTheme} sx={{ paddingRight: '0px' }}>
                    {mode === 'light' ? <DarkModeIcon sx={{ color: "#5D4037", padding: "0px", width: '20px' }} /> : <LightModeIcon sx={{ color: "#5D4037", padding: "0px", width: '20px' }} />}
                  </IconButton>
                </Box>
              </>) :
            (<>
              <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, gap: '20px' }}>
                <Link component={routerLink} to={'/'} variant='h5' color="#5D4037" underline='none'>{t('Home')}</Link>
                <Link component={HashLink} smooth to="/#About" variant='h5' color="#5D4037" underline='none'>{t('About Us')}</Link>
                <Link component={HashLink} smooth to="/#Service" variant='h5' color="#5D4037" underline='none'>{t('Services')}</Link>
                <Link component={HashLink} smooth to="/#faq" variant='h5' color="#5D4037" underline='none'>{t('FAQ')}</Link>

              </Box>
              <Link component={routerLink} color="#5D4037" to={'/'} ><img src={logoSrc} alt="" /></Link>
              <Box display={'flex'} gap={'20px'} sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }}}>
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
                      color: '#5D4037',
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

              <AccountDrower drower={t('ACCOUNT')} />


              <IconButton onClick={toggleTheme} sx={{ paddingRight: '0px' }}>
                {mode === 'light' ? <DarkModeIcon sx={{ color: "#5D4037", padding: "0px", width: '20px' }} /> : <LightModeIcon sx={{ color: "#5D4037", padding: "0px", width: '20px' }} />}
              </IconButton>
              </Box>

            </>)}

        </Toolbar>
      </AppBar>
    </Box >
  );
}
