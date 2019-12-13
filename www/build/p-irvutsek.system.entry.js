var __awaiter=this&&this.__awaiter||function(t,e,r,i){function n(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function a(t){try{l(i.next(t))}catch(t){o(t)}}function s(t){try{l(i["throw"](t))}catch(t){o(t)}}function l(t){t.done?r(t.value):n(t.value).then(a,s)}l((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,n,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return l([t,e])}}function l(a){if(i)throw new TypeError("Generator is already executing.");while(r)try{if(i=1,n&&(o=a[0]&2?n["return"]:a[0]?n["throw"]||((o=n["return"])&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;if(n=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;n=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(a[0]===6&&r.label<o[1]){r.label=o[1];o=a;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(a);break}if(o[2])r.ops.pop();r.trys.pop();continue}a=e.call(t,r)}catch(t){a=[6,t];n=0}finally{i=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-d8c81702.system.js"],(function(t){"use strict";var e,r,i,n,o,a;return{setters:[function(t){e=t.r;r=t.j;i=t.w;n=t.h;o=t.H;a=t.e}],execute:function(){var s="item";var l="header";var h="footer";var u=0;var c=1;var f=2;var d=2;var p=function(t,e,r,i){for(var n=0,o=t;n<o.length;n++){var a=o[n];a.change=u;a.d=true}var s=[];var l=i.offset+i.length;var h=function(i){var n=r[i];var o=t.find((function(t){return t.d&&t.cell===n}));if(o){var a=e[i];if(a!==o.top){o.top=a;o.change=c}o.d=false}else{s.push(n)}};for(var d=i.offset;d<l;d++){h(d)}var p=t.filter((function(t){return t.d}));var v=function(r){var i=p.find((function(t){return t.d&&t.cell.type===r.type}));var n=r.i;if(i){i.d=false;i.change=f;i.cell=r;i.top=e[n]}else{t.push({d:false,cell:r,visible:true,change:f,top:e[n]})}};for(var g=0,m=s;g<m.length;g++){var y=m[g];v(y)}t.filter((function(t){return t.d&&t.top!==-9999})).forEach((function(t){t.change=c;t.top=-9999}))};var v=function(t,e,r,i){var n=Array.from(t.children).filter((function(t){return t.tagName!=="TEMPLATE"}));var o=n.length;var a;for(var s=0;s<r.length;s++){var l=r[s];var h=l.cell;if(l.change===f){if(s<o){a=n[s];e(a,h,s)}else{var c=g(t,h.type);a=e(c,h,s)||c;a.classList.add("virtual-item");t.appendChild(a)}a["$ionCell"]=h}else{a=n[s]}if(l.change!==u){a.style.transform="translate3d(0,"+l.top+"px,0)"}var d=h.visible;if(l.visible!==d){if(d){a.classList.remove("virtual-loading")}else{a.classList.add("virtual-loading")}l.visible=d}if(h.reads>0){i(h,a);h.reads--}}};var g=function(t,e){var r=m(t,e);if(r&&t.ownerDocument){return t.ownerDocument.importNode(r.content,true).children[0]}return null};var m=function(t,e){switch(e){case s:return t.querySelector("template:not([name])");case l:return t.querySelector("template[name=header]");case h:return t.querySelector("template[name=footer]")}};var y=function(t,e,r){return{top:Math.max(t-r,0),bottom:t+e+r}};var b=function(t,e,r){var i=e.top;var n=e.bottom;var o=0;for(;o<t.length;o++){if(t[o]>i){break}}var a=Math.max(o-r-1,0);for(;o<t.length;o++){if(t[o]>=n){break}}var s=Math.min(o+r,t.length);var l=s-a;return{offset:a,length:l}};var x=function(t,e,r){var i=r.offset+r.length;return t<=i||e.offset!==r.offset||e.length!==r.length};var H=function(t,e){var r=t.length>0?t[t.length-1].index:0;if(e===0){return 0}else if(e===r+1){return t.length}else{return t.findIndex((function(t){return t.index===e}))}};var w=function(t,e,r){if(r===0&&e.length>=t.length){return e}for(var i=0;i<e.length;i++){t[i+r]=e[i]}return t};var E=function(t,e,r,i,n,o,a,u,c,f,p,v){var g=[];var m=v+p;for(var y=p;y<m;y++){var b=t[y];if(n){var x=n(b,y,t);if(x!=null){g.push({i:f++,type:l,value:x,index:y,height:r?r(x,y):a,reads:r?0:d,visible:!!r})}}g.push({i:f++,type:s,value:b,index:y,height:e?e(b,y):c,reads:e?0:d,visible:!!e});if(o){var x=o(b,y,t);if(x!=null){g.push({i:f++,type:h,value:x,index:y,height:i?i(x,y):u,reads:i?0:d,visible:!!i})}}}return g};var S=function(t,e,r){var i=t[r];for(var n=r;n<t.length;n++){t[n]=i;i+=e[n].height}return i};var I=function(t,e){if(!t){return new Uint32Array(e)}if(t.length===e){return t}else if(e>t.length){var r=new Uint32Array(e);r.set(t);return r}else{return t.subarray(0,e)}};var _=function(t,e,r){var i=e.find((function(e){return e.type===s&&e.index===t}));if(i){return r[i.i]}return-1};var C=t("ion_virtual_scroll",function(){function t(t){var r=this;e(this,t);this.range={offset:0,length:0};this.viewportHeight=0;this.cells=[];this.virtualDom=[];this.isEnabled=false;this.viewportOffset=0;this.currentScrollTop=0;this.indexDirty=0;this.lastItemLen=0;this.totalHeight=0;this.approxItemHeight=45;this.approxHeaderHeight=30;this.approxFooterHeight=30;this.onScroll=function(){r.updateVirtualScroll()}}t.prototype.itemsChanged=function(){this.calcCells();this.updateVirtualScroll()};t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(r){switch(r.label){case 0:t=this.el.closest("ion-content");if(!t){console.error("<ion-virtual-scroll> must be used inside an <ion-content>");return[2]}e=this;return[4,t.getScrollElement()];case 1:e.scrollEl=r.sent();this.contentEl=t;this.calcCells();this.updateState();return[2]}}))}))};t.prototype.componentDidUpdate=function(){this.updateState()};t.prototype.disconnectedCallback=function(){this.scrollEl=undefined};t.prototype.onResize=function(){this.calcCells();this.updateVirtualScroll()};t.prototype.positionForItem=function(t){return Promise.resolve(_(t,this.cells,this.getHeightIndex()))};t.prototype.checkRange=function(t,e){if(e===void 0){e=-1}return __awaiter(this,void 0,void 0,(function(){var r,i,n;return __generator(this,(function(o){if(!this.items){return[2]}r=e===-1?this.items.length-t:e;i=H(this.cells,t);n=E(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,i,t,r);this.cells=w(this.cells,n,i);this.lastItemLen=this.items.length;this.indexDirty=Math.max(t-1,0);this.scheduleUpdate();return[2]}))}))};t.prototype.checkEnd=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(this.items){this.checkRange(this.lastItemLen)}return[2]}))}))};t.prototype.updateVirtualScroll=function(){if(!this.isEnabled||!this.scrollEl){return}if(this.timerUpdate){clearTimeout(this.timerUpdate);this.timerUpdate=undefined}r(this.readVS.bind(this));i(this.writeVS.bind(this))};t.prototype.readVS=function(){var t=this,e=t.contentEl,r=t.scrollEl,i=t.el;var n=0;var o=i;while(o&&o!==e){n+=o.offsetTop;o=o.parentElement}this.viewportOffset=n;if(r){this.viewportHeight=r.offsetHeight;this.currentScrollTop=r.scrollTop}};t.prototype.writeVS=function(){var t=this.indexDirty;var e=this.currentScrollTop-this.viewportOffset;var r=y(e,this.viewportHeight,100);var i=this.getHeightIndex();var n=b(i,r,2);var o=x(t,this.range,n);if(!o){return}this.range=n;p(this.virtualDom,i,this.cells,n);if(this.nodeRender){v(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this))}else if(this.domRender){this.domRender(this.virtualDom)}else if(this.renderItem){this.el.forceUpdate()}};t.prototype.updateCellHeight=function(t,e){var r=this;var i=function(){if(e["$ionCell"]===t){var i=window.getComputedStyle(e);var n=e.offsetHeight+parseFloat(i.getPropertyValue("margin-bottom"));r.setCellHeight(t,n)}};if(e&&e.componentOnReady){e.componentOnReady().then(i)}else{i()}};t.prototype.setCellHeight=function(t,e){var r=t.i;if(t!==this.cells[r]){return}if(t.height!==e||t.visible!==true){t.visible=true;t.height=e;this.indexDirty=Math.min(this.indexDirty,r);this.scheduleUpdate()}};t.prototype.scheduleUpdate=function(){var t=this;clearTimeout(this.timerUpdate);this.timerUpdate=setTimeout((function(){return t.updateVirtualScroll()}),100)};t.prototype.updateState=function(){var t=!!(this.scrollEl&&this.cells);if(t!==this.isEnabled){this.enableScrollEvents(t);if(t){this.updateVirtualScroll()}}};t.prototype.calcCells=function(){if(!this.items){return}this.lastItemLen=this.items.length;this.cells=E(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen);this.indexDirty=0};t.prototype.getHeightIndex=function(){if(this.indexDirty!==Infinity){this.calcHeightIndex(this.indexDirty)}return this.heightIndex};t.prototype.calcHeightIndex=function(t){if(t===void 0){t=0}this.heightIndex=I(this.heightIndex,this.cells.length);this.totalHeight=S(this.heightIndex,this.cells,t);this.indexDirty=Infinity};t.prototype.enableScrollEvents=function(t){var e=this;if(this.rmEvent){this.rmEvent();this.rmEvent=undefined}var r=this.scrollEl;if(r){this.isEnabled=t;r.addEventListener("scroll",this.onScroll);this.rmEvent=function(){r.removeEventListener("scroll",e.onScroll)}}};t.prototype.renderVirtualNode=function(t){var e=t.cell,r=e.type,i=e.value,n=e.index;switch(r){case s:return this.renderItem(i,n);case l:return this.renderHeader(i,n);case h:return this.renderFooter(i,n)}};t.prototype.render=function(){var t=this;return n(o,{style:{height:this.totalHeight+"px"}},this.renderItem&&n(D,{dom:this.virtualDom},this.virtualDom.map((function(e){return t.renderVirtualNode(e)}))))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute!important;top:0!important;right:0!important;left:0!important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"},enumerable:true,configurable:true});return t}());var D=function(t,e,r){var i=t.dom;return r.map(e,(function(t,e){var r=i[e];var n=t.vattrs||{};var o=n.class||"";o+="virtual-item ";if(!r.visible){o+="virtual-loading"}return Object.assign({},t,{vattrs:Object.assign({},n,{class:o,style:Object.assign({},n.style,{transform:"translate3d(0,"+r.top+"px,0)"})})})}))}}}}));