<h4 align="center"> 
	🚧  Challenge Teddy Open Finance 😺 Finished 🚀 🚧
</h4>

<p align="center">
 <a href="#-about-the-project">About</a> •
 <a href="#-features">Features</a> •
 <a href="#-how-to-run-the-project">How to Run</a> • 
 <a href="#-technologies">Technologies</a> • 
 <a href="#-author">Author</a> • 
</p>

## 💻 About the project

😺 The Teddy Open Finance Challenge is a backend application that provides a URL shortening service. The service accepts a URL as input and returns a shortened URL as output. The shortened URL is a sequence of alphanumeric characters that is easy to remember and share.

The service works as follows:

The user sends a URL to the service.
The service generates a random shortened URL.
The service stores the shortened URL and the original URL in a database.
The service returns the shortened URL to the user.
The service is implemented using the NestJS platform. NestJS is a back-end application development framework for Node.js. NestJS is used to create robust, scalable, and secure applications.

The service is scaled to handle a large number of requests. The service uses a cluster of servers to distribute the workload. The service also uses a cache to store the most recently shortened URLs.

The service is secure. The service uses HTTPS to protect communications between the client and the server. The service also uses authentication and authorization to protect access to data.

---

## ⚙️ Features
- [x] User registration:

{
  "email": "teste@email.com",
  "password": "abcde123"
}

- [x] User registration:
  - [x]  email, and password.

- [x] Listing and registration of URLs:
  - [x] originalUrl, shortUrl e clickCount.

---

## 🚀 How to Run the Project

### Prerequisites

Before you start, you will need to have the following tools installed on your machine: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). It is also recommended to have an editor to work with the code, such as [VSCode](https://code.visualstudio.com/).

### Environment variables
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

#### 🎲 Running the API (server)

```bash

# Clone this repository
$ git clone git@github.com:BrunoColpani/teddy_open_finance_challenge.git

# Install the dependencies
$ yarn install

# Run the application in development mode
$ yarn start:docker -- build

# The server will start on port 3005 - access http://localhost:3005

```
<p align="center">
  <a href="https://github.com/BrunoColpani/challenge-kuanto-kusta/blob/main/collection/challenge_kuanto_kusta.postman_collection.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

---

## 🛠 Technologies

The following tools were used in the construction of the project:


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

## README Versions

[Portuguese (pt-br)](./README-PT.md)