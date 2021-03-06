const { DataTypes, Model } = require("sequelize");
const SequelizeLib = require("../lib/sequelize");

const orm = new SequelizeLib();

const User = orm.client.define("User", {
  name: { type: DataTypes.STRING },
  lastname: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },
});

module.exports = User
