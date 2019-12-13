import{r as t,h as s,c as i,d as e,H as o,e as n,i as r,f as a}from"./p-390405e1.js";import{r as h,a as c,d as u}from"./p-df49a1a3.js";import{g as l,P as d}from"./p-716d1419.js";import{l as f,t as p,s as w,L as m,a as v,b as g}from"./p-98052a0f.js";import{a as b}from"./p-8a939906.js";const y=class{constructor(s){t(this,s)}render(){return s("ion-app",null,s("ion-router",{useHash:!1},s("ion-route",{url:"/",component:"app-home"}),s("ion-route",{url:"/settings",component:"app-settings"})),s("ion-nav",null))}static get style(){return""}},C=class{constructor(s){t(this,s)}componentDidLoad(){h(()=>{const t=r(window,"hybrid");e.getBoolean("_testing")||__sc_import_app("./p-b21524c9.js").then(t=>t.startTapClick(e)),e.getBoolean("statusTap",t)&&__sc_import_app("./p-eb904e9f.js").then(t=>t.startStatusTap()),e.getBoolean("inputShims",_())&&__sc_import_app("./p-3034023f.js").then(t=>t.startInputShims(e)),e.getBoolean("hardwareBackButton",t)&&__sc_import_app("./p-105bab28.js").then(t=>t.startHardwareBackButton()),__sc_import_app("./p-b9bccfd6.js").then(t=>t.startFocusVisible())})}render(){const t=i(this);return s(o,{class:{[t]:!0,"ion-page":!0,"force-statusbar-padding":e.getBoolean("_forceStatusbarPadding")}})}get el(){return n(this)}static get style(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"}},_=()=>r(window,"ios")&&r(window,"mobile"),E=1,P=2,R=3;class S{constructor(t,s){this.component=t,this.params=s,this.state=E}async init(t){if(this.state=P,!this.element){const s=this.component;this.element=await b(this.delegate,t,s,["ion-page","ion-page-invisible"],this.params)}}_destroy(){c(this.state!==R,"view state must be ATTACHED");const t=this.element;t&&(this.delegate?this.delegate.removeViewFromDom(t.parentElement,t):t.remove()),this.nav=void 0,this.state=R}}const T=(t,s,i)=>{if(!t)return!1;if(t.component!==s)return!1;const e=t.params;if(e===i)return!0;if(!e&&!i)return!0;if(!e||!i)return!1;const o=Object.keys(e),n=Object.keys(i);if(o.length!==n.length)return!1;for(const t of o)if(e[t]!==i[t])return!1;return!0},k=(t,s)=>t?t instanceof S?t:new S(t,s):null,L=class{constructor(s){t(this,s),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0,this.ionNavWillLoad=a(this,"ionNavWillLoad",7),this.ionNavWillChange=a(this,"ionNavWillChange",3),this.ionNavDidChange=a(this,"ionNavDidChange",3)}swipeGestureChanged(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)}rootChanged(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){const t=i(this);this.swipeGesture=e.getBoolean("swipeBackEnabled","ios"===t)}this.ionNavWillLoad.emit()}async componentDidLoad(){this.rootChanged(),this.gesture=(await __sc_import_app("./p-5c285b20.js")).createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged()}componentDidUnload(){for(const t of this.views)f(t.element,m),t._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}push(t,s,i,e){return this.queueTrns({insertStart:-1,insertViews:[{page:t,params:s}],opts:i},e)}insert(t,s,i,e,o){return this.queueTrns({insertStart:t,insertViews:[{page:s,params:i}],opts:e},o)}insertPages(t,s,i,e){return this.queueTrns({insertStart:t,insertViews:s,opts:i},e)}pop(t,s){return this.queueTrns({removeStart:-1,removeCount:1,opts:t},s)}popTo(t,s,i){const e={removeStart:-1,removeCount:-1,opts:s};return"object"==typeof t&&t.component?(e.removeView=t,e.removeStart=1):"number"==typeof t&&(e.removeStart=t+1),this.queueTrns(e,i)}popToRoot(t,s){return this.queueTrns({removeStart:1,removeCount:-1,opts:t},s)}removeIndex(t,s=1,i,e){return this.queueTrns({removeStart:t,removeCount:s,opts:i},e)}setRoot(t,s,i,e){return this.setPages([{page:t,params:s}],i,e)}setPages(t,s,i){return null==s&&(s={}),!0!==s.animated&&(s.animated=!1),this.queueTrns({insertStart:0,insertViews:t,removeStart:0,removeCount:-1,opts:s},i)}setRouteId(t,s,i){const e=this.getActiveSync();if(T(e,t,s))return Promise.resolve({changed:!1,element:e.element});let o;const n=new Promise(t=>o=t);let r;const a={updateURL:!1,viewIsReady:t=>{let s;const i=new Promise(t=>s=t);return o({changed:!0,element:t,markVisible:async()=>{s(),await r}}),i}};if("root"===i)r=this.setRoot(t,s,a);else{const e=this.views.find(i=>T(i,t,s));e?r=this.popTo(e,Object.assign({},a,{direction:"back"})):"forward"===i?r=this.push(t,s,a):"back"===i&&(r=this.setRoot(t,s,Object.assign({},a,{direction:"back",animated:!0})))}return n}async getRouteId(){const t=this.getActiveSync();return t?{id:t.element.tagName,params:t.params,element:t.element}:void 0}getActive(){return Promise.resolve(this.getActiveSync())}getByIndex(t){return Promise.resolve(this.views[t])}canGoBack(t){return Promise.resolve(this.canGoBackSync(t))}getPrevious(t){return Promise.resolve(this.getPreviousSync(t))}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(t=this.getActiveSync()){return!(!t||!this.getPreviousSync(t))}getPreviousSync(t=this.getActiveSync()){if(!t)return;const s=this.views,i=s.indexOf(t);return i>0?s[i-1]:void 0}queueTrns(t,s){if(this.isTransitioning&&null!=t.opts&&t.opts.skipIfBusy)return Promise.resolve(!1);const i=new Promise((s,i)=>{t.resolve=s,t.reject=i});return t.done=s,t.insertViews&&0===t.insertViews.length&&(t.insertViews=void 0),this.transInstr.push(t),this.nextTrns(),i}success(t,s){if(this.destroyed)this.fireError("nav controller was destroyed",s);else if(s.done&&s.done(t.hasCompleted,t.requiresTransition,t.enteringView,t.leavingView,t.direction),s.resolve(t.hasCompleted),!1!==s.opts.updateURL&&this.useRouter){const s=document.querySelector("ion-router");s&&s.navChanged("back"===t.direction?"back":"forward")}}failed(t,s){this.destroyed?this.fireError("nav controller was destroyed",s):(this.transInstr.length=0,this.fireError(t,s))}fireError(t,s){s.done&&s.done(!1,!1,t),s.reject&&!this.destroyed?s.reject(t):s.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const t=this.transInstr.shift();return!!t&&(this.runTransition(t),!0)}async runTransition(t){try{this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(t);const s=this.getActiveSync(),i=this.getEnteringView(t,s);if(!s&&!i)throw new Error("no views in the stack to be removed");i&&i.state===E&&await i.init(this.el),this.postViewInit(i,s,t);const e=(t.enteringRequiresTransition||t.leavingRequiresTransition)&&i!==s?await this.transition(i,s,t):{hasCompleted:!0,requiresTransition:!1};this.success(e,t),this.ionNavDidChange.emit()}catch(s){this.failed(s,t)}this.isTransitioning=!1,this.nextTrns()}prepareTI(t){const s=this.views.length;if(t.opts=t.opts||{},void 0===t.opts.delegate&&(t.opts.delegate=this.delegate),void 0!==t.removeView){c(void 0!==t.removeStart,"removeView needs removeStart"),c(void 0!==t.removeCount,"removeView needs removeCount");const s=this.views.indexOf(t.removeView);if(s<0)throw new Error("removeView was not found");t.removeStart+=s}void 0!==t.removeStart&&(t.removeStart<0&&(t.removeStart=s-1),t.removeCount<0&&(t.removeCount=s-t.removeStart),t.leavingRequiresTransition=t.removeCount>0&&t.removeStart+t.removeCount===s),t.insertViews&&((t.insertStart<0||t.insertStart>s)&&(t.insertStart=s),t.enteringRequiresTransition=t.insertStart===s);const i=t.insertViews;if(!i)return;c(i.length>0,"length can not be zero");const e=(t=>t.map(t=>t instanceof S?t:"page"in t?k(t.page,t.params):k(t,void 0)).filter(t=>null!==t))(i);if(0===e.length)throw new Error("invalid views to insert");for(const s of e){s.delegate=t.opts.delegate;const i=s.nav;if(i&&i!==this)throw new Error("inserted view was already inserted");if(s.state===R)throw new Error("inserted view was already destroyed")}t.insertViews=e}getEnteringView(t,s){const i=t.insertViews;if(void 0!==i)return i[i.length-1];const e=t.removeStart;if(void 0!==e){const i=this.views,o=e+t.removeCount;for(let t=i.length-1;t>=0;t--){const n=i[t];if((t<e||t>=o)&&n!==s)return n}}}postViewInit(t,s,i){c(s||t,"Both leavingView and enteringView are null"),c(i.resolve,"resolve must be valid"),c(i.reject,"reject must be valid");const e=i.opts,o=i.insertViews,n=i.removeStart,r=i.removeCount;let a;if(void 0!==n&&void 0!==r){c(n>=0,"removeStart can not be negative"),c(r>=0,"removeCount can not be negative"),a=[];for(let i=0;i<r;i++){const e=this.views[i+n];e&&e!==t&&e!==s&&a.push(e)}e.direction=e.direction||"back"}const h=this.views.length+(void 0!==o?o.length:0)-(void 0!==r?r:0);if(c(h>=0,"final balance can not be negative"),0===h)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(o){let t=i.insertStart;for(const s of o)this.insertViewAt(s,t),t++;i.enteringRequiresTransition&&(e.direction=e.direction||"forward")}if(a&&a.length>0){for(const t of a)f(t.element,v),f(t.element,g),f(t.element,m);for(const t of a)this.destroyView(t)}}async transition(t,s,o){const n=o.opts,r=n.progressAnimation?t=>this.sbAni=t:void 0,a=i(this),h=t.element,c=s&&s.element,u=Object.assign({mode:a,showGoBack:this.canGoBackSync(t),baseEl:this.el,animationBuilder:this.animation||n.animationBuilder||e.get("navAnimation"),progressCallback:r,animated:this.animated&&e.getBoolean("animated",!0),enteringEl:h,leavingEl:c},n),{hasCompleted:l}=await p(u);return this.transitionFinish(l,t,s,n)}transitionFinish(t,s,i,e){const o=t?s:i;return o&&this.cleanup(o),{hasCompleted:t,requiresTransition:!0,enteringView:s,leavingView:i,direction:e.direction}}insertViewAt(t,s){const i=this.views,e=i.indexOf(t);e>-1?(c(t.nav===this,"view is not part of the nav"),i.splice(s,0,i.splice(e,1)[0])):(c(!t.nav,"nav is used"),t.nav=this,i.splice(s,0,t))}removeView(t){c(t.state===P||t.state===R,"view state should be loaded or destroyed");const s=this.views,i=s.indexOf(t);c(i>-1,"view must be part of the stack"),i>=0&&s.splice(i,1)}destroyView(t){t._destroy(),this.removeView(t)}cleanup(t){if(this.destroyed)return;const s=this.views,i=s.indexOf(t);for(let t=s.length-1;t>=0;t--){const e=s[t],o=e.element;t>i?(f(o,m),this.destroyView(e)):t<i&&w(o,!0)}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}onStart(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}onMove(t){this.sbAni&&this.sbAni.progressStep(t)}onEnd(t,s,i){if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish(()=>{this.animationEnabled=!0},{oneTimeCallback:!0});let e=t?-.001:.001;t?e+=l(new d(0,0),new d(.32,.72),new d(0,1),new d(1,1),s):(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),e+=l(new d(0,0),new d(1,0),new d(.68,.28),new d(1,1),s)),this.sbAni.progressEnd(t,e,i)}}render(){return s("slot",null)}get el(){return n(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}static get style(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}},j=class{constructor(s){t(this,s),this.url="",this.ionRouteDataChanged=a(this,"ionRouteDataChanged",7)}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,s){if(t===s)return;const i=t?Object.keys(t):[],e=s?Object.keys(s):[];if(i.length===e.length){for(const e of i)if(t[e]!==s[e])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},V=t=>"/"+t.filter(t=>t.length>0).join("/"),D=t=>{if(null==t)return[""];const s=t.split("/").map(t=>t.trim()).filter(t=>t.length>0);return 0===s.length?[""]:s},O=async(t,s,i,e,o=!1)=>{try{const n=B(t);if(e>=s.length||!n)return o;await n.componentOnReady();const r=s[e],a=await n.setRouteId(r.id,r.params,i);return a.changed&&(i="root",o=!0),o=await O(a.element,s,i,e+1,o),a.markVisible&&await a.markVisible(),o}catch(t){return console.error(t),!1}},A=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",B=t=>{if(!t)return;if(t.matches(A))return t;return t.querySelector(A)||void 0},I=(t,s)=>s.find(s=>((t,s)=>{const{from:i,to:e}=s;if(void 0===e)return!1;if(i.length>t.length)return!1;for(let s=0;s<i.length;s++){const e=i[s];if("*"===e)return!0;if(e!==t[s])return!1}return i.length===t.length})(t,s)),U=(t,s)=>{const i=Math.min(t.length,s.length);let e=0;for(;e<i&&t[e].toLowerCase()===s[e].id;e++);return e},N=(t,s)=>{const i=new H(t);let e,o=!1;for(let t=0;t<s.length;t++){const n=s[t].path;if(""===n[0])o=!0;else{for(const s of n){const o=i.next();if(":"===s[0]){if(""===o)return null;((e=e||[])[t]||(e[t]={}))[s.slice(1)]=o}else if(o!==s)return null}o=!1}}return o&&o!==(""===i.next())?null:e?s.map((t,s)=>({id:t.id,path:t.path,params:W(t.params,e[s])})):s},W=(t,s)=>!t&&s?s:t&&!s?t:t&&s?Object.assign({},t,s):void 0,G=t=>{let s=1,i=1;for(const e of t)for(const t of e.path)":"===t[0]?s+=Math.pow(1,i):""!==t&&(s+=Math.pow(2,i)),i++;return s};class H{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}const x=t=>Array.from(t.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const s=Y(t,"to");return{from:D(Y(t,"from")),to:null==s?void 0:D(s)}}),q=t=>X(M(t)),M=(t,s=t)=>Array.from(s.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(s=>{const i=Y(s,"component");if(null==i)throw new Error("component missing in ion-route");return{path:D(Y(s,"url")),id:i.toLowerCase(),params:s.componentProps,children:M(t,s)}}),Y=(t,s)=>s in t?t[s]:t.hasAttribute(s)?t.getAttribute(s):null,X=t=>{const s=[];for(const i of t)z([],s,i);return s},z=(t,s,i)=>{const e=t.slice();if(e.push({id:i.id,path:i.path,params:i.params}),0!==i.children.length)for(const t of i.children)z(e,s,t);else s.push(e)},F=class{constructor(s){t(this,s),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0,this.ionRouteWillChange=a(this,"ionRouteWillChange",7),this.ionRouteDidChange=a(this,"ionRouteDidChange",7)}async componentWillLoad(){await(()=>B(document.body)?Promise.resolve():new Promise(t=>{window.addEventListener("ionNavWillLoad",t,{once:!0})}))(),await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",u(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",u(this.onRoutesChanged.bind(this),100))}onPopState(){const t=this.historyDirection(),s=this.getPath();return this.writeNavStateRoot(s,t)}onBackButton(t){t.detail.register(0,()=>this.back())}push(t,s="forward"){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname);const i=D(t);return this.setPath(i,s),this.writeNavStateRoot(i,s)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){this.getPath(),(t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const s of t){const t=[];s.forEach(s=>t.push(...s.path));const i=s.map(t=>t.id);V(t),i.join(", ")}console.groupEnd()})(q(this.el)),(t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const s of t)s.to&&(V(s.from),V(s.to));console.groupEnd()})(x(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:s,outlet:i}=await(async()=>{const t=[];let s,i=window.document.body;for(;s=B(i);){const e=await s.getRouteId();if(!e)break;i=e.element,e.element=void 0,t.push(e)}return{ids:t,outlet:s}})(),e=((t,s)=>{let i=null,e=0;const o=t.map(t=>t.id);for(const t of s){const s=U(o,t);s>e&&(i=t,e=s)}return i?i.map((s,i)=>({id:s.id,path:s.path,params:W(s.params,t[i]&&t[i].params)})):null})(s,q(this.el));if(!e)return console.warn("[ion-router] no matching URL for ",s.map(t=>t.id)),!1;const o=(t=>{const s=[];for(const i of t)for(const t of i.path)if(":"===t[0]){const e=i.params&&i.params[t.slice(1)];if(!e)return null;s.push(e)}else""!==t&&s.push(t);return s})(e);return o?(this.setPath(o,t),await this.safeWriteNavState(i,e,"root",o,null,s.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&I(t,x(this.el))&&this.writeNavStateRoot(t,"root")}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),"root")}historyDirection(){const t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));const s=t.history.state,i=this.lastState;return this.lastState=s,s>i?"forward":s<i?"back":"root"}async writeNavStateRoot(t,s){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const i=x(this.el),e=I(t,i);let o=null;e&&(this.setPath(e.to,s),o=e.from,t=e.to);const n=((t,s)=>{let i=null,e=0;for(const o of s){const s=N(t,o);if(null!==s){const t=G(s);t>e&&(e=t,i=s)}}return i})(t,q(this.el));return n?this.safeWriteNavState(document.body,n,s,t,o):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,s,i,e,o,n=0){const r=await this.lock();let a=!1;try{a=await this.writeNavState(t,s,i,e,o,n)}catch(t){console.error(t)}return r(),a}async lock(){const t=this.waitPromise;let s;return this.waitPromise=new Promise(t=>s=t),void 0!==t&&await t,s}async writeNavState(t,s,i,e,o,n=0){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const r=this.routeChangeEvent(e,o);r&&this.ionRouteWillChange.emit(r);const a=await O(t,s,i,n);return this.busy=!1,r&&this.ionRouteDidChange.emit(r),a}setPath(t,s){this.state++,((t,s,i,e,o,n)=>{let r=V([...D(this.root),...e]);i&&(r="#"+r),"forward"===o?t.pushState(n,"",r):t.replaceState(n,"",r)})(window.history,0,this.useHash,t,s,this.state)}getPath(){return((t,s)=>{let i=t.pathname;if(this.useHash){const s=t.hash;i="#"===s[0]?s.slice(1):""}return((t,s)=>{if(t.length>s.length)return null;if(t.length<=1&&""===t[0])return s;for(let i=0;i<t.length;i++)if(t[i].length>0&&t[i]!==s[i])return null;return s.length===t.length?[""]:s.slice(t.length)})(D(s),D(i))})(window.location,this.root)}routeChangeEvent(t,s){const i=this.previousPath,e=V(t);return this.previousPath=e,e===i?null:{from:i,redirectedFrom:s?V(s):null,to:e}}get el(){return n(this)}};export{y as app_root,C as ion_app,L as ion_nav,j as ion_route,F as ion_router};