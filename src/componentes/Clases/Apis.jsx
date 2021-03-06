import React from "react";
import Alerts from "../Alerts/Alerts";

const Apis = () => {
    return (
        <div>
            <div className="container" id="header">
                <Alerts alert={"success"} msg={"Abrir Consola para ver la clase"} />
            </div>
            <div id="body">
                <h1 className="display-3">Usando APIS del navegador con JavaScript</h1>
                <div id="content" className="mt-5">
                    <div id="intro">
                        <h2>¿Qué son las apis?</h2>
                        <p>
                            Las APIS son funcionalidades que nos permiten acceder a ciertas caracteristicas que tienen los
                            navegadores{" "}
                            <span className="text-info">
                                Hay que estar pendientes de la compatibilidad con ciertos navegadores a la hora de usar las
                                APIS.
                            </span>
                        </p>
                    </div>
                    <section>
                        <article>
                            <h2 className="display-3 text-warning">API Date</h2>
                            <p>La api Date, es una API que nos permite acceder a la hora local del navegador.</p>
                            <button
                                className="btn btn-outline-success"
                                onClick={() => {
                                    const fecha = Date;
                                    console.log(fecha);
                                    console.log(fecha());
                                }}
                            >
                                Mostrar Date()
                            </button>
                            <p>
                                Como puede observarse en la consola, la API devuelve información variada relacionada con las
                                fechas y sus formatos, además de mostrar la hora y el GMT correspondiente.
                            </p>
                            <p>
                                Esta API devuelve la fecha del sistema en el que se esta corriendo el navegador. Devuelve la
                                fecha local del ordenador usuario.
                            </p>
                            <p>
                                Además esta API nos ofrece métodos que nos permiten acceder a información más concreta acerca
                                de la fecha y las horas.
                            </p>
                            <small className="text-info">
                                Hacer hover en los botones para ver la descripción del método.
                            </small>
                            <div>
                                <h5>Obtener datos relacionados con la Fecha</h5>
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => {
                                        const fecha = new Date();
                                        console.log(fecha.getDate());
                                    }}
                                    title="Devuelve un INT con el día del mes en el que se esta en ese momento"
                                >
                                    getDate()
                                </button>
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => {
                                        const fecha = new Date();
                                        console.log(fecha.getDay());
                                    }}
                                    title="Devuelve un INT con el día de la semana. Siendo el domingo 0, lunes 1, martes 2 ... sabado 6"
                                >
                                    getDay()
                                </button>
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => {
                                        const fecha = new Date();
                                        console.log(fecha.getMonth());
                                    }}
                                    title="Devuelve un INT con el mes. Siendo enero 0, febrero 1, marzo 2, ... diciembre 11"
                                >
                                    getMonth()
                                </button>
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => {
                                        const fecha = new Date();
                                        console.log(fecha.getYear());
                                    }}
                                    title="Devuelve un INT con el año actual - 1900. Por lo que el año 2021 = 121; porque 121+1900 = 2021"
                                >
                                    getYear()
                                </button>
                            </div>
                            <div>
                                <h5>Obtener datos relacionados con las horas</h5>
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => {
                                        const fecha = new Date();
                                        console.log(fecha.getHours());
                                    }}
                                    title="Devuelve un INT con la hora actual"
                                >
                                    getHours()
                                </button>
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => {
                                        const fecha = new Date();
                                        console.log(fecha.getMinutes());
                                    }}
                                    title="Devuelve un INT con la hora actual"
                                >
                                    getMinutes()
                                </button>
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => {
                                        const fecha = new Date();
                                        console.log(fecha.getSeconds());
                                    }}
                                    title="Devuelve un INT con la hora actual"
                                >
                                    getSeconds()
                                </button>
                            </div>
                            <h3 className="mt-4">Parámetros del objeto Date(miliseconds)</h3>
                            <p>
                                El objeto Date() puede recibir argumentos. Este recibe un INT que representará la cantidad de
                                milisegundos transcurridos desde el 00:00:00 UTC del 01/01/1970. Este INT se conoce como{" "}
                                <span className="text-info">UNIX Time</span>
                            </p>
                            <p>
                                Si le pasamos 10000 como argumento, el objeto Date() devolverá la fecha indicada arriba +
                                10000 milisegundos = 10 segundos.
                            </p>
                            <button
                                className="btn btn-outline-success"
                                onClick={() => {
                                    const fecha = new Date(10000);
                                    console.log(fecha);
                                }}
                            >
                                Ver Date(10000)
                            </button>
                            <h3 className="mt-3">Enviar como Argumento fechas</h3>
                            <p>También podemos pasarle como argumentos fechas con el siguiente formato Date(año,mes,dia)</p>
                            <button
                                className="btn btn-outline-success"
                                onClick={() => {
                                    const fecha = new Date(2015, 2, 10);
                                    console.log(fecha);
                                }}
                            >
                                Ver Date(2015, 2, 10)
                            </button>
                            <h3 className="mt-3">Usar Date.now()</h3>
                            <p>
                                De esta forma obtenemos el UNIX TIME correspondiente al momento preciso en el que se invoca a
                                dicho método
                            </p>
                            <p>
                                Hay que tener en cuenta que es un método estático y tenemos que acceder a el sin hacer uso
                                del new
                            </p>
                            <button
                                className="btn btn-outline-success"
                                onClick={() => {
                                    const fechaUT = Date.now();
                                    const fechaParseada = new Date(fechaUT);
                                    console.log(fechaUT);
                                    console.log(`Parseado: ${fechaParseada}`);
                                }}
                            >
                                Ver Date.now()
                            </button>
                            <h3 className="mt-3">Buscar más</h3>
                            <p>
                                Para seguir investigando acerca del resto de funciones que tiene la API Date() ir al
                                siguiente enlace de{" "}
                                <a
                                    href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date"
                                    rel="noreferrer"
                                    target="_BLANK"
                                >
                                    Mozilla Developer Network
                                </a>
                            </p>
                            <h5 className="text-info fw-light">
                                Se ha incorporado el reloj y la fecha en la cabecera del documento
                            </h5>
                        </article>
                        <article>
                            <h2 className="display-3 text-warning">Api LocalStorage y SessionStorage</h2>
                            <p>
                                Estas apis nos permiten usar la BBDD de almacenamiento local del navegador. Aunque son de
                                facto lo mismo hay una caracteristica que las diferencia:
                            </p>
                            <h5>LocalStorage</h5>
                            <p>
                                Esta permite acceder, consultar y modificar la bbdd local del navegador y mantener los datos
                                inclusive si el usuario cierra el navegador.
                            </p>
                            <button
                                className="btn btn-outline-light my-3"
                                onClick={() => {
                                    console.log(localStorage);
                                }}
                            >
                                Ver LocalStorage en consola
                            </button>
                            <h5>SessionStorage</h5>
                            <p>
                                Como lo indica su propio nombre, la SessionStorage permite crear, modificar, consultar y
                                modificar la información de la bbdd local, con la diferencia de que al momento de actualizar
                                el navegador esa información se pierde.
                            </p>
                            <button
                                className="btn btn-outline-light my-3"
                                onClick={() => {
                                    console.log(sessionStorage);
                                }}
                            >
                                Ver SessionStorage en consola
                            </button>
                            <h5>
                                Crear registro{" "}
                                <code>
                                    <code className="arrowFunction">setItem</code>(variable,valor)
                                </code>
                            </h5>
                            <p>
                                Los items dentro del localStorage y sessionStorage son variables por lo cual podremos
                                reescribirlas.
                            </p>
                            <p>Para crear registros en la bbdd local o de sesión, lo hacemos de la siguiente forma.</p>
                            <div className="codeContainer">
                                <code className="var">
                                    localStorage.<code className="arrowFunction">setItem</code>(<code>variable</code>,
                                    <code>valor</code>)
                                </code>
                            </div>
                            <button
                                className="btn btn-outline-light my-3"
                                onClick={() => {
                                    localStorage.setItem("ejemplo", "Hola Mundo!");
                                    console.log(localStorage);
                                }}
                            >
                                Crear registro en localStorage
                            </button>
                            <h5>
                                Obtener registro{" "}
                                <code>
                                    <code className="arrowFunction">getItem</code>(variable)
                                </code>
                            </h5>
                            <p>
                                Para obtener el valor de una variable almacenada en <code>local</code> o <code>session</code>
                                , hacemos uso del método{" "}
                                <code>
                                    <code className="arrowFunction">getItem</code>(variable)
                                </code>
                                , el cual nos devuelve el valor de la key enviada como argumento.
                            </p>
                            <div className="codeContainer">
                                <code className="var">
                                    localStorage.<code className="arrowFunction">setItem</code>(<code>variable</code>,
                                    <code>valor</code>)
                                </code>
                            </div>
                            <button
                                className="btn btn-outline-light my-3"
                                onClick={() => {
                                    localStorage.setItem("ejemplo", "Hola Mundo!");
                                    console.log(localStorage);
                                }}
                            >
                                Ver registros de localStorage
                            </button>
                            <h5>Diferencias entre localStorage y sessionStorage</h5>
                            <p>
                                Como ya se ha indicado la principal diferencia entre estas dos apis es la capacidad que
                                tienen para retener la información. Mientras que sessionStorage solo almacena la información,
                                siempre y cuando el navegador siga abierto, al momento de cerrarlo, lo que este dentro de
                                sessionStorage será eliminado.
                            </p>
                            <p>
                                Por otro lado, localStorage mantiene la información en el navegador a menos que lo eliminemos
                                o que el usuario borre los datos y la cache del navegador.
                            </p>
                            <div id="storageExamples">
                                <div id="localStorageExample">
                                    <button
                                        className="btn btn-outline-success w-100 mb-3"
                                        onClick={() => {
                                            localStorage.setItem("local", "ejemplo localstorage");
                                            console.log(localStorage);
                                        }}
                                    >
                                        Crear Registro <code className="var">localStorage</code>
                                    </button>
                                    <button
                                        className="btn btn-outline-danger w-100"
                                        onClick={() => {
                                            localStorage.clear();
                                            console.log(localStorage);
                                        }}
                                    >
                                        Eliminar Registro <code className="var">localStorage</code>
                                    </button>
                                </div>
                                <div id="sessionStorageExample">
                                    <button
                                        className="btn btn-outline-success w-100 mb-3"
                                        onClick={() => {
                                            sessionStorage.setItem("session", "ejemplo sessionstorage");
                                            console.log(sessionStorage);
                                        }}
                                    >
                                        Crear Registro <code className="var">sessionStorage</code>
                                    </button>
                                    <button
                                        className="btn btn-outline-danger w-100"
                                        onClick={() => {
                                            sessionStorage.clear();
                                            console.log(sessionStorage);
                                        }}
                                    >
                                        Eliminar Registro <code className="var">sessionStorage</code>
                                    </button>
                                </div>
                            </div>
                            <button
                                className="btn btn-outline-light w-100 my-3"
                                onClick={() => {
                                    console.log(sessionStorage);
                                    console.log(localStorage);
                                }}
                            >
                                Ver registros en consola
                            </button>
                            <small className="text-info">Actualizar navegador para ver efecto</small>
                            <h5>
                                Eliminar registro unico <code>storage.removeItem(variable)</code>
                            </h5>
                            <p>
                                Para eliminar un registro unico tenemos que hace uso del método .removeItem(variable) el cual
                                nos permitirá eliminar un valor unico sin alterar el resto.
                            </p>
                            <div className="codeContainer">
                                <code>
                                    localStorage.
                                    <code className="arrowFunction">
                                        removeItem( <code className="var">variable</code> )
                                    </code>
                                </code>
                                <br />
                                <code>
                                    sessionStorage.
                                    <code className="arrowFunction">
                                        removeItem( <code className="var">variable</code> )
                                    </code>
                                </code>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Apis;
