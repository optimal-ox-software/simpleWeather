import{r as i,f as t,c as s,h as e,H as h,e as o}from"./p-390405e1.js";import{f as a}from"./p-df49a1a3.js";import{c as r,h as n}from"./p-f1a4df63.js";import{f as d,w as c}from"./p-14f0bf7a.js";const l=class{constructor(s){i(this,s),this.inputId=`ion-rb-${u++}`,this.name=this.inputId,this.disabled=!1,this.checked=!1,this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.onClick=()=>{this.checked?this.ionDeselect.emit():this.checked=!0},this.ionStyle=t(this,"ionStyle",7),this.ionSelect=t(this,"ionSelect",7),this.ionDeselect=t(this,"ionDeselect",7),this.ionFocus=t(this,"ionFocus",7),this.ionBlur=t(this,"ionBlur",7)}colorChanged(){this.emitStyle()}checkedChanged(i){i&&this.ionSelect.emit({checked:!0,value:this.value}),this.emitStyle()}disabledChanged(){this.emitStyle()}componentWillLoad(){void 0===this.value&&(this.value=this.inputId),this.emitStyle()}emitStyle(){this.ionStyle.emit({"radio-checked":this.checked,"interactive-disabled":this.disabled})}render(){const{inputId:i,disabled:t,checked:o,color:d,el:c}=this,l=s(this),u=i+"-lbl",b=a(c);return b&&(b.id=u),e(h,{onClick:this.onClick,role:"radio","aria-disabled":t?"true":null,"aria-checked":`${o}`,"aria-labelledby":u,class:Object.assign({},r(d),{[l]:!0,"in-item":n("ion-item",c),interactive:!0,"radio-checked":o,"radio-disabled":t})},e("div",{class:"radio-icon"},e("div",{class:"radio-inner"})),e("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:t}))}get el(){return o(this)}static get watchers(){return{color:["colorChanged"],checked:["checkedChanged"],disabled:["disabledChanged"]}}static get style(){return":host{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:layout size style}.radio-icon,button{width:100%;height:100%}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color-checked:var(--ion-color-primary,#3880ff);width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{margin-left:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-radio.item-ios ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:.3}:host(.ion-focused) .radio-icon:after{border-radius:50%;left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}:host-context([dir=rtl]).ion-focused .radio-icon:after,:host-context([dir=rtl]):host(.ion-focused) .radio-icon:after{left:unset;right:unset;right:-9px}:host(.in-item){margin-left:8px;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}"}};let u=0;const b=class{constructor(s){i(this,s),this.inputId=`ion-rg-${v++}`,this.labelId=`${this.inputId}-lbl`,this.allowEmptySelection=!1,this.name=this.inputId,this.onSelect=i=>{const t=i.target;t&&(this.value=t.value)},this.onDeselect=i=>{const t=i.target;t&&(t.checked=!1,this.value=void 0)},this.ionChange=t(this,"ionChange",7)}valueChanged(i){this.updateRadios(),this.ionChange.emit({value:i})}async connectedCallback(){const i=this.el,t=i.querySelector("ion-list-header")||i.querySelector("ion-item-divider");if(t){const i=t.querySelector("ion-label");i&&(this.labelId=i.id=this.name+"-lbl")}if(void 0===this.value){const t=d(i,"ion-radio");void 0!==t&&(await t.componentOnReady(),void 0===this.value&&(this.value=t.value))}this.mutationO=c(i,"ion-radio",i=>{void 0!==i?i.componentOnReady().then(()=>{this.value=i.value}):this.updateRadios()}),this.updateRadios()}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}async updateRadios(){const{value:i}=this,t=await this.getRadios();let s=!1;for(const e of t)s||e.value!==i?e.checked=!1:(s=!0,e.checked=!0);s||(this.value=void 0)}getRadios(){return Promise.all(Array.from(this.el.querySelectorAll("ion-radio")).map(i=>i.componentOnReady()))}render(){return e(h,{role:"radiogroup","aria-labelledby":this.labelId,onIonSelect:this.onSelect,onIonDeselect:this.allowEmptySelection?this.onDeselect:void 0,class:s(this)})}get el(){return o(this)}static get watchers(){return{value:["valueChanged"]}}};let v=0;export{l as ion_radio,b as ion_radio_group};