import React from "react";
import Alerts from "../Alerts/Alerts";

const WebWorkers = () => {
    return (
        <div>
            <div className="container" id="header">
                <Alerts
                    alert={"danger"}
                    msg={
                        "Este ejemplo lo hare en archivos estáticos porque para hacerlo en React hay que configurar un par de cosas, por lo tanto haré este ejemplo en JavaScript vanilla"
                    }
                />
            </div>
            <div id="body">
                <h1 className="display-3">Web Workers</h1>
                <div id="content">
                    <section>
                        <article id="introducción">
                            <h3>¿Qué son los Web Workers?</h3>
                            <p>
                                Los navegadores web tienen un proceso principal que se llama <code>event loop</code>, este
                                proceso solo se puede hacer cargo de una tarea a la vez. Generalmente los eventos que realiza
                                el usuario son eventos cortos que no hace posible apreciar dicho bloqueo sumado a que los
                                dispositivos cada vez cuentan con más capacidad y permiten realizar estas acciones de manera
                                más fluida, pero que pasa cuando hacemos un proceso pesado como la carga de un archivo de
                                gran peso? Esto hace que el <code>event loop</code> se bloquee haciendo que no se pueda
                                interactuar con el resto de elementos de la página web.
                            </p>
                            <p>
                                Justo para solucionar este problema, hacemos uso de los <code>WEB WORKERS</code> que nos
                                permiten crear nuevos "hilos" de proceso para que le navegador no bloquee la página y el
                                usuario pueda seguir interactuando con la página web.
                            </p>
                        </article>
                        <article id="tipos-de-workers">
                            <h3>
                                <code>new</code> <code className="obj">Worker()</code>
                            </h3>
                            <p>
                                Para poder usar un <code>worker</code> tenemos que crear un archivo ".js" aparte que será el
                                que se ejecute en ese proceso que crearemos.
                            </p>
                            <p>
                                Para llamar al worker tenemos que usar el objeto <code className="obj">Worker</code>(
                                <code className="string">RUTA_ARCHIVO</code>) para poder ejecutarlo en ese nuevo proceso.
                            </p>

                            <h3>Tipos de Web Workers</h3>
                            <ul>
                                <h5>
                                    <code>Dedicated Worker</code>
                                </h5>
                                <p>
                                    Este es el <code>worker</code> más sencillo con el que vamos a trabajar.
                                </p>
                            </ul>
                        </article>
                        <article id="comunicacion">
                            <h3>Comunicacion Script --&#62; Web Worker</h3>
                            <p>
                                La comunicación entre los scripts y los web workers constan de que el script principal envia
                                un mensaje al web worker, estando este último a la "escucha" de cualquier mensaje. Esto lo
                                realizamos mediante un eventListener dentro del web worker.
                            </p>

                            <h4>
                                Método{" "}
                                <code className="arrowFunction">
                                    postmessage( <code className="string">MENSAJE</code> )
                                </code>
                            </h4>
                            <p>Este método es el que nos permite comunicar y ejecutar los scripts de los workers.</p>
                            <p>
                                Desde el script principal hay que utilizar este método directamente desde el objeto worker
                                para que pueda funcionar.{" "}
                            </p>
                            <div className="codeContainer">
                                <code className="obj">worker</code>
                                <code className="arrowFunction">
                                    .postMessage( <code className="string">MESSAGE</code> )
                                </code>
                            </div>
                            <p>
                                Desde el worker, para devolver información al script principal, usamos el mismo método
                                directamente ya que esté, de por si, es el objeto worker.
                            </p>

                            <h4>
                                Escucha de mensajes{" "}
                                <code className="arrowFunction">
                                    addEventListener(<code className="string">"message"</code>{" "}
                                    <code className="function">fn</code>)
                                </code>
                            </h4>
                            <p>
                                Para escuchar lo que nos envia el script principal debemos asignar un{" "}
                                <code className="arrowFunction">addEventListener()</code> con el evento{" "}
                                <code className="string">"message"</code> para poder estar a la "escucha" de cuando ejecutar
                                el evento.
                            </p>
                            <p>
                                Para escuchar lo que nos devuleve el worker en el script principal, debemos realizar tambien
                                el <code className="arrowFunction">addEventListener()</code> pero directamente al worker{" "}
                            </p>
                            <div className="codeContainer">
                                <code className="obj">Worker</code>.
                                <code className="arrowFunction">
                                    addEventListener(<code className="string">"message"</code>,{" "}
                                    <code className="function">fn</code>)
                                </code>
                            </div>

                            <h4>
                                <code className="obj">worker</code>.<code className="arrowFunction">terminate()</code>
                            </h4>
                            <p>
                                Para finalizar la comunicación y apagar el hilo del worker tenemos que hacer uso de este
                                método ya que de no hacerlo, tendremos problemas de rendimiento.
                            </p>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default WebWorkers;
