import loadHome from "./home";
import loadMenu from "./menu";

function createNavbar(){
    const nav = document.createElement("nav"); 
    nav.classList.add("navbar");

    const homeButton = document.createElement("button"); 
    homeButton.classList.add("nav-button");
    homeButton.textContent = "Home"; 
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHome();
    });

// 
    const menuButton = document.createElement("button"); 
    menuButton.classList.add("nav-button");
    menuButton.textContent = "Menu"; 
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        loadMenu();
    });

//

const contactButton = document.createElement("button"); 
contactButton.classList.add("nav-button");
contactButton.textContent = "Contact"; 

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".nav-button");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  }

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function createFooter(){
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const footerButton = document.createElement("button");
    footerButton.classList.add("footer-button");
    footerButton.textContent = "Developed with ♥ by Diana"; 

    footerButton.addEventListener('click', () => {
        window.open("https://github.com/Diana2x", '_blank');
    });

    footer.appendChild(footerButton);
    return footer;
}

function loadWebsite(){
    const content = document.getElementById("content");
    
    content.appendChild(createNavbar());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(".nav-button"));
  loadHome();
}

export default loadWebsite;