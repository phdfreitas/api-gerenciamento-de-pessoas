import '../App.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AuthenticationService from '../service/AuthenticationService';

const NavbarComponent = () => {
  return (
    <div>
      <Navbar id='barraNavegacao'>
        <Container>
          <Navbar.Brand href="/" id='barraNavegacao-Brand'>Gerenciamento</Navbar.Brand>
          <Nav className="me-auto" id='barraNavegacao-Itens'>
            {!AuthenticationService.isUserLoggedIn() &&
              <>
                <Nav.Link id='barraNavegacao-Itens-Item1' href="/cadastrarPessoa">Cadastrar Pessoa</Nav.Link>
                <Nav.Link id='barraNavegacao-Itens-Item2' href="/login">Entrar</Nav.Link>
              </>
            }
            {AuthenticationService.isUserLoggedIn() &&
            <>
              <Nav.Link id='barraNavegacao-Itens-Item3' href="/listaPessoas">Lista de Pessoas</Nav.Link>
              <Nav.Link id='barraNavegacao-Itens-Item4' href="/" onClick={AuthenticationService.logout}>Sair</Nav.Link>
            </>
            }
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent