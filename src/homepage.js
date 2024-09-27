import burger from "./img/burger.png"

export function renderpage() {
    // * Create elements
    const h1node = document.createElement("h1");
    const h3node = document.createElement("h3");
    const pnode = document.createElement("p");
    const divnode = document.createElement("div");
    const img = document.createElement("img");

    img.src = burger;

    // * Create text nodes
    const h1textnode = document.createTextNode("Bill's Burgers");
    const h3textnode = document.createTextNode("Our Burgers");
    const ptextnode = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."); 
    
    // * append childs to divs 
    h1node.appendChild(h1textnode);
    document.getElementById("content").appendChild(h1node);
    document.getElementById("content").appendChild(divnode);
    document.getElementById("content").appendChild(img);
    h3node.appendChild(h3textnode);
    pnode.appendChild(ptextnode);
    divnode.appendChild(h3node);
    divnode.appendChild(pnode);
}