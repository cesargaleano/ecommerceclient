import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  gap: 5px;
  background-color: ${(props) =>
    props.primary ? "var(--tertiary-color)" : "var(--secondary-color)"};
  color: ${(props) => (props.primary ? "white" : "black")};
  font-size: 1rem;
  margin: 0.5rem 0.5rem;
  border: none;
  border-radius: 50px;
  text-align: center;
  width: ${(props) => (props.width ? props.width : "18vw")};
  height: 8vh;
  background: linear-gradient(to right, var(--tertiary-color) 50%, var(--secondary-color) 50%) no-repeat left / 200%;
transition: background-position .5s ease;
  cursor: pointer;
  &:hover {
    background-position: right;
    color:black
    //transition: all 0.3 ease-in-out;
  }
`;

    //background: ${(props) =>
    //  props.primary ? "var(--secondary-color)" : "var(--tertiary-color)"};
    //color: ${props=>props.primary? "black" : "white"};