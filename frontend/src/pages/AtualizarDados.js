import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from "react"

import { useParams } from "react-router-dom"
import { useEffect } from "react"
import authHeader from '../service/AuthenticationHeader';
import AuthenticationService from '../service/AuthenticationService';
import Message from '../components/Message';

const AtualizarDados = () => {

    const {id} = useParams()
    const url = `http://localhost:8080/pessoas/consultar/${id}`
    
    const currentUser = AuthenticationService.getLoggedInUserName()

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [dataDeNascimento, setDataDeNascimento] = useState("")
    const [senha, setSenha] = useState("")
    
    const [showMessage, setShowMessage] = useState(false)

    useEffect(() => {
        async function fetchData(){

            const response = await fetch(url, {
                method: 'GET',
                headers: authHeader()
            })

            const jsonResponse = await response.json()

            if(jsonResponse.id !== null){
                setNome(jsonResponse.nome)
                setSobrenome(jsonResponse.sobrenome)
                setDataDeNascimento(jsonResponse.dataDeNascimento)
                setEmail(jsonResponse.email)
            }else{
                currentUser.role === "ROLE_USER" ?  
                window.location.href = "/meusEnderecos" : 
                window.location.href = "/listaPessoas"
            }
            
        }

        fetchData()
    }, [url])

    const handleSubmit = async (e) => {

        e.preventDefault()

        const pessoa = {
            nome, 
            sobrenome, 
            dataDeNascimento,
            email,
            senha
        }

        await fetch(`http://localhost:8080/pessoas/atualizarDados/${id}`, {
            method: "PUT",
            headers: authHeader(),
            body: JSON.stringify(pessoa) 
        })
        
        const currentUser = AuthenticationService.getLoggedInUserName()
        setShowMessage(true)
        
        setInterval(() => {
            if(currentUser.role === "ROLE_ADMIN"){
                window.location.href = "http://localhost:3000/listaPessoas"
            }
            else{
                window.location.href = "http://localhost:3000/meusEnderecos"
            }
        }, 1800);
    }

  return (
    <div>
        <h1 className='titulos-centralizados'>Atualizar dados</h1>
        {showMessage && <Message action="Dados atualizados com sucesso!" showMessage={true} bg={'info'}/>}
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
                    <Form.Label>Nova Senha</Form.Label>
                    <Form.Control 
                        type="password" 
                        name="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="Insira nova senha" />
                </Form.Group>
                
                <div id='btn-cadastro-div'>
                    <Button id='btn-cadastro' size='lg' variant="success" type="submit">
                        Atualizar dados
                    </Button>
                </div>
            </Form>
        </div>
    </div>
  )
}

export default AtualizarDados