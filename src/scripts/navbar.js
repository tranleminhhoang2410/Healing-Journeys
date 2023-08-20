const navbarLinks = document.querySelectorAll('.navbar-link');
const menuMobile = document.querySelector('.menu-mobile');
const navbarList = document.querySelector('.navbar-list');

//active link
const currentUrl = window.location.href.split('/')[3]

const activeLink = Array.from(navbarLinks).find(link => link.href.includes(currentUrl));
activeLink.parentElement.classList.add('active')

//toggle menu
let isMenuOpen;

const toggleMenu = () => {
    navbarList.classList.toggle('toggle'); // Toggle the 'toggle' class
    isMenuOpen = !isMenuOpen; // Invert the menu state
}

menuMobile.addEventListener("click", toggleMenu);

// Close menu when clicking outside
document.addEventListener("click", (event) => {
    if (isMenuOpen && !event.target.closest('.navbar')) {
        toggleMenu();
    }
});