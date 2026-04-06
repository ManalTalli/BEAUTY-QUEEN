import React, { useState } from 'react';
import { Button, Rating, CircularProgress, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAddReview } from '../../hooks/useAddReviews';

export default function Reviews() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
    const {id}=useParams();

  const { mutate, isLoading, error, isError,isPending } = useAddReview(id);

const handleSubmit = (e) => {
    e.preventDefault();
    
    // 2. تنفيذ العملية (إرسال البيانات)
    mutate({ Rating: rating, Comment: comment }, {
      onSuccess: () => {
        // هون بنصفر الفورم بس ينجح الطلب
        setRating(0);
        setComment('');
        alert("Review added successfully!");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Rating 
        value={rating} 
        onChange={(event, newValue) => setRating(newValue)} 
      />
      
      <input 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
        placeholder="Write your review..."
      />
      {isError && (
        <Typography style={{ color: 'red' }}>
          {isError && (error?.response?.data?.errors? Object.values(error.response.data.errors).flat().map((err, i) =>
           <Typography key={i} style={{ color: 'red' }}>{err}</Typography>) 
    : <Typography style={{ color: 'red' }}>{error?.response?.data?.message}</Typography>
  )}
        </Typography>
      )}

      
      <Button disabled={isPending} color='primary' variant='contained' type='submit'>{isPending ? <CircularProgress size={24} /> : 'Send'}</Button>
    </form>
  );
}