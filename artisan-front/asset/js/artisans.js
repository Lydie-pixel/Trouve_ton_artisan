console.log("artisans.js chargé");
fetch("http://localhost:3000/api/artisans")
  .then(response => response.json())
  .then(artisans => {

    const container = document.getElementById("artisans-list");

    artisans.forEach(artisan => {

      const card = document.createElement("div");

      card.innerHTML = `
      <div class="card h-100 shadow">
        <div class="card-body">

          <div class="mb-2 text-warning">
            ⭐ ${artisan.note}
          </div>

          <h5>${artisan.nom}</h5>

          <span>
            Spécialité : ${artisan.specialite.nom}
            <br>
            Ville : ${artisan.ville}
          </span>

          <br><br>

          <a class="btn btn-primary" href="artisanDetail.html?id=${artisan.id}">
            Voir sa fiche
          </a>

        </div>
      </div>
      `;

      container.appendChild(card);

    });

  });