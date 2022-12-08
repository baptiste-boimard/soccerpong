import { useEffect } from "react";
import { start as bigMode, reset as bigReset} from "../../mode/bigMode.js";
import { start as littleMode, reset as littleReset} from "../../mode/bigMode.js"

function Canvas({selectMode, reset}) {

    if (reset && selectMode === "bigMode") {
        const canvas = document.querySelector("canvas");
        canvas.width = 900;
        canvas.height = 420;
        const ctx = canvas.getContext("2d");
        bigMode(ctx);
    }

    //Chargement de notre canvas après le chargement de la page
    useEffect(() => {
        const canvas = document.querySelector("canvas");
        canvas.width = 900;
        canvas.height = 420;
        const ctx = canvas.getContext("2d");
        bigMode(ctx);
    }, [])
    return(
        <div className="canvas">
            <canvas className="canvas"></canvas>
        </div>
    );
}

export default Canvas;