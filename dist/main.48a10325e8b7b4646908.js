!function(e){function t(t){for(var r,c,a=t[0],i=t[1],u=t[2],d=0,f=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&f.push(s[c][0]),s[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(l&&l(t);f.length;)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==s[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},s={main:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=i;o.push(["./src/index.js","vendors"]),n()}({"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */function(e,t,n){(e.exports=n(/*! ../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,"body {\n  background: gray; }\n",""])},"./src/api/baseUrl.js":
/*!****************************!*\
  !*** ./src/api/baseUrl.js ***!
  \****************************/
/*! exports provided: default */function(e,t,n){"use strict";function r(){return function(e,t){t||(t=window.location.href);e=e.replace(/[[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}("useMockApi")?"http://localhost:3001/":"/"}n.r(t),n.d(t,"default",(function(){return r}))},"./src/api/userApi.js":
/*!****************************!*\
  !*** ./src/api/userApi.js ***!
  \****************************/
/*! exports provided: getUsers, deleteUser */function(e,t,n){"use strict";n.r(t),n.d(t,"getUsers",(function(){return o})),n.d(t,"deleteUser",(function(){return c}));n(/*! whatwg-fetch */"./node_modules/whatwg-fetch/fetch.js");var r=n(/*! ./baseUrl */"./src/api/baseUrl.js"),s=Object(r.default)();function o(){return fetch(s+"users").then(a,i)}function c(e){return t="users/".concat(e),n=new Request(s+t,{method:"DELETE"}),fetch(n).then(a,i);var t,n}function a(e){return e.json()}function i(e){console.log(e)}},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */function(e,t,n){"use strict";n.r(t),function(e){var t=n(/*! ./api/userApi */"./src/api/userApi.js");n(/*! ./styles/main.scss */"./src/styles/main.scss");Object(t.getUsers)().then((function(n){var r="";n.forEach((function(e){r+='<tr>\n      <td><a href="#" data-id="'.concat(e.id,'" class="deleteUser">Delete</a></td>\n      <td>').concat(e.id,"</td>\n      <td>").concat(e.firstName,"</td>\n      <td>").concat(e.lastName,"</td>\n      <td>").concat(e.email,"</td>\n      </tr>")})),e.window.document.getElementById("users").innerHTML=r;var s=e.document.getElementsByClassName("deleteUser");Array.from(s,(function(e){e.onclick=function(e){var n=e.target;e.preventDefault(),Object(t.deleteUser)(n.attributes["data-id"].value);var r=n.parentNode.parentNode;r.parentNode.removeChild(r)}}))}))}.call(this,n(/*! ./../node_modules/webpack/buildin/global.js */"./node_modules/webpack/buildin/global.js"))},"./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */function(e,t,n){var r=n(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");"string"==typeof r&&(r=[[e.i,r,""]]);var s={insert:"head",singleton:!1};n(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(r,s);r.locals&&(e.exports=r.locals)}});
//# sourceMappingURL=main.48a10325e8b7b4646908.js.map