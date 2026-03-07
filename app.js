const express = require("express");
const app = express();

const artisanRoutes = require("./routes/artisanRoutes");
const categorieRoutes = require("./routes/categorieRoutes");
const specialiteRoutes = require("./routes/specialiteRoutes");
const messageRoutes = require("./routes/messageRoutes");

app.use(express.json());

app.use("/api/artisans", artisanRoutes);
app.use("/api/categories", categorieRoutes);
app.use("/api/specialites", specialiteRoutes);
app.use("/api/messages", messageRoutes);

module.exports = app;