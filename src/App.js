import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Componets/Header/Header';
import Perfil from './Componets/Header/BA.jpg'
import Line from './Componets/Line/Line';
import Menu from './Componets/Menu/Menu';
import { AiOutlineHeart } from "react-icons/ai";
import { SlPresent } from "react-icons/sl";
import { AiOutlineStar } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import Catalogo from './Componets/Catalogo/Catalogo';
import Avaliado from './Componets/LivroAvaliado/Avaliado';
import Img1 from './Componets/Catalogo/OAnoEmQueMorri.jpg';
import Img2 from './Componets/Catalogo/OsHospedes.jpg';
import Comentarios from './Pages/Comentarios/Comentarios';


function App() {
  
  return (
    <div className='App'>
      <Router>
      <Header
        perfil={Perfil}
        name="Iarima Nery"
        texto1="9 Favoritos"
        texto2="0 Irei Ler"
      >
      </Header>
      <Line />


      <div className='Biblioteca'>
        <h1>Minha Biblioteca</h1>
      </div>

      <div className='container'>
        <div className='MenuContainer'>
          
          <Menu

            icone1={<AiOutlineHeart />}
            info1="Favoritos"
            icone2={<SlPresent />}
            info2="Desejados"
            icone3={<AiOutlineStar />}
            info3="Avaliados"
            icone4={<BiMessageDetail />}
            info4="Resenhas"
          />
        </div>
        <div className='MeusLivros'>
          <Routes>
          <Route path='/Favoritos' element= {<Catalogo/>}/>
            <Route path='/Resenha' element= {<Comentarios/>}/>
          </Routes>
          
        </div>
      </div>
      <div className='Biblioteca'>
        <h1 className='Ultimas'>Últimas Avaliações</h1>
      </div>


      <div className='Avaliacoes'>
        <Avaliado
          Avaliado1={Img1}
          titulo="Título Resenha"
          texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse ultrices gravida dictum fusce ut."

        />
        <Avaliado
          Avaliado1={Img2}
          titulo="Título Resenha"
          texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse ultrices gravida dictum fusce ut."
        />
      </div>
      </Router>
    </div>
  );
}

export default App;
