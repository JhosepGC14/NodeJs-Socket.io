const ProductList = require("./product-list");

class Sockets {
  constructor(io) {
    this.io = io;
    this.productList = new ProductList();
    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("Cliente conectado...");

      //Emitir al cliente conectado, todas las bandas actuales
      socket.emit("current-products", this.productList.getAllProducts());

      //Dar like al producto
      socket.on("like-product", (id) => {
        this.productList.increaseLikes(id);
        this.io.emit("current-products", this.productList.getAllProducts());
      });

      //Cambiar el nombre del producto
      socket.on("change-name-product", ({ id, name }) => {
        this.productList.changeProductName(id, name);
        this.io.emit("current-products", this.productList.getAllProducts());
      });

      //Borrar el producto seleccionado
      socket.on("delete-product", (id) => {
        this.productList.removeProduct(id);
        this.io.emit("current-products", this.productList.getAllProducts());
      });

      //agregar producto
      socket.on("add-product", (name) => {
        this.productList.addProduct(name);
        this.io.emit("current-products", this.productList.getAllProducts());
      });
    });
  }
}

module.exports = Sockets;
