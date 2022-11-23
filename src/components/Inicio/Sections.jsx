import React from 'react';
import styled from 'styled-components';
import {SERVICES} from '../../helpers/servicesData';

export const Sections = () => {
    console.log(JSON.stringify(SERVICES));
  return (
    <SectionsWrapper>
        <Section>   
            <h1>NUESTROS SERVICIOS</h1>
            <ServicesWrapper>
            {
                SERVICES.map((el,index)=>(
                    <Service key={index}>
                <img src={el.img} alt=""/>
                <h4>{el.title.toUpperCase()}</h4>
                </Service>
                ))
            }
             </ServicesWrapper>
            

        </Section>
        <Section>   
            <h1>PRODUCTOS DESTACADOS</h1>
            <div>

            </div>

        </Section>

    </SectionsWrapper>
  )
}

const SectionsWrapper = styled.div`


`;

const ServicesWrapper = styled.div`
width:100%;
display: flex;
flex-direction:row;
justify-content:space-between;
flex-wrap:wrap;
`;


const Section = styled.section`
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
padding: 2rem;
gap: 1rem;
`;

const Service = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
cursor: pointer;


img{
    width: 10rem;
    height:10rem;
}
`;