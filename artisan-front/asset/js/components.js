// Affiche le header
fetch("/components/Header.html")
.then(res => res.text())
.then(data => {
    const header = document.getElementById("header");
    if(header) header.innerHTML = data;
});

// Affiche le hero
fetch("/components/Hero.html")
.then(res => res.text())
.then(data => {
    const hero = document.getElementById("hero");
    if(hero) hero.innerHTML = data;
});

// Affiche le footer
fetch("/components/Footer.html")
.then(res => res.text())
.then(data => {
    const footer = document.getElementById("footer");
    if(footer) footer.innerHTML = data;
});

// Transmet les données de l'API au front pour la recherche des artisans via la catégorie pour la navbar
fetch("/api/categories")
.then(res => res.json())
.then(categories => {

    const menu = document.getElementById("menu-categories");

    categories.forEach(categorie => {

        const li = document.createElement("li");
        li.classList.add("nav-item");

        li.innerHTML = `
        <a class="nav-link" href="/artisan-front/pages/artisans.html?categorie=${categorie.id}">
        </a>
        `;

        menu.appendChild(li);

    });

});

// Recherche des artisans 
const searchForm = document.querySelector("form");

searchForm.addEventListener("submit", (e) => {

  e.preventDefault();

  const search = document.getElementById("searchInput").value;

  window.location.href = `/artisan-front/pages/artisan.html?ville=${search}`;

});