import React from "react";
import "./CustomStyles/galeriaDragnDrop.css";

const GaleriaDragnDrop = () => {
    const changeStyle = (el, color) => {
        el.style.border = `4px dashed ${color}`;
    };
    const changeText = (el, texto) => {
        el.textContent = texto;
    };

    const cargarArchivo = (ar) => {
        const format = ar.name.split(".")[1];
        if (format === "txt") {
            leerArchivoTexto(ar);
        }
        if (format === "png" || format === "jpg") {
            leerArchivoImg(ar);
            document.querySelector("#galeria").textContent = "";
        }
        if (format === "mp4") {
            leerVideo(ar);
            document.querySelector("#galeria").textContent = "";
        } else {
            return;
        }
    };

    const leerArchivoTexto = (ar) => {
        const reader = new FileReader();
        reader.readAsText(ar);
        reader.addEventListener("load", (e) => {
            document.querySelector("#galeria").textContent = e.currentTarget.result;
        });
    };
    const leerArchivoImg = (ar) => {
        const reader = new FileReader();
        reader.readAsDataURL(ar);
        reader.addEventListener("load", (e) => {
            const newImg = `<img src="${e.currentTarget.result}">`;
            document.querySelector("#galeria").innerHTML += newImg;
        });
    };

    const leerVideo = (ar) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(ar);
        const progressBar = document.getElementById("galeria-progress");
        progressBar.style.display = "block";
        reader.addEventListener("progress", (e) => {
            //evento que se dispara mientras se va cargando el archivo.
            progressBar.value = ((e.loaded / e.total) * 100).toFixed();
        });
        reader.addEventListener("load", (e) => {
            // Escucha para cuando el archivo se ha cargado por completo
            const progressBar = document.getElementById("galeria-progress");
            progressBar.style.display = "none";
            let video = new Blob([new Uint8Array(e.currentTarget.result)], { type: "mp4/video" });
            let url = URL.createObjectURL(video);
            let videoElement = document.createElement("VIDEO");
            videoElement.setAttribute("src", url);
            videoElement.setAttribute("controls", "");
            videoElement.style.width = "100%";
            document.querySelector("#galeria").appendChild(videoElement);
            videoElement.play();
        });
    };
    return (
        <div className="mt-5">
            <h3>
                Práctica 2 - Galeria Dinámica con Drag & Drop{" "}
                <a
                    href={`https://github.com/sberrus/masterJS/blob/master/src/componentes/Clases/galeriaDragDrop.jsx`}
                    rel="noreferrer"
                    target="_BLANK"
                >
                    <i className="bi bi-github text-white fs-40"></i>
                </a>
            </h3>
            <div
                id="zonaDrop"
                onDragOver={(e) => {
                    e.stopPropagation(); //Esta instrucción es necesaria para que se resetee el evento del drop sin errores en React, sin esta instrucción, genera error y no lee el evento. [Investigar más al respecto]
                    e.preventDefault();
                    changeStyle(e.target, "#444");
                    changeText(e.target, "Suelte Aquí!");
                }}
                onDragLeave={(e) => {
                    changeStyle(e.target, "#fff");
                    changeText(e.target, "Zona de Drop");
                }}
                onDrop={(e) => {
                    e.preventDefault();
                    cargarArchivo(e.dataTransfer.files[0]);
                    changeStyle(e.target, "#fff");
                    changeText(e.target, "Zona de Drop");
                }}
            >
                Zona de Drop
            </div>
            <progress id="galeria-progress" max="100" value="0" />
            <div id="galeria"></div>
        </div>
    );
};

export default GaleriaDragnDrop;
