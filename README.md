# Api Gerenciamento de Pessoas

 Status do Projeto: Em desenvolvimento :warning:

# Sobre o Projeto
O projeto em si consiste em uma API básica desenvolvida em Java utilizando o framework Spring Boot. O principal objetivo com o desenvolvimento desse projeto foi, principalmente, colocar em prática conhecimentos envolvendo o desenvolvimento APIs com Spring boot e Spring Security. Além disso, ao longo do desenvolvimento, achei que seria interessante fazer a integração dessa api com o front-end. Nesse contexto, usei React para fazer essa integração e consequentemente pude, além de aprender react, revisar conteúdos de CSS e JavaScript e também de BootStrap. Por fim, ainda pretendo fazer a conteinerização desse projeto para revisar Docker e também fazer o deploy em alguma das tecnologias de cloud. 

# Entidades
Como dito anteriormente, a API em si é bem simples e possui apenas as duas entidades citadas abaixo com seus atributos:
- Pessoa
    - Nome
    - Sobrenome
    - Data de Nascimento
    - Email
    - Senha
- Endereço
    - CEP
    - Logradouro
    - Complemento
    - UF
    - Cidade
    - Número
    - Tipo do Endereço (Principal ou Secundário)

Nesse ponto em específico, optei por colocar o email e senha (usados para autenticação/autorização) na própria entidade de Pessoa apenas para não aumentar o escopo e a complexidade do projeto. No entanto, seria totalmente possível (ou até preferível) criar uma entidade a parte para representar a "conta de acesso" da pessoa no sistema. 

# Funcionalidades (separadas por perfil)
## Perfil de Administrador
- [x] Consultar todas as pessoas cadastradas.
- [x] Consultar o endereço das pessoas cadastradas.

## Perfil de usuário 'comum'
- [x] Cadastro no sistema.
- [x] Fazer login no sistema.
- [x] Atualizar seus dados no sistema. (Nome, Sobrenome e Data de Nascimento) 
- [x] Cadastrar um ou mais endereço na plataforma.
- [x] Consultar os endereços que fora cadastrados.

Com relação as funcionalidades, o administrador não pode alterar os dados de nenhum usuário comum, apenas visualizar os mesmos, no entanto, um usuário comum não consegue visualizar os dados de nenhum outro usuário cadastrado e, consequentemente, não pode alterar os dados deles também. Aproveitei do próprio Spring Security para implementar essa camada extra de proteção. 

# Como rodar a aplicação
# Sem docker
Para executar a aplicação sem uso do docker, são necessários os seguintes passos:

1. **Clonar o repositório** 

No terminal do seu sistema operacional, cole o comando abaixo:
> git clone https://github.com/phdfreitas/api-gerenciamento-de-pessoas.git

2. **Pelo próprio terminal, vá até a pasta onde está o front-end do projeto:**
```
cd api-gerenciamento-de-pessoas

cd frontend

```
3. **Dentro da pasta *frontend* execute os comandos:**
``` 
npm install

npm start
```
4. **Abra o projeto da pasta *backend* no seu editor de código ou ide, abra o arquivo */resources/application.properties* e altere as configurações de usuário e senha do banco de dados, se necessário:**

```
spring.datasource.username=root
spring.datasource.password=root

- No arquivo, essas são as linhas acima são as que precisam ser alteradas

```

5. **Feito isso, é possível executar a aplicação do backend e agora toda a aplicação estará rodando.**



# Tecnologias
- Java
- Spring Boot
- Spring Security
- React
- MySQL 