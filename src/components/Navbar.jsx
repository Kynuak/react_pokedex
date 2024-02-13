import ButtonSwitchCard from './ButtonSwitchCard'
import propTypes from "prop-types"


function Navbar({tableIndex, pokemon, handlePrécedent, handleSuivant}) {
    
    return (

        <div className='container-btn-switch'>
        { tableIndex > 0 ? <ButtonSwitchCard textBtn="Précédent" change={handlePrécedent} pokemon={pokemon[tableIndex]} />  : "" } 
        { tableIndex < pokemon.length - 1 ? <ButtonSwitchCard textBtn="Suivant" change={handleSuivant} pokemon={pokemon[tableIndex]} />  : "" }
        </div>

    )
}


Navbar.propTypes = {
    tableIndex: propTypes.number.isRequired,
    pokemon: propTypes.array.isRequired,
    handlePrécedent: propTypes.func.isRequired,
    handleSuivant: propTypes.func.isRequired
}



export default Navbar