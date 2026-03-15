const { Specialite } = require("../models");

// Export de toutes les spécialités
exports.getAllSpecialites = async (req, res) => {
  try {

    const specialites = await Specialite.findAll();

    res.json(specialites);

  } catch (error) {
    res.status(500).json(error);
  }
};

// Export des spécialité par ID
exports.getSpecialiteById = async (req, res) => {
  try {

    const specialite = await Specialite.findByPk(req.params.id);

    res.json(specialite);

  } catch (error) {
    res.status(500).json(error);
  }
};
