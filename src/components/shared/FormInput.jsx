import React from 'react';
import styled from 'styled-components';

function FormInput({title="Title", textArea=false, placeholder="Digit someone", value="", name="", onChange, onBlur}) {
  return (
    <Wrapper>
        <Label>{title}</Label>
        {
        textArea?<TextArea placeholder={placeholder} />
        :<Input placeholder={placeholder} value={value} name={name} onChange={onChange} onBlur={onBlur}/>
       
        }
    </Wrapper>
  )
}

export default FormInput;

const Wrapper = styled.div`
display: flex;
flex-direction:column;
justify-content:'center';
align-items: left;
border-radius: 5px;
height:9vh;

`;

const Input = styled.input`
border:none;
font-family: 'Montserrat';
width:25vw;
padding:10px;
border-radius: 5px;
border: 1px solid lightgrey;
margin:0;
&:focus {
    border-color: pink;
    transition: border-color 0.3s ease-in-out;
    outline: none
  }
`;

const TextArea = styled.textarea`
border:none;
font-family: 'Montserrat';
width:25vw;
padding:10px;
border-radius: 5px;
border: 1px solid lightgrey;
margin:0;
&:focus {
    border-color: pink;
    transition: border-color 0.3s ease-in-out;
    outline: none
  }
`;

const Label = styled.label`
margin:0;
padding:0;
font-weight:bold;
`;
