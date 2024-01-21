<h4 align="center"> 
	🚧  Challenge Teddy Open Finance 😺 Concluído 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
</p>

## 💻 Sobre o projeto

😺 O Teddy Open Finance Challenge é uma aplicação backend que fornece um serviço de encurtamento de URLs. O serviço aceita uma URL como entrada e retorna um URL encurtado como saída. O URL encurtado é uma sequência de caracteres alfanuméricos que é fácil de lembrar e compartilhar.

O serviço funciona da seguinte forma:

O usuário envia uma URL para o serviço.
O serviço gera um URL encurtado aleatório.
O serviço armazena o URL encurtado e a URL original em um banco de dados.
O serviço retorna o URL encurtado para o usuário.
O serviço é implementado usando a plataforma NestJS. O NestJS é um framework de desenvolvimento de aplicativos back-end para Node.js. O NestJS é usado para criar aplicativos robustos, escaláveis e seguros.

O serviço é dimensionado para atender a um grande número de solicitações. O serviço usa um cluster de servidores para distribuir a carga de trabalho. O serviço também usa um cache para armazenar os URLs encurtados mais recentes.

O serviço é seguro. O serviço usa HTTPS para proteger as comunicações entre o cliente e o servidor. O serviço também usa autenticação e autorização para proteger o acesso aos dados.

---

## ⚙️ Funcionalidades
- [x] Login de usuario:

{
  "email": "teste@email.com",
  "password": "abcde123"
}

- [x] Listagem e Cadastro de usuários:
  - [x]  email e password.

- [x] Listagem e cadastro de URLs:
  - [x] originalUrl, shortUrl e clickCount.

- Todo o usuario é um admim

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). Além disso, é bom ter um editor para trabalhar com o código como o [VSCode](https://code.visualstudio.com/).

### Variáveis ​​ambientais
```bash
APP_PORT=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USER=
DATABASE_PASSWORD=
JWT_SECRET=
API_DOMAIN=http://localhost
```

#### 🎲 Rodando a API (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:BrunoColpani/teddy_open_finance_challenge.git


# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn start:docker -- build

# O servidor inciará na porta:8080 - acesse http://localhost:8080

```

<p align="center">
  <a href="https://github.com/BrunoColpani/teddy_open_finance_challenge/blob/main/collection/Teddy.postman_collection.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>
Testes manuais e automatizados na coleção, variáveis ​​de ambiente na mesma pasta.

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:


#### [](https://github.com/tgmarinho/Ecoleta#server-nodejs--typescript)**Server** ([NodeJS](https://nodejs.org/en/))

- **[Nestjs](http://knexjs.org/)**
- **[Class-tranformer](https://www.npmjs.com/package/class-transformer)**
- **[Class-validator](https://www.npmjs.com/package/class-validator)**
- **[Passport](https://www.passportjs.org/packages/passport-jwt/)**
- **[jsonwebtoken](https://jwt.io/)**
- **[TypeORM](https://typeorm.io)**
- **[PostgreSQL](https://www.postgresql.org)**
- **[Docker](https://www.docker.com)**

---

## 🦸 Autor

<a href="https://www.linkedin.com/in/bruno-colpani-0b1152138/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/87588227?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Bruno Colpani</b></sub></a> 
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Bruno-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/bruno-colpani-0b1152138/)](https://www.linkedin.com/in/bruno-colpani-0b1152138/)
[![Gmail Badge](https://img.shields.io/badge/-bruno.colpani1@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:bruno.colpani1@gmail.com)](mailto:bruno.colpani1@gmail.com)

---

## Versões do README

[Inglês en](./README-EN.md)