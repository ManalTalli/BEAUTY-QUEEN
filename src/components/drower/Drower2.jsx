import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { Link as routerLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Drawer1({ drower }) {
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
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} color='black'>{drower}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}>

            <Box display='flex' padding='24px' alignItems='center' justifyContent='space-between'>
              <Typography component='h3' fontSize='14px' fontWeight='700' lineHeight='16.8px'>ACCOUNT</Typography>
              <CloseIcon style={{ cursor: 'pointer' }}
                onClick={toggleDrawer(anchor, false)} /></Box>
            <Box borderBottom='none' paddingLeft='24px' paddingRight='24px'>
              <Typography component='h3' fontSize='14px' fontWeight='700' lineHeight='16.8px' marginTop='12px' marginBottom='8px'>WELCOME TO BEAUTY QUEEN</Typography>
              <Typography marginBottom='16px' fontSize='11px' fontWeight='400' lineHeight='14.3px' color='rgb(26, 26, 26)'>REGISTER ON BEAUTY QUEEN TO SAVE YOUR DELIVERY ADDRESSES,<br /> AND MANAGE YOUR ORDERS AND RETURNS.</Typography>
              <Box display='flex' flexDirection='column'>
                <Link
                  component={routerLink}
                  to="/Login" fontSize='11.07px' fontWeight='400' lineHeight='14.391px' padding='10px'
                  sx={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '10px',
                    backgroundColor: '#ffffff',
                    color: 'rgb(26, 26, 26)',
                    textDecoration: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 1,
                    transition: 'color 0.4s ease',
                    border:'1px solid black',
                    

                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#808080',
                      transition: 'all 0.4s ease',
                      zIndex: -1,
                    },
                    '&:hover::before': {
                      left: 0,
                    },
                    '&:hover': {
                      color: '#fff',
                      border:'1px solid #808080',
                    },
                  }}
                >
                  LOG IN
                </Link>
                <Box display='flex' flexDirection='column' alignItems='center' paddingTop='10px' >
                  <Link
                    component={routerLink}
                    to="/Register" lineHeight='14.391px' textAlign='center' 
                    sx={{
                      color: 'rgb(26, 26, 26)',
                      textDecoration: 'none',
                      position: 'relative',
                      display: 'inline-block',
                      paddingBottom: '5px',
                      fontSize: '11.5px',
                      fontWeight: '400',
                      overflow: 'hidden',

                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        height: '2px',
                        backgroundColor: 'black',
                        width: '102px',
                        left: 0,
                        transition: 'transform 0.6s ease, left 0.6s ease',
                      },

                      '&:hover::after': {
                        animation: 'cycleRight 0.8s ease-in-out forwards',
                      },

                      '&:not(:hover)::after': {
                        animation: 'cycleLeft 0.8s ease-in-out forwards',
                      },

                      '@keyframes cycleRight': {
                        '0%': { transform: 'translateX(0)' },
                        '49%': { transform: 'translateX(100%)' },
                        '50%': { transform: 'translateX(-100%)' },
                        '100%': { transform: 'translateX(0)' },
                      },

                      '@keyframes cycleLeft': {
                        '0%': { transform: 'translateX(0)' },
                        '49%': { transform: 'translateX(-100%)' },
                        '50%': { transform: 'translateX(100%)' },
                        '100%': { transform: 'translateX(0)' },
                      },
                    }}
                  >
                    CREATE ACCOUNT
                  </Link>
                </Box>

              </Box>
            </Box>

            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
