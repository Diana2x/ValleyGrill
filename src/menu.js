function createMenu(){
    const menu = document.createElement("div");
    menu.classList.add("menu"); 
    const menuHeader =  document.createElement("h1"); 
    menuHeader.classList.add("menu-header");
    menuHeader.textContent = "The Best Grilled Steaks"; 


    const menuContainer = document.createElement("div"); 
    menuContainer.classList.add("menu-container");
    menuContainer.appendChild(
        createMenuItem(
            "New York State", 
            "One of the most popular meat cuts, grilled with herbs and butter",
            "45"
        )  
    );
    menuContainer.appendChild(
        createMenuItem(
            "Ribeye", 
            "Ender, juicy, and well-marbled",
            "60"
        )  
    );
    menuContainer.appendChild(
        createMenuItem(
            "Filet Mignon", 
            "The Filet Mignon is one of the most tender cuts of beef available",
            "55"
        )  
    );
    menuContainer.appendChild(
        createMenuItem(
            "New York State", 
            "One of the most popular meat cuts, grilled with herbs and butter",
            "45"
        )  
    );
    menuContainer.appendChild(
        createMenuItem(
            "Ribeye", 
            "Ender, juicy, and well-marbled",
            "60"
        )  
    );
    menuContainer.appendChild(
        createMenuItem(
            "Filet Mignon", 
            "The Filet Mignon is one of the most tender cuts of beef available",
            "55"
        )  
    );
    
    menu.appendChild(menuHeader);       
    menu.appendChild(menuContainer);

    return menu; 
};


function createMenuItem(name, description, price){
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item"); 

    const foodName = document.createElement("h2");
    foodName.textContent = name; 

    const foodDescription = document.createElement("p"); 
    foodDescription.textContent = description; 

    const foodPrice = document.createElement("p");
    foodPrice.innerHTML = `Price: <b>$${price}</b>`; 

    const foodImage = document.createElement("img");
    foodImage.src = `images/${name.split(' ').join('').toLowerCase()}.png`;
    foodImage.alt = `${name}`;


    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
    menuItem.appendChild(foodPrice);

    return menuItem;
}


function loadMenu(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;