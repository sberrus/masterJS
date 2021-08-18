import React from "react";
import Alerts from "../Alerts/Alerts";

const Memoization = () => {
    return (
        <div>
            <div className="container" id="header">
                <Alerts alert={"primary"} msg={"texto de prueba"} />
            </div>
            <div id="body">
                <h1 className="display-3">NOMBRE_CLASE</h1>
                <div id="content"></div>
            </div>
        </div>
    );
};

export default Memoization;
