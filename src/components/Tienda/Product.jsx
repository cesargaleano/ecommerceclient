import React from 'react';
import styled from 'styled-components';
import like from "../../assets/components/Product/like.png";
import dislike from "../../assets/components/Product/dislike.png";
import { useNavigate } from 'react-router-dom';
import { Button } from '../shared/Button';
import { convertToCurrency } from '../../helpers/formatCurrency';





export const Product = ({product}) => {
const navigate = useNavigate();
const {_id, name, price, images, categories, stock } = product;
console.log(product);
const handleClick = (e)=>{
console.log(_id);
navigate(`/tienda/${_id}`);
};

return (
    <Wrapper onClick={handleClick}>
        
        <ProductImage src={images[0]} alt="product-img"/>  
        <ProductLabel >{name}</ProductLabel>
        <label>${convertToCurrency(price)}</label>
        <Button primary width="14vw">VER DETALLE</Button>
        
        </Wrapper>
  )
}



const ProductImage = styled.img`
height:180px;
width:100%;
object-fit: cover;
object-position: center;
border-radius: 8px;


`



const ProductLabel = styled.div`
font-size: 16px;
font-weight: bold;
margin-bottom: 10px;
`;

const Wrapper = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  height:300px;
  width:200px;
  border:1px solid lightgray;
  border-radius: 8px;
  cursor:pointer;

  &:hover {
    transform: translateY(-2%);
    transition: 0.3s;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
  }

`

