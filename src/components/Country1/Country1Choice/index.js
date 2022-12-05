//Style
import "./style.css"

import france from "../../../assets/images/france.jpg"

const Country1Choise = ({countryChoice, changeFlag}) => {

    const selectFlag = () => {
        countryChoice();
        // eslint-disable-next-line no-undef
        changeFlag(france);
    }

    return(
        <div className="container" onClick={selectFlag}>coucou</div>
    );
}

export default Country1Choise;