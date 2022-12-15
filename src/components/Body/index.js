import PropTypes from "prop-types";

//import Components
import Country1 from "../Country1"
import Canvas from "../Canvas"
import Country2 from "../Country2"

//import Style
import "./style.css"

function Body({selectMode, isReset, resetMode}) {
    return(
        <div className="body">
            <Country1 />
            <Canvas 
                selectMode={selectMode}
                isReset={isReset}
                resetMode={resetMode}
            />
            <Country2 />
        </div>
        

    );
}

Body.propTypes = {
    resetMode: PropTypes.func.isRequired,
    selectMode: PropTypes.func.isRequired,
    isReset: PropTypes.bool.isRequired,
}

export default Body;