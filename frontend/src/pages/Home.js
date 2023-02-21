import Button from 'react-bootstrap/Button';

const Home = () => {
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
            <h2 id='feedback-home'>O que nossos usuários dizem da gente?</h2>
          </div>
        </div>
    </div>

    
  )
}

export default Home