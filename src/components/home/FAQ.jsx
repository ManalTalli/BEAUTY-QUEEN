import { useTranslation } from 'react-i18next';

import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { keyframes, useTheme } from '@mui/system';

const float = keyframes`
  0% { transform: translateY(0px) translateX(0px); opacity: 0; }
  50% { opacity: 0.5; }
  100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
`;

const faqs = [
  {
    q: "How can I track my order?",
    a: "You can easily track your order through the 'My Orders' section in your account profile, or by using the tracking link sent to your email."
  },
  {
    q: "What is your return policy?",
    a: "We offer a 14-day return policy for most products. Items must be in their original packaging and unused."
  },
  {
    q: "Do you offer international shipping?",
    a: "Yes, we ship our products worldwide. Shipping costs and delivery times vary depending on your location."
  },
  {
    q: "Are the beauty products original?",
    a: "Absolutely. All our products, including skincare and electronics, are sourced directly from authorized distributors."
  }
];

export default function FAQ() {
  const { t } = useTranslation();
    const theme = useTheme();
  
  return (
    <Box id='faq' sx={{ 
      
      position: 'relative', 
      overflow: 'hidden', 
      bgcolor: 'background.default', 
      minHeight: '80vh'
    }}>
      {[...Array(15)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: Math.random() * 10 + 5 + 'px',
            height: Math.random() * 10 + 5 + 'px',
            bgcolor: 'primary.main',
            borderRadius: '50%',
            opacity: 0.3,
            bottom: -10,
            left: Math.random() * 100 + '%',
            animation: `${float} ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            zIndex: 0
          }}
        />
      ))}

      <Container maxWidth="md"  sx={{ position: 'relative', zIndex: 1,paddingTop:'40px' }}>
      
        <Typography textAlign="center"  variant='h2' paddingBottom={'50px'} sx={{ mb: 6,color: 'text.primary', fontSize: { xs: '1rem', md: '2rem' }}}>
          {t('Frequently Asked Questions')}
        </Typography>

        {faqs.map((faq, index) => (
          <Accordion 
            key={index}
            elevation={0}
            sx={{
              mb: 2,
              borderRadius: '15px !important',
              bgcolor: 'background.paper',
              '&:before': { display: 'none' }, 
              border: '1px solid',
              borderColor: 'divider',
              transition: '0.3s',
              '&:hover': {
                borderColor: 'primary.main',
                boxShadow: '0px 4px 20px rgba(248, 192, 196, 0.15)'
              }
            }}
          >
            <AccordionSummary 
              expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
              sx={{ p: 2 }}
            >
              <Typography sx={{ fontWeight: 600, color: 'text.primary' }}>
                {faq.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 2, pt: 0 }}>
              <Typography sx={{ color: 'text.primary', opacity: 0.8, lineHeight: 1.8 }}>
                {faq.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
      
    </Box>
  );
}