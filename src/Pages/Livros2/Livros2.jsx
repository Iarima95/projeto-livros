import React, {useState} from "react";
import "./Livros.css"
import ContagemContext from "../../Componets/Context/ContagemContext";
import BtnContagem from "../../Componets/BtnContagem/BtnContagem";


function Livros(props) {
    const [contagem, setContagem] = useState(0);
    return (
        
        <div id="LivroAvaliado2">
            <div id="final2">
                <div id="imagemLivro2">
                    <img id="Avaliado2" src={props.Avaliado2} alt="Livros" />
                </div>
                <div id="texto">
                    <h1 className="tituloFinal">{props.titulo2} </h1>
                    <p className="resenha1">{props.texto2} </p>
                </div>

            </div>
            
            <div id="Tarefas2">
                <ContagemContext.Provider value={{contagem, setContagem}}>
                <a className="marcarLido" ><BtnContagem/></a>
                </ContagemContext.Provider>
                <a className="vouLer" href="/">Vou ler</a>
                
            </div>
            
        </div>
    
    );
}
export default Livros;