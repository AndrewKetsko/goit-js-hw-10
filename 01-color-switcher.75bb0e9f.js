const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),s=document.querySelector("body");t.classList.add("disable");let a=0;e.addEventListener("click",(()=>{e.classList.add("disable"),t.classList.remove("disable"),a=setInterval((()=>{s.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),console.log(a)})),t.addEventListener("click",(()=>{t.classList.add("disable"),e.classList.remove("disable"),console.log(a),clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.75bb0e9f.js.map
