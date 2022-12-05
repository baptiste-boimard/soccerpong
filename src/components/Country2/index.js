//Style
import "./style.css"

function Country2() {

    const country1Choice =() => {
        console.log("choix1");
    }
    return(
        <div className="country1">
            <p>Clique sur le drapeau pour choisir ton pays</p>
            <img src="" className="country-choice" alt="Choix du pays" onClick={country1Choice}/>
        </div>
    );
}

export default Country2;