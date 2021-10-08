import React from "react";
import Alerts from "../Alerts/Alerts";

const Memoization = () => {
    return (
        <div>
            <div className="container" id="header">
                <Alerts
                    alert={"warning"}
                    msg={
                        "Este ejemplo se hará con archivos estáticos ya que en react se usa un hook llamado UseMemo para manejar las memoizations"
                    }
                />
            </div>
            <div id="body">
                <h1 className="display-3">Memoization</h1>
                <div id="content">
                    <section>
                        <article id="introduccion">
                            <p>
                                La <code>memoization</code> nos permite controlar los tiempos de ejecución de ciertas cosas
                                para mejorar la interacción con el usuario.
                            </p>
                            <p>
                                <i>
                                    Esta caracteristica es muy poco usada pero no deja de ser muy útil para mejorar nuestros
                                    sitios web.
                                </i>
                            </p>
                            <p>
                                Esta caracteristica nos permite almacenar un array con información en el ordenador del
                                usuario, de manera que si necesitamos acceder a información que dura mucho en cargar y esta
                                es estática, ejecutarla una sola vez y almacenarla para poder usarla en futuras consultas sin
                                necesidad de hacer la llamada o ejecutar el script que dure mucho de nuevo.
                            </p>
                        </article>
                    </section>
                    <section id="finalizacion">
                        <p>
                            La <code>memoization</code> más que una característica, es un concepto que se aplica tanto a JS
                            como a muchos lenguajes de programación y consta de almacenar valores que vayan a ser accedidos
                            con regularidad, que consuman mucho tiempo o recursos al ser ejecutados.
                        </p>
                        <p>
                            Con la <code>memoization</code> lo que creamos es un algoritmo que nos permite comprobar si una
                            función ha sido ejecutada anteriormente y comprobar mediante los argumentos que le enviemos, si
                            dicha función se ha ejecutado o no. De esta forma almacenamos (en este ejemplo usamos un array)
                            la información y si la función ha sido ejecutada con anterioridad, no la volvemos a ejecutar.
                        </p>
                        <p>
                            De esta forma ahorramos recursos y mejoramos la experiencia del usuario reduciendo de esta forma
                            los tiempos de carga y el rendimiento de nuestra aplicación.
                        </p>
                    </section>
                    <section id="consideracion">
                        <h1 className="text-warning">
                            Otra de las cosas que hay que tene en cuenta en el caso de <code>React</code> es que hay un hook{" "}
                            <code>useMemo</code>
                            que nos permite trabajar con esta caracteristica
                        </h1>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Memoization;
