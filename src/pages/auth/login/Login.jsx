import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../../../validation/LoginSchema';
import useAuthStore from '../../../store/useAuthStore';
import { Link, useNavigate } from 'react-router-dom';
import authAxiosInstance from '../../../api/authAxiosInstance';

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
        await authAxiosInstance.post(`/auth/Account/SendCode`, { email: values.email })
        navigate('/Verify', { state: { email: values.email } });
      }
      console.log("response", response);
    }
    catch (error) {
      setServerErrors([error.response.data.message]);
    }
  }
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const emailValue = getValues("email"); // إذا بتستخدمي react-hook-form

    if (!emailValue) {
      alert("Please enter your email address first.");
      return;
    }

    try {
      // نرسل الكود للإيميل المكتوب
      await authAxiosInstance.post('/auth/Account/SendCode', { email: emailValue });

      // ننتقل لصفحة الريست ونمرر الإيميل بالـ state
      navigate('/ResendPassword', { state: { email: emailValue } });
    } catch (error) {
      alert("Error sending code. Please try again.");
    }
  };

  return (
    <Box component='section' className='login-form'>
      <Typography component='h2'>CREATE ACCOUNT</Typography>
      {serverErrors?.length > 0 && (
        <Box color={'red'} marginTop={'30px'} marginBottom={'30px'}>
          {serverErrors.map((err) => <Typography marginBottom={'5px'} fontSize={'14px'} fontWeight={'400'} lineHeight={'18.2px'}>{err}</Typography>)}
        </Box>
      )}
      <Box component={'form'} onSubmit={handleSubmit(loginForm)} display={'flex'} flexDirection={'column'}>
        <TextField {...register('email')} fullWidth label="email" variant='outlined' error={errors.email} helperText={errors.email?.message} />
        <TextField {...register('password')} fullWidth label="password" variant='outlined' error={errors.password} helperText={errors.password?.message} />
        <Button variant='contained' type='submit' >Login</Button>
      </Box>
      <Box component={'form'} onSubmit={handleForgotPassword} display={'flex'} flexDirection={'column'}>
        <Button variant='contained' type='submit' >ResendPassword</Button>
      </Box>

    </Box>
  )
}

