import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import { loginSchema } from '../../../validation/LoginSchema';
import useAuthStore from '../../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const setToken = useAuthStore ( (state)=>state.setToken);
  const navigate = useNavigate ();
const [serverErrors,setServerErrors]=useState ([]);
  const { register, handleSubmit, formState: { errors , isSubmitting } } = useForm({ resolver: yupResolver(loginSchema), mode:'onBlur'});
    const loginForm = async (values)=>{
      try{
        const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Login`,values,{withCredentials: true,});
        if (response.status === 200){
          setToken(response.data.accessToken);
          navigate('/')
        }
        console.log("response",response);
      }
      catch(error){
        setServerErrors([error.response.data.message]);
      }
    }
  
    return (
      <Box component='section' className='login-form'>
        <Typography component='h2'>CREATE ACCOUNT</Typography>
        {serverErrors?.length>0 && (
                <Box color={'red'} marginTop={'30px'} marginBottom={'30px'}>
                  {serverErrors.map((err)=><Typography marginBottom={'5px'} fontSize={'14px'} fontWeight={'400'} lineHeight={'18.2px'}>{err}</Typography>)}
                </Box>
              )}
        <Box component={'form'} onSubmit={handleSubmit(loginForm)} display={'flex'} flexDirection={'column'}>
          <TextField {...register('email')} fullWidth label="email" variant='outlined' error={errors.email} helperText={errors.email?.message} />
          <TextField {...register('password')} fullWidth label="password" variant='outlined' error={errors.password} helperText={errors.password?.message} />
          <Button variant='contained' type='submit' >Login</Button>
  
        </Box>
  
      </Box>
    )
  }
  
