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
      <Typography component='h1' variant='h1' color='text.primary'>CREATE AN ACCOUNT</Typography>
      {serverErrors?.length>0 && (
        <Box color={'red'} marginTop={'30px'}>
          {serverErrors.map((err)=><Typography marginBottom={'5px'} variant='h3'>{err}</Typography>)}
        </Box>
      )}
      <Box component={'form'} onSubmit={handleSubmit(registerForm)} display={'flex'} flexDirection={'column'} marginTop='40px' marginBottom='30px' width='35%' >
        <TextField {...register('fullName')} label="FULL NAME" variant='standard'  error={errors.fullName} helperText={errors.fullName?.message} className={style.customTextField} />
        <TextField {...register('userName')} label="USER NAME" variant='standard'  error={errors.userName} helperText={errors.userName?.message} className={style.customTextField} />
        <TextField {...register('email')} label="EMAIL" variant='standard'  error={errors.email} helperText={errors.email?.message} className={style.customTextField} />
        <TextField {...register('phoneNumber')} label="PHONE NUMBER" variant='standard'  error={errors.phoneNumber} helperText={errors.phoneNumber?.message} className={style.customTextField} />
        <TextField {...register('password')} label="PASSWORD" variant='standard'  error={errors.password} helperText={errors.password?.message} className={style.customTextField} />


        
        <FormControl color='text.primary' className={style.customTextField1} sx={{ marginTop: '30px' }}>
          <FormControlLabel control={<Checkbox required />} label={<Typography component='span' variant='h3'>I have read and are agreeing to our
            <Link component={routerLink} to='/Terms' color='#111' className={style.customTextField1} sx={{
            color: 'text.primary',
            textDecorationColor: 'black',
            '&:hover': {
              color: 'text.primary',
              textDecorationColor: 'black',
            },
          }}> Terms of Use </Link></Typography>
          } />

        </FormControl>
        {isSubmitting?<CircularProgress color='text.primary'  sx={{marginTop:'20px', marginBottom:'60px'}} />:
        <Box width='30%' marginTop='20px' marginBottom='60px'>
          <Submit text='CREATE ACCOUNT' variant='contained' type='submit' disabled={isSubmitting} />
        </Box> }
        <Typography variant='h5' color='text.primary'>ALREADY HAVE A PROFILE?</Typography>

        <Box width='15%' marginTop='20px' component={routerLink} to="/Login" sx={{textDecorationLine:'none'}}>
          <Registeration text="SIGN IN" />
        </Box>
      </Box>

    </Box>
  )
}
