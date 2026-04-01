import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Slider, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import UseFilter from '../../hooks/useFilter';
import useProducts from '../../hooks/useProducts';
import ProductsUI from '../../ui/products/ProductsUI';
import { useFilterStore } from '../../store/useFilterStore.JS';
import { useSortStore } from '../../store/useSortStore';

export default function FilterSort() {

    const { value, updateValue } = useFilterStore();
        const {sortedBy , sortedOrder,setSortedBy,setSortedOrder}=useSortStore();
    

    const handleChangeFilter = (event, newValue) => {
        updateValue(newValue);
    };
    const handleChangeSortBy = (event)=>{
        setSortedBy(event.target.value);
    };
    const handleChangeSort = (event)=>{
        setSortedOrder(event.target.value);
    };
    return (
        <div>
            <Box height={'100vh'}>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} paddingTop={'100px'}>
                    <Slider sx={{ width: '350px' }}
                        value={value}
                        onChange={handleChangeFilter}
                        min={0}
                        max={2000}
                        valueLabelDisplay="auto"
                    />
                </Box>
                <TextField value={value[0]} alignItems={'center'}></TextField>
                <TextField value={value[1]} alignItems={'center'}></TextField>

            
            <Box paddingTop={'50px'}>
                <FormControl fullWidth>
                    <InputLabel id="sortedBy-label">Sort</InputLabel>
                    <Select
                        labelId="sortedBy-label"
                        id="sortedBy"
                        value={sortedBy}
                        label="Sort"
                        onChange={handleChangeSortBy}
                    >
                        <MenuItem value="name">Name</MenuItem>
                        <MenuItem value="price">Price</MenuItem>
                        <MenuItem value="rate">Rate</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box>
                <FormControl fullWidth>
                    <InputLabel id="sorted-label">Sort</InputLabel>
                    <Select
                        labelId="sorted-label"
                        id="sorted"
                        value={sortedOrder}
                        label="Sortorder"
                        onChange={handleChangeSort}
                    >
                        <MenuItem value="asc">asc</MenuItem>
                        <MenuItem value="desc">desc</MenuItem>
                    </Select>
                </FormControl>
            </Box>
</Box>
        </div>
    )
}
