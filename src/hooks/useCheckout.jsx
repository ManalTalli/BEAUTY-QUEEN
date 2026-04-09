import { useMutation, useQueryClient } from '@tanstack/react-query'
import authAxiosInstance from '../api/authAxiosInstance';
import { useTranslation } from 'react-i18next';

export default function useCheckout() {
  const { i18n } = useTranslation();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (paymentMethod) => {
      return await authAxiosInstance.post('/Checkouts', { PaymentMethod: paymentMethod })
    },
    onSuccess: (response) => {
      if (response.data.url) {
        location.href = response.data.url;
      }
      queryClient.invalidateQueries({ queryKey: ['carts',i18n.language]});
      queryClient.invalidateQueries({ queryKey: ['orders',i18n.language] });
      queryClient.invalidateQueries({ queryKey: ['profile',i18n.language] });
    }
  })
}
