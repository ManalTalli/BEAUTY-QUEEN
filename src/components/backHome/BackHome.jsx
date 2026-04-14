import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from '@mui/material/Link';
import { Link as routerLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function BackHome() {
  const { t } = useTranslation();
  
  return (
      <>
      <Link component={routerLink} to={'/'}  marginTop='24px' marginBottom='80px' display='flex' alignItems='center' underline='none' sx={{ maxWidth:{xs:'30%',sm:'15%',md:'7%' } }}>
       <ArrowBackIosIcon sx={{color:'text.primary'  ,width:'16px',height:'20px', paddingRight:'4px'}}/>
       <Typography fontSize='11.07px' fontWeight='400' lineHeight='20px' color='text.primary' >{t('BACK TO HOME')}</Typography>
      </Link>
      </> 
  )
}
