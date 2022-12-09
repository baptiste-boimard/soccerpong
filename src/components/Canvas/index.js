import { useEffect } from "react";
import { start as bigMode, reset as bigReset} from "../../mode/bigMode.js";
import { start as littleMode, reset as littleReset} from "../../mode/bigMode.js"

function Canvas({selectMode, isReset, resetMode}) {

    console.log(isReset);

    useEffect(() => {
        const canvas = document.querySelector("canvas");
        canvas.width = 900;
        canvas.height = 420;
        const ctx = canvas.getContext("2d");

        bigMode(ctx);


    }, [])

    if (isReset) {
        bigReset()
        resetMode(false)
    }

    return(
        <div className="canvas">
            <canvas className="canvas"></canvas>
        </div>
    );
}

export default Canvas;