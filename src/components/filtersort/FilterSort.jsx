import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Slider, TextField } from '@mui/material'
import { useSortStore } from '../../store/useSortStore';
import useCategories from '../../hooks/useCategories';
import { useFilterStore } from '../../store/useFilterStore.JS';

export default function FilterSort({ onSelect, currentCat }) {
    const { data, isLoading, isError, error } = useCategories();
    const { value, updateValue } = useFilterStore();
    const { sortedBy, sortedOrder, setSortedBy, setSortedOrder } = useSortStore();
    if (isLoading) return <Loader />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    const handleChangeFilter = (event, newValue) => {
        updateValue(newValue);
    };
    const handleChangeSortBy = (event) => {
        setSortedBy(event.target.value);
    };
    const handleChangeSort = (event) => {
        setSortedOrder(event.target.value);
    };
    const handleChangeCat = (event) => {
        onSelect(event.target.value);
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

                <FormControl fullWidth>
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                        labelId="category-label"
                        id="Category"
                        value={currentCat}
                        label="Category"
                        onChange={handleChangeCat}
                    >
                        <MenuItem value="ALL">ALL</MenuItem>
                        {data.response.data.map(category =>
                            <MenuItem value={category.id}>{category.name}</MenuItem>

                        )}
                    </Select>
                </FormControl>

            </Box>
        </div>
    )
}
