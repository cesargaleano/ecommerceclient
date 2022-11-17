import React, { useState } from 'react';
import styled from 'styled-components'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";



export const SelectQty1 = ({newShoppingList, setNewShoppingList, index}) => {
   const stock =newShoppingList[index].product.stock; 
   const  [quantity, setQuantity] =  useState(newShoppingList[index].quantity);
   let shoppingListTemp = JSON.parse(JSON.stringify(newShoppingList));
   
    const handleClickUp = ()=>{
        if (quantity===stock) return alert("Cantidad maxima Alcanzada");
        
        shoppingListTemp[index].quantity=quantity+1;
        shoppingListTemp[index].subtotal=(quantity+1)*Number(shoppingListTemp[index].product.price);
        setQuantity(quantity+1);
        setNewShoppingList(shoppingListTemp);
        };
    

    const handleClickDown = ()=>{
        if (quantity===1) return alert("Cantidad minima 1");
        shoppingListTemp[index].quantity=quantity-1;
        shoppingListTemp[index].subtotal=(quantity-1)*Number(shoppingListTemp[index].product.price);
        setQuantity(quantity-1);
        setNewShoppingList(shoppingListTemp);
       
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
width:6vw;



`;

const Quantity = styled.div`
display:flex;
justify-content: center;
align-items:center;
height:35px;
width: 20px;



`;

const Down = styled.div`
display:flex;
align-items:center;
justify-content:center;
background-color:lightgrey;
height:35px;
width: 20px;
cursor:pointer;
border-radius:50px 0px 0px 50px;

`;

const Up = styled.div`
display:flex;
align-items:center;
justify-content:center;
background-color:lightgrey;
height:35px;
width: 20px;
cursor:pointer;
border-radius:0px 50px 50px 0px;
`;