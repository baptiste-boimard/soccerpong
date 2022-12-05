//import Style
import "./style.css"

function Menu() {

    const bigMode = () => {
        console.log("big");
    }

    const littleMode = () => {
        console.log("little");
    }

    return(
        <div className="menu">
            <button className="button" onClick={bigMode}>Grand But</button>
            <button className="button" onClick={littleMode}>Petit But</button>
        </div>
    );
}

export default Menu;