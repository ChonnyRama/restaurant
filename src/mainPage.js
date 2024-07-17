
const loadPage = function() {
    const contentDiv = document.querySelector("#content");

    const contentHeader = document.createElement("div");
    const contentBody = document.createElement("div");
    const contentHours = document.createElement("div");
    const contentFooter = document.createElement("div");

    contentHeader.classList.add("main-page", "header");
    contentBody.classList.add("main-page", "body");
    contentHours.classList.add("main-page", "hours");
    contentFooter.classList.add("main-page", "footer");


    contentHeader.textContent = "Thai 53"
    contentBody.textContent = "Fresh Thai food inspired by the skreets of Thailand with a wonderful waiting staff to accompany it."
    contentHours.textContent = "Location"
    
    const hours = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday"]
    hours.forEach((hour)=> {
        const storeHours = document.createElement('p');
        storeHours.textContent = `${hour}: 8am-8pm`;
        contentHours.appendChild(storeHours);
    })

    contentFooter.textContent = "Location"
    const location = document.createElement('p');
    location.textContent = "some location";
    contentFooter.appendChild(location)

    contentDiv.appendChild(contentHeader)
    contentDiv.appendChild(contentBody)
    contentDiv.appendChild(contentHours)
    contentDiv.appendChild(contentFooter)
}

export {loadPage as loadMainPage}