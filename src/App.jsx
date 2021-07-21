import Header from "./componentes/Partials/Header/Header";
import Footer from "./componentes/Partials/Footer/Footer";
import Index from "./componentes/Clases/Index";
import Prototipos from "./componentes/Clases/Prototipos";
import StrictMode from "./componentes/Clases/StrictMode";
import FuncionesFlecha from "./componentes/Clases/FuncionesFlecha";
import ThisContextual from "./componentes/Clases/ThisContextual";
import Recursividad from "./componentes/Clases/Recursividad";
import Clousures from "./componentes/Clases/Clousures";
import ParametrosPorDefecto from "./componentes/Clases/ParametrosPorDefecto";
import ParametrosRest from "./componentes/Clases/ParametrosRest";
import OperadoresEspeciales from "./componentes/Clases/OperadoresEspeciales";
import Apis from "./componentes/Clases/Apis";
import ApiDragDrop from "./componentes/Clases/ApiDragDrop";
import ApiGeolocalizacion from "./componentes/Clases/ApiGeolocalizacion";
import ApiHistory from "./componentes/Clases/ApiHistory";
import ApiFileReader from "./componentes/Clases/ApiFileReader";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useEffect } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
    useEffect(() => {
        document.title = "Bienvenidos";
    }, []);
    return (
        <div className="container-fluid p-0 bg-dark">
            {/*ESQUELETO*/}
            <Router>
                <Header />
                <div className="container h-75">
                    <Switch>
                        <Route path="/" exact component={Index} />
                        <Route path="/Prototipos" component={Prototipos} />
                        <Route path="/StrictMode" component={StrictMode} />
                        <Route path="/FuncionesFlecha" component={FuncionesFlecha} />
                        <Route path="/ThisContextual" component={ThisContextual} />
                        <Route path="/Recursividad" component={Recursividad} />
                        <Route path="/ParametrosPorDefecto" component={ParametrosPorDefecto} />
                        <Route path="/ParametrosRest" component={ParametrosRest} />
                        <Route path="/OperadoresEspeciales" component={OperadoresEspeciales} />
                        <Route path="/Clousures" component={Clousures} />
                        <Route path="/Apis" component={Apis} />
                        <Route path="/ApiDragDrop" component={ApiDragDrop} />
                        <Route path="/ApiGeolocalizacion" component={ApiGeolocalizacion} />
                        <Route path="/ApiHistory" component={ApiHistory} />
                        <Route path="/ApiFileReader" component={ApiFileReader} />

                        <Redirect to="/" />
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
