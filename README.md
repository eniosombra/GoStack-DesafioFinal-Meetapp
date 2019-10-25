# Aplicação completa do GoStack-DesafioFinal (Projeto Meetapp)

Esse projeto faz parte do desafio final no bootcamp promovido pela empresa Rocketseat utilizado para finalização e certificação do curso. Este desafio consiste no desenvolvimento de uma aplicação que organiza grupos online de pessoas que realizam eventos presenciais com interesses semelhantes.

### `A aplicação Meetapp é dividida em três projetos (backend, fontend, mobile).`

#### `Observação: O projeto Mobile foi testado em smartphone com sistema operacional Android`.

## Principais tecnologias utilizadas:

- [NodeJS](https://nodejs.org)
- [ReactJS](https://reactjs.org/)
- [React Native](https://facebook.github.io/react-native/)
- [Redux](https://redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [Styled-components](https://www.styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Immer](https://github.com/immerjs/immer)
- [Date-fns](https://date-fns.org/)
- [Reactotron](https://infinite.red/reactotron)
- [Docker](https://www.docker.com/)
- [Mongodb](https://www.mongodb.com/)
- [Redis](https://redis.io/)
- [Postgresql](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/)
- [Yup](https://github.com/jquense/yup)
- [Unform](https://github.com/Rocketseat/unform)

## Instrução para configurar a aplicação

Para clone e executar a aplicação será preciso que ter instalado o `Node.js e o Yarn`.
Além disso possuir as instâncias `(Postgres, Mongodb e Redis)` devidamente iniciadas utilizando o `Docker`.

No projeto `Backend` será necessário criar um o arquivo `.env` com base no `.env.example` e informar todas as configurações solicitadas. Para o projeto Mobile configure `(url e porta)` no arquivo `/services/api.js` apontando para seu `emulador android`.

## Principais passos para clonar e executar os projetos

```bash
# Realize um clone deste repositório github
$ git clone https://github.com/eniosombra/GoStack-DesafioFinal-Meetapp.git

# Acesse a pasta criada
$ cd GoStack-DesafioFinal-Meetapp

# Instale as dependências do projeto Backend
$ cd backend
$ yarn install

# Execute as migrations no banco de dados
$ yarn sequelize db:migrate

# Execute o servidor Backend
$ yarn dev

# Instale as depedências do projeto Frontend
$ cd frontend
$ yarn start

# Execute o servidor Frontend
$ yarn install

# Instale as dependências do projeto Mobile
$ cd mobile
$ yarn install

# Instale a aplicação Mobile no emulador (Android)
$ react-native run-android

# Execute o projeto Mobile
$ react-native start
```
