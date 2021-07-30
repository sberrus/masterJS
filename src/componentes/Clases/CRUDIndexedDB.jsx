import React, { useEffect, useState } from "react";

const CRUDIndexedDB = () => {
    const [nombre, setNombre] = useState("");
    const [nuevoNombre, setNuevoNombre] = useState("");
    const [key, setKey] = useState(0);
    const [deleteKey, setDeleteKey] = useState(0);
    const [DDBB, setDDBB] = useState(null); //consulta
    useEffect(() => {
        const DDBB = indexedDB.open("CRUD"); //creamos consulta y almacenamos en el hook la consulta
        setDDBB(DDBB); //almacenamos la consulta en un hook para poder acceder a este en todo el componente
        DDBB.addEventListener("upgradeneeded", () => {
            const documents = DDBB.result; //capturamos los documentos
            documents.createObjectStore("CRUD", { autoIncrement: true }); //creamos un documento para el CRUD
        });
        DDBB.addEventListener("success", () => {
            console.log("Consulta Exitosa!");
        });
        DDBB.addEventListener("error", () => {
            console.log("Hay un error en su consulta");
        });
    }, []);

    const crearElemento = (e) => {
        e.preventDefault();
        //obtenemos los docs de la bbdd que deseamos acceder
        const db = DDBB.result;
        //configuramos la transacción
        const dbtransaction = db.transaction("CRUD", "readwrite");
        //asignamos un scope para la transacción
        const objectStore = dbtransaction.objectStore("CRUD");
        //agregamos al store lo que nos envia el usuario
        objectStore.add(nombre);
        //evento para cuando se haya completado la transacción.
        dbtransaction.addEventListener("complete", () => {
            console.log("objeto añadido correctamente");
            setNombre("");
        });
    };

    //Transacción para ver los elementos de nuestra DDBB.
    const leerElementos = () => {
        //obtenemos los docs de la bbdd que deseamos acceder
        const db = DDBB.result;

        //configuramos la transacción
        const dbtransaction = db.transaction("CRUD", "readonly");

        //asignamos un scope para la transacción
        const objectStore = dbtransaction.objectStore("CRUD");

        //Operación para leer los datos.
        const cursor = objectStore.openCursor();

        //evento
        cursor.addEventListener("success", () => {
            if (cursor.result) {
                console.log(cursor.result.value);
                cursor.result.continue();
            } else {
                console.log("-- FIN BBDD --");
            }
        });
    };

    const modificarElemento = () => {
        //obtenemos los docs de la bbdd que deseamos acceder
        const db = DDBB.result;
        //configuramos la transacción
        const dbtransaction = db.transaction("CRUD", "readwrite");
        //asignamos un scope para la transacción
        const objectStore = dbtransaction.objectStore("CRUD");

        //agregamos al store lo que nos envia el usuario
        objectStore.put(nuevoNombre, parseInt(key));
        //evento para cuando se haya completado la transacción.
        dbtransaction.addEventListener("complete", () => {
            console.log("Objeto Modificado Correctamente");
            setNuevoNombre("");
            setKey(0);
        });
    };

    const eliminarElemento = () => {
        //obtenemos los docs de la bbdd que deseamos acceder
        const db = DDBB.result;
        //configuramos la transacción
        const dbtransaction = db.transaction("CRUD", "readwrite");
        //asignamos un scope para la transacción
        const objectStore = dbtransaction.objectStore("CRUD");

        //agregamos al store lo que nos envia el usuario
        objectStore.delete(parseInt(deleteKey));
        //evento para cuando se haya completado la transacción.
        dbtransaction.addEventListener("complete", () => {
            console.log("Objeto Eliminado Correctamente");
            setDeleteKey(0);
        });
    };

    return (
        <div>
            <h2>
                Prática CRUD con IndexedDB{" "}
                <a
                    href={`https://github.com/sberrus/masterJS/blob/master/src/componentes/Clases/CRUDIndexedDB.jsx`}
                    rel="noreferrer"
                    target="_BLANK"
                >
                    <i className="bi bi-github text-white fs-40"></i>
                </a>
            </h2>
            <p>Haremos un CRUD simple para mostrar como trabajar con IndexedDB</p>
            <div className="row">
                <form
                    className="col-4"
                    action=""
                    onSubmit={(e) => {
                        crearElemento(e);
                    }}
                >
                    <input
                        type="text"
                        value={nombre}
                        placeholder="nuevo nombre"
                        onChange={(e) => setNombre(e.target.value)}
                        className="d-block mb-2"
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Agregar Elemento
                    </button>
                </form>
                <div className="col-4">
                    <input
                        type="number"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        className="d-block mb-2 col-3"
                    />
                    <input
                        type="text"
                        placeholder="Nuevo Nombre"
                        value={nuevoNombre}
                        onChange={(e) => setNuevoNombre(e.target.value)}
                        className="d-block mb-2"
                    />
                    <button className="btn btn-outline-success" onClick={modificarElemento}>
                        Actualizar Nombre
                    </button>
                </div>
                <div className="col-4">
                    <input
                        type="number"
                        value={deleteKey}
                        onChange={(e) => setDeleteKey(e.target.value)}
                        className="d-block mb-2 col-3"
                    />
                    <button className="btn btn-outline-danger mt-3" onClick={eliminarElemento}>
                        Eliminar Elemento
                    </button>
                </div>
                <button className="btn btn-outline-success" onClick={leerElementos}>
                    Leer Elementos
                </button>
            </div>
        </div>
    );
};

export default CRUDIndexedDB;
