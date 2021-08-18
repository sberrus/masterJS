import React, { useEffect } from "react";
import Alerts from "../Alerts/Alerts";
const ApiVisibilityChange = () => {
    useEffect(() => {
        window.addEventListener("visibilitychange", (e) => {
            console.log("Se cambio de pestaña:", e.target.visibilityState);
        });
        return () => {
            window.removeEventListener("visibilitychange", () => {});
        };
    }, []);
    return (
        <div>
            <div className="container" id="header">
                <Alerts alert={"primary"} msg={"texto de prueba"} />
            </div>
            <div id="body">
                <h1 className="display-3">Visibility Change</h1>
                <div id="content">
                    <section id="visibilityChange">
                        <article id="introducción">
                            <p>
                                Esta <code>API</code> nos permite saber si un usuario ha cambiado de pestaña en el navegador.
                            </p>
                        </article>
                        <article id="comportamiento">
                            <p>
                                Esta <code>API</code> funciona mediante un evento que se aplica al objeto <code>Window</code>{" "}
                                mediante el eventListener <code className="string">"visibilitychange"</code>.
                            </p>
                            <p>
                                Cuando cambiamos de pestaña, esta <code>API</code> dispara 2 eventos, uno cuando el usuario
                                realiza el cambio de pestaña y otro cuando vuelve
                            </p>
                            <h3>Propiedad document.visibilityState o e.target.visibilityState</h3>
                            <p>
                                Esta propiedad nos devuelve si el usuario esta visualizando o no la pestaña en cuestión. Por
                                lo que con esta podemos crear condicionales para nuestra app. Esta propiedad devuelve{" "}
                                <code className="string">hidden</code> o <code className="string">visible</code>
                            </p>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ApiVisibilityChange;
