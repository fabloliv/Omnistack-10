const { Router } = require("express");
const axios = require("axios");
const Dev = require("./models/Dev");

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
  const { github_username, techs, latitude, longitude } = request.body;

  const apiResponse = await axios.get(
    `https://api.github.com/users/${github_username}`
  );

  const { name = login, avatar_url, bio } = apiResponse.data;

  // separa onde encontrar vírgula e remove espaços antes e depois
  const techsArray = techs.split(",").map(tech => tech.trim());

  const location = {
    type: "Point",
    coordinates: [longitude, latitude]
  };

  const dev = await Dev.create({
    github_username,
    name,
    avatar_url,
    bio,
    techs: techsArray,
    location
  });

  return response.json(dev);
});

module.exports = routes;
