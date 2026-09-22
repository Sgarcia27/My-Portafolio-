const body = document.body;
const themeButtons = document.querySelectorAll(".theme-toggle");
const projectCards = document.querySelectorAll(".project-card");
const backToTop = document.querySelector(".back-to-top");
const themeStorageKey = "portfolio-theme";

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    themeButtons.forEach((button) => {
        const isActive = button.dataset.theme === theme;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
    localStorage.setItem(themeStorageKey, theme);
}

const savedTheme = localStorage.getItem(themeStorageKey) || "dark";
setTheme(savedTheme === "light" ? "light" : "dark");

themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        setTheme(button.dataset.theme);
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
