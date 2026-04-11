import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Drawer, Button, Link, FormControl, IconButton, MenuItem, Select, Typography, Divider } from '@mui/material'; // أضفت Divider
import { Link as routerLink, useLocation, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

// الترجمة والمتاجر
import { useTranslation } from 'react-i18next';
import useAuthStore from '../../store/useAuthStore';
import useThemeStore from '../../store/useThemeStore';
import useCart from '../../hooks/useCart';

import SearchDrower from './SearchDrower';
import AccountDrower from './AccountDrower';
import { useQueryClient } from '@tanstack/react-query';
import { HashLink } from 'react-router-hash-link';

export default function NavDrower() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();

  const [language, setLanguage] = useState('en');
  const [state, setState] = useState({ left: false });

  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const mode = useThemeStore((state) => state.mode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const { data } = useCart();
  const cartCount = data?.items?.length || 0;

  const handleLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  const handleLogout = () => {
    logout(queryClient);
    navigate('/');
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    setState({ left: false });
  }, [location]);

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}>
        <Typography variant="h5" sx={{ marginTop: 1 }} color="#5D4037">
          <MenuIcon />
        </Typography>
      </Button>

      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer('left', false)}
        sx={{ display: { md: 'none' } }}
      >
        <Box sx={{ width: 300, p: 2 }} role="presentation">
          
          {/* زر الإغلاق في الأعلى */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <IconButton onClick={toggleDrawer('left', false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          
          <Divider sx={{ mb: 2 }} />

          {token ? (
            <>
              <Box display={'flex'} flexDirection={'column'} sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', textTransform: 'uppercase' }, gap: '20px' }}>
                <Link component={routerLink} to={'/'} variant='h5' color="text.primary" underline='none'>{t('Home')}</Link>
                <Link component={routerLink} to={'/Shop'} variant='h5' color="text.primary" underline='none'>{t('Shop')}</Link>
                <Link component={HashLink} smooth to="/#About" variant='h5' color="text.primary" underline='none'>{t('About Us')}</Link>
                <Link component={HashLink} smooth to="/#Service" variant='h5' color="text.primary" underline='none'>{t('Services')}</Link>
                <Link component={HashLink} smooth to="/#faq" variant='h5' color="text.primary" underline='none'>{t('FAQ')}</Link>
              </Box>
              
              <Box display={'flex'} flexDirection={'column'} gap='20px' paddingTop={'20px'} sx={{ display: { xs: 'flex', sm: 'none', textTransform: 'uppercase' } }}>
               
                <Box sx={{ paddingTop: '7px' }} >
                  <SearchDrower drower={t('Search')} color={'text.primary'} />
                </Box>
                
                <FormControl variant="standard" sx={{ marginTop: 1 }}>
                  <Select
                    value=""
                    displayEmpty
                    disableUnderline
                    renderValue={() => (
                      <Typography variant="h5" sx={{ color: 'text.primary', cursor: 'pointer' }}>
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
                      '& .MuiSvgIcon-root': { color: 'text.primary' }
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
                      '& .MuiSvgIcon-root': { color: 'text.primary' }
                    }}
                    value={language}
                    onChange={(e) => handleLanguage(e.target.value)}
                    renderValue={() => <Typography variant='h5'>{t('Language')}</Typography>}
                  >
                    <MenuItem value={'ar'}><Typography variant='h5'>{t('Arabic')}</Typography></MenuItem>
                    <MenuItem value={'en'}><Typography variant='h5'>{t('English')}</Typography></MenuItem>
                  </Select>
                </FormControl>
                
                <Link component={routerLink} to={'/Cart'} color="text.primary" underline='none' sx={{ marginTop: 1 }}>
                  <ShoppingBagOutlinedIcon />({cartCount})
                </Link>
                
                <IconButton onClick={toggleTheme} sx={{ display: 'flex', justifyContent: 'flex-start', px: 0 }}>
                  {mode === 'light' ? <DarkModeIcon sx={{ color: "text.primary" }} /> : <LightModeIcon sx={{ color: "text.primary" }} />}
                </IconButton>
              </Box>
            </>
          ) : (
            <>
              <Box display={'flex'} flexDirection={'column'} sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' }, gap: '20px', textTransform: 'uppercase' }}>
                <Link component={routerLink} to={'/'} variant='h5' color="text.primary" underline='none'>{t('Home')}</Link>
                <Link component={HashLink} smooth to="/#About" variant='h5' color="text.primary" underline='none'>{t('About Us')}</Link>
                <Link component={HashLink} smooth to="/#Service" variant='h5' color="text.primary" underline='none'>{t('Services')}</Link>
                <Link component={HashLink} smooth to="/#faq" variant='h5' color="text.primary" underline='none'>{t('FAQ')}</Link>
              </Box>
              
              <AccountDrower onClick={toggleDrawer('left', false)} drower={t('ACCOUNT')} color={'text.primary'} />
              
              <FormControl variant='standard' sx={{ marginTop: 1, textTransform: 'uppercase' }}>
                <Select
                  disableUnderline
                  sx={{
                    '& .MuiSelect-select': {
                      paddingTop: '0px !important',
                      paddingBottom: '0px !important',
                      display: 'flex',
                      alignItems: 'center',
                    },
                    '& .MuiSvgIcon-root': { color: 'text.primary' }
                  }}
                  value={language}
                  onChange={(e) => handleLanguage(e.target.value)}
                  renderValue={() => <Typography variant='h5'>{t('Language')}</Typography>}
                >
                  <MenuItem value={'ar'}><Typography variant='h5'>{t('Arabic')}</Typography></MenuItem>
                  <MenuItem value={'en'}><Typography variant='h5'>{t('English')}</Typography></MenuItem>
                </Select>
              </FormControl>

              <IconButton onClick={toggleTheme} sx={{ display: 'flex', justifyContent: 'flex-start', px: 0 }}>
                {mode === 'light' ? <DarkModeIcon sx={{ color: "text.primary" }} /> : <LightModeIcon sx={{ color: "text.primary" }} />}
              </IconButton>
            </>
          )}
        </Box>
      </Drawer>
    </div>
  );
}