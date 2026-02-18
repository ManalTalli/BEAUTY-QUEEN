import { Box, Button } from '@mui/material'
import React from 'react'

export default function Submit({ text }) {
    return (
        <div>
            <Box display='flex' flexDirection='column'>
                <Button
                
                    variant='contained'
                    type='submit'
                    sx={{
                        borderRadius:'0px',
                        boxShadow:'none',
                        fontSize:'11.07px',
                        fontWeight:'400',
                        lineHeight:'14.391px',
                        padding:'10px',
                        display: 'block',
                        textAlign: 'center',
                        padding: '10px',
                        backgroundColor: '#ffffff',
                        color: 'rgb(26, 26, 26)',
                        textDecoration: 'none',
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 1,
                        transition: 'color 0.4s ease',
                        border: '1px solid black',


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
                </Button> </Box>
        </div>
    )
}
