let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let navigationItems = document.querySelector('#navigation-items');
var hamburger = document.getElementById('hamburger');

const hamburgerEvent = (navigation, close, open) => {
    console.log(hamburger);
    if (window.getComputedStyle(hamburger).display === "none"){

    }
    else {
        navigationItems.style.display = navigation;
        closeHam.style.display = close;
        openHam.style.display = open;
    }
};

openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
navigationItems.addEventListener('click', () => hamburgerEvent("none", "none", "block"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));