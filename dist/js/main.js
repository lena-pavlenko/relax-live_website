(()=>{"use strict";const e=e=>{let t=document.documentElement.scrollTop+e.getBoundingClientRect().top;window.scrollTo({top:t,behavior:"smooth"})};(()=>{const e=document.querySelector(".header-contacts"),t=e.querySelector(".header-contacts__phone-number-accord");e.addEventListener("click",(e=>{if(e.target.closest(".header-contacts__arrow")){const o=e.target.closest(".header-contacts__arrow");o.classList.toggle("rotate");const c=t.querySelector("a");o.classList.contains("rotate")?(t.style.top="25px",c.style.opacity="1"):(t.style.top="0px",c.style.opacity="0")}}))})(),(()=>{const t=document.querySelector(".menu__icon"),o=document.querySelector(".popup-menu"),c=o.querySelector(".popup-dialog-menu"),s=()=>{o.classList.toggle("show-popup"),c.classList.toggle("show-menu")};t.addEventListener("click",(()=>{s()})),o.addEventListener("click",(t=>{if(!t.target.closest(".close-menu")&&t.target.closest(".popup-dialog-menu")||s(),t.target.closest(".popup-menu-nav__item")){t.preventDefault(),s();let o=document.querySelector(t.target.getAttribute("href"));e(o)}}))})(),(()=>{const t=document.querySelector(".button-footer"),o=document.getElementById("main");t.addEventListener("click",(t=>{t.preventDefault(),e(o)}))})(),(()=>{const e=document.querySelectorAll(".link-list"),t=document.querySelector(".popup-repair-types"),o=document.querySelector(".popup-menu"),c=o.querySelector(".popup-dialog-menu");e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),t.classList.add("show-popup"),o.classList.remove("show-popup"),c.classList.remove("show-menu"),t.addEventListener("click",(e=>{!e.target.closest(".close")&&e.target.closest(".popup-dialog-repair-types")||t.classList.remove("show-popup")}))}))}))})()})();