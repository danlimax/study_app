# 🚀 Projeto Full Stack com Vite, Mantine, Node.js com express e Prisma

![Preview do Projeto](./images/Study-app.png)

## 📌 Descrição

Este é um projeto **full stack** desenvolvido com **TypeScript** tanto no front-end quanto no back-end.  
A aplicação utiliza tecnologias modernas para garantir performance, organização e escalabilidade.

- O **front-end** foi desenvolvido com **Vite** e **Mantine**.
- O **back-end** foi desenvolvido com **Node.js**, **Express** e **Prisma ORM**.
- O banco de dados utilizado é o **PostgreSQL**, fornecido pelo próprio **Prisma**.
- Ambos os projetos estão no **mesmo repositório**, sendo o back-end localizado na pasta `api`.

---

## 🧱 Tecnologias Utilizadas

### Front-end

- Vite
- React
- Mantine
- TypeScript

### Back-end

- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL

---

## 📂 Estrutura do Projeto

```bash
root/
├── api/
│   ├── prisma/
│   ├── src/
│        ├── app/
│             ├── controllers/
│             ├── services/
│   ├── router/
│   ├── package.json
│   └── tsconfig.json
│
├── src/
│    ├── assets/
│    ├── components/
│    ├── pages/
│    ├── services/
├── App.tsx
├── main.tsx
├── package.json
├── tsconfig.json
└── README.md
```

---

## ▶️ Como Executar o Projeto

🔧 Pré-requisitos

-Antes de iniciar, certifique-se de ter instalado em sua máquina:

-Node.js (versão 22+)

-npm

-Git

---

## ▶️ Iniciando o Back-end

1. Acesse a pasta do back-end:

```bash
cd api
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um banco de dados utilizando o Prisma, lembrando que precisa autenticar no sistema do prisma para a criação do banco de dados:

```bash
npx prisma init --db
```

Obs: Certifique de selecionar os opções referente ao Postgres e o .env do banco de dados será criada automaticamente.

4. Caso não crie automaticamente atualizar o .env com essa configuração:

```bash
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
```

5.Execute as migrações do prisma:

```bash
npx prisma migrate dev --name init
```

6.Agora execute o seguinte comando para gerar o cliente Prisma:

```bash
npx prisma generate
```

7.Agora que você instalou todas as dependências, pode instanciar o Prisma Client. Você precisa passar uma instância do adaptador de driver do Prisma ORM para o construtor do PrismaClient:

Crie um diretório e o arquivo lib/prisma.ts dentro da pasta prisma e coloque o conteúdo abaixo no arquivo.

```bash
import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../generated/prisma/client'

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

export { prisma }
```

7.Inicie o servidor:

```bash
npm run dev
```

8.Para vizualizar o banco de dados utilize o seguinte comando:

```bash
npx prisma studio --config ./prisma.config.ts
```

O back-end estará rodando em:

```bash
http://localhost:3000/
```

Endpoitns dispiníveis:

````bash
GET http://localhost:3000/tasks
POST http://localhost:3000/tasks

No para criar os dados no banco utilize o seguinte body:

{
	"name": "Nome da tarefa ou tarefas",
	"level": "Nível de aprendizado",
	"sugestion": "Sugestões de conteúdos ou sites",
	"theme": "Tema do estudo exemplo: Programação, saúde ou finanças"
}

---

## ▶️ Iniciando o Front-end

1. Volte para a raiz do projeto:

```bash
cd ..
````

2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação:

```bash
npm run dev
```

O front-end estará disponível em:

```bash
http://localhost:5173/
```
