const { Categorie } = require("../models");

exports.getAllCategorie = async (req, res) => {
  try {
    const Categorie = await Categorie.findAll({
    });

    res.json(Categorie);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getCategorieById = async (req, res) => {
  try {
    const Categorie = await Categorie.findByPk(req.params.id);

    res.json(Categorie);
  } catch (error) {
    res.status(500).json(error);
  }
};