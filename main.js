(()=>{"use strict";const t=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("home-page");const e=document.createElement("h1");e.classList.add("restaurant-name"),e.textContent="Valley Grill";const n=document.createElement("p");return n.classList.add("restaurant-description"),n.innerHTML="LUNCH & DINNER BAR<br/>EST 2022",t.appendChild(e),t.appendChild(n),t}())};function e(t){document.querySelectorAll(".nav-button").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}!function(){const n=document.getElementById("content");n.appendChild(function(){const n=document.createElement("nav");n.classList.add("navbar");const a=document.createElement("button");a.classList.add("nav-button"),a.textContent="Home",a.addEventListener("click",(n=>{n.target.classList.contains("active")||(e(a),t())}));const c=document.createElement("button");c.classList.add("nav-button"),c.textContent="Menu";const o=document.createElement("button");return o.classList.add("nav-button"),o.textContent="Contact",n.appendChild(a),n.appendChild(c),n.appendChild(o),n}()),n.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t}()),n.appendChild(function(){const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("button");return e.classList.add("footer-button"),e.textContent="Developed with ♥ by Diana",e.addEventListener("click",(()=>{window.open("https://github.com/Diana2x","_blank")})),t.appendChild(e),t}()),e(document.querySelector(".nav-button")),t()}()})();