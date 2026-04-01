import { useSortStore } from "../store/useSortStore";
import UseFilter from "./useFilter";



export default function useSort(items){
    const {filterData} = UseFilter(items);
    const {sortedBy , sortedOrder,setSortedBy,setSortedOrder}=useSortStore();
    const sortedData = [...(filterData || [])].sort((x,y)=>{
        let result;
        if (sortedBy === 'name'){
            result=x.name.localCompare(y.name);
        }
        else{
            result=x[sortedBy]-y[sortedBy];
        }
        if(sortedOrder === 'desc'){
            return -result;
        }
        return result;
    })
    return {sortedData};
}