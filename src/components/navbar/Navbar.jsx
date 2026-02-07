import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import DropDown from '../dropdown/DropDown';
import Link from '@mui/material/Link';
import { Link as routerLink } from 'react-router-dom';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Logo from '../../assets/img/Logo.png'
import Drawer1 from '../drower/Drower1';

export default function Navbar() {
  const langList =['English','Arabic']

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        background: "white",
        boxShadow: 'none'
      }} >
        <Toolbar display='flex' sx={{justifyContent:'space-between'}}>
          <IconButton sx={{ mr: 2, display: { sm: 'none' } }}
            size="large"
            edge="start"
            color="#000"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '24px', textTransform: 'uppercase' }}>
            <Link component={routerLink} to={'/Shop'} color='black' underline='none'>Shop</Link>
            <Link component={routerLink} to={'/NewArrivals'} color='black' underline='none'>New Arrivals</Link>
            <Link component={routerLink} to={'/Bestsellers'} color='black' underline='none'>Bestsellers</Link>
            <Link component={routerLink} to={'/Gifts'} color='black' underline='none'>Gifts</Link>
          </Box>

          <Link component={routerLink} to={'/'} ><img src={Logo} alt="" /></Link>

            <Box color='black' display='flex' gap='24px'>
              <Typography><DropDown title='Language' items={langList}/></Typography>
              <Drawer1 drower='SEARCH'/>
              <Drawer1 drower='ACCOUNT'/>
              <Link component={routerLink} to={'/Cart'} color='#000'><ShoppingBagOutlinedIcon/></Link>
              
            </Box>
            


        </Toolbar>
      </AppBar>

    </Box >



  );
}
