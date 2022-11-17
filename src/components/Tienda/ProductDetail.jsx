import React, {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
//import { PRODUCTS } from '../../mockups/products';
import { SelectQty } from '../shared/SelectQty';
import { ShoppingCart } from './ShoppingCart';
import {  updateShoppingCart } from '../../redux/features/shoppinCart/shoppingCartSlice';
import { Button } from '../shared/Button';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { convertToCurrency } from '../../helpers/formatCurrency';
import Swal from 'sweetalert2';


export const ProductDetail = () => {
    const PRODUCTS = useSelector(state=>state.product.productsList);
    const shoppingList = useSelector(state=>state.shoppingCart.shoppingList);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //console.log(shoppingList);
    const id = useParams().id;
    //console.log(typeof(id));
    const [indexImg, setIndexImg] = useState(0);
    const [activeModal, setActiveModal] = useState(false);
    const [quantity, setQuantity] = useState(1);
    
    
    
    const product = PRODUCTS.find((el)=>el._id===id);
    
    const handleClick = (e)=>{
        setIndexImg(e.target.name);
    };

    const handleModal = ()=>{
        
        const validate= shoppingList.filter((prod,index)=>prod.product._id===product._id);
            
          console.log(validate); 
        
      if(validate.length===0){
        let subtotal = product.price*quantity;
        const data = [...shoppingList, {product: product, quantity: quantity, subtotal:subtotal}];
        let total = 0;
        data.map(el=>total+=el.subtotal);
        console.log(total);
        dispatch(updateShoppingCart(data));
        setActiveModal(!activeModal);

        

      }else 
      Swal.fire({
        icon: 'error',
        title: 'Este producto ya existe en el carrito de compras',
        
      });
      


       
       
        //console.log("Modal")
    };

   

  return (
    <WrapperDetail>
    <WrapperImages>
        <BigImage src={product?.images[indexImg]} />
        <MiniatureImages>
            <Image name={0} src={product?.images[0]} onClick={handleClick} />
            <Image name={1} src={product?.images[1]} onClick={handleClick} />
            <Image name={2} src={product?.images[2]} onClick={handleClick}/>
            <Image name={3} src={product?.images[3]} onClick={handleClick}/>
            
        </MiniatureImages>
    </WrapperImages>
    <WrapperInfo>
        <p>{product?.categories[0]}</p>
        <h2>{product?.name.toUpperCase()}</h2>
        <h3>$ {product?convertToCurrency(product.price):""}</h3>
        <p>{product?.description}</p>
        <QuantityGroup>
        <SelectQty stock={product?.stock} quantity={quantity} setQuantity={setQuantity}/>
        <Button primary onClick={handleModal}><AiOutlineShoppingCart size="1.5rem"/>AÑADIR AL CARRITO</Button>
        <Button  width="8rem" onClick={()=>navigate('/tienda')}>VOLVER</Button>
        
        </QuantityGroup>
        
        
     
    </WrapperInfo> 
    {activeModal&&<ShoppingCart 
                    productList={shoppingList}
                    activeModal={activeModal}
                    setActiveModal={setActiveModal}
                    quantity={quantity} 
                    setQuantity={setQuantity} />  
    }
    </WrapperDetail>
  )
}

//

const WrapperDetail = styled.div`
display:flex;
flex-direction:row;
padding: 20px;

@media (max-width: 768px){
  flex-direction: column;
}

`;

const WrapperImages = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
`;

const BigImage = styled.img`
width:25rem;
height:25rem;
border-radius: 15px;
cursor:none;

`;

const MiniatureImages = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:row;
justify-content: center;
gap:5px;

`;


const WrapperInfo = styled.div`
display:flex;
flex-direction:column;
padding: 20px;
gap:20px;
h2{
  color:var(--secondary-color);
  font-weight: bold;
}
p{
  text-align: justify;
}
`;

const QuantityGroup = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
align-items: center;
justify-content:left;
gap:1rem;

/*
@media (max-width:1030px){
  flex-direction:column;
}
*/
`;

const Image = styled.img`
width: 80px;
height:80px;
border: 1px solid lightgrey;
border-radius:5px;
&:hover{
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
};
&:active{
    border: 2px solid black;
};

`;

