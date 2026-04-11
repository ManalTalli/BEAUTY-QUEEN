import React from 'react'
import { Box } from '@mui/material'
import { keyframes } from '@mui/system'

import slider1 from '../../assets/img/slider/1.jpg'
import slider2 from '../../assets/img/slider/2.jpg'
import slider3 from '../../assets/img/slider/3.jpg'
import slider4 from '../../assets/img/slider/4.jpg'
import slider5 from '../../assets/img/slider/5.jpg'
import slider6 from '../../assets/img/slider/6.jpg'

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } 
`;

export default function Slider() {
  const images = [slider1, slider2, slider3, slider4, slider5, slider6];
  const duplicatedImages = [...images, ...images];

  return (
    <Box 
      dir="ltr" 
      sx={{ 
        marginTop: '100px',
        width: '100%', 
        overflow: 'hidden', 
        bgcolor: 'background.default',
        borderY: '1px solid',
        borderColor: 'divider', 
        lineHeight: 0
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        width: 'max-content',
        animation: `${scroll} 25s linear infinite`,
        '&:hover': { animationPlayState: 'paused' }
      }}>
        {duplicatedImages.map((img, index) => (
          <Box
            key={index}
            sx={{
              height: '200px', 
              width: '280px',  
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img 
              src={img} 
              alt={`slider-img-${index}`} 
              style={{ 
                height: '100%', 
                width: '100%', 
                objectFit: 'cover', 
                transition: '0.4s'
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}