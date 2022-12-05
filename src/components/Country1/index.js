import PropTypes from "prop-types";

//Components
import Country1Choice from "./Country1Choice/"

//Image
import { useState } from "react";
import wordle from "../../assets/images/wordle.jpg"

//Style
import "./style.css"

function Country1() {

    const [openChoise, setChoise] = useState(false);

    const countryChoice =() => {
        setChoise(!openChoise);
        console.log(openChoise)
    }
    return(
        <div className="country1">
            <p className="choice">Clique sur le drapeau pour choisir ton pays</p>
            <img src={wordle} className="country-choice" alt="Choix du pays" onClick={countryChoice}/>
            {openChoise && <Country1Choice 
                                countryChoice={countryChoice}
                            />}
            <p className="player">Joueur 1</p>
        </div>
    );
}

Country1.propTypes = {
    countryChoice: PropTypes.func.isRequired,
}

export default Country1;