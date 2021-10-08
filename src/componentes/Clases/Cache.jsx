import React from "react";
import Alerts from "../Alerts/Alerts";

const Cache = () => {
    return (
        <div>
            <div className="container" id="header">
                <Alerts
                    alert={"primary"}
                    msg={"Se usaran archivos estáticos para observar el uso de la memoria cache correctamente"}
                />
            </div>
            <div id="body">
                <h1 className="display-3">Cache</h1>
                <div id="content">
                    <section id="introducción">
                        <p>
                            El cache es una memoria a corto plazo que nos permite ahorrar recursos al no solicitar
                            información innecesariamente.
                        </p>
                        <h3>Proceso de llamadas de recursos en sitios web.</h3>
                        <p>
                            Cuando entramos a una página web, el navegador solicita todos los archivos necesarios que usa la
                            página para que esta pueda mostrarse y funcionar correctamente como los css, js, los recursos
                            audiovisuales, etc...
                        </p>
                        <p>
                            El problema con lo anterior es que cada vez que el usuario acceda a nuestro sitio web, este
                            descargará nuevamente los archivos las veces que este vuelva a acceder a nuestro sitio, siendo en
                            muchos casos contraproducente porque puede erradicar en problemas de rendimiento y sabemos que el
                            usuario al entrar a una página web lenta, SE VA.
                        </p>
                        <h3>Cachear sitio o archivos estáticos.</h3>
                        <p>
                            Para solucionar lo explciado anteriormente utilizamos la memoria cache. Esta nos permite
                            almacenar ciertos archivos en el navegador del usuario para que en vez de solicitar los archivos
                            a un servidor, esperar que se descarguen y luego ejecutarlos, el navegador ya tenga dichos
                            archivos, ahorrandonos todo el proceso de descarga del mismo
                        </p>
                        <p>
                            Esto nos ayuda a mejorar el rendimiento de nuestro sitio web y a crear páginas web más rápidas.
                        </p>
                        <h3>Consideraciones</h3>
                        <p>
                            Algo que hay que tener en cuenta es que hay que manejar de manera correcta el uso de la memoria
                            cache, porque al momento de que hagamos cambios en el servidor el navegador no va a descargar
                            estos archivos, va a seguir utilizando los que tenga en la memoria cache.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Cache;
