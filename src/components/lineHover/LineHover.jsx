import { Box, Link } from '@mui/material'
import React from 'react'
import { Link as routerLink } from 'react-router-dom';

export default function LineHover({text}) {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' paddingTop='10px' >
                  <Link
                     textAlign='center' 
                    variant='h4'
                    sx={{
                      color:'text.primary',
                      textDecoration: 'none',
                      position: 'relative',
                      display: 'inline-block',
                      paddingBottom: '5px',
                      
                      overflow: 'hidden',

                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        height: '2px',
                        backgroundColor: 'text.primary',
                        width: '100%',
                        left: 0,
                        transition: 'transform 0.6s ease, left 0.6s ease',
                      },

                      '&:hover::after': {
                        animation: 'cycleRight 0.8s ease-in-out forwards',
                      },

                      '&:not(:hover)::after': {
                        animation: 'cycleLeft 0.8s ease-in-out forwards',
                      },

                      '@keyframes cycleRight': {
                        '0%': { transform: 'translateX(0)' },
                        '49%': { transform: 'translateX(100%)' },
                        '50%': { transform: 'translateX(-100%)' },
                        '100%': { transform: 'translateX(0)' },
                      },

                      '@keyframes cycleLeft': {
                        '0%': { transform: 'translateX(0)' },
                        '49%': { transform: 'translateX(-100%)' },
                        '50%': { transform: 'translateX(100%)' },
                        '100%': { transform: 'translateX(0)' },
                      },
                    }}
                  >
                   {text}
                  </Link>
                </Box>
  )
}
