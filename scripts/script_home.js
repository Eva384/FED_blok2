//show more functie
document.querySelector("main > button").addEventListener("click", function () {

    // voeg class toe aan main
    document.querySelector("main").classList.add("showMore");

    // verborgen sections tonen
    const verborgen = document.querySelectorAll("section:nth-of-type(n+7):nth-of-type(-n+11)");
    verborgen.forEach(sec => sec.style.display = "");

    // knop verwijderen
    this.style.display = "none";
});