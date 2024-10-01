import burger from "./img/burger.png"

export function renderpage() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
    // * Create elements
    const h1node = document.createElement("h1");
    const pnode = document.createElement("p");
    const divnode = document.createElement("div");
    const img = document.createElement("img");

    img.src = burger;

    // * Create text nodes
    const h1textnode = document.createTextNode("The Krusty Krab");
    const ptextnode = document.createTextNode("Official Website of the Krusty Krab! Best Place for a burger!"); 
    
    // * append childs to divs 
    h1node.appendChild(h1textnode);
    document.getElementById("content").appendChild(h1node);
    document.getElementById("content").appendChild(divnode);
    document.getElementById("content").appendChild(img);
    pnode.appendChild(ptextnode);
    divnode.appendChild(pnode);
}