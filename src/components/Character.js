// Write your Character component here
import React from "react";
import styled from "styled-components";


const CharacterContainer = styled.div`
background-color: white;
padding: 10px;
margin-bottom: 10px;
`;

const CharacterName = styled.h2`
  color: white;
`;

function Character(props) {
    const {name, height, mass, hairColor, skinColor } = props



return (
    <div className='character'>
         <h2>{name}</h2>
         <h3>{height}</h3>
         <h3>{mass}</h3>
         <h3>{hairColor}</h3>
         <h3>{skinColor}</h3>    
    </div>
);
}


export default Character;