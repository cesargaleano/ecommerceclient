import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import logo from '../../assets/logo.png'
import { SearchBar } from '../SearchBar/SearchBar';
//import { ShoppingCar } from './ShoppingCar.jsx';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { LoginRegister } from '../../pages/LoginRegister';
import { clearSuccess, clearUserInfo } from '../../redux/features/auth/authSlice';
import { Toggle } from '../Toggle/Toggle';
import { Dropdown } from './Dropdown';
import { GiHamburgerMenu } from "react-icons/gi";
const menu = ["inicio", "quiensoy", "tienda", "contactenos", "blog", "team",  ];

export const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [navState, setNavState] = useState(false);
  const [activeLogin, setActiveLogin] = useState(false);
  const [activeShoppingCart, setActiveShoppingCart] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [menuClick, setMenuClick] = useState(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector(state=>state.auth.success);
  const {id, photoUrl, isAdmin} = useSelector(state=>state.auth.authInfo);
  
  const handleClickHamb = ()=>{
    setMenuClick(!menuClick);
  };


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
      <Left>
       
        <div className="logo">
          <img src={logo} alt="logo" ></img>
        </div>
       

      </Left>

      <Center className={` ${navState? "show" : "hide"}`}>
      
      <MenuList >
        <li value={0} className={selectedMenu===0? "selected" : "noSelected"} onClick={handleClick}>INICIO</li>
        <li value={1} className={selectedMenu===1? "selected" : "noSelected"} onClick={handleClick}>QUIEN SOY</li>
        <li value={2} className={selectedMenu===2? "selected" : "noSelected"} onClick={handleClick}>TIENDA</li>
        <li value={3} className={selectedMenu===3? "selected" : "noSelected"} onClick={handleClick}>CONTACTENOS</li>
        <li value={4} className={selectedMenu===4? "selected" : "noSelected"} onClick={handleClick}>BLOG</li>
        
      </MenuList>

      </Center>

      <Right className="sign-cart">
       <>  
       <SearchBar />
      { isLogin?(<UserImg src={photoUrl} onClick={handleLogout} />) 
               :(<CgProfile size="2rem" style={{cursor:"pointer", fontWeight:"0.001"}} onClick={()=>setActiveLogin(true)}/>)
       
      }
      <AiOutlineShoppingCart size="2rem" style={{cursor:"pointer"}}/>  
      
      
      </>
      
  
      </Right>
      <DropdownWrapper activeDropdown={activeDropdown}>
      <Dropdown />
      </DropdownWrapper> 

      {activeLogin&&<LoginRegister setActiveLogin={setActiveLogin}/> }

      
    </Nav>
    
  )
}



  
  const Left = styled.div`
  flex:0.5;
  display:flex;
  justify-content:center;
  align-items: center;

  @media (max-width: 900px) {
    flex:0;
  }

  .logo{
    img{
      width: 6.5rem;
      height: 5rem;

    }
  }
`
const Center= styled.div`
display:flex;
justify-content:center;
align-items:center;
  flex:5;
 

  @media (max-width: 900px) {
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
  `;

const Right= styled.div`
  flex:2;
  display:flex;
  flex-direction:row;
  align-items:center;
   justify-content:space-around;

   @media (max-width: 900px) {
    display:none;
  }

  `;


const Nav = styled.nav`
  display:flex;
  flex-direction:row;
  justify-content: space-around;
  padding:0.5rem;
  height:6rem;
  //position: fixed;

  @media (max-width: 900px) {
    justify-content: space-between;
  }
  
`;

const UserImg = styled.img`
width: 30px;
height:30px;
border-radius:50px;
cursor:pointer;
`; 


const WrapperHamb = styled.div`

`;
  
const Button= styled.button`
cursor: pointer;
padding: 0.5rem;
`;

const MenuList= styled.ul`

@media (max-width: 900px) {
    display:flex;
    flex-direction:column;
  }
  

`;


const DropdownWrapper = styled.div`

align-items:center;
justify-content:center;

@media (min-width:900px){
  display:none;
}

`; 