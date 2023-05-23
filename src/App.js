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
      {StarWarsData.map(character => {
        return <Character name={character.name} />
      })}
    </div>
  );
}

export default App;
