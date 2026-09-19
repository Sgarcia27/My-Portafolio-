const body = document.body;
const themeToggle = document.querySelector(".theme-toggle");
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const backToTop = document.querySelector(".back-to-top");
const themeStorageKey = "portfolio-theme";

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const isLight = theme === "light";
    themeToggle.textContent = isLight ? "Tema oscuro" : "Tema claro";
    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.setAttribute("aria-label", isLight ? "Cambiar al tema oscuro" : "Cambiar al tema claro");
}

const savedTheme = localStorage.getItem(themeStorageKey);
setTheme(savedTheme === "light" ? "light" : "dark");

themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem(themeStorageKey, nextTheme);
});

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;

        filterButtons.forEach((filterButton) => {
            const isActive = filterButton === button;
            filterButton.classList.toggle("is-active", isActive);
            filterButton.setAttribute("aria-pressed", String(isActive));
        });

        projectCards.forEach((card) => {
            card.hidden = selectedFilter !== "all" && card.dataset.category !== selectedFilter;
        });
    });
});

function updateBackToTopVisibility() {
    backToTop.classList.toggle("is-visible", window.scrollY > 400);
}

window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
updateBackToTopVisibility();
