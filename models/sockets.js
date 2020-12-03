class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {

      //listen events 
      socket.on("mensaje-cliente", (data) => {
        console.log("el cliente emitio esto : ", data);
        this.io.emit("mensaje-servidor", {
          msg: data.msg,
          fecha: new Date(),
        });
      });
    });
  };
}

module.exports = Sockets;