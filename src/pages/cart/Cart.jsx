import React from 'react'
import useCart from '../../hooks/useCart/useCart'

export default function Cart() {
  const {data, isError , isLoading } = useCart ();
  console.log(data);
  return (
    <div>
      Cart
    </div>
  )
}
