import './App.css';
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



function App() {
  return (
    <div className='App'>
      <Header
        perfil={Perfil}
        name="Iarima Nery"
        texto1="50 Lidos"
        texto2="30 Irei Ler"
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
            info4="Comentários"
          />
        </div>
        <div className='MeusLivros'>
          <Catalogo />
        </div>
      </div>
      <div className='Biblioteca'>
        <h1>Últimas Avaliações</h1>
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
    </div>
  );
}

export default App;
