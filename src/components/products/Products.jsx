import useProducts from '../../hooks/useProducts'
import { Box, Grid} from '@mui/material';
import Loader from '../../ui/Loader';
import ProductsUI from '../../ui/products/ProductsUI';
import UseFilter from '../../hooks/useFilter';
import useSort from '../../hooks/useSort';


export default function Products() {
  const {data , isLoading , isError , error} = useProducts ();
  const query = useProducts();
      const products = query.data?.response.data;
      const {sortedData} = useSort(products);
  if (isLoading) return <Loader/>
  if (isError) return <Box color={'red'}>{error.message}</Box>
  
  return (
    <Box className='products' paddingTop={'50px'} width={'100%'}>

                    <Grid container gap={'30px'}>
                        {sortedData.map(product =>
                            <ProductsUI product={product} key={product.id} />
                        )}
                    </Grid>

                </Box>
  )
}
