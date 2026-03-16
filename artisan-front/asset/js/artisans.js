const params = new URLSearchParams(window.location.search);

const categorieId = params.get("categorie");
const ville = params.get("ville");
const nom = params.get("nom");

let url = "http://localhost:3000/api/artisans";

if (categorieId) {
  url = `http://localhost:3000/api/artisans/categorie/${categorieId}`;
}

if (ville || nom) {
  url = `http://localhost:3000/api/artisans/search?ville=${ville || ""}&nom=${nom || ""}`;
}

//Crée une cartes pour chaques artisans
function createArtisanCard(artisan) {

    const card = document.createElement("div");
    card.classList.add("col-md-4");

    card.innerHTML = `
    <div class="card h-100 shadow">
        <div class="card-body">

        ${artisan.top ? `
        <span class="badge bg-warning text-dark mb-2">
        Top Artisan
        </span>
        ` : ""}

            <div class="text-warning">
                <i class="bi bi-star-fill"></i> ${artisan.note}
            </div>

            <h5>${artisan.nom}</h5>

            <span>
                <i class="bi bi-tools"></i> Spécialité: ${artisan.specialite.nom}
                <br>
                <i class="bi bi-geo-alt"></i> Ville: ${artisan.ville}
            </span>

            <br><br>

            <a class="btn btn-primary" href="artisan.html?id=${artisan.id}">
                Voir sa fiche
            </a>

        </div>
    </div>
    `;

    return card;
}


//Compléte les cartes avec les infos des artisans

fetch(url)
.then(res => res.json())
.then(data => {

    const container = document.getElementById("artisans-list");

    data.forEach(artisan => {
        container.appendChild(createArtisanCard(artisan));
    });
});

// Recherche à écriture
const input = document.getElementById("searchVille");


if (input) {
  input.addEventListener("input", async () => {

    const ville = input.value;

    const response = await fetch(
      `http://localhost:3000/api/artisans/search?ville=${ville}`
    );

    const artisans = await response.json();

    const container = document.getElementById("artisans-list");

    container.innerHTML = "";

    artisans.forEach(artisan => {
      container.appendChild(createArtisanCard(artisan));
    });

  });
}
