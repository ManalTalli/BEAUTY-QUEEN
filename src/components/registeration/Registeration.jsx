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
                        backgroundColor: 'contrastText.primary',
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
                            backgroundColor: '#808080',
                            transition: 'all 0.4s ease',
                            zIndex: -1,
                        },
                        '&:hover::before': {
                            left: 0,
                        },
                        '&:hover': {
                            color: '#fff',
                            border: '1px solid #808080',
                        },
                    }}
                >
                    {text}
                </Link> </Box>

        </div>
    )
}
