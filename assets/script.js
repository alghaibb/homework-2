// Wait for the DOM content to be fully loaded before executing code
document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class "icon-arrow"
    const arrowLinks = document.querySelectorAll(".icon-arrow");

    // Loop through each arrow link
    arrowLinks.forEach(function (arrowLink) {
        // Add a click event listener to each arrow link
        arrowLink.addEventListener("click", function () {
            // Find the next sibling section of the clicked arrow link's parent section
            const nextSection = arrowLink.closest("section").nextElementSibling;
            
            // If there is a next section, scroll to it smoothly
            if (nextSection) {
                nextSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});

// Function to toggle the mobile menu
function toggleMenu() {
    // Select the menu links container and the hamburger icon
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // Toggle the "open" class on the menu links container and the hamburger icon
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
