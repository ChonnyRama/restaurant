const loadAboutPage = function() {
    const contentDiv = document.querySelector("#content");

    const contentHeader = document.createElement("div");
    const contentBody = document.createElement("div");

    contentHeader.classList.add("contact-page", "header");
    contentBody.classList.add("menu-page", "body");

    contentHeader.innerText = "Don't contact me"
    contentBody.innerText = "Say my name say my name say my name"


    contentDiv.appendChild(contentHeader)
    contentDiv.appendChild(contentBody)

}

export {loadAboutPage}