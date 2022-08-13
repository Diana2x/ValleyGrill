function createHomepage(){
    const homePage = document.createElement("div");
    homePage.classList.add("home-page"); 

    const restaurantName = document.createElement("h1"); 
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Valley Grill";

    const restaurantDescription = document.createElement("p"); 
    restaurantDescription.classList.add("restaurant-description"); 
    restaurantDescription.innerHTML = "LUNCH & DINNER BAR<br/>EST 2022"

    
    homePage.appendChild(restaurantName);
    homePage.appendChild(restaurantDescription);

    return homePage;
}

function loadHome(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHomepage());
}

export default loadHome;




