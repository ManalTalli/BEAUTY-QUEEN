import axiosInstance from '../../api/axiosInstance'
import { useQuery } from '@tanstack/react-query'

export default function useCategories() {
    const getCategories= async ()=>{
        const response =await axiosInstance.get(`/Categories`);
        return response.data;
    }
    const query = useQuery ({
        queryKey: ['Categories'],
        queryFn: getCategories,
        staleTime: 1000*60*5
    });
    return query;
}
