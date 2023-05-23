import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

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


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className='CharacterName'>
        {StarWarsData.map(character => (
        <Character 
        key={character.name} 
        name={character.name}
        birth_year={character.birth_year}
        height={character.height}
        hair_color={character.hair_color}
        gender={character.gender}
        skin_color={character.skin_color}
        />
        ))}
       </div>
    </div>
  );
}

export default App;
