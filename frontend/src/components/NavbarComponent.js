import '../App.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import AuthenticationService from '../service/AuthenticationService';
import { useFetch } from '../hooks/useFecth';

const NavbarComponent = () => {
  
  const path = window.location.pathname
  const user = AuthenticationService.isUserLoggedIn()
  const currentUser = AuthenticationService.getLoggedInUserName()
  
  const url =  user ? `http://localhost:8080/pessoas/consultarPorEmail/${currentUser.sub}` : null
  let {data: pessoa} = useFetch(url)

  const style1 = ["barraNavegacao1", "barraNavegacao1-Brand", "barraNavegacao1-Itens", 
                "barraNavegacao1-Itens-Item1", "barraNavegacao1-Itens-Item2", 
                "barraNavegacao1-Itens-Item3", "barraNavegacao1-Itens-Item4"]
  
  const style2 = ["barraNavegacao2", "barraNavegacao2-Brand", "barraNavegacao2-Itens", 
                  "barraNavegacao2-Itens-Item1", "barraNavegacao2-Itens-Item2",
                  "barraNavegacao2-Itens-Item3", "barraNavegacao2-Itens-Item4"]

  return (
    <div>
      <Navbar id={path === "/" ? style1[0] : style2[0]}>
        <Container>
          <Navbar.Brand className='navbar-brand' href="/" id={path === "/" ? style1[1] : style2[1]}>Gerenciamento</Navbar.Brand>
          <Nav className="me-auto" id={path === "/" ? style1[2] : style2[2]}>
            {!user &&
              <>
                <Nav.Link id={path === "/" ? style1[3] : style2[3]} href="/cadastrarPessoa">Cadastre-se</Nav.Link>
                <Nav.Link id={path === "/" ? style1[4] : style2[4]} href="/login">Entrar</Nav.Link>
              </>
            }
            {user && currentUser.role === 'ROLE_ADMIN' &&
            <>
              <Nav.Link id={path === "/" ? style1[5] : style2[5]} href={`/adicionarNovoEndereco/${pessoa.id}`}>Novo endereço</Nav.Link>
              <Nav.Link id={path === "/" ? style1[5] : style2[5]} href="/listaPessoas">Lista de Pessoas</Nav.Link>
              <Nav.Link id={path === "/" ? style1[6] : style2[6]} href="/" onClick={AuthenticationService.logout}>Sair</Nav.Link>
            </>
            }
            {user && currentUser.role === 'ROLE_USER' &&
            <>
              <div id='custom-navbar-user'>
                <div className='greeting'>Olá, {pessoa.nome}</div>
                <div id='dropdown'>
                  <NavDropdown title="Conta" id="basic-nav-dropdown">
                    <NavDropdown.Item href={`/adicionarNovoEndereco/${pessoa.id}`}>Novo endereço</NavDropdown.Item>
                    <NavDropdown.Item href="/meusEnderecos">Endereços cadastrados</NavDropdown.Item>
                    <NavDropdown.Item href={`/atualizarDados/${pessoa.id}`}>Informações pessoais</NavDropdown.Item>
                    
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/" onClick={AuthenticationService.logout}>
                      Sair
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </div>
            </>
            }
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent