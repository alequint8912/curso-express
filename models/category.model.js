const { DataTypes, Model } = require("sequelize");
const SequelizeLib = require("../lib/sequelize");

const orm = new SequelizeLib();

const Category = orm.client.define("Category", {
  name: { type: DataTypes.STRING }  
});

module.exports = Category
