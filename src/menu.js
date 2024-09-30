import krabby_patty_pic from "./img/krabby_patty.jpg"

// ! menu object
export function menuitem(item, pic, price, description) {
    this.item = item;
    this.pic = pic;
    this.price = price;
    this.description = description;
}

// * menu array
let menuarray = [];

// ! List of menuitem objects 
let krabbypatty = new menuitem(
    'Krabby Patty', 
    krabby_patty_pic, 
    12, 
    'The OG patty. Delicious but goes straight to your thighs'
);

let jellyfishpatty = new menuitem(
    'Jellyfish Patty',
    './img/jellyfish_patty',
    13,
    'Krabby patty with fresh jellyfish jelly'
);

let nasty_patty = new menuitem(
    'Nasty Patty',
    './img/nasty_patty.jpg',
    2,
    'This patty is nasty. Only served to fake health inspectors'
);

let pretty_patty = new menuitem(
    'Pretty Patty',
    './img/pretty_patties',
    20,
    'Choose from our assortment of pretty patties!'
);

// * push all the objects into the array
menuarray.push(krabbypatty, jellyfishpatty, nasty_patty, pretty_patty);

function listmenu(item) {
    const content = document.getElementById('content');
    const div = document.createElement('div');
    const h3 = document.createElement('h3'); // for the menu item header
    const img = document.createElement("img"); // burger pic
    const price = document.createElement('p'); // price
    const description = document.createElement('p'); // menuitem description

    const h3text = document.createTextNode(`${item.item}`);
    h3.appendChild(h3text);
    content.appendChild(h3);

    img.src = item.pic;
    content.appendChild(img);
}

export function loadmenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
    const header = document.createElement('h1');
    const headertext = document.createTextNode('THE MENU');
    header.appendChild(headertext);
    content.appendChild(header);
    menuarray.forEach(listmenu);
}