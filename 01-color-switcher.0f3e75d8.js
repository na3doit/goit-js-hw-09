!function(){const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");let r=null;t.addEventListener("click",(()=>{r=setInterval((()=>{t.setAttribute("disabled","disabled");const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;o.style.backgroundColor=e}),1e3)})),e.addEventListener("click",(()=>{t.removeAttribute("disabled"),clearInterval(r)}))}();
//# sourceMappingURL=01-color-switcher.0f3e75d8.js.map