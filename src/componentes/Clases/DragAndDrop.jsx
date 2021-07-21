import React from "react";
import "./CustomStyles/DragnDrop.css";

const DragAndDrop = () => {
    const transferirTexturas = (e) => {
        e.dataTransfer.setData(`textura`, e.target.id);
    };
    return (
        <>
            <h2>Practica sencilla ejemplo sencillo de uso de la API</h2>
            <small className="fw-lighter text-info">
                Arrastrar las imagenes al cuadro inferior para observar le uso de la api
            </small>
            <div className="texturas">
                <div className="textura-1" id="1" onDragStart={(e) => transferirTexturas(e)}></div>
                <div className="textura-2" id="2" onDragStart={(e) => transferirTexturas(e)}></div>
                <div className="textura-3" id="3" onDragStart={(e) => transferirTexturas(e)}></div>
            </div>
            <div
                className="zona"
                onDragOver={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                onDrop={(e) => {
                    let id = parseInt(e.dataTransfer.getData("textura"));
                    if (id === 1) {
                        e.target.classList.add("bg-1");
                        e.target.classList.remove("bg-2");
                        e.target.classList.remove("bg-3");
                    }
                    if (id === 2) {
                        e.target.classList.add("bg-2");
                        e.target.classList.remove("bg-1");
                        e.target.classList.remove("bg-3");
                    }
                    if (id === 3) {
                        e.target.classList.add("bg-3");
                        e.target.classList.remove("bg-2");
                        e.target.classList.remove("bg-1");
                    } else {
                    }
                }}
            ></div>
        </>
    );
};

export default DragAndDrop;
