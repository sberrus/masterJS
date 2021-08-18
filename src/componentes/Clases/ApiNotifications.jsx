import React, { useEffect, useState } from "react";
import Alerts from "../Alerts/Alerts";
const ApiNotifications = () => {
    const [message, setMessage] = useState("Hola Mundo!");

    useEffect(() => {
        if (!("Notification" in window)) {
            console.log("Las notificaciones no estan disponibles en tu versión de navegador");
        }
    }, []);

    const sendNotification = (e) => {
        e.preventDefault();
        Notification.requestPermission(() => {
            if (Notification.permission === "granted") {
                new Notification(message);
            }
        });
        setMessage("");
    };
    return (
        <div>
            <div className="container" id="header">
                <Alerts alert={"primary"} msg={"texto de prueba"} />
            </div>
            <div id="body">
                <h1 className="display-3">Api Notifications</h1>
                <div id="content">
                    <section>
                        <article id="introduccion">
                            <p>
                                La API de notifications nos permite enviarle notificaciones a los usuarios siempre que
                                deseemos hacerlo. Esta opción la debe aceptar el usuario para que le puedan llegar las
                                notificaciones.
                            </p>
                        </article>
                        <article id="comportamiento">
                            <h3>Configurar</h3>
                            <p>
                                Esta es una api que no es soportada por navegadores antiguos por lo que debemos preguntarle
                                mediante una condicional si tienen esa API incorporada el navegador que abre la app.
                            </p>

                            <div className="codeContainer">
                                <code>
                                    if( !(<code className="string">"Notificacion"</code> in{" "}
                                    <code className="string">window</code>) ) =&gt; do something...
                                </code>
                            </div>

                            <p>
                                Después tenemos que configurar que pida permiso para usar las notificaciones en el navegador
                                del usuario con:
                            </p>
                            <div className="codeContainer">
                                <code className="obj">Notification</code>
                                <code>.requestPermision()</code>
                            </div>
                            <div>
                                <form action="" onSubmit={(e) => sendNotification(e)} className="mt-3">
                                    <h5>Notification Tester</h5>
                                    <input
                                        className="col-12 mb-3"
                                        type="text"
                                        placeholder="Introduce mensaje para la notificación"
                                        value={message}
                                        onChange={(e) => {
                                            setMessage(e.target.value);
                                        }}
                                    />
                                    <button className="btn btn-light col-12">Enviar Notificación</button>
                                </form>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ApiNotifications;
