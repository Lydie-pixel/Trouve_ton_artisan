const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Artisan = sequelize.define("Artisan", {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  note: {
    type: DataTypes.FLOAT,
  },
  ville: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
  site_web: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
});

module.exports = Artisan;