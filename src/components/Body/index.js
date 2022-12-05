//import Components
import Country1 from "../Country1"
import Canvas from "../Canvas"
import Country2 from "../Country2"

//import Style
import "./style.css"

function Body() {
    return(
        <div className="body">
            <Country1 />
            <Canvas />
            <Country2 />
        </div>
        

    );
}

export default Body;