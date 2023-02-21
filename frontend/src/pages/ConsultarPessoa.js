import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFecth"

import { Link } from "react-router-dom"

import Table from 'react-bootstrap/Table';

const AtualizarPessoa = () => {

    const {id} = useParams()

    const url = `http://localhost:8080/pessoas/consultar/${id}`

    const {data: pessoa} = useFetch(url)

  return (
    <div>
      <h1 className="titulos-centralizados">Endereços de {pessoa.nome}</h1>

      <Table striped>
          <thead>
              <tr>
              <th>#</th>
              <th>Cep</th>
              <th>Logradouro</th>
              <th>Complemento</th>
              <th>Bairro</th>
              <th>UF</th>
              <th>Cidade</th>
              <th>Número</th>
              <th>Tipo do Endereço</th>
              <th>Mais informações</th>
              </tr>
          </thead>
          <tbody>
            {pessoa.enderecos && pessoa.enderecos.map((endereco) => (
              <tr key={endereco.id}>
                <td>{endereco.id}</td>
                <td>{endereco.cep}</td>
                <td>{endereco.logradouro}</td>
                <td>{endereco.complemento}</td>
                <td>{endereco.bairro}</td>
                <td>{endereco.uf}</td>
                <td>{endereco.cidade}</td>
                <td>{endereco.numero}</td>
                <td>{endereco.tipoEndereco[0].toUpperCase() + endereco.tipoEndereco.substring(1).toLowerCase()}</td>
                <td>
                  <Link to={`/`}>Atualizar Endereço</Link>
                  <Link to={`/`}>Excluir endereço</Link>
                </td>
              </tr>
            ))}
          </tbody>
      </Table>
    </div>
  )
}

export default AtualizarPessoa