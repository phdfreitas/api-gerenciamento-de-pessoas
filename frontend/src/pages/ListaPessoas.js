import { useState, useEffect } from "react"

const url = 'http://localhost:8080/pessoas/listarTodas'

const ListaPessoas = () => {

    const [pessoas, setPessoas] = useState([])

    useEffect(() => {
        async function fetchData(){

            const response = await fetch(url)

            const jsonResponse = await response.json()

            setPessoas(jsonResponse)
        }

        fetchData()
    }, [])

  return (
    <div>
        <h1>Lista de Pessoas</h1>
        <ul>
            {pessoas.map((pessoa) => (
                <li key={pessoa.id}> {pessoa.nome} - {pessoa.dataDeNascimento}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListaPessoas