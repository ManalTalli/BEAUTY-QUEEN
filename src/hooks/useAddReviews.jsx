import { useMutation, useQueryClient } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';
import { Rating } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const useAddReview = (productId) => {
  const { i18n } = useTranslation();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newReview) => {
      const response = await authAxiosInstance.post(`/Products/${productId}/reviews`, newReview);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['reviews',i18n.language]});
    },
  });
};