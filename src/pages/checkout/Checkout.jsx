import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Typography';

import React, { useState } from 'react'
import useCart from '../../hooks/useCart';
import Loader from '../../ui/Loader';
import { Button, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import useCheckout from '../../hooks/useCheckout';

export default function Checkout() {
      const {data, isError , isLoading,error } = useCart ();
      const [paymentMethod,setPaymentMethod] = useState('Cash');
      const {mutate:checkout,isPending}=useCheckout();
      if (isLoading) return <Loader/>
  if (isError) return <Box color={'red'}>{error.message}</Box>
  return (
    <Container disableGutters sx={{px:3,marginTop:'100px'}} maxWidth={false} >
    <Box className='cart' sx={{py:5}}>
      <Typography component={'h1'}>checkout</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.items.map(item=>(
              <TableRow>
                <TableCell>{item.productName}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <Box display={'flex'} alignItems={'center'}>
                    <Typography>{item.count}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{item.totalPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableCell colSpan={5}>Total : {data.cartTotal}</TableCell>
          </TableFooter>
        </Table>
      </TableContainer>

      <Box>
        <FormControl fullWidth>
            <InputLabel id="paymentMethod">Payment Method</InputLabel>
            <Select 
            labelId='paymentMethod'
            id='paymentMethod'
            value={paymentMethod}
            label='paymentMethod'
            onChange={(e)=>setPaymentMethod(e.target.value)}>
                <MenuItem value={'Cash'}>Cash</MenuItem>
                <MenuItem value={'Visa'}>Visa</MenuItem>
            </Select>
        </FormControl>
        <Button variant='contained' onClick={()=>checkout(paymentMethod)}>Pay now</Button>

      </Box>

    </Box></Container>
  
  )
}
