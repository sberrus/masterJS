import React from "react";
import Alerts from "../Alerts/Alerts";

const ParametrosRest = () => {
    const suma = (...args) => {
        let res = 0;
        args.forEach((inputs) => {
            res += inputs;
        });
        console.log(res);
    };
    return (
        <div>
            <div className="container" id="header">
                <Alerts alert={"primary"} msg={"Ver resultado en consola"} />
            </div>
            <div id="body">
                <h2 className="display-3">Parámetros Arguments</h2>
                <div id="content">
                    <h1>Parámetros Rest</h1>
                    <p>El parámetro rest es una forma de poder captar y utilizar los argumentos que nos envian en una función pero que esta no tiene ninguna variable que capture dicho array.</p>
                    <div className="codeContainer">
                        <code>const</code> <code className="arrowFunction">suma</code> = ( <code>...</code>
                        <code className="var">variable_arguments</code> ) &#123;
                        <br />
                        &#32;&#32;&#32;&#32;console.<code className="arrowFunction">log</code>( <code className="var">variable_arguments</code> )
                        <br />
                        &#125;
                        <br />
                        <code className="arrowFunction">suma</code>(1,2,3,4)
                    </div>
                    <button
                        className="btn btn-dark border mt-2"
                        onClick={() => {
                            suma(1, 2, 3, 4);
                        }}
                    >
                        Probar Código
                    </button>
                    <p>
                        Como se puede apreciar, en los argumentos de la función <code className="arrowFunction">sumar</code>(), No tiene definidas variables que vayamos a usar en su scope, pero con el
                        uso de los parámetros de argumentos, podemos usar un array que contendran todos los valores que nos envien como arguentos.
                    </p>
                    <h2>Uso Mixto de parámetros básicos y parámetros Rest</h2>
                    <p>
                        También se pueden utilizar parámetros estándar junto con los parámetos rest, con la condición de que el parámetro Rest se defina al final de todos los argumentos definidos que
                        se vayan a implementar en la función. De lo contrario, devolverá un error.
                    </p>
                    <div className="codeContainer">
                        <code className="arrowFunction">suma</code>( <code className="var">Num1</code>,<code className="var">Num2</code>,<code>...</code>
                        <code className="var">rest</code> )
                    </div>
                    <p>
                        De esta forma se evita errores y podemos usar ciertas variables dentro de la lógica de nuestra función y capturar el resto de variables que nos envien de manera que no se
                        pierda esa información.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ParametrosRest;
