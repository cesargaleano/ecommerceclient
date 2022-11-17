import React, { useState } from 'react';
import styled from 'styled-components';
import notImage from '../../assets/components/Files/notImage.png';
import FormInput from '../shared/FormInput';
import axios from 'axios';
import { Button } from '../shared/Button';


export const CreateProduct = () => {
  const formData = new FormData();
const [file, setFile] = useState(null);
const [images, setImages] = useState([]);

  const handleChangeImage = (e)=>{
    if(images.length<=2){
    setImages([...images, e.target.files[0]]);
    console.log(images);
    }
    else{
      alert("You don't attach more images!!")
    }
  };

  const handleChangeFile = (e)=>{
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
     };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    console.log(file);
    formData.append('file', file);
    formData.append('description', "Esta es una descripcion de prueba");
    formData.append('price', 1000);
    
    console.log(formData)
    

   const res= await axios.post('http://localhost:5000/api/store/file',formData);
    console.log(res);

  } ;  

  return (
    <form onSubmit={handleSubmit}>
    <Container>
    <h3>CREAR PRODUCTO</h3>
    
    <FormInput title="Nombre" placeholder="Digite Nombre del producto"/>
    <FormInput title="Descripcion" placeholder="Digite Descripcion del producto" textArea={true}/>
    <FormInput title="Precio" placeholder="Digite Precio del producto" />
    <FormInput title="Unidad" placeholder="Digite Unidad del producto" />
    <FormInput title="Stock" placeholder="Digite Stock del producto" />
    
    
    <ImagesWrapper>
    <Image src={images[0]?URL.createObjectURL(images[0]):notImage} alt="image1"></Image>
    <Image src={images[1]?URL.createObjectURL(images[1]):notImage} alt="image1"></Image>
    <Image src={images[2]?URL.createObjectURL(images[2]):notImage} alt="image1"></Image>
    </ImagesWrapper>
   
    <AddButton>
      <span>AGREGAR IMAGEN</span>
    <Input type="file" name="file" onChange={handleChangeImage} />
    </AddButton>
    <AddButton>
      <span>AGREGAR ARCHIVO</span>
    <Input type="file" name="file" onChange={handleChangeFile} />
    </AddButton>
    
    <Button primary>CREAR PRODUCTO DIGITAL</Button>
    
    </Container>
    </form>
  )
}

const Container = styled.div`
display:flex;
flex-direction:column;
padding:5%;
gap:10px;
width:50vw;
align-items:center;
border-radius:5px;
margin-bottom:30px;
border: 1px solid lightgrey;

`;
const Label = styled.label`

`;
const ImagesWrapper = styled.div`
display:flex;
flex-direction:row;
gap:10px;

`;
const Image = styled.img`
border:1px solid lightgrey;
width:150px;
height:100px;
border-radius:5px;



`;
const Input = styled.input`
display:none;
`;

const AddButton = styled.label`
background-color: pink;
cursor: pointer;
font-size: 12px;
font-weight:bold;
text-align:center;
padding:5px;
border-radius:50px;
width:15vw;

&:hover{
  background-color: lightgreen;
  color:white
};


`;