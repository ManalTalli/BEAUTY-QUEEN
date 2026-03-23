import axiosInstance from '../api/axiosInstance'
import { useQuery } from '@tanstack/react-query'
import i18n from '../i18next';
import { useTranslation } from 'react-i18next';

export default function useCategories() {
    const { i18n } = useTranslation();
    const getCategories= async ()=>{
        const response =await axiosInstance.get(`/Categories?limit=100`);
        return response.data;
    }
    const query = useQuery ({
        queryKey: ['Categories',i18n.language],
        queryFn: getCategories,
        staleTime: 1000*60*5
    });
    return query;
}
