import React from "react";
import "./Avaliado.css"

function Avaliado(props) {
    return (
        <div id="LivroAvaliado">
            <div id="final">
                <div id="imagemLivro">
                    <img id="Avaliado" src={props.Avaliado1} alt="Livros" />
                </div>
                <div id="texto">
                    <h1 className="tituloFinal">{props.titulo} </h1>
                    <p>{props.texto} </p>
                </div>

            </div>
            
        </div>

    );
}
export default Avaliado;