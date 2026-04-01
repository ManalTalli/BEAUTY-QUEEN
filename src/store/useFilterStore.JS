import React from 'react'
import { create } from 'zustand'

export const useFilterStore=create((set)=>(
    {
        value:[0,2000],
        updateValue:(newValue)=>{
            set((state)=>({
                value:newValue
            }))
        }


    }
    
)) 
