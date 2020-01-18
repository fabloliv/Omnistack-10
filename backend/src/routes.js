const { Router } = require("express");

const routes = Router();

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

/*
 * Query Params: request.query ( Filtros, ordenação, paginação,...)
 * Route Params: request.params ( Identificar um recurso na alteração ou remoção )
 * Body: request.body ( Dados para criação ou alteração de um registro )
 */

// Criando rotas
routes.get("/", (request, response) => {
  return response.json({ message: "hello omnistack week" });
});

module.exports = routes;