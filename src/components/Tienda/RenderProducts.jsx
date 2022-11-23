import React from 'react'
//import { PRODUCTS } from '../../mockups/products'
import { Product } from './Product';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const RenderProducts = () => {
  const PRODUCTS = useSelector(state=>state.product.productsList);
  console.log(PRODUCTS);
  return (
    <ProductsWrapper style={{}}>
    {
     PRODUCTS.map((product,index)=>(
       <Product key={index} product={product} />
     ))
     
   }
   </ProductsWrapper>
  )
}

const ProductsWrapper = styled.div`
padding:1rem;
display:flex;
justify-content:center;
align-items: center;
flex-direction:row;
flex-wrap: wrap;
column-gap: 1rem;
row-gap:1rem;


`;