function createNavbar(){
    const nav = document.createElement("nav"); 
    nav.classList.add("navbar");

    const homeButton = document.createElement("button"); 
    homeButton.classList.add("nav-button");
    homeButton.textContent = "Home"; 

// 
    const menuButton = document.createElement("button"); 
    menuButton.classList.add("nav-button");
    menuButton.textContent = "Menu"; 

//

const contactButton = document.createElement("button"); 
contactButton.classList.add("nav-button");
contactButton.textContent = "Contact"; 

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function createHeader(){
    const header = document.createElement("header");
    header.classList.add("header"); 

    const restaurantName = document.createElement("h1"); 
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Valley Grill";

    header.appendChild(restaurantName);

    return header;
}

function loadWebsite(){
    const content = document.getElementById("content");

    content.appendChild(createNavbar());
    content.appendChild(createHeader());
    
}



export default loadWebsite;