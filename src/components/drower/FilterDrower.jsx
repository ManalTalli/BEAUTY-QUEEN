import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useTranslation } from 'react-i18next';
import FilterSort from '../filtersort/FilterSort';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import FilterListIcon from '@mui/icons-material/FilterList';

export default function FilterDrower({ drower, onSelect, currentCat }) {
    const { t } = useTranslation();
    const location = useLocation();
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
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}>
            <Divider />
        </Box>
    );
    React.useEffect(() => {
        setState({ left: false });
      }, [location]);


    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}  width={'30%'} ><Typography display={'flex'} alignItems='center' color='text.primary' variant='h3'>{drower}  <FilterListIcon/></Typography></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        <FilterSort onSelect={onSelect} currentCat={currentCat} />
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>

    );
}
