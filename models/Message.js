const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Message = sequelize.define("Message", {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },

  objet: {
    type: DataTypes.STRING,
  },

  message: {
    type: DataTypes.TEXT,
  },

  date: {
    type: DataTypes.DATE,
  },

  artisan_id: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Message;