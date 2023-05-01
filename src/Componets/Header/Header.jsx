import React  from "react";
import './Header.css';

function Header(props){
    return(
        <header>
            <img id="Perfil" src={props.perfil} alt="fotoPerfil" />
            <h2 className="CabecalhoName" >{props.name}</h2>
            <h2 className="Cabecalho">{props.texto1}</h2>
            <h2 className="Cabecalho">{props.texto2}</h2>
        </header>
    );
}

export default Header;