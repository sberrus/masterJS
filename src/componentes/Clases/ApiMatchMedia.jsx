import React, { useEffect } from "react";
import Alerts from "../Alerts/Alerts";
import "./CustomStyles/webworkers.css";
import "./CustomStyles/intersectionObserver.css";

const ApiWebWorkers = () => {
    useEffect(() => {
        const activarmatchMedia = () => {
            const mq = matchMedia("(max-width: 500px)");
            const cajaEjemplo = document.querySelector("#cajaEjemplo");
            mq.addEventListener("change", () => {
                mq.matches
                    ? cajaEjemplo.classList.replace("cajaBlanca", "cajaNegra")
                    : cajaEjemplo.classList.replace("cajaNegra", "cajaBlanca");
                console.log("La pantalla es menor a 500px?", mq.matches);
            });
        };

        activarmatchMedia();
    }, []);
    return (
        <div>
            <div className="container" id="header">
                <Alerts alert={"primary"} msg={"Para ver este ejemplo debes poder hacer resize de la pantalla"} />
            </div>
            <div id="body">
                <h1 className="display-3">
                    <code className="arrowFunction">
                        matchMedia(<code>MEDIA_QUERY</code>)
                    </code>
                </h1>
                <div id="content">
                    
                    <section id="matchmedia">
                        <article id="definicion">
                            <p>
                                Esta API nos permite crear eventos tomando en cuenta la media query que le enviamos a la API
                                como argumento. Esta API funciona con escucha de eventos por lo que si enviamos como media
                                query <code className="string">"max-width: 500px"</code> este evento se disparará solo cuando
                                el width de la página sea mayor o menor a 500px
                            </p>
                        </article>
                        <article id="comportamiento">
                            <ul>
                                <li>
                                    <h5>
                                        <code>MEDIA_QUERY</code>
                                    </h5>
                                    <p>
                                        Al igual que las media querys en CSS enviamos como string dentro de parentesis la
                                        media query la cual deseamos que escuche.
                                    </p>
                                </li>
                            </ul>

                            <small>
                                Debe responder <code>true</code> si el ancho de la pantalla es menor a 100px de lo contrario
                                devuelve <code>false</code>{" "}
                            </small>
                            <button
                                className="btn btn-light col-12 mb-3"
                                onClick={() => {
                                    console.log(matchMedia("(max-width: 100px)"));
                                }}
                            >
                                Ver matchMedia("(max-width: 100px)") en consola
                            </button>
                            <small>
                                Debe responder <code>true</code> si el ancho de la pantalla es menor a 100px de lo contrario
                                devuelve <code>false</code>{" "}
                            </small>
                            <button
                                className="btn btn-light col-12 mb-3"
                                onClick={() => {
                                    console.log(matchMedia("(max-width: 1000px)"));
                                }}
                            >
                                Ver matchMedia("(max-width: 1000px)") en consola
                            </button>
                            <p>
                                Como podemos observar, al pulsar cuales quiera de los dos botones podremos observar lo que
                                nos devuelve la API matcheMedia().
                            </p>
                            <p>Esta nos devuelve las siguientes propiedades.</p>
                            <ul>
                                <li>
                                    <h5>media</h5>
                                    <p>Esta es la media query que le hemos pasado como argumento a la API.</p>
                                </li>
                                <li>
                                    <h5>matches</h5>
                                    <p>Esta propiedad indica si la query es verdadera o falsa.</p>
                                </li>
                                <li>
                                    <h5>onchange</h5>
                                </li>
                            </ul>
                        </article>
                        <article id="ejemplo">
                            <div id="cajaEjemplo" className="cajaBlanca">
                                Hola
                            </div>
                            <small>
                                Como se puede observar, al hacer resize a la pantalla le enviamos una query a la API que nos
                                permite disparar una acción al momento de que la query enviada a la API este en true.{" "}
                                <code>
                                    Hay que destacar que estoy usando en este ejemplo javascript para cambiar las clases de
                                    la caja que uso como ejemplo. Esta API sirve para dispara código JS tomando en cuenta la
                                    media query enviada com oargumento a matchMedia().
                                </code>
                            </small>
                        </article>
                    </section>
                    
                </div>
            </div>
        </div>
    );
};

export default ApiWebWorkers;
