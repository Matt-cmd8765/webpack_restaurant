import "./styles.css";
import { renderpage } from "./homepage.js"
import { loadmenu } from "./menu.js"

console.log('Hello!');

// renderpage();

const menubutton = document.getElementById('menu');
menubutton.addEventListener("click", loadmenu());