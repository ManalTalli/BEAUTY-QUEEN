import { useQuery } from '@tanstack/react-query'
import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance'
import { useTranslation } from 'react-i18next';

export default function useProflie() {
          const { i18n } = useTranslation();
  
  return useQuery ({
    queryKey:['profile',i18n.language],
    queryFn:async ()=>{
        const response =await authAxiosInstance.get('/Profile');
        return response.data;
    },
    staleTime:1000*60*5
  }
   
  )
}
