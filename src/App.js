import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const randNumber = Math.floor(Math.random() * 151 + 1);
    fetch("https://pokeapi.co/api/v2/pokemon/" + randNumber)
    .then(res => res.json())
    .then(json => {
      setPokemon(json);
    });
  }, []);

  return (
    <main>
      {pokemon ? pokemon.name : ""}
      <br/>
      {pokemon ? pokemon.id : ""}
    </main>
  );
}

export default App;
