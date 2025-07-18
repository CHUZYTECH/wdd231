// Code for Navigation
document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("primaryNav").classList.toggle("show");
});

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("primaryNav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("hide");

    // Toggle between hamburger (☰) and cancel (×)
    if (hamburger.textContent === "☰") {
        hamburger.textContent = "✖";
    } else {
        hamburger.textContent = "☰";
    }
});

// Code for Date Modification
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastUpdate").textContent = "Last Modified: " + document.lastModified;

// Grid and List Code
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

