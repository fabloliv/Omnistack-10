const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http"); // utilizado pelo express pra fazer a app ouvir requisições http

const routes = require("./routes");
const { setupWebsocket } = require("./websocket");

const app = express();
const server = http.Server(app);

setupWebsocket(server);

// Cole a connection string, mude a senha e adicione os parâmetros indicados na mensagem de aviso no terminal
// Mude na string a palavra "test" para um novo nome para o BD
mongoose.connect(
  "mongodb+srv://omnistack10:<password>@cluster0-8s1pj.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

// porta
server.listen(3333);
