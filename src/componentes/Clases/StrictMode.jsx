import React from "react";

const StrictMode = () => {
    return (
        <div className="container">
            <div id="header">
                <div className="alert alert-warning d-inline-block p-1" role="alert">
                    No puedo demostrarlo desde React
                </div>
                <h1 className="display-3">Use Strict</h1>
            </div>
            <div id="body">
                <div id="content">
                    <p>
                        Strict mode es una forma de trabajar con Javascript de manera que el mismo
                        compilador aplique una serie de reglas para evitar que se realizen malas
                        praxis que se permitian antes con js
                    </p>
                    <p>Como no puedo demostrarlo desde React lo explico brevemente</p>
                    <h2>Cosideraciones</h2>
                    <p>
                        Viendo que no voy a poder realizar la prueba en esta página, resumiré que
                        use stric activa un modo "desarrollador" de JavaScript para que los errores
                        que javascript no los muestra pero si que los deja pasar, se vean.
                    </p>
                    <p>
                        De igual forma dejare un video de
                        <a useRef="_nofollow" className="btn btn-outline-danger">
                            <i
                                className="bi bi-youtube me-1"
                                href="https://youtu.be/EbMi1Qj4rVE?t=2328"
                            ></i>
                            @soy_dalto
                        </a>{" "}
                        donde lo explican todo muy bien.
                    </p>
                    <h2>Tiene scope</h2>
                    <p>
                        Otra caracteristica interesante que tiene el use strict, es que podemos
                        usarla con scope. Tendria el mismo alcance que una variable let, por lo
                        tanto esta sera accesible solo en el scope definido y en el de sus hijos.
                        Otra de las cosas que hay que estar pendientes, es que debe ser la primera
                        instrucción del scope.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StrictMode;
