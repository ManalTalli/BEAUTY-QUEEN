import React from 'react'
import useCart from '../../hooks/useCart'
import { useCounterStore } from '../../store/useCounterStore';
import Loader from '../../ui/Loader';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';

export default function Cart() {
  const {data, isError , isLoading,error } = useCart ();
  const {mutate,isPending} = useRemoveFromCart ();
  if (isLoading) return <Loader/>
  if (isError) return <Box color={'red'}>{error.message}</Box>
  
  console.log(data);
  return (
    <Box className='cart' sx={{py:5}}>
      <Typography component={'h1'}>My Cart</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.items.map(item=>(
              <TableRow>
                <TableCell>{item.productName}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.count}</TableCell>
                <TableCell>{item.totalPrice}</TableCell>
                <TableCell><Button disabled={isPending} color='error' variant='contained' onClick={()=>mutate(item.productId)}>Remove</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableCell colSpan={5}>Total : {data.cartTotal}</TableCell>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  )
}
