try{self["workbox:core:6.1.5"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:6.1.5"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=s(e)}}class i extends n{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class r{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:i,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let a=r&&r.handler;const c=e.method;if(!a&&this.i.has(c)&&(a=this.i.get(c)),!a)return;let o;try{o=a.handle({url:s,request:e,event:t,params:i})}catch(e){o=Promise.reject(e)}const h=r&&r.catchHandler;return o instanceof Promise&&(this.o||h)&&(o=o.catch((async n=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:i})}catch(e){n=e}if(this.o)return this.o.handle({url:s,request:e,event:t});throw n}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const i=this.t.get(s.method)||[];for(const r of i){let i;const a=r.match({url:e,sameOrigin:t,request:s,event:n});if(a)return i=a,(Array.isArray(a)&&0===a.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(e,t="GET"){this.i.set(t,s(e))}setCatchHandler(e){this.o=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let a;function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}const o={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},h=e=>[o.prefix,e,o.suffix].filter((e=>e&&e.length>0)).join("-"),u=e=>e||h(o.precache),f=e=>e||h(o.runtime);function l(e,t){const s=t();return e.waitUntil(s),s}try{self["workbox:precaching:6.1.5"]&&_()}catch(e){}function d(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const i=new URL(n,location.href),r=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",s),{cacheKey:i.href,url:r.href}}class w{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class p{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this.h.getCacheKeyForURL(e.url);return s?new Request(s):e},this.h=e}}let y;async function g(e,s){let n=null;if(e.url){n=new URL(e.url).origin}if(n!==self.location.origin)throw new t("cross-origin-copy-response",{origin:n});const i=e.clone(),r={headers:new Headers(i.headers),status:i.status,statusText:i.statusText},a=s?s(r):r,c=function(){if(void 0===y){const e=new Response("");if("body"in e)try{new Response(e.body),y=!0}catch(e){y=!1}y=!1}return y}()?i.body:await i.blob();return new Response(c,a)}function v(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class m{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const R=new Set;try{self["workbox:strategies:6.1.5"]&&_()}catch(e){}function b(e){return"string"==typeof e?new Request(e):e}class q{constructor(e,t){this.u={},Object.assign(this,t),this.event=t.event,this.l=e,this.p=new m,this.g=[],this.v=[...e.plugins],this.m=new Map;for(const e of this.v)this.m.set(e,{});this.event.waitUntil(this.p.promise)}async fetch(e){const{event:s}=this;let n=b(e);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const i=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:s})}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const r=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this.l.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(e){throw i&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:i.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=b(e);let s;const{cacheName:n,matchOptions:i}=this.l,r=await this.getCacheKey(t,"read"),a=c({},i,{cacheName:n});s=await caches.match(r,a);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:i,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,s){const n=b(e);var i;await(i=0,new Promise((e=>setTimeout(e,i))));const r=await this.getCacheKey(n,"write");if(!s)throw new t("cache-put-with-no-response",{url:(a=r.url,new URL(String(a),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var a;const o=await this.R(s);if(!o)return!1;const{cacheName:h,matchOptions:u}=this.l,f=await self.caches.open(h),l=this.hasCallback("cacheDidUpdate"),d=l?await async function(e,t,s,n){const i=v(t.url,s);if(t.url===i)return e.match(t,n);const r=c({},n,{ignoreSearch:!0}),a=await e.keys(t,r);for(const t of a)if(i===v(t.url,s))return e.match(t,n)}(f,r.clone(),["__WB_REVISION__"],u):null;try{await f.put(r,l?o.clone():o)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of R)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:h,oldResponse:d,newResponse:o.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){if(!this.u[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=b(await e({mode:t,request:s,event:this.event,params:this.params}));this.u[t]=s}return this.u[t]}hasCallback(e){for(const t of this.l.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this.l.plugins)if("function"==typeof t[e]){const s=this.m.get(t),n=n=>{const i=c({},n,{state:s});return t[e](i)};yield n}}waitUntil(e){return this.g.push(e),e}async doneWaiting(){let e;for(;e=this.g.shift();)await e}destroy(){this.p.resolve()}async R(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class U extends class{constructor(e={}){this.cacheName=f(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,i=new q(this,{event:t,request:s,params:n}),r=this.q(i,s,t);return[r,this.U(r,i,s,t)]}async q(e,s,n){let i;await e.runCallbacks("handlerWillStart",{event:n,request:s});try{if(i=await this.L(s,e),!i||"error"===i.type)throw new t("no-response",{url:s.url})}catch(t){for(const r of e.iterateCallbacks("handlerDidError"))if(i=await r({error:t,event:n,request:s}),i)break;if(!i)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))i=await t({event:n,request:s,response:i});return i}async U(e,t,s,n){let i,r;try{i=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:i}),await t.doneWaiting()}catch(e){r=e}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:i,error:r}),t.destroy(),r)throw r}}{constructor(e={}){e.cacheName=u(e.cacheName),super(e),this._=!1!==e.fallbackToNetwork,this.plugins.push(U.copyRedirectedCacheableResponsesPlugin)}async L(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this.C(e,t):await this.N(e,t))}async N(e,s){let n;if(!this._)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return n=await s.fetch(e),n}async C(e,s){this.O();const n=await s.fetch(e);if(!await s.cachePut(e,n.clone()))throw new t("bad-precaching-response",{url:e.url,status:n.status});return n}O(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==U.copyRedirectedCacheableResponsesPlugin&&(n===U.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(U.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}U.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},U.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await g(e):e};class L{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this.k=new Map,this.T=new Map,this.W=new Map,this.l=new U({cacheName:u(e),plugins:[...t,new p({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.l}precache(e){this.addToCacheList(e),this.K||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.K=!0)}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:i}=d(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this.k.has(i)&&this.k.get(i)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this.k.get(i),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this.W.has(e)&&this.W.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:i});this.W.set(e,n.integrity)}if(this.k.set(i,e),this.T.set(i,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return l(e,(async()=>{const t=new w;this.strategy.plugins.push(t);for(const[t,s]of this.k){const n=this.W.get(s),i=this.T.get(t),r=new Request(t,{integrity:n,cache:i,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return l(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this.k.values()),n=[];for(const i of t)s.has(i.url)||(await e.delete(i),n.push(i.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this.k}getCachedURLs(){return[...this.k.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.k.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=c({cacheKey:s},t.params),this.strategy.handle(t))}}let C;const N=()=>(C||(C=new L),C);class x extends n{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const e of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:i}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const a=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield a.href,s&&a.pathname.endsWith("/")){const e=new URL(a.href);e.pathname+=s,yield e.href}if(n){const e=new URL(a.href);e.pathname+=".html",yield e.href}if(i){const e=i({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(e);if(t)return{cacheKey:t}}}),e.strategy)}}function E(e){const s=N();!function(e,s,c){let o;if("string"==typeof e){const t=new URL(e,location.href);o=new n((({url:e})=>e.href===t.href),s,c)}else if(e instanceof RegExp)o=new i(e,s,c);else if("function"==typeof e)o=new n(e,s,c);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});o=e}(a||(a=new r,a.addFetchListener(),a.addCacheListener()),a).registerRoute(o)}(new x(s,e))}var O;self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),O={},function(e){N().precache(e)}([{url:"app.05b50f75.js",revision:"12e57ba88dd0e79a5228da2df2596896"},{url:"bayer16.f10d049b.png",revision:"8cef64ec2dd0d17ca50bbc59615d155a"},{url:"bayer2.1c3ec162.png",revision:"968fe4c276ad5d801e6c07d98c0a92d3"},{url:"bayer4.caa71034.png",revision:"59cf1361a6be7cb845e446fb15fd0982"},{url:"bayer8.a41828a5.png",revision:"cf9f1ed28358b1928f175611f42efeea"},{url:"checker2.1ceacb2f.png",revision:"7bcd894e4561790c2dc90cbc11f76d0e"},{url:"diagonals4.8fa32c60.png",revision:"e36a48c1d0a09e1ac32ebdf9af0942d8"},{url:"icon_192.fec6fadb.png",revision:"b0834345dac544507f586425b00c96dd"},{url:"icon_256.15a860e6.png",revision:"8d4ba4050a0cd75009aa5b0b3d8898fa"},{url:"icon_512.d0a70fee.png",revision:"a0aef487855184e5e960fec818985300"},{url:"icon.154a8e1f.png",revision:"65216246983c4ab015828786e700d680"},{url:"image-decode.3594c767.js",revision:"c4df2af1a8fde325a8c586e7a5e933ec"},{url:"index.html",revision:"fcec315e451462c6d8e473c1de4dc439"},{url:"manifest.webmanifest",revision:"83ff298954fe91e1ebc02cd7f5d7ae76"},{url:"src.93af5589.css",revision:"3fe4e728d10b97152c091e9b0fc1891d"},{url:"src.c3aabfdf.js",revision:"503a2aea04210f3b9df5f9d5cd309cc1"}]),E(O);
