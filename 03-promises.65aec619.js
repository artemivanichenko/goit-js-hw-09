var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var r=o[e];delete o[e];var t={id:e,exports:{}};return n[e]=t,r.call(t.exports,t,t.exports),t.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},e.parcelRequired7c6=r);var t=r("iQIUW");const u=document.querySelector("[name='delay']"),i=document.querySelector("[name='step']"),l=document.querySelector("[name='amount']");document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const n=Number(l.value),o=Number(i.value),r=Number(u.value),a=Array.from({length:n},((e,n)=>n+1));console.log(a),a.forEach(((e,n)=>{(function(e,n){const o=Math.random()>.3;return new Promise(((r,t)=>{setTimeout((()=>{o?r(`✅ Fulfilled promise ${e} in ${n}ms`):t(`❌ Rejected promise ${e} in ${n}ms`)}),n)}))})(e,o*n+r).then((e=>t.Notify.success(e))).catch((e=>t.Notify.failure(e)))}))}));
//# sourceMappingURL=03-promises.65aec619.js.map