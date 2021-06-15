import React from "react";
import Alerts from "../Alerts/Alerts";

const OperadoresEspeciales = () => {
    const snippet1 = () => {
        let valor1 = "valor 1";
        let valor2 = "valor 2";
        let valor3 = "valor 3";
        let arr = ["valor 1", "valor 2", "valor 3"];
        console.log(valor1, valor2, valor3);
        console.log(...arr); //spread operator
    };
    const snippet2 = () => {
        let arr = ["valor 1", "valor 2"];
        let arr2 = ["valor 3", "valor 4"];
        console.log(`Array 1: ${arr}`);
        console.log(`Array 2: ${arr2}`);
        arr.push(...arr2);
        console.log(`Nuevo Array: ${arr}`);
        console.log("array arr modificado");
    };
    const snippet3 = () => {
        let arr = ["valor 1", "valor 2"];
        let arr2 = ["valor 3", "valor 4"];
        let arr3 = [...arr, ...arr2];
        console.log(`Array 1: ${arr}`);
        console.log(`Array 2: ${arr2}`);
        console.log(`Array 3: ${arr3}`);
        console.log("ninguno de los arrays ha sido modificado. Todos mantienen su estructura inicial");
    };
    return (
        <div>
            <div className="container" id="header">
                <Alerts alert={"primary"} msg={"texto de prueba"} />
            </div>
            <div id="body">
                <h1 className="display-3">Operadores Especiales</h1>
                <div id="content">
                    <h2>
                        Operador Ternario ( <code>?</code> )
                    </h2>
                    <p>
                        El operador ternario tiene un comportamiento similar al de la condicional <code>if</code>, ya que este evalua una condición y de ser verdadera ( <code>true</code> ) realizará
                        alguna función, de ser ( <code>false</code> ), este hará otra cosa.
                    </p>
                    <p>La estructura de una operación ternaria es la siguiente:</p>
                    <div className="codeContainer">
                        <code className="var">num</code> = true;
                        <br />
                        <code className="var">num</code>
                        <code> ?</code> console. <code className="arrowFunction">log</code>( <code className="string">"True!"</code> ) <code>:</code> console.<code className="arrowFunction">log</code>
                        ( <code className="string">"False!"</code> )
                    </div>
                    <p>
                        Los operadores ternarios funcionan de esta manera, pero que pasa si queremos realizar más de una ejecución? que pasa si por ejemplo queremos enviar 2 console.log() en
                        cualquiera de los resultados?
                    </p>
                    <p>Para esto tenemos que encerrar ese bloque de código entre paréntesis () y separar cada ejecución entre comas (console.log(1), console.log(2)) quedando de la siguiente forma</p>
                    <div className="codeContainer">
                        <code className="var">num</code> = true;
                        <br />
                        <code className="var">num</code>
                        <code> ?</code> <br />
                        (<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;console. <code className="arrowFunction">log</code>( <code className="string">"ejecución 1"</code> ) , <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;console.
                        <code className="arrowFunction">log</code>( <code className="string">"Ejecución 2"</code> ) <br />) <br /> <code>:</code> <br /> console.
                        <code className="arrowFunction">log</code>( <code className="string">"False!"</code> )
                    </div>
                    <p>
                        El operador ternario esta diseñado para consumir menos recursos que con los <code>if</code>
                    </p>
                    <h2>Operador SPREAD</h2>
                    <p>El operado SPREAD lo que hace es destructurar un array y devolver cada uno de los valores que este contiene.</p>
                    <div className="codeContainer">
                        let <code className="var">valor1</code> = <code className="string">"valor 1"</code>
                        <br />
                        let <code className="var">valor2</code> = <code className="string">"valor 2"</code>
                        <br />
                        let <code className="var">valor3</code> = <code className="string">"valor 3"</code>
                        <br />
                        let <code className="var">arr</code> = [<code className="string">"valor 1"</code>,<code className="string">"valor 2"</code>,<code className="string">"valor 3"</code>]
                        <br />
                        console.log( <code className="var">valor1</code>,<code className="var">valor2</code>,<code className="var">valor3</code> )
                        <br />
                        console.log( <code>...</code>
                        <code className="var">arr</code> )
                    </div>
                    <button
                        className="btn btn-dark border mt-2"
                        onClick={() => {
                            snippet1();
                        }}
                    >
                        Ver resultado en consola
                    </button>
                    <h3>Concatenación de Arrays (Mutable)</h3>
                    <p>El spread operator nos permite también insertar valores de un array a otro de una manera muy sencilla de la siguiente forma:</p>
                    <div className="codeContainer">
                        let <code className="var">arr</code> = [ <code className="string">valor1</code>,<code className="string">valor2</code>]
                        <br />
                        let <code className="var">arr2</code> = [<code className="string">valor3</code>,<code className="string">valor4</code>]
                        <br />
                        <code className="var">arr</code>.<code className="arrowFunction">push</code>( <code>...</code>
                        <code className="var">arr2</code> )
                    </div>
                    <button
                        className="btn btn-dark border mt-2"
                        onClick={() => {
                            snippet2();
                        }}
                    >
                        Ver resultado en consola
                    </button>
                    <h3>Concatenar Arrays (Inmutable)</h3>
                    <p>
                        Otra de las caracteristicas que nos permiten los spread operators es concatenar arrays de una manera más comoda. Lo bueno que nos permite el spread operator es que es
                        inmutable, así que lo que hagamos con las variables que le apliquemos el spread, no va a modificar sus valores si nosotros no lo deseamos.
                    </p>
                    <div className="codeContainer">
                        let <code className="var">arr</code> = [ <code className="string">valor1</code>,<code className="string">valor2</code>]
                        <br />
                        let <code className="var">arr2</code> = [<code className="string">valor3</code>,<code className="string">valor4</code>]
                        <br />
                        let <code className="var">arr3</code> = [ <code>...</code>
                        <code className="var">arr</code>,<code>...</code>
                        <code className="var">arr2</code> ]
                        <br />
                        console.log( <code className="var">arr3</code> )
                    </div>
                    <button
                        className="btn btn-dark border mt-2"
                        onClick={() => {
                            snippet3();
                        }}
                    >
                        Ver resultado en consola
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OperadoresEspeciales;
