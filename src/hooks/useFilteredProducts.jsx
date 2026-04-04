import { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';

export default function useFilteredProducts(selectCategory) {
  const { i18n } = useTranslation();
  const url = (selectCategory === "ALL")? '/Products': `/Products/category/${selectCategory}`;
      
      const getProducts = async ()=>{
          const response = await axiosInstance.get(url);
          
    return response.data.response.data ? response.data.response.data : response.data.response;
      }
      const query= useQuery({
          queryKey:['product',i18n.language,selectCategory],
          queryFn:getProducts,
          staleTime:1000*60*5
      });
      return query;
  }
