!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=!1,s=null;t.addEventListener("click",(function(){if(o)return;s=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),o=!0,t.classList.toggle("notActiv"),t.classList.toggle("no-hover"),t.setAttribute("disabled",""),e.removeAttribute("disabled"),e.classList.toggle("notActiv"),e.classList.toggle("no-hover")})),e.addEventListener("click",(function(){clearInterval(s),o=!1,e.classList.toggle("notActiv"),e.classList.toggle("no-hover"),e.setAttribute("disabled",""),t.removeAttribute("disabled"),t.classList.toggle("notActiv"),t.classList.toggle("no-hover")}))}();
//# sourceMappingURL=01-color-switcher.50bef0c1.js.map