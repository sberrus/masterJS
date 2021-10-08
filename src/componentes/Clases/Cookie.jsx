import React, { useEffect, useState } from "react";
import Alerts from "../Alerts/Alerts";

const Cookie = () => {
    const [cookieName, setCookieName] = useState("");
    const [cookieValue, setCookieValue] = useState("");
    const [cookieExpire, setCookieExpire] = useState("");
    const [cookieList, setCookieList] = useState(null);
    useEffect(() => {
        const obtenerCookies = () => {
            let cookies = document.cookie;
            cookies = cookies.split(";");
            if (cookies[0] !== "") {
                const cookieList = cookies.map((cookie) => {
                    return cookie.trim();
                });
                setCookieList(cookieList);
                return;
            }
            setCookieList(null);
        };
        obtenerCookies();
    }, []);

    const calcExpire = (dias) => {
        let fecha = new Date(); //Obtenemos la fecha actual
        fecha.setTime(fecha.getTime() + dias * 1000 * 60 * 60 * 24); //Redefinimos la fecha actual sumandole los dias en milisegundos que deseamos calcular.
        return fecha.toUTCString(); //Parseamos para que devuelva un string UTC.
    };

    const crearCookie = () => {
        const newCookie = `${cookieName}=${cookieValue};expires=${calcExpire(cookieExpire)}`;
        document.cookie = newCookie;
        if (!cookieList) {
            setCookieList([`${cookieName}=${cookieValue}`]);
            return;
        }
        setCookieList([...cookieList, `${cookieName}=${cookieValue}`]);
    };

    const eliminarCookie = (cookieName) => {
        document.cookie = `${cookieName};max-age=0`;

        const listUpdated = cookieList;
        const indexToDelete = cookieList.indexOf(cookieName);
        delete listUpdated[indexToDelete];
        if (listUpdated[0] === "") {
            setCookieList(null);
            return;
        }
        setCookieList([...listUpdated]);
    };
    const eliminarTodasLasCookies = () => {
        const lista_cookies = document.cookie.split(";");
        console.log(lista_cookies);
        console.log(lista_cookies.length >= 1 && lista_cookies[0] !== "");
        if (lista_cookies.length >= 1 && lista_cookies[0] !== "") {
            lista_cookies.forEach((cookie) => {
                document.cookie = `${cookie.trim()};max-age=0`;
            });
            setCookieList(null);
            return console.log("Todas las cookies eliminadas");
        }
    };

    return (
        <div>
            <div className="container" id="header">
                <Alerts alert={"primary"} msg={"texto de prueba"} />
            </div>
            <div id="body">
                <h1 className="display-3">Manejo de Cookies con JS</h1>
                <div id="content">
                    <section id="introduccion">
                        <h1>Introducción a las Cookies &#127850;</h1>
                        <p>
                            Las cookies son una caracteristica del navegador que nos permite guardar información del usuario.
                            Pero de forma general son datos del usuario. A diferencia de los storages (local y session) es
                            que este nos permite almacenar como máximo 50 cookies por dominio y estas no pueden ser mayor a
                            4093 bytes (4kb) lo que les hace ser bastante rápidas de acceder.
                        </p>
                    </section>
                    <section id="legal">
                        <h2>Leyes y las cookies</h2>
                        <p>
                            Hay muchos tipos de cookies lo cual para evitar problemas legales es bueno informase a nivel
                            legal al respecto.
                        </p>
                    </section>
                    <section id="uso">
                        <h2>Acceder a las cookies</h2>
                        <ul>
                            <li>
                                Para visualizar las cookies podemos llamar con JS a la propiedad <code>cookie</code> del
                                objeto <code className="obj">document</code> y nos devolverá la lista de las cookies
                                presentes en el dominio.
                            </li>
                            <li>
                                La otra forma es mediante la consola de desarrollo de los navegadores en el apartado de
                                aplicación.
                            </li>
                        </ul>
                        <h2>Aprendiendo a usar cookies</h2>
                        <p>
                            Las cookies son <code>strings</code> con una estructura que puede leer la API Cookie y que nos
                            permite que dicha cookie tenga cierto comportamiento.
                        </p>
                        <h5>Declaración de una cookie básica</h5>
                        <div className="codeContainer">
                            document.cookie = <code className="string">"NOMBRE_COOKIE=VALOR;"</code>
                        </div>
                        <p>
                            La cookie debe contener siempre una clave valor declarada como en la línea anterior. Esta
                            necesariamente debe tener ese par clave-valor para que la cookie sea válida.
                        </p>
                        <p>
                            Además en el string podemos pasar otras clave-valor que nos permiten que las cookies tengan otros
                            comportamientos, los más frecuentes son:
                        </p>
                        <ul>
                            <li>
                                <h5>expires: UTC time</h5>
                                <p>
                                    La clave <code className="string">"expires=UTC_TIME"</code> nos permite darle una fecha
                                    de caducidad a la cookie que pasada esa fecha simplemente se elimina de la lista de
                                    cookies presentes.
                                </p>
                                <p>
                                    Por defecto las cookies se eliminan al cerrar el navegador si no se le asigna la
                                    propiedad expire
                                </p>
                            </li>
                            <li>
                                <h5>expires: UTC time</h5>
                                <p>
                                    La clave <code className="string">"expires=UTC_TIME"</code> nos permite darle una fecha
                                    de caducidad a la cookie que pasada esa fecha simplemente se elimina de la lista de
                                    cookies presentes.
                                </p>
                                <p>
                                    Por defecto las cookies se eliminan al cerrar el navegador si no se le asigna la
                                    propiedad expire
                                </p>
                            </li>
                        </ul>
                        <p>
                            Existen otras propiedades que se le pueden asignar a las cookies, para saber más ir a{" "}
                            <a href="https://www.w3schools.com/js/js_cookies.asp" target="_blank" rel="noopener noreferrer">
                                w3school
                            </a>{" "}
                            que tienen una guía bien explicada de como interactuar con las cookies.
                        </p>
                    </section>
                    <section id="cookieGenerator">
                        <div id="generator">
                            <h5>Cookie Generator</h5>
                            <div className="">
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        crearCookie();
                                    }}
                                >
                                    <div className="d-flex flex-row col-2">
                                        <div className="me-3">
                                            <label>Nombre Cookie</label>
                                            <input
                                                type="text"
                                                value={cookieName}
                                                onChange={(e) => {
                                                    setCookieName(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="me-3">
                                            <label>Valor Cookie</label>
                                            <input
                                                type="text"
                                                value={cookieValue}
                                                onChange={(e) => {
                                                    setCookieValue(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column col-2">
                                        <label>Caducidad (en días)</label>
                                        <input
                                            type="number"
                                            value={cookieExpire}
                                            onChange={(e) => {
                                                setCookieExpire(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <button type="submit">Crear Cookie</button>
                                </form>
                            </div>
                        </div>
                        <div id="cookieList">
                            <h5>Lista de cookies</h5>
                            {cookieList && (
                                <ul className="col-5 border">
                                    {cookieList.map((cookie, index) => (
                                        <li className="my-3" key={index}>
                                            {cookie}{" "}
                                            <button
                                                className="btn-sm btn-danger float-end"
                                                onClick={(e) => {
                                                    eliminarCookie(cookie);
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div id="controller">
                            <button onClick={eliminarTodasLasCookies}>Eliminar todas las cookies</button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Cookie;
