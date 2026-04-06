import { Typography } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';
import useProflie from '../../hooks/useProflie';

export default function ProfileInfo() {
const {data}= useProflie();
  return (
    <div>
       <Typography> {data?.email}</Typography>
       <Typography> {data?.fullName}</Typography>
       <Typography> {data?.city}</Typography>
       <Typography> {data?.phoneNumber}</Typography>
      
    </div>
  )
}
