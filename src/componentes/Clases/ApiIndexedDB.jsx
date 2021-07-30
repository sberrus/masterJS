import React from "react";
import Alerts from "../Alerts/Alerts";
import CRUD from "./CRUDIndexedDB";

const IndexdedDB = () => {
    const IDBRequest = indexedDB;

    const crearBBDD = () => {
        //Solicitud de acceso a la BBDD
        const consulta = IDBRequest.open("primeraDDBB"); //"consulta" no es la BBDD, es la consulta la cual dispara los eventos que nos permiten acceder a las BBDD.

        //Evento que se dispara si no existe ninguna BBDD creada por el método .open(BBDD_NAME)
        consulta.addEventListener("upgradeneeded", () => {
            console.log("Tabla Nueva Generada");
            //El método result es el que devuelve la BBDD a la que hemos pedido acceso mediante la API.
            const db = consulta.result;
            //Creamos un almacen/documento dentro de la BBDD.
            db.createObjectStore("nombres", {
                autoIncrement: true,
            });
        });

        //Evento de solicitud exitosa
        consulta.addEventListener("success", (e) => {
            console.log("Consulta generada correctamente");
        });

        //Evento de error en solicitud
        consulta.addEventListener("error", (e) => {
            console.log("Ha habido un error al ver/crear la BBDD");
        });
    };

    return (
        <div>
            <div className="container" id="header">
                <Alerts
                    alert={"warning"}
                    msg={
                        "Sinceramente es un poco lio este apartado. Recomiendo ir al código e ir leyendo los conceptos a la par que se va leyendo esta pequeña guía"
                    }
                />
            </div>
            <div id="body">
                <h1 className="display-3">Indexed DB</h1>
                <div id="content">
                    <section>
                        <article>
                            <p>
                                <code>IndexedDB</code> es una API que nos permite hacer uso de una BBDD interna del navegador
                                bastante sencilla.
                            </p>
                            <p>
                                En comportamiento es bastante similar a <code>LocalStorage</code>, es asíncrona, orientada a
                                objetos y trabaja mediante eventos del DOM.
                            </p>
                            <p>
                                Es una base de datos <code>noSQL</code> bastante similar a <code>MongoDB</code>
                            </p>
                            <button
                                className="btn btn-large btn-outline-light"
                                onClick={() => {
                                    console.log(IDBRequest);
                                }}
                            >
                                Ver IndexedDB en consola
                            </button>
                        </article>
                        <article>
                            <h2>Métodos de IndexedDB</h2>
                            <p>
                                IndexedDB nos devuelve una <code>factory</code> que nos permite interactuar con esta API.
                            </p>
                            <p>Esta consta de diversos métodos para poder trabajar con ella.</p>
                            <ul>
                                <li>
                                    <h5>
                                        <code>IndexedDB</code>.
                                        <code className="arrowFunction">open( BBDD_NAME , VERSION )</code>
                                    </h5>
                                    <p>
                                        Este método nos permite visualizar una bbdd ya existente, pero en el caso de que no
                                        exista, este método crea dicha bbdd con el nombre que le pasemos como argumento.
                                    </p>
                                </li>
                            </ul>
                            <button
                                className="btn btn-large btn-outline-light"
                                onClick={() => {
                                    crearBBDD();
                                }}
                            >
                                Crear BBDD
                            </button>
                        </article>
                        <article>
                            <h3>Eventos de IndexedDB</h3>
                            <p>
                                Como se ha dicho esta bbdd es asincrona y trabaja con eventos del DOM para acceder a ella.
                                Esto nos permite utilizar su almacenamiento y evitar que el navegador se bloquee en el caso
                                de que haya mucha información por procesar.
                            </p>
                            <h4>Eventos</h4>
                            <ul>
                                <li>
                                    <h5>success</h5>
                                    <p>
                                        Este evento se dispara al momento de que se cree o se haya leido correctamente la
                                        bbdd. Esto sabiendo el comportamiento del método{" "}
                                        <code className="arrowFunction">.open()</code> explicado anteriormente.
                                    </p>
                                </li>
                                <li>
                                    <h5>error</h5>
                                    <p>Este se dispara al momento de que haya algun error.</p>
                                </li>
                                <li>
                                    <h5>upgradeneeded</h5>
                                    <p>Este evento se dispara solo si la tabla a consultar no ha sido creada.</p>
                                </li>
                            </ul>
                        </article>
                        <article>
                            <h2>Almacenes de Datos</h2>
                            <p>
                                Se le considera almacen a la arquitectura dentro de IndexedDB la cual nos permite almacenar
                                datos dentro de esta.
                            </p>
                            <p>La arquitectura es similar a la de las BBDD NoSQL como siendo esta objetos</p>
                            <h3>Acceso a la BBDD</h3>
                            <p>
                                Después de crear la solicitud y los eventos tenemos que llamar a la respuetsa de la bbdd,
                                esto lo hacemos mediante el método <code className="arrowFunction">.result()</code> de la
                                api. Este método nos permite ver los documentos/almacenes que tiene dentro la BBDD.
                            </p>
                            <p>
                                Este método se debe llamar en el evento <code>upgradeneeded</code> el cual usaremos para ver
                                los almacenes/documentos que contiene la BBDD.
                            </p>
                            <h3>Métodos para los almacenes</h3>
                            <p>
                                Cuando tenemos el <code className="arrowFunction">.result()</code> dentro de una variable,
                                ahora podemos aplicarle los distintos métodos para trabajar con esta.
                            </p>
                            <ul>
                                <li>
                                    <hr />
                                    <h5>result.createObjectStore(KEY, &#123;CONFIG&#125;)</h5>
                                    <p>Este sirve para crear un almacen dentro de la BBDD indicada.</p>
                                    <p>A este método se le envian 2 argumentos:</p>
                                    <ul>
                                        <li>
                                            <h5>KEY:</h5>
                                            Este argumento indica la key que identifica al documento en cuestión.
                                        </li>
                                        <li>
                                            <h5>&#123;CONFIG&#125;</h5>
                                            <p>
                                                El segundo argumento es un objeto con la configuración de la bbdd, esta
                                                configuración nos permite darle instrucciones para cuando se vayan
                                                incorporando nuevos elementos al documento.
                                            </p>
                                            <p>Las configuraciones son las siguientes:</p>
                                            <ul>
                                                <li>
                                                    <h5>autoIncrement: true/false</h5>
                                                    <p>
                                                        Esta config nos permite asignarle un ID autoincremental para que cada
                                                        registro tenga un ID unico para luego poder consultar.
                                                    </p>
                                                </li>
                                                <li>
                                                    <h5>keyPath</h5>
                                                    <p>
                                                        <span className="text-warning">
                                                            {" "}
                                                            KEYPATH NO LO VAMOS A VER EN ESTE CURSO
                                                        </span>
                                                        , la config keyPath nos sirve para poder utilizar valores como
                                                        cadenas de texto para identificar las entradas.
                                                    </p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <hr />
                                    <h5>result.transaction(KEY,MODE)</h5>
                                    <p>
                                        Este método nos permite realizar operaciones dentro de un documento. A este método se
                                        le envian como argumentos:
                                    </p>
                                    <ul>
                                        <li>
                                            <h5>KEY:</h5>
                                            <p>
                                                La KEY es el identificador del documento al cual queremos realizar una
                                                transacción.
                                            </p>
                                        </li>
                                        <li>
                                            <h5>MODE:</h5>
                                            <p>
                                                El argumento MODE nos permite indicarle a la transacción, en que MODO
                                                queremos acceder al documento.
                                            </p>
                                            <p>Los modos son los siguientes:</p>
                                            <ul>
                                                <li>
                                                    <h5>readonly</h5>
                                                    <p>Este nos permite solo observar lo que contiene esta tabla.</p>
                                                </li>
                                                <li>
                                                    <h5>readwrite</h5>
                                                    <p>Este modo nos permite leer y escribir en la tabla.</p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <h3>
                                <code>transaction.</code>
                                <code className="arrowFunction">objectStore(STORE)</code>
                            </h3>
                            <p>
                                Luego de haber configurado la transacción accedemos a la store/documento al cual deseamos
                                realizar las <code>OPERACIONES</code>.
                            </p>
                            <p>
                                Digamos que esto es para realizar un scope a un documento en especifico para poder
                                interactuar con el.
                            </p>
                            <h3>Operaciones</h3>
                            <p>
                                Luego de haber generado una consulta y abierto una transacción podemos realizar las
                                operaciones para interactuar con la BBDD como crear un nuevo registro, leerlos, eliminarlos
                                etc...
                            </p>
                            <p>
                                Al igual que al generar una consulta, las operaciones generan eventos al momento de haberse
                                realizado correctamente por lo que luego de hacer cualquiera de estas tenemos que aplicarles
                                un <code>transaction</code>.
                                <code className="arrowFunction">addEventListener("complete", fn())</code> a la transacción
                                para que disparé algun event al momento de haberse culminado.
                            </p>
                            <ul>
                                <hr />
                                <h3>Agregar Elementos (CREATE)</h3>
                                <li>
                                    <h5>
                                        <code>store</code>
                                        <code className="arrowFunction">.add(ELEMENTO)</code>
                                    </h5>
                                    <p>De esta manera podemos insertar un registro dentro del documento especificado.</p>
                                    <h6>
                                        Evento<code>(complete)</code>
                                    </h6>
                                    <p>
                                        Como se ha indicado anteriormente, cada operación debe tener su evento para poder
                                        acceder a los resultados de la misma. Cada operacion tiene su evento especifico. para
                                        este caso el evento es "complete"
                                    </p>
                                </li>
                                <li>
                                    <hr />
                                    <h3>Leer elementos (READ)</h3>
                                    <h5>
                                        <code className="var">cursor</code> =<code>store</code>
                                        <code className="arrowFunction">.openCursor()</code>
                                    </h5>
                                    <p>Esta operación nos permite acceder y leer la bbdd.</p>
                                    <h6>
                                        Evento<code>(success)</code>
                                    </h6>
                                    <p>
                                        Dentro de la función accedemos al <code className="var">cursor.result.value</code>{" "}
                                        que será el que nos va a mostrar los elementos dentro de nuestra ddbb. Esto devolverá
                                        un solo elemento si no incorporamos el método{" "}
                                        <code className="arrowFunction">.continue()</code> siendo este el que nos permite
                                        acceder al resto de elementos dentro de nuestra DDBB.
                                    </p>
                                    <h6>
                                        <code className="var">
                                            cursor.result<code className="arrowFunction">.continue()</code>
                                        </code>
                                    </h6>
                                    <p>
                                        Este método se llama para poder ver todos los elementos dentro de nuestra DDBB, de lo
                                        contrario, solo mostrará el primer elemento que esta contenga.
                                    </p>
                                </li>
                                <li>
                                    <hr />
                                    <h3>Modificar Elemento (UPDATE)</h3>
                                    <h5>store<code className="arrowFunction">.put(KEY,OBJETO)</code></h5>
                                    <p>
                                        Tomando en cuenta la key, este elemento crea/modifica un elemento dentro de nuestra bbdd. En el caso de que la key exista, ese modificará el valor de dicho registro, sino, creará dicho registro e insertará este valor.
                                    </p>
                                </li>
                            </ul>
                        </article>
                        <article className="mt-5">
                            <CRUD />
                        </article>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default IndexdedDB;
