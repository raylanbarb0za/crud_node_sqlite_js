# CRUD Node.js + SQLite

Uma API REST desenvolvida com **Node.js, Express e SQLite**, com o objetivo de praticar operações CRUD e compreender a integração entre um servidor JavaScript e um banco de dados relacional.

O projeto implementa o gerenciamento de produtos, permitindo cadastrar, consultar, atualizar e excluir registros por meio de requisições HTTP.

## Tecnologias utilizadas

- **Node.js** — ambiente de execução JavaScript.
- **Express** — framework para criação do servidor e das rotas HTTP.
- **JavaScript** — linguagem utilizada no desenvolvimento da aplicação.
- **SQLite** — banco de dados relacional para armazenamento dos produtos.

##  Funcionalidades

- Listar todos os produtos cadastrados.
- Consultar um produto específico pelo ID.
- Cadastrar novos produtos.
- Atualizar informações de produtos existentes.
- Excluir produtos pelo ID.
- Retornar os dados da API no formato JSON.
- Persistir os dados utilizando SQLite.

##  Estrutura do projeto

```text
crud_node_sqlite_js/
├── server.js       # Servidor e rotas da API
├── database.js     # Configuração e conexão com o banco
├── database.sqlite # Banco de dados SQLite
├── .gitignore      # Arquivos ignorados pelo Git
├── package.json    # Dependências e scripts do projeto
└── README.md       # Documentação do projeto
```

##  Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- npm, incluído na instalação do Node.js.

### 1. Clone o repositório

```bash
git clone https://github.com/raylanbarb0za/crud_node_sqlite_js.git
```

### 2. Entre na pasta do projeto

```bash
cd crud_node_sqlite_js
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor

```bash
npm start
```

Com o servidor em execução, acesse:

`http://localhost:3000`

##  Endpoints da API

A API utiliza o recurso `/produtos` para realizar as operações de gerenciamento.

| Método HTTP | Endpoint | Descrição |
|---|---|---|
| `GET` | `/produtos` | Lista todos os produtos |
| `GET` | `/produtos/:id` | Busca um produto pelo ID |
| `POST` | `/produtos` | Cadastra um novo produto |
| `PUT` | `/produtos/:id` | Atualiza um produto existente |
| `DELETE` | `/produtos/:id` | Exclui um produto |

### Exemplo de cadastro

Para cadastrar um produto, envie uma requisição `POST` para `/produtos`, com o corpo no formato JSON:

```json
{
  "nome": "Teclado Mecânico",
  "preco": 199.90
}
```

### Exemplo de atualização

Para atualizar um produto, envie uma requisição `PUT` para `/produtos/1`, utilizando um corpo JSON como este:

```json
{
  "nome": "Teclado Gamer",
  "preco": 249.90
}
```

Os exemplos utilizam o ID `1` apenas para ilustrar as requisições.

## ️ Estrutura dos dados

A tabela `produtos` utiliza os seguintes campos:

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | INTEGER | Identificador único e autoincremental |
| `nome` | TEXT | Nome do produto, obrigatório |
| `preco` | REAL | Preço do produto, obrigatório |

## Como testar

Você pode testar os endpoints utilizando ferramentas como [Insomnia](https://insomnia.rest/) (particularmente eu acho melhor).

Envie requisições para `http://localhost:3000/produtos` e verifique as respostas retornadas pela API.

## Objetivo do projeto

Este projeto faz parte da minha jornada de aprendizado em desenvolvimento de software, com foco em backend, construção de APIs REST, integração com banco de dados e manipulação de dados utilizando JavaScript e SQL.

Durante o desenvolvimento, busquei compreender na prática como estruturar rotas, processar requisições HTTP, executar consultas SQL e organizar a comunicação entre a aplicação e o banco de dados.


