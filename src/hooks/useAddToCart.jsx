import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import authAxiosInstance from '../api/authAxiosInstance'

export default function useAddToCart() {
    const queryClient = useQueryClient ();
    const mutation = useMutation ({
        mutationFn:async({ProductId,Count}) =>{
            return await authAxiosInstance.post('/Carts',{
                ProductId:ProductId,
                Count:Count
            })
        }, onSuccess: () =>{
            queryClient.invalidateQueries(
                {queryKey: ['carts']}
            )
        }
    })
  return mutation;
}
