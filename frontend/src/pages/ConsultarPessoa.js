import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFecth"

import { Link } from "react-router-dom"

import Table from 'react-bootstrap/Table';

import AuthenticationService from '../service/AuthenticationService';
import {BsExclamationOctagon} from 'react-icons/bs'

const AtualizarPessoa = () => {

    const {id} = useParams()

    const currentUser = AuthenticationService.getLoggedInUserName()

    const url = currentUser.role === 'ROLE_ADMIN' ? 
    `http://localhost:8080/pessoas/enderecos/${id}` : 
    `http://localhost:8080/pessoas/consultar/${currentUser.id}`

    const {data: pessoa} = useFetch(url)
    console.log(pessoa)
  return (
    <div>
      {pessoa.length === 0 ? 
        <>
          <div id="none-address">

            <p id="p-none-address">
              <span>
                <BsExclamationOctagon size={50} color="#000"/>
              </span>
              Não há endereços cadastrados
            </p>
          </div>
        </>
        :
        <>
          {(currentUser.role === 'ROLE_USER' || currentUser.id === {id}) &&
            <>
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
            </>
          }

          {currentUser.role === 'ROLE_ADMIN' &&
            <>
            <h1 className="titulos-centralizados">Endereços do usuário {id}</h1>

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
                  </tr>
              </thead>
              <tbody>
                {pessoa && pessoa.map((endereco) => (
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
                  </tr>
                ))}
              </tbody>
            </Table>
            </>
          }
        </>
      }
    </div>
  )
}

export default AtualizarPessoa