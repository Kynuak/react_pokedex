import propTypes from "prop-types"

function PokemonCard( props ) {
    const { pokemon } = props

    return (
    <figure className={
        `cardPokemon
        ${ pokemon.type == 'Plante' ? 'color-back-plante' :
        pokemon.type == 'Feu' ? 'color-back-feu' :
        pokemon.type == 'Eau' ? 'color-back-eau' :
        pokemon.type == 'Electrik' ? 'color-back-electrik' :
        'color-back-inconnu'
        }`}>
        <div className="container-imgPokemon">
        {pokemon.imgSrc === undefined ? 
            <p> ??? </p> 
            : 
            <img 
            src={ pokemon.imgSrc }
            alt={pokemon.name }
            className="img-pokemon"
            /> 
        }
        </div>
        <figcaption className="name-pokemon">{ pokemon.name }</figcaption>
    </figure>
    
)}

PokemonCard.propTypes = {
    pokemon: propTypes.shape({
        name: propTypes.string.isRequired,
        imgSrc: propTypes.string,
    }).isRequired,
}

export default PokemonCard;