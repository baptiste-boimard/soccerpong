//import Style
import "./style.css"

function Menu({changeMode}) {

    //Fonction de choix du mode grand but
    const bigMode = () => {
        changeMode("bigMode");
        console.log("BIG");
    }

    //Fonction de choix du mode petit but
    const littleMode = () => {
        changeMode ("littleMode");
        console.log("LITTLE"); 
    }

    return(
        <div className="menu">
            <button className="button" onClick={bigMode}>Grand But</button>
            <button className="button" onClick={littleMode}>Petit But</button>
        </div>
    );
}

export default Menu;