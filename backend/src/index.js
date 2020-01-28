const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

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

app.use(cors());
app.use(express.json());
app.use(routes);

// porta
app.listen(3333);
