import React from 'react';
import "./Comentarios.css";

import Img from '../../Componets/Catalogo/OsHospedes.jpg';
import Livros from '../Livros2/Livros2';

function Comentarios(props){
    return(
        <div>
            <Livros
            Avaliado2={Img}
            titulo2='Os Hóspedes - Sarah Waters'
            texto2= 'Wray, uma viúva empobrecida, e Frances, sua filha solteira, se veem obrigadas a alugar parte de sua grande e silenciosa casa, agora sem irmãos, marido e criadas, a inquilinos para que possam pagar suas dívidas e enfrentar os tempos de crise.'
            />
        </div>
    )

}
export default Comentarios;