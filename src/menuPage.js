import Item from './resources/pad.avif'

const loadMenuPage = function() {
    const contentDiv = document.querySelector("#content");

    const contentHeader = document.createElement("div");
    const contentBody = document.createElement("div");

    contentHeader.classList.add("menu-page", "header");
    contentBody.classList.add("menu-page", "body");

    contentHeader.textContent = "Thai 53 Menu"

    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item")
    const itemName = document.createElement("p");
    itemName.classList.add("item-name");
    const itemDescription = document.createElement("p");
    itemDescription.classList.add("item-description");
    itemName.textContent = "Pad See Ew";
    itemDescription.textContent = `stir-fried wide rice noodles 
    with Chinese broccoli, egg, and a protein of your choice`
    const itemImage = new Image();
    itemImage.src = Item;
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);
    menuItem.appendChild(itemImage);


    contentDiv.appendChild(contentHeader);
    contentDiv.appendChild(contentBody);
    contentDiv.appendChild(menuItem);

}

export { loadMenuPage }