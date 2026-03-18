const express = require("express");
const app = express();
const helmet = require("helmet");

const artisanRoutes = require("./routes/artisanRoutes");
const categorieRoutes = require("./routes/categorieRoutes");
const specialiteRoutes = require("./routes/specialiteRoutes");
const messageRoutes = require("./routes/messageRoutes");
const cors = require("cors");

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'", "https:"],
      scriptSrc: ["'self'", "https:", "'unsafe-inline'"],
      styleSrc: ["'self'", "https:", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
    }
  }
}));

app.use(express.static("artisan-front"));
app.use(cors());
app.use(express.json());

app.use("/api/artisans", artisanRoutes);
app.use("/api/categories", categorieRoutes);
app.use("/api/specialites", specialiteRoutes);
app.use("/api/messages", messageRoutes);

module.exports = app;