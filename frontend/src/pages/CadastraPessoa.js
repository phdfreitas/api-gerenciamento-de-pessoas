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

        setNome("")
        setDataDeNascimento("")
    }

  return (
    <div>
        <h1>Cadastrar nova pessoa</h1>

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

                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    </div>
  )
}

export default CadastraPessoa