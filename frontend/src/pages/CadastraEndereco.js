import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from "react"
import { useParams } from 'react-router-dom';

const CadastraEndereco = () => {

    const {id} = useParams()

    const url = `http://localhost:8080/pessoas/adicionarNovoEndereco/${id}`

    const [cep, setCep] = useState("")
    const [logradouro, setLogradouro] = useState("");
    const [complemento, setComplemento] = useState("")
    const [bairro, setBairro] = useState("")
    const [uf, setUf] = useState("")
    const [cidade, setCidade] = useState("")
    const [numero, setNumero] = useState("")
    const [tipoEndereco, setTipoEndereco] = useState("")
        
    const handleSubmit = async (e) => {

        e.preventDefault()

        const endereco = {
            cep, 
            logradouro,
            complemento, 
            bairro, 
            uf, 
            cidade, 
            numero, 
            tipoEndereco
        }

        await fetch(url, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(endereco)
        })

        //window.location.href = "http://localhost:3000/listaPessoas"
    }

  return (
    <div>
        <h1 id='titulo-cadastro'>Cadastrar novo endereço</h1>

        <div id='form-cadastro'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicCep">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="cep"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                        placeholder="Insira seu cep" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLogradouro">
                    <Form.Label>Logradouro</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="logradouro"
                        value={logradouro}
                        onChange={(e) => setLogradouro(e.target.value)}
                        placeholder="Insira seu logradouro" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicComplemento">
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="complemento"
                        value={complemento}
                        onChange={(e) => setComplemento(e.target.value)}
                        placeholder="Insira complemento" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicBairro">
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control 
                        type="text"
                        name="bairro"
                        value={bairro} 
                        onChange={(e) => setBairro(e.target.value)} 
                        placeholder="Bairro"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUf">
                    <Form.Label>UF</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="uf"
                        value={uf}
                        onChange={(e) => setUf(e.target.value)}
                        placeholder="UF" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCidade">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="cidade"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                        placeholder="UF" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumero">
                    <Form.Label>Número</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="numero"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                        placeholder="Insira seu numero" />
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Tipo do Endereço</Form.Label>
                    <div>
                        <Form.Check
                            type={'radio'}
                            label={'Endereço Principal'}
                            id={'tipoEndereco1'}
                            name={'tipo-endereco'}
                            value={"PRINCIPAL"}
                            onChange={(e) => setTipoEndereco(e.target.value)}
                            inline
                        />

                        <Form.Check
                            type={'radio'}
                            label={'Endereço Secundário'}
                            id={'tipoEndereco2'}
                            name={'tipo-endereco'}
                            value={"SECUNDARIO"}
                            onChange={(e) => setTipoEndereco(e.target.value)}
                            inline
                        />
                    </div>
                </Form.Group>

                <Button id='btn-cadastro' size='lg' variant="success" type="submit">
                    Adicionar endereço
                </Button>
            </Form>
        </div>
    </div>
  )
}

export default CadastraEndereco