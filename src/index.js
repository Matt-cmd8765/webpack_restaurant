import "./styles.css";
import { renderpage } from "./homepage.js"
import { loadmenu } from "./menu.js"

// Load the home page on initial load
renderpage();

document.getElementById('home').addEventListener('click', () => {
    renderpage();
});

document.getElementById('menu').addEventListener('click', () => {
    loadmenu();
});


// renderpage();

// document.getElementById('menu').addEventListener("click", () => loadmenu());