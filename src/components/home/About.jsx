import { Box, Typography } from '@mui/material'
import about from '../../assets/img/About.png'
import about1 from '../../assets/img/About1.png'
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();
  
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        width: '100%',
        overflowX: 'hidden', 
        gap: { xs: 4, md: 2 }
      }}
    >
      <Box 
        sx={{
          display: 'flex', 
          paddingTop:'30px',
          justifyContent: { xs: 'center', md: 'flex-end' }, 
          width: '100%',
        }}
      >
        <Box sx={{
          width: { xs: '90%', md: '33%' }, 
          height: { xs: '20vh', md: '30vh' },
          backgroundImage: `url(${about1})`,
          backgroundSize: 'contain', 
          backgroundRepeat: 'no-repeat',
          backgroundPosition: { xs: 'center', md: 'right' },
        }}>
        </Box>
      </Box>

      <Box sx={{ 
        textAlign: 'center', 
        px: { xs: 3, md: 10 }, 
        maxWidth: '100%' 
      }}>
        <Typography variant='h2' paddingBottom={'50px'} sx={{fontSize: { xs: '1rem', md: '2rem' }}}>
          {t('About Us')}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            
            maxWidth: '800px', 
            margin: '0 auto',
            fontSize: { xs: '0.9rem', md: '1rem' }, 
          }}
        >
          {t('Your premier all-in-one shopping destination, offering a curated selection of everything you need for your lifestyle.')} 
          {t('From the latest trends to everyday essentials, we prioritize quality and convenience in every order.')} 
          {t('Discover a seamless shopping experience where variety meets value, all in one place.')}
        </Typography>
      </Box>

      <Box 
        id='About' 
        sx={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: { xs: 'center', md: 'flex-start' },
          paddingTop: { md: '10px', xs: '20px' } 
        }}
      >
        <Box sx={{
          width: { xs: '90%', md: '33%' },
          height: { xs: '25vh', md: '40vh' },
          backgroundImage: `url(${about})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: { xs: 'center', md: 'left' },
        }}></Box>
      </Box>
    </Box>
  )
}