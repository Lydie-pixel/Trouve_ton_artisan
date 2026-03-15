const params = new URLSearchParams(window.location.search);
const artisanId = params.get("id");


//informations de l'artisan via son ID
fetch(`http://localhost:3000/api/artisans/${artisanId}`)
.then(res => res.json())
.then(artisan => {

    document.getElementById("artisan-nom").textContent = artisan.nom;
    document.getElementById("artisan-ville").textContent = artisan.ville;
    document.getElementById("artisan-description").textContent = artisan.description;

    document.getElementById("artisan-specialite").textContent =
        artisan.specialite.nom;

    // photo si elle existe
    if (artisan.photo) {
        document.getElementById("artisan-photo").src = "Photo de l'artisans";
    }

    // étoiles
    document.getElementById("artisan-note").textContent =
         artisan.note;
        console.log("note :", artisan.note);


    // bouton site web s'il existe
    if (artisan.site_web) {
        const link = document.getElementById("artisan-site");
        link.href = artisan.site_web;
        link.textContent = " Voir le site web";
        link.classList.remove("d-none");
    }

});