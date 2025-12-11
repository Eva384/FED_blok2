// Menu functie
// !bron:
console.log("hi");

let homeButton = document.querySelector("header li:first-of-type button");

homeButton.onclick = toggleMenu;

function toggleMenu() {
    let deNav = document.querySelector("header nav");
    deNav.classList.toggle("toonMenu");
}


//scroll omhoog functie
document.querySelector("footer nav:first-of-type li:first-of-type button").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth"});
});