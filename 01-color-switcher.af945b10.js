!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");e.addEventListener("click",(function(){a(!0),o=setInterval(c,1e3)})),n.addEventListener("click",(function(){a(!1),clearInterval(o)}));var o=null;function a(t){e.disabled=t,n.disabled=!t}function c(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}}();
//# sourceMappingURL=01-color-switcher.af945b10.js.map
