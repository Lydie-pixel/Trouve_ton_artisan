const params = new URLSearchParams(window.location.search);

const categorieId = params.get("categorie");
const ville = params.get("ville");
const nom = params.get("nom");

let url = "/api/artisans";

  // priorité 1 : catégorie
if (categorieId) {
  url = `/api/artisans/categorie/${categorieId}`;
}

  // priorité 2 : recherche (ville / nom)
else if (ville || nom) {
  url = `/api/artisans/search?ville=${ville || ""}&nom=${nom || ""}`;
}

//Crée une cartes pour chaques artisans
function createArtisanCard(artisan) {

    const card = document.createElement("div");
    card.classList.add("col-md-4");

    card.innerHTML = `
<div class="card h-100 shadow p-3">

  <div class="d-flex justify-content-between align-items-center mb-2">

    <div class="text-warning">
      <i class="bi bi-star-fill"></i> ${artisan.note}
    </div>

    ${artisan.top ? `
      <span class="badge bg-warning text-dark">
      Top Artisan
      </span>
    ` : ""}

  </div>

  <h5 class="text-center mb-3">${artisan.nom}</h5>

  <div class="d-flex justify-content-between align-items-end">

    <div>
      <div>
        <i class="bi bi-shop"></i>
        ${artisan.specialite.nom}
      </div>

      <div>
        <i class="bi bi-geo-alt"></i>
        ${artisan.ville}
      </div>
    </div>

    <a class="btn btn-primary"
       href="artisan.html?id=${artisan.id}">
       Voir
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
      `/api/artisans/search?ville=${ville}`
    );

    const artisans = await response.json();

    const container = document.getElementById("artisans-list");

    container.innerHTML = "";

    artisans.forEach(artisan => {
      container.appendChild(createArtisanCard(artisan));
    });

  });
}
