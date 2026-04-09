import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance';
import { useTranslation } from 'react-i18next';

export default function useUpdateCartItem() {

    const queryClient = useQueryClient ();
            const { i18n } = useTranslation();
    
    return useMutation ({
        mutationFn:async({productId,count})=>{
            await authAxiosInstance.patch(`/Carts/${productId}`,{count})
        },
        onSuccess :()=>{
            queryClient.invalidateQueries({queryKey:['carts',i18n.language]})       
        }
    })
}
