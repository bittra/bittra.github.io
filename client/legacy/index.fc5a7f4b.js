import{_ as e,a as t,b as n,c as r,d as o,i as a,e as i,S as s,s as c,f as u,t as f,g as l,h as p,j as d,k as h,l as m,m as g,n as v,o as y,p as w,q as b,r as E,u as S,v as R,w as x,x as N,y as C,z as O}from"./client.2268b33b.js";var T=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},j=Object.prototype.toString;function A(e){return"[object Array]"===j.call(e)}function P(e){return void 0===e}function U(t){return null!==t&&"object"===e(t)}function B(e){if("[object Object]"!==j.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function k(e){return"[object Function]"===j.call(e)}function q(t,n){if(null!=t)if("object"!==e(t)&&(t=[t]),A(t))for(var r=0,o=t.length;r<o;r++)n.call(null,t[r],r,t);else for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.call(null,t[a],a,t)}var L={isArray:A,isArrayBuffer:function(e){return"[object ArrayBuffer]"===j.call(e)},isBuffer:function(e){return null!==e&&!P(e)&&null!==e.constructor&&!P(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:U,isPlainObject:B,isUndefined:P,isDate:function(e){return"[object Date]"===j.call(e)},isFile:function(e){return"[object File]"===j.call(e)},isBlob:function(e){return"[object Blob]"===j.call(e)},isFunction:k,isStream:function(e){return U(e)&&k(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:q,merge:function e(){var t={};function n(n,r){B(t[r])&&B(n)?t[r]=e(t[r],n):B(n)?t[r]=e({},n):A(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)q(arguments[r],n);return t},extend:function(e,t,n){return q(t,(function(t,r){e[r]=n&&"function"==typeof t?T(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function D(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var F=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(L.isURLSearchParams(t))r=t.toString();else{var o=[];L.forEach(t,(function(e,t){null!=e&&(L.isArray(e)?t+="[]":e=[e],L.forEach(e,(function(e){L.isDate(e)?e=e.toISOString():L.isObject(e)&&(e=JSON.stringify(e)),o.push(D(t)+"="+D(e))})))})),r=o.join("&")}if(r){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e};function H(){this.handlers=[]}H.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},H.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},H.prototype.forEach=function(e){L.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var I=H,z=function(e,t,n){return L.forEach(n,(function(n){e=n(e,t)})),e},_=function(e){return!(!e||!e.__CANCEL__)},M=function(e,t){L.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},X=function(e,t,n,r,o){return function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,n,r,o)},J=L.isStandardBrowserEnv()?{write:function(e,t,n,r,o,a){var i=[];i.push(e+"="+encodeURIComponent(t)),L.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),L.isString(r)&&i.push("path="+r),L.isString(o)&&i.push("domain="+o),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},V=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],$=L.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=L.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},K=function(e){return new Promise((function(t,n){var r=e.data,o=e.headers;L.isFormData(r)&&delete o["Content-Type"],(L.isBlob(r)||L.isFile(r))&&r.type&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var i=e.auth.username||"",s=unescape(encodeURIComponent(e.auth.password))||"";o.Authorization="Basic "+btoa(i+":"+s)}var c,u,f=(c=e.baseURL,u=e.url,c&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(c,u):u);if(a.open(e.method.toUpperCase(),F(f,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,a.onreadystatechange=function(){if(a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))){var r,o,i,s,c,u="getAllResponseHeaders"in a?(r=a.getAllResponseHeaders(),c={},r?(L.forEach(r.split("\n"),(function(e){if(s=e.indexOf(":"),o=L.trim(e.substr(0,s)).toLowerCase(),i=L.trim(e.substr(s+1)),o){if(c[o]&&V.indexOf(o)>=0)return;c[o]="set-cookie"===o?(c[o]?c[o]:[]).concat([i]):c[o]?c[o]+", "+i:i}})),c):c):null,f={data:e.responseType&&"text"!==e.responseType?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:u,config:e,request:a};!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(X("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}(t,n,f),a=null}},a.onabort=function(){a&&(n(X("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){n(X("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(X(t,e,"ECONNABORTED",a)),a=null},L.isStandardBrowserEnv()){var l=(e.withCredentials||$(f))&&e.xsrfCookieName?J.read(e.xsrfCookieName):void 0;l&&(o[e.xsrfHeaderName]=l)}if("setRequestHeader"in a&&L.forEach(o,(function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)})),L.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),e.responseType)try{a.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){a&&(a.abort(),n(e),a=null)})),r||(r=null),a.send(r)}))},G={"Content-Type":"application/x-www-form-urlencoded"};function Q(e,t){!L.isUndefined(e)&&L.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var W,Y={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(W=K),W),transformRequest:[function(e,t){return M(t,"Accept"),M(t,"Content-Type"),L.isFormData(e)||L.isArrayBuffer(e)||L.isBuffer(e)||L.isStream(e)||L.isFile(e)||L.isBlob(e)?e:L.isArrayBufferView(e)?e.buffer:L.isURLSearchParams(e)?(Q(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):L.isObject(e)?(Q(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};Y.headers={common:{Accept:"application/json, text/plain, */*"}},L.forEach(["delete","get","head"],(function(e){Y.headers[e]={}})),L.forEach(["post","put","patch"],(function(e){Y.headers[e]=L.merge(G)}));var Z=Y;function ee(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var te=function(e){return ee(e),e.headers=e.headers||{},e.data=z(e.data,e.headers,e.transformRequest),e.headers=L.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),L.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||Z.adapter)(e).then((function(t){return ee(e),t.data=z(t.data,t.headers,e.transformResponse),t}),(function(t){return _(t)||(ee(e),t&&t.response&&(t.response.data=z(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},ne=function(e,t){t=t||{};var n={},r=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function s(e,t){return L.isPlainObject(e)&&L.isPlainObject(t)?L.merge(e,t):L.isPlainObject(t)?L.merge({},t):L.isArray(t)?t.slice():t}function c(r){L.isUndefined(t[r])?L.isUndefined(e[r])||(n[r]=s(void 0,e[r])):n[r]=s(e[r],t[r])}L.forEach(r,(function(e){L.isUndefined(t[e])||(n[e]=s(void 0,t[e]))})),L.forEach(o,c),L.forEach(a,(function(r){L.isUndefined(t[r])?L.isUndefined(e[r])||(n[r]=s(void 0,e[r])):n[r]=s(void 0,t[r])})),L.forEach(i,(function(r){r in t?n[r]=s(e[r],t[r]):r in e&&(n[r]=s(void 0,e[r]))}));var u=r.concat(o).concat(a).concat(i),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return L.forEach(f,c),n};function re(e){this.defaults=e,this.interceptors={request:new I,response:new I}}re.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=ne(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[te,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},re.prototype.getUri=function(e){return e=ne(this.defaults,e),F(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},L.forEach(["delete","get","head","options"],(function(e){re.prototype[e]=function(t,n){return this.request(ne(n||{},{method:e,url:t}))}})),L.forEach(["post","put","patch"],(function(e){re.prototype[e]=function(t,n,r){return this.request(ne(r||{},{method:e,url:t,data:n}))}}));var oe=re;function ae(e){this.message=e}ae.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},ae.prototype.__CANCEL__=!0;var ie=ae;function se(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new ie(e),t(n.reason))}))}se.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},se.source=function(){var e;return{token:new se((function(t){e=t})),cancel:e}};var ce=se;function ue(e){var t=new oe(e),n=T(oe.prototype.request,t);return L.extend(n,oe.prototype,t),L.extend(n,t),n}var fe=ue(Z);fe.Axios=oe,fe.create=function(e){return ue(ne(fe.defaults,e))},fe.Cancel=ie,fe.CancelToken=ce,fe.isCancel=_,fe.all=function(e){return Promise.all(e)},fe.spread=function(e){return function(t){return e.apply(null,t)}};var le=fe,pe=fe;le.default=pe;var de=le;function he(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,a=n(e);if(t){var i=n(this).constructor;o=Reflect.construct(a,arguments,i)}else o=a.apply(this,arguments);return r(this,o)}}function me(e){var t,n,r,o,a=e[0].name+"",i=e[0].age+"";return{c:function(){t=u("span"),n=f(a),r=l(),o=f(i)},l:function(e){t=p(e,"SPAN",{});var s=d(t);n=h(s,a),r=m(s),o=h(s,i),s.forEach(g)},m:function(e,a){v(e,t,a),y(t,n),y(t,r),y(t,o)},p:function(e,t){1&t&&a!==(a=e[0].name+"")&&w(n,a),1&t&&i!==(i=e[0].age+"")&&w(o,i)},d:function(e){e&&g(t)}}}function ge(e){var t,n,r,o,a=e[1].name+"",i=e[1].age+"";return{c:function(){t=u("span"),n=f(a),r=l(),o=f(i)},l:function(e){t=p(e,"SPAN",{});var s=d(t);n=h(s,a),r=m(s),o=h(s,i),s.forEach(g)},m:function(e,a){v(e,t,a),y(t,n),y(t,r),y(t,o)},p:function(e,t){2&t&&a!==(a=e[1].name+"")&&w(n,a),2&t&&i!==(i=e[1].age+"")&&w(o,i)},d:function(e){e&&g(t)}}}function ve(e){var t,n,r,o,a,i,s,c,w,T,j,A,P,U,B,k,q,L,D,F,H,I,z,_,M,X,J,V,$,K=e[0]&&me(e),G=e[1]&&ge(e),Q=e[5]&&function(e){var t,n,r,o,a=e[5].name+"",i=e[5].age+"";return{c:function(){t=u("span"),n=f(a),r=l(),o=f(i)},l:function(e){t=p(e,"SPAN",{});var s=d(t);n=h(s,a),r=m(s),o=h(s,i),s.forEach(g)},m:function(e,a){v(e,t,a),y(t,n),y(t,r),y(t,o)},p:b,d:function(e){e&&g(t)}}}(e);return{c:function(){t=l(),n=u("h1"),r=f("Sapper api test on IPFS"),o=l(),a=u("button"),i=f("test api"),s=l(),K&&K.c(),c=l(),w=u("hr"),T=l(),j=u("input"),A=l(),P=u("button"),U=f("test req api"),B=l(),G&&G.c(),k=l(),q=u("hr"),L=l(),D=u("input"),F=l(),H=u("input"),I=l(),z=u("button"),_=f("test POST api"),M=l(),Q&&Q.c(),X=l(),J=u("hr"),this.h()},l:function(e){E('[data-svelte="svelte-oh6yg0"]',document.head).forEach(g),t=m(e),n=p(e,"H1",{class:!0});var u=d(n);r=h(u,"Sapper api test on IPFS"),u.forEach(g),o=m(e),a=p(e,"BUTTON",{});var f=d(a);i=h(f,"test api"),f.forEach(g),s=m(e),K&&K.l(e),c=m(e),w=p(e,"HR",{}),T=m(e),j=p(e,"INPUT",{type:!0}),A=m(e),P=p(e,"BUTTON",{});var l=d(P);U=h(l,"test req api"),l.forEach(g),B=m(e),G&&G.l(e),k=m(e),q=p(e,"HR",{}),L=m(e),D=p(e,"INPUT",{type:!0}),F=m(e),H=p(e,"INPUT",{type:!0}),I=m(e),z=p(e,"BUTTON",{});var v=d(z);_=h(v,"test POST api"),v.forEach(g),M=m(e),Q&&Q.l(e),X=m(e),J=p(e,"HR",{}),this.h()},h:function(){document.title="Sapper project template",S(n,"class","svelte-1kk9opm"),S(j,"type","text"),S(D,"type","text"),S(H,"type","number")},m:function(u,f){v(u,t,f),v(u,n,f),y(n,r),v(u,o,f),v(u,a,f),y(a,i),v(u,s,f),K&&K.m(u,f),v(u,c,f),v(u,w,f),v(u,T,f),v(u,j,f),R(j,e[2]),v(u,A,f),v(u,P,f),y(P,U),v(u,B,f),G&&G.m(u,f),v(u,k,f),v(u,q,f),v(u,L,f),v(u,D,f),R(D,e[3]),v(u,F,f),v(u,H,f),R(H,e[4]),v(u,I,f),v(u,z,f),y(z,_),v(u,M,f),Q&&Q.m(u,f),v(u,X,f),v(u,J,f),V||($=[x(a,"click",e[6]),x(j,"input",e[9]),x(P,"click",e[10]),x(D,"input",e[11]),x(H,"input",e[12]),x(z,"click",e[8])],V=!0)},p:function(e,t){var n=N(t,1)[0];e[0]?K?K.p(e,n):((K=me(e)).c(),K.m(c.parentNode,c)):K&&(K.d(1),K=null),4&n&&j.value!==e[2]&&R(j,e[2]),e[1]?G?G.p(e,n):((G=ge(e)).c(),G.m(k.parentNode,k)):G&&(G.d(1),G=null),8&n&&D.value!==e[3]&&R(D,e[3]),16&n&&C(H.value)!==e[4]&&R(H,e[4]),e[5]&&Q.p(e,n)},i:b,o:b,d:function(e){e&&g(t),e&&g(n),e&&g(o),e&&g(a),e&&g(s),K&&K.d(e),e&&g(c),e&&g(w),e&&g(T),e&&g(j),e&&g(A),e&&g(P),e&&g(B),G&&G.d(e),e&&g(k),e&&g(q),e&&g(L),e&&g(D),e&&g(F),e&&g(H),e&&g(I),e&&g(z),e&&g(M),Q&&Q.d(e),e&&g(X),e&&g(J),V=!1,O($)}}}function ye(e,t,n){var r,o,a,i,s;function c(e){de.get("/api/testReq?name=".concat(e)).then((function(e){console.log(e),n(1,o=e.data)})).catch((function(e){console.log(e)})).then((function(){console.log("always..")}))}return[r,o,a,i,s,undefined,function(){de.get("/api/test").then((function(e){console.log(e),n(0,r=e.data)})).catch((function(e){console.log(e)})).then((function(){console.log("always..")}))},c,function(){de.get("/api/testPost",{params:{name:i,age:s}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},function(){a=this.value,n(2,a)},function(){return c(a)},function(){i=this.value,n(3,i)},function(){s=C(this.value),n(4,s)}]}var we=function(e){t(r,s);var n=he(r);function r(e){var t;return o(this,r),t=n.call(this),a(i(t),e,ye,ve,c,{}),t}return r}();export default we;
