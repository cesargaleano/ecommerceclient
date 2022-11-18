import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { convertToCurrency } from '../../helpers/formatCurrency';
import { updateShoppingCart } from '../../redux/features/shoppinCart/shoppingCartSlice';
import { PayuPay } from '../Payu/PayuPay';
import { SelectQty1 } from '../shared/SelectQty1';

export const ShoppingCart = ({activeModal, setActiveModal}) => {
    const shoppingList = useSelector(state=>state.shoppingCart.shoppingList);
    const dispatch = useDispatch();
  
    const [newShoppingList, setNewShoppingList] = useState([...shoppingList])
    
   const handleClickRemove = (index)=>{
    let newData = JSON.parse(JSON.stringify(newShoppingList));
    setActiveModal(false);
    console.log(index);
    newData.splice(index,1);
    setNewShoppingList(newData);
    dispatch(updateShoppingCart(newData));

    

   };

  return (
    
    <>
    
    { newShoppingList.length>0?( 
      <Overlay>
        <WrapperModal>
            <HeaderModal>
                <Logo src={logo}/>
                <label>Producto Añadido Correctamente al Carrito de Compras</label>
                <Close onClick={()=>setActiveModal(false)}>X</Close>
            </HeaderModal>
            <ProductList>
                

  <table>
  <tr>
    <th>IMAGEN</th>
    <th>PRODUCTO</th>
    <th>CANTIDAD</th>
    <th>PRECIO UND</th>
    <th>SUBTOTAL</th>
    <th>ELIMINAR</th>
    
  </tr>
   
           
{ 
newShoppingList.map((prod, index)=>(
        <tr key={index}>
            <td align="center"><Img src={prod.product.images[0]} alt="images" /></td>
            <td align="center">{prod.product.name}</td>
            <td align="center"><SelectQty1 newShoppingList={newShoppingList} setNewShoppingList={setNewShoppingList} index={index} /></td>
            <td align="center">{convertToCurrency(prod.product.price)}</td>
            <td align="center">{convertToCurrency(prod.subtotal)}</td>
            <td align="center"><Remove onClick = {()=>handleClickRemove(index)}>X</Remove></td>
            </tr>
   ))
   
 
}
<tr>
   <td align="center"></td>
   <td align="center"></td>
   <td align="center"></td>
   <td align="center"><strong>TOTAL</strong></td>
   <td align="center">10000</td>
  </tr>

 

 

</table>

   


</ProductList>
           
        <PayuPay /> 
        </WrapperModal>
       
    </Overlay>
    
    ): 
    (<></>)
  
}
    </>
  )};



const Overlay = styled.div`
display:flex;
align-items:center;
justify-content:center;
width: 100vw;
height:100vh;
background-color: rgba(0,0,0,0.4);
position: fixed;
top:0;
left:0;
padding:40px

`;

const WrapperModal = styled.div`
 position:relative;
 width: 900px;
 min-height:100px;
 background-color: white;
 border-radius:5px;
box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
padding:20px;

`;

const HeaderModal = styled.div`
display:flex;
flex-direction: row;
justify-content:space-between
`;

const Logo = styled.div`
width:50px;
height:50px;
background-image: url(logo);
background-position:center;
background-repeat: no-repeat;
`;

const Close = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:30px;
height:30px;
border: 1px solid grey;
border-radius: 5px;
cursor: pointer;
&:hover {
    background-color:lightgrey;
}

`;

const ProductList = styled.div`
display:flex;
flex-direction:column;


`;



const Img = styled.img`
width: 40px;
height:40px;
`;

const Remove = styled.button`
padding: 5px;

`;

