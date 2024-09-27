
export function loadmenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
    const header = document.createElement('h1');
    const headertext = document.createTextNode('THE MENU');
    header.appendChild(headertext);
    content.appendChild(header);
}