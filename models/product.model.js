const { DataTypes } = require("sequelize");
const SequelizeLib = require("../lib/sequelize");

const orm = new SequelizeLib();

const Product = orm.client.define("Product", {
  name: { type: DataTypes.STRING },
  price: { type: DataTypes.DOUBLE },
  description: { type: DataTypes.STRING },
  estrellas: { type: DataTypes.INTEGER },
  image: { type: DataTypes.STRING },
  tags: { type: DataTypes.STRING },
});

module.exports = Product;
