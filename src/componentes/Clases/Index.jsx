import React, { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
    //Estudiar como incorporar BBDD para almacenar las clases y el contenido para acceder mediante params [CREAR API PARA QUE DEVUELVA ESTOS DATOS]
    const [clases, setClases] = useState([
        {
            titulo: "Prototipos",
            desc: "Clase de prototipos y sus usos en Javascript",
            url: "/prototipos",
        },
        {
            titulo: "Modo Estricto",
            desc: "Uso de [use strict] en javascript",
            url: "/strictmode",
        },
        {
            titulo: "Funciones Flecha",
            desc: "Destripando a fondo las funciones flecha",
            url: "/funcionesflecha",
        },
        {
            titulo: "THIS Contextual",
            desc: "Comportamiento de la palabra reservada [this]",
            url: "/thiscontextual",
        },
    ]);

    return (
        <div className="container mt-5">
            <h1 className="display-3 text-success">Bienvenidos</h1>
            <p>
                - Agradecimientos a <strong>@SoyDalto</strong> por su labor como divulgador y
                educador siendo uno de los educadores que más contenido he aprovechado en mi carrera
                como desarrollador.
            </p>
            <h2 className="display-6">Clases</h2>
            <div className="row">
                {/*Mapeo de las clases*/}
                {clases.map((clase, index) => (
                    <div className="col-12 col-md-4 mt-3" key={index}>
                        <div className="card bg-dark border">
                            <div className="card-body">
                                <h5 className="card-title">{clase.titulo}</h5>
                                <p className="card-text">{clase.desc}</p>
                                <Link to={clase.url} className="btn btn-dark border">
                                    Ir a {clase.titulo}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Index;
