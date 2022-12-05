import PropTypes from "prop-types";
import { useState } from "react";

//Components
import Country1Choice from "./Country1Choice/"

//Image
import wordle from "../../assets/images/wordle.jpg"

//Style
import "./style.css"

function Country1() {

    const [openChoice, setChoice] = useState(false);
    let [flagChoice, setFlag] = useState(wordle)

    const countryChoice = () => {
        setChoice(!openChoice);
        console.log(openChoice)
        console.log(flagChoice)
    }

    const changeFlag = (country) => {
        setFlag(country)
    }
    return(
        <div className="country1">
            <p className="choice">Clique sur le drapeau pour choisir ton pays</p>
            <img src={flagChoice} className={flagChoice = wordle ? "wordle" : "country"} alt="Choix du pays" onClick={countryChoice}/>
            {openChoice && <Country1Choice 
                                countryChoice={countryChoice}
                                changeFlag={changeFlag}
                            />}
            <p className="player">Joueur 1</p>
        </div>
    );
}

Country1.propTypes = {
    countryChoice: PropTypes.func.isRequired,
}

export default Country1;