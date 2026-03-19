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

### Gestion des emails (amélioration possible)

L’envoi d’emails n’est pas implémenté dans cette version.
Pour une version production il serait recommandé d’utiliser Nodemailer afin d’envoyer les messages directement à l’artisan après soumission du formulaire.

#### Exemple d’intégration

    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "tonemail@gmail.com",
        pass: "motdepasse"
    }
    });

    await transporter.sendMail({
    from: data.email,
    to: artisan.email,
    subject: data.objet,
    text: data.message
    });

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

3. Configurer les variables d’environnement (.env)

    DB_HOST=...
    DB_USER=...
    DB_PASSWORD=...
    DB_NAME=...
    DB_PORT=...

4. Importer la base de données

- schema.sql
- data.sql

4. Lancer le serveur

    npm start

---

## Structure du projet

artisan-api/
├── controllers/
├── models/
├── routes/

artisan-front/
├── assets/
│   ├── css/
│   ├── js/
│   ├── img/
│   ├── police/
├── pages/
├── componenets/

---

## Sécurité mise en place

- Validation des données côté serveur
- Protection contre les injections SQL via Sequelize
- Utilisation de Helmet pour sécuriser les headers HTTP
- Architecture MVC pour une meilleure organisation du code

---

## Démo

https://trouve-ton-artisan-wcd3.onrender.com

---

## Auteur

Projet réalisé dans le cadre d'une formation développement web.
