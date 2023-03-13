import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from "react"
import { useParams } from 'react-router-dom';
import authHeader from '../service/AuthenticationHeader';

import Message from '../components/Message';

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
    
    const [showMessage, setShowMessage] = useState(false)

    const handleCep = (e) => {
        
        const urlCep = `https://viacep.com.br/ws/${cep}/json/`

        async function fetchData(){

            const response = await fetch(urlCep)

            const jsonResponse = await response.json()
            
            if(jsonResponse.cep){
                setCep(jsonResponse.cep)
                setLogradouro(jsonResponse.logradouro)
                setComplemento(jsonResponse.complemento === "s/n" ? "" : jsonResponse.complemento)
                setBairro(jsonResponse.bairro)
                setUf(jsonResponse.uf)
                setCidade(jsonResponse.localidade)
            }
        }
        fetchData()
    }

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
            headers: authHeader(),
            body: JSON.stringify(endereco)
        })

        setShowMessage(true)
        
        setInterval(() => {
            window.location.href = `http://localhost:3000/meusEnderecos`
        }, 1800);

    }

  return (
    <div>
        <h1 className='titulos-centralizados'>Cadastrar novo endereço</h1>
        {showMessage && <Message action="Dados atualizados com sucesso!" showMessage={true} bg={'info'}/>}
        <div id='form-cadastro'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicCep">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="cep"
                        value={cep}
                        onBlur={handleCep}
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
                <div id='btn-cadastro-div'>
                    <Button id='btn-cadastro' size='lg' variant="success" type="submit">
                        Adicionar endereço
                    </Button>
                </div>
            </Form>
        </div>
    </div>
  )
}

export default CadastraEndereco