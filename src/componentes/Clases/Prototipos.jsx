import React from "react";

const Prototipos = () => {
    const ejObjeto = {
        nombre: "Objeto de pruebas",
        tipos: {
            string: {},
            int: 1,
            array: [],
            obj: {},
        },
        funcion: function () {
            console.log("método de la función");
        },
    };
    return (
        <div className="container">
            <div className="alert alert-primary d-inline-block p-1" role="alert">
                Clase para ver con la consola abierta
            </div>
            <h1 className="display-3">Clase Prototipos __proto__</h1>
            <p>Primero crearemos un objeto para realizar la demostracion</p>
            <button
                className="btn btn-dark border"
                onClick={() => {
                    console.log(ejObjeto);
                }}
            >
                Mostrar objeto de pruebas en consola
            </button>
            <p>
                Este objeto tiene una propiedad llamada nombre con su valor al que podemos acceder como ya se sabe. Pero además hay otra propiedad heredada llamada{" "}
                <span className="text-info">__proto__</span>.
            </p>
            <p>
                Todos los prototipos heredan el prototipo Object y el prototipo de dato, excepto los objetos que no heredan el prototipo Objetc, estos prototipos contienen todas
                las propiedades y los métodos que contiene este prototipo. Pero ¿Qué es la propiedad <span className="text-info">__proto__</span>?
            </p>
            <h2>__proto__</h2>
            <p>Proto es una propiedad que hereda el objeto cuando es creado y contiene todos los métodos y propiedades del tipo de prototipo con el que estamos trabajando.</p>
            <button
                className="btn btn-dark border"
                onClick={() => {
                    console.log(ejObjeto.__proto__);
                }}
            >
                Mostrar __proto__ del objeto en consola
            </button>
            <p>
                Algo que hay que tomar en cuenta y que es muy útil es que la propiedad <span className="text-info">__proto__</span> la contienen todos los objetos en JS el cual nos
                permite acceder a las propiedades y métodos que tiene ese objeto.
            </p>
            <button
                className="btn btn-dark border"
                onClick={() => {
                    const string = "string";
                    console.log(string.__proto__);
                }}
            >
                Acceder al proto de un objeto String
            </button>
            <h2>Cadena de prototipos</h2>
            <p>
                Se refiere a cadena de prototipos a la cadena que se crear al momento de que se crea un objeto y este hereda sus respectivos __proto__ para poder trabajar
                correctamente.
            </p>
            <h2 className="text-warning">Prototype</h2>
            <p>
                Con el uso de <span className="text-warning">prototype</span> accedemos a los métodos y propiedades de un objeto que estemos creando nosotros.
            </p>
            <button
                className="btn btn-dark border"
                onClick={() => {
                    console.log(ejObjeto.funcion.prototype);
                }}
            >
                Acceder al prototype de un objeto function
            </button>
        </div>
    );
};

export default Prototipos;
