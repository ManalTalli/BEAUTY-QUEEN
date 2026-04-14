import React, { useState } from 'react';
import { Button, Rating, CircularProgress, Typography, TextField, Stack, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAddReview } from '../../hooks/useAddReviews';
import { useTranslation } from 'react-i18next';

export default function Reviews() {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const { id } = useParams();
    const { mutate, error, isError, isPending } = useAddReview(id);
const { t } = useTranslation();

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate({ Rating: rating, Comment: comment }, {
            onSuccess: () => {
                setRating(0);
                setComment('');
            }
        });
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={3}>
                <Box>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>{t('Your Rating')}</Typography>
                    <Rating 
                        value={rating} 
                        size="large"
                        onChange={(event, newValue) => setRating(newValue)} 
                    />
                </Box>

                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder={t("Describe your experience with this product...")}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            bgcolor: 'background.paper',
                            color:'text.secondary'
                        }
                    }}
                />

                {isError && (
                    <Box sx={{ color: 'red' }}>
                        {error?.response?.data?.errors ? 
                            Object.values(error.response.data.errors).flat().map((err, i) => (
                                <Typography key={i} variant="caption" display="block">{err}</Typography>
                            )) 
                            : <Typography variant="caption">{error?.response?.data?.message}</Typography>
                        }
                    </Box>
                )}

                <Button 
                    disabled={isPending || !rating} 
                    color='primary' 
                    variant='contained' 
                    type='submit'
                    sx={{ 
                        alignSelf: 'flex-start', 
                        borderRadius: '10px', 
                        px: 6, 
                        py: 1.5,
                        boxShadow: 'none'
                    }}
                >
                    {isPending ? <CircularProgress size={24} color="inherit" /> : t('Post Review')}
                </Button>
            </Stack>
        </Box>
    );
}