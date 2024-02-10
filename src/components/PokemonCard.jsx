function PokemonCard() {

    const pokemonList = [
        {
            name: "Bulbizarre",
            imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" 
        },
        {
            name: "Mew",
        }
    ];

    const pokemon = pokemonList[0];



    return (
    <figure className="cardPokemon">
        {pokemon.imgSrc === undefined ? 
            <p> ??? </p> 
            : 
            <img 
            src={ pokemon.imgSrc }
            alt={ pokemon.name }
            className="img-pokemon"
            /> 
        }

        <figcaption className="name-pokemon">{ pokemon.name }</figcaption>
    </figure>
    
)}

export default PokemonCard;