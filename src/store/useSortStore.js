import { create } from "zustand";


export const useSortStore=create((set)=>(
    {
        sortedBy:'price',
        sortedOrder:'asc',
        setSortedBy:(newSortedBy)=>set({sortedBy:newSortedBy}),
        setSortedOrder:(newSortedOrder)=>set({sortedOrder:newSortedOrder})
    }
)) 