export function renderpage() {
    const node = document.createElement("h1");
    const textnode = document.createTextNode("Bill's Burgers");
    node.appendChild(textnode);
    document.getElementById("content").appendChild(node);
}

export const greeting = console.log('Hi bitch');