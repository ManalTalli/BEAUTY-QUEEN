import { useState } from "react";
import { useFilterStore } from "../store/useFilterStore.JS";


export default function UseFilter (items){
    const {value,updateValue}=useFilterStore();
    const filterData = items?.filter (item=>{
        return (item.price>=value[0]&&item.price<=value[1])         
    })
    return {filterData};

}