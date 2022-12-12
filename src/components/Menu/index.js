//import Style
import "./style.css"

function Menu({changeMode, resetMode}) {

    //Fonction de choix du mode grand but
    const bigMode = () => {
        changeMode("bigMode");
        resetMode(true)
        console.log("BIG","RESET");
    }

    //Fonction de choix du mode petit but
    const littleMode = () => {
        changeMode ("littleMode");
        resetMode(true)
        console.log("LITTLE","RESET");
    }

    return(
        <div className="menu">
            <div className="button" onClick={bigMode}>Grand But</div>
            <div className="button" onClick={littleMode}>Petit But</div>
        </div>
    );
}

export default Menu;