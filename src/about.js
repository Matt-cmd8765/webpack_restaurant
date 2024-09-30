export function loadabout() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
    // * Create elements
    const h1node = document.createElement("h1");
    const pnode = document.createElement("p");

    // * Create text nodes
    const h1textnode = document.createTextNode("About Us");
    const ptextnode = document.createTextNode("The Krusty Krab is a fast food restaurant located in Bikini Bottom, founded and owned by Eugene H. Krabs. It is also the most popular and best known restaurant in Bikini Bottom.");
    // * append childs to divs 
    h1node.appendChild(h1textnode);
    document.getElementById("content").appendChild(h1node);
    pnode.appendChild(ptextnode);
    document.getElementById("content").appendChild(pnode);
}