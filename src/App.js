import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  align-items: center;
  justify-content: space-around;
  width: 60%;
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [StarWarsData, setData] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() =>{
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  console.log(StarWarsData);

  const characterComponents  = StarWarsData.map(character => (
    <Character
      name={character.name}
      height={character.height}
      mass={character.mass}
      hairColor={character.hair_color}
      skinColor={character.skin_color}
    />
  ));
  
  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characterComponents}
    </div>
  );
}

export default App;
