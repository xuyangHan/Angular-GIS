(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~previewSymbol2D-js~previewSymbol3D-js"],{

/***/ "0ynT":
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/core/colorUtils.js ***!
  \******************************************************/
/*! exports provided: darken, toHSV, toLAB, toLCH, toRGB, toXYZ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darken", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHSV", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLAB", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLCH", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRGB", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toXYZ", function() { return w; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function n(n){return"r"in n&&"g"in n&&"b"in n}function t(n){return"h"in n&&"s"in n&&"v"in n}function r(n){return"l"in n&&"a"in n&&"b"in n}function u(n){return"l"in n&&"c"in n&&"h"in n}function o(n){return"x"in n&&"y"in n&&"z"in n}const e=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],c=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function i(n,t){const r=[];let u,o;if(n[0].length!==t.length)throw"dimensions do not match";const e=n.length,c=n[0].length;let i=0;for(u=0;u<e;u++){for(i=0,o=0;o<c;o++)i+=n[u][o]*t[o];r.push(i)}return r}function a(n){const t=[n.r/255,n.g/255,n.b/255].map((n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4)),r=i(e,t);return{x:100*r[0],y:100*r[1],z:100*r[2]}}function h(n){const t=i(c,[n.x/100,n.y/100,n.z/100]).map((n=>{const t=n<=.0031308?12.92*n:1.055*n**(1/2.4)-.055;return Math.min(1,Math.max(t,0))}));return{r:Math.round(255*t[0]),g:Math.round(255*t[1]),b:Math.round(255*t[2])}}function s(n){const t=[n.x/95.047,n.y/100,n.z/108.883].map((n=>n>(6/29)**3?n**(1/3):1/3*(29/6)**2*n+4/29));return{l:116*t[1]-16,a:500*(t[0]-t[1]),b:200*(t[1]-t[2])}}function f(n){const t=n.l,r=[(t+16)/116+n.a/500,(t+16)/116,(t+16)/116-n.b/200].map((n=>n>6/29?n**3:3*(6/29)**2*(n-4/29)));return{x:95.047*r[0],y:100*r[1],z:108.883*r[2]}}function b(n){const t=n.l,r=n.a,u=n.b,o=Math.sqrt(r*r+u*u);let e=Math.atan2(u,r);return e=e>0?e:e+2*Math.PI,{l:t,c:o,h:e}}function l(n){const t=n.l,r=n.c,u=n.h;return{l:t,a:r*Math.cos(u),b:r*Math.sin(u)}}function g(n){return s(a(n))}function M(n){return h(f(n))}function m(n){return b(s(a(n)))}function d(n){return h(f(l(n)))}function x(n){const t=n.r,r=n.g,u=n.b,o=Math.max(t,r,u),e=o-Math.min(t,r,u);let c=o,i=0===e?0:o===t?(r-u)/e%6:o===r?(u-t)/e+2:(t-r)/e+4,a=0===e?0:e/c;return i<0&&(i+=6),i*=60,a*=100,c*=100/255,{h:i,s:a,v:c}}function k(n){const t=(n.h+360)%360/60,r=n.s/100,u=n.v/100*255,o=u*r,e=o*(1-Math.abs(t%2-1));let c;switch(Math.floor(t)){case 0:c={r:o,g:e,b:0};break;case 1:c={r:e,g:o,b:0};break;case 2:c={r:0,g:o,b:e};break;case 3:c={r:0,g:e,b:o};break;case 4:c={r:e,g:0,b:o};break;case 5:case 6:c={r:o,g:0,b:e};break;default:c={r:0,g:0,b:0}}return c.r=Math.round(c.r+u-o),c.g=Math.round(c.g+u-o),c.b=Math.round(c.b+u-o),c}function p(e){return n(e)?e:u(e)?d(e):r(e)?M(e):o(e)?h(e):t(e)?k(e):e}function y(n){if(t(n))return n;return x(p(n))}function z(n){return r(n)?n:g(p(n))}function v(n){return u(n)?n:m(p(n))}function w(n){return o(n)?n:a(p(n))}function q(n,t){const r=g(n);return r.l*=1-t,M(r)}


/***/ }),

/***/ "7wGN":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/svgUtils.js ***!
  \***************************************************************/
/*! exports provided: computeBBox, generateFillAttributes, generateStrokeAttributes, generateTextAttributes, getBoundingBox, getTransformMatrix, renderDef, renderSVG, renderShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeBBox", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFillAttributes", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateStrokeAttributes", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTextAttributes", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoundingBox", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformMatrix", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderDef", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSVG", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderShape", function() { return b; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Color.js */ "nvBr");
/* harmony import */ var _widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/support/widgetUtils.js */ "cCpn");
/* harmony import */ var _chunks_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../chunks/index.js */ "Jv1m");
/* harmony import */ var _chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../chunks/mat2d.js */ "opr1");
/* harmony import */ var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../chunks/mat2df32.js */ "LGNZ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const h="http://www.w3.org/2000/svg";let c=0,f=0;const d=Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("android"),y=Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("chrome")||d&&d>=4?"auto":"optimizeLegibility",u={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},p=/([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g;let g={},x={};const m={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]},w=Math.PI;function k(t,e){const i=t*(w/180);return Math.abs(e*Math.sin(i))+Math.abs(e*Math.cos(i))}function j(t){return t.map((t=>`${t.command} ${t.values.join(" ")}`)).join(" ").trim()}function b(t,e,o,r){if(t){if("circle"===t.type)return Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_4__["j"])("circle",{fill:e,"fill-rule":"evenodd",stroke:o.color,"stroke-width":o.width,"stroke-linecap":o.cap,"stroke-linejoin":o.join,"stroke-dasharray":o.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,r:t.r});if("ellipse"===t.type)return Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_4__["j"])("ellipse",{fill:e,"fill-rule":"evenodd",stroke:o.color,"stroke-width":o.width,"stroke-linecap":o.cap,"stroke-linejoin":o.join,"stroke-dasharray":o.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,rx:t.rx,ry:t.ry});if("rect"===t.type)return Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_4__["j"])("rect",{fill:e,"fill-rule":"evenodd",stroke:o.color,"stroke-width":o.width,"stroke-linecap":o.cap,"stroke-linejoin":o.join,"stroke-dasharray":o.dashArray,"stroke-miterlimit":"4",x:t.x,y:t.y,width:t.width,height:t.height});if("image"===t.type)return Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_4__["j"])("image",{href:t.src,x:t.x,y:t.y,width:t.width,height:t.height,preserveAspectRatio:"none"});if("path"===t.type){const r="string"!=typeof t.path?j(t.path):t.path;return Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_4__["j"])("path",{fill:e,"fill-rule":"evenodd",stroke:o.color,"stroke-width":o.width,"stroke-linecap":o.cap,"stroke-linejoin":o.join,"stroke-dasharray":o.dashArray,"stroke-miterlimit":"4",d:r})}if("text"===t.type)return Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_4__["j"])("text",{fill:e,"fill-rule":"evenodd",stroke:o.color,"stroke-width":o.width,"stroke-linecap":o.cap,"stroke-linejoin":o.join,"stroke-dasharray":o.dashArray,"stroke-miterlimit":"4","text-anchor":r.align,"text-decoration":r.decoration,kerning:r.kerning,rotate:r.rotate,"text-rendering":y,"font-style":r.font.style,"font-variant":r.font.variant,"font-weight":r.font.weight,"font-size":r.font.size,"font-family":r.font.family,x:t.x,y:t.y},t.text)}return null}function v(t){const i={fill:"none",pattern:null,linearGradient:null};if(t)if("type"in t&&"pattern"===t.type){const e="patternId-"+ ++c;i.fill=`url(#${e})`,i.pattern={id:e,x:t.x,y:t.y,width:t.width,height:t.height,image:{x:0,y:0,width:t.width,height:t.height,href:t.src}}}else if("type"in t&&"linear"===t.type){const o="linearGradientId-"+ ++f;i.fill=`url(#${o})`,i.linearGradient={id:o,x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2,stops:t.colors.map((t=>({offset:t.offset,color:t.color&&new _Color_js__WEBPACK_IMPORTED_MODULE_2__["default"](t.color).toString()})))}}else if(t){const o=new _Color_js__WEBPACK_IMPORTED_MODULE_2__["default"](t);i.fill=o.toString()}return i}function A(t){const i={color:"none",width:1,cap:"butt",join:"4",dashArray:"none"};if(t&&(null!=t.width&&(i.width=t.width),t.cap&&(i.cap=t.cap),t.join&&(i.join=t.join.toString()),t.color&&(i.color=new _Color_js__WEBPACK_IMPORTED_MODULE_2__["default"](t.color).toString()),t.style)){let e=null;if(t.style in m&&(e=m[t.style]),Array.isArray(e)){e=e.slice(0);for(let i=0;i<e.length;++i)e[i]*=t.width;if("butt"!==t.cap){for(let i=0;i<e.length;i+=2)e[i]-=t.width,e[i]<1&&(e[i]=1);for(let i=1;i<e.length;i+=2)e[i]+=t.width}e=e.join(",")}i.dashArray=e}return i}function M(t,e){const i={align:null,decoration:null,kerning:null,rotate:null,font:{style:null,variant:null,weight:null,size:null,family:null}};return t&&(i.align=t.align,i.decoration=t.decoration,i.kerning=t.kerning?"auto":"0",i.rotate=t.rotated?"90":"0",i.font.style=e.style||"normal",i.font.variant=e.variant||"normal",i.font.weight=e.weight||"normal",i.font.size=e.size&&e.size.toString()||"10pt",i.font.family=e.family||"serif"),i}function I(t){const{pattern:e,linearGradient:o}=t;if(e)return Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_4__["j"])("pattern",{id:e.id,patternUnits:"userSpaceOnUse",x:e.x,y:e.y,width:e.width,height:e.height},Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_4__["j"])("image",{x:e.image.x,y:e.image.y,width:e.image.width,height:e.image.height,href:e.image.href}));if(o){const t=o.stops.map(((t,e)=>Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_4__["j"])("stop",{key:`${e}-stop`,offset:t.offset,"stop-color":t.color})));return Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_4__["j"])("linearGradient",{id:o.id,gradientUnits:"userSpaceOnUse",x1:o.x1,y1:o.y1,x2:o.x2,y2:o.y2},t)}return null}function N(t,e,i){return Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_5__["t"])(t,Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_5__["i"])(t),[e,i])}function z(t,e,i,o,r){return Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_5__["s"])(t,Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_5__["i"])(t),[e,i]),t[4]=t[4]*e-o*e+o,t[5]=t[5]*i-r*i+r,t}function $(t,e,i,o){const r=e%360*Math.PI/180;Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_5__["r"])(t,Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_5__["i"])(t),r);const s=Math.cos(r),l=Math.sin(r),h=t[4],c=t[5];return t[4]=h*s-c*l+o*l-i*s+i,t[5]=c*s+h*l-i*l-o*s+o,t}function S(t,e){g&&"left"in g?(g.left>t&&(g.left=t),g.right<t&&(g.right=t),g.top>e&&(g.top=e),g.bottom<e&&(g.bottom=e)):g={left:t,bottom:e,right:t,top:e}}function G(t){const e=t.args,i=e.length;let o;switch(t.action){case"M":case"L":case"C":case"S":case"Q":case"T":for(o=0;o<i;o+=2)S(e[o],e[o+1]);x.x=e[i-2],x.y=e[i-1];break;case"H":for(o=0;o<i;++o)S(e[o],x.y);x.x=e[i-1];break;case"V":for(o=0;o<i;++o)S(x.x,e[o]);x.y=e[i-1];break;case"m":{let t=0;"x"in x||(S(x.x=e[0],x.y=e[1]),t=2);for(o=t;o<i;o+=2)S(x.x+=e[o],x.y+=e[o+1]);break}case"l":case"t":for(o=0;o<i;o+=2)S(x.x+=e[o],x.y+=e[o+1]);break;case"h":for(o=0;o<i;++o)S(x.x+=e[o],x.y);break;case"v":for(o=0;o<i;++o)S(x.x,x.y+=e[o]);break;case"c":for(o=0;o<i;o+=6)S(x.x+e[o],x.y+e[o+1]),S(x.x+e[o+2],x.y+e[o+3]),S(x.x+=e[o+4],x.y+=e[o+5]);break;case"s":case"q":for(o=0;o<i;o+=4)S(x.x+e[o],x.y+e[o+1]),S(x.x+=e[o+2],x.y+=e[o+3]);break;case"A":for(o=0;o<i;o+=7)S(e[o+5],e[o+6]);x.x=e[i-2],x.y=e[i-1];break;case"a":for(o=0;o<i;o+=7)S(x.x+=e[o+5],x.y+=e[o+6])}}function E(t,e,i){const o=u[t.toLowerCase()];let r;"number"==typeof o&&(o?e.length>=o&&(r={action:t,args:e.slice(0,e.length-e.length%o)},i.push(r),G(r)):(r={action:t,args:[]},i.push(r),G(r)))}function T(t){const e=("string"!=typeof t.path?j(t.path):t.path).match(p),i=[];if(g={},x={},!e)return null;let o="",r=[];const n=e.length;for(let a=0;a<n;++a){const t=e[a],n=parseFloat(t);isNaN(n)?(o&&E(o,r,i),r=[],o=t):r.push(n)}E(o,r,i);const s={x:0,y:0,width:0,height:0};return g&&"left"in g&&(s.x=g.left,s.y=g.top,s.width=g.right-g.left,s.height=g.bottom-g.top),s}function U(t){const e={x:0,y:0,width:0,height:0};if("circle"===t.type)e.x=t.cx-t.r,e.y=t.cy-t.r,e.width=2*t.r,e.height=2*t.r;else if("ellipse"===t.type)e.x=t.cx-t.rx,e.y=t.cy-t.ry,e.width=2*t.rx,e.height=2*t.ry;else if("image"===t.type||"rect"===t.type)e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height;else if("path"===t.type){const i=T(t);e.x=i.x,e.y=i.y,e.width=i.width,e.height=i.height}return e}function F(t){const e={x:0,y:0,width:0,height:0};let i=null,o=Number.NEGATIVE_INFINITY,r=Number.NEGATIVE_INFINITY;for(const n of t)i?(i.x=Math.min(i.x,n.x),i.y=Math.min(i.y,n.y),o=Math.max(o,n.x+n.width),r=Math.max(r,n.y+n.height)):(i=e,i.x=n.x,i.y=n.y,o=n.x+n.width,r=n.y+n.height);return i&&(i.width=o-i.x,i.height=r-i.y),i}function L(t,e,i,r,n,s,a,h){const c=(a&&s?k(s,e):e)/2,f=(a&&s?k(s,i):i)/2,d=t.width+r,y=t.height+r,u=Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),p=Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_6__["c"])();let g=!1;if(n&&0!==d&&0!==y){const t=d/y,r=e>i?e:i;let n=1,s=1;isNaN(r)||(t>1?(n=r/d,s=r/t/y):(s=r/y,n=r*t/d)),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_5__["m"])(p,p,z(u,n,s,c,f)),g=!0}const x=t.x+(d-r)/2,m=t.y+(y-r)/2;if(Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_5__["m"])(p,p,N(u,c-x,f-m)),!g&&(d>e||y>i)){const t=d/e>y/i,r=(t?e:i)/(t?d:y);Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_5__["m"])(p,p,z(u,r,r,x,m))}return s&&Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_5__["m"])(p,p,$(u,s,x,m)),h&&Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_5__["m"])(p,p,N(u,h[0],h[1])),`matrix(${p[0]},${p[1]},${p[2]},${p[3]},${p[4]},${p[5]})`}function C(t,e,o,r){const n=[],s=[];for(const a of t){const t=[],l=[];let h=0,c=0,f=0;for(const e of a){const{shape:i,fill:o,stroke:r,font:s,offset:a}=e;h+=r&&r.width||0;const d=v(o),y=A(r),u="text"===i.type?M(i,s):null;n.push(I(d)),t.push(b(i,d.fill,y,u)),l.push(U(i)),a&&(c+=a[0],f+=a[1])}const d=L(F(l),e,o,h,null==r?void 0:r.scale,null==r?void 0:r.rotation,null==r?void 0:r.useRotationSize,[c,f]);s.push(Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_4__["j"])("g",{transform:d},t))}return null!=r&&r.useRotationSize&&null!=r&&r.rotation&&(e=k(null==r?void 0:r.rotation,e),o=k(null==r?void 0:r.rotation,o)),Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_4__["j"])("svg",{xmlns:h,width:e,height:o},Object(_chunks_index_js__WEBPACK_IMPORTED_MODULE_4__["j"])("defs",null,n),s)}


/***/ }),

/***/ "IAPW":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/previewUtils.js ***!
  \*******************************************************************/
/*! exports provided: adjustColorBrightness, adjustColorComponentBrightness, getConeShapes, getCubeShapes, getCylinderShapes, getDiamondShapes, getExtrudeSymbolShapes, getInvertedConeShapes, getPathSymbolShapes, getTetrahedronShapes, getWaterSymbolShapes, shapes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustColorBrightness", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustColorComponentBrightness", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConeShapes", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCubeShapes", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCylinderShapes", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDiamondShapes", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtrudeSymbolShapes", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInvertedConeShapes", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPathSymbolShapes", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTetrahedronShapes", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWaterSymbolShapes", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shapes", function() { return t; });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Color.js */ "nvBr");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t={fill:[{type:"path",path:"M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 Z"}],squareFill:[{type:"path",path:"M -10,-10 L 10,-10 L 10,10 L -10,10 L -10,-10 Z"}],pathSymbol3DLayer:[{type:"path",path:"M 3,12 L 12,0 L 11,-2 L -4,5 L -1,5 L 1,7 L 3,10 L 3,12 Z"},{type:"circle",cx:-2,cy:10,r:5}],extrudeSymbol3DLayer:[{type:"path",path:"M -7,-5 L -2,0 L -2,7 L -7,3 L -7,-5 Z"},{type:"path",path:"M -2,0 L -2,7 L 10,-3 L 10,-10 L -2,0 Z"},{type:"path",path:"M -7,-5 L -2,0 L 10,-10 L -2,-10 L -7,-5 Z"}],cone:[{type:"path",path:"M 0,-10 L -8,5 L -4,6.5 L 0,7 L 4,6.5 L 8,5 Z"}],tallCone:[{type:"path",path:"M 0,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 0,-9 Z"}],invertedCone:[{type:"path",path:"M 0,7 L -8,-8 L 8,-8 Z"},{type:"path",path:"M -8,-8 L -4,-9.5 L 0,-10 L 4,-9.5 L 8,-8 L 4,-6.5 L 0,-6 L -4,-6.5 Z"}],cube:[{type:"path",path:"M -10,-7 L 0,-12 L 10,-7 L 0,-2 L -10,-7 Z"},{type:"path",path:"M -10,-7 L 0,-2 L 0,12 L -10,7 L -10,-7 Z"},{type:"path",path:"M 0,-2 L 10,-7 L 10,7 L 0,12 L 0,-2 Z"}],tallCube:[{type:"path",path:"M -3.5,-8.5 L 0,-9.5 L 3.5,-8.5 L 0,-7.5 L -3.5,-8.5 Z"},{type:"path",path:"M -3.5,-8.5 L 0,-7.5 L 0,9 L -3.5,8 L -3.5,-8.5 Z"},{type:"path",path:"M 0,-7.5 L 3.5,-8.5 L 3.5,8 L 0,9 L 0,-7.5 Z"}],cylinder:[{type:"path",path:"M -8,-9 L -8,7 L -4,8.5 L 0,9 L 4,8.5 L 8,7 L 8,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:8,ry:2}],tallCylinder:[{type:"path",path:"M -3.5,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 3.5,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:3.5,ry:1}],diamond:[{type:"path",path:"M 0,-10 L 10,-1 L -1,1 L 0,-10 Z"},{type:"path",path:"M 0,-10 L -1,1 L -8,-1 L 0,-10 Z"},{type:"path",path:"M -1,1 L 0,10 L -8,-1 L -1,1 Z"},{type:"path",path:"M -1,0 L 0,10 L 10,-1 L -1,1 Z"}],tetrahedron:[{type:"path",path:"M 0,-10 L 10,7 L 0,0 L 0,-10 Z"},{type:"path",path:"M 0,-10 L 0,0 L -8,7 L 0,-10 Z"},{type:"path",path:"M 10,7 L 0,0 L -8,7 L 10,7 Z"}]};function e(a,t,e){const m=22;let c=m,p=m;a<1?c*=.75:a>1&&(p*=1.25);const L=0,n=0;let o=m,s=m;t&&e&&(c=p=o=s=0);return[{type:"path",path:[{command:"M",values:[o,L]},{command:"L",values:[e?o:.875*o,L]},{command:"L",values:[e?c-.5*o:n,p-.5*s]},{command:"L",values:[c-.5*o,p-.5*s]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[o,L]},{command:"L",values:[o,t?L:.125*s]},{command:"L",values:[c-.5*o,t?p-.5*s:s]},{command:"L",values:[c-.5*o,p-.5*s]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[c-.5*o,p-.5*s]},{command:"L",values:[e?c-.5*o:n,p-.5*s]},{command:"L",values:[e?c-.5*o:n,t?p-.5*s:s]},{command:"L",values:[c-.5*o,t?p-.5*s:s]},{command:"Z",values:[]}]}]}function m(a){const t=22,e=.5*a,m=0,c=0;return[{type:"path",path:[{command:"M",values:[c,.7*t*.5]},{command:"L",values:[.3*t,.7*t]},{command:"L",values:[.3*t,.7*t+e]},{command:"L",values:[c,.7*t+e-.7*t*.5]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.3*t,.7*t]},{command:"L",values:[.3*t,.7*t+e]},{command:"L",values:[t,e]},{command:"L",values:[t,m]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.3*t,m]},{command:"L",values:[t,m]},{command:"L",values:[.3*t,.7*t]},{command:"L",values:[c,.7*t*.5]},{command:"Z",values:[]}]}]}function c(){return[{type:"path",path:"M80,80.2v-27c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4C8.3,59.3,5.7,58,3.9,56c-1.1-1.2-2.4-2.1-3.9-2.8v27"},{type:"path",path:"M11,59.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8v-24c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-1.1-1.2-2.4-2.1-3.9-2.8v24c1.5,0.7,2.8,1.6,3.9,2.8C5.7,58,8.3,59.3,11,59.4z"},{type:"path",path:"M11,35.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8V3.6c-1.5,0.7-2.8,1.6-3.9,2.8c-2.2,2.1-4.6,3.4-7.1,3.4s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6S42.5,9.9,40,9.9s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.5,0-5-1.3-7.1-3.4C2.8,5.3,1.4,4.3,0,3.6v25.6c1.5,0.7,2.8,1.6,3.9,2.8C5.7,34.1,8.3,35.3,11,35.4z"}]}function p(a,t){let e=t?20:a;const m=t?4:6;e-=e<=22?.5*m:m;const c=0,p=0,L=t?.35*e:.5*e;return[{type:"path",path:[{command:"M",values:[.5*e,c]},{command:"L",values:[e,.5*L]},{command:"L",values:[.5*e,L]},{command:"L",values:[p,.5*L]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[c,.5*L]},{command:"L",values:[.5*e,L]},{command:"L",values:[.5*e,a]},{command:"L",values:[p,a-.5*L]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.5*e,L]},{command:"L",values:[.5*e,a]},{command:"L",values:[e,a-.5*L]},{command:"L",values:[e,.5*L]},{command:"Z",values:[]}]}]}function L(a,t){let e=t?20:a;const m=t?4:6;e-=e<=22?.5*m:m;const c=.5*e,p=.15*e,L=0,n=a-p;return[{type:"ellipse",cx:.5*e,cy:n,rx:c,ry:p},{type:"path",path:[{command:"M",values:[L,p]},{command:"L",values:[L,n]},{command:"L",values:[e,n]},{command:"L",values:[e,p]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*e,cy:p,rx:c,ry:p}]}function n(a,t){let e=t?20:a;const m=t?4:6;e-=e<=22?.5*m:m;const c=.15*e,p=a-c;return[{type:"ellipse",cx:.5*e,cy:p,rx:.5*e,ry:c},{type:"path",path:[{command:"M",values:[.5*e,0]},{command:"L",values:[e,p]},{command:"L",values:[0,p]},{command:"Z",values:[]}]}]}function o(a){let t=a;const e=6;t-=t<22?.5*e:e;const m=.15*t,c=0;return[{type:"path",path:[{command:"M",values:[0,c]},{command:"L",values:[t,c]},{command:"L",values:[.5*t,a-m]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*t,cy:c,rx:.5*t,ry:m}]}function s(a){let t=a;const e=a,m=4;t-=t<22?.5*m:m;const c=0,p=0,L=t,n=e,o=Math.floor(a/10)-1||1;return[{type:"path",path:[{command:"M",values:[.45*L,c]},{command:"L",values:[L,.5*n-o]},{command:"L",values:[.45*L-o,.5*n+o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*L,c]},{command:"L",values:[.45*L-o,.5*n+o]},{command:"L",values:[p,.5*n-o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[p,.5*n-o]},{command:"L",values:[.45*L-o,.5*n+o]},{command:"L",values:[.45*L,e]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*L,e]},{command:"L",values:[L,.5*n-o]},{command:"L",values:[.45*L-o,.5*n+o]},{command:"Z",values:[]}]}]}function l(a){const t=2;let e=a;e-=e<22?.5*t:t;const m=0,c=0;return[{type:"path",path:[{command:"M",values:[.45*a,m]},{command:"L",values:[a,e]},{command:"L",values:[.45*a,.6*e]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*a,m]},{command:"L",values:[.45*a,.6*e]},{command:"L",values:[c,e]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[c,e]},{command:"L",values:[.45*a,.6*e]},{command:"L",values:[a,e]},{command:"Z",values:[]}]}]}function u(a,t){const e=.75;return Math.round(Math.min(Math.max(a+255*t*e,0),255))}function h(t,e){if("type"in t&&("linear"===t.type||"pattern"===t.type))return t;const m=new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](t);return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([u(m.r,e),u(m.g,e),u(m.b,e),m.a])}


/***/ }),

/***/ "S60b":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/renderUtils.js ***!
  \******************************************************************/
/*! exports provided: renderSymbol, tintImageWithColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSymbol", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tintImageWithColor", function() { return d; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../kernel.js */ "975N");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _core_colorUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/colorUtils.js */ "0ynT");
/* harmony import */ var _libs_maquette_projection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../libs/maquette/projection.js */ "5sKF");
/* harmony import */ var _libs_maquette_projector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../libs/maquette/projector.js */ "aelY");
/* harmony import */ var _svgUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./svgUtils.js */ "7wGN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const s=Object(_libs_maquette_projector_js__WEBPACK_IMPORTED_MODULE_6__["createProjector"])();function h(t,e,i){const n=Math.ceil(e[0]),r=Math.ceil(e[1]);if(!t.some((t=>!!t.length)))return null;const o=i&&i.node||document.createElement("div");return null!=i.opacity&&(o.style.opacity=i.opacity.toString()),s.append(o,_svgUtils_js__WEBPACK_IMPORTED_MODULE_7__["renderSVG"].bind(null,t,n,r,i)),o}function l(t,e){t=Math.ceil(t),e=Math.ceil(e);const i=document.createElement("canvas");i.width=t,i.height=e,i.style.width=t+"px",i.style.height=e+"px";const n=i.getContext("2d");return n.clearRect(0,0,t,e),n}function m(t,i,r){return t?Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(t,{responseType:"image"}).then((t=>{const e=t.data,n=e.width,o=e.height,a=n/o;let c=i;if(r){const t=Math.max(n,o);c=Math.min(c,t)}return{image:e,width:a<=1?Math.ceil(c*a):c,height:a<=1?c:Math.ceil(c/a)}})):Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("renderUtils: imageDataSize","href not provided."))}function g(t,e){return!(!t||"ignore"===e)&&("multiply"!==e||255!==t.r||255!==t.g||255!==t.b||1!==t.a)}function u(t,e,i,n,a){switch(a){case"multiply":t[e+0]*=i[0],t[e+1]*=i[1],t[e+2]*=i[2],t[e+3]*=i[3];break;default:{const a=Object(_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_4__["toHSV"])({r:t[e+0],g:t[e+1],b:t[e+2]});a.h=n.h,a.s=n.s,a.v=a.v/100*n.v;const c=Object(_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_4__["toRGB"])(a);t[e+0]=c.r,t[e+1]=c.g,t[e+2]=c.b,t[e+3]*=i[3];break}}}function d(e,n,o,a,c){return m(e,n,c).then((c=>{const s=c.width?c.width:n,h=c.height?c.height:n;if(c.image&&g(o,a)){let i=c.image.width,n=c.image.height;(Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("edge")||Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ie"))&&/\.svg$/i.test(e)&&(i-=1,n-=1);const m=l(s,h);m.drawImage(c.image,0,0,i,n,0,0,s,h);const g=m.getImageData(0,0,s,h),d=[o.r/255,o.g/255,o.b/255,o.a],p=Object(_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_4__["toHSV"])(o);for(let t=0;t<g.data.length;t+=4)u(g.data,t,d,p,a);m.putImageData(g,0,0),e=m.canvas.toDataURL("image/png")}else{const t=_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].findCredential(e);if(t&&t.token){const i=-1===e.indexOf("?")?"?":"&";e=`${e}${i}token=${t.token}`}}return{url:e,width:s,height:h}})).catch((function(){return{url:e,width:n,height:n}}))}


/***/ })

}]);
//# sourceMappingURL=default~previewSymbol2D-js~previewSymbol3D-js.js.map