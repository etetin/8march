!function(){"use strict";var t,e,n,i,o,r,s,a,c,u,h=function(t){var e,n=atob(t.split(",")[1]),i=t.split(",")[0].split(":")[1].split(";")[0],o=new ArrayBuffer(n.length),r=new Uint8Array(o);for(e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return new Blob([o],{type:i})};function l(t,e,n){var i,o=new FormData;o.append("file",e),o.append("action","fb"===t?"sharefb":"givemesticker"),(i=new XMLHttpRequest).open("POST","http://8march.hpmd.ru/api/",!1),i.setRequestHeader("X-CSRFToken","P2ysxmBfMy523Y5KdW0zRqk5ivYLY8SsKzDhqoW3YiHhSKpmn7jEsXPKACcM5tza"),i.onreadystatechange=function(){4===i.readyState&&(4===i.readyState&&200===i.status?n(i.response):4===i.readyState&&200!==i.status&&console.log("Error during request",i.response))},i.send(o)}t=function(t,e){var n,i=document.createElement("canvas");function o(t,e){var n=document.createElement("img");n.crossOrigin="Anonymous",n.onerror=function(t){console.error("Failed to load image",t)},n.onload=function(){e(n)},n.src=t}i.width=1200,i.height=630,n=i.getContext("2d"),o("./static/img/fb_share_dynamic.jpg",function(r){n.drawImage(r,0,0,1200,630),o(t,function(t){!function(t){n.save(),n.translate(i.width/2,i.height/2),n.rotate(-10*Math.PI/180),n.drawImage(t,-215,-235,430,430),n.restore()}(t),o("./static/img/fb_share_title.png",function(t){n.drawImage(t,277,453,658,124),l("fb",h(i.toDataURL("image/jpeg",.41)),e)})})})},e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},function(){function t(t){this.value=t}function e(e){var n,i;function o(n,i){var s,a;try{(a=(s=e[n](i)).value)instanceof t?Promise.resolve(a.value).then(function(t){o("next",t)},function(t){o("throw",t)}):r(s.done?"return":"normal",s.value)}catch(t){r("throw",t)}}function r(t,e){switch(t){case"return":n.resolve({value:e,done:!0});break;case"throw":n.reject(e);break;default:n.resolve({value:e,done:!1})}(n=n.next)?o(n.key,n.arg):i=null}this._invoke=function(t,e){return new Promise(function(r,s){var a={key:t,arg:e,resolve:r,reject:s,next:null};i?i=i.next=a:(n=i=a,o(t,e))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}(),n=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},i=function t(e,i,o,r,s){n(this,t),this.url="./static/img/mascot/"+e,this.x=i,this.y=o,this.width=r,this.height=s},o=function(t){var e=document.getElementById("canvas"),n=e.getContext("2d"),o=[[new i("bg.jpg",0,0,512,512)],[new i("faceparts/middle_1.png",116,209,274,149),new i("faceparts/middle_2.png",125,223,269,131),new i("faceparts/middle_3.png",124,231,283,132),new i("faceparts/middle_4.png",136,229,276,132),new i("faceparts/middle_5.png",118,207,270,150)],[new i("faceparts/top_1.png",120,69,261,188),new i("faceparts/top_2.png",87,91,313,181),new i("faceparts/top_3.png",118,104,273,159),new i("faceparts/top_4.png",121,112,266,152),new i("faceparts/top_5.png",117,97,269,176)],[new i("faceparts/bottom_1.png",0,312,512,200),new i("faceparts/bottom_2.png",0,314,512,198),new i("faceparts/bottom_3.png",6,313,469,199),new i("faceparts/bottom_4.png",4,313,508,199),new i("faceparts/bottom_5.png",12,314,500,198)],[new i("titles/title_1.png",45,20,442,92),new i("titles/title_2.png",45,23,440,96),new i("titles/title_3.png",45,23,440,93),new i("titles/title_4.png",45,23,441,93),new i("titles/title_5.png",45,23,441,93),new i("titles/title_6.png",45,23,441,93),new i("titles/title_7.png",45,26,431,94),new i("titles/title_8.png",45,20,447,108),new i("titles/title_9.png",45,20,442,101),new i("titles/title_10.png",45,22,442,99),new i("titles/title_11.png",45,19,441,99),new i("titles/title_12.png",45,16,441,102),new i("titles/title_13.png",45,21,418,92),new i("titles/title_14.png",45,23,418,90),new i("titles/title_15.png",45,21,417,106)],[new i("text-star.png",21,14,33,33)],[new i("stickers/top_left_1.png",74,108,66,59),new i("stickers/top_left_2.png",88,96,68,66)],[new i("stickers/top_right_1.png",387,137,91,67),new i("stickers/top_right_2.png",372,147,106,73),new i("stickers/top_right_3.png",393,119,76,105)],[new i("stickers/bottom_left_1.png",62,296,60,78),new i("stickers/bottom_left_2.png",49,296,85,84),new i("stickers/bottom_left_3.png",49,339,72,96)],[new i("stickers/bottom_right_1.png",385,378,85,81),new i("stickers/bottom_right_2.png",360,394,120,65)],[new i("_frame.png",0,0,512,512)]];!function i(r){var s,a,c,u=o[r],h=function(s){var a=document.createElement("img");a.crossOrigin="Anonymous",a.onload=function(c){r++,"error"===c.type?console.error("Cannot load image",s.url):n.drawImage(a,s.x,s.y,s.width,s.height),r!==o.length?i(r):t(e.toDataURL("image/png"))},a.src=s.url,(a.complete||void 0===a.complete)&&(a.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",a.src=s.url)},l=void 0;1===u.length?l=u[0]:(a=0,c=u.length-1,s=Math.floor(Math.random()*(c-a+1))+a,1===r&&(o[r+1].splice(s,1),o[r+2].splice(s,1)),l=u[s]),h(l)}(0)},r=function(t){var e,n=document.createElement("fakeelement"),i={animationend:{animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"},transitionend:{transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"}};for(e in i[t])if(void 0!==n.style[e])return i[t][e]},s=function(t){var e=document.querySelectorAll(".overlay-block-cont > p"),n=r("animationend"),i=function i(o){if(o>=e.length)setTimeout(t,1e3);else{var r=e[o];r.classList.add("in-process"),r.addEventListener(n,function t(){r.removeEventListener(n,t),r.classList.add("finished"),i(++o)})}};i(0)},a=function(t){return/^[\-\s_a-zA-Z0-9а-яА-ЯёЁ]{2,46}$/.test(t)},c=function(){var t=document.getElementById("input-name"),e=document.getElementById("input-submit"),n=500,i=null,o=!1;t.addEventListener("input",function(){var o=t.value;null!==i&&clearTimeout(i),i=setTimeout(function(){a(o)?(e.disabled&&(e.disabled=!1),console.log("Valid")):(console.log("Not valid"),e.disabled=!0)},n)}),document.forms["enter-name"].addEventListener("submit",function(e){var n,i,c;e.preventDefault(),o||(o=!0,a(t.value)&&((n=document.getElementById("generating-overlay")).classList.add("active"),i=document.getElementById("overlay-block"),c=r("transitionend"),i.addEventListener(c,function(t){"transform"===t.propertyName&&setTimeout(function(){s(function(){n.classList.remove("active"),document.getElementById("enter-screen").classList.remove("active"),document.getElementById("result").classList.add("active")})},500)})))})},u=function(t,e){l("givemesticker",h(t),e)},function(t,n,i,o){var r,s,a,c,u,h,l,p,f,d,m,v,g,y,T,E,w,_,b,A,I,S,k,C,x,D,P,O,M,R,z,L,F,N,Y,X,q,W,H,B,j,U,V,G,K,Z,J,Q,$,tt,et,nt,it,ot,rt,st,at,ct,ut,ht,lt,pt,ft,dt,mt;function vt(t,e,n){return setTimeout(wt(t,n),e)}function gt(t,e,n){return!!Array.isArray(t)&&(yt(t,n[e],n),!0)}function yt(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==o)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function Tt(e,n,i){var o="DEPRECATED METHOD: "+n+"\n"+i+" AT \n";return function(){var n=new Error("get-stack-trace"),i=n&&n.stack?n.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",r=t.console&&(t.console.warn||t.console.log);return r&&r.call(t.console,o,i),e.apply(this,arguments)}}function Et(t,e,n){var i,o=e.prototype;(i=t.prototype=Object.create(o)).constructor=t,i._super=o,n&&r(i,n)}function wt(t,e){return function(){return t.apply(e,arguments)}}function _t(t,n){return(void 0===t?"undefined":e(t))==c?t.apply(n&&n[0]||o,n):t}function bt(t,e){return t===o?e:t}function At(t,e,n){yt(Ct(e),function(e){t.addEventListener(e,n,!1)})}function It(t,e,n){yt(Ct(e),function(e){t.removeEventListener(e,n,!1)})}function St(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function kt(t,e){return t.indexOf(e)>-1}function Ct(t){return t.trim().split(/\s+/g)}function xt(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function Dt(t){return Array.prototype.slice.call(t,0)}function Pt(t,e,n){var i,o,r,s;for(i=[],o=[],r=0;r<t.length;)xt(o,s=e?t[r][e]:t[r])<0&&i.push(t[r]),o[r]=s,r++;return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function Ot(t,e){for(var n,i,r=e[0].toUpperCase()+e.slice(1),a=0;a<s.length;){if((i=(n=s[a])?n+r:e)in t)return i;a++}return o}function Mt(e){var n=e.ownerDocument||e;return n.defaultView||n.parentWindow||t}function Rt(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){_t(t.options.enable,[t])&&n.handler(e)},this.init()}function zt(t,e,n){var i=n.pointers.length,o=n.changedPointers.length,r=e&A&&i-o==0,s=e&(S|k)&&i-o==0;n.isFirst=!!r,n.isFinal=!!s,r&&(t.session={}),n.eventType=e,function(t,e){var n,i,o,r,s,a,c=t.session,u=e.pointers,p=u.length;c.firstInput||(c.firstInput=Ft(e)),p>1&&!c.firstMultiple?c.firstMultiple=Ft(e):1===p&&(c.firstMultiple=!1);n=c.firstInput,i=c.firstMultiple,o=i?i.center:n.center,r=e.center=Nt(u);e.timeStamp=l(),e.deltaTime=e.timeStamp-n.timeStamp,e.angle=Wt(o,r),e.distance=qt(o,r),function(t,e){var n=e.center,i=t.offsetDelta||{},o=t.prevDelta||{},r=t.prevInput||{};e.eventType!==A&&r.eventType!==S||(o=t.prevDelta={x:r.deltaX||0,y:r.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=o.x+(n.x-i.x),e.deltaY=o.y+(n.y-i.y)}(c,e),e.offsetDirection=Xt(e.deltaX,e.deltaY);s=Yt(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=s.x,e.overallVelocityY=s.y,e.overallVelocity=h(s.x)>h(s.y)?s.x:s.y,e.scale=i?function(t,e){return qt(e[0],e[1],F)/qt(t[0],t[1],F)}(i.pointers,u):1,e.rotation=i?function(t,e){return Wt(e[1],e[0],F)+Wt(t[1],t[0],F)}(i.pointers,u):0,e.maxPointers=c.prevInput?e.pointers.length>c.prevInput.maxPointers?e.pointers.length:c.prevInput.maxPointers:e.pointers.length,Lt(c,e);a=t.element;St(e.srcEvent.target,a)&&(a=e.srcEvent.target),e.target=a}(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function Lt(t,e){var n,i,r,s,a,c,u,l=t.lastInterval||e,p=e.timeStamp-l.timeStamp;e.eventType!=k&&(p>b||l.velocity===o)?(i=(u=Yt(p,a=e.deltaX-l.deltaX,c=e.deltaY-l.deltaY)).x,r=u.y,n=h(u.x)>h(u.y)?u.x:u.y,s=Xt(a,c),t.lastInterval=e):(n=l.velocity,i=l.velocityX,r=l.velocityY,s=l.direction),e.velocity=n,e.velocityX=i,e.velocityY=r,e.direction=s}function Ft(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:u(t.pointers[n].clientX),clientY:u(t.pointers[n].clientY)},n++;return{timeStamp:l(),pointers:e,center:Nt(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Nt(t){var e,n,i,o=t.length;if(1===o)return{x:u(t[0].clientX),y:u(t[0].clientY)};for(e=0,n=0,i=0;o>i;)e+=t[i].clientX,n+=t[i].clientY,i++;return{x:u(e/o),y:u(n/o)}}function Yt(t,e,n){return{x:e/t||0,y:n/t||0}}function Xt(t,e){return t===e?C:h(t)>=h(e)?0>t?x:D:0>e?P:O}function qt(t,e,n){n||(n=L);var i=e[n[0]]-t[n[0]],o=e[n[1]]-t[n[1]];return Math.sqrt(i*i+o*o)}function Wt(t,e,n){n||(n=L);var i=e[n[0]]-t[n[0]],o=e[n[1]]-t[n[1]];return 180*Math.atan2(o,i)/Math.PI}function Ht(){this.evEl=Y,this.evWin=X,this.pressed=!1,Rt.apply(this,arguments)}function Bt(){this.evEl=H,this.evWin=B,Rt.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function jt(){this.evTarget=U,this.evWin=V,this.started=!1,Rt.apply(this,arguments)}function Ut(){this.evTarget=K,this.targetIds={},Rt.apply(this,arguments)}function Vt(){Rt.apply(this,arguments);var t=wt(this.handler,this);this.touch=new Ut(this.manager,t),this.mouse=new Ht(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function Gt(t){var e,n,i=t.changedPointers[0];i.identifier===this.primaryTouch&&(e={x:i.clientX,y:i.clientY},this.lastTouches.push(e),n=this.lastTouches,setTimeout(function(){var t=n.indexOf(e);t>-1&&n.splice(t,1)},Z))}function Kt(t,e){this.manager=t,this.set(e)}function Zt(t){this.options=r({},this.defaults,t||{}),this.id=d++,this.manager=null,this.options.enable=bt(this.options.enable,!0),this.state=at,this.simultaneous={},this.requireFail=[]}function Jt(t){return t&pt?"cancel":t&ht?"end":t&ut?"move":t&ct?"start":""}function Qt(t){return t==O?"down":t==P?"up":t==x?"left":t==D?"right":""}function $t(t,e){var n=e.manager;return n?n.get(t):t}function te(){Zt.apply(this,arguments)}function ee(){te.apply(this,arguments),this.pX=null,this.pY=null}function ne(){te.apply(this,arguments)}function ie(){Zt.apply(this,arguments),this._timer=null,this._input=null}function oe(){te.apply(this,arguments)}function re(){te.apply(this,arguments)}function se(){Zt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ae(t,e){return(e=e||{}).recognizers=bt(e.recognizers,ae.defaults.preset),new ce(t,e)}function ce(t,e){this.options=r({},ae.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=function(t){var e=t.options.inputClass;return new(e||(g?Bt:y?Ut:v?Vt:Ht))(t,zt)}(this),this.touchAction=new Kt(this,this.options.touchAction),ue(this,!0),yt(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ue(t,e){var n,i=t.element;i.style&&(yt(t.options.cssProps,function(o,r){n=Ot(i.style,r),e?(t.oldCssProps[n]=i.style[n],i.style[n]=o):i.style[n]=t.oldCssProps[n]||""}),e||(t.oldCssProps={}))}function he(t,e){var i=n.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}s=["","webkit","Moz","MS","ms","o"],a=n.createElement("div"),c="function",u=Math.round,h=Math.abs,l=Date.now,r="function"!=typeof Object.assign?function(t){var e,n,i,r;if(t===o||null===t)throw new TypeError("Cannot convert undefined or null to object");for(e=Object(t),n=1;n<arguments.length;n++)if((i=arguments[n])!==o&&null!==i)for(r in i)i.hasOwnProperty(r)&&(e[r]=i[r]);return e}:Object.assign,p=Tt(function(t,e,n){for(var i=Object.keys(e),r=0;r<i.length;)(!n||n&&t[i[r]]===o)&&(t[i[r]]=e[i[r]]),r++;return t},"extend","Use `assign`."),f=Tt(function(t,e){return p(t,e,!0)},"merge","Use `assign`."),d=1,m=/mobile|tablet|ip(ad|hone|od)|android/i,v="ontouchstart"in t,g=Ot(t,"PointerEvent")!==o,y=v&&m.test(navigator.userAgent),T="touch",E="pen",w="mouse",_="kinect",b=25,A=1,I=2,S=4,k=8,C=1,z=(M=(x=2)|(D=4))|(R=(P=8)|(O=16)),L=["x","y"],F=["clientX","clientY"],Rt.prototype={handler:function(){},init:function(){this.evEl&&At(this.element,this.evEl,this.domHandler),this.evTarget&&At(this.target,this.evTarget,this.domHandler),this.evWin&&At(Mt(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&It(this.element,this.evEl,this.domHandler),this.evTarget&&It(this.target,this.evTarget,this.domHandler),this.evWin&&It(Mt(this.element),this.evWin,this.domHandler)}},N={mousedown:A,mousemove:I,mouseup:S},Y="mousedown",X="mousemove mouseup",Et(Ht,Rt,{handler:function(t){var e=N[t.type];e&A&&0===t.button&&(this.pressed=!0),e&I&&1!==t.which&&(e=S),this.pressed&&(e&S&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:w,srcEvent:t}))}}),q={pointerdown:A,pointermove:I,pointerup:S,pointercancel:k,pointerout:k},W={2:T,3:E,4:w,5:_},H="pointerdown",B="pointermove pointerup pointercancel",t.MSPointerEvent&&!t.PointerEvent&&(H="MSPointerDown",B="MSPointerMove MSPointerUp MSPointerCancel"),Et(Bt,Rt,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),o=q[i],r=W[t.pointerType]||t.pointerType,s=r==T,a=xt(e,t.pointerId,"pointerId");o&A&&(0===t.button||s)?0>a&&(e.push(t),a=e.length-1):o&(S|k)&&(n=!0),0>a||(e[a]=t,this.callback(this.manager,o,{pointers:e,changedPointers:[t],pointerType:r,srcEvent:t}),n&&e.splice(a,1))}}),j={touchstart:A,touchmove:I,touchend:S,touchcancel:k},U="touchstart",V="touchstart touchmove touchend touchcancel",Et(jt,Rt,{handler:function(t){var e,n=j[t.type];n===A&&(this.started=!0),this.started&&(e=function(t,e){var n=Dt(t.touches),i=Dt(t.changedTouches);return e&(S|k)&&(n=Pt(n.concat(i),"identifier",!0)),[n,i]}.call(this,t,n),n&(S|k)&&e[0].length-e[1].length==0&&(this.started=!1),this.callback(this.manager,n,{pointers:e[0],changedPointers:e[1],pointerType:T,srcEvent:t}))}}),G={touchstart:A,touchmove:I,touchend:S,touchcancel:k},K="touchstart touchmove touchend touchcancel",Et(Ut,Rt,{handler:function(t){var e=G[t.type],n=function(t,e){var n,i,o,r,s,a=Dt(t.touches),c=this.targetIds;if(e&(A|I)&&1===a.length)return c[a[0].identifier]=!0,[a,a];if(o=Dt(t.changedTouches),r=[],s=this.target,i=a.filter(function(t){return St(t.target,s)}),e===A)for(n=0;n<i.length;)c[i[n].identifier]=!0,n++;for(n=0;n<o.length;)c[o[n].identifier]&&r.push(o[n]),e&(S|k)&&delete c[o[n].identifier],n++;return r.length?[Pt(i.concat(r),"identifier",!0),r]:void 0}.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:T,srcEvent:t})}}),Z=2500,J=25,Et(Vt,Rt,{handler:function(t,e,n){var i=n.pointerType==T,o=n.pointerType==w;if(!(o&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)(function(t,e){t&A?(this.primaryTouch=e.changedPointers[0].identifier,Gt.call(this,e)):t&(S|k)&&Gt.call(this,e)}).call(this,e,n);else if(o&&function(t){var e,n,i,o,r,s;for(e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++)if(o=this.lastTouches[i],r=Math.abs(e-o.x),s=Math.abs(n-o.y),J>=r&&J>=s)return!0;return!1}.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}}),Q=Ot(a.style,"touchAction"),$=Q!==o,tt="compute",et="auto",nt="manipulation",it="none",ot="pan-x",rt="pan-y",st=function(){if(!$)return!1;var e={},n=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){e[i]=!n||t.CSS.supports("touch-action",i)}),e}(),Kt.prototype={set:function(t){t==tt&&(t=this.compute()),$&&this.manager.element.style&&st[t]&&(this.manager.element.style[Q]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return yt(this.manager.recognizers,function(e){_t(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),function(t){if(kt(t,it))return it;var e=kt(t,ot),n=kt(t,rt);return e&&n?it:e||n?e?ot:rt:kt(t,nt)?nt:et}(t.join(" "))},preventDefaults:function(t){var e,n,i,o,r,s,a,c=t.srcEvent,u=t.offsetDirection;if(this.manager.session.prevented)c.preventDefault();else if(n=kt(e=this.actions,it)&&!st[it],i=kt(e,rt)&&!st[rt],o=kt(e,ot)&&!st[ot],!(n&&(r=1===t.pointers.length,s=t.distance<2,a=t.deltaTime<250,r&&s&&a)))return o&&i?void 0:n||i&&u&M||o&&u&R?this.preventSrc(c):void 0},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}},at=1,ct=2,ut=4,lt=ht=8,pt=16,ft=32,Zt.prototype={defaults:{},set:function(t){return r(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(gt(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=$t(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return gt(t,"dropRecognizeWith",this)?this:(t=$t(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(gt(t,"requireFailure",this))return this;var e=this.requireFail;return-1===xt(e,t=$t(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(gt(t,"dropRequireFailure",this))return this;t=$t(t,this);var e=xt(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){n.manager.emit(e,t)}var n=this,i=this.state;ht>i&&e(n.options.event+Jt(i)),e(n.options.event),t.additionalEvent&&e(t.additionalEvent),i>=ht&&e(n.options.event+Jt(i))},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=ft)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(ft|at)))return!1;t++}return!0},recognize:function(t){var e=r({},t);return _t(this.options.enable,[this,e])?(this.state&(lt|pt|ft)&&(this.state=at),this.state=this.process(e),void(this.state&(ct|ut|ht|pt)&&this.tryEmit(e))):(this.reset(),void(this.state=ft))},process:function(t){},getTouchAction:function(){},reset:function(){}},Et(te,Zt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(ct|ut),o=this.attrTest(t);return i&&(n&k||!o)?e|pt:i||o?n&S?e|ht:e&ct?e|ut:ct:ft}}),Et(ee,te,{defaults:{event:"pan",threshold:10,pointers:1,direction:z},getTouchAction:function(){var t=this.options.direction,e=[];return t&M&&e.push(rt),t&R&&e.push(ot),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,o=t.direction,r=t.deltaX,s=t.deltaY;return o&e.direction||(e.direction&M?(o=0===r?C:0>r?x:D,n=r!=this.pX,i=Math.abs(t.deltaX)):(o=0===s?C:0>s?P:O,n=s!=this.pY,i=Math.abs(t.deltaY))),t.direction=o,n&&i>e.threshold&&o&e.direction},attrTest:function(t){return te.prototype.attrTest.call(this,t)&&(this.state&ct||!(this.state&ct)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=Qt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),Et(ne,te,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[it]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&ct)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),Et(ie,Zt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[et]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,o=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(S|k)&&!o)this.reset();else if(t.eventType&A)this.reset(),this._timer=vt(function(){this.state=lt,this.tryEmit()},e.time,this);else if(t.eventType&S)return lt;return ft},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===lt&&(t&&t.eventType&S?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=l(),this.manager.emit(this.options.event,this._input)))}}),Et(oe,te,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[it]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&ct)}}),Et(re,te,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:M|R,pointers:1},getTouchAction:function(){return ee.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(M|R)?e=t.overallVelocity:n&M?e=t.overallVelocityX:n&R&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&h(e)>this.options.velocity&&t.eventType&S},emit:function(t){var e=Qt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),Et(se,Zt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[nt]},process:function(t){var e,n,i=this.options,o=t.pointers.length===i.pointers,r=t.distance<i.threshold,s=t.deltaTime<i.time;if(this.reset(),t.eventType&A&&0===this.count)return this.failTimeout();if(r&&s&&o){if(t.eventType!=S)return this.failTimeout();if(e=!this.pTime||t.timeStamp-this.pTime<i.interval,n=!this.pCenter||qt(this.pCenter,t.center)<i.posThreshold,this.pTime=t.timeStamp,this.pCenter=t.center,n&&e?this.count+=1:this.count=1,this._input=t,0===this.count%i.taps)return this.hasRequireFailures()?(this._timer=vt(function(){this.state=lt,this.tryEmit()},i.interval,this),ct):lt}return ft},failTimeout:function(){return this._timer=vt(function(){this.state=ft},this.options.interval,this),ft},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==lt&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ae.VERSION="2.0.8",ae.defaults={domEvents:!1,touchAction:tt,enable:!0,inputTarget:null,inputClass:null,preset:[[oe,{enable:!1}],[ne,{enable:!1},["rotate"]],[re,{direction:M}],[ee,{direction:M},["swipe"]],[se],[se,{event:"doubletap",taps:2},["tap"]],[ie]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},dt=1,mt=2,ce.prototype={set:function(t){return r(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?mt:dt},recognize:function(t){var e,n,i,o,r=this.session;if(!r.stopped)for(this.touchAction.preventDefaults(t),n=this.recognizers,(!(i=r.curRecognizer)||i&&i.state&lt)&&(i=r.curRecognizer=null),o=0;o<n.length;)e=n[o],r.stopped===mt||i&&e!=i&&!e.canRecognizeWith(i)?e.reset():e.recognize(t),!i&&e.state&(ct|ut|ht)&&(i=r.curRecognizer=e),o++},get:function(t){if(t instanceof Zt)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(gt(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(gt(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=xt(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==o&&e!==o){var n=this.handlers;return yt(Ct(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==o){var n=this.handlers;return yt(Ct(t),function(t){e?n[t]&&n[t].splice(xt(n[t],e),1):delete n[t]}),this}},emit:function(t,e){var n,i;if(this.options.domEvents&&he(t,e),(n=this.handlers[t]&&this.handlers[t].slice())&&n.length)for(e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()},i=0;i<n.length;)n[i](e),i++},destroy:function(){this.element&&ue(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},r(ae,{INPUT_START:A,INPUT_MOVE:I,INPUT_END:S,INPUT_CANCEL:k,STATE_POSSIBLE:at,STATE_BEGAN:ct,STATE_CHANGED:ut,STATE_ENDED:ht,STATE_RECOGNIZED:lt,STATE_CANCELLED:pt,STATE_FAILED:ft,DIRECTION_NONE:C,DIRECTION_LEFT:x,DIRECTION_RIGHT:D,DIRECTION_UP:P,DIRECTION_DOWN:O,DIRECTION_HORIZONTAL:M,DIRECTION_VERTICAL:R,DIRECTION_ALL:z,Manager:ce,Input:Rt,TouchAction:Kt,TouchInput:Ut,MouseInput:Ht,PointerEventInput:Bt,TouchMouseInput:Vt,SingleTouchInput:jt,Recognizer:Zt,AttrRecognizer:te,Tap:se,Pan:ee,Swipe:re,Pinch:ne,Rotate:oe,Press:ie,on:At,off:It,each:yt,merge:f,extend:p,assign:r,inherit:Et,bindFn:wt,prefixed:Ot}),(void 0!==t?t:"undefined"!=typeof self?self:{}).Hammer=ae,"function"==typeof define&&define.amd?define(function(){return ae}):"undefined"!=typeof module&&module.exports?module.exports=ae:t["Hammer"]=ae}(window,document),function(){function e(){window.location=window.location.pathname}function n(t){t.classList.add("active")}function i(t){t.classList.remove("active")}document.addEventListener("DOMContentLoaded",function(){c(),o(function(o){var r=document.getElementById("loading-overlay"),s=!1,a=!1,c=new Hammer(document.getElementById("facebook-share"));c.on("tap",function(){s||(n(r),s=!0,t(o,function(t){if((t=JSON.parse(t)).success){var e=t.id;location.href="https://facebook.com/dialog/share?app_id=570389036652440&display=popup&href=http%3A%2F%2F8march.hpmd.ru%3Fimg%3D"+e+"&redirect_uri=http%3A%2F%2F8march.hpmd.ru"}else alert("Возникла проблема при обращении к Facebook, повторите попытку позже");i(r),s=!1}))}),new Hammer(document.getElementById("post-telegram")).on("tap",function(){a||(n(r),a=!0,u(o,function(t){(t=JSON.parse(t)).success?location.href=t.stickerpack_url:alert("Возникла проблема с загрузкой стикера, повторите попытку позже"),i(r),a=!1}))}),new Hammer(document.getElementById("restart")).on("tap",e)})})}()}();
