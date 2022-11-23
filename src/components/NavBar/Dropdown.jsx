import React, { useState } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { MENU_ITEMS } from './menuItems';


export const Dropdown = ({menu}) => {
    const [click, setClick] = useState(false);

    const handleClick = ()=>{
    setClick(!click)
        
    }

    return (
        
    <Wrapper>{
        click? <Button onClick={handleClick}>X</Button> :<GiHamburgerMenu size="2rem" onClick={handleClick}/> 
    }
    
        <UList click={click} >
            {
                MENU_ITEMS.map((item, index)=>(
                    <ListItem key={index}>
                    <Link  to={item.url} style={{textDecoration:"none", color:"white"}}>
                         
                         {item.title.toUpperCase()}
                    
                    </Link>
                    </ListItem>
                   ))
                

            }
            
        </UList>

        </Wrapper>    
   
  )
};

const UList = styled.ul`
display: ${props=>props.click? "block" : "none"};

width:200px;
position: absolute;
top:40px;
right:0px;
text-align:left;
padding:5px;
border-radius: 8px;
background-color: rgba(0,0,0,0.5);
z-index:1;

 



`;

const ListItem = styled.li`
    display: block;
    cursor:pointer;
    width: 100%;
    height:100%;
    padding: 5px 10px;
    transition:all 0.3s ease-in-out;
    
    
    
    &:hover{
        background-color: pink;
    }

`;

const Button = styled.button`
padding: 5px 10px;
`;

const Wrapper = styled.button`

margin:15px;

display: flex;
justify-content:center;
align-items:center;
border:none;
border-radius:5px;

`;