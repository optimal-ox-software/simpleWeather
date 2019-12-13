import{r as t,h as n}from"./p-390405e1.js";import{S as r}from"./p-50c607b1.js";var e,i,o,u,s,c,a,h,f,d,l,w,v;!function(t){t.Prompt="PROMPT",t.Camera="CAMERA",t.Photos="PHOTOS"}(e||(e={})),function(t){t.Rear="REAR",t.Front="FRONT"}(i||(i={})),function(t){t.Uri="uri",t.Base64="base64",t.DataUrl="dataUrl"}(o||(o={})),function(t){t.Application="APPLICATION",t.Documents="DOCUMENTS",t.Data="DATA",t.Cache="CACHE",t.External="EXTERNAL",t.ExternalStorage="EXTERNAL_STORAGE"}(u||(u={})),function(t){t.UTF8="utf8",t.ASCII="ascii",t.UTF16="utf16"}(s||(s={})),function(t){t.Heavy="HEAVY",t.Medium="MEDIUM",t.Light="LIGHT"}(c||(c={})),function(t){t.SUCCESS="SUCCESS",t.WARNING="WARNING",t.ERROR="ERROR"}(a||(a={})),function(t){t.Dark="DARK",t.Light="LIGHT"}(h||(h={})),function(t){t.Body="body",t.Ionic="ionic",t.Native="native",t.None="none"}(f||(f={})),function(t){t.Default="DEFAULT",t.Destructive="DESTRUCTIVE",t.Cancel="CANCEL"}(d||(d={})),function(t){t.Camera="camera",t.Photos="photos",t.Geolocation="geolocation",t.Notifications="notifications",t.ClipboardRead="clipboard-read",t.ClipboardWrite="clipboard-write"}(l||(l={})),function(t){t.Smart="smart",t.Shared="shared",t.User="user"}(w||(w={})),function(t){t.Dark="DARK",t.Light="LIGHT"}(v||(v={}));var m,p=function(){function t(){var t=this;this.platform="web",this.isNative=!1,this.Plugins={},this.Plugins=new Proxy(this.Plugins,{get:function(n,r){if(void 0===n[r]){var e=t;return new Proxy({},{get:function(t,n){return void 0===t[n]?e.pluginMethodNoop.bind(e,t,n,r):t[n]}})}return n[r]}})}return t.prototype.pluginMethodNoop=function(t,n,r){return Promise.reject(r+" does not have web implementation.")},t.prototype.getPlatform=function(){return this.platform},t.prototype.isPluginAvailable=function(t){return this.Plugins.hasOwnProperty(t)},t.prototype.convertFileSrc=function(t){return t},t.prototype.handleError=function(t){console.error(t)},t}(),y=((m="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).Capacitor=m.Capacitor||new p).Plugins,g=new(function(){function t(){this.plugins={},this.loadedPlugins={}}return t.prototype.addPlugin=function(t){this.plugins[t.config.name]=t},t.prototype.getPlugin=function(t){return this.plugins[t]},t.prototype.loadPlugin=function(t){var n=this.getPlugin(t);n?n.load():console.error("Unable to load web plugin "+t+", no such plugin found.")},t.prototype.getPlugins=function(){var t=[];for(var n in this.plugins)t.push(this.plugins[n]);return t},t}()),b=function(){function t(t,n){this.config=t,this.loaded=!1,this.listeners={},this.windowListeners={},n?n.addPlugin(this):g.addPlugin(this)}return t.prototype.addWindowListener=function(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0},t.prototype.removeWindowListener=function(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)},t.prototype.addListener=function(t,n){var r=this;this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(n);var e=this.windowListeners[t];return e&&!e.registered&&this.addWindowListener(e),{remove:function(){r.removeListener(t,n)}}},t.prototype.removeListener=function(t,n){var r=this.listeners[t];if(r){var e=r.indexOf(n);this.listeners[t].splice(e,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}},t.prototype.notifyListeners=function(t,n){var r=this.listeners[t];r&&r.forEach((function(t){return t(n)}))},t.prototype.hasListeners=function(t){return!!this.listeners[t].length},t.prototype.registerWindowListener=function(t,n){var r=this;this.windowListeners[n]={registered:!1,windowEventName:t,pluginEventName:n,handler:function(t){r.notifyListeners(n,t)}}},t.prototype.requestPermissions=function(){return Capacitor.isNative?Capacitor.nativePromise(this.config.name,"requestPermissions",{}):Promise.resolve({results:[]})},t.prototype.load=function(){this.loaded=!0},t}(),P=function(t,n){t.hasOwnProperty(n.config.name)&&!function(t){return t.config.platforms&&t.config.platforms.indexOf(Capacitor.platform)>=0}(n)||(t[n.config.name]=n)},x=function(t,n){return(x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})(t,n)};function E(t,n){function r(){this.constructor=t}x(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}function S(t,n,r,e){return new(r||(r=Promise))((function(i,o){function u(t){try{c(e.next(t))}catch(t){o(t)}}function s(t){try{c(e.throw(t))}catch(t){o(t)}}function c(t){t.done?i(t.value):new r((function(n){n(t.value)})).then(u,s)}c((e=e.apply(t,n||[])).next())}))}function A(t,n){var r,e,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,e&&(i=2&o[0]?e.return:o[0]?e.throw||((i=e.return)&&i.call(e),0):e.next)&&!(i=i.call(e,o[1])).done)return i;switch(e=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,e=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=n.call(t,u)}catch(t){o=[6,t],e=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}new(function(t){function n(){return t.call(this,{name:"Accessibility",platforms:["web"]})||this}return E(n,t),n.prototype.isScreenReaderEnabled=function(){throw new Error("Feature not available in the browser")},n.prototype.speak=function(t){if(!("speechSynthesis"in window))return Promise.reject("Browser does not support the Speech Synthesis API");var n=new SpeechSynthesisUtterance(t.value);return t.language&&(n.lang=t.language),window.speechSynthesis.speak(n),Promise.resolve()},n}(b)),new(function(t){function n(){var n=t.call(this,{name:"App",platforms:["web"]})||this;return"undefined"!=typeof document&&document.addEventListener("visibilitychange",n.handleVisibilityChange.bind(n),!1),n}return E(n,t),n.prototype.exitApp=function(){throw new Error("Method not implemented.")},n.prototype.canOpenUrl=function(){return Promise.resolve({value:!0})},n.prototype.openUrl=function(){return Promise.resolve({completed:!0})},n.prototype.getLaunchUrl=function(){return Promise.resolve({url:""})},n.prototype.handleVisibilityChange=function(){var t={isActive:!0!==document.hidden};this.notifyListeners("appStateChange",t)},n}(b)),new(function(t){function n(){return t.call(this,{name:"Browser",platforms:["web"]})||this}return E(n,t),n.prototype.open=function(t){return S(this,void 0,void 0,(function(){return A(this,(function(){return this._lastWindow=window.open(t.url,t.windowName||"_blank"),[2,Promise.resolve()]}))}))},n.prototype.prefetch=function(){return S(this,void 0,void 0,(function(){return A(this,(function(){return[2,Promise.resolve()]}))}))},n.prototype.close=function(){return S(this,void 0,void 0,(function(){return A(this,(function(){return this._lastWindow&&this._lastWindow.close(),[2,Promise.resolve()]}))}))},n}(b)),new(function(t){function n(){return t.call(this,{name:"Camera",platforms:["web"]})||this}return E(n,t),n.prototype.getPhoto=function(t){return S(this,void 0,void 0,(function(){var n=this;return A(this,(function(){return[2,new Promise((function(r,e){return S(n,void 0,void 0,(function(){var n,i=this;return A(this,(function(o){switch(o.label){case 0:return n=document.createElement("pwa-camera-modal"),document.body.appendChild(n),[4,n.componentOnReady()];case 1:return o.sent(),n.addEventListener("onPhoto",(function(o){return S(i,void 0,void 0,(function(){var i,u;return A(this,(function(s){switch(s.label){case 0:return null!==(i=o.detail)?[3,1]:(e("User cancelled photos app"),[3,4]);case 1:return i instanceof Error?(e(i.message),[3,4]):[3,2];case 2:return u=r,[4,this._getCameraPhoto(i,t)];case 3:u.apply(void 0,[s.sent()]),s.label=4;case 4:return n.dismiss(),document.body.removeChild(n),[2]}}))}))})),n.present(),[2]}}))}))}))]}))}))},n.prototype._getCameraPhoto=function(t,n){return new Promise((function(r,e){var i=new FileReader,u=t.type.split("/")[1];n.resultType==o.Uri?r({webPath:URL.createObjectURL(t),format:u}):(i.readAsDataURL(t),i.onloadend=function(){var t=i.result;r(n.resultType==o.DataUrl?{dataUrl:t,format:u}:{base64String:t.split(",")[1],format:u})},i.onerror=function(t){e(t)})}))},n}(b)),new(function(t){function n(){return t.call(this,{name:"Clipboard",platforms:["web"]})||this}return E(n,t),n.prototype.write=function(t){return S(this,void 0,void 0,(function(){return A(this,(function(n){switch(n.label){case 0:return navigator.clipboard?t.string||t.url?[4,navigator.clipboard.writeText(t.string||t.url)]:[3,2]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:return n.sent(),[3,3];case 2:if(t.image)return[2,Promise.reject("Setting images not supported on the web")];n.label=3;case 3:return[2,Promise.resolve()]}}))}))},n.prototype.read=function(t){return S(this,void 0,void 0,(function(){var n,r,e,i,o;return A(this,(function(u){switch(u.label){case 0:return navigator.clipboard?"string"!==t.type&&"url"!==t.type?[3,2]:[4,navigator.clipboard.readText()]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:return n=u.sent(),[2,Promise.resolve({value:n})];case 2:return[4,navigator.clipboard.read()];case 3:for(r=u.sent(),e=0,i=r.items;e<i.length;e++)if("text/plain"===(o=i[e]).type)return[2,Promise.resolve({value:o.getAs("text/plain")})];u.label=4;case 4:return[2,Promise.reject("Unable to get data from clipboard")]}}))}))},n}(b)),new(function(t){function n(){var n=t.call(this,{name:"Filesystem",platforms:["web"]})||this;return n.DEFAULT_DIRECTORY=u.Data,n.DB_VERSION=1,n.DB_NAME="Disc",n._writeCmds=["add","put","delete"],n}return E(n,t),n.prototype.initDb=function(){return S(this,void 0,void 0,(function(){var t=this;return A(this,(function(){if(void 0!==this._db)return[2,this._db];if(!("indexedDB"in window))throw new Error("This browser doesn't support IndexedDB");return[2,new Promise((function(r,e){var i=indexedDB.open(t.DB_NAME,t.DB_VERSION);i.onupgradeneeded=n.doUpgrade,i.onsuccess=function(){t._db=i.result,r(i.result)},i.onerror=function(){return e(i.error)},i.onblocked=function(){console.warn("db blocked")}}))]}))}))},n.doUpgrade=function(t){var n=t.target.result;switch(t.oldVersion){case 0:case 1:default:n.objectStoreNames.contains("FileStorage")&&n.deleteObjectStore("FileStorage"),n.createObjectStore("FileStorage",{keyPath:"path"}).createIndex("by_folder","folder")}},n.prototype.dbRequest=function(t,n){return S(this,void 0,void 0,(function(){var r;return A(this,(function(){return r=-1!==this._writeCmds.indexOf(t)?"readwrite":"readonly",[2,this.initDb().then((function(e){return new Promise((function(i,o){var u=e.transaction(["FileStorage"],r).objectStore("FileStorage"),s=u[t].apply(u,n);s.onsuccess=function(){return i(s.result)},s.onerror=function(){return o(s.error)}}))}))]}))}))},n.prototype.dbIndexRequest=function(t,n,r){return S(this,void 0,void 0,(function(){var e;return A(this,(function(){return e=-1!==this._writeCmds.indexOf(n)?"readwrite":"readonly",[2,this.initDb().then((function(i){return new Promise((function(o,u){var s=i.transaction(["FileStorage"],e).objectStore("FileStorage").index(t),c=s[n].apply(s,r);c.onsuccess=function(){return o(c.result)},c.onerror=function(){return u(c.error)}}))}))]}))}))},n.prototype.getPath=function(t,n){t=t||this.DEFAULT_DIRECTORY;var r=void 0!==n?n.replace(/^[/]+|[/]+$/g,""):"",e="/"+t;return""!==n&&(e+="/"+r),e},n.prototype.clear=function(){return S(this,void 0,void 0,(function(){var t;return A(this,(function(n){switch(n.label){case 0:return[4,this.initDb()];case 1:return t=n.sent(),t.transaction(["FileStorage"],"readwrite").objectStore("FileStorage").clear(),[2,{}]}}))}))},n.prototype.readFile=function(t){return S(this,void 0,void 0,(function(){var n,r;return A(this,(function(e){switch(e.label){case 0:return n=this.getPath(t.directory,t.path),[4,this.dbRequest("get",[n])];case 1:if(void 0===(r=e.sent()))throw Error("File does not exist.");return[2,{data:r.content}]}}))}))},n.prototype.writeFile=function(t){return S(this,void 0,void 0,(function(){var n,r,e,i,o,u,s,c,a;return A(this,(function(h){switch(h.label){case 0:return n=this.getPath(t.directory,t.path),r=t.data,[4,this.dbRequest("get",[n])];case 1:if((e=h.sent())&&"directory"===e.type)throw"The supplied path is a directory.";return i=t.encoding,o=n.substr(0,n.lastIndexOf("/")),[4,this.dbRequest("get",[o])];case 2:return void 0!==h.sent()?[3,4]:-1===(u=o.indexOf("/",1))?[3,4]:(s=o.substr(u),[4,this.mkdir({path:s,directory:t.directory,recursive:!0})]);case 3:h.sent(),h.label=4;case 4:return c=Date.now(),a={path:n,folder:o,type:"file",size:r.length,ctime:c,mtime:c,content:!i&&r.indexOf(",")>=0?r.split(",")[1]:r},[4,this.dbRequest("put",[a])];case 5:return h.sent(),[2,{}]}}))}))},n.prototype.appendFile=function(t){return S(this,void 0,void 0,(function(){var n,r,e,i,o,u,s;return A(this,(function(c){switch(c.label){case 0:return n=this.getPath(t.directory,t.path),r=t.data,e=n.substr(0,n.lastIndexOf("/")),i=Date.now(),o=i,[4,this.dbRequest("get",[n])];case 1:if((u=c.sent())&&"directory"===u.type)throw"The supplied path is a directory.";return[4,this.dbRequest("get",[e])];case 2:return void 0!==c.sent()?[3,4]:(s=e.substr(e.indexOf("/",1)),[4,this.mkdir({path:s,directory:t.directory,recursive:!0})]);case 3:c.sent(),c.label=4;case 4:return void 0!==u&&(r=u.content+r,o=u.ctime),[4,this.dbRequest("put",[{path:n,folder:e,type:"file",size:r.length,ctime:o,mtime:i,content:r}])];case 5:return c.sent(),[2,{}]}}))}))},n.prototype.deleteFile=function(t){return S(this,void 0,void 0,(function(){var n;return A(this,(function(r){switch(r.label){case 0:return n=this.getPath(t.directory,t.path),[4,this.dbRequest("get",[n])];case 1:if(void 0===r.sent())throw Error("File does not exist.");return[4,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(n)])];case 2:if(0!==r.sent().length)throw Error("Folder is not empty.");return[4,this.dbRequest("delete",[n])];case 3:return r.sent(),[2,{}]}}))}))},n.prototype.mkdir=function(t){return S(this,void 0,void 0,(function(){var n,r,e,i,o,u,s,c,a,h;return A(this,(function(f){switch(f.label){case 0:return n=this.getPath(t.directory,t.path),r=t.createIntermediateDirectories,void 0!==t.createIntermediateDirectories&&console.warn("createIntermediateDirectories is deprecated, use recursive"),e=t.recursive,i=r||e,o=n.substr(0,n.lastIndexOf("/")),u=(n.match(/\//g)||[]).length,[4,this.dbRequest("get",[o])];case 1:return s=f.sent(),[4,this.dbRequest("get",[n])];case 2:if(c=f.sent(),1===u)throw Error("Cannot create Root directory");if(void 0!==c)throw Error("Current directory does already exist.");if(!i&&2!==u&&void 0===s)throw Error("Parent directory must exist");return i&&2!==u&&void 0===s?(a=o.substr(o.indexOf("/",1)),[4,this.mkdir({path:a,directory:t.directory,recursive:i})]):[3,4];case 3:f.sent(),f.label=4;case 4:return h=Date.now(),[4,this.dbRequest("put",[{path:n,folder:o,type:"directory",size:0,ctime:h,mtime:h}])];case 5:return f.sent(),[2,{}]}}))}))},n.prototype.rmdir=function(t){return S(this,void 0,void 0,(function(){var n,r,e,i,o,u,s,c,a;return A(this,(function(h){switch(h.label){case 0:return e=t.recursive,i=this.getPath(r=t.directory,n=t.path),[4,this.dbRequest("get",[i])];case 1:if(void 0===(o=h.sent()))throw Error("Folder does not exist.");if("directory"!==o.type)throw Error("Requested path is not a directory");return[4,this.readdir({path:n,directory:r})];case 2:if(0!==(u=h.sent()).files.length&&!e)throw Error("Folder is not empty");s=0,c=u.files,h.label=3;case 3:return s<c.length?[4,this.stat({path:a=n+"/"+c[s],directory:r})]:[3,9];case 4:return"file"!==h.sent().type?[3,6]:[4,this.deleteFile({path:a,directory:r})];case 5:return h.sent(),[3,8];case 6:return[4,this.rmdir({path:a,directory:r,recursive:e})];case 7:h.sent(),h.label=8;case 8:return s++,[3,3];case 9:return[4,this.dbRequest("delete",[i])];case 10:return h.sent(),[2,{}]}}))}))},n.prototype.readdir=function(t){return S(this,void 0,void 0,(function(){var n,r;return A(this,(function(e){switch(e.label){case 0:return n=this.getPath(t.directory,t.path),[4,this.dbRequest("get",[n])];case 1:if(r=e.sent(),""!==t.path&&void 0===r)throw Error("Folder does not exist.");return[4,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(n)])];case 2:return[2,{files:e.sent().map((function(t){return t.substring(n.length+1)}))}]}}))}))},n.prototype.getUri=function(t){return S(this,void 0,void 0,(function(){var n,r;return A(this,(function(e){switch(e.label){case 0:return n=this.getPath(t.directory,t.path),[4,this.dbRequest("get",[n])];case 1:return void 0!==(r=e.sent())?[3,3]:[4,this.dbRequest("get",[n+"/"])];case 2:r=e.sent(),e.label=3;case 3:if(void 0===r)throw Error("Entry does not exist.");return[2,{uri:r.path}]}}))}))},n.prototype.stat=function(t){return S(this,void 0,void 0,(function(){var n,r;return A(this,(function(e){switch(e.label){case 0:return n=this.getPath(t.directory,t.path),[4,this.dbRequest("get",[n])];case 1:return void 0!==(r=e.sent())?[3,3]:[4,this.dbRequest("get",[n+"/"])];case 2:r=e.sent(),e.label=3;case 3:if(void 0===r)throw Error("Entry does not exist.");return[2,{type:r.type,size:r.size,ctime:r.ctime,mtime:r.mtime,uri:r.path}]}}))}))},n.prototype.rename=function(t){return S(this,void 0,void 0,(function(){return A(this,(function(){return[2,this._copy(t,!0)]}))}))},n.prototype.copy=function(t){return S(this,void 0,void 0,(function(){return A(this,(function(){return[2,this._copy(t,!1)]}))}))},n.prototype._copy=function(t,n){return void 0===n&&(n=!1),S(this,void 0,void 0,(function(){var r,e,i,o,u,s,c,a,h,f,d,l,w,v,m,p,y=this;return A(this,(function(g){switch(g.label){case 0:if(e=t.from,i=t.directory,o=t.toDirectory,!(r=t.to)||!e)throw Error("Both to and from must be provided");if(o||(o=i),u=this.getPath(i,e),s=this.getPath(o,r),u===s)return[2,{}];if(s.startsWith(u))throw Error("To path cannot contain the from path");g.label=1;case 1:return g.trys.push([1,3,,6]),[4,this.stat({path:r,directory:o})];case 2:return c=g.sent(),[3,6];case 3:return g.sent(),(a=r.split("/")).pop(),h=a.join("/"),a.length>0?[4,this.stat({path:h,directory:o})]:[3,5];case 4:if("directory"!==g.sent().type)throw new Error("Parent directory of the to path is a file");g.label=5;case 5:return[3,6];case 6:if(c&&"directory"===c.type)throw new Error("Cannot overwrite a directory with a file");return[4,this.stat({path:e,directory:i})];case 7:switch(f=g.sent(),d=function(t,n,r){return S(y,void 0,void 0,(function(){var e,i;return A(this,(function(u){switch(u.label){case 0:return e=this.getPath(o,t),[4,this.dbRequest("get",[e])];case 1:return(i=u.sent()).ctime=n,i.mtime=r,[4,this.dbRequest("put",[i])];case 2:return u.sent(),[2]}}))}))},f.type){case"file":return[3,8];case"directory":return[3,15]}return[3,28];case 8:return[4,this.readFile({path:e,directory:i})];case 9:return l=g.sent(),n?[4,this.deleteFile({path:e,directory:i})]:[3,11];case 10:g.sent(),g.label=11;case 11:return[4,this.writeFile({path:r,directory:o,data:l.data})];case 12:return g.sent(),n?[4,d(r,f.ctime,f.mtime)]:[3,14];case 13:g.sent(),g.label=14;case 14:return[2,{}];case 15:if(c)throw Error("Cannot move a directory over an existing object");g.label=16;case 16:return g.trys.push([16,20,,21]),[4,this.mkdir({path:r,directory:o,recursive:!1})];case 17:return g.sent(),n?[4,d(r,f.ctime,f.mtime)]:[3,19];case 18:g.sent(),g.label=19;case 19:return[3,21];case 20:return g.sent(),[3,21];case 21:return[4,this.readdir({path:e,directory:i})];case 22:w=g.sent().files,v=0,m=w,g.label=23;case 23:return v<m.length?[4,this._copy({from:e+"/"+(p=m[v]),to:r+"/"+p,directory:i,toDirectory:o},n)]:[3,26];case 24:g.sent(),g.label=25;case 25:return v++,[3,23];case 26:return n?[4,this.rmdir({path:e,directory:i})]:[3,28];case 27:g.sent(),g.label=28;case 28:return[2,{}]}}))}))},n._debug=!0,n}(b));var T=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return n.forEach((function(n){if(n&&"object"==typeof n)for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})),t};function C(t,n){return"celsius"==n?t-273.15:"fahrenheit"==n?1.8*(t-273.15)+32:t}new(function(t){function n(){return t.call(this,{name:"Geolocation",platforms:["web"]})||this}return E(n,t),n.prototype.getCurrentPosition=function(t){var n=this;return new Promise((function(r,e){return n.requestPermissions().then((function(){window.navigator.geolocation.getCurrentPosition((function(t){r(t)}),(function(t){e(t)}),T({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},t))}))}))},n.prototype.watchPosition=function(t,n){return""+window.navigator.geolocation.watchPosition((function(t){n(t)}),(function(t){n(null,t)}),T({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},t))},n.prototype.clearWatch=function(t){return window.navigator.geolocation.clearWatch(parseInt(t.id,10)),Promise.resolve()},n}(b)),new(function(t){function n(){return t.call(this,{name:"Device",platforms:["web"]})||this}return E(n,t),n.prototype.getInfo=function(){return S(this,void 0,void 0,(function(){var t,n,r;return A(this,(function(e){switch(e.label){case 0:t=navigator.userAgent,n=this.parseUa(t),r={},e.label=1;case 1:return e.trys.push([1,3,,4]),[4,navigator.getBattery()];case 2:return r=e.sent(),[3,4];case 3:return e.sent(),[3,4];case 4:return[2,Promise.resolve({model:n.model,platform:"web",appVersion:"",appBuild:"",osVersion:n.osVersion,manufacturer:navigator.vendor,isVirtual:!1,batteryLevel:r.level,isCharging:r.charging,uuid:this.getUid()})]}}))}))},n.prototype.getLanguageCode=function(){return S(this,void 0,void 0,(function(){return A(this,(function(){return[2,{value:navigator.language}]}))}))},n.prototype.parseUa=function(t){var n={},r=t.indexOf("(")+1,e=t.indexOf(") AppleWebKit");-1!==t.indexOf(") Gecko")&&(e=t.indexOf(") Gecko"));var i=t.substring(r,e);if(-1!==t.indexOf("Android"))n.model=i.replace("; wv","").split("; ").pop().split(" Build")[0],n.osVersion=i.split("; ")[1];else if(n.model=i.split("; ")[0],navigator.oscpu)n.osVersion=navigator.oscpu;else if(-1!==t.indexOf("Windows"))n.osVersion=i;else{var o=i.split("; ").pop().replace(" like Mac OS X","").split(" ");n.osVersion=o[o.length-1].replace(/_/g,".")}return n},n.prototype.getUid=function(){var t=window.localStorage.getItem("_capuid");return t||(t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=16*Math.random()|0;return("x"==t?n:3&n|8).toString(16)})),window.localStorage.setItem("_capuid",t),t)},n}(b)),new(function(t){function n(){var n=t.call(this,{name:"LocalNotifications",platforms:["web"]})||this;return n.pending=[],n}return E(n,t),n.prototype.sendPending=function(){var t=this,n=[],r=+new Date;this.pending.forEach((function(e){e.schedule&&e.schedule.at&&+e.schedule.at<=r&&(t.buildNotification(e),n.push(e))})),console.log("Sent pending, removing",n),this.pending=this.pending.filter((function(t){return!n.find((function(n){return n===t}))}))},n.prototype.sendNotification=function(t){var n=this,r=t;if(t.schedule&&t.schedule.at){var e=+t.schedule.at-+new Date;return this.pending.push(r),void setTimeout((function(){n.sendPending()}),e)}this.buildNotification(t)},n.prototype.buildNotification=function(t){return new Notification(t.title,{body:t.body})},n.prototype.schedule=function(t){var n=this,r=[];return t.notifications.forEach((function(t){r.push(n.sendNotification(t))})),Promise.resolve({notifications:r.map((function(){return{id:""}}))})},n.prototype.getPending=function(){return Promise.resolve({notifications:this.pending.map((function(t){return{id:""+t.id}}))})},n.prototype.registerActionTypes=function(){throw new Error("Method not implemented.")},n.prototype.cancel=function(t){return console.log("Cancel these",t),this.pending=this.pending.filter((function(n){return!t.notifications.find((function(t){return t.id===""+n.id}))})),Promise.resolve()},n.prototype.areEnabled=function(){throw new Error("Method not implemented.")},n.prototype.requestPermissions=function(){return new Promise((function(t,n){Notification.requestPermission().then((function(r){"denied"!==r&&"default"!==r?t({results:[r]}):n(r)})).catch((function(t){n(t)}))}))},n}(b)),new(function(t){function n(){return t.call(this,{name:"Share",platforms:["web"]})||this}return E(n,t),n.prototype.share=function(t){return navigator.share?navigator.share({title:t.title,text:t.text,url:t.url}):Promise.reject("Web Share API not available")},n}(b)),new(function(t){function n(){return t.call(this,{name:"Modals",platforms:["web"]})||this}return E(n,t),n.prototype.alert=function(t){return S(this,void 0,void 0,(function(){return A(this,(function(){return window.alert(t.message),[2,Promise.resolve()]}))}))},n.prototype.prompt=function(t){return S(this,void 0,void 0,(function(){var n;return A(this,(function(){return n=window.prompt(t.message,t.inputPlaceholder||""),[2,Promise.resolve({value:n,cancelled:null===n})]}))}))},n.prototype.confirm=function(t){return S(this,void 0,void 0,(function(){var n;return A(this,(function(){return n=window.confirm(t.message),[2,Promise.resolve({value:n})]}))}))},n.prototype.showActions=function(t){return S(this,void 0,void 0,(function(){var n=this;return A(this,(function(){return[2,new Promise((function(r){return S(n,void 0,void 0,(function(){var n,e;return A(this,(function(i){switch(i.label){case 0:return(n=document.querySelector("ion-action-sheet-controller"))||(n=document.createElement("ion-action-sheet-controller"),document.body.appendChild(n)),[4,n.componentOnReady()];case 1:return i.sent(),e=t.options.map((function(t,n){return{text:t.title,role:t.style&&t.style.toLowerCase()||"",icon:t.icon||"",handler:function(){r({index:n})}}})),[4,n.create({title:t.title,buttons:e})];case 2:return[4,i.sent().present()];case 3:return i.sent(),[2]}}))}))}))]}))}))},n}(b)),new(function(t){function n(){var n=t.call(this,{name:"Motion"})||this;return n.registerWindowListener("devicemotion","accel"),n.registerWindowListener("deviceorientation","orientation"),n}return E(n,t),n}(b)),new(function(t){function n(){var n=t.call(this,{name:"Network",platforms:["web"]})||this;return n.listenerFunction=null,n}return E(n,t),n.prototype.getStatus=function(){return new Promise((function(t,n){if(window.navigator){var r=window.navigator.onLine,e=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection;t({connected:r,connectionType:r?e?e.type||e.effectiveType:"wifi":"none"})}else n("Network info not available")}))},n.prototype.addListener=function(t,n){var r=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection,e=n.bind(this,{connected:!0,connectionType:r?r.type||r.effectiveType:"wifi"}),i=n.bind(this,{connected:!1,connectionType:"none"});if(0===t.localeCompare("networkStatusChange"))return window.addEventListener("online",e),window.addEventListener("offline",i),{remove:function(){window.removeEventListener("online",e),window.removeEventListener("offline",i)}}},n}(b)),new(function(t){function n(){return t.call(this,{name:"Permissions"})||this}return E(n,t),n.prototype.query=function(t){return S(this,void 0,void 0,(function(){var n;return A(this,(function(r){switch(r.label){case 0:return(n=window.navigator).permissions?[4,n.permissions.query({name:t.name===l.Photos?"camera":t.name})]:[2,Promise.reject("This browser does not support the Permissions API")];case 1:return[2,{state:r.sent().state}]}}))}))},n}(b)),new(function(t){function n(){return t.call(this,{name:"SplashScreen",platforms:["web"]})||this}return E(n,t),n.prototype.show=function(){return Promise.resolve()},n.prototype.hide=function(){return Promise.resolve()},n}(b)),new(function(t){function n(){var n=t.call(this,{name:"Storage",platforms:["web"]})||this;return n.KEY_PREFIX="_cap_",n}return E(n,t),n.prototype.get=function(t){var n=this;return new Promise((function(r){r({value:window.localStorage.getItem(n.makeKey(t.key))})}))},n.prototype.set=function(t){var n=this;return new Promise((function(r){window.localStorage.setItem(n.makeKey(t.key),t.value),r()}))},n.prototype.remove=function(t){var n=this;return new Promise((function(r){window.localStorage.removeItem(n.makeKey(t.key)),r()}))},n.prototype.keys=function(){var t=this;return new Promise((function(n){n({keys:Object.keys(localStorage).filter((function(n){return t.isKey(n)})).map((function(n){return t.getKey(n)}))})}))},n.prototype.clear=function(){var t=this;return new Promise((function(n){Object.keys(localStorage).filter((function(n){return t.isKey(n)})).forEach((function(t){return window.localStorage.removeItem(t)})),n()}))},n.prototype.makeKey=function(t){return this.KEY_PREFIX+t},n.prototype.isKey=function(t){return 0===t.indexOf(this.KEY_PREFIX)},n.prototype.getKey=function(t){return t.substr(this.KEY_PREFIX.length)},n}(b)),new(function(t){function n(){return t.call(this,{name:"Toast",platforms:["web"]})||this}return E(n,t),n.prototype.show=function(t){return S(this,void 0,void 0,(function(){var n,r;return A(this,(function(){return n=3e3,t.duration&&(n="long"===t.duration?5e3:3e3),(r=document.createElement("pwa-toast")).duration=n,r.message=t.text,document.body.appendChild(r),[2]}))}))},n}(b)),function(t){for(var n=0,r=g.getPlugins();n<r.length;n++)P(t,r[n])}(y);const D=new class{constructor(){this.apiKey="917d83dde0f4e28a2ee0586494c03d61"}async load(){return this.data?this.data:await this.refreshWeather()}async refreshWeather(){let t,[n,e]=await Promise.all([r.getLocation(),r.getTemperatureUnit()]);try{if(n.useCoords){let r=`http://api.openweathermap.org/data/2.5/weather?lat=${n.lat}&lon=${n.lng}&APPID=${this.apiKey}`;if(console.log(r),!(t=await fetch(r)).ok)throw new Error("throw "+t.statusText)}else{let r=`http://api.openweathermap.org/data/2.5/weather?q=${n.name}&APPID=${this.apiKey}`;if(console.log(r),!(t=await fetch(r)).ok)throw new Error("throw "+t.statusText)}}catch(t){return Promise.reject(t)}let i=await t.json();return this.data=this.processData(i,e),this.data}processData(t,n){return t.main.temp=parseFloat(C(t.main.temp,n).toFixed(1)),t.main.temp_min=parseFloat(C(t.main.temp_min,n).toFixed(1)),t.main.temp_max=parseFloat(C(t.main.temp_max,n).toFixed(1)),t}async getCurrentWeather(){return await this.load()}},{Geolocation:R}=y,F=class{constructor(n){t(this,n),this.weatherIcon="thermometer",this.weather={base:"",clouds:null,cod:null,coord:null,dt:null,id:null,main:{humidity:null,pressure:null,temp:null,temp_min:null,temp_max:null},name:"Loading...",sys:null,visibility:null,weather:[{id:null,main:null,description:null,icon:null}],wind:null}}async componentDidLoad(){let t=await R.getCurrentPosition();await r.setCoords(t.coords.latitude,t.coords.longitude);try{this.weather=await D.getCurrentWeather()}catch(t){console.log(t)}document.querySelector("ion-router").addEventListener("ionRouteDidChange",()=>{this.refresherHandler()}),this.setWeatherIcon()}async refresherHandler(t){try{this.weather=await D.refreshWeather()}catch(t){console.log(t)}this.setWeatherIcon(),t&&t.target.complete()}setWeatherIcon(){let t="thermometer",n=this.weather.weather[0].description;n&&(n.includes("lightning")&&(t="thunderstorm"),n.includes("thunder")&&(t="thunderstorm"),n.includes("wind")&&(t="flag"),n.includes("shower")&&(t="rainy"),n.includes("rain")&&(t="rainy"),n.includes("snow")&&(t="snow"),n.includes("frost")&&(t="snow"),n.includes("cloud")&&(t="cloudy"),n.includes("sun")&&(t="sunny"),n.includes("clear ")&&(t="sunny")),this.weatherIcon=t}render(){return[n("ion-header",null,n("ion-toolbar",{color:"primary"},n("ion-title",null,"Weather"),n("ion-buttons",{slot:"end"},n("ion-button",{href:"/settings",routerDirection:"forward"},n("ion-icon",{name:"settings",slot:"icon-only"}))))),n("ion-content",{class:"ion-padding"},n("ion-refresher",{slot:"fixed",onIonRefresh:t=>this.refresherHandler(t)},n("ion-refresher-content",null)),n("div",{class:"weather-display"},n("ion-icon",{name:this.weatherIcon}),n("h1",null,this.weather.main.temp,"°"),n("p",null,this.weather.weather[0].description),n("ion-card",null,n("ion-card-header",null,n("ion-card-subtitle",null,this.weather.name),n("ion-card-title",null,"Overview")),n("ion-card-content",null,n("ion-grid",null,n("ion-row",null,n("ion-col",{size:"6"}," Min "),n("ion-col",{size:"6"}," ",this.weather.main.temp_min,"° ")),n("ion-row",null,n("ion-col",{size:"6"}," Max "),n("ion-col",{size:"6"}," ",this.weather.main.temp_max,"° ")))))))]}static get style(){return"ion-card{--ion-item-background:rgba(255,255,255,0,22);width:100%;margin-top:auto!important}ion-col{font-weight:700}ion-refresher{background:var(--ion-background-color)}.weather-display{height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start}.weather-display h1{font-size:2.5em}.weather-display ion-icon{color:#fff;font-size:10em}.weather-display .temperature{background:hsla(0,0%,100%,.4);border-radius:10px;width:100%;padding:20px;text-align:center}"}};export{F as app_home};