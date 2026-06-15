const defaultGames = ["catan", "uno", "pandemic", "codenames"];
const defaultCategories = ["strategy", "family", "party", "cards"];

const games = [
    { id: "catan", name: "Catan", img: "images/catan.webp", category: "strategy" },
    { id: "risk", name: "Risk", img: "images/risk.webp", category: "strategy" },
    { id: "ticket-to-ride", name: "Ticket to Ride", img: "images/ticket-to-ride.webp", category: "strategy" },
    { id: "twilight-imperium", name: "Twilight Imperium", img: "images/twilight-imperium.webp", category: "strategy" },
    { id: "codenames", name: "Codenames", img: "images/codenames.webp", category: "party" },
    { id: "taboo", name: "Taboo", img: "images/taboo.webp", category: "party" },
    { id: "pictionary", name: "Pictionary", img: "images/pictionary.webp", category: "party" },
    { id: "just-one", name: "Just One", img: "images/just-one.webp", category: "party" },
    { id: "trivial-pursuit", name: "Trivial Pursuit", img: "images/trivial-pursuit.webp", category: "trivia" },
    { id: "smart-10", name: "Smart 10", img: "images/smart-10.webp", category: "trivia" },
    { id: "wits-and-wagers", name: "Wits & Wagers", img: "images/wits-and-wagers.webp", category: "trivia" },
    { id: "bezzerwizzer", name: "Bezzerwizzer", img: "images/bezzerwizzer.webp", category: "trivia" },
    { id: "pandemic", name: "Pandemic", img: "images/pandemic.webp", category: "family" },
    { id: "carcassonne", name: "Carcassonne", img: "images/carcassonne.webp", category: "family" },
    { id: "dixit", name: "Dixit", img: "images/dixit.webp", category: "family" },
    { id: "connect-four", name: "Connect Four", img: "images/connect-four.webp", category: "family" },
    { id: "uno", name: "UNO", img: "images/uno.webp", category: "cards" },
    { id: "exploding-kittens", name: "Exploding Kittens", img: "images/exploding-kittens.webp", category: "cards" },
    { id: "sushi-go", name: "Sushi Go!", img: "images/sushi-go.webp", category: "cards" },
    { id: "love-letter", name: "Love Letter", img: "images/love-letter.webp", category: "cards" },
    { id: "gloomhaven", name: "Gloomhaven", img: "images/gloomhaven.webp", category: "rpg" },
    { id: "betrayal-at-house-on-the-hill", name: "Betrayal at House on the Hill", img: "images/betrayal.webp", category: "rpg" },
    { id: "dungeons-and-dragons", name: "D&D Adventure System", img: "images/dnd.webp", category: "rpg" },
    { id: "arkham-horror", name: "Arkham Horror", img: "images/arkham-horror.webp", category: "rpg" },
    { id: "friday", name: "Friday", img: "images/friday.webp", category: "solo" },
    { id: "under-falling-skies", name: "Under Falling Skies", img: "images/under-falling-skies.webp", category: "solo" },
    { id: "castaway", name: "Castaway", img: "images/castaway.webp", category: "solo" }
];

const allCategories = ["strategy", "party", "trivia", "family", "cards", "rpg", "solo"];

document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

document.getElementById("menu").addEventListener("click", () => {
    document.querySelector(".header-nav").classList.toggle("open");
});

function getGameVisits() {
    return JSON.parse(localStorage.getItem("gameVisits") || "{}");
}

function getCategoryVisits() {
    return JSON.parse(localStorage.getItem("categoryVisits") || "{}");
}

function renderTrending() {
    const visits = getGameVisits();
    const hasVisits = Object.keys(visits).length > 0;

    let top4;

    if (hasVisits) {
        top4 = [...games].sort((a, b) => (visits[b.id] || 0) - (visits[a.id] || 0)).slice(0, 4);
    } else {
        top4 = defaultGames.map(id => games.find(g => g.id === id));
    }

    document.getElementById("trending-grid").innerHTML = top4.map(game => `
        <div class="game-card">
        <img src="${game.img}" alt="${game.name}" loading="lazy">
        <h3>${game.name}</h3>
        <span class="category-tag">${game.category}</span>
        </div>
    `).join("");
}

function renderFeatured() {
    const visits = getCategoryVisits();
    const hasVisits = Object.keys(visits).length > 0;

    let top4;

    if (hasVisits) {
        top4 = [...allCategories].sort((a, b) => (visits[b] || 0) - (visits[a] || 0)).slice(0, 4);
    } else {
        top4 = defaultCategories;
    }

    document.getElementById("featured-grid").innerHTML = top4.map(category => `
        <div class="category-card">
        <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
        <p>${games.filter(g => g.category === category).length} games</p>
        <a href="catalog.html?category=${category}" class="category-link">Explore</a>
        </div>
    `).join("");
}

renderTrending();
renderFeatured();