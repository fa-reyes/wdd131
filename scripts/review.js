document.addEventListener("DOMContentLoaded", () => {
    const counterSpan = document.getElementById("reviewCounter");

    let reviewCount = parseInt(localStorage.getItem("reviewCountTotal")) || 0;
    reviewCount++;

    localStorage.setItem("reviewCountTotal", reviewCount);

    if (counterSpan) {
        counterSpan.textContent = reviewCount;
    }

    const currentYearSpan = document.getElementById("currentYear");
    const lastModifiedSpan = document.getElementById("lastModified");

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }
});