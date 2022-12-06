import { useEffect } from "react";
import { kickOff as bigMode } from "../../mode/bigMode.js";
import { kickOff as littleMode } from "../../mode/bigMode.js"

function Canvas({selectMode}) {

    //Chargement de notre canvas après le chargement de la page
    useEffect(() => {
        const canvas = document.querySelector("canvas");
        canvas.width = 900;
        canvas.height = 420;
        const ctx = canvas.getContext("2d");
        if (selectMode === "bigMode") {
            bigMode(ctx)
        } else if (selectMode === "littleMode") {
            littleMode(ctx)
        }

    }, [selectMode]);

    return(
        <div className="canvas">
            <canvas className="canvas"></canvas>
        </div>
    );
}

export default Canvas;