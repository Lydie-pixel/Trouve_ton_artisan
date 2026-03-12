const { Artisan, Specialite, Categorie } = require("../models");

exports.getAllArtisans = async (req, res) => {
  try {

    const { ville } = req.query;

    const artisans = await Artisan.findAll({
      where: { top: true },
      where: ville ? { ville } : {},
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

exports.getArtisanById = async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id);

    res.json(artisan);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.searchArtisans = async (req, res) => {
  try {

    const { ville, specialite } = req.query;

    const where = {};

    if (ville) {
      where.ville = ville;
    }

    if (specialite) {
      where.specialite_id = specialite;
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