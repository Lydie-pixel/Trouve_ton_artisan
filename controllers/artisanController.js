const { Artisan, Specialite, Categorie } = require("../models");

// Export de tous les artisans
exports.getAllArtisans = async (req, res) => {
  try {

    const { ville } = req.query;

    const where = {};

    if (ville) {
      where.ville = ville;
    }

    where.top = true;

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