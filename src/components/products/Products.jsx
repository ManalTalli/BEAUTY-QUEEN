import useProducts from '../../hooks/useProducts'
import { Box, Grid} from '@mui/material';
import Loader from '../../ui/Loader';
import ProductsUI from '../../ui/products/ProductsUI';
import UseFilter from '../../hooks/useFilter';


export default function Products() {
  const {data , isLoading , isError , error} = useProducts ();
  if (isLoading) return <Loader/>
  if (isError) return <Box color={'red'}>{error.message}</Box>
  const query = useProducts();
      const products = query.data?.response.data;
      const {filterData} = UseFilter(products);
  return (
    <Box className='products' paddingTop={'50px'} width={'100%'}>

                    <Grid container gap={'30px'}>
                        {filterData.map(product =>
                            <ProductsUI product={product} key={product.id} />
                        )}
                    </Grid>

                </Box>
  )
}
