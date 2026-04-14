import React from 'react';
import { useForm } from 'react-hook-form'; 
import useResendPassword from '../../hooks/useResendPassword';
import { 
  Box, Container, Typography, TextField, Button, Stack, Paper, InputAdornment 
} from '@mui/material';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import { useTranslation } from 'react-i18next';

export default function ResendPassword() {
    const { t } = useTranslation();
    
  const {
    handleResendPassword,
    email,
    isLoading,
    serverErrors
  } = useResendPassword();

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange' 
  });

  const onSubmit = (data) => {
    handleResendPassword(data.code, data.newPassword);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: '150px', mb: 8 }}>
      <Paper 
        elevation={0} 
        sx={{ 
          p: { xs: 4, md: 6 }, 
          textAlign: 'center', 
          borderRadius: '20px',
          border: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Box sx={{ mb: 3 }}>
          <LockResetOutlinedIcon sx={{ fontSize: 60, color: 'primary.main', opacity: 0.8 }} />
        </Box>

        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
          {t('Reset Password')}
        </Typography>
        
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
          {t('Code sent to:')} <strong style={{ color: '#000' }}>{email}</strong>
        </Typography>

        <Stack component="form" onSubmit={handleSubmit(onSubmit)} spacing={3}>
          
          <TextField
            {...register('code', { required: t('Verification code is required') })}
            fullWidth
            label={t("Verification Code")}
            variant="standard" 
            error={!!errors.code}
            helperText={errors.code?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKeyOutlinedIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            {...register('newPassword', { 
              required: t('Password is required'),
              minLength: { value: 8, message: t('Password must be at least 8 characters') },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                message: t('It must include uppercase and lowercase letters, a number, and a special symbol.')
              }
            })}
            fullWidth
            type="password"
            label={t("New Password")}
            variant="standard"
            error={!!errors.newPassword}
            helperText={errors.newPassword?.message}
          />

          {serverErrors && (
            <Typography variant="caption" sx={{ color: 'error.main', fontWeight: 600 }}>
              {serverErrors}
            </Typography>
          )}

          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={isLoading}
            sx={{
              py: 2,
              borderRadius: '50px',
              fontWeight: 800,
              bgcolor: 'text.primary',
              color: 'background.paper',
              '&:hover': { bgcolor: 'secondary.main' }
            }}
          >
            {isLoading ? t('VERIFYING...') : t('RESET PASSWORD')}
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}