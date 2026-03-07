const app = require("./app");
const sequelize = require("./config/database");

const PORT = 3000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Serveur lancé sur le port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erreur connexion BDD :", error);
});