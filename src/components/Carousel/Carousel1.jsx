import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import { IMAGES } from '../../helpers/CarruselData';
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";




export const Carousel1 = () => {
  let slideshow = useRef(null);
  

  const [index, setIndex] = useState(0);
  const [direction, setDirection]= useState("");
  
  const handlePrev = ()=>{
    setDirection("prev");
    setIndex(prev=>prev-1);
    

  };

  const handleNext = ()=>{
    setDirection("next");
    setIndex(prev=>prev+1);
    
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
            <Slide >
            <Img src={IMAGES[3].img}/>
            </Slide>
            <Slide >
            <Img src={IMAGES[4].img}/>
            </Slide>
        
        </SlideShow>
    <LeftControl>
        <span onClick={handlePrev} ><IoIosArrowBack size="5rem" color="white" /></span>
    </LeftControl>
    <RightControl>
        <span onClick={handleNext} ><IoIosArrowForward size="5rem" color="white" /></span>
    </RightControl>
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
height:500px;
transition: 750ms ease-in-out all;


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

const RightControl =styled.div`
display: flex;
justify-content:center;
align-items:center;
background-color: transparent;
height:100%;
position:absolute;
bottom:0;
right:0;

span{
  cursor: pointer;
}

&:hover{
  background-color: rgba(0,0,0,0.5);
}

`;

const LeftControl =styled.div`
display: flex;
justify-content:center;
align-items:center;
background-color: transparent;
height:100%;
position:absolute;
bottom:0;
left:0;

span{
  cursor: pointer;
}

&:hover{
  background-color: rgba(0,0,0,0.5);
}

`;