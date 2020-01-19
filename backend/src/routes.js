const { Router } = require("express");
const axios = require("axios");

const routes = Router();

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

/*
 * Query Params: request.query ( Filtros, ordenação, paginação,...)
 * Route Params: request.params ( Identificar um recurso na alteração ou remoção )
 * Body: request.body ( Dados para criação ou alteração de um registro )
 */

// Criando rota para cadastro de devs
routes.post("/devs", async (request, response) => {
  const { github_username } = request.body;

  const apiResponse = await axios.get(
    `https://api.github.com/users/${github_username}`
  );

  console.log(apiResponse.data);

  return response.json({ message: "hello omnistack week" });
});

module.exports = routes;
