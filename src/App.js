import React from 'react';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/NavBar/Navbar.jsx';
import { ProductDetail } from './components/Tienda/ProductDetail';
import { ShoppingCart } from './components/Tienda/ShoppingCart';
import { ContactUs } from './pages/ContactUs';
import { Inicio } from './pages/Inicio';
import { QuienSoy } from './pages/QuienSoy';
import { Tienda } from './pages/Tienda';
import styled from 'styled-components';
import { LoginRegister } from './pages/LoginRegister';

const Layout = ()=>{
  return(
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

function App() {

  

  return (
    
    
    <BrowserRouter>
    <GralWrapper>
    
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route path="/inicio" element={<Inicio />} />
    <Route path="/quiensoy" element={<QuienSoy />} />
    <Route path="/tienda" element={<Tienda />} />
    <Route path="/tienda/:id" element={<ProductDetail />} />
    <Route path="/contactenos" element={<ContactUs />} />
    </Route> 
    
    
    </Routes>
    
    
  </GralWrapper>
  
    </BrowserRouter>
    
   
  );
}

export default App;

const GralWrapper = styled.div`
display:flex;
flex-direction:column;
min-height:100vh;
`;
