import { Box, Button, Checkbox, CircularProgress, FormControl, FormControlLabel, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
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
  const [serverErrors,setServerErrors]=useState ([]);
  const { register, handleSubmit, formState: { errors , isSubmitting } } = useForm({ resolver: yupResolver(registerSchema), mode:'onBlur'});
  const registerForm = async (values) => {
    try {
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`, values);
      console.log("response", response);
    }
    catch (error) {
      setServerErrors(error.response.data.errors);
        }
  }

  return (
    <Box component='section' className=''>
      <BackHome />
      <Typography component='h1' fontSize='18px' fontWeight='700' lineHeight='21.6px' color='#111'>CREATE ACCOUNT</Typography>
      {serverErrors?.length>0 && (
        <Box color={'red'} marginTop={'30px'}>
          {serverErrors.map((err)=><Typography marginBottom={'5px'} fontSize={'14px'} fontWeight={'400'} lineHeight={'18.2px'}>{err}</Typography>)}
        </Box>
      )}
      <Box component={'form'} onSubmit={handleSubmit(registerForm)} display={'flex'} flexDirection={'column'} marginTop='40px' marginBottom='30px' width='35%' >
        <TextField {...register('fullName')} label="FULL NAME" variant='standard' required error={errors.fullName} helperText={errors.fullName?.message} className={style.customTextField} />
        <TextField {...register('userName')} label="USER NAME" variant='standard' required error={errors.userName} helperText={errors.userName?.message} className={style.customTextField} />
        <TextField {...register('email')} label="EMAIL" variant='standard' required error={errors.email} helperText={errors.email?.message} className={style.customTextField} />
        <TextField {...register('phoneNumber')} label="PHONE NUMBER" variant='standard' required error={errors.phoneNumber} helperText={errors.phoneNumber?.message} className={style.customTextField} />
        <TextField {...register('password')} label="PASSWORD" variant='standard' required error={errors.password} helperText={errors.password?.message} className={style.customTextField} />


        
        <FormControl color='#111' className={style.customTextField1} sx={{ marginTop: '30px' }}>
          <FormControlLabel control={<Checkbox required />} label={<Typography component='span' fontSize={'14px'} fontWeight={'400'} lineHeight={'18.2px'}>I have read and are agreeing to our <Link component={routerLink} to='/Terms' color='#111' className={style.customTextField1} sx={{
            color: '#111',
            textDecorationColor: 'black',
            '&:hover': {
              color: '#111',
              textDecorationColor: 'black',
            },
          }}>Terms of Use </Link></Typography>
          } />

        </FormControl>
        {isSubmitting?<CircularProgress color='rgba(1, 1, 1, 0.5)' sx={{marginTop:'20px', marginBottom:'60px'}} />:
        <Box width='30%' marginTop='20px' marginBottom='60px'>
          <Submit text='CREATE MY PROFILE' variant='contained' type='submit' disabled={isSubmitting} />
        </Box> }
        <Typography fontSize='11.07px' fontWeight='400' lineHeight='20px' color='#111'>ALREADY HAVE A PROFILE?</Typography>

        <Box width='15%' marginTop='20px'>
          <Registeration text="LOG IN" />
        </Box>
      </Box>

    </Box>
  )
}
