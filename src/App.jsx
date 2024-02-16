import './App.css'
import PokemonCard from './components/PokemonCard'
import Navbar from './components/Navbar';
import { useState }  from 'react';
import { useEffect } from 'react';

export default function App() {
  const pokemonList = [
    {
        name: "Bulbizarre",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        type: "Plante",
      },
      {
        name: "Salamèche",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        type: "Feu",
      },
      {
        name: "Carapuce",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        type: "Eau",
      },
      {
        name: "Pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        type: "Electrik",
      },
      {
        name: "Mew",
      },
    ];

    const [pokemonIndex, setPokemonIndex] = useState(0);

    useEffect(
      () => {
        alert("Hello pokemon trainer :)")
      },
      []
    )



  return (
    <main>
      <PokemonCard pokemon={pokemonList[pokemonIndex] }/>
      <Navbar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex}/>
    </main>
  )

}