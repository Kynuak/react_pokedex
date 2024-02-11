function PokemonCard(props) {
    const { pokemon } = props
    console.log(pokemon)
    return (
    <figure className="cardPokemon">
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

export default PokemonCard;