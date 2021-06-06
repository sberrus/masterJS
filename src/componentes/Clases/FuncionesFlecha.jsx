import React from "react";

//Funcion flecha principal (con sentencias)
const FuncionesFlecha = () => {
    const saludar = () => {
        console.log("hola");
        console.log("¿como estas?");
    };
    saludar();

    //Funcion Flecha una sola linea sin llaves(Mayor legibilidad)
    const saludarUnaLinea = () => console.log("Hola desde una linea");
    saludarUnaLinea();

    //Funcion flecha con expresion (devuelve valores en una sola línea).
    const getText = () => "Devuelve un string directamente";
    console.log(getText());
    return (
        <div>
            <div className="container" id="header">
                <div className="alert alert-primary d-inline-block p-1" role="alert"></div>
            </div>
            <div id="body">
                <h1 className="display-3">Destripando las funciones flecha Javascript</h1>
                <div id="content">
                    <h1>
                        <code className="function">function</code> vs{" "}
                        <code className="arrowfunction">function()</code>
                    </h1>
                    <p>
                        Esta es una funcion que se introdujo con ECMASCRIPT6 para solucionar ciertos
                        problemas que tienen las funciones declarativas.
                    </p>
                </div>
                <h2>No deben ser utilizadas en los métodos (Funciones de las clases)</h2>
            </div>
        </div>
    );
};

export default FuncionesFlecha;
