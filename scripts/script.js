// JavaScript Document
console.log("hi");

var homeButton = document.querySelector("header li:first-of-type button");

homeButton.onclick = toggleMenu;

function toggleMenu() {
    var deNav = document.querySelector("header nav");
    deNav.classList.toggle("toonMenu");
}
