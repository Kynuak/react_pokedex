
import propTypes from "prop-types"


function Navbar({ pokemonList, setPokemonIndex }) {
    
    const handleClick = (index) => {
        setPokemonIndex(index)
    }



    return (
        <ul className='container-btn-switch'>
            {pokemonList.map((pokemon, index) => (
                <li key={pokemon.name} >
                    <button className="btn-switch" onClick={() => handleClick(index)}>{pokemon.name}</button>
                </li>
            ))}
        </ul>
    )
}

Navbar.propTypes = {
    pokemonList: propTypes.array.isRequired,
    setPokemonIndex: propTypes.func.isRequired
}



export default Navbar