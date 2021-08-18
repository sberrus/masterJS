import React, { useEffect } from "react";
import Alerts from "../Alerts/Alerts";

const ObjetoNavigator = () => {
    useEffect(() => {
        //Propiedades principales o más utilizadas del objeto Navigator.
        console.log("appCodeName: ", navigator.appCodeName, "\n");
        console.log("");
        console.log("appName: ", navigator.appName, "\n");
        console.log("");
        console.log("appVersion: ", navigator.appVersion, "\n");
        console.log("");
        console.log("connection: ", navigator.connection, "\n");
        console.log("");
        console.log("geolocation: ", navigator.geolocation, "\n");
        console.log("");
        console.log("hardwareConcurrency: ", navigator.hardwareConcurrency, "\n");
        console.log("");
        console.log("language: ", navigator.language, "\n");
        console.log("");
        console.log("languages: ", navigator.languages, "\n");
        console.log("");
        console.log("mimeTypes: ", navigator.mimeTypes, "\n");
        console.log("");
        console.log("onLine: ", navigator.onLine, "\n");
        console.log("");
        console.log("userAgent: ", navigator.userAgent, "\n");
        console.log("");
        console.log("cookieEnabled: ", navigator.cookieEnabled, "\n");
        console.log("");
        console.log("permissions: ", navigator.permissions, "\n");
        console.log("");
        console.log("platform: ", navigator.platform, "\n");
        console.log("");
        console.log("plugins: ", navigator.plugins, "\n");
        console.log("");
        console.log("product: ", navigator.product, "\n");
        console.log("");
        console.log("serviceWorker: ", navigator.serviceWorker, "\n");
        console.log("");
    }, []);
    return (
        <div>
            <div className="container" id="header">
                <Alerts alert={"primary"} msg={"texto de prueba"} />
            </div>
            <div id="body">
                <h1 className="display-3">Objeto Navigator (A fondo)</h1>
                <div id="content">
                    <section>
                        <article id="introduccion">
                            <p>
                                El objeto navigator es el que nos permite acceder a caracteristicas propias del navegador
                                como pueden ser ciertas apis, las rutas, información de la sesión y demas.{" "}
                            </p>
                            <p>
                                En anteriores seciones de este nivel hemos visto ciertas caracteristicas y APIS
                                pertenecientes a este, pero, ahora vamos a profundizar en su funcionamiento y en que nos
                                puede ofrecer.
                            </p>
                        </article>
                        <article id="interfaces-propiedades">
                            <h3>
                                ¿Qué contiene <code className="obj">navigator</code>?
                            </h3>
                            <p>
                                Navigator nos ofrece una serie de interfaces con las que podemos interactuar y extraer
                                información para nuestros proyectos o hacer uso de ciertas APIS que nos ofrece el navegador.
                            </p>
                            <h3>Lista de Propiedades más utilizadas</h3>
                            <ul>
                                <li>
                                    <h5>
                                        <code className="var">appCodeName</code>
                                    </h5>
                                    <p>
                                        Esta propiedad nos devuelve el nombre del navegador.{" "}
                                        <small>
                                            <code>**No siempre el valor que devuelve es correcto.</code>
                                        </small>
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="var">appName</code>
                                    </h5>
                                    <p>
                                        Nos devuelve el nombre oficial del navegador{" "}
                                        <small>
                                            <code>**No siempre el valor que devuelve es correcto.</code>
                                        </small>
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="var">appVersion</code>
                                    </h5>
                                    <p>
                                        Nos devuelve información del equipo desde el cual el usuario esta accediendo. Por
                                        ejemplo: Versión del navegador, sistema operativo, arquitectura, motor del navegador
                                        etc...{" "}
                                        <small>
                                            <code>**No siempre el valor que devuelve es correcto.</code>
                                        </small>
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="var">connection</code>
                                    </h5>
                                    <p>
                                        Nos devuelve un objeto con información relacionada a la conexión actual del usuario.
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="var">geolocation</code>
                                    </h5>
                                    <p>
                                        Nos devuelve la API de Geolocalización con la cual ya hemos estado trabajando en
                                        anteriores secciones de este curso.
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="var">hardwareConcurrency</code>
                                    </h5>
                                    <p>Nos devuelve el número de procesadores que hay disponibles para el usuario.</p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="var">language</code>
                                    </h5>
                                    <p>Devuelve el lenguaje que tiene definido el navegador del usuario.</p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="var">languages</code>
                                    </h5>
                                    <p>
                                        Devuelve los lenguajes que el usuario entiende (Investigar un poco más al respecto).
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="var">MimeType</code>
                                    </h5>
                                    <p>Son todos los MimeTypes que permite el navegador.</p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="var">onLine</code>
                                    </h5>
                                    <p>Devuelve si el usuario dispone o no de conexión a internet.</p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="var">UserAgent</code>
                                    </h5>
                                    <p>
                                        Devuelve información acerca del navegador del usuario
                                        <small>
                                            <code>**No siempre el valor que devuelve es correcto.</code>
                                        </small>
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="var">cookieEnabled</code>
                                    </h5>
                                    <p>Devuelve si el usuario tiene activado el uso de cookies o no.</p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="var">permissions</code>
                                    </h5>
                                    <p>
                                        Nos permite acceder a cada uno de los permisos del navegador como pueden ser el
                                        microfono, la camara, etc...
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="var">platform</code>
                                    </h5>
                                    <p>Devuelve la información del sistema operativo desde el cual estamos accediendo.</p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="var">plugins</code>
                                    </h5>
                                    <p>Devuelve un array con todos los plugins que tiene instalado el navegador.</p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="var">Product</code>
                                    </h5>
                                    <p>
                                        Devuelve el nombre del product{" "}
                                        <small>
                                            <code>
                                                **Esto se utilizaba anteriormente para solucionar problemas de compatibilidad
                                                pero ya no se suele usar mucho
                                            </code>
                                        </small>
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="var">ServiceWorker</code>
                                    </h5>
                                    <p>
                                        Devuelve el objeto service worker que es parecido al web worker pero que funciona
                                        ligeramente diferente.{" "}
                                        <small>
                                            <code>**Este web worker lo veremos en unas sección aparte.</code>
                                        </small>
                                    </p>
                                </li>
                            </ul>
                        </article>
                        <article id="metodos">
                            <h3>Métodos disponibles del objeto navigator</h3>
                            <p>
                                Estos métodos nos permiten interactuar con ciertos componentes del navegador como puede ser
                                la cámara, el micrófono, los bocinas, etc...
                            </p>
                            <ul>
                                <li>
                                    <h5>
                                        <code className="arrowFunction">getUserMedia()</code>
                                    </h5>
                                    <p>
                                        Este método se usa para poder acceder al micrófono y a las bocinas. Aunque hay otras
                                        formas mejores de acceder e interactuar con estos.
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="arrowFunction">registerContentHandler()</code>
                                    </h5>
                                    <p>
                                        Este método nos permite modificar el como el navegador interactuará con ciertos
                                        MimeTypes.
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="arrowFunction">registerProtocolHandler()</code>
                                    </h5>
                                    <p>
                                        Este método nos permite modificar como el navegador interactuará con ciertos
                                        protocolos.
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="arrowFunction">requestMediaKeySystemAccess()</code>
                                    </h5>
                                    <p>
                                        Nos permite acceder a una promesa para poder usar ciertas caractersiticas del
                                        sistema. (Profundizar)
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="arrowFunction">javaEnabled()</code>
                                    </h5>
                                    <p>Devuelve si el navegador tiene activado Java o no.</p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="arrowFunction">sendBeacon()</code>
                                    </h5>
                                    <p>
                                        Nos permite enviar de forma asincrona pequeños paquetes de información desde el
                                        usuario al servidor.
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        <code className="arrowFunction">vibrate()</code>
                                    </h5>
                                    <p>Nos permite activar la vibración en los dispositivos que lo permitan.</p>
                                </li>
                                <button
                                    onClick={() => {
                                        navigator.vibrate([100, 50, 100, 100, 50, 100]);
                                    }}
                                >
                                    Vibra
                                </button>
                            </ul>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ObjetoNavigator;
