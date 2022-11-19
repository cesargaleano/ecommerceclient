import React from 'react';
import styled from 'styled-components';
import brand from '../assets/marcapersonal.jpg';

export const QuienSoy = () => {
  return (
    <OurWrapper>
      <TextWrapper>
        <h1>¡La cara detrás de Aula Silhouette!</h1>
        <br /> <br />

        <p>
        Madre, soñadora, emprendedora esa soy yo, Leidy Garibello, creadora de este espacio lleno de arte en el que comparto todo mi aprendizaje a lo largo de 10 años de experiencia con el scrapbooking y el plotter de corte Silhouette Cameo.
        </p>
        <br />
        <p>
        Si estás leyendo esto, llegaste al lugar indicado para iniciar en el mundo de la papelería creativa a tu propio ritmo, aquí encontrarás clases, tips, materiales o producto terminado para brillar en tus celebraciones. Y si estás lista para llegar aún más alto pongo a tu disposición mis clases personalizadas.
        </p>
        <br />
        <p>
        Bienvenid@s, con cariño Leidy.
        </p>
      </TextWrapper>
      <div>
      <Img src={brand} />
      </div>
      </OurWrapper>
  )
}


const OurWrapper= styled.div`
display: flex;
width:100%;
flex-direction:row;
justify-content:space-around;
align-items:center;
padding:10px;
flex-wrap:wrap;





`; 

const TextWrapper= styled.div`
display: flex;
flex-direction:column;
width:40rem;
//justify-content:center;
//align-items:center;

padding:30px;
h1{
  font-family: "Montserrat";
  font-weight:200;
}
p{
  font-family: "Open Sans";
  font-weight:300;
  text-align: justify;
 
}
`; 

const Img= styled.img`
width:30rem;
height:30rem;
border-radius:50%;



@media (max-width:768px){
  width:350px;
  height:350px;
border-radius:50%;
}

`; 