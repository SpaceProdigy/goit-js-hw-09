function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var l=r("7Y9D8");const i=document.querySelector(".form");let u=1;i.addEventListener("submit",(t=>{t.preventDefault(),function(){const t=Number(i.elements.amount.value),n=setInterval((()=>{u<=t?function(e,t){const n=Number(i.elements.step.value);return t=1===u?Number(i.elements.delay.value):Number(i.elements.delay.value)+(u-1)*n,new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t),u++}))}(u).then((({position:t,delay:n})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})):(clearInterval(n),u=1)}),0)}()}));
//# sourceMappingURL=03-promises.c38548ac.js.map
