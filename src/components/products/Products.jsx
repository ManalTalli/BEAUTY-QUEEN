import useProducts from '../../hooks/useProducts'
import { Box, Grid, Container } from '@mui/material';
import Loader from '../../ui/Loader';
import ProductsUI from '../../ui/products/ProductsUI';
import useSort from '../../hooks/useSort';
import useFilteredProducts from '../../hooks/useFilteredProducts';

export default function Products({ currentCat }) {
    const { isLoading, isError, error } = useProducts();
    const query = useFilteredProducts(currentCat);
    const products = query.data;
    const { sortedData } = useSort(products);

    if (isLoading) return <Loader />
    if (isError) return <Box sx={{ color: 'red', textAlign: 'center', my: 5 }}>{error.message}</Box>

    return (

        <Container maxWidth="xl" sx={{ py: 1}}>
            <Grid 
                container 
                spacing={3} 
                justifyContent="flex-start" 
                alignItems="stretch" 
            >
                {sortedData?.map(product => (
                    <ProductsUI product={product} key={product.id} />
                ))}
            </Grid>
        </Container>
    )
}