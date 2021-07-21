import React from "react";
import Alerts from "../Alerts/Alerts";

const ApiHistory = () => {
    return (
        <div>
            <div className="container" id="header">
                <Alerts
                    alert={"danger"}
                    msg={
                        "React tiene ciertos problemas para mostrar history. Se recomienda realizar las pruebas en otra pestaña fuera de react"
                    }
                />
            </div>
            <div id="body">
                <h1 className="display-3">Api History</h1>
                <div id="content">
                    <section>
                        <article>
                            <h3 className="border-bottom">¿Qué es el history?</h3>
                            <p>
                                <code>history</code> es una propiedad de el objeto <code className="var">Window</code> que
                                nos permite acceder al historial actual del navegador. Esto es todo el historial de los
                                sitios que has navegado desde que abriste la pestaña actual.
                            </p>

                            <h3 className="border-bottom">¿Como se accede?</h3>
                            <p>
                                History es una propiedad del objeto <code>Window</code> que nos permite leer esa informnación
                                del navegador al ser una propiedad de <code>Window</code> podemos acceder a esta simplemente
                                invocando a <code className="var">history</code>.
                            </p>
                            <h3 className="border-bottom">Propiedades de History</h3>
                            <h4>lenght</h4>
                            <p>
                                La primera propiedad es <code>length</code> la cual nos indica cuantos sitios has abierto en
                                la pestaña actual en la que estas navegando.
                            </p>
                            <small className="text-info">
                                Algunos navegadores, al dejar el click presionado en el boton de "atras" del navegador,
                                puedes ver que si el length es <code>3</code> mostrará desde la página actual, todos los
                                sitios que has abierto en la pestaña actual.
                            </small>
                            <h3 className="border-bottom">Métodos de history</h3>
                            <p>El history tiene métodos que nos permiten interactuar con el navegador</p>
                            <h4>
                                Método{" "}
                                <code>
                                    window.<code className="arrowFunction">back()</code>
                                </code>
                            </h4>
                            <p>
                                Este método nos permite disparar la acción de "atras" que es la misma función que realiza el
                                boton de "atras" de los navegadores.
                            </p>
                            <h4>
                                Método{" "}
                                <code>
                                    window.<code className="arrowFunction">forward()</code>
                                </code>
                            </h4>
                            <p>
                                Este método nos permite disparar la acción de "adelante" que es la misma función que realiza
                                el boton de "adelante" de los navegadores.
                            </p>
                            <h4>
                                Método{" "}
                                <code>
                                    window.<code className="arrowFunction">go()</code>
                                </code>
                            </h4>
                            <p>
                                Este método nos permite navegar dentro de los elementos que haya en el history. Como vimos en
                                principio, history tiene una propiedad <code>length</code> que devuelve la cantidad de
                                elementos que ha almacenado en history esa pestaña del navegador. Si quremos navegar por este
                                historial, tenemos que trabajar con los argumentos.
                            </p>
                            <h5>
                                Argumentos de{" "}
                                <code>
                                    window.<code className="arrowFunction">go()</code>
                                </code>
                            </h5>
                            <p>A este método podemos enviarle como argumento que queremos que haga la página.</p>
                            <p>
                                El valor <code>0</code>, siendo <code>0</code> la página actual; recarga la página en la que
                                se esta
                            </p>
                            <p>
                                Para navegar tenemos que manejarnos con valores positivos <code className="var">1</code> o
                                negativos <code>-1</code> moviendose para adelante o para atras tantas páginas como mayor sea
                                el número indicado como argumento.
                            </p>
                            <p>
                                Así el valor <code className="var">1</code> indica que se navegue a la siguiente página y el
                                valor <code>-1</code> hara que se vaya a la página anterior.
                            </p>
                            <h4>
                                Método{" "}
                                <code>
                                    window.<code className="arrowFunction">pushState()</code>
                                </code>
                            </h4>
                            <p>
                                Este método nos permite modificar la url en la que estamos y además crea una nueva entrada en
                                el navegador la cual aparece registrada en el history.
                            </p>
                            <p>
                                Este método la ser invocado genera un evento que puede ser capturado por el navegador con js.
                            </p>
                            <p>
                                Este método tiene 3 argumentos (<code>nombre</code> , <code>title</code> , <code>path</code>)
                            </p>
                            <h5>
                                Argumentos de{" "}
                                <code>
                                    window.<code className="arrowFunction">pushState()</code>
                                </code>
                            </h5>
                            <h5>
                                <code>nombre</code>
                            </h5>
                            <p>
                                Cuando hacemos uso del método{" "}
                                <code>
                                    window.<code className="arrowFunction">pushState()</code>
                                </code>{" "}
                                la nueva página genera un evento <code>popstate</code> el cual podemos capturar con{" "}
                                <code>
                                    <code>Window</code>.<code className="arrowFunction">addEventListener</code>(
                                    <code className="text-warning">"popstate"</code>,{" "}
                                    <code className="function">
                                        function(<span className="text-light">e</span>)
                                    </code>
                                    )
                                </code>
                                para ver la información que nos envia el usuario desde este arguento.
                            </p>

                            <h5>
                                <code>title</code>
                            </h5>
                            <p>
                                Aunque no se suele utilizar mucho, este modifica el <code className="var">title</code> de la
                                nueva entrada en cuestion.
                            </p>
                            <h5>
                                <code>url</code>
                            </h5>
                            <p>
                                En este argumento podemos cambiar el path de la URL la cual nos permite modificar y enviar
                                parámetros en la misma.
                            </p>
                            <h4>
                                Método{" "}
                                <code>
                                    window.<code className="arrowFunction">replaceState()</code>
                                </code>
                            </h4>
                            <p>
                                Esté método es similar al{" "}
                                <code>
                                    window.<code className="arrowFunction">pushState()</code>
                                </code>
                                , con los mismos argumentos y comportamiento similar, pero con la diferencia de que este no
                                genera una nueva entrada en el historial y no nos permite navegar en esta.
                            </p>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ApiHistory;
