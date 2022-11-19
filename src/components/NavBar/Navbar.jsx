import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import logo from '../../assets/logo.png'
import { SearchBar } from '../SearchBar.jsx';
import { LoginIcon } from './LoginIcon';
//import { ShoppingCar } from './ShoppingCar.jsx';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { LoginRegister } from '../../pages/LoginRegister';
import { clearSuccess, clearUserInfo } from '../../redux/features/auth/authSlice';

const menu = ["inicio", "quiensoy", "tienda", "contactenos", "blog", "team",  ];

export const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [navState, setNavState] = useState(false);
  const [activeLogin, setActiveLogin] = useState(false);
  const [activeShoppingCart, setActiveShoppingCart] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector(state=>state.auth.success);
  const {id, photoUrl, isAdmin} = useSelector(state=>state.auth.authInfo);
  
  const handleClick = (e)=>{
    console.log(e.target.value);
    
    setSelectedMenu(e.target.value);
    navigate(`/${menu[e.target.value]}`);

  };

  const handleLogout = ()=>{
    dispatch(clearSuccess());
    dispatch(clearUserInfo());
  };

  return (
    <Nav>
      <Brand>
        <div className="logo">
          <img src={logo} alt="logo" ></img>
        </div>

      </Brand>

      <div className={`links ${navState? "show" : "hide"}`}>
      
      <ul>
        <li value={0} className={selectedMenu===0? "selected" : "noSelected"} onClick={handleClick}>INICIO</li>
        <li value={1} className={selectedMenu===1? "selected" : "noSelected"} onClick={handleClick}>QUIEN SOY</li>
        <li value={2} className={selectedMenu===2? "selected" : "noSelected"} onClick={handleClick}>TIENDA</li>
        <li value={3} className={selectedMenu===3? "selected" : "noSelected"} onClick={handleClick}>CONTACTENOS</li>
        <li value={4} className={selectedMenu===4? "selected" : "noSelected"} onClick={handleClick}>BLOG</li>
        
      </ul>

      </div>

      <div className="sign-cart">
      { isLogin?(<UserImg src={photoUrl} onClick={handleLogout} />) 
               :(<CgProfile size="2em" style={{cursor:"pointer", fontWeight:"0.001"}} onClick={()=>setActiveLogin(true)}/>)
       
      }
      <AiOutlineShoppingCart size="2.5rem" style={{cursor:"pointer"}}/>  
        
      </div> 
      {activeLogin&&<LoginRegister setActiveLogin={setActiveLogin}/> }
    </Nav>
    
  )
}



  
  const Brand = styled.div`
  width:10%;
  display:flex;
  justify-content:center;

  .logo{
    img{
      width: 6.5rem;
      height: 5rem;

    }
  }
`

const Nav = styled.nav`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  padding:0.5rem;
  
 
  .links{
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
    width:77%;
    @media (max-width: 768px) {
   
    display:none;
    
    
  }
    ul{
      display:flex;
      list-style-type: none;
      gap:0.3rem;
      li{
      cursor:pointer;
      padding:0.5rem 1rem;
      border-radius:5px;
      transition: 0.3s ease-in-out;

      
      
      
       &:hover{
        background-color: var(--tertiary-color);
        color:white;
         }
            
      
      }
      .selected{
        background-color: var(--tertiary-color); 
        color:white;
        
      }
      .noSelected{
        background-color: white; 
                  color:black;
        
       
      }
      
    }
  }


  .sign-cart{
  display:flex;
  flex-direction:row;
   align-items:center;
   justify-content:space-around;

  
   width:13%;
   
  }

  

`;

const UserImg = styled.img`
width: 40px;
height:40px;
border-radius:50px;
cursor:pointer;
`; 



  
