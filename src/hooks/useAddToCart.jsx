import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import authAxiosInstance from '../api/authAxiosInstance'
import { useTranslation } from 'react-i18next';

export default function useAddToCart() {
    const { i18n } = useTranslation();
    const queryClient = useQueryClient ();
    const mutation = useMutation ({
        mutationFn:async({ProductId,Count}) =>{
            return await authAxiosInstance.post('/Carts',{
                ProductId:ProductId,
                Count:Count
            })
        }, onSuccess: () =>{
            queryClient.invalidateQueries(
                {queryKey: ['carts',i18n.language]}
            )
        }
    })
  return mutation;
}
