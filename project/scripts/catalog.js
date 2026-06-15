document.getElementById("menu").addEventListener("click", () => {
    document.querySelector(".header-nav").classList.toggle("open");
});

const GAMES_PER_PAGE = 12;
let currentFilter = "all";
let currentPage = 1;

const games = [
    {
        id: "catan",
        name: "Catan",
        img: "images/catan.webp",
        category: "strategy",
        description: "Trade resources and build settlements to dominate the island of Catan. The first player to reach 10 victory points wins."
    },
    {
        id: "risk",
        name: "Risk",
        img: "images/risk.webp",
        category: "strategy",
        description: "Command armies and conquer territories in this classic game of global domination and strategic warfare."
    },
    {
        id: "ticket-to-ride",
        name: "Ticket to Ride",
        img: "images/ticket-to-ride.webp",
        category: "strategy",
        description: "Collect train cards and claim railway routes across the map to connect cities and complete your destination tickets."
    },
    {
        id: "twilight-imperium",
        name: "Twilight Imperium",
        img: "images/twilight-imperium.webp",
        category: "strategy",
        description: "Lead one of seventeen factions in an epic game of galactic conquest, politics, and trade across the universe."
    },
    
    {
        id: "codenames",
        name: "Codenames",
        img: "images/codenames.webp",
        category: "party",
        description: "Give one-word clues to help your team identify secret agents on the board before the opposing team does."
    },
    {
        id: "taboo",
        name: "Taboo",
        img: "images/taboo.webp",
        category: "party",
        description: "Describe a word to your teammates without using the forbidden words listed on the card. Fast-paced and hilarious."
    },
    {
        id: "pictionary",
        name: "Pictionary",
        img: "images/pictionary.webp",
        category: "party",
        description: "Draw clues for your teammates to guess while racing against the clock. No artistic talent required — or helpful."
    },
    {
        id: "just-one",
        name: "Just One",
        img: "images/just-one.webp",
        category: "party",
        description: "A cooperative word game where everyone writes a one-word clue to help the guesser — but duplicate clues are removed."
    },

    {
        id: "trivial-pursuit",
        name: "Trivial Pursuit",
        img: "images/trivial-pursuit.webp",
        category: "trivia",
        description: "Answer questions across six categories — geography, entertainment, history, art, science, and sports — to fill your pie."
    },
    {
        id: "smart-10",
        name: "Smart 10",
        img: "images/smart-10.webp",
        category: "trivia",
        description: "Each question has 10 possible answers. The longer you play, the harder it gets. A fresh twist on classic trivia."
    },
    {
        id: "wits-and-wagers",
        name: "Wits & Wagers",
        img: "images/wits-and-wagers.webp",
        category: "trivia",
        description: "Guess numerical trivia answers and bet on who you think is closest. You don't need to know the answer — just the odds."
    },
    {
        id: "bezzerwizzer",
        name: "Bezzerwizzer",
        img: "images/bezzerwizzer.webp",
        category: "trivia",
        description: "A trivia game where you can steal questions from other teams and swap categories to play to your strengths."
    },

    {
        id: "pandemic",
        name: "Pandemic",
        img: "images/pandemic.webp",
        category: "family",
        description: "Work together as a team of specialists to stop four deadly diseases from spreading across the globe."
    },
    {
        id: "carcassonne",
        name: "Carcassonne",
        img: "images/carcassonne.webp",
        category: "family",
        description: "Build the medieval landscape of southern France by placing tiles and deploying followers to score points."
    },
    {
        id: "dixit",
        name: "Dixit",
        img: "images/dixit.webp",
        category: "family",
        description: "Use beautifully illustrated cards to tell stories. Other players vote on which card matches your clue."
    },
    {
        id: "connect-four",
        name: "Connect Four",
        img: "images/connect-four.webp",
        category: "family",
        description: "Drop colored discs into the grid and be the first to connect four of your pieces in a row — horizontally, vertically, or diagonally."
    },
    
    {
        id: "uno",
        name: "UNO",
        img: "images/uno.webp",
        category: "cards",
        description: "Match colors and numbers and use action cards to block your opponents. Be the first to empty your hand and shout UNO!"
    },
    {
        id: "exploding-kittens",
        name: "Exploding Kittens",
        img: "images/exploding-kittens.webp",
        category: "cards",
        description: "Draw cards and avoid the exploding kitten. Use action cards to skip, attack, or steal from other players."
    },
    {
        id: "sushi-go",
        name: "Sushi Go!",
        img: "images/sushi-go.webp",
        category: "cards",
        description: "Draft the best combination of sushi dishes as cards pass around the table. Score points for the tastiest sets."
    },
    {
        id: "love-letter",
        name: "Love Letter",
        img: "images/love-letter.webp",
        category: "cards",
        description: "Use cards representing members of the royal court to deliver your love letter to the princess while eliminating rivals."
    },

    {
        id: "gloomhaven",
        name: "Gloomhaven",
        img: "images/gloomhaven.webp",
        category: "rpg",
        description: "Lead a party of mercenaries through a persistent fantasy world filled with dungeons, decisions, and evolving storylines."
    },
    {
        id: "betrayal-at-house-on-the-hill",
        name: "Betrayal at House on the Hill",
        img: "images/betrayal.webp",
        category: "rpg",
        description: "Explore a haunted mansion until one player becomes the traitor. Every game tells a different horror story."
    },
    {
        id: "dungeons-and-dragons",
        name: "D&D Adventure System",
        img: "images/dnd.webp",
        category: "rpg",
        description: "Battle monsters and complete quests in a cooperative dungeon-crawling adventure set in the D&D universe."
    },
    {
        id: "arkham-horror",
        name: "Arkham Horror",
        img: "images/arkham-horror.webp",
        category: "rpg",
        description: "Investigators work together to close dimensional gates and prevent ancient evil from awakening in 1920s Arkham."
    },

    {
        id: "friday",
        name: "Friday",
        img: "images/friday.webp",
        category: "solo",
        description: "Help Robinson Crusoe survive on a deserted island by managing a deck of cards and defeating increasing challenges."
    },
    {
        id: "under-falling-skies",
        name: "Under Falling Skies",
        img: "images/under-falling-skies.webp",
        category: "solo",
        description: "Defend Earth against an alien invasion by managing resources and shooting down UFOs before they reach your base."
    },
    {
        id: "castaway",
        name: "Castaway",
        img: "images/castaway.webp",
        category: "solo",
        description: "Survive on a deserted island by exploring, gathering resources, and crafting tools across a series of challenging scenarios."
    }
];

const params = new URLSearchParams(window.location.search);
const urlCategory = params.get("category");
if (urlCategory) {
    currentFilter = urlCategory;
    document.querySelectorAll(".filter-option").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.filter === urlCategory);
    });
}

document.getElementById("filter-btn").addEventListener("click", () => {
    document.getElementById("filter-list").classList.toggle("open");
});

document.querySelectorAll(".filter-option").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-option").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        currentPage = 1; 
        renderCatalog();
        document.getElementById("filter-list").classList.add("hidden");
    });
});

function getFilteredGames() {
    return games
        .filter(game => currentFilter === "all" || game.category === currentFilter)
        .sort((a, b) => a.name.localeCompare(b.name));
}

function renderCatalog() {
    const filtered = getFilteredGames();
    const totalPages = Math.ceil(filtered.length / GAMES_PER_PAGE);
    const start = (currentPage - 1) * GAMES_PER_PAGE;
    const pageGames = filtered.slice(start, start + GAMES_PER_PAGE);

    document.getElementById("catalog-grid").innerHTML = pageGames.map(game => `<div class="game-card" onclick="toggleDescription('${game.id}')">
        <img src="${game.img}" alt="${game.name}" loading="lazy">
        <h3>${game.name}</h3>
        <span class="category-tag">${game.category}</span>
        <p class="game-description hidden" id="desc-${game.id}">${game.description}</p>
        </div>
    `).join("");

    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    const existing = document.getElementById("pagination");
    if (existing) existing.remove();

    if (totalPages <= 1) return; 

    const pagination = document.createElement("div");
    pagination.id = "pagination";

    pagination.innerHTML =
        `<button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? "disabled" : ""}>← Prev</button>
        <span>Page ${currentPage} of ${totalPages}</span>
        <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? "disabled" : ""}>Next →</button>`;

    document.querySelector(".catalog-categories").appendChild(pagination);
}

function changePage(page) {
    currentPage = page;
    renderCatalog();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleDescription(gameId) {
    const desc = document.getElementById(`desc-${gameId}`);
    desc.classList.toggle("hidden");

    if (!desc.classList.contains("hidden")) {
        const gameVisits = JSON.parse(localStorage.getItem("gameVisits") || "{}");
        gameVisits[gameId] = (gameVisits[gameId] || 0) + 1;
        localStorage.setItem("gameVisits", JSON.stringify(gameVisits));

        const game = games.find(g => g.id === gameId);
        if (game) {
        const categoryVisits = JSON.parse(localStorage.getItem("categoryVisits") || "{}");
        categoryVisits[game.category] = (categoryVisits[game.category] || 0) + 1;
        localStorage.setItem("categoryVisits", JSON.stringify(categoryVisits));
        }
    }
}

renderCatalog();