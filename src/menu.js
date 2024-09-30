import krabby_patty_pic from "./img/krabby_patty.jpg"
import jelly_patty_pic from "./img/jellyfish_patty.jpg"
import nasty_patty_pic from "./img/nasty_patty.jpg"
import pretty_patty_pic from "./img/pretty_patties.jpg"

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

let jellypatty = new menuitem(
    'Jelly Patty',
    jelly_patty_pic,
    13,
    'Krabby patty with fresh jellyfish jelly'
);

let nasty_patty = new menuitem(
    'Nasty Patty',
    nasty_patty_pic, 
    2,
    'This patty is nasty. Only served to fake health inspectors'
);

let pretty_patty = new menuitem(
    'Pretty Patty',
    pretty_patty_pic,
    20,
    'Choose from our assortment of pretty patties!'
);

// * push all the objects into the array
menuarray.push(krabbypatty, jellypatty, nasty_patty, pretty_patty);

function listmenu(item) {
    const content = document.getElementById('content');
    const outerdiv = document.getElementsByClassName('outerdiv');
    const div = document.createElement('div');
    const h3 = document.createElement('h3'); // for the menu item header
    const img = document.createElement("img"); // burger pic
    const price = document.createElement('p'); // price
    const description = document.createElement('p'); // menuitem description

    const h3text = document.createTextNode(`${item.item}`);
    h3.appendChild(h3text);
    div.appendChild(h3);

    img.src = item.pic;
    div.appendChild(img);

    const pricetext = document.createTextNode(`$${item.price}`);
    price.appendChild(pricetext);
    div.appendChild(price);

    const descriptiontext = document.createTextNode(`${item.description}`);
    description.appendChild(descriptiontext);
    div.appendChild(description);

    outerdiv[0].appendChild(div);
    div.classList.add('menu_item');
}

export function loadmenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
    const header = document.createElement('h1');
    const outerdiv = document.createElement('div');
    const headertext = document.createTextNode('THE MENU');
    header.appendChild(headertext);
    content.appendChild(header);
    content.appendChild(outerdiv);
    outerdiv.classList.add('outerdiv');
    menuarray.forEach(listmenu);
}