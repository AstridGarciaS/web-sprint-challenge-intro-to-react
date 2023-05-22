// Write your Character component here
import styled from "styled-components";
import React from "react";


const CharacterContainer = styled.div`
background-color: white;
padding: 10px;
margin-bottom: 10px;
`;

const CharacterName = styled.h2`
  color: white;
`;


const Character = (props) => {
    const {name, height, mass, hairColor, skinColor } = props

return (
    <div className='character'>
         <h2>{props.name}</h2>
         <div className="subInformation">
          <p>{props.height}</p>
          <p>{props.mass}</p>
          <p>{props.hairColor}</p>
          <p>{props.skinColor}</p>   
          </div>
    </div>
);
}


export default Character;