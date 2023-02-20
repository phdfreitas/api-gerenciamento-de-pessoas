import { useState } from "react"

import { useParams } from "react-router-dom"
import { useEffect } from "react"

import { redirect } from "react-router-dom"

const AtualizarDados = () => {

    const {id} = useParams()
    const url = `http://localhost:8080/pessoas/consultar/${id}`
    
    const [nome, setNome] = useState("")
    const [dataDeNascimento, setDataDeNascimento] = useState("")
    
    useEffect(() => {
        async function fetchData(){

            const response = await fetch(url)

            const jsonResponse = await response.json()
            
            setNome(jsonResponse.nome)
            setDataDeNascimento(jsonResponse.dataDeNascimento)
        }

        fetchData()
    }, [url])

    const handleSubmit = async (e) => {

        e.preventDefault()

        const pessoa = {
            nome, 
            dataDeNascimento
        }

        await fetch(`http://localhost:8080/pessoas/atualizarDados/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(pessoa) 
        })

        window.location.href = "http://localhost:3000/listaPessoas"
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                    Nome:
                    <input 
                        type="text" 
                        name="nome" 
                        id="nome" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)}
                    />
                </label>

                <label>
                    Data de Nascimento:
                    <input 
                        type="text" 
                        name="nascimento" 
                        id="nascimento" 
                        value={dataDeNascimento} 
                        onChange={(e) => setDataDeNascimento(e.target.value)}
                    />
                </label>

                <input type="submit" value="Atualizar" onClick={() => {return redirect("/listaPessoas")}}/>
            </form>
    </div>
  )
}

export default AtualizarDados