const params = new URLSearchParams(window.location.search);
const artisanId = params.get("id");

fetch(`http://localhost:3000/api/artisans/${artisanId}`)
.then(res => res.json())
.then(artisan => {

    document.getElementById("nom").textContent = artisan.nom;
    document.getElementById("ville").textContent = artisan.ville;
    document.getElementById("specialite").textContent = artisan.specialite.nom;

});