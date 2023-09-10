document.addEventListener("DOMContentLoaded", function () {
    const arrowLinks = document.querySelectorAll(".icon-arrow");

    arrowLinks.forEach(function (arrowLink) {
        arrowLink.addEventListener("click", function () {
            const nextSection = arrowLink.closest("section").nextElementSibling;
            if (nextSection) {
                nextSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}