//Style
import "./style.css"

import france from "../../../assets/images/france.jpg"
import japon from "../../../assets/images/japon.png"
import bresil from "../../../assets/images/bresil.png"
import italie from "../../../assets/images/italie.png"
import allemagne from "../../../assets/images/allemagne.png"
import senegal from "../../../assets/images/senegal.png"

const Country1Choise = ({countryChoice, changeFlag}) => {

    const selectFlag = (event) => {
        countryChoice();
        changeFlag(event.target.src);
    }

    return(
        <div className="container" onClick={selectFlag}>
                <img src={france} className="flag" alt="drapeau de pays" onClick={selectFlag}/>
                <img src={japon} className="flag" alt="drapeau de pays" onClick={selectFlag}/>
                <img src={bresil} className="flag" alt="drapeau de pays" onClick={selectFlag}/>
                <img src={italie} className="flag" alt="drapeau de pays" onClick={selectFlag}/>
                <img src={allemagne} className="flag" alt="drapeau de pays" onClick={selectFlag}/>
                <img src={senegal} className="flag" alt="drapeau de pays" onClick={selectFlag}/>
        </div>
    );
}

export default Country1Choise;