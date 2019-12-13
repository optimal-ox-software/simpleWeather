import{d as o}from"./p-390405e1.js";let t=0;const n=o=>({create:t=>c(o,t),dismiss:(t,n,e)=>d(document,t,n,o,e),getTop:async()=>p(document,o)}),e=n("ion-alert"),a=n("ion-action-sheet"),s=n("ion-picker"),i=n("ion-popover"),r=o=>{const n=document;u(n);const e=t++;o.overlayIndex=e,o.hasAttribute("id")||(o.id=`ion-overlay-${e}`)},c=(o,t)=>customElements.whenDefined(o).then(()=>{const n=document,e=n.createElement(o);return e.classList.add("overlay-hidden"),Object.assign(e,t),y(n).appendChild(e),e.componentOnReady()}),u=o=>{0===t&&(t=1,o.addEventListener("focusin",t=>{const n=p(o);if(n&&n.backdropDismiss&&!k(n,t.target)){const o=n.querySelector("input,button");o&&o.focus()}}),o.addEventListener("ionBackButton",t=>{const n=p(o);n&&n.backdropDismiss&&t.detail.register(100,()=>n.dismiss(void 0,j))}),o.addEventListener("keyup",t=>{if("Escape"===t.key){const t=p(o);t&&t.backdropDismiss&&t.dismiss(void 0,j)}}))},d=(o,t,n,e,a)=>{const s=p(o,e,a);return s?s.dismiss(t,n):Promise.reject("overlay does not exist")},p=(o,t,n)=>{const e=((o,t)=>(void 0===t&&(t="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(o.querySelectorAll(t)).filter(o=>o.overlayIndex>0)))(o,t);return void 0===n?e[e.length-1]:e.find(o=>o.id===n)},l=async(t,n,e,a,s)=>{if(t.presented)return;t.presented=!0,t.willPresent.emit();const i=t.enterAnimation?t.enterAnimation:o.get(n,"ios"===t.mode?e:a);await m(t,i,t.el,s)&&t.didPresent.emit()},f=async(t,n,e,a,s,i,r)=>{if(!t.presented)return!1;t.presented=!1;try{t.willDismiss.emit({data:n,role:e});const c=t.leaveAnimation?t.leaveAnimation:o.get(a,"ios"===t.mode?s:i);await m(t,c,t.el,r),t.didDismiss.emit({data:n,role:e})}catch(o){console.error(o)}return t.el.remove(),!0},y=o=>o.querySelector("ion-app")||o.body,m=async(t,n,e,a)=>{if(t.animation)return t.animation.destroy(),t.animation=void 0,!1;e.classList.remove("overlay-hidden");const s=e.shadowRoot||t.el;let i,r=!0;try{const o=await __sc_import_app("./p-559f1738.js");i=await o.create(n,s,a)}catch(o){(i=n(s,a)).fill("both"),r=!1}t.animation=i,t.animated&&o.getBoolean("animated",!0)||i.duration(0),t.keyboardClose&&i.beforeAddWrite(()=>{const o=e.ownerDocument.activeElement;o&&o.matches("input, ion-input, ion-textarea")&&o.blur()});const c=await i.playAsync(),u="boolean"==typeof c?c:i.hasCompleted;return r&&i.destroy(),t.animation=void 0,u},v=(o,t)=>{let n;const e=new Promise(o=>n=o);return h(o,t,o=>{n(o.detail)}),e},h=(o,t,n)=>{const e=a=>{o.removeEventListener(t,e),n(a)};o.addEventListener(t,e)},b=o=>"cancel"===o||o===j,k=(o,t)=>{for(;t;){if(t===o)return!0;t=t.parentElement}return!1},w=o=>o(),_=(t,n)=>{if("function"==typeof t)return o.get("_zoneGate",w)(()=>{try{return t(n)}catch(o){console.error(o)}})},j="backdrop";export{j as B,l as a,d as b,c,f as d,v as e,s as f,p as g,i as h,b as i,a as j,e as k,r as p,_ as s};