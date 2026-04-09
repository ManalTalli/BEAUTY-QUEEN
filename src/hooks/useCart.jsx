import authAxiosInstance from '../api/authAxiosInstance';
import { useQuery } from '@tanstack/react-query'
import i18n from '../i18next';
import { useTranslation } from 'react-i18next';
import useAuthStore from '../store/useAuthStore';

export default function useCart() {
    const { i18n } = useTranslation();
    const token = useAuthStore((state) => state.token);
    const getItems= async ()=>{
        const response =await authAxiosInstance.get(`/Carts`);
        return response.data;
    }
    const query = useQuery ({
        queryKey: ['carts',i18n.language],
        queryFn: getItems,
        enabled: !!token,
        retry: false,
    });
    return query;
}