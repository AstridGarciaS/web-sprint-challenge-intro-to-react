import styled from "styled-components";
import React, { useState } from "react";

const CharacterContainer = styled.div`
background-color: #292c0b46;
align-items center;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: 25px;
color: #ffffff;
height: 100px;
display: flex;
justify-content: center;
position: relative;

.name {
    margin-bottom: 10px;
  }

  .cardSection {
    position: absolute; 
    top: 100%; 
    left: 0; 
    display: flex; 
  }

  .character:hover .cardSection {
    display: flex; 
  }

  .card {
    text-align:center;
  }

  .card p {
    margin: 5px;
  }

  p{
    font-size: 15px;
    display: flex;
    justify-content: left;

  }
`;


const Character = (props) => {
  const { name, birth_year, height, gender, hair_color, skin_color } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  
  return (
    <CharacterContainer className="character"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <div className="name">
        {name} 
      </div>
      {isHovered && (
        <div className="extraInfo">
          <p>Year: {birth_year}</p>
          <p>height: {height}</p>
          <p>Gender: {gender}</p>
          <p>Hair Color: {hair_color}</p>
          <p>Skin Color: {skin_color}</p>
        </div>
      )}
    </CharacterContainer>
  );
};

export default Character;
