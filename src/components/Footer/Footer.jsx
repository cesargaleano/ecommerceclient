import React from 'react';
import styled from 'styled-components';
import logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    
    <FooterWrapper>
        <FooterBrand src={logo} />
        <FooterColumn>
        <h4>CONOCENOS</h4>
            <ul>
             <li><p>Quienes Somos</p></li> 
             <li><p>Contactanos</p></li>   
            </ul>
            
        </FooterColumn>
        <FooterColumn>
        <h4>TE APOYAMOS</h4>
            <ul>
             <li><p>Quienes Somos</p></li> 
             <li><p>Contactanos</p></li>   
            </ul>
            
        </FooterColumn>
        <FooterColumn>
        <h4>SERVICIO AL CLIENTE</h4>
            <ul>
             <li><p>Terminos y Condiciones</p></li> 
             <li><p>Politicas de tratamiento de Datos</p></li> 
             <li><p>Politica de Compras</p></li>  
            </ul>
        
        </FooterColumn>
        </FooterWrapper>
   
    
  )
}


const FooterWrapper = styled.footer`
display:flex;
flex-direction:row;
justify-content: space-around;
flex-wrap:wrap;
background-color: var(--secondary-color);
width:100%;
padding: 2rem;
margin-top:auto;

@media (max-width: 768px){
    flex-direction:column;
    justify-content: center;
    align-items: center;
    text-align: center;

    ul{
        text-align: center;
    }

}
 
`;

const FooterBrand = styled.img`
width: 10rem;
height: 8rem;



`;

const FooterColumn = styled.div`
display:flex;
flex-direction:column;
p{
    font-size:1rem;
    padding:2px;
    color:black;
    font-family: "Open Sans";
}
h4{
    color: black;
    font-weight: bold;
}

    li{
        list-style:none
    }


`;
