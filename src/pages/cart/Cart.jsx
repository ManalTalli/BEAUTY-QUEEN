import React from 'react'
import useCart from '../../hooks/useCart'
import { useCounterStore } from '../../store/useCounterStore';
import Loader from '../../ui/Loader';
import { Box, Button, Container, IconButton, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import useUpdateCartItem from '../../hooks/useUpdateCartItem';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import useRemoveAllItem from '../../hooks/useRemoveAllItem';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Cart() {
  const {data, isError , isLoading,error } = useCart ();
    const { t } = useTranslation();
  
  const {mutate:removeItem,isPending:removeItempend} = useRemoveFromCart ();
  const {mutate:updateItem,isPending:updateItempend} = useUpdateCartItem ();
  const checkout = useNavigate();
  const handleUpdateQty = (productId,action) =>{
    const item = data.items.find( (i)=>{
      return i.productId == productId;
    });
    if (action == '-') {
      updateItem ({productId,count:item.count-1})
    }
    else {
      updateItem ({productId,count:item.count+1})
    }

  }
  const {mutate:removeAllitem,isPending:allItemPend}=useRemoveAllItem ();
  if (isLoading) return <Loader/>
  if (isError) return <Box color={'red'}>{error.message}</Box>
  
  console.log(data);
  return (
    <Container disableGutters sx={{px:3,marginTop:'100px'}} maxWidth={false} >
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
              <TableRow  key={item.productId}>
                <TableCell>{item.productName}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <Box display={'flex'} alignItems={'center'}>
                    <IconButton onClick={()=>handleUpdateQty(item.productId,'-')}>
                      <RemoveIcon/>
                    </IconButton>
                    <Typography>{item.count}</Typography>
                    <IconButton onClick={()=>handleUpdateQty(item.productId,'+')}>
                      <AddIcon/>
                    </IconButton>
                  </Box>
                </TableCell>
                <TableCell>{item.totalPrice}</TableCell>
                <TableCell><Button disabled={removeItempend} color='error' variant='contained' onClick={()=>removeItem(item.productId)}>Remove</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow><TableCell colSpan={5}>Total : {data.cartTotal}</TableCell></TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <Button color='error' variant='contained' onClick={()=>removeAllitem()}>{t('Delete')}</Button>

      <Box >
        <Button onClick={()=>checkout('/Cart/Checkout')}>Checkout</Button>
      </Box>
    </Box></Container>
  )
}
