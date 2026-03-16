const { Artisan, Specialite, Categorie } = require("../models");
const { Op } = require("sequelize");

// Export de tous les artisans
exports.getAllArtisans = async (req, res) => {
  try {

    const { ville } = req.query;

    const where = {};

    if (ville) {
      where.ville = ville;
    }

    const artisans = await Artisan.findAll({
      where,
      include: {
        model: Specialite,
        as: "specialite",
        include: {
          model: Categorie,
          as: "categorie"
        }
      }
    });

    res.json(artisans);

  } catch (error) {
    res.status(500).json(error);
  }
};


// Trouve un artisan via son ID
exports.getArtisanById = async (req, res) => {
  try {

    const artisan = await Artisan.findByPk(req.params.id, {
      include: {
        model: Specialite,
        as: "specialite",
        include: {
          model: Categorie,
          as: "categorie"
        }
      }
    });

    console.log(JSON.stringify(artisan, null, 2));
    res.json(artisan);

  } catch (error) {
    res.status(500).json(error);
  }
};


// Trouve les artisans via la catégorie
exports.getArtisansByCategorie = async (req, res) => {
  try {

    const artisans = await Artisan.findAll({
      include: {
        model: Specialite,
        as: "specialite",
        where: {
          categorie_id: req.params.id
        },
        include: {
          model: Categorie,
          as: "categorie"
        }
      }
    });

    res.json(artisans);

  } catch (error) {
    res.status(500).json(error);
  }
};


// Trouve les artisans via la spécialité
exports.getArtisansBySpecialite = async (req, res) => {
  try {

    const artisans = await Artisan.findAll({
      where: {
        specialite_id: req.params.id
      },
      include: {
        model: Specialite,
        as: "specialite",
        include: {
          model: Categorie,
          as: "categorie"
        }
      }
    });

    res.json(artisans);

  } catch (error) {
    res.status(500).json(error);
  }
};

// Remonter des 3 artisans du mois
exports.getTopArtisans = async (req, res) => {
  try {

    const artisans = await Artisan.findAll({
      where: { top: true },
      limit: 3,
      include: {
        model: Specialite,
        as: "specialite",
        include: {
          model: Categorie,
          as: "categorie"
        }
      }
    });

    res.json(artisans);

  } catch (error) {
    res.status(500).json(error);
  }
};

// Recherche des artisans
exports.searchArtisans = async (req, res) => {

  try {

    const { ville, nom } = req.query;

    const where = {};

    if (ville) {
      where.ville = {
        [Op.like]: `%${ville}%`
      };
    }

    if (nom) {
      where.nom = {
        [Op.like]: `%${nom}%`
      };
    }

    const artisans = await Artisan.findAll({
      where,
      include: {
        model: Specialite,
        as: "specialite"
      }
    });

    res.json(artisans);

  } catch (error) {

    res.status(500).json(error);

  }

};