const Artisan = require("./Artisan");
const Categorie = require("./Categorie");
const Specialite = require("./Specialite");
const Message = require("./Message");

Categorie.hasMany(Specialite, { foreignKey: "categorie_id", as: "specialites" });
Specialite.belongsTo(Categorie, { foreignKey: "categorie_id", as: "categorie" });

Specialite.hasMany(Artisan, { foreignKey: "specialite_id", as: "artisans" });
Artisan.belongsTo(Specialite, { foreignKey: "specialite_id", as: "specialite" });

Artisan.hasMany(Message, { foreignKey: "artisan_id", as: "messages" });
Message.belongsTo(Artisan, { foreignKey: "artisan_id", as: "artisan" });

module.exports = {
  Artisan,
  Categorie,
  Specialite,
  Message,
};