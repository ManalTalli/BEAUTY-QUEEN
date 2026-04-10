import React from 'react'
import hero from '../../assets/img/Hero.webp'
import PhoneHero from '../../assets/img/Phonehero.webp'

import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { Link as routerLink } from 'react-router-dom';

export default function Hero() {
  return (
    <Box id="hero">
    <Box sx={{ display: {  xs: 'none', sm: 'flex', md: 'flex' } ,
    width: '100%',
    height: '100vh', // يأخذ 90% من ارتفاع الشاشة
    backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
    backgroundPosition: '50px',
    alignItems: 'center', // لتوسيط المحتوى عمودياً
    justifyContent: 'center' // لتوسيط المحتوى أفقياً
  }}> <Container disableGutters sx={{px:3,marginTop:'100px'}} maxWidth={false} >
    <Box sx={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'flex-start' }}>
      <Typography 
        variant="h2" 
        sx={{ 
          fontWeight: 'bold', 
          color: '#5D3A3A', // لون بني دافئ يتناسب مع الوردي
          lineHeight: 1.2,
          mb: 2,
          fontSize: { xs: '2.5rem', md: '3rem' } // متجاوب مع الشاشات
        }}
      >
        DISCOVER EVERYTHING, <br />
        <span style={{ color: '#C36A7A' }}>YOUR WAY.</span>
      </Typography>

      {/* النص الوصفي - Sub-headline */}
      <Typography 
        variant="h6" 
        sx={{ 
          color: '#7A6B6B', 
          mb: 4, 
          fontWeight: 400,
          maxWidth: '450px' 
        }}
      >
        Shop curated picks across fashion, home, and lifestyle with fast, secure shipping.
      </Typography>

      {/* الأزرار - Buttons */}
      <Stack direction="row" spacing={2}>
        {/* الزر الرئيسي - يروح على الشوب */}
        <Button
          component={routerLink}
          to="/shop"
          variant="contained"
          sx={{
            backgroundColor: '#C36A7A',
            color: '#fff',
            padding: '12px 30px',
            fontSize: '1rem',
            borderRadius: '50px', // حواف دائرية مثل التصميم
            textTransform: 'none',
            fontWeight: 'bold',
            boxShadow: '0px 4px 15px rgba(195, 106, 122, 0.3)',
            '&:hover': {
              backgroundColor: '#A35261',
              boxShadow: '0px 6px 20px rgba(195, 106, 122, 0.4)',
            }
          }}
        >
          START SHOPPING NOW!
        </Button>
      </Stack>
    </Box></Container></Box>





    <Box sx={{ display: {  xs: 'flex', sm: 'none', md: 'none' } ,
    width: '100%',
    height: '100vh', // يأخذ 90% من ارتفاع الشاشة
    backgroundImage: `url(${PhoneHero})`,
    backgroundSize: 'cover',
    backgroundPosition: '0px',
    alignItems: 'center', // لتوسيط المحتوى عمودياً
    justifyContent: 'center' // لتوسيط المحتوى أفقياً
  }}> <Container disableGutters sx={{px:3,marginBottom:'100px'}} maxWidth={false} >
    <Box sx={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'flex-start' }}>
      <Typography 
        variant="h2" 
        sx={{ 
          fontWeight: 'bold', 
          color: '#5D3A3A', // لون بني دافئ يتناسب مع الوردي
          lineHeight: 1.2,
          mb: 2,
          fontSize: { xs: '2.5rem', md: '3rem' } // متجاوب مع الشاشات
        }}
      >
        DISCOVER EVERYTHING, <br />
        <span style={{ color: '#C36A7A' }}>YOUR WAY.</span>
      </Typography>

      {/* النص الوصفي - Sub-headline */}
      <Typography 
        variant="h6" 
        sx={{ 
          color: '#7A6B6B', 
          mb: 4, 
          fontWeight: 400,
          maxWidth: '450px' 
        }}
      >
        Shop curated picks across fashion, home, and lifestyle with fast, secure shipping.
      </Typography>

      {/* الأزرار - Buttons */}
      <Stack direction="row" spacing={2}>
        {/* الزر الرئيسي - يروح على الشوب */}
        <Button
          component={routerLink}
          to="/shop"
          variant="contained"
          sx={{
            backgroundColor: '#C36A7A',
            color: '#fff',
            padding: '12px 30px',
            fontSize: '1rem',
            borderRadius: '50px', // حواف دائرية مثل التصميم
            textTransform: 'none',
            fontWeight: 'bold',
            boxShadow: '0px 4px 15px rgba(195, 106, 122, 0.3)',
            '&:hover': {
              backgroundColor: '#A35261',
              boxShadow: '0px 6px 20px rgba(195, 106, 122, 0.4)',
            }
          }}
        >
          START SHOPPING NOW!
        </Button>
      </Stack>
    </Box></Container></Box>
   
    </Box>
  )
}
