-- ===================== Création de la base =====================

CREATE DATABASE IF NOT EXISTS trouve_ton_artisan;

USE trouve_ton_artisan;


-- ===================== Table categories =====================

CREATE TABLE categorie (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL
);


-- ===================== Table specialites =====================

CREATE TABLE specialite (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    categorie_id INT,
    FOREIGN KEY (categorie_id) REFERENCES categorie(id)
);


-- ===================== Table artisans =====================

CREATE TABLE artisan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    note FLOAT,
    ville VARCHAR(100),
    description TEXT,
    site_web VARCHAR(255),
    image VARCHAR(255),
    specialite_id INT,
    FOREIGN KEY (specialite_id) REFERENCES specialite(id)
);


-- ===================== Table messages (contact) =====================

CREATE TABLE message (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    email VARCHAR(100),
    objet VARCHAR(255),
    message TEXT,
    date DATETIME,
    artisan_id INT,
    FOREIGN KEY (artisan_id) REFERENCES artisan(id)
);