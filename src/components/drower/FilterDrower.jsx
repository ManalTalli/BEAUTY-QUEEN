import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useTranslation } from 'react-i18next';
import FilterSort from '../filtersort/FilterSort';
import { Typography, IconButton } from '@mui/material'; // أضفنا IconButton
import { useLocation } from 'react-router-dom';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close'; // أضفنا أيقونة الإغلاق

export default function FilterDrower({ drower, onSelect, currentCat }) {
    const { t } = useTranslation();
    const location = useLocation();
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
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                <IconButton onClick={toggleDrawer(anchor, false)}>
                    <CloseIcon />
                </IconButton>
            </Box>

            <Divider />

            <Box sx={{ p: 2 }}>
                <FilterSort onSelect={onSelect} currentCat={currentCat} />
            </Box>
        </Box>
    );

    React.useEffect(() => {
        setState({ right: false, left: false });
    }, [location]);

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)} width={'30%'} sx={{display:'flex',alignItems:'center'}}>
                        <Typography display={'flex'} alignItems='center' justifyContent={'center'} height={'55px'}  color='text.primary' variant='h3'>
                            {drower}  <FilterListIcon />
                        </Typography>
                    </Button>
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