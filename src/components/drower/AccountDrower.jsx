import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { Link as routerLink } from 'react-router-dom';
import { Container, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Registeration from '../registeration/Registeration';
import { useTranslation } from 'react-i18next';
import LineHover from '../lineHover/LineHover';

export default function AccountDrower({ drower, color }) {
  const { t } = useTranslation();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
    
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }} 
      role="presentation"
    >
      <Container sx={{ paddingLeft: '20px', paddingRight: '20px' }} maxWidth={false}>
        <Box display='flex' py={2} alignItems='center' justifyContent='space-between'>
          <Typography component='h3' variant='h4' fontWeight="bold">{t("ACCOUNT")}</Typography>
          <IconButton onClick={toggleDrawer(anchor, false)} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        <Box sx={{ mt: 3 }}>
          <Typography component='h3' variant='h5' color='text.primary' fontWeight="bold" mb={1}>
            {t("WELCOME TO BEAUTY QUEEN")}
          </Typography>
          
          <Typography mb={2} color='text.primary' variant='h4' sx={{ lineHeight: 1.6 }}>
            {t("REGISTER ON BEAUTY QUEEN TO SAVE YOUR DELIVERY ADDRESSES,")}
            <br /> 
            {t("AND MANAGE YOUR ORDERS AND RETURNS.")}
          </Typography>

          <Box mt={3} component={routerLink} to="/Login" sx={{ textDecoration: 'none', display: 'block' }}>
            <Registeration text={t('LOG IN')} />
          </Box>

          <Box mt={1} component={routerLink} to={'/Register'} sx={{ textDecoration: 'none', display: 'block' }}>
            <LineHover text={t('CREATE ACCOUNT')} />
          </Box>
        </Box>
      </Container>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)} sx={{ padding: '5px 0' }}>
            <Typography variant='subtitle1' sx={{ marginTop: 1 }} color={color}>
              {drower}
            </Typography>
          </IconButton>
          
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}