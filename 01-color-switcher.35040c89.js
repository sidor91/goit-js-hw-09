function t(){document.querySelector("body").style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}const e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");e.addEventListener("click",(function(){o=setInterval(t,1e3),e.setAttribute("disabled",!0)})),n.addEventListener("click",(function(){clearInterval(o),e.removeAttribute("disabled")}));let o=null;
//# sourceMappingURL=01-color-switcher.35040c89.js.map