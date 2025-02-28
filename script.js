document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            let href = this.getAttribute("href");

            // Allow external links (http, https) and HTML pages to open normally
            if (href.startsWith("http") || href.endsWith(".html")) {
                return;
            }

            // Prevent default for internal section links
            event.preventDefault();
            let targetSection = document.querySelector(href);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Mobile Menu Toggle (if applicable)
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }
});
