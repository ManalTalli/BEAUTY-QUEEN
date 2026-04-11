import React from 'react'
import useAuthStore from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import Hero from '../../components/home/Hero';
import About from '../../components/home/About';
import Service from '../../components/home/Service';
import FAQ from '../../components/home/FAQ';
import Slider from '../../components/home/Slider';
import { Box } from '@mui/material';

export default function Home() {
  
  return (
    <Box  paddingBottom={'0px'}>
      <Hero/>
      <About/>
      <Slider/>
      <Service/>
      <FAQ/>
     
    </Box>
  )
}
