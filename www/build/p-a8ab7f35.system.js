System.register(["./p-2445f09c.system.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.c}],execute:function(){var r=e("shadow",(function(e){return e.shadowRoot||e}));var a=e("iosTransitionAnimation",(function(e,a){try{var o=540;var n="cubic-bezier(0.32,0.72,0,1)";var l="opacity";var i="transform";var s="0%";var f=.8;var m=e.ownerDocument.dir==="rtl";var d=m?"-99.5%":"99.5%";var c=m?"33%":"-33%";var v=a.enteringEl;var y=a.leavingEl;var u=a.direction==="back";var S=v.querySelector(":scope > ion-content");var b=v.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");var T=v.querySelectorAll(":scope > ion-header > ion-toolbar");var X=t();var E=t();X.addElement(v).duration(a.duration||o).easing(a.easing||n).fill("both").beforeRemoveClass("ion-page-invisible");if(y&&e){var p=t();p.addElement(e);X.addAnimation(p)}if(!S&&T.length===0&&b.length===0){E.addElement(v.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"))}else{E.addElement(S);E.addElement(b)}X.addAnimation(E);if(u){E.beforeClearStyles([l]).fromTo("transform","translateX("+c+")","translateX("+s+")").fromTo(l,f,1)}else{E.beforeClearStyles([l]).fromTo("transform","translateX("+d+")","translateX("+s+")")}if(S){var q=r(S).querySelector(".transition-effect");if(q){var A=q.querySelector(".transition-cover");var g=q.querySelector(".transition-shadow");var h=t();var C=t();var x=t();h.addElement(q).beforeStyles({opacity:"1"}).afterStyles({opacity:""});C.addElement(A).beforeClearStyles([l]).fromTo(l,0,.1);x.addElement(g).beforeClearStyles([l]).fromTo(l,.03,.7);h.addAnimation([C,x]);E.addAnimation([h])}}T.forEach((function(e){var a=t();a.addElement(e);X.addAnimation(a);var o=t();o.addElement(e.querySelector("ion-title"));var n=t();n.addElement(e.querySelectorAll("ion-buttons,[menuToggle]"));var i=t();i.addElement(e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var f=t();f.addElement(r(e).querySelector(".toolbar-background"));var v=t();var y=e.querySelector("ion-back-button");if(y){v.addElement(y)}a.addAnimation([o,n,i,f,v]);o.fromTo(l,.01,1);n.fromTo(l,.01,1);i.fromTo(l,.01,1);if(u){o.fromTo("transform","translateX("+c+")","translateX("+s+")");i.fromTo("transform","translateX("+c+")","translateX("+s+")");v.fromTo(l,.01,1)}else{o.fromTo("transform","translateX("+d+")","translateX("+s+")");i.fromTo("transform","translateX("+d+")","translateX("+s+")");f.beforeClearStyles([l]).keyframes([{offset:0,opacity:.01},{offset:.99,opacity:1},{offset:1,opacity:"var(--opacity)"}]);v.fromTo(l,.01,1);if(y){var S=t();S.addElement(r(y).querySelector(".button-text")).fromTo("transform",m?"translateX(-100px)":"translateX(100px)","translateX(0px)");a.addAnimation(S)}}}));if(y){var k=t();var w=y.querySelector(":scope > ion-content");k.addElement(w);k.addElement(y.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"));X.addAnimation(k);if(u){k.beforeClearStyles([l]).fromTo("transform","translateX("+s+")",m?"translateX(-100%)":"translateX(100%)")}else{k.fromTo("transform","translateX("+s+")","translateX("+c+")").fromTo(l,1,f)}if(w){var R=r(w).querySelector(".transition-effect");if(R){var j=R.querySelector(".transition-cover");var z=R.querySelector(".transition-shadow");var D=t();var B=t();var F=t();D.addElement(R).beforeStyles({opacity:"1"}).afterStyles({opacity:""});B.addElement(j).beforeClearStyles([l]).fromTo(l,.1,0);F.addElement(z).beforeClearStyles([l]).fromTo(l,.7,.03);D.addAnimation([B,F]);k.addAnimation([D])}}var G=y.querySelectorAll(":scope > ion-header > ion-toolbar");G.forEach((function(e){var a=t();a.addElement(e);var o=t();o.addElement(e.querySelector("ion-title"));var n=t();n.addElement(e.querySelectorAll("ion-buttons,[menuToggle]"));var f=t();var d=e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");if(d.length>0){f.addElement(d)}var v=t();v.addElement(r(e).querySelector(".toolbar-background"));var y=t();var S=e.querySelector("ion-back-button");if(S){y.addElement(S)}a.addAnimation([o,n,f,y,v]);X.addAnimation(a);y.fromTo(l,.99,0);o.fromTo(l,.99,0);n.fromTo(l,.99,0);f.fromTo(l,.99,0);if(u){o.fromTo("transform","translateX("+s+")",m?"translateX(-100%)":"translateX(100%)");f.fromTo("transform","translateX("+s+")",m?"translateX(-100%)":"translateX(100%)");v.beforeClearStyles([l]).fromTo(l,1,.01);if(S){var b=t();b.addElement(r(S).querySelector(".button-text"));b.fromTo("transform","translateX("+s+")","translateX("+((m?-124:124)+"px")+")");a.addAnimation(b)}}else{o.fromTo("transform","translateX("+s+")","translateX("+c+")").afterClearStyles([i]);f.fromTo("transform","translateX("+s+")","translateX("+c+")").afterClearStyles([i,l]);y.afterClearStyles([l]);o.afterClearStyles([l]);n.afterClearStyles([l])}}))}return X}catch(e){throw e}}))}}}));