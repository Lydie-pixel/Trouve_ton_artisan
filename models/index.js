const Artisan = require("./Artisan");
const Categorie = require("./Categorie");
const Specialite = require("./Specialite");
const Message = require("./Message");

// Une catégorie à plusieurs spécialité mais une spécialité appartient à une unique catégorie
Categorie.hasMany(Specialite, { foreignKey: "categorie_id", as: "specialites" });
Specialite.belongsTo(Categorie, { foreignKey: "categorie_id", as: "categorie" });

// Une spécialité à plusieurs artisans mais un artisan appartient à une unique spécialité
Specialite.hasMany(Artisan, { foreignKey: "specialite_id", as: "artisans" });
Artisan.belongsTo(Specialite, { foreignKey: "specialite_id", as: "specialite" });

// Un artisan à plusieurs message mais un message appartient à un unique artisan
Artisan.hasMany(Message, { foreignKey: "artisan_id", as: "messages" });
Message.belongsTo(Artisan, { foreignKey: "artisan_id", as: "artisan" });

module.exports = {
  Artisan,
  Categorie,
  Specialite,
  Message,
};