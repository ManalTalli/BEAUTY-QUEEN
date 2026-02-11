import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import { loginSchema } from '../../../validation/LoginSchema';

export default function Login() {
  const {register , handleSubmit , formState :{errors}} = useForm ({resolver: yupResolver(loginSchema)});
    const registerForm = async (values)=>{
      try{
        const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Login`,values);
        console.log("response",response);
      }
      catch(error){
        console.log("catch error",error);
      }
    }
  
    return (
      <Box component='section' className=''>
        <Typography component='h2'>CREATE ACCOUNT</Typography>
        <Box component={'form'} onSubmit={handleSubmit(registerForm)} display={'flex'} flexDirection={'column'}>
          <TextField {...register('email')} fullWidth label="email" variant='outlined' error={errors.email} helperText={errors.email?.message} />
          <TextField {...register('password')} fullWidth label="password" variant='outlined' error={errors.password} helperText={errors.password?.message} />
          <Button variant='contained' type='submit' >Login</Button>
  
        </Box>
  
      </Box>
    )
  }
  
