import Button from 'react-bootstrap/Button';

import Carousel from 'react-bootstrap/Carousel';
import Footer from '../components/Footer';

import { BsRobot } from "react-icons/bs";
import {FaUserCheck} from 'react-icons/fa'
import {BsFillClockFill} from 'react-icons/bs'

const Home = () => {

  const comentarios = 
      [["Ana Clara", "Pedro Henrique", "Júlia Silva"], 
      ["José Carlos", "Amanda Maria", "Carlos Henrique"]]
  
  const showDate = () => {
    const date = new Date().toLocaleDateString();
    return date
  }
  

  return (
    <div id='home'>
        <div id="home-main">
          <div id='primeiraDivPrincipal'>
            <h1>Gerenciamento de Pessoas</h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Harum et quas officia neque nihil cupiditate at provident enim a quibusdam! 
            </h3>

            <Button href={'/cadastrarPessoa'} id='btn-main-redirect'>
              <span>Criar nova conta</span>
            </Button>
          </div>

          <div id='segundaDivPrincipal'>
            <img id='imagens' src="https://cdn.pixabay.com/photo/2017/06/30/10/14/social-media-2457842_960_720.png" alt="pessoas" />
          </div>
        </div>

        <div id='extras'>
          <div className='titulos-centralizados'>
            <h2 id='feedback-home'>O que nossos usuários dizem sobre nós?</h2>
          </div>

          <div id='carroussel'>
            <Carousel variant='dark'>
              {comentarios.map((comentario) => (
                <Carousel.Item key={comentario} className='carroussel-item'>
                  <div id='comentariosUsuarios'>
                    <div className='comentario'>
                      <h5 className='comentarioNomeUsuario'>{comentario[0]}</h5>
                      <div className='dataHome'>{showDate()}</div>
                      <p className='paragrafoComentario'>
                        Lorem ipsum, dolor sit 
                        amet consectetur adipisicing elit. 
                        Cum accusantium et dolore voluptates 
                        vero autem quis animi culpa natus, exercitationem, 
                        quae enim totam laborum, excepturi earum id unde voluptate quas.
                        Lorem ipsum, dolor sit 
                        amet consectetur adipisicing elit.
                        </p>
                    </div>
                  </div>

                  <div id='comentariosUsuarios'>
                    <div className='comentario'>
                      <h5 className='comentarioNomeUsuario'>{comentario[1]}</h5>
                      <div className='dataHome'>{showDate()}</div>
                      <p className='paragrafoComentario'>
                        Lorem ipsum, dolor sit 
                        amet consectetur adipisicing elit. 
                        Cum accusantium et dolore voluptates 
                        vero autem quis animi culpa natus, exercitationem, 
                        quae enim totam laborum, excepturi earum id unde voluptate quas.
                        Lorem ipsum, dolor sit 
                        amet consectetur adipisicing elit.
                        </p>
                    </div>
                  </div>

                  <div id='comentariosUsuarios'>
                    <div className='comentario'>
                      <h5 className='comentarioNomeUsuario'>{comentario[2]}</h5>
                      <div className='dataHome'>{showDate()}</div>
                      <p className='paragrafoComentario'>
                        Lorem ipsum, dolor sit 
                        amet consectetur adipisicing elit. 
                        Cum accusantium et dolore voluptates 
                        vero autem quis animi culpa natus, exercitationem, 
                        quae enim totam laborum, excepturi earum id unde voluptate quas.
                        Lorem ipsum, dolor sit 
                        amet consectetur adipisicing elit.
                        </p>
                    </div>
                  </div>
                </Carousel.Item>    
              ))}
            </Carousel>
          </div>
        </div>
        
        <div id="recomendacao">

          <h1>Por que usar nossa plataforma?</h1>
          
          <div id="recomendacao1">
            <div className="icon-recomendacao">
              <BsRobot/>
            </div>

            <h2 className='titulo-recomendacoes'>
                Inteligência Artificial
            </h2>
              
            <p className="paragrafo-recomendacoes">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Enim officiis eligendi inventore iste amet nihil mollitia, 
                sint soluta ipsa nisi minima est, at quis expedita sit. 
                Eum minima nisi dolores.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Enim officiis eligendi inventore iste amet nihil mollitia, 
                sint soluta ipsa nisi minima est, at quis expedita sit. 
                Eum minima nisi dolores.
            </p>
          </div>

          <div id="recomendacao2">
            <div className="icon-recomendacao">
              <BsFillClockFill/>
            </div>

            <h2 className='titulo-recomendacoes'>
              Economize tempo
            </h2>
            <p className="paragrafo-recomendacoes">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Enim officiis eligendi inventore iste amet nihil mollitia, 
              sint soluta ipsa nisi minima est, at quis expedita sit. 
              Eum minima nisi dolores. 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Enim officiis eligendi inventore iste amet nihil mollitia, 
              sint soluta ipsa nisi minima est, at quis expedita sit. 
              Eum minima nisi dolores.
            </p>
          </div>

          <div id="recomendacao3">
            <div className="icon-recomendacao">
              <FaUserCheck/>
            </div>

            <h2 className='titulo-recomendacoes'>
              Focado no usuário
            </h2>
            <p className="paragrafo-recomendacoes">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Enim officiis eligendi inventore iste amet nihil mollitia, 
              sint soluta ipsa nisi minima est, at quis expedita sit. 
              Eum minima nisi dolores.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Enim officiis eligendi inventore iste amet nihil mollitia, 
              sint soluta ipsa nisi minima est, at quis expedita sit. 
              Eum minima nisi dolores.
            </p>
          </div>
        </div>

        <Footer/>
    </div>

    
  )
}

export default Home