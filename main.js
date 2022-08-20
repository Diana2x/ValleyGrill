(()=>{"use strict";const e=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home-page","main-content");const t=document.createElement("h1");t.classList.add("restaurant-name"),t.textContent="Valley Grill";const n=document.createElement("p");return n.classList.add("restaurant-description"),n.innerHTML="LUNCH & DINNER BAR<br/>EST 2022",e.appendChild(t),e.appendChild(n),e}())};function t(e,t,n){const a=document.createElement("div");a.classList.add("menu-item");const d=document.createElement("h2");d.textContent=e;const c=document.createElement("p");c.textContent=t,c.classList.add("food-description");const o=document.createElement("p");o.innerHTML=`Price: <b>$${n}</b>`;const i=document.createElement("img");return i.src=`images/${e.split(" ").join("").toLowerCase()}.png`,i.alt=`${e}`,a.appendChild(i),a.appendChild(d),a.appendChild(c),a.appendChild(o),a}var n=document.createElement("script");n.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBqhzV8lDxZKil0uHpm3sPAIEHskKZIiMA&callback=initMap",n.defer=!0,window.initMap=()=>{const e={lat:52.1601,lng:4.497},t=new google.maps.Map(document.getElementById("map"),{zoom:12,center:e});new google.maps.Marker({position:e,map:t})};function a(e){document.querySelectorAll(".nav-button").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const d=document.getElementById("content");d.appendChild(function(){const d=document.createElement("nav");d.classList.add("navbar");const c=document.createElement("button");c.classList.add("nav-button"),c.textContent="Home",c.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(c),e())}));const o=document.createElement("button");o.classList.add("nav-button"),o.textContent="Menu",o.addEventListener("click",(e=>{e.target.classList.contains("active")||(a(o),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu","main-content");const n=document.createElement("h1");n.classList.add("page-header"),n.textContent="The Best Grilled Steaks";const a=document.createElement("div");return a.classList.add("menu-container"),a.appendChild(t("New York State","One of the most popular meat cuts, grilled with herbs and butter","45")),a.appendChild(t("Ribeye Tender","Tender, juicy, and well-marbled","60")),a.appendChild(t("Filet Mignon","The Filet Mignon is one of the most tender cuts of beef available","55")),a.appendChild(t("New York State","One of the most popular meat cuts, grilled with herbs and butter","45")),a.appendChild(t("Ribeye Tender","Tender, juicy, and well-marbled","60")),a.appendChild(t("Filet Mignon","The Filet Mignon is one of the most tender cuts of beef available","55")),e.appendChild(n),e.appendChild(a),e}())}())}));const i=document.createElement("button");return i.classList.add("nav-button"),i.textContent="Contact",i.addEventListener("click",(e=>{e.target.classList.contains("active")||(a(i),function(){document.head.appendChild(n);const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact","main-content");const t=document.createElement("h1");t.classList.add("page-header","menu-header"),t.innerText="Contact Us";const n=document.createElement("div");n.classList.add("contact-container");const a=document.createElement("p");a.innerHTML="<b>Telephone</b>: 0677887977";const d=document.createElement("p");d.innerHTML="<b>Address</b>:<br> Stationsplein 5K, 2312 AJ, Leiden.";const c=document.createElement("p");c.innerHTML="<b>Opening Hours</b><br><b>Monday - Saturday:</b> 12:00pm. to 12:00am.<br><b>Sunday:</b> Closed. ";const o=document.createElement("div");return o.setAttribute("id","map"),e.appendChild(t),e.appendChild(n),n.appendChild(d),n.appendChild(a),n.appendChild(c),n.appendChild(o),e}())}())})),d.appendChild(c),d.appendChild(o),d.appendChild(i),d}()),d.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),d.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("button");return t.classList.add("footer-button"),t.textContent="Developed with ♥ by Diana",t.addEventListener("click",(()=>{window.open("https://github.com/Diana2x","_blank")})),e.appendChild(t),e}()),a(document.querySelector(".nav-button")),e()}()})();