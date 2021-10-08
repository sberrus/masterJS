import React, { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
    //Estudiar como incorporar BBDD para almacenar las clases y el contenido para acceder mediante params [CREAR API PARA QUE DEVUELVA ESTOS DATOS]
    const [clases] = useState([
        {
            titulo: "Prototipos",
            desc: "Clase de prototipos y sus usos en Javascript",
            url: "/Prototipos",
        },
        {
            titulo: "Modo Estricto",
            desc: "Uso de [use strict] en javascript",
            url: "/StrictMode",
        },
        {
            titulo: "Funciones Flecha",
            desc: "Destripando a fondo las funciones flecha",
            url: "/FuncionesFlecha",
        },
        {
            titulo: "THIS Contextual",
            desc: "Comportamiento de la palabra reservada [this]",
            url: "/ThisContextual",
        },
        {
            titulo: "Recursividad",
            desc: "Recursividad en JS",
            url: "/Recursividad",
        },
        {
            titulo: "Clousures",
            desc: "Clousures en JS",
            url: "/Clousures",
        },
        {
            titulo: "ParametrosPorDefecto",
            desc: "ParametrosPorDefecto en JS",
            url: "/ParametrosPorDefecto",
        },
        {
            titulo: "ParametrosRest",
            desc: "ParametrosRest en JS",
            url: "/ParametrosRest",
        },
        {
            titulo: "OperadoresEspeciales",
            desc: "OperadoresEspeciales en JS. Operadore ternario, operador Spread etc...",
            url: "/OperadoresEspeciales",
        },
        {
            titulo: "Apis del Navegador",
            desc: "Introducción a las APIS del &lt;code&gt;navegador</code>. Usando API Date, LocalStorage y SessionStorage",
            url: "/Apis",
        },
        {
            titulo: "Apis Drag & Drop",
            desc: "Usando API DRAG & DROP",
            url: "/ApiDragDrop",
        },
        {
            titulo: "Apis de Geolocalización",
            desc: "Usnado la API de Geolocalización",
            url: "/ApiGeolocalizacion",
        },
        {
            titulo: "API History",
            desc: "Usnado la API History para ver el historial del usuario",
            url: "/ApiHistory",
        },
        {
            titulo: "API File Reader",
            desc: "API para poder recibir y leer archivos externos",
            url: "/ApiFileReader",
        },
        {
            titulo: "API IndexedDB",
            desc: "BBDD interna de los navegadores",
            url: "/ApiIndexedDB",
        },
        {
            titulo: "API MatchMedia",
            desc: "Usando Media querys para disparar eventos",
            url: "/ApiMatchMedia",
        },
        {
            titulo: "API InterceptionObserver",
            desc: "Api para saber si un elemento se muestra en la pantalla",
            url: "/ApiInterceptionObserver",
        },
        {
            titulo: "API Visibility Change",
            desc: "Api para saber si un elemento se muestra en la pantalla",
            url: "/ApiVisibilityChange",
        },
        {
            titulo: "API Notifications",
            desc: "Api para enviar notificaciones a los usuarios",
            url: "/ApiNotifications",
        },
        {
            titulo: "Web Workers",
            desc: "Creando Hilos (Threads) en JS",
            url: "/WebWorkers",
        },
        {
            titulo: "Objeto Navigator a Fondo",
            desc: "Un vistazo más profundo al objeto Navigator",
            url: "/ObjetoNavigator",
        },
        {
            titulo: "Memoization",
            desc: "Mejora en los tiempos de ejecución para mejorar experiencia del usuario",
            url: "/Memoization",
        },
        {
            titulo: "Cache",
            desc: "Usando la cache para mejorar el rendimiento y los tiempos de carga de nuestro sitio web.",
            url: "/Cache",
        },
        {
            titulo: "Cookie",
            desc: "Manejando información del cliente con las cookies",
            url: "/Cookie",
        },
    ]);

    return (
        <div className="container mt-5">
            <h1 className="display-3 text-success">Bienvenidos</h1>
            <p>
                - Agradecimientos a <strong>@SoyDalto</strong> por su labor como divulgador y educador siendo uno de los
                educadores que más contenido he aprovechado en mi carrera como desarrollador.
            </p>
            <p>
                Al ser cursos dedicados al lenguaje de programación en si mismo, el contenido se encontrará entre comentarios
                dentro de cada uno de los *.jsx. Por lo que dejaré el enlace para que se pueda acceder a cada uno de los
                repositorios.
            </p>
            <h2 className="display-6">Clases</h2>
            <div className="row">
                {/*Mapeo de las clases*/}
                {clases.map((clase, index) => (
                    <div className="col-12 col-md-6 col-lg-4 mt-3" key={index}>
                        <div className="card bg-dark border section-display">
                            <div className="card-body d-flex flex-column">
                                <div>
                                    <h5 className="card-title">{clase.titulo}</h5>
                                    <p className="card-text">{clase.desc}</p>
                                </div>
                                <div className="mt-auto">
                                    <Link to={clase.url} className="btn btn-dark border">
                                        Ir a {clase.titulo}
                                    </Link>
                                    <a
                                        href={`https://github.com/sberrus/masterJS/blob/master/src/componentes/Clases${clase.url}.jsx`}
                                        rel="noreferrer"
                                        target="_BLANK"
                                    >
                                        <i className="bi bi-github float-end text-white fs-40"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Index;
