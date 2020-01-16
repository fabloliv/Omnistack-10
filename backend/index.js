const express = require("express");

const app = express();

// Criando rotas
app.get("/", (request, response) => {
  return response.json({ message: "hello omnistack week" });
});

// porta
app.listen(3333);
