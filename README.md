# CRUD API Project

## Sobre o Projeto
Este projeto é uma aplicação backend que implementa uma API CRUD (Create, Read, Update, Delete) usando Node.js, Express e SQLite3. O objetivo principal é gerenciar uma tabela chamada `items`, que armazena informações básicas, como o nome de um item.

A API permite as seguintes operações:
- **Criar**: Adicionar novos itens à tabela.
- **Ler**: Obter todos os itens ou um item específico.
- **Atualizar**: Editar as informações de um item existente.
- **Excluir**: Remover itens do banco de dados.

## Tecnologias Utilizadas
- **Node.js**: Plataforma para execução do código JavaScript no servidor.
- **Express**: Framework para simplificar a criação de rotas e a manipulação de requisições HTTP.
- **SQLite3**: Banco de dados leve para armazenar os dados da aplicação.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática ao código.

## Objetivos de Aprendizado
Com este projeto, estou aprendendo e praticando:

1. **CRUD com Banco de Dados**:
   - Como conectar uma aplicação Node.js a um banco de dados SQLite.
   - Criar tabelas e gerenciar registros usando comandos SQL.

2. **Boas Práticas em API**:
   - Validação de entradas para evitar erros no banco de dados.
   - Respostas claras e apropriadas para cada operação da API (status codes HTTP).

3. **TypeScript**:
   - Tipagem de parâmetros e respostas.
   - Uso de interfaces para definir o formato esperado dos dados.

4. **Promessas e Async/Await**:
   - Como lidar com operações assíncronas de forma clara e organizada.

5. **Estruturação de Projetos**:
   - Separar responsabilidades em módulos como `router` e `db`.

## Como Executar o Projeto
1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd <nome-da-pasta>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicialize o banco de dados:
   O banco de dados será criado automaticamente na primeira execução da aplicação.

4. Execute o servidor:
   ```bash
   npm run dev
   ```

5. Acesse a API:
   A aplicação estará rodando em `http://localhost:3000`. Utilize ferramentas como Postman ou cURL para testar as rotas.



## Conclusão
Este projeto é um passo importante no aprendizado de desenvolvimento backend. Ele reforça conceitos fundamentais de APIs e banco de dados, preparando o caminho para projetos mais complexos no futuro.
---

