import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Gerenciamento</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/cadastrarPessoa">Cadastrar Pessoa</Nav.Link>
            <Nav.Link href="/listaPessoas">Lista de Pessoas</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent