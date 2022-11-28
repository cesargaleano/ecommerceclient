import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import '../styles/pages/inicio.css';

import {IMAGES} from '../helpers/CarruselData';
import { getAllProducts } from '../redux/features/product/productActions.js';
import { Carousel } from '../components/Carousel/Carousel';
import { Sections } from '../components/Inicio/Sections';


export const Inicio = () => {
 const dispatch = useDispatch();
 const [activeLogin, setActiveLogin] = useState(false);
  useEffect(()=>{
    dispatch(getAllProducts());
    
  },[]);
  
  return (
    
     <>           
 {<Carousel />
 }
 <Sections />
 </>
          
    

  )
}
