import React from "react";
import Alerts from "../Alerts/Alerts";

const ParametrosPorDefecto = () => {
    //para definir los parámetros predefinidos, se inicializan las variables de los parámetros dentro de los paréntesis.
    const suma = (a = 0, b = 10) => {
        const res = a + b;
        return console.log("La suma devuelve: " + res);
    };
    return (
        <div>
            <div className="container" id="header">
                <Alerts alert={"primary"} msg={"Ver código en GitHub"} />
            </div>
            <div id="body">
                <h1 className="display-3">Parámetros Por Defecto</h1>
                <div id="content">
                    <p>
                        Los parámetros por defecto son una forma de manejar los valores que se van a usar en una función en el caso de que el usuario no envie algunos valores como parámetros que sean
                        necesarios dentro de la lógica de ese fragmento.
                    </p>
                    <p>
                        Los parámetros por defecto son parámetros que ya tienen un valor predefinido que se usará en el caso de que dicho parámetros no sea definido al momento de llamar a dicha
                        función.
                    </p>
                    <button
                        onClick={() => {
                            suma();
                        }}
                        className="btn btn-outline-dark border text-light"
                    >
                        Click aquí y ver resultado en consola
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ParametrosPorDefecto;
