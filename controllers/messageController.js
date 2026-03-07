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