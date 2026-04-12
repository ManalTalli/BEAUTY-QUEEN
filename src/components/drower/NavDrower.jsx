import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Box, Drawer, Button, Link, FormControl, IconButton, MenuItem,
  Select, Typography, Divider, List, ListItem, ListItemIcon,
  ListItemText, Stack, Avatar, ListItemButton
} from '@mui/material';
import { Link as routerLink, useLocation, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';

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

  const [language, setLanguage] = useState(i18n.language || 'en');
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
    setState({ left: false });
    navigate('/');
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setState({ left: open });
  };

  useEffect(() => {
    setState({ left: false });
  }, [location]);

  const commonTextStyle = {
    fontSize: '1.1rem',
    textTransform: 'uppercase',
    fontWeight: 500,
    color: 'text.primary'
  };

  const NavItem = ({ to, text, icon, isHash = false }) => (
    <ListItem disablePadding sx={{ mb: 0.5 }}>
      <ListItemButton
        component={isHash ? HashLink : routerLink}
        to={to}
        smooth={isHash ? "true" : undefined}
        sx={{ borderRadius: '12px', py: 1 }}
      >
        <ListItemIcon sx={{ minWidth: 40, color: 'text.primary' }}>{icon}</ListItemIcon>
        <ListItemText primary={<Typography sx={commonTextStyle}>{text}</Typography>} />
      </ListItemButton>
    </ListItem>
  );

  return (
    <Box>
      <IconButton onClick={toggleDrawer(true)} sx={{ color: '#5D4037' }}>
        <MenuIcon fontSize="large" />
      </IconButton>

      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "70%",
            p: 3,
            borderRadius: '0 15px 15px 0',
            bgcolor: 'background.default'
          }
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: '1px' }}>
            KASHOPE
          </Typography>
          <IconButton onClick={toggleDrawer(false)} sx={{ bgcolor: 'rgba(0,0,0,0.05)' }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>


        {token ? (<>
          <Divider sx={{ mb: 2 }} />
          <List disablePadding>
            <NavItem to="/" text={t('Home')} icon={<HomeOutlinedIcon />} />
            <NavItem to="/Shop" text={t('Shop')} icon={<StorefrontOutlinedIcon />} />
            <NavItem to="/#About" text={t('About Us')} icon={<InfoOutlinedIcon />} isHash />
            <NavItem to="/#Service" text={t('Services')} icon={<SettingsSuggestOutlinedIcon />} isHash />
            <NavItem to="/#faq" text={t('FAQ')} icon={<HelpOutlineIcon />} isHash />
          </List>

          <Box sx={{ mt: 'auto' }}>
            <Divider sx={{ my: 2 }} />

            <Stack spacing={0.5}>
              <ListItem disablePadding>
                <ListItemButton sx={{ borderRadius: '12px', py: 1 }}>
                  <ListItemIcon sx={{ minWidth: 40, color: 'text.primary' }}>
                    <SearchIcon />
                  </ListItemIcon>
                  <SearchDrower drower={t('Search')} color={'text.primary'}  sx={{ p: 0 }} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton onClick={toggleTheme} sx={{ borderRadius: '12px', py: 1 }}>
                  <ListItemIcon sx={{ minWidth: 40, color: 'text.primary' }}>
                    {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                  </ListItemIcon>
                  <ListItemText primary={<Typography sx={commonTextStyle}>{mode === 'light' ? 'Dark Mode' : 'Light Mode'}</Typography>} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ borderRadius: '12px', py: 1, cursor: 'default' }}>
                  <ListItemIcon sx={{ minWidth: 40, color: 'text.primary' }}>
                    <LanguageIcon fontSize="small" />
                  </ListItemIcon>
                  <FormControl variant="standard" fullWidth>
                    <Select
                      value={language}
                      onChange={(e) => handleLanguage(e.target.value)}
                      disableUnderline
                      sx={{ ...commonTextStyle, '& .MuiSelect-select': { py: 0 } }}
                    >
                      <MenuItem value="en">ENGLISH</MenuItem>
                      <MenuItem value="ar">العربية</MenuItem>
                    </Select>
                  </FormControl>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={routerLink} to="/Cart" sx={{ borderRadius: '12px', py: 1 }}>
                  <ListItemIcon sx={{ minWidth: 40, color: 'text.primary' }}>
                    <ShoppingBagOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={<Typography sx={commonTextStyle}>{t('Cart')} ({cartCount})</Typography>} />
                </ListItemButton>
              </ListItem>
            </Stack>


            <Box sx={{ bgcolor: 'primary.light', p: 2, borderRadius: '20px', mt: 3, color: 'white' }}>
              <ListItemButton
                component={routerLink}
                to="/Profile"
                sx={{ borderRadius: '12px', mb: 1, p: 0, '&:hover': { bgcolor: 'transparent' } }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar sx={{ bgcolor: 'white', color: 'primary.main' }}><PersonOutlineIcon /></Avatar>
                  <Typography sx={{ ...commonTextStyle, color: 'white', fontWeight: 'bold' }}>{t('My Account')}</Typography>
                </Stack>
              </ListItemButton>

              <Button
                fullWidth
                variant="contained"
                onClick={handleLogout}
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': { bgcolor: '#f0f0f0' },
                  borderRadius: '10px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  mt: 1
                }}
              >
                {t('Logout')}
              </Button>
            </Box></Box>
        </>) : (<>
          <Divider sx={{ mb: 2 }} />
          <List disablePadding>
            <NavItem to="/" text={t('Home')} icon={<HomeOutlinedIcon />} />
            <NavItem to="/#About" text={t('About Us')} icon={<InfoOutlinedIcon />} isHash />
            <NavItem to="/#Service" text={t('Services')} icon={<SettingsSuggestOutlinedIcon />} isHash />
            <NavItem to="/#faq" text={t('FAQ')} icon={<HelpOutlineIcon />} isHash />
          </List>
          <Box sx={{  }}>
            <Divider sx={{ my: 2 }} />

            <Stack spacing={0.5}>


              <ListItem disablePadding>
                <ListItemButton sx={{ borderRadius: '12px', py: 1, cursor: 'default' }}>
                  <ListItemIcon sx={{ minWidth: 40, color: 'text.primary' }}>
                    <LanguageIcon fontSize="small" />
                  </ListItemIcon>
                  <FormControl variant="standard" fullWidth>
                    <Select
                      value={language}
                      onChange={(e) => handleLanguage(e.target.value)}
                      disableUnderline
                      sx={{ ...commonTextStyle, '& .MuiSelect-select': { py: 0 } }}
                    >
                      <MenuItem value="en">ENGLISH</MenuItem>
                      <MenuItem value="ar">العربية</MenuItem>
                    </Select>
                  </FormControl>
                </ListItemButton>
              </ListItem>


              <ListItem disablePadding>
                <ListItemButton onClick={toggleTheme} sx={{ borderRadius: '12px', py: 1 }}>
                  <ListItemIcon sx={{ minWidth: 40, color: 'text.primary' }}>
                    {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                  </ListItemIcon>
                  <ListItemText primary={<Typography sx={commonTextStyle}>{mode === 'light' ? 'Dark Mode' : 'Light Mode'}</Typography>} />
                </ListItemButton>
              </ListItem>

            </Stack>
          </Box>
          
          <Box sx={{ mt: 2, px: 1 ,display:'flex',gap:'8px'}}>
            <Avatar sx={{ bgcolor: 'white', color: 'primary.main'}}><PersonOutlineIcon /></Avatar>
            <AccountDrower drower={t('ACCOUNT')} color={'text.secondary'} />
          </Box></>
        )}

      </Drawer>
    </Box>
  );
}