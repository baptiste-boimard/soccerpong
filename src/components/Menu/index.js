import PropTypes from "prop-types";

//import Style
import "./style.css"

function Menu({changeMode, resetMode}) {

    //Fonction de choix du mode grand but
    const bigMode = () => {
        changeMode("bigMode");
        resetMode(true)
    }

    //Fonction de choix du mode petit but
    const littleMode = () => {
        changeMode ("littleMode");
        resetMode(true)
    }

    return(
        <div className="menu">
            <div className="button" onClick={bigMode}>Grand But</div>
            <div className="button" onClick={littleMode}>Petit But</div>
        </div>
    );
}

Menu.propTypes = {
    changeMode: PropTypes.func.isRequired,
    resetMode: PropTypes.func.isRequired
}

export default Menu;