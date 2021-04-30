(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-2d-engine-vectorTiles-WorkerTileHandler-js"],{

/***/ "+yyC":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/libs/earcut/earcut.js ***!
  \**************************************************************/
/*! exports provided: deviation, earcut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "earcut", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function e(e,t,r){const i=t&&t.length,u=i?t[0]*r:e.length;let o=n(e,0,u,r,!0);const l=new Array;if(!o||o.next===o.prev)return l;let y,p,c,v,s;if(i&&(o=f(e,t,o,r)),e.length>80*r){y=c=e[0],p=v=e[1];for(let n=r;n<u;n+=r){const t=e[n],x=e[n+1];y=Math.min(y,t),p=Math.min(p,x),c=Math.max(c,t),v=Math.max(v,x)}s=Math.max(c-y,v-p),s=0!==s?1/s:0}return x(o,l,r,y,p,s),l}function n(e,n,t,x,r){let i;if(r===a(e,n,t,x)>0)for(let o=n;o<t;o+=x)i=u(o,e[o],e[o+1],i);else for(let o=t-x;o>=n;o-=x)i=u(o,e[o],e[o+1],i);return i&&z(i,i.next)&&(o(i),i=i.next),i}function t(e,n=e){if(!e)return e;let t,x=e;do{if(t=!1,x.steiner||!z(x,x.next)&&0!==h(x.prev,x,x.next))x=x.next;else{if(o(x),x=n=x.prev,x===x.next)break;t=!0}}while(t||x!==n);return n}function x(e,n,u,l,f,y,p=0){if(!e)return;!p&&y&&(e=c(e,l,f,y));let v=e;for(;e.prev!==e.next;){const c=e.prev,s=e.next;if(y?i(e,l,f,y):r(e))n.push(c.index/u),n.push(e.index/u),n.push(s.index/u),o(e),e=s.next,v=s.next;else if((e=s)===v){p?1===p?x(e=m(e,n,u),n,u,l,f,y,2):2===p&&k(e,n,u,l,f,y):x(t(e),n,u,l,f,y,1);break}}}function r(e){const n=e.prev,t=e,x=e.next;if(h(n,t,x)>=0)return!1;let r=e.next.next;const i=r;let u=0;for(;r!==e.prev&&(0===u||r!==i);){if(u++,w(n.x,n.y,t.x,t.y,x.x,x.y,r.x,r.y)&&h(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function i(e,n,t,x){const r=e.prev,i=e,u=e.next;if(h(r,i,u)>=0)return!1;const o=r.x<i.x?r.x<u.x?r.x:u.x:i.x<u.x?i.x:u.x,l=r.y<i.y?r.y<u.y?r.y:u.y:i.y<u.y?i.y:u.y,f=r.x>i.x?r.x>u.x?r.x:u.x:i.x>u.x?i.x:u.x,y=r.y>i.y?r.y>u.y?r.y:u.y:i.y>u.y?i.y:u.y,p=M(o,l,n,t,x),c=M(f,y,n,t,x);let v=e.prevZ,s=e.nextZ;for(;v&&v.z>=p&&s&&s.z<=c;){if(v!==e.prev&&v!==e.next&&w(r.x,r.y,i.x,i.y,u.x,u.y,v.x,v.y)&&h(v.prev,v,v.next)>=0)return!1;if(v=v.prevZ,s!==e.prev&&s!==e.next&&w(r.x,r.y,i.x,i.y,u.x,u.y,s.x,s.y)&&h(s.prev,s,s.next)>=0)return!1;s=s.nextZ}for(;v&&v.z>=p;){if(v!==e.prev&&v!==e.next&&w(r.x,r.y,i.x,i.y,u.x,u.y,v.x,v.y)&&h(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;s&&s.z<=c;){if(s!==e.prev&&s!==e.next&&w(r.x,r.y,i.x,i.y,u.x,u.y,s.x,s.y)&&h(s.prev,s,s.next)>=0)return!1;s=s.nextZ}return!0}function u(e,n,t,x){const r=new B(e,n,t);return x?(r.next=x.next,r.prev=x,x.next.prev=r,x.next=r):(r.prev=r,r.next=r),r}function o(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function l(e){let n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function f(e,x,r,i){const u=new Array;for(let t=0,o=x.length;t<o;t++){const r=n(e,x[t]*i,t<o-1?x[t+1]*i:e.length,i,!1);r===r.next&&(r.steiner=!0),u.push(l(r))}u.sort(b);for(const n of u)y(n,r),r=t(r,r.next);return r}function y(e,n){if(n=p(e,n)){const x=q(n,e);t(x,x.next)}}function p(e,n){let t=n;const x=e.x,r=e.y;let i,u=-1/0;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const e=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(e<=x&&e>u){if(u=e,e===x){if(r===t.y)return t;if(r===t.next.y)return t.next}i=t.x<t.next.x?t:t.next}}t=t.next}while(t!==n);if(!i)return null;if(x===u)return i.prev;const o=i,l=i.x,f=i.y;let y,p=1/0;for(t=i.next;t!==o;)x>=t.x&&t.x>=l&&x!==t.x&&w(r<f?x:u,r,l,f,r<f?u:x,r,t.x,t.y)&&(y=Math.abs(r-t.y)/(x-t.x),(y<p||y===p&&t.x>i.x)&&g(t,e)&&(i=t,p=y)),t=t.next;return i}function c(e,n,t,x){for(let r;r!==e;r=r.next){if(r=r||e,null===r.z&&(r.z=M(r.x,r.y,n,t,x)),r.prev.next!==r||r.next.prev!==r)return r.prev.next=r,r.next.prev=r,c(e,n,t,x);r.prevZ=r.prev,r.nextZ=r.next}return e.prevZ.nextZ=null,e.prevZ=null,v(e)}function v(e){let n,t=1;for(;;){let x,r=e;e=null,n=null;let i=0;for(;r;){i++,x=r;let u=0;for(;u<t&&x;u++)x=x.nextZ;let o=t;for(;u>0||o>0&&x;){let t;0===u?(t=x,x=x.nextZ,o--):0!==o&&x?r.z<=x.z?(t=r,r=r.nextZ,u--):(t=x,x=x.nextZ,o--):(t=r,r=r.nextZ,u--),n?n.nextZ=t:e=t,t.prevZ=n,n=t}r=x}if(n.nextZ=null,t*=2,i<2)return e}}function s(e,n,t,x){const r=n&&n.length,i=r?n[0]*t:e.length;let u=Math.abs(a(e,0,i,t));if(r)for(let l=0,f=n.length;l<f;l++){const x=n[l]*t,r=l<f-1?n[l+1]*t:e.length;u-=Math.abs(a(e,x,r,t))}let o=0;for(let l=0;l<x.length;l+=3){const n=x[l]*t,r=x[l+1]*t,i=x[l+2]*t;o+=Math.abs((e[n]-e[i])*(e[r+1]-e[n+1])-(e[n]-e[r])*(e[i+1]-e[n+1]))}return 0===u&&0===o?0:Math.abs((o-u)/u)}function h(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function d(e,n,t,x){return!!(z(e,n)&&z(t,x)||z(e,x)&&z(t,n))||h(e,n,t)>0!=h(e,n,x)>0&&h(t,x,e)>0!=h(t,x,n)>0}function Z(e,n){let t=e;do{if(t.index!==e.index&&t.next.index!==e.index&&t.index!==n.index&&t.next.index!==n.index&&d(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}function a(e,n,t,x){let r=0;for(let i=n,u=t-x;i<t;i+=x)r+=(e[u]-e[i])*(e[i+1]+e[u+1]),u=i;return r}function w(e,n,t,x,r,i,u,o){return(r-u)*(n-o)-(e-u)*(i-o)>=0&&(e-u)*(x-o)-(t-u)*(n-o)>=0&&(t-u)*(i-o)-(r-u)*(x-o)>=0}function g(e,n){return h(e.prev,e,e.next)<0?h(e,n,e.next)>=0&&h(e,e.prev,n)>=0:h(e,n,e.prev)<0||h(e,e.next,n)<0}function M(e,n,t,x,r){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-t)*r)|e<<8))|e<<4))|e<<2))|e<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-x)*r)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function z(e,n){return e.x===n.x&&e.y===n.y}function b(e,n){return e.x-n.x}function m(e,n,t){let x=e;do{const r=x.prev,i=x.next.next;!z(r,i)&&d(r,x,x.next,i)&&g(r,i)&&g(i,r)&&(n.push(r.index/t),n.push(x.index/t),n.push(i.index/t),o(x),o(x.next),x=e=i),x=x.next}while(x!==e);return x}function k(e,n,r,i,u,o){let l=e;do{let e=l.next.next;for(;e!==l.prev;){if(l.index!==e.index&&A(l,e)){let f=q(l,e);return l=t(l,l.next),f=t(f,f.next),x(l,n,r,i,u,o),void x(f,n,r,i,u,o)}e=e.next}l=l.next}while(l!==e)}function A(e,n){return e.next.index!==n.index&&e.prev.index!==n.index&&!Z(e,n)&&g(e,n)&&g(n,e)&&j(e,n)}function j(e,n){let t=e,x=!1;const r=(e.x+n.x)/2,i=(e.y+n.y)/2;do{t.y>i!=t.next.y>i&&t.next.y!==t.y&&r<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(x=!x),t=t.next}while(t!==e);return x}function q(e,n){const t=new B(e.index,e.x,e.y),x=new B(n.index,n.x,n.y),r=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=r,r.prev=t,x.next=t,t.prev=x,i.next=x,x.prev=i,x}class B{constructor(e,n,t){this.index=e,this.x=n,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}}


/***/ }),

/***/ "2yHJ":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/config.js ***!
  \**************************************************************************************/
/*! exports provided: COLLISION_GRID_CELL_SIZE, DECLUTTER_BUDGET, DECLUTTER_TILES, FADE_DURATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_GRID_CELL_SIZE", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECLUTTER_BUDGET", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECLUTTER_TILES", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FADE_DURATION", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const o=!0,t=32,c=1.5,e=200;


/***/ }),

/***/ "4FHc":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/IndexMemoryBuffer.js ***!
  \************************************************************************************/
/*! exports provided: PointElementMemoryBuffer, TriangleIndexBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointElementMemoryBuffer", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriangleIndexBuffer", function() { return r; });
/* harmony import */ var _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemoryBuffer.js */ "rgtN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class r extends _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(){super(12)}add(s,r,t){const e=this.array;e.push(s),e.push(r),e.push(t)}}class t extends _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(){super(4)}add(s){this.array.push(s)}}


/***/ }),

/***/ "8NBV":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/SourceLayerData.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class e{constructor(t){for(this.extent=4096,this.keys=[],this.values=[],this._pbfLayer=t.clone();t.next();)switch(t.tag()){case 1:this.name=t.getString();break;case 3:this.keys.push(t.getString());break;case 4:this.values.push(t.processMessage(e._parseValue));break;case 5:this.extent=t.getUInt32();break;default:t.skip()}}getData(){return this._pbfLayer}static _parseValue(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getInt64();case 5:return e.getUInt64();case 6:return e.getSInt64();case 7:return e.getBool();default:e.skip()}return null}}/* harmony default export */ __webpack_exports__["default"] = (e);


/***/ }),

/***/ "9dpd":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/buckets/SymbolBucket.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/string.js */ "s7YA");
/* harmony import */ var _core_BidiEngine_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/BidiEngine.js */ "179/");
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GeometryUtils.js */ "OxmL");
/* harmony import */ var _style_StyleLayer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/StyleLayer.js */ "Ip4x");
/* harmony import */ var _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../webgl/Geometry.js */ "OXZQ");
/* harmony import */ var _TextShaping_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TextShaping.js */ "ynYs");
/* harmony import */ var _Placement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Placement.js */ "ixhk");
/* harmony import */ var _BaseBucket_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BaseBucket.js */ "vgmk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const f=10;function y(e,t){return e.iconMosaicItem&&t.iconMosaicItem?e.iconMosaicItem.page===t.iconMosaicItem.page?0:e.iconMosaicItem.page-t.iconMosaicItem.page:e.iconMosaicItem&&!t.iconMosaicItem?1:!e.iconMosaicItem&&t.iconMosaicItem?-1:0}class m extends _BaseBucket_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(e,t,n,i,s,a,o,r){super(e,t),this.type=3,this._markerMap=new Map,this._glyphMap=new Map,this._glyphBufferDataStorage=new Map,this._isIconSDF=!1,this._iconVertexBuffer=n,this._iconIndexBuffer=i,this._textVertexBuffer=s,this._textIndexBuffer=a,this._placementEngine=o,this._workerTileHandler=r}get markerPageMap(){return this._markerMap}get glyphsPageMap(){return this._glyphMap}get symbolInstances(){return this._symbolInstances}getResources(t,n,i){const s=this.layer,a=this.zoom;t&&t.setExtent(this.layerExtent);const o=s.getLayoutProperty("icon-image"),r=s.getLayoutProperty("text-field");let l=s.getLayoutProperty("text-transform"),h=s.getLayoutProperty("text-font");const x=[];let c,d,g,f;o&&!o.isDataDriven&&(c=o.getValue(a)),r&&!r.isDataDriven&&(d=r.getValue(a)),l&&l.isDataDriven||(g=s.getLayoutValue("text-transform",a),l=null),h&&h.isDataDriven||(f=s.getLayoutValue("text-font",a),h=null);for(const y of this._features){const u=y.getGeometry(t);if(!u||0===u.length)continue;let p,_;o&&(p=o.isDataDriven?o.getValue(a,y):this._replaceKeys(c,y.values),p&&n.add(p));let M=!1;if(r&&(_=r.isDataDriven?r.getValue(a,y):this._replaceKeys(d,y.values),_)){switch(_=_.replace(/\\n/g,"\n"),l&&(g=l.getValue(a,y)),g){case 2:_=_.toLowerCase();break;case 1:_=_.toUpperCase()}if(m._bidiEngine.hasBidiChar(_)){let e;e="rtl"===m._bidiEngine.checkContextual(_)?"IDNNN":"ICNNN",_=m._bidiEngine.bidiTransform(_,e,"VLYSN"),M=!0}const e=_.length;if(e>0){h&&(f=h.getValue(a,y));for(const t of f){let n=i[t];n||(n=i[t]=new Set);for(let t=0;t<e;t++){const e=_.charCodeAt(t);n.add(e)}}}}if(!p&&!_)continue;const b=s.getLayoutValue("symbol-sort-key",a,y),P={feature:y,sprite:p,label:_,rtl:M,geometry:u,hash:(_?Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(_):0)^(p?Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(p):0),priority:b,textFont:f};x.push(P)}this._symbolFeatures=x}processFeatures(e){e&&e.setExtent(this.layerExtent);const t=this.layer,i=this.zoom,s=t.getLayoutValue("symbol-placement",i),r=0!==s,g=t.getLayoutValue("symbol-spacing",i)*_Placement_js__WEBPACK_IMPORTED_MODULE_6__["TILE_PIXEL_RATIO"],f=t.getLayoutProperty("icon-image"),u=t.getLayoutProperty("text-field"),p=f?new _style_StyleLayer_js__WEBPACK_IMPORTED_MODULE_3__["IconLayout"](t,i,r):null,_=u?new _style_StyleLayer_js__WEBPACK_IMPORTED_MODULE_3__["TextLayout"](t,i,r):null,M=this._workerTileHandler;let b;f&&(b=M.getSpriteItems()),this._iconIndexStart=3*this._iconIndexBuffer.index,this._textIndexStart=3*this._textIndexBuffer.index,this._iconIndexCount=0,this._textIndexCount=0,this._markerMap.clear(),this._glyphMap.clear();const P=[];let I=1;_&&_.size&&(I=_.size/_TextShaping_js__WEBPACK_IMPORTED_MODULE_5__["SDF_GLYPH_SIZE"]);const A=_?_.maxAngle*_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["C_DEG_TO_RAD"]:0,V=_?_.size*_Placement_js__WEBPACK_IMPORTED_MODULE_6__["TILE_PIXEL_RATIO"]:0;for(const n of this._symbolFeatures){let e;p&&b&&n.sprite&&(e=b[n.sprite],e&&e.sdf&&(this._isIconSDF=!0));let t;!!e&&p.update(i,n.feature);let a=0;const o=n.label;if(o){_.update(i,n.feature);const e=r?_.keepUpright:_.writingMode&&_.writingMode.indexOf(1)>=0;let s=.5;switch(_.anchor){case 5:case 1:case 7:s=0;break;case 6:case 2:case 8:s=1}let c=.5;switch(_.anchor){case 5:case 3:case 6:c=0;break;case 7:case 4:case 8:c=1}let d=.5;switch(_.justify){case 0:d=s;break;case 1:d=0;break;case 3:d=1}const g=_.letterSpacing*_TextShaping_js__WEBPACK_IMPORTED_MODULE_5__["SDF_GLYPH_SIZE"],f=r?0:_.maxWidth*_TextShaping_js__WEBPACK_IMPORTED_MODULE_5__["SDF_GLYPH_SIZE"],y=_.lineHeight*_TextShaping_js__WEBPACK_IMPORTED_MODULE_5__["SDF_GLYPH_SIZE"],m=n.textFont.map((e=>M.getGlyphItems(e)));if(t=new _TextShaping_js__WEBPACK_IMPORTED_MODULE_5__["TextShaping"](m,f,y,g,s,c,d).getShaping(o,n.rtl,e),t&&t.length>0){let e=1e30,n=-1e30;for(const i of t)e=Math.min(e,i.x),n=Math.max(n,i.x);a=(n-e+2*_TextShaping_js__WEBPACK_IMPORTED_MODULE_5__["SDF_GLYPH_SIZE"])*I*_Placement_js__WEBPACK_IMPORTED_MODULE_6__["TILE_PIXEL_RATIO"]}}for(let i of n.geometry){const o=[];if(1===s){if(t&&t.length>0&&_&&_.size){const e=_.size*_Placement_js__WEBPACK_IMPORTED_MODULE_6__["TILE_PIXEL_RATIO"]*(2+Math.min(2,4*Math.abs(_.offset[1])));i=m._smoothVertices(i,e)}m._pushAnchors(o,i,g,a)}else 2===s?m._pushCenterAnchor(o,i):3===n.feature.type?m._pushCentroid(o,i):o.push(new _Placement_js__WEBPACK_IMPORTED_MODULE_6__["Anchor"](i[0].x,i[0].y));for(const s of o){if(s.x<0||s.x>_Placement_js__WEBPACK_IMPORTED_MODULE_6__["TILE_COORD_SIZE"]||s.y<0||s.y>_Placement_js__WEBPACK_IMPORTED_MODULE_6__["TILE_COORD_SIZE"])continue;if(r&&a>0&&0===_.rotationAlignment&&!m._honorsTextMaxAngle(i,s,a,A,V))continue;const o={shaping:t,line:i,iconMosaicItem:e,anchor:s,symbolFeature:n,textColliders:[],iconColliders:[],textVertexRanges:[],iconVertexRanges:[]};P.push(o),this._processFeature(o,p,_)}}}P.sort(y),this._addPlacedGlyphs(),this._symbolInstances=P}serialize(){let e=11;e+=this.layerUIDs.length,e+=3*this.markerPageMap.size,e+=3*this.glyphsPageMap.size,e+=m.symbolsSerializationLength(this._symbolInstances),e+=this._iconVertexBuffer.array.length,e+=this._iconIndexBuffer.array.length,e+=this._textVertexBuffer.array.length,e+=this._textIndexBuffer.array.length;const t=new Uint32Array(e),n=new Int32Array(t.buffer),i=new Float32Array(t.buffer);let s=0;t[s++]=this.type,t[s++]=this.layerUIDs.length;for(let a=0;a<this.layerUIDs.length;a++)t[s++]=this.layerUIDs[a];t[s++]=this._isIconSDF?1:0,t[s++]=this.markerPageMap.size;for(const[a,[o,r]]of this.markerPageMap)t[s++]=a,t[s++]=o,t[s++]=r;t[s++]=this.glyphsPageMap.size;for(const[a,[o,r]]of this.glyphsPageMap)t[s++]=a,t[s++]=o,t[s++]=r;t[s++]=this._iconVertexBuffer.index/4,t[s++]=this._textVertexBuffer.index/4,s=m.serializeSymbols(t,n,i,s,this._symbolInstances),t[s++]=this._iconVertexBuffer.array.length;for(let a=0;a<this._iconVertexBuffer.array.length;a++)n[s++]=this._iconVertexBuffer.array[a];t[s++]=this._iconIndexBuffer.array.length;for(let a=0;a<this._iconIndexBuffer.array.length;a++)t[s++]=this._iconIndexBuffer.array[a];t[s++]=this._textVertexBuffer.array.length;for(let a=0;a<this._textVertexBuffer.array.length;a++)n[s++]=this._textVertexBuffer.array[a];t[s++]=this._textIndexBuffer.array.length;for(let a=0;a<this._textIndexBuffer.array.length;a++)t[s++]=this._textIndexBuffer.array[a];return t.buffer}static symbolsSerializationLength(e){let t=0;t+=1;for(const n of e||[]){t+=4,t+=1;for(const e of n.textColliders)t+=f;for(const e of n.iconColliders)t+=f;t+=1,t+=2*n.textVertexRanges.length,t+=1,t+=2*n.iconVertexRanges.length}return t}static serializeSymbols(e,t,n,i,s){s=s||[],t[i++]=s.length;for(const a of s){t[i++]=a.anchor.x,t[i++]=a.anchor.y,t[i++]=a.symbolFeature.hash,t[i++]=a.symbolFeature.priority,t[i++]=a.textColliders.length+a.iconColliders.length;for(const e of a.textColliders)t[i++]=e.xTile,t[i++]=e.yTile,t[i++]=e.dxPixels,t[i++]=e.dyPixels,t[i++]=e.hard?1:0,t[i++]=e.partIndex,n[i++]=e.minLod,n[i++]=e.maxLod,t[i++]=e.width,t[i++]=e.height;for(const e of a.iconColliders)t[i++]=e.xTile,t[i++]=e.yTile,t[i++]=e.dxPixels,t[i++]=e.dyPixels,t[i++]=e.hard?1:0,t[i++]=e.partIndex,n[i++]=e.minLod,n[i++]=e.maxLod,t[i++]=e.width,t[i++]=e.height;t[i++]=a.textVertexRanges.length;for(const[e,n]of a.textVertexRanges)t[i++]=e,t[i++]=n;t[i++]=a.iconVertexRanges.length;for(const[e,n]of a.iconVertexRanges)t[i++]=e,t[i++]=n}return i}_replaceKeys(e,t){return e.replace(/{([^{}]+)}/g,(function(e,n){return n in t?t[n]:""}))}_processFeature(e,t,n){const{line:s,iconMosaicItem:a,shaping:o,anchor:r}=e,l=this.zoom,h=this.layer,x=!!a;let c=!0;x&&(c=t.optional||!a);const d=o&&o.length>0;let g,f,y=!0;if(d&&(y=n.optional),x&&(g=this._placementEngine.getIconPlacement(r,a,t)),(g||c)&&(d&&(f=this._placementEngine.getTextPlacement(r,o,s,n)),f||y)){if(g&&f||(y||c?y||f?c||g||(f=null):g=null:(g=null,f=null)),f){const t=h.hasDataDrivenText?h.textMaterial.encodeAttributes(e.symbolFeature.feature,l,h):null;if(this._storePlacedGlyphs(e,f.shapes,l,n.rotationAlignment,t),f.textColliders){e.textColliders=f.textColliders;for(const e of f.textColliders){e.minLod=Math.max(l+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(e.minLod),0),e.maxLod=Math.min(l+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(e.maxLod),25);const t=e.angle;if(t){const n=Math.cos(t),i=Math.sin(t),s=e.dxPixels*n-e.dyPixels*i,a=e.dxPixels*i+e.dyPixels*n,o=(e.dxPixels+e.width)*n-e.dyPixels*i,r=(e.dxPixels+e.width)*i+e.dyPixels*n,l=e.dxPixels*n-(e.dyPixels+e.height)*i,h=e.dxPixels*i+(e.dyPixels+e.height)*n,x=(e.dxPixels+e.width)*n-(e.dyPixels+e.height)*i,c=(e.dxPixels+e.width)*i+(e.dyPixels+e.height)*n,d=Math.min(s,o,l,x),g=Math.max(s,o,l,x),f=Math.min(a,r,h,c),y=Math.max(a,r,h,c);e.dxPixels=d,e.dyPixels=f,e.width=g-d,e.height=y-f}}}}if(g){const n=h.hasDataDrivenIcon?h.iconMaterial.encodeAttributes(e.symbolFeature.feature,l,h):null;if(this._addPlacedIcons(e,g.shapes,l,a.page,1===t.rotationAlignment,n),g.iconColliders){e.iconColliders=g.iconColliders;for(const e of g.iconColliders){e.minLod=Math.max(l+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(e.minLod),0),e.maxLod=Math.min(l+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(e.maxLod),25);const t=e.angle;if(t){const n=Math.cos(t),i=Math.sin(t),s=e.dxPixels*n-e.dyPixels*i,a=e.dxPixels*i+e.dyPixels*n,o=(e.dxPixels+e.width)*n-e.dyPixels*i,r=(e.dxPixels+e.width)*i+e.dyPixels*n,l=e.dxPixels*n-(e.dyPixels+e.height)*i,h=e.dxPixels*i+(e.dyPixels+e.height)*n,x=(e.dxPixels+e.width)*n-(e.dyPixels+e.height)*i,c=(e.dxPixels+e.width)*i+(e.dyPixels+e.height)*n,d=Math.min(s,o,l,x),g=Math.max(s,o,l,x),f=Math.min(a,r,h,c),y=Math.max(a,r,h,c);e.dxPixels=d,e.dyPixels=f,e.width=g-d,e.height=y-f}}}}}}_addPlacedIcons(e,t,n,s,a,o){const r=Math.max(n-1,0),l=this._iconVertexBuffer,h=this._iconIndexBuffer,x=this._markerMap;for(const c of t){const t=a?0:Math.max(n+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(c.minzoom),r),d=a?25:Math.min(n+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(c.maxzoom),25);if(d<=t)continue;const g=c.tl,f=c.tr,y=c.bl,m=c.br,u=c.mosaicRect,p=c.labelAngle,_=c.minAngle,M=c.maxAngle,b=c.anchor,P=l.index,I=u.x,A=u.y,V=I+u.width,w=A+u.height,L=l.index;l.add(b.x,b.y,g.x,g.y,I,A,p,_,M,t,d,o),l.add(b.x,b.y,f.x,f.y,V,A,p,_,M,t,d,o),l.add(b.x,b.y,y.x,y.y,I,w,p,_,M,t,d,o),l.add(b.x,b.y,m.x,m.y,V,w,p,_,M,t,d,o),e.iconVertexRanges.length>0&&e.iconVertexRanges[0][0]+e.iconVertexRanges[0][1]===L?e.iconVertexRanges[0][1]+=4:e.iconVertexRanges.push([L,4]),h.add(P+0,P+1,P+2),h.add(P+1,P+2,P+3),x.has(s)?x.get(s)[1]+=6:x.set(s,[this._iconIndexStart+this._iconIndexCount,6]),this._iconIndexCount+=6}}_addPlacedGlyphs(){const e=this._textVertexBuffer,t=this._textIndexBuffer,n=this._glyphMap;for(const[i,s]of this._glyphBufferDataStorage)for(const a of s){const s=e.index,o=a.symbolInstance,r=a.ddAttributes,l=e.index;e.add(a.glyphAnchor[0],a.glyphAnchor[1],a.tl[0],a.tl[1],a.xmin,a.ymin,a.labelAngle,a.minAngle,a.maxAngle,a.minLod,a.maxLod,r),e.add(a.glyphAnchor[0],a.glyphAnchor[1],a.tr[0],a.tr[1],a.xmax,a.ymin,a.labelAngle,a.minAngle,a.maxAngle,a.minLod,a.maxLod,r),e.add(a.glyphAnchor[0],a.glyphAnchor[1],a.bl[0],a.bl[1],a.xmin,a.ymax,a.labelAngle,a.minAngle,a.maxAngle,a.minLod,a.maxLod,r),e.add(a.glyphAnchor[0],a.glyphAnchor[1],a.br[0],a.br[1],a.xmax,a.ymax,a.labelAngle,a.minAngle,a.maxAngle,a.minLod,a.maxLod,r),o.textVertexRanges.length>0&&o.textVertexRanges[0][0]+o.textVertexRanges[0][1]===l?o.textVertexRanges[0][1]+=4:o.textVertexRanges.push([l,4]),t.add(s+0,s+1,s+2),t.add(s+1,s+2,s+3),n.has(i)?n.get(i)[1]+=6:n.set(i,[this._textIndexStart+this._textIndexCount,6]),this._textIndexCount+=6}this._glyphBufferDataStorage.clear()}_storePlacedGlyphs(e,t,n,s,a){const o=Math.max(n-1,0),r=1===s;let l,h,x,c,d,g,f,y,m,u,p;for(const _ of t){if(l=r?0:Math.max(n+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(_.minzoom),o),h=r?25:Math.min(n+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(_.maxzoom),25),h<=l)continue;x=_.tl,c=_.tr,d=_.bl,g=_.br,f=_.labelAngle,y=_.minAngle,m=_.maxAngle,u=_.anchor,p=_.mosaicRect,this._glyphBufferDataStorage.has(_.page)||this._glyphBufferDataStorage.set(_.page,[]);this._glyphBufferDataStorage.get(_.page).push({glyphAnchor:[u.x,u.y],tl:[x.x,x.y],tr:[c.x,c.y],bl:[d.x,d.y],br:[g.x,g.y],xmin:p.x,ymin:p.y,xmax:p.x+p.width,ymax:p.y+p.height,labelAngle:f,minAngle:y,maxAngle:m,minLod:l,maxLod:h,placementLod:o,symbolInstance:e,ddAttributes:a})}}static _pushAnchors(e,t,n,i){n+=i;let a=0;const o=t.length-1;for(let s=0;s<o;s++)a+=_webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"].distance(t[s],t[s+1]);let l=i||n;if(l*=.5,a<=l)return;const h=l/a;let x=0,d=-(n=a/Math.max(Math.round(a/n),1))/2;const g=t.length-1;for(let r=0;r<g;r++){const i=t[r],a=t[r+1],o=a.x-i.x,l=a.y-i.y,g=Math.sqrt(o*o+l*l);let f;for(;d+n<x+g;){d+=n;const t=(d-x)/g,y=Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["interpolate"])(i.x,a.x,t),m=Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["interpolate"])(i.y,a.y,t);void 0===f&&(f=Math.atan2(l,o)),e.push(new _Placement_js__WEBPACK_IMPORTED_MODULE_6__["Anchor"](y,m,f,r,h))}x+=g}}static _pushCenterAnchor(e,t){let n=0;const i=t.length-1;for(let s=0;s<i;s++)n+=_webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"].distance(t[s],t[s+1]);const a=n/2;let o=0;const l=t.length-1;for(let r=0;r<l;r++){const n=t[r],i=t[r+1],l=i.x-n.x,h=i.y-n.y,x=Math.sqrt(l*l+h*h);if(a<o+x){const t=(a-o)/x,d=Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["interpolate"])(n.x,i.x,t),g=Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["interpolate"])(n.y,i.y,t),f=Math.atan2(h,l);return void e.push(new _Placement_js__WEBPACK_IMPORTED_MODULE_6__["Anchor"](d,g,f,r,0))}o+=x}}static _deviation(e,t,n){const i=(t.x-e.x)*(n.x-t.x)+(t.y-e.y)*(n.y-t.y),s=(t.x-e.x)*(n.y-t.y)-(t.y-e.y)*(n.x-t.x);return Math.atan2(s,i)}static _honorsTextMaxAngle(e,t,n,i,s){let a=0;const o=n/2;let l=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"](t.x,t.y),h=t.segment+1;for(;a>-o;){if(--h,h<0)return!1;a-=_webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"].distance(e[h],l),l=e[h]}a+=_webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"].distance(e[h],e[h+1]);const x=[];let c=0;const d=e.length;for(;a<o;){const t=e[h];let n,o=h;do{if(++o,o===d)return!1;n=e[o]}while(n.isEqual(t));let l,g=o;do{if(++g,g===d)return!1;l=e[g]}while(l.isEqual(n));const f=this._deviation(t,n,l);for(x.push({deviation:f,distToAnchor:a}),c+=f;a-x[0].distToAnchor>s;)c-=x.shift().deviation;if(Math.abs(c)>i)return!1;a+=_webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"].distance(n,l),h=o}return!0}static _smoothVertices(e,t){if(t<=0)return e;let n=e.length;if(n<3)return e;const i=[];let s=0,a=0;i.push(0);for(let y=1;y<n;y++){const t=_webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"].distance(e[y],e[y-1]);t>0&&(s+=t,i.push(s),a++,a!==y&&(e[a]=e[y]))}if(n=a+1,n<3)return e;t=Math.min(t,.2*s);const o=e[0].x,l=e[0].y,h=e[n-1].x,x=e[n-1].y,c=_webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"].sub(e[0],e[1]);c.normalize(),e[0].x+=t*c.x,e[0].y+=t*c.y,c.assignSub(e[n-1],e[n-2]),c.normalize(),e[n-1].x+=t*c.x,e[n-1].y+=t*c.y,i[0]-=t,i[n-1]+=t;const d=[];d.push(new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"](o,l));const g=1e-6,f=.5*t;for(let y=1;y<n-1;y++){let s=0,a=0,o=0;for(let n=y-1;n>=0;n--){const r=f+i[n+1]-i[y];if(r<0)break;const l=i[n+1]-i[n],h=i[y]-i[n]<f?1:r/l;if(h<g)break;const x=h*h,c=h*r-.5*x*l,d=h*l/t,m=e[n+1],u=e[n].x-m.x,p=e[n].y-m.y;s+=d/c*(m.x*h*r+.5*x*(r*u-l*m.x)-x*h*l*u/3),a+=d/c*(m.y*h*r+.5*x*(r*p-l*m.y)-x*h*l*p/3),o+=d}for(let r=y+1;r<n;r++){const n=f-i[r-1]+i[y];if(n<0)break;const l=i[r]-i[r-1],h=i[r]-i[y]<f?1:n/l;if(h<g)break;const x=h*h,c=h*n-.5*x*l,d=h*l/t,m=e[r-1],u=e[r].x-m.x,p=e[r].y-m.y;s+=d/c*(m.x*h*n+.5*x*(n*u-l*m.x)-x*h*l*u/3),a+=d/c*(m.y*h*n+.5*x*(n*p-l*m.y)-x*h*l*p/3),o+=d}d.push(new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"](s/o,a/o))}return d.push(new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"](h,x)),e[0].x=o,e[0].y=l,e[n-1].x=h,e[n-1].y=x,d}static _pushCentroid(e,t){const n=0,i=0,s=4096,a=4096,o=t.length-1;let r=0,l=0,h=0,x=t[0].x,d=t[0].y;x>s&&(x=s),x<n&&(x=n),d>a&&(d=a),d<i&&(d=i);for(let c=1;c<o;c++){let e=t[c].x,o=t[c].y,g=t[c+1].x,f=t[c+1].y;e>s&&(e=s),e<n&&(e=n),o>a&&(o=a),o<i&&(o=i),g>s&&(g=s),g<n&&(g=n),f>a&&(f=a),f<i&&(f=i);const y=(e-x)*(f-d)-(g-x)*(o-d);r+=y*(x+e+g),l+=y*(d+o+f),h+=y}r/=3*h,l/=3*h,isNaN(r)||isNaN(l)||e.push(new _Placement_js__WEBPACK_IMPORTED_MODULE_6__["Anchor"](r,l))}}m._bidiEngine=new _core_BidiEngine_js__WEBPACK_IMPORTED_MODULE_1__["default"];/* harmony default export */ __webpack_exports__["default"] = (m);


/***/ }),

/***/ "DtuG":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/buckets/LineBucket.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webgl_mesh_templates_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../webgl/mesh/templates/util.js */ "aixI");
/* harmony import */ var _webgl_TurboLine_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../webgl/TurboLine.js */ "Jimw");
/* harmony import */ var _BaseBucket_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseBucket.js */ "vgmk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const l=65535,s=1/3.8,x=.97,d=.8;class a extends _BaseBucket_js__WEBPACK_IMPORTED_MODULE_2__["default"]{constructor(e,t,r,n){super(e,t),this.type=2,this._tessellationOptions={},this.tessellationProperties={_lineVertexBuffer:null,_lineIndexBuffer:null,_hasPattern:null,_ddValues:null,_capType:null,_joinType:null,_miterLimitCosine:null,_roundLimitCosine:null},this.tessellationProperties._lineVertexBuffer=r,this.tessellationProperties._lineIndexBuffer=n,this.tessellationProperties._hasPattern=e.getPaintValue("line-pattern",this.zoom)||e.getPaintValue("line-dasharray",this.zoom).length>0,this._isThinLine=e.isThinLine,this._isThinLine?this._tessellationCallbacks={vertex:u(this.tessellationProperties),bridge:f(this.tessellationProperties)}:this._tessellationCallbacks={vertex:o(this.tessellationProperties),bridge:V(this.tessellationProperties)}}get lineIndexStart(){return this._lineIndexStart}get lineIndexCount(){return this._lineIndexCount}processFeatures(t){this._lineIndexStart=3*this.tessellationProperties._lineIndexBuffer.index,this._lineIndexCount=0;const n=this.layer,i=this.zoom;t&&t.setExtent(this.layerExtent);for(const r of this._features){const l=n.hasDataDrivenLine?n.lineMaterial.encodeAttributes(r,i,n):null;this.tessellationProperties._capType=n.getLayoutValue("line-cap",i,r),this.tessellationProperties._joinType=n.getLayoutValue("line-join",i,r),this.tessellationProperties._miterLimitCosine=Object(_webgl_mesh_templates_util_js__WEBPACK_IMPORTED_MODULE_0__["getLimitCosine"])(n.getLayoutValue("line-miter-limit",i,r)),this.tessellationProperties._roundLimitCosine=Object(_webgl_mesh_templates_util_js__WEBPACK_IMPORTED_MODULE_0__["getLimitCosine"])(n.getLayoutValue("line-round-limit",i,r));const s=r.getGeometry(t);this._processFeature(s,l)}Object(_webgl_TurboLine_js__WEBPACK_IMPORTED_MODULE_1__["cleanup"])()}serialize(){let e=6;e+=this.layerUIDs.length,e+=this.tessellationProperties._lineVertexBuffer.array.length,e+=this.tessellationProperties._lineIndexBuffer.array.length;const t=new Uint32Array(e),r=new Int32Array(t.buffer);let n=0;t[n++]=this.type,t[n++]=this.layerUIDs.length;for(let i=0;i<this.layerUIDs.length;i++)t[n++]=this.layerUIDs[i];t[n++]=this._lineIndexStart,t[n++]=this._lineIndexCount,t[n++]=this.tessellationProperties._lineVertexBuffer.array.length;for(let i=0;i<this.tessellationProperties._lineVertexBuffer.array.length;i++)r[n++]=this.tessellationProperties._lineVertexBuffer.array[i];t[n++]=this.tessellationProperties._lineIndexBuffer.array.length;for(let i=0;i<this.tessellationProperties._lineIndexBuffer.array.length;i++)t[n++]=this.tessellationProperties._lineIndexBuffer.array[i];return t.buffer}_processFeature(e,t){if(!e)return;const r=e.length;for(let n=0;n<r;n++)this._processGeometry(e[n],t)}_processGeometry(e,t){if(e.length<2)return;const r=.001;let i,x,d=e[0],a=1;for(;a<e.length;)i=e[a].x-d.x,x=e[a].y-d.y,i*i+x*x<r*r?e.splice(a,1):(d=e[a],++a);if(e.length<2)return;const u=3*this.tessellationProperties._lineIndexBuffer.index;this._tessellationOptions.trackDistance=this.tessellationProperties._hasPattern,this._tessellationOptions.initialDistance=0,this._tessellationOptions.thin=this._isThinLine,this._tessellationOptions.wrapDistance=l,this._tessellationOptions.outerBisectorAutoSplitThreshold=s,this._tessellationOptions.enableOuterBisectorSplit=this.tessellationProperties._hasPattern,this._tessellationOptions.innerBisectorAutoSplitThreshold=s,this._tessellationOptions.enableInnerBisectorSplit=this.tessellationProperties._hasPattern,this.tessellationProperties._ddValues=t,Object(_webgl_TurboLine_js__WEBPACK_IMPORTED_MODULE_1__["tessellate"])(e,this._tessellationOptions,this._tessellationCallbacks),this._lineIndexCount+=3*this.tessellationProperties._lineIndexBuffer.index-u}}const u=e=>t=>{t.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(t.currentVertex.x,t.currentVertex.y,t.prevNormal.x,t.prevNormal.y,0,-1,t.distance,e._ddValues),t.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(t.currentVertex.x,t.currentVertex.y,-t.prevNormal.x,-t.prevNormal.y,0,1,t.distance,e._ddValues),t.exit0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(t.currentVertex.x,t.currentVertex.y,t.nextNormal.x,t.nextNormal.y,0,-1,t.distance,e._ddValues),t.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(t.currentVertex.x,t.currentVertex.y,-t.nextNormal.x,-t.nextNormal.y,0,1,t.distance,e._ddValues)},f=e=>t=>{e._lineIndexBuffer.add(t.leftExit0,t.rightEntry0,t.leftExit2),e._lineIndexBuffer.add(t.rightEntry0,t.rightEntry2,t.leftExit2)},o=e=>r=>{const n=2===e._joinType?e._miterLimitCosine:e._roundLimitCosine,i=r.isCap&&0!==e._capType;let l=!1;r.cosine>x?(r.exit0=r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.bisector.x/r.cosine,r.bisector.y/r.cosine,0,-1,r.distance,e._ddValues),r.exit2=r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.bisector.x/r.cosine,-r.bisector.y/r.cosine,0,1,r.distance,e._ddValues)):r.cosine<1-x?(r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.prevNormal.x,r.prevNormal.y,0,-1,r.distance,e._ddValues),r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.prevNormal.x,-r.prevNormal.y,0,1,r.distance,e._ddValues),r.exit0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.nextNormal.x,r.nextNormal.y,0,-1,r.distance,e._ddValues),r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.nextNormal.x,-r.nextNormal.y,0,1,r.distance,e._ddValues)):r.canSplit?(Object(_webgl_TurboLine_js__WEBPACK_IMPORTED_MODULE_1__["splitVertex"])(),r.sign>0?(r.splitInner?(r.exit0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.leftInner.x,r.leftInner.y,0,-1,r.distance,e._ddValues),r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.rightInner.x,r.rightInner.y,0,-1,r.distance,e._ddValues)):(r.exit0=r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.bisector.x/r.cosine,r.bisector.y/r.cosine,0,-1,r.distance,e._ddValues)),r.cosine<n?(l=!r.isCap,r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.prevNormal.x,-r.prevNormal.y,0,1,r.distance,e._ddValues),r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.nextNormal.x,-r.nextNormal.y,0,1,r.distance,e._ddValues)):r.splitOuter?(l=l||r.gapOuter,r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.leftOuter.x,-r.leftOuter.y,0,1,r.distance,e._ddValues),r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.rightOuter.x,-r.rightOuter.y,0,1,r.distance,e._ddValues)):(r.entry2=r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.bisector.x/r.cosine,-r.bisector.y/r.cosine,0,1,r.distance,e._ddValues))):(r.splitInner?(r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.leftInner.x,-r.leftInner.y,0,1,r.distance,e._ddValues),r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.rightInner.x,-r.rightInner.y,0,1,r.distance,e._ddValues)):(r.exit2=r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.bisector.x/r.cosine,-r.bisector.y/r.cosine,0,1,r.distance,e._ddValues)),r.cosine<n?(l=!r.isCap,r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.prevNormal.x,r.prevNormal.y,0,-1,r.distance,e._ddValues),r.exit0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.nextNormal.x,r.nextNormal.y,0,-1,r.distance,e._ddValues)):r.splitOuter?(l=l||r.gapOuter,r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.leftOuter.x,r.leftOuter.y,0,-1,r.distance,e._ddValues),r.exit0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.rightOuter.x,r.rightOuter.y,0,-1,r.distance,e._ddValues)):(r.exit0=r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.bisector.x/r.cosine,r.bisector.y/r.cosine,0,-1,r.distance,e._ddValues)))):r.sign>0?(r.exit0=r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.bisector.x/r.cosine,r.bisector.y/r.cosine,0,-1,r.distance,e._ddValues),r.cosine<n?(l=!r.isCap,r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.prevNormal.x,-r.prevNormal.y,0,1,r.distance,e._ddValues),r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.nextNormal.x,-r.nextNormal.y,0,1,r.distance,e._ddValues)):(r.entry2=r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.bisector.x/r.cosine,-r.bisector.y/r.cosine,0,1,r.distance,e._ddValues))):(r.exit2=r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.bisector.x/r.cosine,-r.bisector.y/r.cosine,0,1,r.distance,e._ddValues),r.cosine<n?(l=!r.isCap,r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.prevNormal.x,r.prevNormal.y,0,-1,r.distance,e._ddValues),r.exit0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.nextNormal.x,r.nextNormal.y,0,-1,r.distance,e._ddValues)):(r.exit0=r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.bisector.x/r.cosine,r.bisector.y/r.cosine,0,-1,r.distance,e._ddValues)));let s;if(r.canSplit&&(r.splitInner||r.splitOuter)||l||i?(s=r.entry1=r.exit1=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,0,0,0,0,r.distance,e._ddValues)):s=r.entry1=r.exit1=null,l&&1!==e._joinType)e._lineIndexBuffer.add(s,r.sign>0?r.exit2:r.entry0,r.sign>0?r.entry2:r.exit0);else if(i&&1===e._capType||l&&1===e._joinType){let t,n,i,l,x,a;if(r.isCap){const e=Math.PI;x=Math.ceil(e/d),a=e/x,r.isFirstVertex?(t=r.prevNormal.x,n=r.prevNormal.y,i=r.entry0,l=r.entry2):r.isLastVertex&&(t=-r.nextNormal.x,n=-r.nextNormal.y,i=r.exit2,l=r.exit0)}else{const e=2*Math.acos(r.cosine);x=Math.ceil(e/d),a=e/x,t=r.sign>0?-r.prevNormal.x:r.nextNormal.x,n=r.sign>0?-r.prevNormal.y:r.nextNormal.y,i=r.sign>0?r.entry2:r.exit0,l=r.sign>0?r.exit2:r.entry0}const u=Math.cos(a),f=Math.sin(a),o=f*t+u*n;let V,c;t=u*t-f*n,n=o;for(let d=0;d<x;++d){if(V=c,d<x-1)if(r.isCap){const i=r.isFirstVertex?-1:1;c=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,t,n,i,0,r.distance,e._ddValues)}else c=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,t,n,0,r.sign,r.distance,e._ddValues);e._lineIndexBuffer.add(0===d?i:V,s,d===x-1?l:c);const a=f*t+u*n;t=u*t-f*n,n=a}}else if(i&&2===e._capType){const t=r.isFirstVertex?1:-1;let n,i;e._hasPattern?(n=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.prevNormal.x-t*r.inbound.x,r.prevNormal.y-t*r.inbound.y,-t,-1,r.distance,e._ddValues),i=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.prevNormal.x-t*r.inbound.x,-r.prevNormal.y-t*r.inbound.y,-t,1,r.distance,e._ddValues)):(n=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.prevNormal.x-t*r.inbound.x,r.prevNormal.y-t*r.inbound.y,0,-1,r.distance,e._ddValues),i=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.prevNormal.x-t*r.inbound.x,-r.prevNormal.y-t*r.inbound.y,0,1,r.distance,e._ddValues)),t>0?(e._lineIndexBuffer.add(s,r.entry2,i),e._lineIndexBuffer.add(s,i,n),e._lineIndexBuffer.add(s,n,r.entry0)):(e._lineIndexBuffer.add(s,i,r.exit2),e._lineIndexBuffer.add(s,n,i),e._lineIndexBuffer.add(s,r.exit0,n))}},V=e=>t=>{e._lineIndexBuffer.add(t.leftExit0,t.rightEntry0,null!=t.leftExit1?t.leftExit1:t.leftExit2),e._lineIndexBuffer.add(t.rightEntry0,null!=t.rightEntry1?t.rightEntry1:t.rightEntry2,null!=t.leftExit1?t.leftExit1:t.leftExit2),null!=t.leftExit1&&null!=t.rightEntry1?(e._lineIndexBuffer.add(t.leftExit1,t.rightEntry1,t.leftExit2),e._lineIndexBuffer.add(t.rightEntry1,t.rightEntry2,t.leftExit2)):null!=t.leftExit1?e._lineIndexBuffer.add(t.leftExit1,t.rightEntry2,t.leftExit2):null!=t.rightEntry1&&e._lineIndexBuffer.add(t.rightEntry1,t.rightEntry2,t.leftExit2)};/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ }),

/***/ "HQFP":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GeometryUtils.js ***!
  \**************************************************************************/
/*! exports provided: C_256_TO_RAD, C_2PI, C_DEG_TO_256, C_DEG_TO_RAD, C_INFINITY, C_PI, C_PI_BY_2, C_RAD_TO_256, C_SQRT2, C_SQRT2_INV, between, degToByte, interpolate, log2, positiveMod, radToByte, sqr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_256_TO_RAD", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_2PI", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_DEG_TO_256", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_DEG_TO_RAD", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_INFINITY", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_PI", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_PI_BY_2", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_RAD_TO_256", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_SQRT2", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_SQRT2_INV", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degToByte", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log2", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positiveMod", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radToByte", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqr", function() { return T; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const n=Number.POSITIVE_INFINITY,t=Math.PI,r=2*t,u=t/2,o=128/t,e=t/128,c=256/360,f=t/180,i=1.414213562,I=1/i,N=1/Math.LN2;function a(n,t){return(n%=t)>=0?n:n+t}function h(n){return a(n*o,256)}function M(n){return a(n*c,256)}function P(n){return Math.log(n)*N}function T(n){return n*n}function b(n,t,r){return n*(1-r)+t*r}function g(n,t,r){return n>=t&&n<=r||n>=r&&n<=t}


/***/ }),

/***/ "IMID":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/WorkerTile.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _tiling_enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tiling/enums.js */ "zJVD");
/* harmony import */ var _Placement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Placement.js */ "ixhk");
/* harmony import */ var _TileParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TileParser.js */ "mKU8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class n{constructor(e,t,i,n){this.status=_tiling_enums_js__WEBPACK_IMPORTED_MODULE_2__["TileStatus"].INITIALIZED,this.placementEngine=new _Placement_js__WEBPACK_IMPORTED_MODULE_3__["PlacementEngine"],this.tileKey=e,this.refKeys=t,this._workerTileHandler=i,this._styleRepository=n}release(){this.tileKey="",this.refKeys=null,this.status=_tiling_enums_js__WEBPACK_IMPORTED_MODULE_2__["TileStatus"].INITIALIZED,this._workerTileHandler=null}async parse(r,i,n){const a=n&&n.signal;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(a)){const e=()=>{a.removeEventListener("abort",e),this.status=_tiling_enums_js__WEBPACK_IMPORTED_MODULE_2__["TileStatus"].INVALID};a.addEventListener("abort",e)}let o;try{o=await this._parse(r,n)}catch(h){if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(h))throw h;return{result:[],transferList:[]}}this.status=_tiling_enums_js__WEBPACK_IMPORTED_MODULE_2__["TileStatus"].READY;const l=[];for(const e of o){const t=e.serialize();l.push(t)}return{result:l,transferList:l.length<=i&&l}}setObsolete(){this.status=_tiling_enums_js__WEBPACK_IMPORTED_MODULE_2__["TileStatus"].INVALID}getLayers(){return this._workerTileHandler.getLayers()}getWorkerTileHandler(){return this._workerTileHandler}async _parse(e,t){const r=e.sourceName2DataAndRefKey;if(0===Object.keys(r).length)return[];this.status=_tiling_enums_js__WEBPACK_IMPORTED_MODULE_2__["TileStatus"].MODIFIED;return new _TileParser_js__WEBPACK_IMPORTED_MODULE_4__["default"](r,this,t.client,this._styleRepository,e.styleLayerUIDs).parse(t)}}/* harmony default export */ __webpack_exports__["default"] = (n);


/***/ }),

/***/ "KFs1":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/buckets/FillBucket.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_ArrayPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/ArrayPool.js */ "VW+2");
/* harmony import */ var _core_libs_earcut_earcut_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/libs/earcut/earcut.js */ "+yyC");
/* harmony import */ var _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../webgl/Geometry.js */ "OXZQ");
/* harmony import */ var _webgl_mesh_Tesselator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../webgl/mesh/Tesselator.js */ "6NBT");
/* harmony import */ var _BaseBucket_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BaseBucket.js */ "vgmk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const s=new _webgl_mesh_Tesselator_js__WEBPACK_IMPORTED_MODULE_3__["default"];class o extends _BaseBucket_js__WEBPACK_IMPORTED_MODULE_4__["default"]{constructor(e,t,l,i,r,n){super(e,t),this.type=1,this._fillVertexBuffer=l,this._fillIndexBuffer=i,this._outlineVertexBuffer=r,this._outlineIndexBuffer=n}get fillIndexStart(){return this._fillIndexStart}get fillIndexCount(){return this._fillIndexCount}get outlineIndexStart(){return this._outlineIndexStart}get outlineIndexCount(){return this._outlineIndexCount}processFeatures(e){this._fillIndexStart=3*this._fillIndexBuffer.index,this._fillIndexCount=0,this._outlineIndexStart=3*this._outlineIndexBuffer.index,this._outlineIndexCount=0;const t=this.layer,l=this.zoom;e&&e.setExtent(this.layerExtent);let i=void 0===t.getPaintValue("fill-pattern",l)&&t.getPaintValue("fill-antialias",l);if(t.outlineUsesFillColor){if(i&&!t.hasDataDrivenOpacity){const e=t.getPaintValue("fill-opacity",l),r=t.getPaintValue("fill-opacity",l+1);e<1&&r<1&&(i=!1)}if(i&&!t.hasDataDrivenColor){const e=t.getPaintValue("fill-color",l),r=t.getPaintValue("fill-color",l+1);e[3]<1&&r[3]<1&&(i=!1)}}const{fillMaterial:r,outlineMaterial:n,hasDataDrivenFill:s,hasDataDrivenOutline:o}=t;for(const f of this._features){const a=s?r.encodeAttributes(f,l,t):null,u=i&&o?n.encodeAttributes(f,l,t):null,d=f.getGeometry(e),h=null==e?void 0:e.validateTessellation;this._processFeature(d,i,t.outlineUsesFillColor,a,u,h)}}serialize(){let e=10;e+=this.layerUIDs.length,e+=this._fillVertexBuffer.array.length,e+=this._fillIndexBuffer.array.length,e+=this._outlineVertexBuffer.array.length,e+=this._outlineIndexBuffer.array.length;const t=new Uint32Array(e),l=new Int32Array(t.buffer);let i=0;t[i++]=this.type,t[i++]=this.layerUIDs.length;for(let r=0;r<this.layerUIDs.length;r++)t[i++]=this.layerUIDs[r];t[i++]=this._fillIndexStart,t[i++]=this._fillIndexCount,t[i++]=this._outlineIndexStart,t[i++]=this._outlineIndexCount,t[i++]=this._fillVertexBuffer.array.length;for(let r=0;r<this._fillVertexBuffer.array.length;r++)l[i++]=this._fillVertexBuffer.array[r];t[i++]=this._fillIndexBuffer.array.length;for(let r=0;r<this._fillIndexBuffer.array.length;r++)t[i++]=this._fillIndexBuffer.array[r];t[i++]=this._outlineVertexBuffer.array.length;for(let r=0;r<this._outlineVertexBuffer.array.length;r++)l[i++]=this._outlineVertexBuffer.array[r];t[i++]=this._outlineIndexBuffer.array.length;for(let r=0;r<this._outlineIndexBuffer.array.length;r++)t[i++]=this._outlineIndexBuffer.array[r];return t.buffer}_processFeature(e,t,l,i,r,n){if(!e)return;const s=e.length,f=!r||0===r.length;if(t&&(!l||f))for(let o=0;o<s;o++)this._processOutline(e[o],r);const a=128;let u;for(let d=0;d<s;d++){const t=o._area(e[d]);t>a?(void 0!==u&&this._processFill(e,u,i,n),u=[d]):t<-a&&void 0!==u&&u.push(d)}void 0!==u&&this._processFill(e,u,i,n)}_processOutline(e,t){const l=this._outlineVertexBuffer,r=this._outlineIndexBuffer,n=r.index;let s,o,f;const a=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](0,0),u=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](0,0),d=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](0,0);let h=-1,x=-1,y=-1,c=-1,_=-1,g=!1;const I=0;let B=e.length;if(B<2)return;const p=e[I];let V=e[B-1];for(;B&&V.isEqual(p);)--B,V=e[B-1];if(!(B-I<2)){for(let i=I;i<B;++i){i===I?(s=e[B-1],o=e[I],f=e[I+1],a.assignSub(o,s),a.normalize(),a.rightPerpendicular()):(s=o,o=f,f=i!==B-1?e[i+1]:e[I],a.assign(u));const n=this._isClipEdge(s,o);-1===c&&(g=n),u.assignSub(f,o),u.normalize(),u.rightPerpendicular();const p=a.x*u.y-a.y*u.x;d.assignAdd(a,u),d.normalize();const V=-d.x*-a.x+-d.y*-a.y;let C=Math.abs(0!==V?1/V:1);C>8&&(C=8),p>=0?(y=l.add(o.x,o.y,a.x,a.y,0,1,t),-1===c&&(c=y),h>=0&&x>=0&&y>=0&&!n&&r.add(h,x,y),x=l.add(o.x,o.y,C*-d.x,C*-d.y,0,-1,t),-1===_&&(_=x),h>=0&&x>=0&&y>=0&&!n&&r.add(h,x,y),h=x,x=y,y=l.add(o.x,o.y,d.x,d.y,0,1,t),h>=0&&x>=0&&y>=0&&!n&&r.add(h,x,y),x=l.add(o.x,o.y,u.x,u.y,0,1,t),h>=0&&x>=0&&y>=0&&!n&&r.add(h,x,y)):(y=l.add(o.x,o.y,C*d.x,C*d.y,0,1,t),-1===c&&(c=y),h>=0&&x>=0&&y>=0&&!n&&r.add(h,x,y),x=l.add(o.x,o.y,-a.x,-a.y,0,-1,t),-1===_&&(_=x),h>=0&&x>=0&&y>=0&&!n&&r.add(h,x,y),h=x,x=y,y=l.add(o.x,o.y,-d.x,-d.y,0,-1,t),h>=0&&x>=0&&y>=0&&!n&&r.add(h,x,y),h=l.add(o.x,o.y,-u.x,-u.y,0,-1,t),h>=0&&x>=0&&y>=0&&!n&&r.add(h,x,y))}h>=0&&x>=0&&c>=0&&!g&&r.add(h,x,c),h>=0&&c>=0&&_>=0&&!g&&r.add(h,_,c),this._outlineIndexCount+=3*(r.index-n)}}_processFill(i,r,n,s){let o;r.length>1&&(o=[]);let a=0;for(const e of r)0!==a&&o.push(a),a+=i[e].length;const u=2*a,d=_core_ArrayPool_js__WEBPACK_IMPORTED_MODULE_0__["default"].acquire();for(const e of r){const t=i[e],l=t.length;for(let e=0;e<l;++e)d.push(t[e].x,t[e].y)}const h=Object(_core_libs_earcut_earcut_js__WEBPACK_IMPORTED_MODULE_1__["earcut"])(d,o,2);if(s&&Object(_core_libs_earcut_earcut_js__WEBPACK_IMPORTED_MODULE_1__["deviation"])(d,o,2,h)>0){const e=[],t=[];if(f(e,t,i,r),t.length>0){const l=this._fillVertexBuffer.index;let i=0;for(;i<e.length;)this._fillVertexBuffer.add(e[i++],e[i++],n);let r=0;for(;r<t.length;)this._fillIndexBuffer.add(l+t[r+0],l+t[r+1],l+t[r+2]),r+=3;this._fillIndexCount+=t.length}}else{const e=h.length;if(e>0){const t=this._fillVertexBuffer.index;let l=0;for(;l<u;)this._fillVertexBuffer.add(d[l++],d[l++],n);let i=0;for(;i<e;)this._fillIndexBuffer.add(t+h[i++],t+h[i++],t+h[i++]);this._fillIndexCount+=e}}_core_ArrayPool_js__WEBPACK_IMPORTED_MODULE_0__["default"].release(d)}_isClipEdge(e,t){return e.x===t.x?e.x<=-64||e.x>=4160:e.y===t.y&&(e.y<=-64||e.y>=4160)}static _area(e){let t=0;const l=e.length-1;for(let i=0;i<l;i++)t+=(e[i].x-e[i+1].x)*(e[i].y+e[i+1].y);return t+=(e[l].x-e[0].x)*(e[l].y+e[0].y),.5*t}}function f(e,t,l,i){let r,n;s.beginPolygon(e,t);for(const o of i){const e=l[o];if(!(e.length<3)){s.beginContour();for(let t=0;t<e.length;++t){r=e[t].x,n=e[t].y;const l=[r,n,0];s.addVertex(l,l)}s.endContour()}}s.endPolygon()}/* harmony default export */ __webpack_exports__["default"] = (o);


/***/ }),

/***/ "VLY0":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/WorkerTileHandler.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/StyleRepository.js */ "kB7V");
/* harmony import */ var _WorkerTile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkerTile.js */ "IMID");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class r{constructor(){this._spriteInfo={},this._glyphInfo={}}reset(){return this._spriteInfo={},this._glyphInfo={},Promise.resolve()}getLayers(){var e;return null==(e=this._styleRepository)?void 0:e.layers}async createTileAndParse(t,r){const{key:o}=t,i={};for(const e of Object.keys(t.sourceName2DataAndRefKey)){const s=t.sourceName2DataAndRefKey[e];i[e]=s.refKey}const n=new _WorkerTile_js__WEBPACK_IMPORTED_MODULE_2__["default"](o,i,this,this._styleRepository);try{return await n.parse(t,this._vectorTileLayerMaxBuffers,r)}catch(l){if(n.setObsolete(),n.release(),!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["isAbortError"])(l))throw l;return null}}updateStyle(e){if(!e||0===e.length||!this._styleRepository)return;const t=this._styleRepository;for(const s of e){const e=s.type,r=s.data;switch(e){case 0:t.setPaintProperties(r.layerName,r.paint);break;case 1:t.setLayoutProperties(r.layerName,r.layout);break;case 3:t.deleteStyleLayer(r.layerName);break;case 2:t.setStyleLayer(r.layer,r.index)}}}setStyle(e){this._styleRepository=new _style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_1__["default"](e.style),this._spriteInfo={},this._glyphInfo={},this._vectorTileLayerMaxBuffers=e.vectorTileLayerMaxBuffers}fetchSprites(e,t,s){const r=[],o=this._spriteInfo;return e.forEach((e=>{void 0===o[e]&&r.push(e)})),0===r.length?Promise.resolve():t.invoke("getSprites",r,{signal:s&&s.signal}).then((e=>{for(const t in e){const s=e[t];o[t]=s}}))}getSpriteItems(){return this._spriteInfo}fetchGlyphs(e,t,s,r,o){const i=[];let n=this._glyphInfo[t];return n?s.forEach((e=>{n[e]||i.push(e)})):(n=this._glyphInfo[t]=[],s.forEach((e=>i.push(e)))),0===i.length?Promise.resolve():r.invoke("getGlyphs",{tileID:e,font:t,codePoints:i},o).then((e=>{for(let t=0;t<e.length;t++)e[t]&&(n[t]=e[t])}))}getGlyphItems(e){return this._glyphInfo[e]}}/* harmony default export */ __webpack_exports__["default"] = (r);


/***/ }),

/***/ "X2wA":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/_commonjsHelpers.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o(e,n,o){return e(o={path:n,exports:{},require:function(e,n){return r(e,null==n?o.path:n)}},o.exports),o.exports}function r(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}


/***/ }),

/***/ "XvKw":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec4f32.js ***!
  \*****************************************************/
/*! exports provided: O, U, Z, a, b, c, d, e, f, g, h, i, j, o, u, v, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function n(){return new Float32Array(4)}function r(n){const r=new Float32Array(4);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r}function t(n,r,t,a){const e=new Float32Array(4);return e[0]=n,e[1]=r,e[2]=t,e[3]=a,e}function a(n,r){return new Float32Array(n,r,4)}function e(){return n()}function u(){return t(1,1,1,1)}function o(){return t(1,0,0,0)}function s(){return t(0,1,0,0)}function c(){return t(0,0,1,0)}function i(){return t(0,0,0,1)}const f=e(),l=u(),_=o(),w=s(),N=c(),U=i();var y=Object.freeze({__proto__:null,create:n,clone:r,fromValues:t,createView:a,zeros:e,ones:u,unitX:o,unitY:s,unitZ:c,unitW:i,ZEROS:f,ONES:l,UNIT_X:_,UNIT_Y:w,UNIT_Z:N,UNIT_W:U});


/***/ }),

/***/ "Zcxi":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/Feature.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl/Geometry.js */ "OXZQ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class t{constructor(e,t){this.values={};const s=t.keys,r=t.values;for(;e.next();)switch(e.tag()){case 1:this.id=e.getUInt64();break;case 2:{const t=e.getMessage(),o=this.values;for(;!t.empty();){const e=t.getUInt32(),a=t.getUInt32();o[s[e]]=r[a]}t.release();break}case 3:this.type=e.getUInt32();break;case 4:this._pbfGeometry=e.getMessage();break;default:e.skip()}}getGeometry(t){if(void 0!==this._geometry)return this._geometry;if(!this._pbfGeometry)return null;const s=this._pbfGeometry;let r,o;this._pbfGeometry=null,t?t.reset(this.type):r=[];let a,n=1,i=0,l=0,h=0;for(;!s.empty();){if(0===i){const e=s.getUInt32();n=7&e,i=e>>3}switch(i--,n){case 1:l+=s.getSInt32(),h+=s.getSInt32(),t?t.moveTo(l,h):(o&&r.push(o),o=[],o.push(new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["Point"](l,h)));break;case 2:l+=s.getSInt32(),h+=s.getSInt32(),t?t.lineTo(l,h):o.push(new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["Point"](l,h));break;case 7:t?t.close():o&&!o[0].equals(l,h)&&o.push(o[0].clone());break;default:throw s.release(),new Error("Invalid path operation")}}return t?a=t.result():(o&&r.push(o),a=r),s.release(),this._geometry=a,a}}/* harmony default export */ __webpack_exports__["default"] = (t);


/***/ }),

/***/ "ixhk":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/Placement.js ***!
  \****************************************************************************/
/*! exports provided: Anchor, PlacedSymbol, Placement, PlacementEngine, TILE_COORD_SIZE, TILE_PIXEL_RATIO, TILE_PIXEL_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Anchor", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacedSymbol", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Placement", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementEngine", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_COORD_SIZE", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_PIXEL_RATIO", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_PIXEL_SIZE", function() { return m; });
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeometryUtils.js */ "OxmL");
/* harmony import */ var _decluttering_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decluttering/config.js */ "2yHJ");
/* harmony import */ var _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl/Geometry.js */ "OXZQ");
/* harmony import */ var _TextShaping_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextShaping.js */ "ynYs");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const g=4096,m=512,x=8,d=.5,w=2;class p{constructor(e,t,i=0,n=-1,s=d){this.x=e,this.y=t,this.angle=i,this.segment=n,this.minzoom=s}}class y{constructor(e,t,n,s,a,o=d,l=_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"]){this.anchor=e,this.labelAngle=t,this.glyphAngle=n,this.page=s,this.alternateVerticalGlyph=a,this.minzoom=o,this.maxzoom=l}}class f{constructor(e,t,i,n,s,a,o,l,h,r,c,g){this.tl=e,this.tr=t,this.bl=i,this.br=n,this.mosaicRect=s,this.labelAngle=a,this.minAngle=o,this.maxAngle=l,this.anchor=h,this.minzoom=r,this.maxzoom=c,this.page=g}}class b{constructor(e){this.shapes=e}}class u{getIconPlacement(i,n,s){const a=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](i.x,i.y),h=0===s.rotationAlignment,r=s.keepUpright;let c=s.rotate*_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_DEG_TO_RAD"];h&&(c+=i.angle);const g=new b([]);return s.allowOverlap&&s.ignorePlacement||!_decluttering_config_js__WEBPACK_IMPORTED_MODULE_1__["DECLUTTER_TILES"]||(g.iconColliders=[]),this._addIconPlacement(g,a,n,s,c),h&&r&&this._addIconPlacement(g,a,n,s,c+_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_PI"]),g}_addIconPlacement(e,t,n,s,a){const h=n.pixelRatio,r=n.width/h,c=n.height/h,g=s.offset;let m=g[0],x=g[1];switch(s.anchor){case 0:m-=r/2,x-=c/2;break;case 1:x-=c/2;break;case 2:m-=r,x-=c/2;break;case 3:m-=r/2;break;case 4:m-=r/2,x-=c;break;case 5:break;case 7:x-=c;break;case 6:m-=r;break;case 8:m-=r,x-=c}const w=n.rect,p=2/h,y=m-p,b=x-p,u=y+w.width/h,I=b+w.height/h,k=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](y,b),T=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](u,I),P=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](y,I),N=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](u,b);if(0!==a){const e=Math.cos(a),t=Math.sin(a);k.rotate(e,t),T.rotate(e,t),P.rotate(e,t),N.rotate(e,t)}const z=new f(k,N,P,T,w,a,0,256,t,d,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"],0);if(e.shapes.push(z),(!s.allowOverlap||!s.ignorePlacement)&&_decluttering_config_js__WEBPACK_IMPORTED_MODULE_1__["DECLUTTER_TILES"]){const n=s.size,o=s.padding,l={xTile:t.x,yTile:t.y,dxPixels:m*n-o,dyPixels:x*n-o,hard:!s.optional,partIndex:0,width:r*n+2*o,height:c*n+2*o,angle:a,minLod:d,maxLod:_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"]};e.iconColliders.push(l)}}getTextPlacement(n,s,a,o){const g=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](n.x,n.y),m=o.rotate*_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_DEG_TO_RAD"],p=0===o.rotationAlignment,u=o.keepUpright,I=o.padding;let k=d;const T=!p?0:n.angle,P=n.segment>=0&&p,N=o.allowOverlap&&o.ignorePlacement?null:[],z=[],A=4,_=!P;let G=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY,M=G,E=v;const L=(P||p)&&u,V=o.size/_TextShaping_js__WEBPACK_IMPORTED_MODULE_3__["SDF_GLYPH_SIZE"];let O=!1;for(const e of s)if(e.vertical){O=!0;break}let j,F=0,Y=0;if(!P&&O){const e=_TextShaping_js__WEBPACK_IMPORTED_MODULE_3__["TextShaping"].getTextBox(s,o.lineHeight*_TextShaping_js__WEBPACK_IMPORTED_MODULE_3__["SDF_GLYPH_SIZE"]);switch(o.anchor){case 1:F=e.height/2,Y=-e.width/2;break;case 2:F=-e.height/2,Y=e.width/2;break;case 3:F=e.height/2,Y=e.width/2;break;case 4:F=-e.height/2,Y=-e.width/2;break;case 5:F=e.height;break;case 7:Y=-e.width;break;case 6:Y=e.width;break;case 8:F=-e.height}}F+=o.offset[0]*_TextShaping_js__WEBPACK_IMPORTED_MODULE_3__["SDF_GLYPH_SIZE"],Y+=o.offset[1]*_TextShaping_js__WEBPACK_IMPORTED_MODULE_3__["SDF_GLYPH_SIZE"];for(const e of s){const s=e.glyphMosaicItem;if(!s||s.rect.isEmpty)continue;const h=s.rect,r=s.metrics,b=s.page;if(N&&_){if(void 0!==j&&j!==e.y){let e,t,s,a;O?(e=-E+F,t=G+Y,s=E-M,a=v-G):(e=G+F,t=M+Y,s=v-G,a=E-M);const l={xTile:n.x,yTile:n.y,dxPixels:e*V-I,dyPixels:t*V-I,hard:!o.optional,partIndex:1,width:s*V+2*I,height:a*V+2*I,angle:m,minLod:d,maxLod:_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"]};N.push(l),G=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY,M=G,E=v}j=e.y}const q=[];if(P){const t=.5*s.metrics.width,i=(e.x+r.left-A+t)*V*x;if(k=this._placeGlyph(n,k,i,a,n.segment,1,e.vertical,b,q),u&&(k=this._placeGlyph(n,k,i,a,n.segment,-1,e.vertical,b,q)),k>=w)break}else q.push(new y(g,T,T,b,!1)),p&&u&&q.push(new y(g,T+_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_PI"],T+_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_PI"],b,!1));const C=e.x+r.left,S=e.y-_TextShaping_js__WEBPACK_IMPORTED_MODULE_3__["SDF_GLYPH_BASELINE"]-r.top,U=C+r.width,R=S+r.height;let B,H,D,J,K,Q,W,X;if(!P&&O)if(e.vertical){const e=(C+U)/2-r.height/2,t=(S+R)/2+r.width/2;B=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](-t-A+F,e-A+Y),H=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](B.x+h.width,B.y+h.height),D=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](B.x,H.y),J=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](H.x,B.y)}else B=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](-S+A+F,C-A+Y),H=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](B.x-h.height,B.y+h.width),D=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](H.x,B.y),J=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](B.x,H.y);else B=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](C-A+F,S-A+Y),H=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](B.x+h.width,B.y+h.height),D=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](B.x,H.y),J=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](H.x,B.y);for(const t of q){let i,s,a,c;if(t.alternateVerticalGlyph){if(!K){const e=(S+R)/2+Y;K=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"]((C+U)/2+F-r.height/2-A,e+r.width/2+A),Q=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](K.x+h.height,K.y-h.width),W=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](Q.x,K.y),X=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](K.x,Q.y)}i=K,s=W,a=X,c=Q}else i=B,s=D,a=J,c=H;const g=S,x=R,d=t.glyphAngle+m;if(0!==d){const e=Math.cos(d),t=Math.sin(d);i=i.clone(),s=s.clone(),a=a.clone(),c=c.clone(),i.rotate(e,t),c.rotate(e,t),s.rotate(e,t),a.rotate(e,t)}let p=0,y=256;if(P&&O?e.vertical?t.alternateVerticalGlyph?(p=32,y=96):(p=224,y=32):(p=224,y=96):(p=192,y=64),z.push(new f(i,a,s,c,h,t.labelAngle,p,y,t.anchor,t.minzoom,t.maxzoom,t.page)),N&&(!L||this._legible(t.labelAngle)))if(_)C<G&&(G=C),g<M&&(M=g),U>v&&(v=U),x>E&&(E=x);else if(t.minzoom<w){const e={xTile:n.x,yTile:n.y,dxPixels:(C+F)*V-I,dyPixels:(g+F)*V-I,hard:!o.optional,partIndex:1,width:(U-C)*V+2*I,height:(x-g)*V+2*I,angle:d,minLod:t.minzoom,maxLod:t.maxzoom};N.push(e)}}}if(k>=w)return null;if(N&&_){let e,t,s,a;O?(e=-E+F,t=G+Y,s=E-M,a=v-G):(e=G+F,t=M+Y,s=v-G,a=E-M);const l={xTile:n.x,yTile:n.y,dxPixels:e*V-I,dyPixels:t*V-I,hard:!o.optional,partIndex:1,width:s*V+2*I,height:a*V+2*I,angle:m,minLod:d,maxLod:_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"]};N.push(l)}const q=new b(z);return N&&N.length>0&&(q.textColliders=N),q}_legible(e){const t=Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["radToByte"])(e);return t<65||t>=193}_placeGlyph(e,n,o,h,r,c,g,m,x){let d=c;const w=d<0?Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["positiveMod"])(e.angle+_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_PI"],_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_2PI"]):e.angle;let p=0;o<0&&(d*=-1,o*=-1,p=_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_PI"]),d>0&&++r;let f=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](e.x,e.y),b=h[r],u=_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"];if(h.length<=r)return u;for(;;){const e=b.x-f.x,t=b.y-f.y,i=Math.sqrt(e*e+t*t),l=Math.max(o/i,n),c=e/i,I=t/i,k=Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["positiveMod"])(Math.atan2(I,c)+p,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_2PI"]);if(x.push(new y(f,w,k,m,!1,l,u)),g&&x.push(new y(f,w,k,m,!0,l,u)),l<=n)return l;f=b.clone();do{if(r+=d,h.length<=r||r<0)return l;b=h[r]}while(f.isEqual(b));let T=b.x-f.x,P=b.y-f.y;const N=Math.sqrt(T*T+P*P);T*=i/N,P*=i/N,f.x-=T,f.y-=P,u=l}}}


/***/ }),

/***/ "jIHu":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js ***!
  \************************************************************************/
/*! exports provided: ANGLE_FACTOR_256, ATTRIBUTE_DATA_ANIMATION, ATTRIBUTE_DATA_DD0, ATTRIBUTE_DATA_DD1, ATTRIBUTE_DATA_FILTER_FLAGS, ATTRIBUTE_DATA_VV, ATTRIBUTE_STORE_TEXTURE_SIZE, AVERAGE_GLYPH_MOSAIC_ITEM, BUFFER_DATA_MINIMUM_SIZE, BUFFER_DATA_POOL_SIZE, COLLISION_BOX_PADDING, COLLISION_BUCKET_SIZE, COLLISION_EARLY_REJECT_BUCKET_SIZE, COLLISION_MAX_ZOOM_DELTA, COLLISION_PLACEMENT_PADDING, COLLISION_TILE_BOX_SIZE, DEBUG_LABELS, DISPLAY_RECORD_INT_PER_ELEMENT, DOT_DENSITY_MAX_FIELDS, EFFECT_FLAG_0, ENABLE_EARLY_LABEL_DISCARD, EXTRUDE_SCALE, FILTER_FLAG_0, GLYPH_SIZE, HEURISTIC_GLYPHS_PER_FEATURE, HEURISTIC_GLYPHS_PER_LINE, HIGHLIGHT_FLAG, HITTEST_SEARCH_SIZE, MAGIC_LABEL_LINE_HEIGHT, MAX_FILTERS, MAX_GPU_UPLOADS_PER_FRAME, NAN_MAGIC_NUMBER, PATCH_PIXEL_BUFFER_ALLOC_SIZE, PICTURE_FILL_COLOR, RASTER_TILE_SIZE, SPRITE_PADDING, TEXTURE_BINDING_ATTRIBUTE_DATA_0, TEXTURE_BINDING_ATTRIBUTE_DATA_1, TEXTURE_BINDING_ATTRIBUTE_DATA_2, TEXTURE_BINDING_ATTRIBUTE_DATA_3, TEXTURE_BINDING_BITMAP, TEXTURE_BINDING_GLYPH_ATLAS, TEXTURE_BINDING_HIGHLIGHT_0, TEXTURE_BINDING_HIGHLIGHT_1, TEXTURE_BINDING_RENDERER_0, TEXTURE_BINDING_RENDERER_1, TEXTURE_BINDING_SPRITE_ATLAS, TEXT_PLACEMENT_PADDING, THIN_LINE_THRESHOLD, TILE_SIZE, VTL_HIGH_RES_CUTOFF, VTL_TEXTURE_BINDING_UNIT_GLYPHS, VTL_TEXTURE_BINDING_UNIT_SPRITES, WEBGL_MAX_INNER_STOPS, WEBGL_MAX_STOPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANGLE_FACTOR_256", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_ANIMATION", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_DD0", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_DD1", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_FILTER_FLAGS", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_VV", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_STORE_TEXTURE_SIZE", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AVERAGE_GLYPH_MOSAIC_ITEM", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUFFER_DATA_MINIMUM_SIZE", function() { return tt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUFFER_DATA_POOL_SIZE", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_BOX_PADDING", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_BUCKET_SIZE", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_EARLY_REJECT_BUCKET_SIZE", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_MAX_ZOOM_DELTA", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_PLACEMENT_PADDING", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_TILE_BOX_SIZE", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG_LABELS", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_RECORD_INT_PER_ELEMENT", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOT_DENSITY_MAX_FIELDS", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EFFECT_FLAG_0", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENABLE_EARLY_LABEL_DISCARD", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTRUDE_SCALE", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_FLAG_0", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLYPH_SIZE", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEURISTIC_GLYPHS_PER_FEATURE", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEURISTIC_GLYPHS_PER_LINE", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIGHLIGHT_FLAG", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HITTEST_SEARCH_SIZE", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAGIC_LABEL_LINE_HEIGHT", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_FILTERS", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_GPU_UPLOADS_PER_FRAME", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAN_MAGIC_NUMBER", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATCH_PIXEL_BUFFER_ALLOC_SIZE", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PICTURE_FILL_COLOR", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RASTER_TILE_SIZE", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRITE_PADDING", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_0", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_1", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_2", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_3", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_BITMAP", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_GLYPH_ATLAS", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_HIGHLIGHT_0", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_HIGHLIGHT_1", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_RENDERER_0", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_RENDERER_1", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_SPRITE_ATLAS", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_PLACEMENT_PADDING", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THIN_LINE_THRESHOLD", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_SIZE", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTL_HIGH_RES_CUTOFF", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTL_TEXTURE_BINDING_UNIT_GLYPHS", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTL_TEXTURE_BINDING_UNIT_SPRITES", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_MAX_INNER_STOPS", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_MAX_STOPS", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t=8,e=t-2,c=1e-30,h=64,i=4294967295,o=512,a=256,d=256/360,n=!1,p=128,r=8,s=29,f=1,g=16,l=16,m=o/p,v=8,w=50,x=10,b=24,j=8,k={metrics:{width:15,height:17,left:0,top:-7,advance:14}},q=1024,u=0,y=0,z=0,A=1,B=2,C=3,D=4,E=5,F=6,G=5,H=6,I=0,J=1,K=2,L=3,M=3,N=2,O=1,P=2,Q=4,R=!1,S=2.5,T=6,U=5,V=6,W=1.15,X=2,Y=2,Z=7,$=500,_=4,tt=128;


/***/ }),

/***/ "mKU8":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TileParser.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/pbf.js */ "ATu9");
/* harmony import */ var _webgl_TileClipper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl/TileClipper.js */ "LaVW");
/* harmony import */ var _tiling_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tiling/enums.js */ "zJVD");
/* harmony import */ var _Feature_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Feature.js */ "Zcxi");
/* harmony import */ var _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IndexMemoryBuffer.js */ "4FHc");
/* harmony import */ var _SourceLayerData_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SourceLayerData.js */ "8NBV");
/* harmony import */ var _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VertexMemoryBuffer.js */ "yQzY");
/* harmony import */ var _buckets_CircleBucket_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buckets/CircleBucket.js */ "nHTO");
/* harmony import */ var _buckets_FillBucket_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buckets/FillBucket.js */ "KFs1");
/* harmony import */ var _buckets_LineBucket_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./buckets/LineBucket.js */ "DtuG");
/* harmony import */ var _buckets_SymbolBucket_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./buckets/SymbolBucket.js */ "9dpd");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const k=1;class d{constructor(e,i,o,c,n){if(this._pbfTiles={},this._tileClippers={},this._client=o,this._tile=i,n){this._styleLayerUIDs=new Set;for(const e of n)this._styleLayerUIDs.add(e)}this._styleRepository=c,this._layers=this._styleRepository.layers;const[a,l,u]=i.tileKey.split("/").map(parseFloat);this._level=a;const f=Math.max(8,Math.round(k*this._level)-8);for(const p of Object.keys(e)){const i=e[p];this._pbfTiles[p]=new _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__["default"](new Uint8Array(i.protobuff),new DataView(i.protobuff));if(i.refKey){const[e]=i.refKey.split("/").map(parseFloat),t=a-e;if(t>0){const e=(1<<t)-1,s=l&e,i=u&e;this._tileClippers[p]=new _webgl_TileClipper_js__WEBPACK_IMPORTED_MODULE_2__["TileClipper"](t,s,i,8,f)}}this._tileClippers[p]||(this._tileClippers[p]=new _webgl_TileClipper_js__WEBPACK_IMPORTED_MODULE_2__["SimpleBuilder"])}}_canParseStyleLayer(e){return!this._styleLayerUIDs||this._styleLayerUIDs.has(e)}async parse(e){const t=this._initialize(e),{returnedBuckets:r}=t;this._processLayers(t),this._linkReferences(t),this._filterFeatures(t);const s=new Set,o={};for(const i of r)3===i.type&&i.getResources(i.tileClipper,s,o);if(this._tile.status===_tiling_enums_js__WEBPACK_IMPORTED_MODULE_3__["TileStatus"].INVALID)return Promise.resolve([]);const c=this._fetchResources(s,o,e);return Promise.all(c).then((()=>this._processFeatures(t.returnedBuckets)))}_initialize(e){return{signal:e&&e.signal,sourceNameToTileData:this._parseTileData(this._pbfTiles),layers:this._layers,zoom:this._level,sourceNameToTileClipper:this._tileClippers,sourceNameToUniqueSourceLayerBuckets:{},sourceNameToUniqueSourceLayers:{},returnedBuckets:[],layerIdToBucket:{},referencerUIDToReferencedId:new Map}}_processLayers(e){const{sourceNameToTileData:t,layers:r,zoom:s,sourceNameToTileClipper:i,sourceNameToUniqueSourceLayerBuckets:o,sourceNameToUniqueSourceLayers:c,returnedBuckets:n,layerIdToBucket:a,referencerUIDToReferencedId:l}=e;for(let u=r.length-1;u>=0;u--){const e=r[u];if(!this._canParseStyleLayer(e.uid)||e.minzoom&&s<Math.floor(e.minzoom)||e.maxzoom&&s>=e.maxzoom||0===e.type)continue;if(!t[e.source]||!i[e.source])continue;const f=t[e.source],p=i[e.source],h=e.sourceLayer,m=f[h];if(m){let t=c[e.source];if(t||(t=c[e.source]=new Set),t.add(e.sourceLayer),e.refLayerId)l.set(e.uid,e.refLayerId);else{const t=this._createBucket(e);if(t){t.layerUIDs=[e.uid],t.layerExtent=m.extent,t.tileClipper=p;let r=o[e.source];r||(r=o[e.source]={});let s=r[h];s||(s=r[h]=[]),s.push(t),n.push(t),a[e.id.toLowerCase()]=t}}}}}_linkReferences(e){const{layerIdToBucket:t,referencerUIDToReferencedId:r}=e;r.forEach(((e,r)=>{e=e.toLowerCase(),t[e]&&t[e].layerUIDs.push(r)}))}_filterFeatures(t){const{signal:r,sourceNameToTileData:s,sourceNameToUniqueSourceLayerBuckets:i,sourceNameToUniqueSourceLayers:c}=t,n=10*this._level,a=10*(this._level+1),l=[],u=[];for(const e of Object.keys(c)){c[e].forEach((t=>{l.push(t),u.push(e)}))}for(let f=0;f<l.length;f++){const t=u[f],c=l[f];if(!s[t]||!i[t])continue;const p=s[t][c],h=i[t][c];if(!h||0===h.length)continue;if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["isAborted"])(r))return;const m=p.getData();for(;m.nextTag(2);){const e=m.getMessage(),t=new _Feature_js__WEBPACK_IMPORTED_MODULE_4__["default"](e,p);e.release();const r=t.values;if(r){const e=r._minzoom;if(e&&e>=a)continue;const t=r._maxzoom;if(t&&t<=n)continue}for(const s of h)s.pushFeature(t)}}}_fetchResources(e,t,r){const s=[],i=this._tile.getWorkerTileHandler();let o,c;e.size>0&&(o=i.fetchSprites(e,this._client,r),s.push(o));for(const n in t){const e=t[n];e.size>0&&(c=i.fetchGlyphs(this._tile.tileKey,n,e,this._client,r),s.push(c))}return s}_processFeatures(e){const t=e.filter((e=>e.hasFeatures()||this._canParseStyleLayer(e.layer.uid)));for(const r of t)r.processFeatures(r.tileClipper);return t}_parseTileData(e){const t={};for(const r of Object.keys(e)){const s=e[r],i={};for(;s.next();)switch(s.tag()){case 3:{const e=s.getMessage(),t=new _SourceLayerData_js__WEBPACK_IMPORTED_MODULE_6__["default"](e);e.release(),i[t.name]=t;break}default:s.skip()}t[r]=i}return t}_createBucket(e){switch(e.type){case 0:return null;case 1:return this._createFillBucket(e);case 2:return this._createLineBucket(e);case 4:return this._createCircleBucket(e);case 3:return this._createSymbolBucket(e)}}_createFillBucket(e){return new _buckets_FillBucket_js__WEBPACK_IMPORTED_MODULE_9__["default"](e,this._level,new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_7__["FillVertexBuffer"](e.fillMaterial.getStride()),new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_5__["TriangleIndexBuffer"],new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_7__["OutlineVertexBuffer"](e.outlineMaterial.getStride()),new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_5__["TriangleIndexBuffer"])}_createLineBucket(e){return new _buckets_LineBucket_js__WEBPACK_IMPORTED_MODULE_10__["default"](e,this._level,new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_7__["LineVertexBuffer"](e.lineMaterial.getStride()),new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_5__["TriangleIndexBuffer"])}_createCircleBucket(e){return new _buckets_CircleBucket_js__WEBPACK_IMPORTED_MODULE_8__["default"](e,this._level,new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_7__["CircleVertexBuffer"](e.circleMaterial.getStride()),new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_5__["TriangleIndexBuffer"])}_createSymbolBucket(e){const t=this._tile;return new _buckets_SymbolBucket_js__WEBPACK_IMPORTED_MODULE_11__["default"](e,this._level,new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_7__["SymbolVertexBuffer"](e.iconMaterial.getStride()),new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_5__["TriangleIndexBuffer"],new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_7__["SymbolVertexBuffer"](e.textMaterial.getStride()),new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_5__["TriangleIndexBuffer"],t.placementEngine,t.getWorkerTileHandler())}}/* harmony default export */ __webpack_exports__["default"] = (d);


/***/ }),

/***/ "nHTO":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/buckets/CircleBucket.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseBucket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseBucket.js */ "vgmk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class t extends _BaseBucket_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(e,t,r,i){super(e,t),this.type=4,this._circleVertexBuffer=r,this._circleIndexBuffer=i}get circleIndexStart(){return this._circleIndexStart}get circleIndexCount(){return this._circleIndexCount}processFeatures(e){const t=this._circleVertexBuffer,r=this._circleIndexBuffer;this._circleIndexStart=3*r.index,this._circleIndexCount=0;const i=this.layer,c=this.zoom;e&&e.setExtent(this.layerExtent);for(const s of this._features){const n=s.getGeometry(e);if(!n)continue;const l=i.circleMaterial.encodeAttributes(s,c,i);for(const e of n)if(e)for(const i of e){const e=t.index;t.add(i.x,i.y,0,0,l),t.add(i.x,i.y,0,1,l),t.add(i.x,i.y,1,0,l),t.add(i.x,i.y,1,1,l),r.add(e+0,e+1,e+2),r.add(e+1,e+2,e+3),this._circleIndexCount+=6}}}serialize(){let e=6;e+=this.layerUIDs.length,e+=this._circleVertexBuffer.array.length,e+=this._circleIndexBuffer.array.length;const t=new Uint32Array(e),r=new Int32Array(t.buffer);let i=0;t[i++]=this.type,t[i++]=this.layerUIDs.length;for(let c=0;c<this.layerUIDs.length;c++)t[i++]=this.layerUIDs[c];t[i++]=this._circleIndexStart,t[i++]=this._circleIndexCount,t[i++]=this._circleVertexBuffer.array.length;for(let c=0;c<this._circleVertexBuffer.array.length;c++)r[i++]=this._circleVertexBuffer.array[c];t[i++]=this._circleIndexBuffer.array.length;for(let c=0;c<this._circleIndexBuffer.array.length;c++)t[i++]=this._circleIndexBuffer.array[c];return t.buffer}}/* harmony default export */ __webpack_exports__["default"] = (t);


/***/ }),

/***/ "u8Fm":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/ScriptUtils.js ***!
  \******************************************************************************/
/*! exports provided: allowsIdeographicBreak, hasVerticalOrientation, isLineBreak, isWhiteSpace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowsIdeographicBreak", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasVerticalOrientation", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLineBreak", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWhiteSpace", function() { return a; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function e(e){return 746===e||747===e||!(e<4352)&&(e>=12704&&e<=12735||(e>=12544&&e<=12591||(e>=65072&&e<=65103&&!(e>=65097&&e<=65103)||(e>=63744&&e<=64255||(e>=13056&&e<=13311||(e>=11904&&e<=12031||(e>=12736&&e<=12783||(e>=12288&&e<=12351&&!(e>=12296&&e<=12305||e>=12308&&e<=12319||12336===e)||(e>=13312&&e<=19903||(e>=19968&&e<=40959||(e>=12800&&e<=13055||(e>=12592&&e<=12687||(e>=43360&&e<=43391||(e>=55216&&e<=55295||(e>=4352&&e<=4607||(e>=44032&&e<=55215||(e>=12352&&e<=12447||(e>=12272&&e<=12287||(e>=12688&&e<=12703||(e>=12032&&e<=12255||(e>=12784&&e<=12799||(e>=12448&&e<=12543&&12540!==e||(e>=65280&&e<=65519&&!(65288===e||65289===e||65293===e||e>=65306&&e<=65310||65339===e||65341===e||65343===e||e>=65371&&e<=65503||65507===e||e>=65512&&e<=65519)||(e>=65104&&e<=65135&&!(e>=65112&&e<=65118||e>=65123&&e<=65126)||(e>=5120&&e<=5759||(e>=6320&&e<=6399||(e>=65040&&e<=65055||(e>=19904&&e<=19967||(e>=40960&&e<=42127||e>=42128&&e<=42191)))))))))))))))))))))))))))))}function c(e){return!(e<11904)&&(e>=12704&&e<=12735||(e>=12544&&e<=12591||(e>=65072&&e<=65103||(e>=63744&&e<=64255||(e>=13056&&e<=13311||(e>=11904&&e<=12031||(e>=12736&&e<=12783||(e>=12288&&e<=12351||(e>=13312&&e<=19903||(e>=19968&&e<=40959||(e>=12800&&e<=13055||(e>=65280&&e<=65519||(e>=12352&&e<=12447||(e>=12272&&e<=12287||(e>=12032&&e<=12255||(e>=12784&&e<=12799||(e>=12448&&e<=12543||(e>=65040&&e<=65055||(e>=42128&&e<=42191||e>=40960&&e<=42127)))))))))))))))))))}function s(e){switch(e){case 10:case 32:case 38:case 40:case 41:case 43:case 45:case 47:case 173:case 183:case 8203:case 8208:case 8211:case 8231:return!0}return!1}function a(e){switch(e){case 9:case 10:case 11:case 12:case 13:case 32:return!0}return!1}


/***/ }),

/***/ "vgmk":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/buckets/BaseBucket.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class t{constructor(t,e){this.layerExtent=4096,this._features=[],this.layer=t,this.zoom=e,this._filter=t.getFeatureFilter()}pushFeature(t){this._filter&&!this._filter.filter(t,this.zoom)||this._features.push(t)}hasFeatures(){return this._features.length>0}}/* harmony default export */ __webpack_exports__["default"] = (t);


/***/ }),

/***/ "yQzY":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/VertexMemoryBuffer.js ***!
  \*************************************************************************************/
/*! exports provided: CircleVertexBuffer, FillVertexBuffer, LineVertexBuffer, OutlineVertexBuffer, SymbolVertexBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleVertexBuffer", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillVertexBuffer", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineVertexBuffer", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlineVertexBuffer", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolVertexBuffer", function() { return h; });
/* harmony import */ var _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemoryBuffer.js */ "rgtN");
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeometryUtils.js */ "OxmL");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class o extends _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(s){super(s)}add(t,o,r,u,h,a,n,e){const d=this.array;let p=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"].i1616to32(t,o);d.push(p);const c=31;p=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"].i8888to32(Math.round(c*r),Math.round(c*u),Math.round(c*h),Math.round(c*a)),d.push(p),p=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"].i1616to32(n,0),d.push(p),e&&d.push(...e)}}class r extends _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(s){super(s)}add(t,o,r){const u=this.array;u.push(_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"].i1616to32(t,o)),r&&u.push(...r)}}class u extends _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(s){super(s)}add(t,o,r,u,h,a,n){const e=this.array,d=this.index;let p=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"].i1616to32(t,o);e.push(p);const c=15;return p=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"].i8888to32(Math.round(c*r),Math.round(c*u),h,a),e.push(p),n&&e.push(...n),d}}class h extends _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(s){super(s)}add(o,r,u,h,a,n,e,d,p,c,i,M){const l=this.array;let m=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"].i1616to32(o,r);l.push(m),m=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"].i1616to32(Math.round(8*u),Math.round(8*h)),l.push(m),m=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"].i8888to32(a/4,n/4,d,p),l.push(m),m=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"].i8888to32(0,Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_1__["radToByte"])(e),10*c,Math.min(10*i,255)),l.push(m),M&&l.push(...M)}}class a extends _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(s){super(s)}add(t,o,r,u,h){const a=this.array,n=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"].i1616to32(2*t+r,2*o+u);a.push(n),h&&a.push(...h)}}


/***/ }),

/***/ "ynYs":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TextShaping.js ***!
  \******************************************************************************/
/*! exports provided: SDF_GLYPH_BASELINE, SDF_GLYPH_SIZE, TextShaping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDF_GLYPH_BASELINE", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDF_GLYPH_SIZE", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextShaping", function() { return a; });
/* harmony import */ var _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl/Rect.js */ "qcDN");
/* harmony import */ var _ScriptUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScriptUtils.js */ "u8Fm");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const c=24,h=17;class a{constructor(t,e,i,s,o,c,h){this._glyphItems=t,this._maxWidth=e,this._lineHeight=i,this._letterSpacing=s,this._hAnchor=o,this._vAnchor=c,this._justify=h}getShaping(t,c,h){const a=this._letterSpacing,l=this._lineHeight,r=this._justify,n=this._maxWidth,m=[];let f=0,p=0;const g=t.length;for(let e=0;e<g;e++){const i=t.charCodeAt(e),s=h&&Object(_ScriptUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasVerticalOrientation"])(i);let c;for(const t of this._glyphItems)if(c=t[i],c)break;m.push({codePoint:i,x:f,y:p,vertical:s,glyphMosaicItem:c}),c&&(f+=c.metrics.advance+a)}let y=f;if(n>0){y=f/Math.max(1,Math.ceil(f/n))}const d=t.indexOf("​")>=0,x=[];for(let i=0;i<g-1;i++){const t=m[i].codePoint,o=Object(_ScriptUtils_js__WEBPACK_IMPORTED_MODULE_1__["allowsIdeographicBreak"])(t);if(Object(_ScriptUtils_js__WEBPACK_IMPORTED_MODULE_1__["isLineBreak"])(t)||o){let e=0;if(10===t)e-=1e4;else if(o&&d)e+=150;else{40!==t&&65288!==t||(e+=50);const s=m[i+1].codePoint;41!==s&&65289!==s||(e+=50)}x.push(this._buildBreak(i+1,m[i].x,y,x,e,!1))}}const M=this._optimalBreaks(this._buildBreak(g,f,y,x,0,!0));let u=0;const _=c?-l:l;let I=0;for(let e=0;e<M.length;e++){const t=M[e];let s=I;for(;s<t&&Object(_ScriptUtils_js__WEBPACK_IMPORTED_MODULE_1__["isWhiteSpace"])(m[s].codePoint);)m[s].glyphMosaicItem=null,++s;let o=t-1;for(;o>s&&Object(_ScriptUtils_js__WEBPACK_IMPORTED_MODULE_1__["isWhiteSpace"])(m[o].codePoint);)m[o].glyphMosaicItem=null,--o;if(s<=o){const t=m[s].x;for(let i=s;i<=o;i++)m[i].x-=t,m[i].y=p;let e=m[o].x;m[o].glyphMosaicItem&&(e+=m[o].glyphMosaicItem.metrics.advance),u=Math.max(e,u),r&&this._applyJustification(m,s,o)}I=t,p+=_}if(m.length>0){const t=M.length-1,e=(r-this._hAnchor)*u;let i=(-this._vAnchor*(t+1)+.5)*l;c&&t&&(i+=t*l);for(const s of m)s.x+=e,s.y+=i}return m.filter((t=>t.glyphMosaicItem))}static getTextBox(t,e){if(!t.length)return null;let i=1/0,s=1/0,o=0,c=0;for(const a of t){const t=a.glyphMosaicItem.metrics.advance,l=a.x,r=a.y-h,n=l+t,m=r+e;i=Math.min(i,l),o=Math.max(o,n),s=Math.min(s,r),c=Math.max(c,m)}return{x:i,y:s,width:o-i,height:c-s}}static getBox(t){if(!t.length)return null;let e=1/0,i=1/0,s=0,o=0;for(const c of t){const{height:t,left:h,top:a,width:l}=c.glyphMosaicItem.metrics,r=c.x,n=c.y-(t-Math.abs(a)),m=r+l+h,f=n+t;e=Math.min(e,r),s=Math.max(s,m),i=Math.min(i,n),o=Math.max(o,f)}return{x:e,y:i,width:s-e,height:o-i}}static addDecoration(e,i){const s=e.length;if(0===s)return;const o=3;let c=e[0].x+e[0].glyphMosaicItem.metrics.left,h=e[0].y;for(let l=1;l<s;l++){const s=e[l];if(s.y!==h){const a=e[l-1].x+e[l-1].glyphMosaicItem.metrics.left+e[l-1].glyphMosaicItem.metrics.width;e.push({codePoint:0,x:c,y:h+i-o,vertical:!1,glyphMosaicItem:{sdf:!0,rect:new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](4,0,4,8),metrics:{width:a-c,height:2+2*o,left:0,top:0,advance:0},page:0,code:0}}),h=s.y,c=s.x+s.glyphMosaicItem.metrics.left}}const a=e[s-1].x+e[s-1].glyphMosaicItem.metrics.left+e[s-1].glyphMosaicItem.metrics.width;e.push({codePoint:0,x:c,y:h+i-o,vertical:!1,glyphMosaicItem:{sdf:!0,rect:new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](4,0,4,8),metrics:{width:a-c,height:2+2*o,left:0,top:0,advance:0},page:0,code:0}})}_breakScore(t,e,i,s){const o=(t-e)*(t-e);return s?t<e?o/2:2*o:o+Math.abs(i)*i}_buildBreak(t,e,i,s,o,c){let h=null,a=this._breakScore(e,i,o,c);for(const l of s){const t=e-l.x,s=this._breakScore(t,i,o,c)+l.score;s<=a&&(h=l,a=s)}return{index:t,x:e,score:a,previousBreak:h}}_optimalBreaks(t){return t?this._optimalBreaks(t.previousBreak).concat(t.index):[]}_applyJustification(t,e,i){const s=t[i],o=s.vertical?c:s.glyphMosaicItem?s.glyphMosaicItem.metrics.advance:0,h=(s.x+o)*this._justify;for(let c=e;c<=i;c++)t[c].x-=h}}


/***/ }),

/***/ "zJVD":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/tiling/enums.js ***!
  \************************************************************/
/*! exports provided: TileStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileStatus", function() { return I; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var I;!function(I){I[I.INITIALIZED=0]="INITIALIZED",I[I.NO_DATA=1]="NO_DATA",I[I.READY=2]="READY",I[I.MODIFIED=3]="MODIFIED",I[I.INVALID=4]="INVALID"}(I||(I={}));


/***/ })

}]);
//# sourceMappingURL=views-2d-engine-vectorTiles-WorkerTileHandler-js.js.map