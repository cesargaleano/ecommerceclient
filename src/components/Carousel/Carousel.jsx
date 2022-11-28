import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import { IMAGES } from '../../helpers/CarruselData';
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { MdOtherHouses } from 'react-icons/md';




export const Carousel = () => {
  let slideshow = useRef(null);
  const winWidth = window.innerWidth;
  
  const [Imgs, setImgs] = useState(JSON.parse(JSON.stringify(IMAGES)));
  

  const [index, setIndex] = useState(1);
  const [direction, setDirection]= useState("");
  
  const handleClickUp = (e)=>{
    slideshow.current.style.transition=" 750ms ease-in-out all";
   setDirection("next");
   setIndex(prev=>prev+1)
      
  
  }

  const handleClickDown = (e)=>{
    slideshow.current.style.transition=" 750ms ease-in-out all";
    setDirection("prev");
    setIndex(prev=>prev-1)
    
    console.log("Down");
  };

  
  const handleTransitionEnd = ()=>{
    console.log("Transition Finish")
    slideshow.current.style.transition="none";
   
    if(direction==="next"){
  const copyImgs = JSON.parse(JSON.stringify(Imgs));
  const tempImg =copyImgs.shift();
  copyImgs.push(tempImg);
  setImgs(copyImgs);
  setIndex(1);
    
    }
    else if(direction==="prev"){
      const copyImgs = JSON.parse(JSON.stringify(Imgs));
      const tempImg =copyImgs.pop();
      copyImgs.unshift(tempImg);
      setImgs(copyImgs);
      setIndex(1);
    }
    
   
  
  }


    
    return (
    <CarouselWrapper>
        
        <SlideShow ref={slideshow} onTransitionEnd={handleTransitionEnd} style={{transform:`translateX(${-index*100}%)`}}>
        
            <Slide>
                <Img src={Imgs[0].img} alt=""/>
            </Slide>
            <Slide>
                <Img src={Imgs[1].img} alt=""/>
            </Slide> 
            <Slide>
                <Img src={Imgs[2].img} alt=""/>
            </Slide>
            
            </SlideShow>
        
    <Control direction ="left" onClick={handleClickDown}>
        <IoIosArrowBack size={winWidth>768?"5rem": "2rem"} color="white" />
    </Control>
    <Control direction="right" onClick={handleClickUp}>
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
  height:35vh;
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