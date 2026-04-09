import { useMutation, useQueryClient } from '@tanstack/react-query'
import authAxiosInstance from '../api/authAxiosInstance';
import { useTranslation } from 'react-i18next';

export default function useRemoveAllItem() {
            const { i18n } = useTranslation();
    
    const queryClient= useQueryClient();
    return useMutation ({
        mutationFn:()=>authAxiosInstance.delete('/Carts/clear'),
        onSuccess:()=>{
            queryClient.invalidateQueries(
                {queryKey:['carts',i18n.language]}
            )
        }
    })

}
