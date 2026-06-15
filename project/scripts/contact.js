// ── FOOTER ───────────────────────────────────────────
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ── HAMBURGUER MENU ─────────────────────────────────
document.getElementById("menu").addEventListener("click", () => {
    document.querySelector(".header-nav").classList.toggle("open");
});

// ── FORM ───────────────────────────────────────
const form = document.getElementById("suggestion-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    clearErrors();

    const isValid = validateForm();

    if (isValid) {
        saveSuggestion();

        form.classList.add("hidden");
        document.getElementById("success-message").classList.remove("hidden");

        document.getElementById("success-message").scrollIntoView({ behavior: "smooth" });
    }
});

function validateForm() {
    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const reason = document.getElementById("reason");

    if (name.value.trim() === "") {
        showError(name, "Please enter your name.");
        isValid = false;
    }

    if (email.value.trim() === "") {
        showError(email, "Please enter your email.");
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        showError(email, "Please enter a valid email address.");
        isValid = false;
    }

    if (reason.value.trim() === "") {
        showError(reason, "Please tell us why you recommend this game.");
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, message) {
    input.classList.add("error");

    let errorMsg = input.parentElement.querySelector(".error-msg");
    if (!errorMsg) {
        errorMsg = document.createElement("span");
        errorMsg.classList.add("error-msg");
        input.parentElement.appendChild(errorMsg);
    }
    errorMsg.textContent = message;
    errorMsg.classList.add("visible");
}

function clearErrors() {
    document.querySelectorAll(".error").forEach(el => el.classList.remove("error"));
    document.querySelectorAll(".error-msg").forEach(el => el.classList.remove("visible"));
}

function saveSuggestion() {
    const suggestion = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        game: document.getElementById("game-name").value.trim(),
        reason: document.getElementById("reason").value.trim(),
        comments: document.getElementById("comments").value.trim(),
        date: new Date().toLocaleDateString()
    };

    const suggestions = JSON.parse(localStorage.getItem("suggestions") || "[]");
    suggestions.push(suggestion);
    localStorage.setItem("suggestions", JSON.stringify(suggestions));
}