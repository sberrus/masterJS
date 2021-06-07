import React from "react";
import Alerts from "../Alerts/Alerts";

const Recursividad = () => {
    //funcion recursiva (CALLBACK)
    const validarEdad = (msg = "introduce tu edad") => {
        //variable para almacenar la edad
        let edad;
        try {
            //### VALIDADORES ###
            if (msg) edad = prompt(msg);
            //comprueba que haya algo en la variable msg
            else edad = prompt("introduce tu edad"); //de lo contrario muestra el mensaje determinado
            edad = parseInt(edad); // parseamos edad a INT ya que el método prompt() devuelve STRING
            if (isNaN(edad)) throw "introduce un número para la edad"; // comprobamos que la variable sea un número, sino, devuelve un STRING como error. Este STRING se envia como parámetro en el catch para que vuelva a pasar todas las comprobaciones creando una función recursiva (callback).

            //### LÓGICA PRINCIPAL ###
            if (edad > 18) console.log("Eres mayor de edad");
            else console.log("Eres menor de edad");
        } catch (error) {
            validarEdad(error);
        }
    };

    return (
        <div>
            <div className="container" id="header">
                <Alerts alert={"warning"} msg={"Conflicto con REACT"} />
            </div>
            <div id="body">
                <h1 className="display-3">Recursividad</h1>
                <div id="content">
                    <h2>¿Qué es la recursividad?</h2>
                    <p>Dicho de manera sencilla es cuando una función se llama a sí misma.</p>
                    <h3 className="text-warning">Consideraciones especiales</h3>
                    <p>
                        Hay que tener mucho cuidado con las recursividades porque estas pueden generar un bucle infinito y puede ocasionarnos un gran problema respecto a los recursos que consume
                        nuestro programa.
                    </p>
                    <button onClick={validarEdad} className="btn btn-outline-primary">
                        Probar recursividad
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Recursividad;
