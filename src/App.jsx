import './App.css'
import PokemonCard from './components/PokemonCard'
import ButtonSwitchCard from './components/ButtonSwitchCard'
import { useState }  from 'react'

function App() {
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

  let [pokemonIndex, setPokemonIndex] = useState(0)

  const handleClickPrécedent = () =>{
    setPokemonIndex(pokemonIndex - 1)
  }

  const handleClickSuivant = () =>{
    setPokemonIndex(pokemonIndex + 1)    
  }


  return (
    <main>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <div className='container-btn-switch'>
        { pokemonIndex > 0 ? <ButtonSwitchCard textBtn="Précédent" change={handleClickPrécedent} pokemon={pokemonList[pokemonIndex]} />  : "" } 
        { pokemonIndex < pokemonList.length - 1 ? <ButtonSwitchCard textBtn="Suivant" change={handleClickSuivant} pokemon={pokemonList[pokemonIndex]} />  : "" }
      </div>
    </main>
  )

}

export default App
