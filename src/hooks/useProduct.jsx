import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance"
import i18n from "../i18next";
import { useTranslation } from "react-i18next";


export default function useProducts(id){
        const { i18n } = useTranslation();
    
    const getProducts = async ()=>{
        const response = await axiosInstance.get(`/Products/${id}`);
        return response.data;
        console.log(response.data)
    }
    
    const query= useQuery({
        queryKey:['product',i18n.language,id],
        queryFn:getProducts,
        staleTime:1000*60*5
    });
    return query;
}