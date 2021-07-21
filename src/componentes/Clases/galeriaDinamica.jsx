import React from "react";
import "./CustomStyles/galeriadinamica.css";

const galeriaDinamica = () => {
    const addImages = (images) => {
        for (let i = 0; i < images.length; i++) {
            const reader = new FileReader();
            reader.readAsDataURL(images[i]);
            reader.addEventListener("load", (e) => {
                const newImg = `<img src="${e.currentTarget.result}">`;
                document.querySelector("#contenedorGaleria").innerHTML += newImg;
            });
        }
    };

    return (
        <div className="mt-5">
            <h3>
                Práctica 1 - Galeria Dinámica{" "}
                <a
                    href={`https://github.com/sberrus/masterJS/blob/master/src/componentes/Clases/galeriaDinamica.jsx`}
                    rel="noreferrer"
                    target="_BLANK"
                >
                    <i className="bi bi-github text-white fs-40"></i>
                </a>
            </h3>
            <input
                type="file"
                multiple
                onChange={(e) => {
                    console.log(e.target.files);
                    addImages(e.target.files);
                }}
            />
            <div id="contenedorGaleria"></div>
        </div>
    );
};

export default galeriaDinamica;
