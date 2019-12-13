var __awaiter=this&&this.__awaiter||function(e,t,i,n){function o(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{s(n.next(e))}catch(e){r(e)}}function u(e){try{s(n["throw"](e))}catch(e){r(e)}}function s(e){e.done?i(e.value):o(e.value).then(a,u)}s((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,o,r,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(e){return function(t){return s([e,t])}}function s(a){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,o&&(r=a[0]&2?o["return"]:a[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;if(o=0,r)a=[a[0]&2,r.value];switch(a[0]){case 0:case 1:r=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;o=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(a[0]===6&&i.label<r[1]){i.label=r[1];r=a;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(a);break}if(r[2])i.ops.pop();i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e];o=0}finally{n=r=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-d8c81702.system.js","./p-b61ab46c.system.js","./p-2294249a.system.js","./p-9bedbd33.system.js"],(function(e){"use strict";var t,i,n,o,r,a,u,s,l,c,h;return{setters:[function(e){t=e.r;i=e.f;n=e.c;o=e.h;r=e.H;a=e.e},function(e){u=e.f},function(e){s=e.c;l=e.h},function(e){c=e.f;h=e.w}],execute:function(){var d=e("ion_radio",function(){function e(e){var n=this;t(this,e);this.inputId="ion-rb-"+f++;this.name=this.inputId;this.disabled=false;this.checked=false;this.onFocus=function(){n.ionFocus.emit()};this.onBlur=function(){n.ionBlur.emit()};this.onClick=function(){if(n.checked){n.ionDeselect.emit()}else{n.checked=true}};this.ionStyle=i(this,"ionStyle",7);this.ionSelect=i(this,"ionSelect",7);this.ionDeselect=i(this,"ionDeselect",7);this.ionFocus=i(this,"ionFocus",7);this.ionBlur=i(this,"ionBlur",7)}e.prototype.colorChanged=function(){this.emitStyle()};e.prototype.checkedChanged=function(e){if(e){this.ionSelect.emit({checked:true,value:this.value})}this.emitStyle()};e.prototype.disabledChanged=function(){this.emitStyle()};e.prototype.componentWillLoad=function(){if(this.value===undefined){this.value=this.inputId}this.emitStyle()};e.prototype.emitStyle=function(){this.ionStyle.emit({"radio-checked":this.checked,"interactive-disabled":this.disabled})};e.prototype.render=function(){var e;var t=this,i=t.inputId,a=t.disabled,c=t.checked,h=t.color,d=t.el;var f=n(this);var p=i+"-lbl";var b=u(d);if(b){b.id=p}return o(r,{onClick:this.onClick,role:"radio","aria-disabled":a?"true":null,"aria-checked":""+c,"aria-labelledby":p,class:Object.assign({},s(h),(e={},e[f]=true,e["in-item"]=l("ion-item",d),e["interactive"]=true,e["radio-checked"]=c,e["radio-disabled"]=a,e))},o("div",{class:"radio-icon"},o("div",{class:"radio-inner"})),o("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:a}))};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{color:["colorChanged"],checked:["checkedChanged"],disabled:["disabledChanged"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:layout size style}.radio-icon,button{width:100%;height:100%}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color-checked:var(--ion-color-primary,#3880ff);width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{margin-left:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-radio.item-ios ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:.3}:host(.ion-focused) .radio-icon:after{border-radius:50%;left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}:host-context([dir=rtl]).ion-focused .radio-icon:after,:host-context([dir=rtl]):host(.ion-focused) .radio-icon:after{left:unset;right:unset;right:-9px}:host(.in-item){margin-left:8px;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}"},enumerable:true,configurable:true});return e}());var f=0;var p=e("ion_radio_group",function(){function e(e){var n=this;t(this,e);this.inputId="ion-rg-"+b++;this.labelId=this.inputId+"-lbl";this.allowEmptySelection=false;this.name=this.inputId;this.onSelect=function(e){var t=e.target;if(t){n.value=t.value}};this.onDeselect=function(e){var t=e.target;if(t){t.checked=false;n.value=undefined}};this.ionChange=i(this,"ionChange",7)}e.prototype.valueChanged=function(e){this.updateRadios();this.ionChange.emit({value:e})};e.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,i,n;var o=this;return __generator(this,(function(r){switch(r.label){case 0:e=this.el;t=e.querySelector("ion-list-header")||e.querySelector("ion-item-divider");if(t){i=t.querySelector("ion-label");if(i){this.labelId=i.id=this.name+"-lbl"}}if(!(this.value===undefined))return[3,2];n=c(e,"ion-radio");if(!(n!==undefined))return[3,2];return[4,n.componentOnReady()];case 1:r.sent();if(this.value===undefined){this.value=n.value}r.label=2;case 2:this.mutationO=h(e,"ion-radio",(function(e){if(e!==undefined){e.componentOnReady().then((function(){o.value=e.value}))}else{o.updateRadios()}}));this.updateRadios();return[2]}}))}))};e.prototype.disconnectedCallback=function(){if(this.mutationO){this.mutationO.disconnect();this.mutationO=undefined}};e.prototype.updateRadios=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,i,n,o,r;return __generator(this,(function(a){switch(a.label){case 0:e=this.value;return[4,this.getRadios()];case 1:t=a.sent();i=false;for(n=0,o=t;n<o.length;n++){r=o[n];if(!i&&r.value===e){i=true;r.checked=true}else{r.checked=false}}if(!i){this.value=undefined}return[2]}}))}))};e.prototype.getRadios=function(){return Promise.all(Array.from(this.el.querySelectorAll("ion-radio")).map((function(e){return e.componentOnReady()})))};e.prototype.render=function(){return o(r,{role:"radiogroup","aria-labelledby":this.labelId,onIonSelect:this.onSelect,onIonDeselect:this.allowEmptySelection?this.onDeselect:undefined,class:n(this)})};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:true,configurable:true});return e}());var b=0}}}));