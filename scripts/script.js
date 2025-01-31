//Create menu toggle function
document.addEventListener("DOMContentLoaded", () => {
    //Create consts hamburgermenu, navmenu, and overlay
    const hamburgerMenu = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const overlay = document.getElementById("overlay");

    //Create function to toggle menu
    function toggleMenu() {
        const isActive = navMenu.classList.toggle("active");
        overlay.classList.toggle("active");

        //Change the menu icon to X
        hamburgerMenu.classList.toggle("bx-menu", !isActive);

        //Change the menu icon to hamburger
        hamburgerMenu.classList.toggle("bx-x", isActive);
    }

    //Add event listener to hamburgermenu
    hamburgerMenu.addEventListener("click", toggleMenu);

    //Add event listener to overlay for clicking outside of nav menu
    overlay.addEventListener("click", toggleMenu);
});