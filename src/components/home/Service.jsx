import React from 'react';
import { Box, Typography, Grid, Container, Paper, useTheme } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import { useTranslation } from 'react-i18next';



export default function Services() {
  const { t } = useTranslation();
  const theme = useTheme();
  const services = [
    {
      title: t('Fast Delivery'),
      description: t('Worldwide shipping for all products with secure packaging.'),
      icon: <LocalShippingOutlinedIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: t('24/7 Support'),
      description: t('Our team is available anytime to help with your inquiries.'),
      icon: <SupportAgentOutlinedIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: t('Secure Payment'),
      description: t('Multiple secure payment methods for a safe shopping experience.'),
      icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 40 }} />,
    },

  ];
  return (
    <Box id='Service' back={''} sx={{backgroundColor:'background.paper'}}>
    <Container sx={{ paddingTop: '150px',paddingBottom: '40px'}}>
      <Box textAlign="center" mb={0}>
        <Typography variant='h2' paddingBottom={'20px'} sx={{ fontSize: { xs: '1rem', md: '2rem' } }}>
          {t('Services')}
        </Typography>

      </Box>

      <Grid display={'flex'} flexWrap={'wrap'} spacing={4} justifyContent={'center'}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: '24px', 
                transition: 'all 0.3s ease-in-out',
                bgcolor: 'transparent',
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: 'primary.main', 
                  transform: 'translateY(-10px)',
                  '& .MuiTypography-root, & .MuiSvgIcon-root': {
                    color: 'primary.contrastText',
                  },
                },
              }}
            >
              <Box sx={{ mb: 2, color: 'primary.main' }}>
                {service.icon}
              </Box>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                {service.title}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8 }}>
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
    <Box sx={{  bottom: 0, left: 0, width: '100%', lineHeight: 0, zIndex: 0 }}>
        <svg viewBox="0 0 1440 230" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
          <path 
            fill={theme.palette.background.default} 
            fillOpacity="1" 
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </Box>
    </Box>
  );
}
