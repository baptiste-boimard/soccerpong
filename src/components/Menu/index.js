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
        console.log("BIG","RESET");
    }

    return(
        <div className="menu">
            <button className="button" onClick={bigMode}>Grand But</button>
            <button className="button" onClick={littleMode}>Petit But</button>
        </div>
    );
}

export default Menu;