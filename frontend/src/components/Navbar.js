import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to={"/cadastrarPessoa"}>Cadastrar Pessoa</Link>
            <Link to={"/listaPessoas"}>Lista de Pessoas</Link>
        </nav>
    </div>
  )
}

export default Navbar