import React, { useState } from 'react'
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../../../validation/LoginSchema';
import useAuthStore from '../../../store/useAuthStore';
import { Link, useNavigate } from 'react-router-dom';
import authAxiosInstance from '../../../api/authAxiosInstance';
import BackHome from '../../../components/backHome/BackHome';
import style from '../register/Register.module.css'
import Submit from '../../../components/submit/Submit';
import LineHover from '../../../components/lineHover/LineHover';
import { Link as routerLink } from 'react-router-dom';
import Registeration from '../../../components/registeration/Registeration';


export default function Login() {
  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();
  const [serverErrors, setServerErrors] = useState([]);
  const { register, handleSubmit, getValues, formState: { errors, isSubmitting } } = useForm({ resolver: yupResolver(loginSchema), mode: 'onBlur' });
  const loginForm = async (values) => {
    try {
      const response = await authAxiosInstance.post(`/auth/Account/Login`, values, { withCredentials: true, });
      if (response.status === 200) {
        setToken(response.data.accessToken);
        navigate('/');
      }
      console.log("response", response);
    }
    catch (error) {
      setServerErrors([error.response.data.message]);
    }
  }
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const emailValue = getValues("email");

    if (!emailValue) {
      alert("Please enter your email address first.");
      return;
    }

    try {
      await authAxiosInstance.post('/auth/Account/SendCode', { email: emailValue });


      navigate('/ResendPassword', { state: { email: emailValue } });
    } catch (error) {
      alert("Error sending code. Please try again.");
    }
  };

  return (
    <Box component='section' className='login-form' sx={{ textTransform: 'uppercase' }}>
      <BackHome />
      <Typography component='h1' variant='h1'>Sign in to Access Your Account</Typography>
      {serverErrors?.length > 0 && (
        <Box color={'red'} marginTop={'30px'} marginBottom={'30px'}>
          {serverErrors.map((err) => <Typography marginBottom={'5px'} variant='h3'>{err}</Typography>)}
        </Box>
      )}
      <Box >
      <Box component={'form'} onSubmit={handleSubmit(loginForm)} display={'flex'} flexDirection={'column'} marginTop='40px'  width='35%' >
        <TextField {...register('email')} label="email" variant='standard' error={errors.email} helperText={errors.email?.message} className={style.customTextField} />
        <TextField {...register('password')} label="password" variant='standard' error={errors.password} helperText={errors.password?.message} className={style.customTextField} />
        {isSubmitting ? <CircularProgress color='text.primary' sx={{ marginTop: '20px', marginBottom: '60px' }} /> :
          <Box width={'100%'} marginTop='20px' display={'flex'} gap={4} >
            <Submit text='Login' variant='contained' type='submit' disabled={isSubmitting} /></Box>
        }
      </Box>
      <Box component={'form'} onSubmit={handleForgotPassword} marginBottom='80px'>
        <Box component={'button'} type={'submit'} border={'none'} sx={{ background: 'none', textTransform: 'uppercase' }}>
          <LineHover text={'Forgot your password?'} />
        </Box>
      </Box>
</Box>
      <Box sx={{ textTransform: 'uppercase' }} width='15%'>
        <Typography variant='h3' fontWeight={'700'} marginBottom={'16px'}>CREATE AN ACCOUNT</Typography>
        <Box component={routerLink} to="/Register" sx={{ textDecorationLine: 'none' }}>
          <Registeration text="CREATE AN ACCOUNT" />
        </Box>

      </Box>



    </Box>
  )
}

