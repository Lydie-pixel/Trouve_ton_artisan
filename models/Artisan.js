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

  email: {
    type: DataTypes.STRING,
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

  top: {
    type: DataTypes.BOOLEAN,
  }
});

module.exports = Artisan;