const params = new URLSearchParams(window.location.search);
const categorieId = params.get("categorie");

function createArtisanCard(artisan) {

    const card = document.createElement("div");
    card.classList.add("col-md-4");

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

    return card;
}


console.log("artisans.js chargé");

let url = "http://localhost:3000/api/artisans";

if (categorieId) {
    url = `http://localhost:3000/api/categorie/${categorieId}`;
}

fetch(url)
.then(res => res.json())
.then(data => {

    const container = document.getElementById("artisans-list");

    data.forEach(artisan => {
        container.appendChild(createArtisanCard(artisan));
    });

});

fetch("http://localhost:3000/api/artisans/mois")
.then(res => res.json())
.then(data => {

    const container = document.getElementById("top-artisans");

    data.forEach(artisan => {
        container.appendChild(createArtisanCard(artisan));
    });

});

fetch(`http://localhost:3000/api/artisans/categorie/${id}`)
.then(res => res.json())
.then(data => {

    const container = document.getElementById("categorie");

    data.forEach(artisan => {
        container.appendChild(createArtisanCard(artisan));
    });

});