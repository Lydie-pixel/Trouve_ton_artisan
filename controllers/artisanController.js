const { Artisan, Specialite } = require("../models");

exports.getAllArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
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

exports.getArtisanById = async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id);

    res.json(artisan);
  } catch (error) {
    res.status(500).json(error);
  }
};