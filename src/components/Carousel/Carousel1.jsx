import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import { IMAGES } from '../../helpers/CarruselData';
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";




export const Carousel1 = () => {
  let slideshow = useRef(null);
  const winWidth = window.innerWidth;
  

  const [index, setIndex] = useState(0);
  const [direction, setDirection]= useState("");
  
  const handleClick = (e)=>{
    console.log(e);
    if(e>0) setDirection("next");
    else setDirection("prev");
    
    setIndex(prev=>prev+e);
   

  };

  
  
const handleTransitionEnd = ()=>{
  console.log('Termino la transicion')
  
  
  if(direction==="prev"){
  console.log('Tomando Direccion Prev');
  console.log('Index: '+index )
  console.log(IMAGES);
  
    
  if(index<0) {
  slideshow.current.style.transition ="none";
  setIndex(IMAGES.length-1);
  slideshow.current.style.transition ="750ms ease-in-out all";
  
  }
  //slideshow.current.style.transition ="none";
  //const imgShowed = IMAGES.shift();
  //IMAGES.push(imgShowed);
  //slideshow.current.style.transition ="750ms ease-in-out all";
  //setIndex(0);
  
  }
  else if(direction==="next"){
    console.log('Tomando Direccion Next')
    console.log('Index: '+index )
    
    console.log(IMAGES);
  

    if(index<=IMAGES.length-1) {
      slideshow.current.style.transition ="none";
      const imgShowed = IMAGES.shift();
      IMAGES.push(imgShowed)
      setIndex(0);
    slideshow.current.style.transition ="750ms ease-in-out all";
    }
    
    //const imgShowed = IMAGES.pop();
    //IMAGES.unshift(imgShowed);
    //slideshow.current.style.transition ="750ms ease-in-out all";
    //setIndex(0);
  }
  
  console.log(IMAGES);

};
    
    return (
    <CarouselWrapper>
    
        {//<SlideShow ref={slideshow} onTransitionEnd={handleTransitionEnd} style={{transform:`translateX(${-index*100}%)`}}>
        }
        <SlideShow ref={slideshow} style={{transform:`translateX(${-index*100}%)`}}>
            <Slide>
                <Img src={IMAGES[0].img}/>
            </Slide>
            <Slide >
            <Img src={IMAGES[1].img}/>
            </Slide> 
            <Slide >
            <Img src={IMAGES[2].img}/>
            </Slide>
           
           
        </SlideShow>
    <Control direction ="left" onClick={()=>handleClick(-1)}>
        <IoIosArrowBack size="5rem" color="white" />
    </Control>
    <Control direction="right" onClick={()=>handleClick(+1)}>
        <IoIosArrowForward size={winWidth>768?"5rem": "2rem"} color="white" />
    </Control>
</CarouselWrapper>
	);
}





const Slide = styled.div`
width:100%;
height:100%;
text-align:center;
flex-shrink:0;

`;

const SlideShow = styled.div`
display:flex;
width:100%;
height:80vh;
transition: 750ms ease-in-out all;

@media (max-width:768px){
  height:40vh;
}

`;

const CarouselWrapper = styled.div`
overflow-x:hidden;
position: relative;

`;

const Img =styled.img`
width:100%;
height:100%;
object-fit:cover;
object-position:center;


`;


const  Control =styled.div`
display: flex;
justify-content:center;
align-items:center;
width: 10rem;
height: 10rem;
background-color: transparent;
position:absolute;
bottom:0;
top:0;
margin:auto;
border-radius:50%;
left: ${props => props.direction === "left" && "10px" };
right: ${props => props.direction === "right" && "10px" };

&:hover{
  background-color: rgba(0,0,0,0.5);
}

@media (max-width:768px){
  width: 5rem;
height: 5rem;
}

`;