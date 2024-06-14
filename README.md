# API de Blog

Este projeto implementa uma API simples para um sistema de blog usando Node.js, TypeScript e Prisma com SQLite como banco de dados. A API permite operações CRUD básicas em posts, comentários e usuários.

## Pré-requisitos

Antes de iniciar, certifique-se de ter Node.js e npm instalados em sua máquina. Você também precisará do TypeScript e do Prisma CLI globalmente instalados, que podem ser adicionados com:

```bash
npm install -g typescript prisma
```

## Configuração do Projeto

Clone o repositório e instale as dependências:

```bash
git clone [URL_DO_SEU_REPOSITÓRIO]
cd meuProjetoAPI
npm install
```

## Inicialização do Banco de Dados

Execute o seguinte comando para configurar o banco de dados e aplicar as migrações iniciais:

```bash
npx prisma migrate dev
```

## Executando a API

Para iniciar o servidor, use o seguinte comando:

```bash
npm run dev
```

O servidor estará acessível em `http://localhost:3000/api`.

## Endpoints da API

A API possui os seguintes endpoints:

### Posts

- `GET /api/posts`: Lista todos os posts.
- `POST /api/posts`: Cria um novo post. Requer um body JSON com `title` e `content`.

### Comentários e Usuários

- Implemente endpoints adicionais para comentários e usuários seguindo a mesma estrutura de posts.

## Contribuições

Contribuições são bem-vindas! Por favor, crie um pull request para contribuir.

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.