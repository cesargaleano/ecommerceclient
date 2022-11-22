import React, {useState} from 'react';
import styled from 'styled-components';
import { MdLightMode, MdNightlight } from "react-icons/md";

export const Toggle = () => {

    const [toggle, setToggle]=useState(false);

    const handleClick = ()=>{
        setToggle(!toggle);
    }


  return (
    <ToggleWrapper>
     <MdLightMode size="2rem" color="yellow"/>
     <MdNightlight size="2rem" color="black"/>
     <Selector onClick={handleClick} style={{transform:`translateX(${-toggle*100}%)`}}/>
        
    </ToggleWrapper>
  )
}


const ToggleWrapper = styled.div`
width: 4rem;
height: 2rem;
border-radius: 50px;
position: fixed;
top:30px;
right: 180px;
border: 1px solid lightgrey;
display:flex;
flex-direction: row;
justify-content: space-between;


`;

const Selector = styled.div`
width: 2rem;
height: 2rem;
border-radius: 20px;
background-color: var(--tertiary-color);
position: absolute;
right: 0;
cursor: pointer;
`;