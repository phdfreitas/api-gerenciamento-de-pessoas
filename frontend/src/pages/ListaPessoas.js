import { Link } from "react-router-dom"
import { useFetch } from "../hooks/useFecth"

import Table from 'react-bootstrap/Table';

const url = 'http://localhost:8080/pessoas/listarTodas'

const ListaPessoas = () => {

    const {data: pessoas} = useFetch(url)

  return (
    <div>

        <h1>Pessoas cadastradas no sistema</h1>

        <Table striped>
            <thead>
                <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Data de Nascimento</th>
                <th>Mais informações</th>
                </tr>
            </thead>
            <tbody>
                {pessoas.map((pessoa) => (
                    <tr key={pessoa.id}>
                        <td>{pessoa.id}</td>
                        <td>{pessoa.nome}</td>
                        <td>{pessoa.dataDeNascimento}</td>
                        <td>
                            <Link to={`/consultar/${pessoa.id}`}>Consultar dados</Link>
                        </td>
                    </tr>
                    
                ))}
            </tbody>
        </Table>
    </div>
  )
}

export default ListaPessoas