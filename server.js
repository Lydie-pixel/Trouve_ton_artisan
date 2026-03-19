require("dotenv").config();
console.log(process.env.DB_USER);
console.log("DB_NAME:", process.env.DB_NAME);

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
  res.sendFile(__dirname + "/artisan-front/index.html");
});
app.get("/pages/:page", (req, res) => {
  res.sendFile(__dirname + "/artisan-front/pages/" + req.params.page);
});

app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});