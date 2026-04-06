import React from 'react'
import useProflie from '../../hooks/useProflie';
import { Box, Table, TableBody, TableCell, TableHead, Typography } from '@mui/material';

export default function ProfileOrders() {
  const {data}= useProflie();
  
  return (
    <div>
      <Table>
        <TableHead>
          
          <TableCell id='id'>Order Id</TableCell>
          <TableCell id='status'>Order status</TableCell>
          <TableCell id='date'>Order Date</TableCell>
          
        </TableHead>
        
     { data?.orders.map(order=>
     <TableBody>
     <TableCell id='id'> {order.id}</TableCell>
     <TableCell id='status'> {order.status}</TableCell>
     <TableCell id='date'> {order.orderDate}</TableCell>
     </TableBody>
     )}
     
     </Table>          

      
    </div>
  )
}
