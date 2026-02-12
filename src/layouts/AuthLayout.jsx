import { Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div>
        <Container maxWidth='24px'><Outlet/></Container>
      
    </div>
  )
}
