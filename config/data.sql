-- Les catégories

INSERT INTO Categories (nom, createdAt, updatedAt) VALUES
('Bâtiment', NOW(), NOW()),
('Alimentation', NOW(), NOW()),
('Fabrication', NOW(), NOW()),
('Services', NOW(), NOW());

-- LEs sprécialités

INSERT INTO Specialites (nom, categorie_id, createdAt, updatedAt) VALUES
('Boucher', 2, NOW(), NOW()),
('Boulanger', 2, NOW(), NOW()),
('Chocolatier', 2, NOW(), NOW()),
('Traiteur', 2, NOW(), NOW()),
('Chauffagiste', 1, NOW(), NOW()),
('Electricien', 1, NOW(), NOW()),
('Menuisier', 1, NOW(), NOW()),
('Plombier', 1, NOW(), NOW()),
('Bijoutier', 3, NOW(), NOW()),
('Couturier', 3, NOW(), NOW()),
('Ferronier', 3, NOW(), NOW()),
('Coiffeur', 4, NOW(), NOW()),
('Fleuriste', 4, NOW(), NOW()),
('Toiletteur', 4, NOW(), NOW()),
('Webdesign', 4, NOW(), NOW());


-- Les artisants

INSERT INTO Artisans 
(nom, note, ville, description, email, site_web, top, specialite_id, createdAt, updatedAt)
VALUES
('Boucherie Dumont', 4.5, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'boucherie.dumond@gmail.com', NULL, 0, 1, NOW(), NOW()),

('Au pain chaud', 4.8, 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'aupainchaud@hotmail.com', NULL, 1, 2, NOW(), NOW()),

('Chocolaterie Labbé', 4.9, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'chocolaterie-labbe@gmail.com', "https://chocolaterie-labbe.fr", 1, 3, NOW(), NOW()),

('Traiteur Truchon', 4.1, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@truchon-traiteur.fr', "https://truchon-traiteur.fr", 0, 4, NOW(), NOW()),

('Orville Salmons', 5.0, 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'o-salmons@live.com', NULL, 1, 5, NOW(), NOW()),

('Mont Blanc Eléctricité', 4.5, 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@mont-blanc-electricite.com', "https://mont-blanc-electricite.com", 0, 6, NOW(), NOW()),

('Boutot & fils', 4.7, 'Bourg-en-bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'boutot-menuiserie@gmail.com', "https://boutot-menuiserie.com", 0, 7, NOW(), NOW()),

('Vallis Bellemare', 4.0, 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'v.bellemare@gmail.com', "https://plomberie-bellemare.com", 0, 8, NOW(), NOW()),

('Claude Quinn', 4.2, 'Aix-les-bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'claude.quinn@gmail.com', NULL, 0, 9, NOW(), NOW()),

('Amitee Lécuyer', 4.5, 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'a.amitee@hotmail.com', "https://lecuyer-couture.com", 0, 10, NOW(), NOW()),

('Ernest Carignan', 5.0, 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'e-carigan@hotmail.com', NULL, 0, 11, NOW(), NOW()),

('Royden Charbonneau', 3.8, 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'r.charbonneau@gmail.com', NULL, 0, 12, NOW(), NOW()),

('Leala Dennis', 3.8, 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'l.dennos@hotmail.fr', "https://coiffure-leala-chambery.fr", 0, 12, NOW(), NOW()),

("C'est sup'hair", 4.1, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'sup-hair@gmail.com', "https://sup-hair.fr", 0, 12, NOW(), NOW()),

('Le monde des fleurs', 4.6, 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@le-monde-des-fleurs-annonay.fr', "https://le-monde-des-fleurs-annonay.fr", 0, 13, NOW(), NOW()),

('Valérie Laderoute', 4.5, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'v-laredoute@gmail.com', NULL,0, 14, NOW(), NOW()),

('CM Graphisme', 4.4, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@cm-graphisme.com', "https://cm-graphisme.com", 0, 15, NOW(), NOW());