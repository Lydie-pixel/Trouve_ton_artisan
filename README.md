# Trouve ton artisan

Plateforme permettant aux particuliers de trouver facilement un artisan en Auvergne-Rhône-Alpes et de le contacter via un formulaire.

---

## Technologies utilisées

Frontend
- HTML
- CSS
- Bootstrap
- JavaScript

Backend
- Node.js
- Express
- Sequelize

Base de données
- MySQL

---

## Fonctionnalités

- Liste des artisans par catégorie
- Recherche d’artisans par ville
- Fiche détaillée d’un artisan
- Formulaire de contact
- API REST sécurisée
- Responsive design (mobile first)

---

## Installation

1. Cloner le projet
2. Installer les dépendances

    npm install

3. Configurer la base de données
Importer les fichiers :

- schema.sql
- data.sql

4. Lancer le serveur

    npm start

---

## Structure du projet

├── artisan-front/
│ └── asset/
│     ├──── css/
│     ├──── img/
│     └──── js/
│ └── componement/
│ └── pages/
│
├── controllers/
├── models/
└── routes/

---

## Sécurité mise en place

- Validation des données
- Sequelize (protection SQL injection)
- Helmet (headers de sécurité)
- Structure MVC

---

## Auteur

Projet réalisé dans le cadre d'une formation développement web.
