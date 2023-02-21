import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from "react"

import { useParams } from "react-router-dom"
import { useEffect } from "react"

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
        <h1 id='titulo-cadastro'>Atualizar dados</h1>

        <div id="form-cadastro">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicNome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Insira seu nome" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDataDeNascimento">
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control 
                        type="text"
                        name="dataDeNascimento"
                        value={dataDeNascimento} 
                        onChange={(e) => setDataDeNascimento(e.target.value)} 
                        placeholder="dd/mm/yyyy"
                    />
                </Form.Group>
                
                <Button id='btn-cadastro' size='lg' variant="success" type="submit">
                    Atualizar dados
                </Button>
            </Form>
        </div>
    </div>
  )
}

export default AtualizarDados