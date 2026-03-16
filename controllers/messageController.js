const { Message } = require("../models");

exports.getAllMessage = async (req, res) => {
  try {
    const messages = await Message.findAll({
    });

    res.json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getMessageById = async (req, res) => {
  try {
    const messages = await Message.findByPk(req.params.id);

    res.json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Envoie des messages à l'API
exports.createMessage = async (req, res) => {

  try {

    const message = await Message.create({
      nom: req.body.nom,
      objet: req.body.objet,
      email: req.body.email,
      message: req.body.message,
      artisan_id: req.body.artisan_id
    });

    res.json(message);

  } catch (error) {

    res.status(500).json(error);

  }

};