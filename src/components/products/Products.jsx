import useProducts from '../../hooks/useProducts'
import { Box, Grid } from '@mui/material';
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
    if (isError) return <Box color={'red'}>{error.message}</Box>

    return (
        <Grid container gap={'30px'}>
            {sortedData.map(product =>
                <ProductsUI product={product} key={product.id} />
            )}
        </Grid>


    )
}
