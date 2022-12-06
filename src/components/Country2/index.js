import PropTypes from "prop-types";
import { useState } from "react";

//Components
import CountryChoice from "../Country1/CountryChoice/"

//Image
import wordle from "../../assets/images/wordle.jpg"

//Style
import "../Country1/style.css"

function Country2() {

    const [openChoice, setChoice] = useState(false);
    let [flagChoice, setFlag] = useState(wordle)

    const countryChoice = () => {
        setChoice(!openChoice);
    }

    const changeFlag = (country) => {
        setFlag(country)
    }
    return(
        <div className="country2">
            <p className="choice">Clique sur le drapeau pour choisir ton pays</p>
            <img src={flagChoice} className={flagChoice = wordle ? "wordle" : "country"} alt="Choix du pays" onClick={countryChoice}/>
            {openChoice && <CountryChoice 
                                countryChoice={countryChoice}
                                changeFlag={changeFlag}
                            />}
            <p className="player">Joueur 2</p>
        </div>
    );
}

Country2.propTypes = {
    countryChoice: PropTypes.func.isRequired,
}

export default Country2;