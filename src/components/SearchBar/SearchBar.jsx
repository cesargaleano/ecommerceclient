import React from 'react'
import styled from 'styled-components';
import { AiOutlineSearch } from "react-icons/ai";

export const SearchBar = () => {
  return (
    <SearchBarWrapper>
    <Input />
    <AiOutlineSearch size="2rem"/>
    </SearchBarWrapper>
  )
}

const SearchBarWrapper = styled.div`
border:1px solid lightgrey;
display:flex;
align-items:center;
padding:2px;
margin-right:5px;
border-radius:8px;
`;

const Input = styled.input`
border: none;
height:2rem;
width:8rem;


`;
