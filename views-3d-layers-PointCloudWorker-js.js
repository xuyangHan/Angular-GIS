(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-3d-layers-PointCloudWorker-js"],{

/***/ "0gct":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/i3s/LEPCC.js ***!
  \****************************************************************/
/*! exports provided: decodeIntensity, decodeRGB, decodeXYZ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeIntensity", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeRGB", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeXYZ", function() { return c; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t=!0,o={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function r(e,r,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+o.identifierOffset,o.identifierLength)),version:r.getUint16(n+o.versionOffset,t),checksum:r.getUint32(n+o.checksumOffset,t)}}const n={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function i(e,o){return{sizeLo:e.getUint32(o+n.sizeLo,t),sizeHi:e.getUint32(o+n.sizeHi,t),minX:e.getFloat64(o+n.minX,t),minY:e.getFloat64(o+n.minY,t),minZ:e.getFloat64(o+n.minZ,t),maxX:e.getFloat64(o+n.maxX,t),maxY:e.getFloat64(o+n.maxY,t),maxZ:e.getFloat64(o+n.maxZ,t),errorX:e.getFloat64(o+n.errorX,t),errorY:e.getFloat64(o+n.errorY,t),errorZ:e.getFloat64(o+n.errorZ,t),count:e.getUint32(o+n.count,t),reserved:e.getUint32(o+n.reserved,t)}}function c(t){const c=new DataView(t,0);let d=0;const{identifier:l,version:a}=r(t,c,d);if(d+=o.byteCount,"LEPCC     "!==l)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad identifier");if(a>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Unknown version");const u=i(c,d);d+=n.byteCount;if(u.sizeHi*2**32+u.sizeLo!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad size");const f=new Float64Array(3*u.count),h=[],w=[],g=[],p=[];if(d=s(t,d,h),d=s(t,d,w),d=s(t,d,g),d=s(t,d,p),d!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad length");let m=0,U=0;for(let e=0;e<h.length;e++){U+=h[e];let t=0;for(let o=0;o<w[e];o++){t+=g[m];const e=p[m];f[3*m]=Math.min(u.maxX,u.minX+2*u.errorX*t),f[3*m+1]=Math.min(u.maxY,u.minY+2*u.errorY*U),f[3*m+2]=Math.min(u.maxZ,u.minZ+2*u.errorZ*e),m++}}return{errorX:u.errorX,errorY:u.errorY,errorZ:u.errorZ,result:f}}function s(e,t,o){const r=[];t=d(e,t,r);const n=[];for(let i=0;i<r.length;i++){n.length=0,t=d(e,t,n);for(let e=0;e<n.length;e++)o.push(n[e]+r[i])}return t}function d(o,r,n){const i=new DataView(o,r),c=i.getUint8(0),s=31&c,d=!!(32&c),l=(192&c)>>6;let a=0;if(0===l)a=i.getUint32(1,t),r+=5;else if(1===l)a=i.getUint16(1,t),r+=3;else{if(2!==l)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad count type");a=i.getUint8(1),r+=2}if(d)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","LUT not implemented");const u=Math.ceil(a*s/8),f=new Uint8Array(o,r,u);let h=0,w=0,g=0;const p=-1>>>32-s;for(let e=0;e<a;e++){for(;w<s;)h|=f[g]<<w,w+=8,g+=1;n[e]=h&p,h>>>=s,w-=s,w+s>32&&(h|=f[g-1]>>8-w)}return r+g}const l={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function a(e,o){return{sizeLo:e.getUint32(o+l.sizeLo,t),sizeHi:e.getUint32(o+l.sizeHi,t),count:e.getUint32(o+l.count,t),colorMapCount:e.getUint16(o+l.colorMapCount,t),lookupMethod:e.getUint8(o+l.lookupMethod),compressionMethod:e.getUint8(o+l.compressionMethod)}}function u(t){const n=new DataView(t,0);let i=0;const{identifier:c,version:s}=r(t,n,i);if(i+=o.byteCount,"ClusterRGB"!==c)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad identifier");if(s>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Unknown version");const d=a(n,i);i+=l.byteCount;if(d.sizeHi*2**32+d.sizeLo!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad size");if((2===d.lookupMethod||1===d.lookupMethod)&&0===d.compressionMethod){if(3*d.colorMapCount+d.count+i!==t.byteLength||d.colorMapCount>256)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad count");const o=new Uint8Array(t,i,3*d.colorMapCount),r=new Uint8Array(t,i+3*d.colorMapCount,d.count),n=new Uint8Array(3*d.count);for(let e=0;e<d.count;e++){const t=r[e];n[3*e]=o[3*t],n[3*e+1]=o[3*t+1],n[3*e+2]=o[3*t+2]}return n}if(0===d.lookupMethod&&0===d.compressionMethod){if(3*d.count+i!==t.byteLength||0!==d.colorMapCount)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad count");return new Uint8Array(t,i).slice()}if(d.lookupMethod<=2&&1===d.compressionMethod){if(i+3!==t.byteLength||1!==d.colorMapCount)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad count");const o=n.getUint8(i),r=n.getUint8(i+1),c=n.getUint8(i+2),s=new Uint8Array(3*d.count);for(let e=0;e<d.count;e++)s[3*e]=o,s[3*e+1]=r,s[3*e+2]=c;return s}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad method "+d.lookupMethod+","+d.compressionMethod)}const f={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function h(e,o){return{sizeLo:e.getUint32(o+f.sizeLo,t),sizeHi:e.getUint32(o+f.sizeHi,t),count:e.getUint32(o+f.count,t),scaleFactor:e.getUint16(o+f.scaleFactor,t),bitsPerPoint:e.getUint8(o+f.bitsPerPoint),reserved:e.getUint8(o+f.reserved)}}function w(t){const n=new DataView(t,0);let i=0;const{identifier:c,version:s}=r(t,n,i);if(i+=o.byteCount,"Intensity "!==c)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad identifier");if(s>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Unknown version");const l=h(n,i);i+=f.byteCount;if(l.sizeHi*2**32+l.sizeLo!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad size");const a=new Uint16Array(l.count);if(8===l.bitsPerPoint){if(l.count+i!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad size");const o=new Uint8Array(t,i,l.count);for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor}else if(16===l.bitsPerPoint){if(2*l.count+i!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad size");const o=new Uint16Array(t,i,l.count);for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor}else{const o=[];if(d(t,i,o)!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad size");for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor}return a}


/***/ }),

/***/ "52T4":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/quatf32.js ***!
  \*****************************************************/
/*! exports provided: a, b, c, f, q */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return a; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function r(){const r=new Float32Array(4);return r[3]=1,r}function n(r){const n=new Float32Array(4);return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n}function e(r,n,e,t){const a=new Float32Array(4);return a[0]=r,a[1]=n,a[2]=e,a[3]=t,a}function t(r,n){return new Float32Array(r,n,4)}var a=Object.freeze({__proto__:null,create:r,clone:n,fromValues:e,createView:t});


/***/ }),

/***/ "Bf/J":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/i3s/PointCloudWorkerUtil.js ***!
  \*******************************************************************************/
/*! exports provided: elevationFromPositions, evaluateRenderer, filterInPlace, getAttributeValues, readGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elevationFromPositions", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evaluateRenderer", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterInPlace", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttributeValues", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readGeometry", function() { return c; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _renderers_PointCloudClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../renderers/PointCloudClassBreaksRenderer.js */ "Tg0p");
/* harmony import */ var _renderers_PointCloudStretchRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../renderers/PointCloudStretchRenderer.js */ "V4u7");
/* harmony import */ var _renderers_PointCloudUniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../renderers/PointCloudUniqueValueRenderer.js */ "ofcG");
/* harmony import */ var _LEPCC_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LEPCC.js */ "0gct");
/* harmony import */ var _I3SBinaryReader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./I3SBinaryReader.js */ "rWTd");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function u(e,o,l,i){const{rendererJSON:s,isRGBRenderer:f}=e;let u=null,c=null;if(o&&f)u=o;else if(o&&"pointCloudUniqueValueRenderer"===s.type){c=_renderers_PointCloudUniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(s);const e=c.colorUniqueValueInfos;u=new Uint8Array(3*i);const r=p(c.fieldTransformType);for(let t=0;t<i;t++){const n=(r?r(o[t]):o[t])+"";for(let o=0;o<e.length;o++)if(e[o].values.indexOf(n)>=0){u[3*t]=e[o].color.r,u[3*t+1]=e[o].color.g,u[3*t+2]=e[o].color.b;break}}}else if(o&&"pointCloudStretchRenderer"===s.type){c=_renderers_PointCloudStretchRenderer_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(s);const e=c.stops;u=new Uint8Array(3*i);const r=p(c.fieldTransformType);for(let t=0;t<i;t++){const n=r?r(o[t]):o[t],l=e.length-1;if(n<e[0].value)u[3*t]=e[0].color.r,u[3*t+1]=e[0].color.g,u[3*t+2]=e[0].color.b;else if(n>=e[l].value)u[3*t]=e[l].color.r,u[3*t+1]=e[l].color.g,u[3*t+2]=e[l].color.b;else for(let o=1;o<e.length;o++)if(n<e[o].value){const r=(n-e[o-1].value)/(e[o].value-e[o-1].value);u[3*t]=e[o].color.r*r+e[o-1].color.r*(1-r),u[3*t+1]=e[o].color.g*r+e[o-1].color.g*(1-r),u[3*t+2]=e[o].color.b*r+e[o-1].color.b*(1-r);break}}}else if(o&&"pointCloudClassBreaksRenderer"===s.type){c=_renderers_PointCloudClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(s);const e=c.colorClassBreakInfos;u=new Uint8Array(3*i);const t=p(c.fieldTransformType);for(let r=0;r<i;r++){const n=t?t(o[r]):o[r];for(let o=0;o<e.length;o++)if(n>=e[o].minValue&&n<=e[o].maxValue){u[3*r]=e[o].color.r,u[3*r+1]=e[o].color.g,u[3*r+2]=e[o].color.b;break}}}else{u=new Uint8Array(3*i);for(let e=0;e<u.length;e++)u[e]=255}if(l&&c&&c.colorModulation){const e=c.colorModulation.minValue,o=c.colorModulation.maxValue,r=.3;for(let t=0;t<i;t++){const n=l[t],i=n>=o?1:n<=e?r:r+(1-r)*(n-e)/(o-e);u[3*t]=i*u[3*t],u[3*t+1]=i*u[3*t+1],u[3*t+2]=i*u[3*t+2]}}return u}function c(o,r){if(null==o.encoding||""===o.encoding){const t=Object(_I3SBinaryReader_js__WEBPACK_IMPORTED_MODULE_5__["createGeometryIndexFromSchema"])(r,o);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t.vertexAttributes.position))return;const n=Object(_I3SBinaryReader_js__WEBPACK_IMPORTED_MODULE_5__["createTypedView"])(r,t.vertexAttributes.position),l=t.header.fields,f=[l.offsetX,l.offsetY,l.offsetZ],u=[l.scaleX,l.scaleY,l.scaleZ],c=n.length/3,a=new Float64Array(3*c);for(let e=0;e<c;e++)a[3*e]=n[3*e]*u[0]+f[0],a[3*e+1]=n[3*e+1]*u[1]+f[1],a[3*e+2]=n[3*e+2]*u[2]+f[2];return a}if("lepcc-xyz"===o.encoding)return Object(_LEPCC_js__WEBPACK_IMPORTED_MODULE_4__["decodeXYZ"])(r).result}function a(e,r,t){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e)&&e.attributeInfo.useElevation?d(r,t):Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e)?Object(_I3SBinaryReader_js__WEBPACK_IMPORTED_MODULE_5__["readBinaryAttribute"])(e.attributeInfo.storageInfo,e.buffer,t):null}function d(e,o){const r=new Float64Array(o);for(let t=0;t<o;t++)r[t]=e[3*t+2];return r}function m(e,o,r,t,n){const l=e.length/3;let i=0;for(let s=0;s<l;s++){let l=!0;for(let e=0;e<t.length&&l;e++){const{filterJSON:o}=t[e],r=n[e].values[s];switch(o.type){case"pointCloudValueFilter":{const e="exclude"===o.mode;-1!==o.values.indexOf(r)===e&&(l=!1);break}case"pointCloudBitfieldFilter":{const e=b(o.requiredSetBits),t=b(o.requiredClearBits);(r&e)===e&&0==(r&t)||(l=!1);break}case"pointCloudReturnFilter":{const e=15&r,t=r>>>4&15,n=t>1,i=1===e,s=e===t;let f=!1;for(const r of o.includedReturns)if("last"===r&&s||"firstOfMany"===r&&i&&n||"lastOfMany"===r&&s&&n||"single"===r&&!n){f=!0;break}f||(l=!1);break}}}l&&(r[i]=s,e[3*i]=e[3*s],e[3*i+1]=e[3*s+1],e[3*i+2]=e[3*s+2],o[3*i]=o[3*s],o[3*i+1]=o[3*s+1],o[3*i+2]=o[3*s+2],i++)}return i}function p(e){return null==e||"none"===e?null:"low-four-bit"===e?e=>15&e:"high-four-bit"===e?e=>(240&e)>>4:"absolute-value"===e?e=>Math.abs(e):"modulo-ten"===e?e=>e%10:null}function b(e){let o=0;for(const r of e||[])o|=1<<r;return o}


/***/ }),

/***/ "dXfX":
/*!**************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec4.js ***!
  \**************************************************/
/*! exports provided: A, B, C, D, E, F, G, H, I, J, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return v; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "QhKk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function a(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function r(t,n,a,r,s){return t[0]=n,t[1]=a,t[2]=r,t[3]=s,t}function s(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t}function u(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}function o(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t[3]=n[3]*a[3],t}function e(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t[3]=n[3]/a[3],t}function c(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t}function i(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t}function h(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t[3]=Math.min(n[3],a[3]),t}function M(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t[3]=Math.max(n[3],a[3]),t}function f(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t}function l(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t}function m(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t}function d(t,n){const a=n[0]-t[0],r=n[1]-t[1],s=n[2]-t[2],u=n[3]-t[3];return Math.sqrt(a*a+r*r+s*s+u*u)}function b(t,n){const a=n[0]-t[0],r=n[1]-t[1],s=n[2]-t[2],u=n[3]-t[3];return a*a+r*r+s*s+u*u}function x(t){const n=t[0],a=t[1],r=t[2],s=t[3];return Math.sqrt(n*n+a*a+r*r+s*s)}function q(t){const n=t[0],a=t[1],r=t[2],s=t[3];return n*n+a*a+r*r+s*s}function p(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t}function v(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t}function g(t,n){const a=n[0],r=n[1],s=n[2],u=n[3];let o=a*a+r*r+s*s+u*u;return o>0&&(o=1/Math.sqrt(o),t[0]=a*o,t[1]=r*o,t[2]=s*o,t[3]=u*o),t}function _(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function j(t,n,a,r){const s=n[0],u=n[1],o=n[2],e=n[3];return t[0]=s+r*(a[0]-s),t[1]=u+r*(a[1]-u),t[2]=o+r*(a[2]-o),t[3]=e+r*(a[3]-e),t}function w(t,a){let r,s,u,o,e,c;a=a||1;do{r=2*Object(_common_js__WEBPACK_IMPORTED_MODULE_0__["R"])()-1,s=2*Object(_common_js__WEBPACK_IMPORTED_MODULE_0__["R"])()-1,e=r*r+s*s}while(e>=1);do{u=2*Object(_common_js__WEBPACK_IMPORTED_MODULE_0__["R"])()-1,o=2*Object(_common_js__WEBPACK_IMPORTED_MODULE_0__["R"])()-1,c=u*u+o*o}while(c>=1);const i=Math.sqrt((1-e)/c);return t[0]=a*r,t[1]=a*s,t[2]=a*u*i,t[3]=a*o*i,t}function y(t,n,a){const r=n[0],s=n[1],u=n[2],o=n[3];return t[0]=a[0]*r+a[4]*s+a[8]*u+a[12]*o,t[1]=a[1]*r+a[5]*s+a[9]*u+a[13]*o,t[2]=a[2]*r+a[6]*s+a[10]*u+a[14]*o,t[3]=a[3]*r+a[7]*s+a[11]*u+a[15]*o,t}function z(t,n,a){const r=n[0],s=n[1],u=n[2],o=a[0],e=a[1],c=a[2],i=a[3],h=i*r+e*u-c*s,M=i*s+c*r-o*u,f=i*u+o*s-e*r,l=-o*r-e*s-c*u;return t[0]=h*i+l*-o+M*-c-f*-e,t[1]=M*i+l*-e+f*-o-h*-c,t[2]=f*i+l*-c+h*-e-M*-o,t[3]=n[3],t}function A(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function D(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function E(n,a){const r=n[0],s=n[1],u=n[2],o=n[3],e=a[0],c=a[1],i=a[2],h=a[3];return Math.abs(r-e)<=_common_js__WEBPACK_IMPORTED_MODULE_0__["E"]*Math.max(1,Math.abs(r),Math.abs(e))&&Math.abs(s-c)<=_common_js__WEBPACK_IMPORTED_MODULE_0__["E"]*Math.max(1,Math.abs(s),Math.abs(c))&&Math.abs(u-i)<=_common_js__WEBPACK_IMPORTED_MODULE_0__["E"]*Math.max(1,Math.abs(u),Math.abs(i))&&Math.abs(o-h)<=_common_js__WEBPACK_IMPORTED_MODULE_0__["E"]*Math.max(1,Math.abs(o),Math.abs(h))}const L=u,k=o,B=e,C=d,F=b,G=x,H=q;var I=Object.freeze({__proto__:null,copy:a,set:r,add:s,subtract:u,multiply:o,divide:e,ceil:c,floor:i,min:h,max:M,round:f,scale:l,scaleAndAdd:m,distance:d,squaredDistance:b,length:x,squaredLength:q,negate:p,inverse:v,normalize:g,dot:_,lerp:j,random:w,transformMat4:y,transformQuat:z,str:A,exactEquals:D,equals:E,sub:L,mul:k,div:B,dist:C,sqrDist:F,len:G,sqrLen:H});


/***/ }),

/***/ "rWTd":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/i3s/I3SBinaryReader.js ***!
  \**************************************************************************/
/*! exports provided: createAttributeDataIndex, createGeometryDescriptor, createGeometryDescriptorForDraco, createGeometryDescriptorFromDefinition, createGeometryDescriptorFromSchema, createGeometryIndexFromSchema, createRawView, createTypedView, getBytesPerValue, isValueType, readBinaryAttribute, readHeader, readStringArray, valueType2ArrayBufferReader, valueType2TypedArrayClassMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAttributeDataIndex", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGeometryDescriptor", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGeometryDescriptorForDraco", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGeometryDescriptorFromDefinition", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGeometryDescriptorFromSchema", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGeometryIndexFromSchema", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRawView", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTypedView", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBytesPerValue", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueType", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBinaryAttribute", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readHeader", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readStringArray", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueType2ArrayBufferReader", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueType2TypedArrayClassMap", function() { return m; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _LEPCC_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LEPCC.js */ "0gct");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const i=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function u(e,t,r){let o="",i=0;for(;i<r;){const u=e[t+i];if(u<128)o+=String.fromCharCode(u),i++;else if(u>=192&&u<224){if(i+1>=r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&u)<<6|63&e[t+i+1];o+=String.fromCharCode(a),i+=2}else if(u>=224&&u<240){if(i+2>=r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&u)<<12|(63&e[t+i+1])<<6|63&e[t+i+2];o+=String.fromCharCode(a),i+=3}else{if(!(u>=240&&u<248))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&u)<<18|(63&e[t+i+1])<<12|(63&e[t+i+2])<<6|63&e[t+i+3];if(a>=65536){const e=55296+(a-65536>>10),t=56320+(1023&a);o+=String.fromCharCode(e,t)}else o+=String.fromCharCode(a);i+=4}}}return o}function a(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<t.length;o++){const i=t[o],u=i.valueType||i.type,a=I[u];n.fields[i.property]=a(e,r),r+=m[u].BYTES_PER_ELEMENT}return n.byteCount=r,n}function s(e,t,r){const o=[];let i,a,s=0;for(a=0;a<e;a+=1){if(i=t[a],i>0){if(o.push(u(r,s,i-1)),0!==r[s+i-1])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("string-array-error","Invalid string array: missing null termination.")}else o.push(null);s+=i}return o}function c(e,t){return new(0,m[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function f(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}function l(t,r,o){const i=null!=r.header?a(t,r.header):{byteOffset:0,byteCount:0,fields:{count:o}},u={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let s=i.byteCount;for(let a=0;a<r.ordering.length;a++){const t=r.ordering[a],o=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(r[t]);if(o.count=i.fields.count,"String"===o.valueType){if(o.byteOffset=s,o.byteCount=i.fields[t+"ByteCount"],"UTF-8"!==o.encoding)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("unsupported-encoding","Unsupported String encoding.",{encoding:o.encoding})}else{if(!h(o.valueType))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("unsupported-value-type","Unsupported binary valueType",{valueType:o.valueType});{const e=A(o.valueType);s+=s%e!=0?e-s%e:0,o.byteOffset=s,o.byteCount=e*o.valuesPerElement*o.count}}s+=o.byteCount,u.entries[t]=o}return u.byteCount=s-u.byteOffset,u}function b(e,t,r){if(t!==e&&i.error(`Invalid ${r} buffer size\n expected: ${e}, actual: ${t})`),t<e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function d(e){return{isDraco:!1,isLegacy:!1,color:null!=e.color,normal:null!=e.normal,uv0:null!=e.uv0,uvRegion:null!=e.uvRegion,featureIndex:null!=e.faceRange&&null!=e.featureId}}function y(e,t){const n=a(e,t&&t.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,u=null!=i.vertexCount?i.vertexCount:i.count;for(const a of t.ordering){if(!t.vertexAttributes[a])continue;const e={...t.vertexAttributes[a],byteOffset:r,count:u},n=p[a]?p[a]:"_"+a;o.vertexAttributes[n]=e,r+=A(e.valueType)*e.valuesPerElement*u}const s=i.faceCount;if(t.faces&&s){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:r,count:s};o.faces[e]=n,r+=A(n.valueType)*n.valuesPerElement*s}}const c=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&c){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:r,count:c};o.featureAttributes[e]=n;r+=("UInt64"===n.valueType?8:A(n.valueType))*n.valuesPerElement*c}}return b(r,e.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}function g(e,t){return!(!e||!e.compressedAttributes||"draco"!==e.compressedAttributes.encoding)?v(e.compressedAttributes.attributes):e?d(e):w(t)}function w(e){const t={isDraco:!1,isLegacy:!0,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e.ordering)if(e.vertexAttributes[n])switch(n){case"position":break;case"normal":t.normal=!0;break;case"color":t.color=!0;break;case"uv0":t.uv0=!0;break;case"region":t.uvRegion=!0}return e.featureAttributes&&e.featureAttributeOrder&&(t.featureIndex=!0),t}function v(e){const t={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e)switch(n){case"position":break;case"normal":t.normal=!0;break;case"uv0":t.uv0=!0;break;case"color":t.color=!0;break;case"uv-region":t.uvRegion=!0;break;case"feature-index":t.featureIndex=!0}return t}const p={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};function C(e,t,u){if("lepcc-rgb"===e.encoding)return Object(_LEPCC_js__WEBPACK_IMPORTED_MODULE_3__["decodeRGB"])(t);if("lepcc-intensity"===e.encoding)return Object(_LEPCC_js__WEBPACK_IMPORTED_MODULE_3__["decodeIntensity"])(t);if(null!=e.encoding&&""!==e.encoding)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(i.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(i.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const a=l(t,e,u);b(a.byteOffset+a.byteCount,t.byteLength,"attribute");const d=a.entries.attributeValues||a.entries.objectIds;if(d){if("String"===d.valueType){const e=a.entries.attributeByteCounts,n=c(t,e),r=f(t,d);return s(e.count,n,r)}return c(t,d)}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const m={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},I={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function h(e){return m.hasOwnProperty(e)}function A(e){return h(e)?m[e].BYTES_PER_ELEMENT:0}


/***/ }),

/***/ "rr5J":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/PointCloudWorker.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/typedArrayUtil.js */ "ohva");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/projection.js */ "gYg2");
/* harmony import */ var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../chunks/quat.js */ "BPBZ");
/* harmony import */ var _chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../chunks/vec3f32.js */ "R/jG");
/* harmony import */ var _chunks_quatf32_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../chunks/quatf32.js */ "52T4");
/* harmony import */ var _i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./i3s/PointCloudWorkerUtil.js */ "Bf/J");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class p{transform(e){const a=this._transform(e),o=[a.points.buffer,a.rgb.buffer];Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.pointIdFilterMap)&&o.push(a.pointIdFilterMap.buffer);for(const r of a.attributes)"buffer"in r.values&&Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["isArrayBuffer"])(r.values.buffer)&&r.values.buffer!==a.rgb.buffer&&o.push(r.values.buffer);return Promise.resolve({result:a,transferList:o})}_transform(t){const a=Object(_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_8__["readGeometry"])(t.schema,t.geometryBuffer);let o=a.length/3,f=null;const i=[],n=Object(_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_8__["getAttributeValues"])(t.primaryAttributeData,a,o);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t.primaryAttributeData)&&n&&i.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:n});const s=Object(_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_8__["getAttributeValues"])(t.modulationAttributeData,a,o);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t.modulationAttributeData)&&s&&i.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:s});let p=Object(_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_8__["evaluateRenderer"])(t.rendererInfo,n,s,o);if(t.filterInfo&&t.filterInfo.length>0&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t.filterAttributesData)){const r=t.filterAttributesData.map((t=>{const r=Object(_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_8__["getAttributeValues"])(t,a,o),e={attributeInfo:t.attributeInfo,values:r};return i.push(e),e}));f=new Uint32Array(o),o=Object(_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_8__["filterInPlace"])(a,p,f,t.filterInfo,r)}for(const r of t.userAttributesData){const t=Object(_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_8__["getAttributeValues"])(r,a,o);i.push({attributeInfo:r.attributeInfo,values:t})}3*o<p.length&&(p=new Uint8Array(p.buffer.slice(0,3*o))),this._applyElevationOffsetInPlace(a,o,t.elevationOffset);const c=this._transformCoordinates(a,o,t.obb,_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(t.inSR),_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(t.outSR));return{obb:t.obb,points:c,rgb:p,attributes:i,pointIdFilterMap:f}}_transformCoordinates(t,r,e,s,u){if(!Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["projectBuffer"])(t,s,0,t,u,0,r))throw Error("Can't reproject");const l=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_6__["f"])(e.center[0],e.center[1],e.center[2]),b=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),m=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_6__["c"])();Object(_chunks_quat_js__WEBPACK_IMPORTED_MODULE_5__["c"])(c,e.quaternion);const p=new Float32Array(3*r);for(let o=0;o<r;o++)b[0]=t[3*o]-l[0],b[1]=t[3*o+1]-l[1],b[2]=t[3*o+2]-l[2],Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["q"])(m,b,c),e.halfSize[0]=Math.max(e.halfSize[0],Math.abs(m[0])),e.halfSize[1]=Math.max(e.halfSize[1],Math.abs(m[1])),e.halfSize[2]=Math.max(e.halfSize[2],Math.abs(m[2])),p[3*o]=b[0],p[3*o+1]=b[1],p[3*o+2]=b[2];return p}_applyElevationOffsetInPlace(t,r,e){if(0!==e)for(let a=0;a<r;a++)t[3*a+2]+=e}}const c=Object(_chunks_quatf32_js__WEBPACK_IMPORTED_MODULE_7__["b"])();function h(){return new p}/* harmony default export */ __webpack_exports__["default"] = (h);


/***/ })

}]);
//# sourceMappingURL=views-3d-layers-PointCloudWorker-js.js.map