import { Box, Button, Checkbox, FormControl, FormControlLabel, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '../../../validation/RegisterSchema';
import BackHome from '../../../components/backHome/BackHome';
import style from './Register.module.css'
import Link from '@mui/material/Link';
import { Link as routerLink } from 'react-router-dom';
import Registeration from '../../../components/registeration/Registeration';
import Submit from '../../../components/submit/Submit';

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(registerSchema) });
  const registerForm = async (values) => {
    try {
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`, values);
      console.log("response", response);
    }
    catch (error) {
      console.log("catch error", error);
    }
  }

  return (
    <Box component='section' className=''>
      <BackHome />
      <Typography component='h1' fontSize='18px' fontWeight='700' lineHeight='21.6px' color='#111'>CREATE ACCOUNT</Typography>
      <Box component={'form'} onSubmit={handleSubmit(registerForm)} display={'flex'} flexDirection={'column'} marginTop='40px' marginBottom='30px' width='35%' >
        <TextField {...register('fullName')} label="FULL NAME" variant='standard' required error={errors.fullName} helperText={errors.fullName?.message} className={style.customTextField} />
        <TextField {...register('userName')} label="USER NSME" variant='standard' required error={errors.userName} helperText={errors.userName?.message} className={style.customTextField} />
        <TextField {...register('email')} label="EMAIL" variant='standard' required error={errors.email} helperText={errors.email?.message} className={style.customTextField} />
        <TextField {...register('phoneNumber')} label="PHONE NUMBER" variant='standard' required error={errors.phoneNumber} helperText={errors.phoneNumber?.message} className={style.customTextField} />
        <TextField {...register('password')} label="PASSWORD" variant='standard' required error={errors.password} helperText={errors.password?.message} className={style.customTextField} />


        
        <FormControl color='#111' className={style.customTextField1} sx={{ marginTop: '30px' }}>
          <FormControlLabel control={<Checkbox required />} label={<Typography component='span'>I have read and are agreeing to our <Link component={routerLink} to='/Terms' color='#111' className={style.customTextField1} sx={{
            color: '#111',
            textDecorationColor: 'black',
            '&:hover': {
              color: '#111',
              textDecorationColor: 'black',
            },
          }}>Terms of Use </Link></Typography>
          } />

        </FormControl>
        <Box width='30%' marginTop='20px' marginBottom='60px'>
          <Submit text='CREATE MY PROFILE' variant='contained' type='submit' />
        </Box>
        <Typography fontSize='11.07px' fontWeight='400' lineHeight='20px' color='#111'>ALREADY HAVE A PROFILE?</Typography>

        <Box width='15%' marginTop='20px'>
          <Registeration text="LOG IN" />
        </Box>
      </Box>

    </Box>
  )
}
