import { useState } from "react";

export default function useSearch (items){
    const [searchTerm , setSearchTerm] = useState ("");
    
    const filterData = items?.filter(item =>{
       return item.name.toLowerCase().includes(searchTerm.toLowerCase())
    });
    return {filterData,searchTerm,setSearchTerm};

}