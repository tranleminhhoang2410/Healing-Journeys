const navbarLinks = document.querySelectorAll(".navbar-link");
const menuMobile = document.querySelector('.menu-mobile');
const navbarList = document.querySelector('.navbar-list');

//active link
const currentUrl = window.location.href.split('/')[3]

const activeLink = Array.from(navbarLinks).find(link => link.href.includes(currentUrl));
activeLink.parentElement.classList.add('active')

//toggle menu
let isMenuOpen = false;

menuMobile.addEventListener("click", () => {
    if (!isMenuOpen) {
        navbarList.style.display = 'flex'
        isMenuOpen = true;
    } else {
        navbarList.style.display = 'none'
        isMenuOpen = false;
    }
})
