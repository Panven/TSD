(function(e){function t(t){for(var r,c,a=t[0],i=t[1],f=t[2],s=0,l=[];s<a.length;s++)c=a[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(l.length)l.shift()();return u.push.apply(u,f||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},u=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var f=0;f<a.length;f++)t(a[f]);var p=i;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0958":function(e,t,n){"use strict";n("7818")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,u,c){var a=Object(r["f"])("Currency");return Object(r["e"])(),Object(r["b"])(a)}function u(e,t,n,o,u,c){return Object(r["e"])(),Object(r["c"])("div",null,[Object(r["d"])("div",null,"USD: "+Object(r["g"])(u.usd),1),Object(r["d"])("div",null,"EUR: "+Object(r["g"])(u.eur),1)])}var c=n("1da1"),a=(n("96cf"),n("d3b7"),n("159b"),n("bc3a")),i=n.n(a),f={name:"Currency",data:function(){return{eur:0,usd:0}},methods:{getData:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://api.nbp.pl/api/exchangerates/tables/A").then((function(t){t.data[0].rates.forEach((function(t){"USD"==t.code?e.usd=t.mid:"EUR"==t.code&&(e.eur=t.mid)}))}));case 2:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.getData()}},p=n("d959"),s=n.n(p);const l=s()(f,[["render",u]]);var d=l,b={name:"App",components:{Currency:d}};n("0958");const v=s()(b,[["render",o]]);var h=v;Object(r["a"])(h).mount("#app")},7818:function(e,t,n){}});
//# sourceMappingURL=app.a33c6a05.js.map