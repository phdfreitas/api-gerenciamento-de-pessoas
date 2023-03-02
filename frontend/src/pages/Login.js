import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from "react"

const url = 'http://localhost:8080/login'

const Login = () => {

    const [email, setEmail] = useState("pedro@gmail.com")
    const [senha, setSenha] = useState("pedro")

    const handleSubmit = async (e) => {

        e.preventDefault()
        
        await fetch(url, {
            method: "POST",
            headers: {
                authorization: "Basic " + window.btoa("pedro" + ":" + senha)
              } 
        })
        
        

        console.log(email, senha)
    }

  return (
    <div id='cadastro'>
        <h1 className='titulos-centralizados'>Login</h1>

        <div id='form-cadastro'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicNome">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                
                <Button id='btn-cadastro' size='lg' variant="success" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </div>
    </div>
  )
}

export default Login