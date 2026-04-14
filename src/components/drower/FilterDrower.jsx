import * as React from 'react';
import { Box, Drawer, Button, Typography, IconButton, Stack, Divider } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import FilterSort from '../filtersort/FilterSort';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function FilterDrower({ drower, onSelect, currentCat }) {
    const [state, setState] = React.useState({ right: false });
    const location = useLocation();
const { t } = useTranslation();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
        setState({ right: open });
    };

    React.useEffect(() => {
        setState({ right: false });
    }, [location]);

    return (
        <Box>
            <Button 
                onClick={toggleDrawer(true)} 
                startIcon={<FilterListIcon />}
                sx={{ 
                    textTransform: 'none', 
                    color: 'text.primary',
                    fontSize: '1.1rem',
                    '&:hover': { bgcolor: 'transparent', opacity: 0.7 }
                }}
            >
                {drower}
            </Button>

            <Drawer
                anchor="right"
                open={state.right}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: { 
                        width: { xs: '70%', sm: 350 },
                        p: 3,
                        borderRadius: { xs: '15px 0 0 15px', sm: '24px 0 0 24px' }
                    }
                }}
            >
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>{t('Filter & Sort')}</Typography>
                    <IconButton onClick={toggleDrawer(false)} sx={{ bgcolor: 'background.paper' }}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Stack>
                
                <Divider sx={{ mb: 1 }} />

                <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                    <FilterSort onSelect={onSelect} currentCat={currentCat} />
                </Box>
                
                <Button 
                    variant="contained" 
                    fullWidth 
                    onClick={toggleDrawer(false)}
                    sx={{ mt: 4, borderRadius: '12px', py: 1.5, boxShadow: 'none' }}
                >
                    {t('Apply Filters')}
                </Button>
            </Drawer>
        </Box>
    );
}