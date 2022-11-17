import React, { useState } from 'react';
import styled from 'styled-components'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";



export const SelectQty = ({stock, quantity, setQuantity }) => {
    

    const handleClickUp = ()=>{
        if (quantity===stock) return alert("Cantidad maxima Alcanzada");
        return setQuantity(quantity+1);
        };
    

    const handleClickDown = ()=>{
        if (quantity===1) return alert("Cantidad minima 1");
        return setQuantity(quantity-1);
    
    };

  return (
    <SelectWrapper>
    <Down name="decrementar" onClick={handleClickDown}><FiChevronLeft /></Down>
    <Quantity><label >{quantity}</label></Quantity>
    <Up name="incrementar" onClick={handleClickUp}><FiChevronRight /></Up>
    </SelectWrapper>
  )
}


const SelectWrapper = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border: solid 1px lightgrey;
border-radius:50px;
width:6rem;
height:3rem;



`;

const Quantity = styled.div`
display:flex;
justify-content: center;
align-items:center;
height:3rem;
width: 2rem;



`;

const Down = styled.div`
display:flex;
align-items:center;
justify-content:center;
background-color:lightgrey;
height:3rem;
width: 2rem;
cursor:pointer;
border-radius:50px 0px 0px 50px;

`;

const Up = styled.div`
display:flex;
align-items:center;
justify-content:center;
background-color:lightgrey;
height:3rem;
width: 2rem;
cursor:pointer;
border-radius:0px 50px 50px 0px;
`;