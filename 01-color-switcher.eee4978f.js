const t=document.querySelector("body"),e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");e.addEventListener("click",(function(){c(!0),o=setInterval(r,1e3)})),n.addEventListener("click",(function(){c(!1),clearInterval(o)}));let o=null;function c(t){e.disabled=t,n.disabled=!t}function r(){t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}
//# sourceMappingURL=01-color-switcher.eee4978f.js.map