import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{display:'flex' , flexDirection:'column', marginTop:'auto', marginTop:'20px'}}>
    <Box 
      component="footer"
      sx={{
        
        marginTop:'50px',
        py: 2, // Padding vertical (مسافة صغيرة فوق وتحت)
        px: 2,
        mt: 'auto',
        backgroundColor: '#111',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="lg">
        
        <Box
        
          sx={{
            display: 'flex',
            justifyContent: 'space-between', // يوزع العناصر على الأطراف
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' }, // في الموبايل تحت بعض، في الشاشة الكبيرة جنب بعض
          }}
        >
          <Typography variant="body2" color="#fff">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="#" underline="hover" color="#fff" sx={{ fontSize: '0.875rem' }}>
              Privacy Policy
            </Link>
            <Link href="#" underline="hover" color="#fff" sx={{ fontSize: '0.875rem' }}>
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
    </Box>
  );
};

export default Footer;