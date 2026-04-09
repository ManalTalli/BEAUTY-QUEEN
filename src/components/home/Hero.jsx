import React from 'react'
import hero from '../../assets/img/Hero.webp'
import { Box, Typography } from '@mui/material'

export default function Hero() {
  return (
    <Box id="hero" sx={{
    width: '100%',
    height: '100vh', // يأخذ 90% من ارتفاع الشاشة
    backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center', // لتوسيط المحتوى عمودياً
    justifyContent: 'center' // لتوسيط المحتوى أفقياً
  }}>
    </Box>
  )
}
