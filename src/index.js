import { loadMainPage } from "./mainPage";
import { loadMenuPage } from "./menuPage";
import { loadAboutPage } from "./contactPage";
import './style.css'

const menuButton = document.querySelector(".menu");
const homeButton = document.querySelector(".home");
const aboutButton = document.querySelector(".about")
const nav = document.querySelector("nav");
const content = document.querySelector("#content");

loadMainPage();

nav.addEventListener("click",(e)=> {
    content.innerHTML = ''
    switch (e.target.className){
        case 'home':
            loadMainPage();
            break;
        case 'menu':
            loadMenuPage();
            break;
        case 'about':
            loadAboutPage();
            break;

    }
})


