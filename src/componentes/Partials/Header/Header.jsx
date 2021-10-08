import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [reloader, setReloader] = useState(true);
    //fecha
    const [dia, setDia] = useState(0);
    const [mes, setMes] = useState(0);
    const [año, setAño] = useState(0);
    //horas
    const [horas, setHoras] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        const fecha = new Date();
        //fecha
        const dia = fecha.getDate() + 1;
        setDia(dia);
        const mes = fecha.getMonth() + 1;
        setMes(mes);
        const año = fecha.getYear() + 1900;
        setAño(año);
        //hora
        const segundos = fecha.getSeconds();
        setSegundos(addZero(segundos));
        const minutos = fecha.getMinutes();
        setMinutos(addZero(minutos));
        const horas = fecha.getHours();
        setHoras(horas);
        setTimeout(() => {
            setReloader(!reloader);
        }, 1000);
    }, [reloader]);

    const addZero = (n) => {
        if (n.toString().length < 2) return "0".concat(n);
        return n;
    };
    return (
        <div className="container-fluid border-bottom mb-5">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Master de Javascript
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Link
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="/"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="/">
                                            Action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">
                                            Another action
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">
                                            Something else here
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">
                                    Disabled
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">
                                Buscar
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="d-flex flex-row justify-content-center">
                <div id="hora" className="me-3">
                    <span id="hora">{horas}</span>:<span id="minutos">{minutos}</span>:<span id="segundos">{segundos}</span>
                </div>
                <div id="fecha">
                    <span>{dia}</span>/<span>{mes}</span>/<span>{año}</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
