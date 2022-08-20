var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBqhzV8lDxZKil0uHpm3sPAIEHskKZIiMA&callback=initMap';
script.defer = true;


function createContact(){
    const contactPage = document.createElement("div");
    contactPage.classList.add("contact", "main-content"); 

    const contactHeader = document.createElement("h1");
    contactHeader.classList.add("page-header", "menu-header");
    contactHeader.innerText = "Contact Us"


    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact-container");
    const telephone = document.createElement("p");
    telephone.innerHTML = `<b>Telephone</b>: 0677887977`;
    const address = document.createElement("p");
    address.innerHTML = `<b>Address</b>:<br> Stationsplein 5K, 2312 AJ, Leiden.`;
    const openingTimes = document.createElement("p");
    openingTimes.innerHTML = `<b>Opening Hours</b><br><b>Monday - Saturday:</b> 12:00pm. to 12:00am.<br><b>Sunday:</b> Closed. `;
    const mapContainer = document.createElement("div");
    mapContainer.setAttribute("id", "map");
   
    
    contactPage.appendChild(contactHeader);
    contactPage.appendChild(contactDiv);
    contactDiv.appendChild(address);
    contactDiv.appendChild(telephone);
    contactDiv.appendChild(openingTimes);
    contactDiv.appendChild(mapContainer);


    return contactPage;
}


window.initMap = () => {
    // The location of Uluru
    const uluru = { lat: 52.1601, lng: 4.4970 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}


function loadContact(){
    document.head.appendChild(script);
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;
