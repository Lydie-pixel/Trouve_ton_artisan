require('dotenv').config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql"
  }
);
console.log(process.env.DB_HOST);
console.log(process.env.DB_PORT);

sequelize.authenticate()
  .then(() => console.log("BDD connectée"))
  .catch(err => console.error("Erreur connexion BDD :", err));

module.exports = sequelize;
