console.log("JS chargé !");
//Crée une cartes pour chaques artisans
function createArtisanCard(artisan) {

    const card = document.createElement("div");
    card.classList.add("col-md-4");

    card.innerHTML = `
    <div class="card h-100 shadow p-3"">
        <div class="card-body">

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

                <a class="btn btn-primary" href="/artisan-front/pages/artisan.html?id=${artisan.id}">
                    Voir sa fiche
                </a>
        </div>
    </div>
    `;

    return card;
}

fetch("/api/artisans/top")
.then(res => res.json())
.then(data => {

  const container = document.getElementById("top-artisans");

  data.forEach(artisan => {
    container.appendChild(createArtisanCard(artisan));
  });

});