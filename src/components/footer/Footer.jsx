import React from 'react';
import { Box, Container, Grid, Typography, Link, TextField, IconButton, Divider, useTheme } from '@mui/material';
import { Send } from '@mui/icons-material';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'text.primary',
        position: 'relative',
        mt: 1,
        pb: 2,
      }}
    >
      <Box sx={{ top: 0, left: 0, width: '100%', lineHeight: 0, zIndex: 10 }}>
        <svg viewBox="0 0 1440 230" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
          <path
            fill={theme.palette.background.default}
            fillOpacity="1"
            d="M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,154.7C672,181,768,203,864,192C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </Box>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">

          <Grid item xs={12} md={4}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
              just moved
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 280, lineHeight: 1.6 }}>
              Guys we are a great bunch and nothing was too hard for us to move. Very seamless move!.
            </Typography>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
              Company
            </Typography>
            {[
              { name: 'About us', targetId: 'About' },
              { name: 'Services', targetId: 'Service' },
              { name: 'FAQ', targetId: 'faq' }
            ].map((item) => (
              <Link
              component={HashLink}
                key={item.name}
                to={`/#${item.targetId}`}
                underline="none"
                color="inherit"
                display="block"
                sx={{ mb: 1, '&:hover': { opacity: 0.7 } }}
              >
                {item.name}
              </Link>
            ))}
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
              Social
            </Typography>
            {[
              { name: 'LinkedIn', url: 'https://www.linkedin.com' },
              { name: 'Twitter', url: 'https://www.twitter.com' },
              { name: 'Facebook', url: 'https://www.facebook.com' },
              { name: 'Instagram', url: 'https://www.instagram.com' }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                underline="none"
                color="inherit"
                display="block"
                sx={{ mb: 1, '&:hover': { opacity: 0.7 } }}
              >
                {item.name}
              </Link>
            ))}
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
              Stay up to date
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Subscribe to our newsletter
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Enter your e-mail"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                  input: { color: 'text.primary' }
                }}
              />
              <IconButton
                sx={{
                  bgcolor: '#2D4373', 
                  color: 'white',
                  '&:hover': { bgcolor: '#1a2a4d' },
                  borderRadius: 1
                }}
              >
                <Send fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2, borderColor: 'rgba(0,0,0,0.1)' }} />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="caption">
            © 2025 justmoved ramdesignz - All rights reserved
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="#" underline="none" color="inherit" variant="caption">Privacy Policy</Link>
            <Link href="#" underline="none" color="inherit" variant="caption">Terms of use</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;