import Button from 'react-bootstrap/Button';

import Carousel from 'react-bootstrap/Carousel';
import Footer from '../components/Footer';

const Home = () => {

  const comentarios = 
      [["Ana Clara", "Pedro Henrique", "Júlia Silva"], 
      ["José Carlos", "Amanda Maria", "Carlos Henrique"]]
  
  const showDate = () => {
    const date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();

    time = time.substring(0, 5);
    
    return date + ' ' + time;
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

            <Button href={'/cadastrarPessoa'} variant='warning' id='btn-main-redirect'>
              Criar uma conta
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

          <Carousel>
            {comentarios.map((comentario) => (
              <Carousel.Item>
                <div key={comentario[0]} id='comentariosUsuarios'>
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

                <div key={comentario[1]} id='comentariosUsuarios'>
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

                <div key={comentario[2]} id='comentariosUsuarios'>
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

        <Footer/>
    </div>

    
  )
}

export default Home