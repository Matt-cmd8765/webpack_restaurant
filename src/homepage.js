import burger from "./img/Krabby_Patty.png"

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
    
    // * append textnodes to elements 
    h1node.appendChild(h1textnode);
    pnode.appendChild(ptextnode);

    // * Append elements do div
    document.getElementById("content").appendChild(divnode);
    divnode.appendChild(h1node);
    divnode.appendChild(pnode);
    divnode.appendChild(img);

    divnode.classList.add('homepage_div')
}