//Crée une cartes pour chaques artisans
function createArtisanCard(artisan) {

    const card = document.createElement("div");
    card.classList.add("col-md-4");

    card.innerHTML = `
    <div class="card h-100 shadow">
        <div class="card-body">

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

fetch("http://localhost:3000/api/artisans/top")
.then(res => res.json())
.then(data => {

  const container = document.getElementById("top-artisans");

  data.forEach(artisan => {
    container.appendChild(createArtisanCard(artisan));
  });

});