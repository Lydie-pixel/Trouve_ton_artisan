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


// Envoie de mail à l'artisan
const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const params = new URLSearchParams(window.location.search);
  const artisanId = params.get("id");

  const data = {
    nom: document.getElementById("nom").value,
    objet: document.getElementById("objet").value,
    email: document.getElementById("mail").value,
    message: document.getElementById("message").value,
    artisan_id: artisanId
  };

  try {

    const response = await fetch("http://localhost:3000/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    alert("Message envoyé !");
    form.reset();

  } catch (error) {

    console.error(error);
    alert("Erreur lors de l'envoi");

  }

});