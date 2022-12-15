import PropTypes from "prop-types";
import { useEffect } from "react";

//Import des fonctions des modes de jeux
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
                littleReset(ctx);
                bigReset(ctx);
            } else {
                bigMode(ctx);
            }
        } else if (selectMode === "littleMode") {
            if (isReset) {
                bigReset(ctx);
                littleReset(ctx);
            } else {
                littleMode(ctx)
            }
        }

        resetMode(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectMode, isReset])

    return(
        <div className="canvas">
            <canvas className="canvas"></canvas>
        </div>
    );
}

Canvas.propTypes = {
    resetMode: PropTypes.func.isRequired,
    selectMode: PropTypes.func.isRequired,
    isReset: PropTypes.bool.isRequired,
}

export default Canvas;