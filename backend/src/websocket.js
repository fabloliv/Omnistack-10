const socketio = require("socket.io");
const parseStringAsArray = require("./utils/parseStringAsArray");
const calcuteDistance = require("./utils/calcuteDistance");

let io;
const connections = [];

exports.setupWebsocket = server => {
  io = socketio(server);

  io.on("connection", socket => {
    // console.log(socket.id);
    // console.log(socket.handshake.query);
    const { latitude, longitude, techs } = socket.handshake.query;

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude)
      },
      techs: parseStringAsArray(techs)
    });

    // depois de 3 segundos, emitir uma mensagem
    /*
    setTimeout(() => {
      socket.emit("message", "Hello OmniStack");
    }, 3000);
    */
  });
};

// filtro pra verificar de o dev está a 10km de distancia e se possui pelo menos uma das techs
// pra não retornar todas as conexões
exports.findConnections = (coordinates, techs) => {
  return connections.filter(connection => {
    return (
      calcuteDistance(coordinates, connection.coordinates) < 10 &&
      connection.techs.some(item => techs.includes(item))
    );
  });
};

exports.sendMessage = (to, message, data) => {
  to.forEach(connection => {
    io.to(connection.id).emit(message, data);
  });
};
