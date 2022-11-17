import React from 'react';
import styled from 'styled-components'
import {VscLocation} from 'react-icons/vsc';
import { GoLocation } from "react-icons/go";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Map from '../components/Map';

export const ContactUs = () => {
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }

  return (
<>
    <ContactUsWrapper>
      <ContactInfo>
      <Title>
      <h2>Informacion de Contacto</h2>
      
      </Title>
      <hr color="lightgrey" size="1"/>
      <Info>
      <GoLocation size="2rem" color="var(--tertiary-color)"/>
        <InfoItem>
          
          <h4>Direccion</h4>
          <p>Calle 22 # 16-07 Arboleda Campestre </p>
        </InfoItem>
      </Info>
      <hr color="lightgrey" size="1"/>
      <GroupInfo>
      
      <Info >
        <BsWhatsapp size="2rem" color="var(--tertiary-color)"/>
        <InfoItem>
        
          <h4>WhatsApp Ventas</h4>
          <p>3052938911</p>
        </InfoItem>
      </Info>
      <Info>
      <BsWhatsapp size="2rem" color="var(--tertiary-color)"/>
        <InfoItem>
         
          <h4>WhatsApp Clases</h4>
          <p>3053773608</p>
        </InfoItem>
      </Info>

      </GroupInfo>
      <hr color="lightgrey" size="1"/>
      <Info>
      <AiOutlineMail size="2rem" color="var(--tertiary-color)"/>
        <InfoItem>
          
          <h4>Email</h4>
          <p>info@leidygaribello.com</p>
        </InfoItem>
      </Info>
      
      
      </ContactInfo>

      <LocationInfo>
      <Title>
      <h2>Informacion de Ubicacion</h2>
      
      </Title>
      <Map text="Pnto Prueba"/>
      
      </LocationInfo>

      
    
      
    </ContactUsWrapper>
    
</>)}



const ContactUsWrapper = styled.div`
display: flex;
flex-direction:row;
justify-content: space-around;

@media (max-width: 768px){
    flex-direction:column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
`;




const Location = styled.div`
display: flex;
flex-direction:row;
`;

const ContactInfo = styled.div`
display: flex;
flex-direction:column;
gap: 30px;
//justify-content: space-around;

`;

const LocationInfo = styled.div`
display: flex;
flex-direction:column;
//justify-content: space-around;

`;

const Title = styled.div`
display: flex;
flex-direction:column;
h2{
  font-weight: 200;
}

`;

const Info = styled.div`
display: flex;
flex-direction:row;
gap: 30px;

`;
const InfoItem = styled.div`
display: flex;
flex-direction:column;
gap:10px;
p{
  color:grey;
}

`;

const GroupInfo = styled.div`
display: flex;
flex-direction:row;
gap:20px;
`;


