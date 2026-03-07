const { Specialite } = require("../models");

exports.getAllSpecialite = async (req, res) => {
  try {
    const Specialite = await Specialite.findAll({
    });

    res.json(Specialite);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getSpecialiteById = async (req, res) => {
  try {
    const Specialite = await Specialite.findByPk(req.params.id);

    res.json(Specialite);
  } catch (error) {
    res.status(500).json(error);
  }
};