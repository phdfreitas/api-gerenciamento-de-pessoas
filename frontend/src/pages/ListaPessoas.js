import { Link } from "react-router-dom"
import { useFetch } from "../hooks/useFecth"

const url = 'http://localhost:8080/pessoas/listarTodas'

const ListaPessoas = () => {

    const {data: pessoas} = useFetch(url)

  return (
    <div>
        <h1>Lista de Pessoas</h1>
        <ul>
            {pessoas.map((pessoa) => (
                <li key={pessoa.id}> 
                    <p>
                        {pessoa.nome} - {pessoa.dataDeNascimento}
                        <span>
                            <Link to={`/consultar/${pessoa.id}`}>Consultar dados</Link>
                        </span>
                    </p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ListaPessoas