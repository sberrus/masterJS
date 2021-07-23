import React from "react";
import Alerts from "../Alerts/Alerts";

const IndexdedDB = () => {
    const IDBRequest = indexedDB;

    const crearBBDD = () => {
        const consulta = IDBRequest.open("primeraDDBB");
        consulta.addEventListener("upgradeneeded", () => {
            console.log("Tabla Nueva Generada");
        });

        consulta.addEventListener("success", (e) => {
            console.log("Consulta generada correctamente");
        });
        consulta.addEventListener("error", (e) => {
            console.log("Ha habido un error al ver/crear la BBDD");
        });
    };

    return (
        <div>
            <div className="container" id="header">
                <Alerts alert={"success"} msg={"texto de prueba"} />
            </div>
            <div id="body">
                <h1 className="display-3">Indexed DB</h1>
                <div id="content">
                    <section>
                        <article>
                            <p>
                                <code>IndexedDB</code> es una API que nos permite hacer uso de una BBDD interna del navegador
                                bastante sencilla.
                            </p>
                            <p>
                                En comportamiento es bastante similar a <code>LocalStorage</code>, es asíncrona, orientada a
                                objetos y trabaja mediante eventos del DOM.
                            </p>
                            <p>
                                Es una base de datos <code>noSQL</code> bastante similar a <code>MongoDB</code>
                            </p>
                            <button
                                className="btn btn-large btn-outline-light"
                                onClick={() => {
                                    console.log(IDBRequest);
                                }}
                            >
                                Ver IndexedDB en consola
                            </button>
                        </article>
                        <article>
                            <h2>Métodos de IndexedDB</h2>
                            <p>
                                IndexedDB nos devuelve una <code>factory</code> que nos permite interactuar con esta API.
                            </p>
                            <p>Esta consta de diversos métodos para poder trabajar con ella.</p>
                            <ul>
                                <li>
                                    <h5>
                                        <code>IndexedDB</code>.
                                        <code className="arrowFunction">open( BBDD_NAME , VERSION )</code>
                                    </h5>
                                    <p>
                                        Este método nos permite visualizar una bbdd ya existente, pero en el caso de que no
                                        exista, este método crea dicha bbdd con el nombre que le pasemos como argumento.
                                    </p>
                                </li>
                            </ul>
                            <button
                                className="btn btn-large btn-outline-light"
                                onClick={() => {
                                    crearBBDD();
                                }}
                            >
                                Crear BBDD
                            </button>
                        </article>
                        <article>
                            <h3>Eventos de IndexedDB</h3>
                            <p>
                                Como se ha dicho esta bbdd es asincrona y trabaja con eventos del DOM para acceder a ella.
                                Esto nos permite utilizar su almacenamiento y evitar que el navegador se bloquee en el caso
                                de que haya mucha información por procesar.
                            </p>
                            <h4>Eventos</h4>
                            <ul>
                                <li>
                                    <h5>success</h5>
                                    <p>
                                        Este evento se dispara al momento de que se cree o se haya leido correctamente la
                                        bbdd. Esto sabiendo el comportamiento del método{" "}
                                        <code className="arrowFunction">.open()</code> explicado anteriormente.
                                    </p>
                                </li>
                                <li>
                                    <h5>error</h5>
                                    <p>Este se dispara al momento de que haya algun error.</p>
                                </li>
                                <li>
                                    <h5>upgradeneeded</h5>
                                    <p>Este evento se dispara solo si la tabla a consultar no ha sido creada.</p>
                                </li>
                            </ul>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default IndexdedDB;
