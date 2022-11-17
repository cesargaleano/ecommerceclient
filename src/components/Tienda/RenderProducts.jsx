import React from 'react'
//import { PRODUCTS } from '../../mockups/products'
import { Product } from './Product';
import { useSelector } from 'react-redux';

export const RenderProducts = () => {
  const PRODUCTS = useSelector(state=>state.product.productsList);
  console.log(PRODUCTS);
  return (
    <div style={{display:'flex', flexDirection:'row', flexWrap: 'wrap' , gap:'20px'}}>
    {
     PRODUCTS.map((product,index)=>(
       <Product key={index} product={product} />
     ))
     
   }
   </div>
  )
}
