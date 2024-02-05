# Desafio 01 - Node.JS

O primeiro desafio da trilha de node da Rocketseat consistia na criação de um CRUD com os seguintes requisitos:

- criação de uma tarefa;
- listagem de todas as tarefas;
- atualização de uma tarefa pelo id;
- remover uma tarefa pelo id;
- marcar uma tarefa como concluída pelo id;
- importação de tarefas em massa por um arquivo CSV.

## Regras de Negócio

- id: identificador único de cada tarefa;
- title: título da tarefa;
- description: descrição da tarefa;
- completed_at: data de quando a tarefa foi concluída ;com valor inicial de _null_;
- created_at: data de quando a tarefa foi criada;
- updated_at: data da última atualização da tarefa.

## Rotas

- GET: `/tasks`
- POST: `/tasks`
- PUT: `/tasks:id`
- DELETE: `/tasks:id`
- PATCH: `/tasks:id/complete`

## Como executar a aplicação

1. Instale as dependências:

```
npm i 
```
ou 
```
npm install
```

2. Execute a aplicação:

```
npm run dev
```

2.1 Popular o banco através do arquivo csv:

```
node streams/import-csv.js
```