function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("7Y9D8");const l=document.querySelector(".form");function u(e,t){const n=Math.random()>.3;return new Promise(((o,i)=>{setTimeout((()=>{n?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))}function a({position:t,delay:n}){e(r).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)}function s({position:t,delay:n}){e(r).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}l.addEventListener("click",(function(e){if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;const t={firstDelay:l.delay.value,step:l.step.value,amount:l.amount.value};for(let e=1;e<=Number(t.amount);e+=1){const n=Number(t.firstDelay)+Number(t.step)*(e-1);u(e,n).then(a).catch(s)}}));
//# sourceMappingURL=03-promises.9db18be9.js.map