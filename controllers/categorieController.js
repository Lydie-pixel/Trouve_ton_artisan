const { Categorie, Specialite, Artisan } = require("../models");

// Affiche toutes les catégories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.findAll({
      include: {
        model: Specialite,
        as: "specialites"
      }
    });

    res.json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Trouve une catégorie via son ID
exports.getCategorieById = async (req, res) => {
  try {
    const categorie = await Categorie.findByPk(req.params.id, {
      include: {
        model: Specialite,
        as: "specialites",
        include: {
          model: Artisan,
          as: "artisans"
        }
      }
    });

    res.json(categorie);
  } catch (error) {
    res.status(500).json(error);
  }
};