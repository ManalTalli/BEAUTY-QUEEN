import { useState } from "react";
import { useProductStore } from "../store/useProductStore.JS";


export default function UseFilter (items){
    const {value,updateValue}=useProductStore();
    const filterData = items?.filter (item=>{
        return (item.price>=value[0]&&item.price<=value[1])         
    })
    return {filterData};

}