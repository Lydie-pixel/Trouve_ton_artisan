const { Categorie, Specialite } = require("../models");

exports.getCategoriesWithSpecialites = async (req, res) => {
  try {
    const categories = await Categorie.findAll({
      include: [
        {
          model: Specialite,
          as: "specialites"
        }
      ]
    });

    res.json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Categorie.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
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