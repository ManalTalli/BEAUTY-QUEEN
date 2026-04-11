import React from 'react';
import { Box, Typography, Grid, Container, Paper } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import { useTranslation } from 'react-i18next';



export default function Services() {
  const { t } = useTranslation();
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
    <Container id='Service' sx={{ paddingTop: '150px' }}>
      <Box textAlign="center" mb={6}>
        <Typography variant='h2' paddingBottom={'40px'} sx={{ fontSize: { xs: '1rem', md: '2rem' } }}>
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
                borderRadius: '24px', // حواف دائرية ناعمة
                transition: 'all 0.3s ease-in-out',
                bgcolor: 'transparent',
                cursor: 'pointer',
                // التأثير عند مرور الماوس (Hover)
                '&:hover': {
                  bgcolor: 'primary.main', // اللون الوردي #F8C0C4
                  transform: 'translateY(-10px)',
                  '& .MuiTypography-root, & .MuiSvgIcon-root': {
                    color: 'primary.contrastText', // يتغير النص للأبيض أو البني حسب المود
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
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
