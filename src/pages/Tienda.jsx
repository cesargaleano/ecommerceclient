import React from 'react'
import { CreateProduct } from '../components/Tienda/CreateProduct'
import { RenderProducts } from '../components/Tienda/RenderProducts';


export const Tienda = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    
    
    <RenderProducts />
    
    </div>
  )
}
