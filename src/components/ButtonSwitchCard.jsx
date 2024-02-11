import propTypes from "prop-types"

function ButtonSwitchCard(props) {

const {textBtn, change, pokemon } = props


return (


    <button 
    className={
        `btn-switch ${ 
        pokemon.type == 'Plante' ? 'color-back-plante' :
        pokemon.type == 'Feu' ? 'color-back-feu' :
        pokemon.type == 'Eau' ? 'color-back-eau' :
        pokemon.type == 'Electrik' ? 'color-back-electrik' :
        'color-back-inconnu'
        }`}
         onClick={change}
    > 
        {textBtn}
    </button>
)

}

ButtonSwitchCard.propTypes = {
    textBtn: propTypes.string.isRequired,
    change: propTypes.func.isRequired,
    pokemon: propTypes.shape({
        type: propTypes.string
    }).isRequired,
}

export default ButtonSwitchCard