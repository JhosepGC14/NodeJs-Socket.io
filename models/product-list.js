const Product = require("./product");

class ProductList {
  constructor() {
    this.products = [
      new Product("Pepsi"),
      new Product("Coca Cola"),
      new Product("Inka Cola"),
      new Product("Guaraná"),
      new Product("Concordia"),
    ];
  }

  addProduct = (name) => {
    const newProduct = new Product(name);
    this.products.push(newProduct);
    return this.products;
  };

  removeProduct = (id) => {
    this.products = this.products.filter((p) => p.id !== id);
  };

  getAllProducts = () => {
    return this.products;
  };

  increaseLikes = (id) => {
    this.products = this.products.map((item) => {
      if (item.id === id) {
        item.likes++;
      }
      return item;
    });
  };

  changeProductName = (id, newName) => {
    this.products = this.products.map((item) => {
      if (item.id === id) {
        item.name = newName;
      }
      return item;
    });
  };
}

module.exports = ProductList;
