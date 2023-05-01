import React from "react";
import "./Livro.css"

function Livro(props){
    return(
            <span className="LivroPrincipal">
             <img id="Livro" src={props.Livro1} alt="Livros" />
             <span>{props.Star1} {props.Star2} {props.Star3} {props.Star4} {props.Star5}</span>
             </span>
          

       
    );
}
export default Livro;