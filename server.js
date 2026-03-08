require("dotenv").config();
console.log(process.env.DB_USER);

const app = require("./app");
const sequelize = require("./config/database");

const PORT = 3000;

sequelize.sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Serveur lancé sur le port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erreur connexion BDD :", error);
});

app.get("/", (req, res) => {
  res.send("API Trouve ton artisan opérationnelle");
});

app.get("/artisans", (req, res) => {
  res.send("Liste des artisans");
});