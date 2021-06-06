import Header from "./componentes/Partials/Header/Header";
import Footer from "./componentes/Partials/Footer/Footer";
import Index from "./componentes/Clases/Index";
import Prototipos from "./componentes/Clases/Prototipos";
import StrictMode from "./componentes/Clases/StrictMode";
import FuncionesFlecha from "./componentes/Clases/FuncionesFlecha";
import ThisContextual from "./componentes/Clases/ThisContextual";

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
                        <Route path="/prototipos" component={Prototipos} />
                        <Route path="/strictmode" component={StrictMode} />
                        <Route path="/funcionesflecha" component={FuncionesFlecha} />
                        <Route path="/thiscontextual" component={ThisContextual} />

                        <Redirect to="/" />
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
