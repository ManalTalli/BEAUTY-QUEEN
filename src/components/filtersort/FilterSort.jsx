import { Box, CircularProgress, FormControl, InputLabel, MenuItem, Select, Slider, Typography, Stack, TextField } from '@mui/material'
import { useSortStore } from '../../store/useSortStore';
import useCategories from '../../hooks/useCategories';
import { useFilterStore } from '../../store/useFilterStore.JS';

export default function FilterSort({ onSelect, currentCat }) {
    const { data, isLoading, isError, error } = useCategories();
    const { value, updateValue } = useFilterStore();
    const { sortedBy, sortedOrder, setSortedBy, setSortedOrder } = useSortStore();

    if (isLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}><CircularProgress size={24} /></Box>
    if (isError) return <Typography color='error'>{error.message}</Typography>

    return (
        <Stack spacing={4} sx={{ mt: 2 }}>
            <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                    Price Range
                </Typography>
                <Box sx={{ px: 2 }}>
                    <Slider
                        value={value}
                        onChange={(e, newValue) => updateValue(newValue)}
                        min={0}
                        max={2000}
                        valueLabelDisplay="auto"
                        sx={{ color: 'primary.main' }}
                    />
                </Box>
                <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                    <TextField 
                        label="Min" 
                        value={value[0]} 
                        size="small" 
                        disabled 
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                    />
                    <TextField 
                        label="Max" 
                        value={value[1]} 
                        size="small" 
                        disabled 
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                    />
                </Stack>
            </Box>

            <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                    Sort By
                </Typography>
                <Stack spacing={2}>
                    <FormControl fullWidth size="small">
                        <InputLabel>Criteria</InputLabel>
                        <Select
                            value={sortedBy}
                            label="Criteria"
                            onChange={(e) => setSortedBy(e.target.value)}
                            sx={{ borderRadius: '10px' }}
                        >
                            <MenuItem value="name">Name</MenuItem>
                            <MenuItem value="price">Price</MenuItem>
                            <MenuItem value="rate">Rate</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth size="small">
                        <InputLabel>Order</InputLabel>
                        <Select
                            value={sortedOrder}
                            label="Order"
                            onChange={(e) => setSortedOrder(e.target.value)}
                            sx={{ borderRadius: '10px' }}
                        >
                            <MenuItem value="asc">Ascending</MenuItem>
                            <MenuItem value="desc">Descending</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
            </Box>

            <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                    Category
                </Typography>
                <FormControl fullWidth size="small">
                    <Select
                        value={currentCat}
                        onChange={(e) => onSelect(e.target.value)}
                        sx={{ borderRadius: '10px' }}
                    >
                        <MenuItem value="ALL">All Categories</MenuItem>
                        {data.response.data.map(category => (
                            <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </Stack>
    )
}