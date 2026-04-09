import React from 'react'
import useAuthStore from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import Hero from '../../components/home/Hero';
import About from '../../components/home/About';
import Service from '../../components/home/Service';
import FAQ from '../../components/home/FAQ';

export default function Home() {
  
  return (
    <div>
      <Hero/>
      <About/>
      <Service/>
      <FAQ/>
     
    </div>
  )
}
