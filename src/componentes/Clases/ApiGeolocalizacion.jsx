import React from "react";
import Alerts from "../Alerts/Alerts";

const ApiGeolocalizacion = () => {
    const getPositionWithErrorHandler = (pos) => {
        const gps = navigator.geolocation; //obtenemos los datos del gps
        //función para ver los datos de geolocalización.
        const getData = (res) => {
            console.log(res.coords);
        };
        //manejador de errores
        const handleError = (e) => console.log(e);

        //hacemos uso de la función getCurrentPosition y enviamos los callbacks para ver los datos y manejar los errores
        gps.getCurrentPosition(getData, handleError);
    };

    const getPositionWithOptions = () => {
        const gps = navigator.geolocation;
        const getData = (res) => {
            //datos
            console.log(res.coords);
        };
        const handleError = (e) => console.log(e); //error

        //configuración de la petición
        const options = {
            maximumAge: 0,
            timeout: 3000,
            enableHightAccuracy: true,
        };
        gps.getCurrentPosition(getData, handleError, options); //petición
    };
    return (
        <div>
            <div className="container" id="header">
                <Alerts alert={"primary"} msg={"Abrir Consola"} />
            </div>
            <div id="body">
                <h1 className="display-3">API Geolocalización</h1>
                <div id="content">
                    <section>
                        <article>
                            <h3>¿Qué es?</h3>
                            <p>
                                La Geolocalización es la forma que tiene el dispositivo para definir la ubicación geográfica
                                de donde esta el mismo. Con el uso de esta API podemos obtener la posición geografica actual
                                del dispotivo y podremos usarla a nuestro favor.
                            </p>
                            <h3>Objeto navigator</h3>
                            <p>
                                El objeto navigator es un objeto que nos devuelve ciertas características del navegador en el
                                cual el usuario esta usando nuestra app. Este nos permite entrar a la cámara, micro, gps
                                etc...
                            </p>
                            <button
                                className="btn btn-outline-success"
                                onClick={() => {
                                    console.log(navigator);
                                }}
                            >
                                Ver objeto navigator
                            </button>
                            <button
                                className="btn btn-outline-success"
                                onClick={() => {
                                    console.log(navigator.geolocation.__proto__);
                                }}
                            >
                                Ver objeto navigator.geolocation.__proto__
                            </button>
                            <p>
                                Como pse puede ver, en la propiedad .geolocation en su __proto__ podemos ver que tiene varios
                                métodos que nos permiten recibir información de la geolocalización del dispositivo en
                                cuestión.
                            </p>
                            <h3>Obteniendo La geolocalización</h3>
                            <p>Empezaremos viendo como obtener la geolocalización del dispositivo.</p>
                            <h5>
                                <code className="arrowFunction">getCurrentPosition(pos,err,options)</code>
                            </h5>
                            <p>
                                getCurrentPosition(callback) es una función callback que envia como parámetro dentro del
                                callback la información solicitada.
                            </p>
                            <p>
                                Al momento de hacer uso de esta API el navegador por seguridad perguntará si deseamos que la
                                página haga uso de la API. El tipico aviso de{" "}
                                <i>"quieres que sitioweb.com acceda a tu ubicación?"</i> y al darle aceptar podremos obtener
                                la ubicación del dispositivo en cuestión.
                            </p>
                            <p>
                                Dentro del objeto que nos devuelve esta API ya podemos obtener en la propiedad "coords" las
                                coordenadas y la información correspondiente a la ubicación del dispositivo:
                            </p>
                            <h5>
                                <code className="arrowFunction">getCurrentPosition(pos)</code>
                            </h5>
                            <p>
                                Pasando el primer callback obtenemos toda la información correspondiente a los datos
                                geograficos pero sin poder manejar los errores
                            </p>
                            <button
                                className="btn btn-outline-success"
                                onClick={() => {
                                    const gps = navigator.geolocation;
                                    console.log(
                                        gps.getCurrentPosition((pos) => {
                                            const data = pos.coords;
                                            console.log(data);
                                            alert(
                                                `La ubicación actual es: \nlatitude: ${data.latitude}\nlongitud: ${data.longitude}\nPrecision: ${data.accuracy}`
                                            );
                                        })
                                    );
                                }}
                            >
                                Obtener geolocalización actual
                            </button>
                            <h5>
                                <code className="arrowFunction">getCurrentPosition(pos,err)</code>
                            </h5>
                            <p>El segundo argumento sirve para poder manejar los errores.</p>
                            <button
                                className="btn btn-outline-success"
                                onClick={() => {
                                    getPositionWithErrorHandler();
                                }}
                            >
                                Obtener geolocalización actual con manejo de errores
                            </button>
                            <small className="text-danger d-block">
                                Para ver mejor el manejo de errores desactivar la configuración de geolocalización de esta
                                página para observar su comportamiento.
                            </small>
                            <h5>
                                <code className="arrowFunction">getCurrentPosition(pos,err,options)</code>
                            </h5>
                            <p>
                                El tercer callback que se envia como argumento, nos sirve para enviarle ciertas opciones a la
                                API que nos permita modificar su comportamiento. Este argumento se lee como un objeto. Las
                                opciones más comunes son las siguientes:
                            </p>
                            <ul>
                                <li>
                                    <h5>
                                        maximumAge: <code>int</code>
                                    </h5>
                                    <p>
                                        Esta opción permite indicar al navegador cuanto tiempo podrá almacenar la información
                                        en la cache del dispositivo.
                                    </p>
                                    <p>
                                        Si enviamos como valor <code className="var">0</code> cada vez que se ejecute la
                                        petición de la geolocalización esta devolverá la ubicación actual.
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        timeout: <code>int</code>
                                    </h5>
                                    <p>
                                        Esta propiedad indica a la API cuanto tiempo de retraso en ms va a utilizar la API
                                        para devolver los datos.
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        enableHightAccuracy: <code>bool</code>
                                    </h5>
                                    <p>
                                        Esta propiedad sirve para indicarle a la API que active la opción de geolocalización
                                        precisa o de alta presición.
                                    </p>
                                    <p>
                                        Esta opción lo que hace es utilizar todos los recursos posibles para obtener la
                                        precisión más precisa posible. Esto se debe usar con cautela y tomando en cuenta
                                        siempre las necesidades que tenga esta implementación en ciertos proyectos. No es lo
                                        mismo saber la ciudad o el barrio en la que esta el usuario, que la ubicación precisa
                                        del mismo, ya sea para servicios de paqueteria, correo, delivery, etc...
                                    </p>
                                </li>
                            </ul>
                            <button
                                className="btn btn-outline-success"
                                onClick={() => {
                                    getPositionWithOptions();
                                }}
                            >
                                Obtener geolocalización con opciones
                            </button>
                            <h2>WatchPosition</h2>
                            <p>HAY QUE INVESTIGAR ESTA FUNCIÓN QUE ES MÁS COMPLEJA QUE LA DE GETCURRENTPOSITION()</p>
                            <p>
                                Con la diferencia de que esta función nos permite generar un tracking de por donde ha pasado
                                el dispositivo.
                            </p>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ApiGeolocalizacion;
