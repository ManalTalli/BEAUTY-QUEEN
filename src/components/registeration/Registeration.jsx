import { Box, Link } from '@mui/material'
import { Link as routerLink } from 'react-router-dom';

import React from 'react'

export default function Registeration({ text }) {
    return (
        <div>
            <Box display='flex' flexDirection='column'>
                <Link
                    
                     variant='h4' padding='10px'
                    sx={{
                        display: 'block',
                        textAlign: 'center',
                        padding: '10px',
                        backgroundColor: 'transparent',
                        color: 'text.primary',
                        textDecoration: 'none',
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 1,
                        transition: 'color 0.4s ease',
                        border: '1px solid',
                        borderColor:' text.primary',


                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'text.primary',
                            transition: 'all 0.4s ease',
                            zIndex: -1,
                        },
                        '&:hover::before': {
                            left: 0,
                        },
                        '&:hover': {
                            color: 'primary.contrastText',
                            border: '1px solid',
                            borderColor:'text.primary'
                        },
                    }}
                >
                    {text}
                </Link> </Box>

        </div>
    )
}
