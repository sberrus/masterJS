import React, { useState } from "react";
import Alerts from "../Alerts/Alerts";
import GaleriaDinamica from "./galeriaDinamica.jsx";

const ApiFileReader = () => {
    const [fileReaderRes, setFileReaderRes] = useState(null);
    const [multiplefileReaderRes, setMultiplefileReaderRes] = useState([]);

    // Usando API File Reader
    const leerTextoArchivo = (archivo) => {
        const reader = new FileReader(); //Creamos un nuevo objeto de tipo FileReader()
        reader.readAsText(archivo); //usamos el método readAsText() y enviamos como argumento la respuesta del input
        reader.addEventListener("load", (e) => {
            //mostramos en consola la respuesta del evento de la API
            console.log(e);
            console.log(JSON.parse(e.currentTarget.result)); //leemos un objeto que esta dentro de un archivo .txt y lo parseamos para poder usarlo dentro de nuestro sitio web.
            setFileReaderRes(e.currentTarget.result);
        });
    };

    //Leyendo Multiples Archivos
    const leerMultiplesArchivos = (archivos) => {
        let multArr = [];
        for (let i = 0; i < archivos.length; i++) {
            const reader = new FileReader();
            reader.readAsText(archivos[i]);
            reader.addEventListener("load", (e) => {
                console.log(JSON.parse(e.currentTarget.result));
                multArr.push(JSON.parse(e.currentTarget.result));
            });
        }
        setMultiplefileReaderRes(multArr);
    };

    //Leyendo archivos multimedia
    const leerMultimedia = (archivo) => {
        const reader = new FileReader();
        reader.readAsDataURL(archivo);
        reader.addEventListener("load", (e) => {
            let newImg = `<img src='${e.currentTarget.result}'>`;
            document.querySelector(".resultado").innerHTML += newImg;
            console.log(e.currentTarget.result);
        });
    };

    return (
        <div>
            <div className="container" id="header">
                <Alerts alert={"primary"} msg={"texto de prueba"} />
            </div>
            <div id="body">
                <h1 className="display-3">API File Reader</h1>
                <div id="content">
                    <section>
                        <article>
                            <p>
                                File Reader es una API que nos permite leer archivos externos y tratarlos dentro de nuestro
                                sitio web.
                            </p>
                            <p>
                                Este es un objeto basado en eventos que nos permite interactuar con los archivos que
                                recibimos desde fuera de nuestro sitio web.
                            </p>
                            <button
                                className="btn btn-warning"
                                onClick={() => {
                                    console.log(new FileReader());
                                }}
                            >
                                Ver FileReader en consola
                            </button>
                            <p>
                                Como se puede ver en la consola, el objeto tiene unos eventListeners que sirven para realizar
                                ciertas acciones al momento de interactuar con esta API.
                            </p>
                            <span>Usar el siguiente archivo</span>
                            <input
                                type="file"
                                id="archivo"
                                onChange={(e) => {
                                    console.log(e.target.files[0]); // podemos usar esta forma para acceder al archivo
                                }}
                            />
                            <p>
                                Como se puede observar en consola, el input devuelve unas propiedades con información
                                relacionada al archivo recibido.
                            </p>
                            <ul>
                                <li>
                                    <h5>lastModified</h5>
                                    <p>
                                        Esta propiedad devuelve en <code>UNIX</code> la ultima modificación del archivo.
                                    </p>
                                </li>
                                <li>
                                    <h5>lastModifiedDate</h5>
                                    <p>
                                        Esta propiedad devuelve la fecha de la ultima modificaci'on pero en formato de texto
                                        UTC.
                                    </p>
                                </li>
                                <li>
                                    <h5>name</h5>
                                    <p>Devuelve el nombre del archivo recibido.</p>
                                </li>
                                <li>
                                    <h5>size</h5>
                                    <p>
                                        Devuelve un <code>int</code> con el peso del archivo en <code>bytes</code>
                                    </p>
                                </li>
                                <li>
                                    <h5>type</h5>
                                    <p>Devuelve el tipo de archivo (MIME type) al que se esta accediendo</p>
                                </li>
                                <li>
                                    <h5>webkitRelativePath</h5>
                                    <p>?</p>
                                </li>
                            </ul>
                            <h3>Accediendo al texto del archivo</h3>
                            <p>
                                Para acceder al texto del archivo tenemos que hacer uso del método <code>readAsText()</code>{" "}
                                de la API.
                            </p>
                            <input
                                type="file"
                                id="archivo"
                                onChange={(e) => {
                                    leerTextoArchivo(e.target.files[0]); //Enviamos la respuesta del input a la función que usará la API
                                }}
                            />
                            {fileReaderRes !== null && (
                                <ul>
                                    <li>
                                        <p className="mt-3 fw-bolder">{fileReaderRes}</p>
                                    </li>
                                </ul>
                            )}
                            <h3 className="mt-5">Accediendo a multiples archivos</h3>
                            <p>
                                Para acceder al texto del archivo tenemos que hacer uso del método <code>readAsText()</code>{" "}
                                de la API.
                            </p>
                            <p>
                                La diferencia es que en el input debemos indicar que debe recibir varios archivos con el
                                atributo <code>multiple</code> y al momento de acceder a los elementos que devuelve el evento
                                de <code>FileReader</code> tenemos que recorrer el arrary que nos devuelve.
                            </p>
                            <input
                                type="file"
                                id="archivo"
                                multiple
                                onChange={(e) => {
                                    leerMultiplesArchivos(e.target.files); //Enviamos la respuesta del input a la función que usará la API
                                }}
                            />
                            <ul>
                                {multiplefileReaderRes.length > 0 &&
                                    multiplefileReaderRes.map((item, index) => (
                                        //
                                        <li key={index}>{item.data}</li>
                                    ))}
                            </ul>
                            <h3 className="mt-3">Accediendo a archivos multimedia</h3>
                            <p>A continuación vamos a acceder a archivos multimedia con el uso de la API FileReader</p>
                            <p>
                                Para ello, debemos hacer uso del método <code>readAsDataURL()</code> para que la respuesta de
                                esta sea una url que podamos usar. De esta forma podemos trabajar con url y poder utilizar el
                                recurso dentro de nuestra app.
                            </p>
                            <input
                                type="file"
                                id="archivo"
                                onChange={(e) => {
                                    leerMultimedia(e.target.files[0]);
                                    console.log(e.target.files[0]);
                                }}
                            />
                            <div className="resultado"></div>
                        </article>
                    </section>
                    <GaleriaDinamica />
                </div>
            </div>
        </div>
    );
};

export default ApiFileReader;
