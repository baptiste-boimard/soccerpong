//import Components
import Country1 from "../Country1"
import Canvas from "../Canvas"
import Country2 from "../Country2"

//import Style
import "./style.css"

function Body({selectMode, reset}) {
    return(
        <div className="body">
            <Country1 />
            <Canvas 
                selectMode={selectMode}
                reset={reset}
            />
            <Country2 />
        </div>
        

    );
}

export default Body;