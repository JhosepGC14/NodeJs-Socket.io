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
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let ddmmyyyy = `${day}/${month < 10 ? `0${month}` : month}/${year}`
        this.io.emit("mensaje-servidor", {
          msg: data.msg,
          fecha: ddmmyyyy,
        });
      });
    });
  };
}

module.exports = Sockets;