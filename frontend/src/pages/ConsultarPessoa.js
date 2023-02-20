import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFecth"

import { Link } from "react-router-dom"

const AtualizarPessoa = () => {

    const {id} = useParams()

    const url = `http://localhost:8080/pessoas/consultar/${id}`

    const {data: pessoa} = useFetch(url)

  return (
    <div>
        <p>{pessoa.nome}</p>
        <p>{pessoa.dataDeNascimento}</p>
        <p><Link to={`/atualizarDados/${pessoa.id}`}>Atualizar dados</Link></p>
    </div>
  )
}

export default AtualizarPessoa