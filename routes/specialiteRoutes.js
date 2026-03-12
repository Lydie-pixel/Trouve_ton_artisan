const express = require("express");
const router = express.Router();
const specialiteController = require("../controllers/specialiteController");

router.get("/", specialiteController.getAllSpecialites);
router.get("/:id", specialiteController.getSpecialiteById);

module.exports = router;