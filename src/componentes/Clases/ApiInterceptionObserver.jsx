import React, { useEffect } from "react";
import Alerts from "../Alerts/Alerts";

const ApiInterceptionObserver = () => {
    useEffect(() => {
        const isVisible = (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) console.log("Se esta viendo la caja: ", entry.target.textContent);
            }
        };
        const activarIntersectionObserver = () => {
            const cajas = document.querySelectorAll(".observer");
            const observer = new IntersectionObserver(isVisible);
            for (const caja of cajas) {
                observer.observe(caja);
            }
        };
        const observerConMargin = () => {
            const cajas = document.querySelectorAll(".observer");
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting)
                        console.log("La caja 1 se observa 150px antes de aparecer en el viewport");
                },
                { rootMargin: "150px" }
            );
            observer.observe(cajas[0]);
        };

        activarIntersectionObserver();
        observerConMargin();
    }, []);
    return (
        <div>
            <div className="container" id="header">
                <Alerts alert={"primary"} msg={"texto de prueba"} />
            </div>
            <div id="body">
                <h1 className="display-3">
                    <code className="arrowFunction">IntersectionObserver()</code>
                </h1>
                <div id="content">
                    <section id="intersectionObserver">
                        <article id="definicion">
                            <p>
                                Esta API nos permite controlar el comportamiento de ejecución de código tomando en cuenta que
                                elementos estan visibles en el View Port del navegador. Suele usarse para hacer el proceso de
                                <code> Lazy Load</code>
                            </p>
                        </article>
                        <article id="comportamiento">
                            <p>
                                Esta API es un objeto que al instanciarlo tenemos que enviarle 2 argumentos.{" "}
                                <code>callback</code> y <code>options</code>
                            </p>
                            <ul>
                                <li>
                                    <h5>
                                        <code className="var">entries</code>
                                    </h5>
                                </li>
                                <p>
                                    Los <code className="var">entries</code> son los elementos que van a ser observados los
                                    cuales ejecutaran código al momento de que el viewport los alcance.
                                </p>
                                <li>
                                    <h5>
                                        <code>
                                            callback( <code className="var">entries</code> )
                                        </code>
                                    </h5>
                                    <p>
                                        El callback es la función que se va a ejecutar, esta recibe un array con todos los
                                        entries que hay en el documento en cuestión.
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        <code>
                                            <code>options</code>
                                        </code>
                                    </h5>
                                    <p>
                                        Las opciones nos permiten configurar comportamientos del observer mediante un objeto
                                    </p>
                                    <ul>
                                        <li>
                                            <h5>root:</h5>
                                            <p>
                                                Este nos permite utilizar un elemento de referencia. Por defecto es el
                                                viewport.
                                            </p>
                                        </li>
                                        <li>
                                            <h5>rootMargin:</h5>
                                            <p>
                                                Esto nos permite indicar que tanto margen tiene el observe. Esto nos permite
                                                que si queremos que un elemento se cargue uns pixeles antes de llegar a este,
                                                lo indicamos con este método.{" "}
                                                <code>
                                                    Para ver el efecto se lo aplicaremos a la última caja para visualizar
                                                    correctamente le comportamiento
                                                </code>
                                            </p>
                                            <p>
                                                Cabe destacar que podemos darle margin positivo para que este se ejecute
                                                antes de aparecer en el viewport o negativo para ejecutarlo unos pixeles
                                                después de que haya aparecido en el viewport.
                                            </p>
                                        </li>
                                        <li>
                                            <h5>treshold:</h5>
                                            <p>
                                                Esta propiedad nos permite indicar de otra manera cuando se dispara el
                                                evento. Se envia un valor entre 0-1 dentro de corchetes [] donde 0 es que se
                                                dispare el evento cuando se logra ver por completo el elemento en sí y 1 para
                                                que se dispare recien entre en contacto el viewport y el elemento.
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <br />
                            <h3>
                                <code className="function">
                                    intersectionObserver(<code className="var">cb,op</code>)
                                    <code className="arrowFunction">
                                        .observe(<code className="var">HTMLElement</code>)
                                    </code>{" "}
                                </code>
                            </h3>
                            <p>
                                Pensaremos en el intersectionObserver como un eventListener que debemos preconfigurar.
                                Despues de haber configurado el observer, debemos aplicarle este a un elemento HTML. Esto lo
                                hacemos mediante el método{" "}
                                <code className="function">
                                    intersectionObserver()
                                    <code className="arrowFunction">
                                        .observe(<code className="var">HTMLElement</code>)
                                    </code>
                                </code>
                            </p>
                            <p>
                                El observer va a tener 2 estados, verdadero cuando se visualize el elemento en el viweport y
                                falso de lo contrario. Esto lo veremos en la propiedad <code>isIntersecting: BOOL</code> que
                                nos devuelve el observer.
                            </p>
                        </article>
                        <article id="ejemplo">
                            <p>En este ejemplo, le hemos aplicado un observer</p>
                            <div className="observer">caja 1</div>
                            <div className="observer">caja 2</div>
                            <div className="observer">caja 3</div>
                            <div className="observer">caja 4</div>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ApiInterceptionObserver;
