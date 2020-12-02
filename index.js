//servidor de express
const express = require("express")
const app = express();

// servior de sockets
const server = require("http").createServer(app);

//configuracion del socket server
const io = require("socket.io")(server);

//desplegar el directorio publico
app.use(express.static(__dirname + '/public'));

io.on("connection", (socket) => {


  socket.on("mensaje-cliente", (data) => {
    console.log("el cliente emitio esto : ", data);
    io.emit("mensaje-servidor", {
      msg: data.msg,
      fecha: new Date(),
    });
  });


});

//puerto en el q ejecuta el server 
server.listen(4000, () => {
  console.log("Server corriendo en el puerto : 4000");
});






