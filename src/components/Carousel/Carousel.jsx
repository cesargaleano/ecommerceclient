import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { IMAGES } from '../../helpers/CarruselData';
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";




export const Carousel = () => {

  const [index, setIndex] = useState(0);
  
  const handlePrev = ()=>{
    console.log("Prev");
    setIndex(prev=>prev+1);
  };

  const handleNext = ()=>{
    console.log("Next");
    setIndex(prev=>prev-1);
  };

  
    
    return (
    <CarouselWrapper>
    
        <SlideShow style={{transform:`translateX(${-index*100}%)`}}>
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