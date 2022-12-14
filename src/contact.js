import { map } from "lodash";

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
    mapContainer.classList.add("map-container");
    const iframe = document.createElement("iframe");
    iframe.classList.add("map");
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4895.056316793837!2d4.488632500137528!3d52.161090118593854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5c692a957c1eb%3A0x1dad90b1d54910a9!2sWAAG!5e0!3m2!1sen!2snl!4v1661082912215!5m2!1sen!2snl";
    contactPage.appendChild(contactHeader);
    contactPage.appendChild(contactDiv);
    contactDiv.appendChild(address);
    contactDiv.appendChild(telephone);
    contactDiv.appendChild(openingTimes);
    contactDiv.appendChild(mapContainer);
    mapContainer.appendChild(iframe);

    return contactPage;
}



function loadContact(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;
