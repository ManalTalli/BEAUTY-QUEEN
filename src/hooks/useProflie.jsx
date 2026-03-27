import { useQuery } from '@tanstack/react-query'
import React from 'react'
import authAxiosInstance from '../api/authAxiosInstance'

export default function useProflie() {
  return useQuery ({
    queryKey:['profile','en'],
    queryFn:async ()=>{
        const response =await authAxiosInstance.get('/Profile');
        return response.data;
    },
    staleTime:1000*60*5
  }
   
  )
}
