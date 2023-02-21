import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from "react"

const url = 'http://localhost:8080/pessoas/cadastrarNova'

const CadastraPessoa = () => {

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [dataDeNascimento, setDataDeNascimento] = useState("")
    const [senha, setSenha] = useState("")

    const handleSubmit = async (e) => {

        e.preventDefault()
 
        const pessoa = {
            nome, 
            sobrenome, 
            dataDeNascimento,
            email,
            senha
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
        <h1 className='titulos-centralizados'>Cadastrar nova pessoa</h1>

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

            <Form.Group className="mb-3" controlId="formBasicSobrenome">
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control 
                    type="text" 
                    name="sobrenome"
                    value={sobrenome}
                    onChange={(e) => setSobrenome(e.target.value)}
                    placeholder="Insira seu sobrenome" />
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

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Insira seu nome" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSenha">
                <Form.Label>Senha</Form.Label>
                <Form.Control 
                    type="password" 
                    name="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Insira sua senha" />
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