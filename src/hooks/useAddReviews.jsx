import { useMutation, useQueryClient } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';
import { Rating } from '@mui/material';

export const useAddReview = (productId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newReview) => {
      const response = await authAxiosInstance.post(`/Products/${productId}/reviews`, newReview);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['reviews']});
    },
  });
};