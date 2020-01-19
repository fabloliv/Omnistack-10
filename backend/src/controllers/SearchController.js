const Dev = require("../models/Dev");

module.exports = {
  async index(request, response) {
    // busca por geolocalização
    // filtrar por techs

    console.log(request.query);

    return response.json({ devs: [] });
  }
};
