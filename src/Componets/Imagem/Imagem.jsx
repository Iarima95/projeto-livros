import React from 'react';
import "./Imagem.css";


function Imagem(props){
    return (
        <div>
        <img src={props.texto}  />
        <p>{props.texto} </p>
        </div>
    )
}

export default Imagem;