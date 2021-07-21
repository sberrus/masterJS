import React from "react";
import Alerts from "../Alerts/Alerts";
import "./CustomStyles/DragnDrop.css";
import Practica from "./DragAndDrop";
const ApiDragDrop = () => {
    return (
        <div>
            <div className="container" id="header">
                <Alerts alert={"primary"} msg={"texto de prueba"} />
            </div>
            <div id="body">
                <h1 className="display-3">API DRAG & DROP</h1>
                <div id="content">
                    <section id="Intro">
                        <article>
                            <h2>Descripción</h2>
                            <p>
                                Esta es la tipica API de arrastrar y soltar cosas dentro de la web o cuando arrastramos un
                                archivo dentro de la web para que este interactue con la misma.
                            </p>
                            <p>
                                El comportamiento de esta api lo podemos observar en muchos sitios o cuando intentamos
                                arrastrar un elemento como una imagen dentro de html, cambiando el cursor y la animación en
                                ciertos elementos.
                            </p>
                            <h2>Manejo de eventos</h2>
                            <p>
                                La API de Drag&Drop tiene sus propios eventos que nos permiten realizar acciones en base a
                                estos.
                            </p>
                            <h3>Lista de Eventos del objeto</h3>
                            <p>Los eventos del objeto son aquellos que se aplican al objeto que estamos "agarrando"</p>
                            <ul>
                                <li>
                                    <h5>dragstart</h5>
                                    <p>
                                        Este se dispara justo al momento de hacer click en el elemento y <b>ARRASTRARLO</b> (
                                        <b>
                                            No confundir con mousedown ya que este se inicial al momento de hacer click en el
                                            elemento
                                        </b>
                                        )
                                    </p>
                                </li>
                                <li>
                                    <h5>drag</h5>
                                    <p>
                                        Este evento se dispara mientras tengamos el elemento en "drag" este se dispará
                                        continuamente mientras tenemos el objeto con el click presionado y lo seguimos
                                        arrastrando.
                                    </p>
                                </li>
                                <li>
                                    <h5>dragend</h5>
                                    <p>
                                        Este último evento se dispara al momento de soltar el elemento que tenemos en "drag"
                                    </p>
                                </li>
                            </ul>
                            <h3>Eventos de la zona de drop</h3>
                            <p>
                                Estos eventos se disparan cuando un elemento en "drag" interactua con una zona de "drop".
                                Siendo la zona de "drop" la que contendrá la acción al momento de soltar elementos encima de
                                está
                            </p>
                            <ul>
                                <li>
                                    <h5>dragenter</h5>
                                    <p>
                                        Este evento se dispara cuando un elemento en "drag" entra dentro de una zona "drop".
                                    </p>
                                </li>
                                <li>
                                    <h5>dragover</h5>
                                    <p>
                                        Este evento se dispara constantemente cuando un elemento "drag" esta encima de un
                                        elemento drop, pero sin soltar el mismo.
                                    </p>
                                    <p>
                                        Este evento tiene una particularidad, este se dispara siempre que un elemento "drag"
                                        se superposicione encima de uno "drop", pero este a su vez no permite que el evento{" "}
                                        <b>drop</b> se dispare correctamente. Para evitar este comportamiento hay que indicar
                                        en el evento un <code>preventDefault</code> para que este no entre en conflicto con
                                        el evento <b>drop</b>.
                                    </p>
                                </li>
                                <li>
                                    <h5>drop</h5>
                                    <p>
                                        Este evento se dispara cuando "soltamos" el elemento "drag" encima del elemento
                                        "drop" haciendo que se dispare el evento.
                                    </p>
                                </li>
                                <li>
                                    <h5>dragleave</h5>
                                    <p>Este evento se dispara cuando un elemento "drag" sale del elemento "drop"</p>
                                </li>
                            </ul>

                            <p>Usaremos la siguiente imagen para demostrar el comportamiento de esta API</p>
                            <div>
                                <div
                                    className="circulo"
                                    onDragStart={() => {
                                        console.log("1");
                                    }}
                                    onDrag={() => {
                                        console.log("2");
                                    }}
                                    onDragEnd={() => {
                                        console.log("3");
                                    }}
                                ></div>
                                <div
                                    className="rectangulo"
                                    onDragEnter={() => {
                                        console.log("Entraste");
                                    }}
                                    onDragOver={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        console.log("Encima");
                                    }}
                                    onDrop={() => {
                                        console.log("Soltaste");
                                    }}
                                    onDragLeave={() => {
                                        console.log("Saliste");
                                    }}
                                ></div>
                            </div>
                            <h3 className="mt-3">Pasar datos de un "drag" a un "drop"</h3>
                            <p>
                                Para pasar datos de un drag a un drop tenemos que hacer uso de la propiedad{" "}
                                <i>
                                    <b>dataTransfer</b>
                                </i>
                                que es la encargada de transmitir los datos de un elemento a otro.
                            </p>
                            <h5>setData("Key","value")</h5>
                            <p>
                                setData() es un método de la propiedad dataTransfer que nos permite enviar información como
                                un par propiedad-valor que nos permite pasar elementos de un drag a un drop
                            </p>
                            <h5>getData("key")</h5>
                            <p>
                                Con el método getData de la propiedad dataTransfer, podemos obtener los datos que envia un
                                drag hacia un drop. Para que envie la información las "keys" deben ser iguales debido a que
                                esta es la forma en la que el elemento drop lee la información del drag.
                            </p>
                            <div>
                                <div
                                    className="circulo"
                                    onDragStart={(e) => {
                                        //Enviamos los datos con dataTransfer y se crea un espacio en memoria similar a como almacena los datos la API local/sessionStorage

                                        e.dataTransfer.setData("clase", e.target.className);
                                        /* console.log(e.dataTransfer.getData("clase")); */ //mostramos en consola con el método getData("key","value") los datos de la key clase.
                                    }}
                                ></div>
                                <div
                                    className="rectangulo"
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={(e) => {
                                        console.log(e.dataTransfer.getData("clase")); //cuando ocurre el drop, obtenemos el valor de la prop "clase" que nos envia el drag
                                    }}
                                ></div>
                            </div>
                        </article>
                        <article className="mt-3">
                            <Practica />
                        </article>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ApiDragDrop;
