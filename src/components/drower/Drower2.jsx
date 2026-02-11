import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from '@mui/material/Link';
import { Link as routerLink } from 'react-router-dom';
import { Typography } from '@mui/material';

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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <Divider />
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
            onClose={toggleDrawer(anchor, false)}
          ><Typography component='h3' fontfamily='Helvetica, Arial, sans-serif' fontSize='14px' fontWeight= '700' lineHeight='16.8px' padding='24px'>ACCOUNT</Typography>
            {list(anchor)}
            <Link component={routerLink} to={'/Register'} color='black' underline='none'>Register</Link>
            <Link component={routerLink} to={'/Login'} color='black' underline='none'>Login</Link>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
