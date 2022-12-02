import { useEffect } from "react";
import { kickOff } from "./game";

function Canvas() {



    useEffect(() => {
        const canvas = document.querySelector("canvas");
        canvas.width = 900;
        canvas.height = 420;
        const ctx = canvas.getContext("2d");
        kickOff(ctx)

    }, []);

    return(
        <div className="canvas">
            <canvas className="canvas"></canvas>
        </div>
    );
}

export default Canvas;