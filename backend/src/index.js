const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Cole a connection string, mude a senha e adicione os parâmetros indicados na mensagem de aviso no terminal
// Mude na string a palavra "test" para um novo nome para o BD
mongoose.connect(
  "mongodb+srv://omnistack10:76xNBQbMNumC9Zdi@cluster0-8s1pj.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

/*
 * Query Params: request.query ( Filtros, ordenação, paginação,...)
 * Route Params: request.params ( Identificar um recurso na alteração ou remoção )
 * Body: request.body ( Dados para criação ou alteração de um registro )
 */

// Criando rotas
app.get("/", (request, response) => {
  return response.json({ message: "hello omnistack week" });
});

// porta
app.listen(3333);
