import React from "react";
import Alerts from "../Alerts/Alerts";
const ThisContextual = () => {
    const thisContext = (e) => {
        return console.log("Escribe en la consola la palabra reservada %cthis","color:#a275ad;");
    };
    return (
        <div>
            <div className="container" id="header">
                <Alerts alert={"success"} msg={"Necesario abrir consola"} />
            </div>
            <div id="body">
                <h1 className="display-3">
                    <code>this</code> a fondo
                </h1>
                <div id="content">
                    <p>
                        La palabra reservada <code>this</code> es utilizada para referirnos al objeto padre del objeto en el que hacemos uso de esta palabra reservada.
                    </p>
                    <button onClick={thisContext} className="btn btn-outline-primary">
                        Imprimir en consola this del document
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThisContextual;
