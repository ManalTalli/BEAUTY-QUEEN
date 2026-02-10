import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import { registerSchema } from '../../../validation/RegisterSchema';

export default function Register() {
  const {register , handleSubmit , formState :{errors}} = useForm ({resolver: yupResolver(registerSchema)});
  const registerForm = async (values)=>{
    try{
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`,values);
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
        <TextField {...register('userName')} fullWidth label="user name" variant='outlined' error={errors.userName} helperText={errors.userName?.message}/>
        <TextField {...register('fullName')} fullWidth label="fullName" variant='outlined' error={errors.fullName} helperText={errors.fullName?.message} />
        <TextField {...register('email')} fullWidth label="email" variant='outlined' error={errors.email} helperText={errors.email?.message} />
        <TextField {...register('password')} fullWidth label="password" variant='outlined' error={errors.password} helperText={errors.password?.message} />
        <TextField {...register('phoneNumber')} fullWidth label="phoneNumber" variant='outlined' error={errors.phoneNumber} helperText={errors.phoneNumber?.message} />
        <Button variant='contained' type='submit' >Register</Button>

      </Box>

    </Box>
  )
}
