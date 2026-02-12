import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from '@mui/material/Link';
import { Link as routerLink } from 'react-router-dom';

export default function BackHome() {
  return (
      <>
      <Link component={routerLink} to={'/'} paddingTop='24px' paddingBottom='90px' display='flex' alignItems='center' underline='none'>
       <ArrowBackIosIcon sx={{color:'#111' ,width:'16px',height:'20px', paddingRight:'4px'}}/>
       <Typography fontSize='11.07px' fontWeight='400' lineHeight='20px' color='#111'>BACK TO HOME</Typography>
      </Link>
      </> 
  )
}
