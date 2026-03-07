const express = require("express");
const router = express.Router();
const specialiteController = require("../controllers/specialiteController");

router.get("/", specialiteController.getAllSpecialite);
router.get("/:id", specialiteController.getSpecialiteById);

module.exports = router;