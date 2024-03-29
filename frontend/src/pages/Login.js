import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import {VscError} from 'react-icons/vsc'

import { useState } from "react"
import AuthenticationService from '../service/AuthenticationService';

const Login = () => {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {

        e.preventDefault()

        AuthenticationService.executeJwtAuthenticationService(email, senha)
        .then((response) => {
            console.log(response.status)
            if(response.status === 403){
                setError('Usuário ou senha inválidos')
                return
            }
            AuthenticationService.registerSuccessfulLoginForJwt(email, response.data)
            window.location.href = "/listaPessoas"
        })
    }

  return (
    <div id='cadastro'>
        <h1 className='titulos-centralizados'>Bem-vindo(a)!</h1>
        <h3 id="subtitulo-login">
            Faça login para acessar a plataforma
        </h3>
        <div id='form-cadastro'>
            {error !== "" && 
                <Alert key="danger" variant="danger" className='alert-position'>
                    <VscError/> 
                    {error}
                </Alert>
            }

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicNome">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoFocus
                        placeholder="Insira seu email" />
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
                
                <div id='links-extras-login'>
                    <div>
                        <a href="/cadastrarPessoa">Não possui cadastro? Clique aqui</a>
                    </div>
                    <div>
                        <a href="/">Esqueceu a senha? </a>
                    </div>
                </div>

                <div id='btn-cadastro-div'>
                    <Button id='btn-cadastro' size='lg' variant="success" type="submit">
                        Entrar
                    </Button>
                </div>
            </Form>
        </div>
    </div>
  )
}

export default Login