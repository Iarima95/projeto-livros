import React  from "react";
import './Header.css';

function Header(props){
    return(
        <header>
            <img id="Perfil" src={props.perfil} alt="fotoPerfil" />
            <h2 className="CabecalhoName" >{props.name}</h2>
            <a id="textoCabecalho1" href="">{props.texto1}</a>
            <a id="textoCabecalho2" href="">{props.texto2}</a>
        </header>
    );
}

export default Header;