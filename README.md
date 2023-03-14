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

Nesse ponto em específico, optei por colocar o email e senha (usados para login) na própria entidade de Pessoa apenas para não aumentar o escopo e a complexidade do projeto. No entanto, seria totalmente possível (ou até preferível) criar uma entidade a parte para representar a "conta de acesso" da pessoa no sistema. 

# Funcionalidades
- [x] Criar uma pessoa
- [x] Editar uma pessoa
- [x] Consultar uma pessoa
- [x] Listar todas as pessoas
- [x] Criar endereço para uma pessoa
- [x] Listar endereços de uma pessoa
- [x] Poder informar qual endereço é o principal
- [x] Autenticação



# Tecnologias
- Java
- Spring Boot
- Spring Security
- React 