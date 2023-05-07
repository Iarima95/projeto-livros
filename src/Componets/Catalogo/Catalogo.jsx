import React from 'react';
import './Catalogo.css';
import Livro from '../Livro/Livro';
import Imagem1 from './Afinidade.jpg';
import Imagem2 from './Carmilla.jpg';
import Imagem3 from './DesventurasEmSérie1.jpg';
import Imagem4 from './GuiaDoMochileiro.webp';
import Imagem5 from './NaPontaDosDedos.jpg';
import Imagem6 from './OAnoEmQueMorri.jpg';
import Imagem7 from './OGuardiaodaMeiaNoite.jpg';
import Imagem8 from './O_RESTAURANTE_NO_FIM_DO_UNIVERSO_1352177529B.jpg';
import Imagem9 from './OsHospedes.jpg';

import { AiFillStar } from "react-icons/ai";


function Catalogo(props) {
    return (
        <div id="Catalogo">

            <Livro
                Livro1={Imagem1}
                Star1={<AiFillStar />}
                Star2={<AiFillStar />}
                Star3={<AiFillStar />}

            />

            <Livro
                Livro1={Imagem2}
                Star1={<AiFillStar />}
                Star2={<AiFillStar />}
                Star3={<AiFillStar />} />
            <Livro
                Livro1={Imagem3}
                Star1={<AiFillStar />}
                Star2={<AiFillStar />}
                Star3={<AiFillStar />} />
            <Livro
                Livro1={Imagem4}
                Star1={<AiFillStar />}
                Star2={<AiFillStar />}
                Star3={<AiFillStar />} />
            <Livro
                Livro1={Imagem5}
                Star1={<AiFillStar />}
                Star2={<AiFillStar />}
                Star3={<AiFillStar />} />

            <Livro
                Livro1={Imagem6}
                Star1={<AiFillStar />}
                Star2={<AiFillStar />}
                Star3={<AiFillStar />} />

            <Livro
                Livro1={Imagem7}
                Star1={<AiFillStar />}
                Star2={<AiFillStar />}
                Star3={<AiFillStar />} />

            <Livro
                Livro1={Imagem8}
                Star1={<AiFillStar />}
                Star2={<AiFillStar />}
                Star3={<AiFillStar />} />

            <Livro
                Livro1={Imagem9}
                Star1={<AiFillStar />}
                Star2={<AiFillStar />}
                Star3={<AiFillStar />} />




        </div>



    )
};

export default Catalogo;