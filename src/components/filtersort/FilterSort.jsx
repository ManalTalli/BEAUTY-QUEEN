import { Box, Grid, Slider, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import UseFilter from '../../hooks/useFilter';
import useProducts from '../../hooks/useProducts';
import ProductsUI from '../../ui/products/ProductsUI';
import { useProductStore } from '../../store/useProductStore.JS';

export default function FilterSort() {
    
    const {value, updateValue} = useProductStore();

    const handleChange = (event, newValue) => {
        updateValue(newValue);
    };
    return (
        <div>
            <Box height={'100vh'}>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} paddingTop={'100px'}>
                    <Slider sx={{ width: '350px' }}
                        value={value}
                        onChange={handleChange}
                        min={0}
                        max={2000}
                        valueLabelDisplay="auto"
                    />
                </Box>
                <TextField value={value[0]} alignItems={'center'}></TextField>
                <TextField value={value[1]} alignItems={'center'}></TextField>
                
            </Box>

        </div>
    )
}
