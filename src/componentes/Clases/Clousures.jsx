import React from "react";
import Alerts from "../Alerts/Alerts";

const Clousures = () => {
    return (
        <div>
            <div className="container" id="header">
                <Alerts alert={"danger"} msg={"Si es verdad que Dalto lo explica bien, hay muchos otros usos y explicaciones mejores para los clousures"} />
            </div>
            <div id="body">
                <h1 className="display-3">Clausulas (Clousures)</h1>
                <p>Las clausulas son funciones que retornan otras funciones</p>
                <p>Hay otras explicaciones mejores acerca de los clousures para aprenderlos más a fondo. Recomiendo ir al siguiente video</p>
                <a href="https://www.youtube.com/watch?v=xa8lhVwQBw4" rel="noreferrer" target="_blank" className="btn btn-outline-danger">
                    Ir a video de Carlos Azaustre
                </a>
                <div id="content"></div>
            </div>
        </div>
    );
};

export default Clousures;
