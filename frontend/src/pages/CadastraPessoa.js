import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from "react"

const url = 'http://localhost:8080/pessoas/cadastrarNova'

const CadastraPessoa = () => {

    const [nome, setNome] = useState("")
    const [dataDeNascimento, setDataDeNascimento] = useState("")


    const handleSubmit = async (e) => {

        e.preventDefault()
 
        const pessoa = {
            nome, 
            dataDeNascimento
        }

        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(pessoa) 
        })

        window.location.href = "http://localhost:3000/listaPessoas"
    }

  return (
    <div id='cadastro'>
        <h1 id='titulo-cadastro'>Cadastrar nova pessoa</h1>

        <div id='form-cadastro'>
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
                Cadastrar
            </Button>
        </Form>
        </div>
    </div>
  )
}

export default CadastraPessoa