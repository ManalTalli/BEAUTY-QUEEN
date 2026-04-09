import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { Link as routerLink } from 'react-router-dom';
import { Container, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Registeration from '../registeration/Registeration';
import { useTranslation } from 'react-i18next';
import LineHover from '../lineHover/LineHover';

export default function AccountDrower({ drower }) {
  const { t } = useTranslation();

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
          <IconButton onClick={toggleDrawer(anchor, true)} sx={{padding:'5px 0'}}><Typography variant='h5' sx={{ marginTop: 1 }} color='text.primary'>{drower}</Typography></IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            color='primary'
          >
    <Container  sx={{paddingLeft:'50px'}} maxWidth={false}>

            <Box display='flex' padding='24px' alignItems='center' justifyContent='space-between'>
              <Typography component='h3' variant='h2'>{t("ACCOUNT")}</Typography>
              <CloseIcon style={{ cursor: 'pointer' }}
                onClick={toggleDrawer(anchor, false)} /></Box>
            <Box borderBottom='none' paddingLeft='24px' paddingRight='24px'>
              <Typography component='h3' variant='h2' color='text.primary' marginTop='12px' marginBottom='8px'>{t("WELCOME TO BEAUTY QUEEN")}</Typography>
              <Typography marginBottom='16px' color='text.primary' variant='h5'>{t("REGISTER ON BEAUTY QUEEN TO SAVE YOUR DELIVERY ADDRESSES,")}<br /> {t("AND MANAGE YOUR ORDERS AND RETURNS.")}</Typography>
              <Box width='15%' marginTop='20px' component={routerLink} to="/Login" sx={{textDecorationLine:'none'}}>
              <Registeration text={t('LOG IN')} />
              </Box>
              <Box component={routerLink} to={'/Register'} sx={{textDecorationLine:'none'}}>
                <LineHover text={t('CREATE ACCOUNT')} />
              </Box>
            </Box></Container>

            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
