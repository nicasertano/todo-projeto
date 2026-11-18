# To Do – Gerenciador de Tarefas

## Sobre o projeto

O To Do é um sistema de gerenciamento de tarefas desenvolvido para cadastrar, consultar, atualizar e excluir atividades. O projeto utiliza uma API integrada ao banco de dados Supabase.

## Tecnologias utilizadas

- **HTML:** estrutura da página.
- **CSS:** estilização da interface.
- **JavaScript:** funcionalidades e comunicação com a API.
- **Node.js:** ambiente de execução do Backend.
- **Express:** criação das rotas da API.
- **Supabase:** banco de dados PostgreSQL.
- **Postman:** testes das requisições da API.

## Funcionalidades

O sistema permite:

- Cadastrar novas tarefas.
- Listar as tarefas cadastradas.
- Marcar tarefas como concluídas.
- Excluir tarefas.

## Estrutura do projeto

```text
todo-projeto/
│
├── backend/
│   ├── index.js
│   ├── supabase.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .gitignore
└── README.md
```

## Banco de dados

Foi utilizada uma tabela chamada `tarefas`, com os seguintes campos:

| Campo | Tipo |
|---|---|
| id | bigint (chave primária) |
| title | varchar |
| completed | boolean |

## Rotas da API

| Método | Rota | Descrição |
|---|---|---|
| GET | /tarefas | Consultar tarefas |
| POST | /tarefas | Cadastrar tarefa |
| PUT | /tarefas/:id | Atualizar tarefa |
| DELETE | /tarefas/:id | Excluir tarefa |

## Como executar o projeto

### 1. Backend

Entre na pasta `backend` e instale as dependências:

```bash
npm install
```

Configure o arquivo `.env` com as credenciais do projeto Supabase:

```env
SUPABASE_URL=sua_url_do_supabase
SUPABASE_KEY=sua_chave_publicavel
PORT=3000
```

Inicie o servidor:

```bash
node index.js
```

### 2. Frontend

Abra outro terminal, entre na pasta `frontend` e execute:

```bash
python3 -m http.server 5500
```

Depois, acesse a porta 5500 pelo navegador do GitHub Codespaces.

**Observação:** configure no arquivo `script.js` o endereço correspondente ao Backend em execução.

## Testes

As operações da API foram testadas utilizando o Postman, verificando o funcionamento das operações de cadastro, consulta, atualização e exclusão de tarefas.

## Considerações finais

O desenvolvimento deste projeto permitiu aplicar conhecimentos de desenvolvimento Web, integração entre Frontend e Backend, criação de APIs REST e utilização de banco de dados em nuvem.
