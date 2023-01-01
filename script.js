const iconMenu = document.getElementById('iconMenu');
const navLinks = document.querySelector('.nav-links');

iconMenu.addEventListener('click', () => {
    if(navLinks.style.height === "0px"){
        navLinks.style.height = "100%"
        iconMenu.src = "./assets/x_icon_172101.svg"
    }
    else{
        navLinks.style.height = "0px"
        iconMenu.src="./assets/icon-menu.svg"
    }
});