import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import useProflie from '../../hooks/useProflie'

export default function Profile() {
    const {data}= useProflie();
    console.log(data);
  return (
    <Box>
        <Typography variant='h2' component='h1'>My Profile</Typography>
        <Link to=''>info</Link>
        <Link to='Orders'>Orders</Link>

        <Box>
            <Outlet/>
        </Box>
        
      
    </Box>
  )
}
