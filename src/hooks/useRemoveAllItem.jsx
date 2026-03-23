import { useMutation, useQueryClient } from '@tanstack/react-query'
import authAxiosInstance from '../api/authAxiosInstance';

export default function useRemoveAllItem() {
    const queryClient= useQueryClient();
    return useMutation ({
        mutationFn:()=>authAxiosInstance.delete('/Carts/clear'),
        onSuccess:()=>{
            queryClient.invalidateQueries(
                {queryKey:['carts']}
            )
        }
    })

}
