// Write your Character component here
import styled from "styled-components";
import React from "react";


const CharacterContainer = styled.div`
background-color: white;
padding: 1px;
margin-bottom: 10px;
color: white;
`;


const Character = (props) => {
    const {name} = props

    
return (
    <div className='character'>
         <h2>{props.name}</h2>
    </div>

);
}


export default Character;