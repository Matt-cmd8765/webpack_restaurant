import "./styles.css";
import { renderpage } from "./homepage.js"
import { loadmenu } from "./menu.js"
import { loadabout } from "./about.js"

// Load the home page on initial load
renderpage();

document.getElementById('home').addEventListener('click', () => {
    renderpage();
});

document.getElementById('menu').addEventListener('click', () => {
    loadmenu();
});

document.getElementById('about').addEventListener('click', () => {
    loadabout();
});