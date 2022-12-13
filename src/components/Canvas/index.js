import { useEffect } from "react";
import { start as bigMode, reset as bigReset} from "../../mode/bigMode.js";
import { start as littleMode, reset as littleReset} from "../../mode/littleMode.js"

function Canvas({selectMode, isReset, resetMode}) {

    
    useEffect(() => {
        const canvas = document.querySelector("canvas");
        canvas.width = 900;
        canvas.height = 420;
        const ctx = canvas.getContext("2d");

        if(selectMode === "bigMode") {
            if (isReset) {
                bigReset(ctx);
                resetMode(false);
            } else {
                bigMode(ctx);
            }
        } else if (selectMode === "littleMode") {
            if (isReset) {
                littleReset(ctx);
                resetMode(false);
            } else {
                littleMode(ctx)
            }
        }
    }, [selectMode, isReset, resetMode])

    // if (isReset && selectMode === "bigMode") {
    //     bigReset();
    //     console.log('ok big');
    //     resetMode(false);
    // } 
    // else if (isReset && selectMode === "littleMode") {
    //     littleReset();
    //     console.log('ok');
    //     resetMode(false);
    // }
 
    return(
        <div className="canvas">
            <canvas className="canvas"></canvas>
        </div>
    );
}

export default Canvas;