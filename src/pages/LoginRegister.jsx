import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import FormInput from '../components/shared/FormInput';
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from '../components/shared/Button';
import { postAuth } from '../redux/features/auth/authActions';
import { useEffect } from 'react';
import { clearError } from '../redux/features/auth/authSlice';
import Swal from 'sweetalert2';

const menu = ["INICIAR SESION", "REGISTRARSE"];


export const LoginRegister = ({setActiveLogin}) => {
    const dispatch = useDispatch();
    const {loading, success, error, authInfo} = useSelector(state=>state.auth);
    const [selectedMenu, setSelectedMenu] = useState(0);

  
    const formik = useFormik({
        initialValues :{
            username:"",
            password:""
        },
        validationSchema : Yup.object({
            username: Yup.string()
                   .min(5, "El Campo Usuario debe tener minimo 5 letras!!")
                   .required("Nombre de Usuario requerido!!"),
            
            password: Yup.string()
                   .min(3, "La Clave debe tener minimo 3 letras!!")
                   .required("Clave requerida!!")
          }),
        onSubmit: (values)=> {
            //alert(JSON.stringify(values, null, 2))
            const resp= dispatch(postAuth(values));
            console.log(resp);
        }
    });

    const handleClick = ()=>{
        console.log("click");
        setActiveLogin(false)
  
    };

    const handleSelectMenu = (e)=>{
        setSelectedMenu(e.target.value);
    };

useEffect(()=>{
    console.log(error);
    console.log(success);
    if(success) {
        setActiveLogin(false);
         Swal.fire({
            icon: 'success',
            title: 'Usuario Logueado Exitosamente',
            
          })
        
       
    }
    else if(error) { 
        
        Swal.fire({
        icon: 'error',
        title: 'Usuario o Contraseña Errados',
        
      });
      
    }
    
    return ()=>{
        console.log("limpiar error");
        dispatch(clearError());
    }
},[error,success])  ;  

  return (
    <LoginWrapper>
        <ModalWrapper>
            <CloseWrapper>
            <CloseIcon onClick={handleClick}>X</CloseIcon>
            </CloseWrapper>
            <HeaderModal>
            <ul>
        <li value={0} className={selectedMenu===0? "selected" : "noSelected"} onClick={handleSelectMenu}>INICIAR SESION</li>
        <li value={1} className={selectedMenu===1? "selected" : "noSelected"} onClick={handleSelectMenu}>REGISTRARSE</li>
        
      </ul>
            
            </HeaderModal>
           
            <LoginInfo>
                
            <form onSubmit={formik.handleSubmit}>
                <FormInput title="Usuario"
                           placeholder="Digite su Usuario"
                           name="username" 
                           value={formik.values.username} 
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur} />
                {formik.errors.username ? <Label>{formik.errors.username}</Label> : null}
                <br />
                <br />
                <FormInput title="Contraseña"
                           placeholder="Digite su Contraseña"
                           name="password"
                           value={formik.values.password}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur} />
               
               <Label>
                            { formik.errors.password ? formik.errors.password: null }
               </Label>     
                <br />
                <br />
                <Button type="submit" primary >INICIAR SESION</Button>
                </form>
                
                
                
              
            </LoginInfo>
           

            </ModalWrapper>
        
    
    </LoginWrapper>
  )
}



const LoginWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
width: 100vw;
height:100vh;
background-color: rgba(0,0,0,0.4);
position: fixed;
top:0;
left:0;
padding:40px;
z-index:1;

`;

const ModalWrapper = styled.div`
 position:relative;
 width: 30rem;
 min-height:100px;
 background-color: white;
 border-radius:5px;
box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
padding:1rem;

`;

const HeaderModal = styled.div`
ul{
display:flex;
flex-direction:row;
justify-content:center;
gap: 10px;
}
li{
    list-style:none;
    cursor: pointer;
    padding: 5px;
    border-radius:5px

}

.selected{
        background-color: var(--tertiary-color); 
        color:white;
        
      }
      .noSelected{
        background-color: white; 
                  color:black;
              
      }

`;

const CloseWrapper= styled.div`
display:flex;
justify-content:flex-end;
`;

const CloseIcon = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:2rem;
height:2rem;
border: 1px solid grey;
border-radius: 5px;
cursor: pointer;
&:hover {
    background-color:var(--tertiary-color);
    border: 1px solid var(--tertiary-color);
    color: white
}

`;

const ProductList = styled.div`
display:flex;
flex-direction:column;


`;

const LoginInfo = styled.div`
display:flex;
flex-direction: column;
align-items:center;
margin-top:10px;
justify-content:'center'
`;

const Img = styled.img`
width: 40px;
height:40px;
`;

const Remove = styled.button`
padding: 5px;

`;

const Label = styled.div`
margin:0;
padding:0;
font-size:1rem;
color: var(--tertiary-color);
display:flex;
width:100%;

`;

