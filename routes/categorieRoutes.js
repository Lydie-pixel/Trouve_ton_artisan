const express = require("express");
const router = express.Router();
const categorieController = require("../controllers/categorieController");

router.get("/", categorieController.getAllCategorie);
router.get("/:id", categorieController.getCategorieById);

module.exports = router;