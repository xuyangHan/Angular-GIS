(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["previewCIMSymbol-js"],{

/***/ "/Lnp":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/previewCIMSymbol.js ***!
  \***********************************************************************/
/*! exports provided: previewCIMSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewCIMSymbol", function() { return n; });
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cimSymbolUtils.js */ "1EXT");
/* harmony import */ var _cim_CIMSymbolRasterizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cim/CIMSymbolRasterizer.js */ "a0kx");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const i=new _cim_CIMSymbolRasterizer_js__WEBPACK_IMPORTED_MODULE_2__["CIMSymbolRasterizer"](null,!0),o=120;async function n(l,n={}){const{size:s,maxSize:c,node:m,opacity:r}=n,y=n.cimOptions||n,{feature:d,fieldMap:h,geometryType:p,style:u}=y,g=Object(_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_1__["getCIMSymbolSize"])(l),f=Math.min(null!=s?s:g,null!=c?c:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["px2pt"])(o));f!==g&&(l=l.clone(),Object(_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_1__["scaleCIMSymbolTo"])(l,f,{preserveOutlineWidth:!0}));let M=3;l&&l.data&&l.data.symbol&&"CIMPointSymbol"!==l.data.symbol.type&&(M=1);const b=await i.rasterizeCIMSymbolAsync(l,d,h,p,{scaleFactor:M,style:u}),w=document.createElement("canvas");w.width=b.imageData.width,w.height=b.imageData.height;w.getContext("2d").putImageData(b.imageData,0,0);let C=w.width/M,D=w.height/M;if(null!=s&&(null==(null==n?void 0:n.scale)||(null==n?void 0:n.scale))){const t=C/D;C=t<=1?Math.ceil(f*t):f,D=t<=1?f:Math.ceil(f/t)}const I=new Image(C,D);return I.src=w.toDataURL(),null!=r&&(I.style.opacity=`${r}`),m&&m.appendChild(I),I}


/***/ }),

/***/ "AIxD":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/quantizationUtils.js ***!
  \*************************************************************************/
/*! exports provided: equals, getQuantizedBoundsCoordsArray, getQuantizedBoundsCoordsArrayArray, getQuantizedBoundsPaths, getQuantizedBoundsPoints, getQuantizedBoundsRings, quantizeBounds, quantizeExtent, quantizeGeometry, quantizeMultipoint, quantizePaths, quantizePoint, quantizePoints, quantizePolygon, quantizePolyline, quantizeRings, quantizeX, quantizeY, toQuantizationTransform, unquantizeBounds, unquantizeCoordsArray, unquantizeCoordsArrayArray, unquantizeExtent, unquantizeMultipoint, unquantizePaths, unquantizePoint, unquantizePoints, unquantizePolygon, unquantizePolyline, unquantizeRings, unquantizeX, unquantizeY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsCoordsArray", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsCoordsArrayArray", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsPaths", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsPoints", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsRings", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeBounds", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeExtent", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeGeometry", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeMultipoint", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePaths", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePoint", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePoints", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePolygon", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePolyline", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeRings", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeX", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeY", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toQuantizationTransform", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeBounds", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeCoordsArray", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeCoordsArrayArray", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeExtent", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeMultipoint", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePaths", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePoint", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePoints", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePolygon", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePolyline", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeRings", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeX", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeY", function() { return y; });
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsonUtils.js */ "qatw");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function i(n){return n&&"upperLeft"===n.originPosition}const o=(n,t,r)=>[t,r],l=(n,t,r)=>[t,r,n[2]],a=(n,t,r)=>[t,r,n[2],n[3]];function m(n){if(!n)return null;return{originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:n.tolerance?[n.tolerance,n.tolerance]:[1,1],translate:n.extent?[n.extent.xmin,n.extent.ymax]:[0,0]}}function c(n,t){if(n===t||null==n&&null==t)return!0;if(null==n||null==t)return!1;let r,e,u,o,l,a;return i(n)?(r=n.translate[0],e=n.translate[1],u=n.scale[0]):(r=n.extent.xmin,e=n.extent.ymax,u=n.tolerance),i(t)?(o=t.translate[0],l=t.translate[1],a=t.scale[0]):(o=t.extent.xmin,l=t.extent.ymax,a=t.tolerance),r===o&&e===l&&u===a}function s({scale:n,translate:t},r){return Math.round((r-t[0])/n[0])}function f({scale:n,translate:t},r){return Math.round((t[1]-r)/n[1])}function x(n,t,r){const e=[];let u,i,o,l;for(let a=0;a<r.length;a++){const m=r[a];a>0?(o=s(n,m[0]),l=f(n,m[1]),o===u&&l===i||(e.push(t(m,o-u,l-i)),u=o,i=l)):(u=s(n,m[0]),i=f(n,m[1]),e.push(t(m,u,i)))}return e.length>0?e:null}function h(n,t,r){return t[0]=s(n,r[0]),t[3]=f(n,r[1]),t[2]=s(n,r[2]),t[1]=f(n,r[3]),t}function I(n,t,r,e){return x(n,r?e?a:l:e?l:o,t)}function g(n,t,r,e){const u=[],i=r?e?a:l:e?l:o;for(let o=0;o<t.length;o++){const r=x(n,i,t[o]);r&&r.length>=3&&u.push(r)}return u.length?u:null}function N(n,t,r,e){const u=[],i=r?e?a:l:e?l:o;for(let o=0;o<t.length;o++){const r=x(n,i,t[o]);r&&r.length>=2&&u.push(r)}return u.length?u:null}function p({scale:n,translate:t},r){return r*n[0]+t[0]}function y({scale:n,translate:t},r){return t[1]-r*n[1]}function z(n,t,r){const e=new Array(r.length);if(!r.length)return e;const[u,i]=n.scale;let o=p(n,r[0][0]),l=y(n,r[0][1]);e[0]=t(r[0],o,l);for(let a=1;a<r.length;a++){const n=r[a];o+=n[0]*u,l-=n[1]*i,e[a]=t(n,o,l)}return e}function T(n,t,r){const e=new Array(r.length);for(let u=0;u<r.length;u++)e[u]=z(n,t,r[u]);return e}function M(n,t,r){return r?(t[0]=p(n,r[0]),t[1]=y(n,r[3]),t[2]=p(n,r[2]),t[3]=y(n,r[1]),t):[p(n,t[0]),y(n,t[3]),p(n,t[2]),y(n,t[1])]}function E(n,t,r,e){return z(n,r?e?a:l:e?l:o,t)}function P(n,t,r,e){return T(n,r?e?a:l:e?l:o,t)}function b(n,t,r,e){return T(n,r?e?a:l:e?l:o,t)}function F(n,t,r){let[e,u]=r[0],i=Math.min(e,t[0]),o=Math.min(u,t[1]),l=Math.max(e,t[2]),a=Math.max(u,t[3]);for(let m=1;m<r.length;m++){const[n,t]=r[m];e+=n,u+=t,n<0&&(i=Math.min(i,e)),n>0&&(l=Math.max(l,e)),t<0?o=Math.min(o,u):t>0&&(a=Math.max(a,u))}return n[0]=i,n[1]=o,n[2]=l,n[3]=a,n}function V(n,t){if(!t.length)return null;n[0]=n[1]=Number.POSITIVE_INFINITY,n[2]=n[3]=Number.NEGATIVE_INFINITY;for(let r=0;r<t.length;r++)F(n,n,t[r]);return n}function Y(n){const t=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return F(t,t,n)}function _(n){return V([0,0,0,0],n)}function A(n){return V([0,0,0,0],n)}function w(n,t,r,e,u){return t.xmin=s(n,r.xmin),t.ymin=f(n,r.ymin),t.xmax=s(n,r.xmax),t.ymax=f(n,r.ymax),t!==r&&(e&&(t.zmin=r.zmin,t.zmax=r.zmax),u&&(t.mmin=r.mmin,t.mmax=r.mmax)),t}function G(n,t,r,e,u){return t.points=I(n,r.points,e,u),t}function L(n,t,r,e,u){return t.x=s(n,r.x),t.y=f(n,r.y),t!==r&&(e&&(t.z=r.z),u&&(t.m=r.m)),t}function O(n,t,r,e,u){const i=g(n,r.rings,e,u);return i?(t.rings=i,t):null}function S(n,t,r,e,u){const i=N(n,r.paths,e,u);return i?(t.paths=i,t):null}function d(i,o){return i&&o?Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPoint"])(o)?L(i,{},o,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolyline"])(o)?S(i,{},o,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolygon"])(o)?O(i,{},o,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isMultipoint"])(o)?G(i,{},o,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isExtent"])(o)?w(i,{},o,!1,!1):null:null}function j(n,t,r,e,u){return t.xmin=p(n,r.xmin),t.ymin=y(n,r.ymin),t.xmax=p(n,r.xmax),t.ymax=y(n,r.ymax),t!==r&&(e&&(t.zmin=r.zmin,t.zmax=r.zmax),u&&(t.mmin=r.mmin,t.mmax=r.mmax)),t}function U(n,t,r,e,u){return t.points=E(n,r.points,e,u),t}function k(n,t,r,e,u){return t.x=p(n,r.x),t.y=y(n,r.y),t!==r&&(e&&(t.z=r.z),u&&(t.m=r.m)),t}function q(n,t,r,e,u){return t.rings=b(n,r.rings,e,u),t}function v(n,t,r,e,u){return t.paths=P(n,r.paths,e,u),t}


/***/ }),

/***/ "NXt8":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/TextRasterizer.js ***!
  \*****************************************************************/
/*! exports provided: default, TextRasterizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextRasterizer", function() { return r; });
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/screenUtils.js */ "qRWG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function e(t){return`rgb(${t.slice(0,3).toString()})`}function i(t){return`rgba(${t.slice(0,3).toString()},${t[3]})`}class r{constructor(){}rasterizeText(t,r){this._textRasterizationCanvas||(this._textRasterizationCanvas=document.createElement("canvas"));const o=this._textRasterizationCanvas,n=o.getContext("2d");this.setFontProperties(n,r),this.parameters=r,this.textLines=t.split(/\r?\n/),this.lineHeight=this.computeLineHeight();const a=this.computeTextWidth(n,r),h=this.lineHeight*this.textLines.length;o.width=a,o.height=h,this.renderedLineHeight=Math.round(this.lineHeight*r.pixelRatio),this.renderedHaloSize=r.halo.size*r.pixelRatio,this.renderedWidth=a*r.pixelRatio,this.renderedHeight=h*r.pixelRatio,this.fillStyle=i(r.color),this.haloStyle=e(r.halo.color);const l=this.renderedLineHeight,d=this.renderedHaloSize;this.setFontProperties(n,r);const c=s(n.textAlign,this.renderedWidth)+d,g=d;let f=0,p=0;d>0&&this.renderHalo(n,c,g,f,p,r),p+=g,f+=c;for(const e of this.textLines)n.globalCompositeOperation="destination-out",n.fillStyle="rgb(0, 0, 0)",n.fillText(e,f,p),n.globalCompositeOperation="source-over",n.fillStyle=this.fillStyle,n.fillText(e,f,p),p+=l;const u=n.getImageData(0,0,this.renderedWidth,this.renderedHeight),x=new Uint8Array(u.data);if(r.premultiplyColors){let t;for(let e=0;e<x.length;e+=4)t=x[e+3]/255,x[e]=x[e]*t,x[e+1]=x[e+1]*t,x[e+2]=x[e+2]*t}return{size:[this.renderedWidth,this.renderedHeight],image:new Uint32Array(x.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}renderHalo(t,e,i,r,s,o){const n=this.renderedWidth,a=this.renderedHeight;this._haloRasterizationCanvas||(this._haloRasterizationCanvas=document.createElement("canvas")),this._haloRasterizationCanvas.width=n,this._haloRasterizationCanvas.height=a;const h=this._haloRasterizationCanvas,l=h.getContext("2d");l.clearRect(0,0,n,a),this.setFontProperties(l,o),l.fillStyle=this.haloStyle,l.strokeStyle=this.haloStyle;const d=this.renderedHaloSize<3;l.lineJoin=d?"miter":"round",d?this.renderHaloEmulated(l,e,i):this.renderHaloNative(l,e,i),t.globalAlpha=this.parameters.halo.color[3],t.drawImage(h,0,0,n,a,r,s,n,a),t.globalAlpha=1}renderHaloEmulated(t,e,i){const r=this.renderedLineHeight,s=this.renderedHaloSize;for(const n of this.textLines){for(const[r,a]of o)t.fillText(n,e+s*r,i+s*a);i+=r}}renderHaloNative(t,e,i){const r=this.renderedLineHeight,s=this.renderedHaloSize;for(const o of this.textLines){const n=2*s,a=5,h=.1;for(let r=0;r<a;r++){const s=1-(a-1)*h+r*h;t.lineWidth=s*n,t.strokeText(o,e,i)}i+=r}}setFontProperties(e,i){const r=i.font,s=`${r.style} ${r.weight} ${Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(i.size*i.pixelRatio)}px ${r.family}, sans-serif`;let o;switch(e.font=s,e.textBaseline="top",i.horizontalAlignment){case"left":o="left";break;case"right":o="right";break;case"center":o="center";break;default:o="left"}e.textAlign=o}computeTextWidth(t,e){let i=0;for(const s of this.textLines)i=Math.max(i,t.measureText(s).width);const r=e.font;return("italic"===r.style||"oblique"===r.style||"string"==typeof r.weight&&("bold"===r.weight||"bolder"===r.weight)||"number"==typeof r.weight&&r.weight>600)&&(i+=.3*t.measureText("A").width),i+=2*this.parameters.halo.size,Math.round(i)}computeLineHeight(){const t=1.275*this.parameters.size;return Math.round(t+2*this.parameters.halo.size)}}function s(t,e){return"center"===t?.5*e:"right"===t?e:0}const o=[];{const t=16;for(let e=0;e<360;e+=360/t)o.push([Math.cos(Math.PI*e/180),Math.sin(Math.PI*e/180)])}/* harmony default export */ __webpack_exports__["default"] = (r);


/***/ }),

/***/ "a0kx":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/CIMSymbolRasterizer.js ***!
  \**********************************************************************/
/*! exports provided: CIMSymbolRasterizer, GeometryStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CIMSymbolRasterizer", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeometryStyle", function() { return p; });
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/string.js */ "s7YA");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _support_Symbol3DAnchorPosition2D_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../support/Symbol3DAnchorPosition2D.js */ "SFo0");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils.js */ "NrhG");
/* harmony import */ var _support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../support/cimSymbolUtils.js */ "1EXT");
/* harmony import */ var _cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cimAnalyzer.js */ "T8sT");
/* harmony import */ var _Rasterizer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Rasterizer.js */ "e4KH");
/* harmony import */ var _TextRasterizer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TextRasterizer.js */ "NXt8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p;!function(e){e.Legend="legend",e.Preview="preview"}(p||(p={}));const d=(e,t,r)=>{if(e&&e.targetSize){let a;if(r){const t=Math.max(r.frame.xmax-r.frame.xmin,r.frame.ymax-r.frame.ymin);a=e.targetSize/Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(t)}else a=e.targetSize/t.referenceSize;return a}return e&&e.scaleFactor?e.scaleFactor:1},M={fill:{legend:{frame:{xmax:15,xmin:0,ymax:15,ymin:0},geometry:{rings:[[[0,15],[15,7.5],[15,0],[0,0],[0,15]]]},canvasPaths:{rings:[[[0,15],[0,0],[15,7.5],[15,15],[0,15]]]}},preview:{frame:{xmax:100,xmin:0,ymax:100,ymin:0},geometry:{rings:[[[0,100],[100,100],[100,0],[0,0],[0,100]]]},canvasPaths:{rings:[[[0,100],[0,0],[100,0],[100,100],[0,100]]]}}},stroke:{legend:{frame:{xmax:24,xmin:0,ymax:-2,ymin:2},geometry:{paths:[[[0,0],[12,0],[24,0]]]},canvasPaths:{paths:[[[0,2],[12,2],[24,2]]]}},preview:{frame:{xmax:100,xmin:0,ymax:-2,ymin:2},geometry:{paths:[[[0,0],[50,0],[100,0]]]},canvasPaths:{paths:[[[0,2],[50,2],[100,2]]]}}}};class C{constructor(e,t){this._spatialReference=e,this._avoidSDF=t,this._resourceCache=new Map,this._rasterizer=new _Rasterizer_js__WEBPACK_IMPORTED_MODULE_9__["default"],this._textRasterizer=new _TextRasterizer_js__WEBPACK_IMPORTED_MODULE_10__["TextRasterizer"],this._pictureMarkerCache=new Map}async rasterizeCIMSymbolAsync(e,t,a,i,s,o,n,c){i=i||(t?null!=t.centroid?"esriGeometryPolygon":Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["getJsonType"])(t.geometry):null)||z(e);const l=await this.analyzeCIMSymbol(e,t?I(t.attributes):null,a,i,c);return this.rasterizeCIMSymbol(l,t,i,s,o,n)}async analyzeCIMSymbol(e,r,a,i,s){const o=[],n=r?{geometryType:i,spatialReference:this._spatialReference,fields:r}:null;let l;await Object(_cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_8__["analyzeCIMSymbol"])(e.data,n,o,this._avoidSDF),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfAborted"])(s);for(const t of o)"CIMPictureMarker"!==t.cim.type&&"CIMPictureFill"!==t.cim.type&&"CIMPictureStroke"!==t.cim.type||(l||(l=[]),l.push(this.fetchPictureMarkerResource(t,s))),a&&"text"===t.type&&"string"==typeof t.text&&t.text.indexOf("[")>-1&&(t.text=Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["createLabelOverrideFunction"])(a,t.text,t.cim.textCase));return l&&await Promise.all(l),o}async fetchPictureMarkerResource(e,t){const r=e.materialHash;if(!this._pictureMarkerCache.get(r)){const a=(await Object(_request_js__WEBPACK_IMPORTED_MODULE_5__["default"])(e.cim.url,{responseType:"image",signal:t&&t.signal})).data;this._pictureMarkerCache.set(r,a)}}rasterizeCIMSymbol(e,t,r,a,i,s){const o=[];for(const n of e){a&&"function"==typeof a.scaleFactor&&(a.scaleFactor=a.scaleFactor(t,i,s));const e=this._getRasterizedResource(n,t,r,a,i,s);if(!e)continue;let c=0,m=e.anchorX||0,h=e.anchorY||0,f=!1,g=0,y=0;if("esriGeometryPoint"===r){const e=d(a,n,null);if(g=Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["evaluateValueOrFunction"])(n.offsetX,t,i,s)*e||0,y=Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["evaluateValueOrFunction"])(n.offsetY,t,i,s)*e||0,"marker"===n.type)c=Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["evaluateValueOrFunction"])(n.rotation,t,i,s)||0,f=!!n.rotateClockwise&&n.rotateClockwise;else if("text"===n.type){if(c=Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["evaluateValueOrFunction"])(n.angle,t,i,s)||0,void 0!==n.horizontalAlignment)switch(n.horizontalAlignment){case"left":m=-.5;break;case"right":m=.5;break;default:m=0}if(void 0!==n.verticalAlignment)switch(n.verticalAlignment){case"top":h=.5;break;case"bottom":h=-.5;break;case"baseline":h=-.25;break;default:h=0}}}null!=e&&o.push({angle:c,rotateClockWise:f,anchorX:m,anchorY:h,offsetX:g,offsetY:y,rasterizedResource:e})}return this.getSymbolImage(o)}getSymbolImage(e){const t=document.createElement("canvas"),r=t.getContext("2d");let a=0,i=0,n=0,c=0;const l=[];for(let o=0;o<e.length;o++){const t=e[o],m=t.rasterizedResource;if(!m)continue;const h=m.size,f=t.offsetX,g=t.offsetY,y=t.anchorX,u=t.anchorY,p=t.rotateClockWise||!1;let d=t.angle,M=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(f)-h[0]*(.5+y),C=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(g)-h[1]*(.5+u),I=M+h[0],z=C+h[1];if(d){p&&(d=-d);const e=Math.sin(d*Math.PI/180),t=Math.cos(d*Math.PI/180),r=M*t-C*e,a=M*e+C*t,i=M*t-z*e,s=M*e+z*t,o=I*t-z*e,n=I*e+z*t,c=I*t-C*e,l=I*e+C*t;M=Math.min(r,i,o,c),C=Math.min(a,s,n,l),I=Math.max(r,i,o,c),z=Math.max(a,s,n,l)}a=M<a?M:a,i=C<i?C:i,n=I>n?I:n,c=z>c?z:c;const P=r.createImageData(m.size[0],m.size[1]);P.data.set(new Uint8ClampedArray(m.image.buffer));const x={offsetX:f,offsetY:g,rotateClockwise:p,angle:d,rasterizedImage:P,anchorX:y,anchorY:u};l.push(x)}t.width=n-a,t.height=c-i;const m=-a,h=c;for(let o=0;o<l.length;o++){const e=l[o],t=this._imageDataToCanvas(e.rasterizedImage),a=e.rasterizedImage.width,i=e.rasterizedImage.height,n=m-a*(.5+e.anchorX),c=h-i*(.5-e.anchorY);if(e.angle){const a=(360-e.angle)*Math.PI/180;r.save(),r.translate(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.offsetX),-Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.offsetY)),r.translate(m,h),r.rotate(a),r.translate(-m,-h),r.drawImage(t,n,c),r.restore()}else r.drawImage(t,n+Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.offsetX),c-Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.offsetY))}const f=new _support_Symbol3DAnchorPosition2D_js__WEBPACK_IMPORTED_MODULE_4__["default"]({x:m/t.width-.5,y:h/t.height-.5});return{imageData:0!==t.width&&0!==t.height?r.getImageData(0,0,t.width,t.height):r.createImageData(1,1),anchorPosition:f}}_imageDataToCanvas(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const t=this._imageDataCanvas,r=t.getContext("2d");return t.width=e.width,t.height=e.height,r.putImageData(e,0,0),t}_imageTo32Array(e,t,r){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const a=this._imageDataCanvas,i=a.getContext("2d");return a.width=t,a.height=r,i.drawImage(e,0,0,t,r),new Uint32Array(i.getImageData(0,0,t,r).data.buffer)}_getRasterizedResource(t,r,a,i,s,o){let n,c,m,f;if("esriGeometryPolyline"===a||"esriGeometryPolygon"===a){const h=i&&i.style?i.style:p.Legend,f="esriGeometryPolyline"===a?M.stroke[h]:M.fill[h];if("line"===t.type){if("CIMSolidStroke"!==t.cim.type){if("CIMPictureStroke"===t.cim.type){const e=Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["evaluateValueOrFunction"])(t.width,r,s,o),{image:a,width:i,height:n}=this._getPictureResource(t,e);return this._rasterizePictureResource(t,a,i,n,f,e)}return null}({analyzedCIM:n,hash:m}=P(t,r,s,o)),c=this._embedCIMLayerInVectorMarker(n,f)}else if("marker"===t.type){if("CIMPictureMarker"===t.cim.type)return null;if("CIMVectorMarker"!==t.cim.type)return null;t.cim.offsetX=Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["evaluateValueOrFunction"])(t.offsetX,r,s,o),t.cim.offsetY=Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["evaluateValueOrFunction"])(t.offsetY,r,s,o),t.cim.rotation=Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["evaluateValueOrFunction"])(t.rotation,r,s,o),t.cim.markerPlacement=t.markerPlacement,({analyzedCIM:n}=P(t,r,s,o)),m=Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(JSON.stringify(n)).toString(),c=this._embedCIMLayerInVectorMarker(n,f)}else{if("text"===t.type)return null;if("fill"===t.type){if("CIMHatchFill"===t.cim.type||"CIMVectorMarker"===t.cim.type||"CIMPictureMarker"===t.cim.type||"CIMPictureFill"===t.cim.type){const e=t.cim.size||t.cim.height;let a,i,c;if("CIMPictureMarker"===t.cim.type||"CIMPictureFill"===t.cim.type)({image:a,width:i,height:c}=this._getPictureResource(t,e));else{({analyzedCIM:n,hash:m}=P(t,r,s,o));const e=this._rasterizer.rasterizeJSONResource(n,1,this._avoidSDF);a=e.image,i=e.size[0],c=e.size[1]}return this._rasterizePictureResource(t,a,i,c,f,null)}if("CIMSolidFill"!==t.cim.type)return null;({analyzedCIM:n,hash:m}=P(t,r,s,o)),c=this._embedCIMLayerInVectorMarker(n,f)}}}else{if("text"===t.type)return f=this._rasterizeTextResource(t,r,i,s,o),f;({analyzedCIM:n,hash:m}=P(t,r,s,o));const e=d(i,t,null);if("CIMPictureMarker"===t.cim.type){const a=Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["evaluateValueOrFunction"])(t.size,r,s,o)*e,{image:i,width:n,height:c}=this._getPictureResource(t,a);return f={image:i,size:[n,c],sdf:!1,simplePattern:!1,anchorX:t.anchorPoint?t.anchorPoint.x:0,anchorY:t.anchorPoint?t.anchorPoint.y:0},f}Object(_support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__["scaleCIMMarker"])(n,e,{preserveOutlineWidth:!1}),c=n}m+=a,i&&(m+=JSON.stringify(i));const g=this._resourceCache;return g.has(m)?g.get(m):(f=this._rasterizer.rasterizeJSONResource(c,window.devicePixelRatio||1,this._avoidSDF),g.set(m,f),f)}_rasterizeTextResource(e,t,r,a,i){const s=d(r,e,null),o=Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["evaluateValueOrFunction"])(e.text,t,a,i);if(!o||0===o.length)return null;const n=Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["evaluateValueOrFunction"])(e.fontName,t,a,i),c=Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["evaluateValueOrFunction"])(e.style,t,a,i),h=Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["evaluateValueOrFunction"])(e.weight,t,a,i),f=Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["evaluateValueOrFunction"])(e.decoration,t,a,i),g=Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["evaluateValueOrFunction"])(e.size,t,a,i)*s,y=Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["evaluateValueOrFunction"])(e.horizontalAlignment,t,a,i),u=Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["evaluateValueOrFunction"])(e.verticalAlignment,t,a,i),p=Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["colorToArray"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["evaluateValueOrFunction"])(e.color,t,a,i)),M=Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["colorToArray"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["evaluateValueOrFunction"])(e.outlineColor,t,a,i)),C={color:p,size:g,horizontalAlignment:y,verticalAlignment:u,font:{family:n,style:c,weight:h,decoration:f},halo:{size:Object(_utils_js__WEBPACK_IMPORTED_MODULE_6__["evaluateValueOrFunction"])(e.outlineSize,t,a,i)||0,color:M,style:c},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(o,C)}_rasterizePictureResource(e,t,r,o,n,c){const l=document.createElement("canvas"),m=l.getContext("2d");l.height=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(Math.max(Math.abs(n.frame.ymax-n.frame.ymin),c)),l.width=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(Math.abs(n.frame.xmax-n.frame.xmin));const h=m.createImageData(r,o);h.data.set(new Uint8ClampedArray(t.buffer));const f=this._imageDataToCanvas(h),g=m.createPattern(f,"repeat"),y=Math.cos((-e.cim.rotation||0)*Math.PI/180),u=Math.sin((-e.cim.rotation||0)*Math.PI/180);g.setTransform({m11:y,m12:u,m21:-u,m22:y,m41:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.cim.offsetX)||0,m42:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.cim.offsetY)||0});const p=n.canvasPaths;let d,M,C;Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(p)?(d=p.rings,m.fillStyle=g,M=m.fill,C=["evenodd"]):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(p)&&(d=p.paths,m.strokeStyle=g,m.lineWidth=c,M=m.stroke,d[0][0][1]=l.height/2,d[0][1][1]=l.height/2),m.beginPath();for(const a of d){const e=a?a.length:0;if(e>1){let t=a[0];m.moveTo(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(t[0]),Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(t[1]));for(let r=1;r<e;++r)t=a[r],m.lineTo(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(t[0]),Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(t[1]));m.closePath()}}M.apply(m,C);const I=m.getImageData(0,0,l.width,l.height),z=new Uint8Array(I.data);return{size:[l.width,l.height],image:new Uint32Array(z.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}_getPictureResource(e,t){const r=this._pictureMarkerCache.get(e.materialHash);if(!r)return null;const a=r.height/r.width,i=t?a>1?Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(t):Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(t)/a:r.width,o=t?a>1?Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(t)*a:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(t):r.height;return{image:this._imageTo32Array(r,i,o),width:i,height:o}}_embedCIMLayerInVectorMarker(e,t){const r=Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(t.geometry)?"CIMPolygonSymbol":"CIMLineSymbol";return{type:"CIMVectorMarker",frame:t.frame,markerGraphics:[{type:"CIMMarkerGraphic",geometry:t.geometry,symbol:{type:r,symbolLayers:[e]}}]}}}function I(e){return(e?Object.keys(e):[]).map((t=>({name:t,alias:t,type:"string"==typeof e[t]?"esriFieldTypeString":"esriFieldTypeDouble"})))}function z(e){if(!(e&&e.data&&e.data.symbol))return null;switch(e.data.symbol.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}function P(e,t,r,a){let i,s;if("function"==typeof e.materialHash){i=(0,e.materialHash)(t,r,a),s=Object(_cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_8__["analyzeCIMResource"])(e.cim,e.materialOverrides)}else i=e.materialHash,s=e.cim;return{analyzedCIM:s,hash:i}}


/***/ })

}]);
//# sourceMappingURL=previewCIMSymbol-js.js.map