(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-graphics-sources-geojson-GeoJSONSourceWorker-js~layers-graphics-sources-support-CSVSo~2e9c3931"],{

/***/ "BMSW":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/BoundsStore.js ***!
  \***********************************************************************/
/*! exports provided: BoundsStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundsStore", function() { return e; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/libs/rbush/PooledRBush.js */ "zna6");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const d=5e4,n={minX:0,minY:0,maxX:0,maxY:0};function t(i,s,d){n.minX=s[0],n.minY=s[1],n.maxX=s[2],n.maxY=s[3],i.search(n,d)}class e{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_1__["PooledRBush"](9,Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("csp-restrictions")?i=>({minX:i[0],minY:i[1],maxX:i[2],maxY:i[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const i=new Array(this._idByBounds.size);let s=0;this._idByBounds.forEach(((d,n)=>{i[s++]=n})),this._indexInvalid=!1,this._index.clear(),this._index.load(i)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((i=>this._idByBounds.has(i)))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(i){const s=this._boundsById.get(i);this._boundsById.delete(i),s&&(this._idByBounds.delete(s),this._indexInvalid||this._index.remove(s))}forEachInBounds(i,s){this._loadIndex(),t(this._index,i,(i=>s(this._idByBounds.get(i))))}get(i){return this._boundsById.get(i)}has(i){return this._boundsById.has(i)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(i,s){if(!this._indexInvalid){const s=this._boundsById.get(i);s&&(this._index.remove(s),this._idByBounds.delete(s))}this._boundsById.set(i,s),s&&(this._idByBounds.set(s,i),this._indexInvalid||(this._boundsToLoad.push(s),this._boundsToLoad.length>d&&this._loadIndex()))}}


/***/ }),

/***/ "Rh/S":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/optimizedFeatureQueryEngineAdapter.js ***!
  \**********************************************************************************************/
/*! exports provided: default, optimizedFeatureQueryEngineAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optimizedFeatureQueryEngineAdapter", function() { return o; });
/* harmony import */ var _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OptimizedFeature.js */ "k5I3");
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OptimizedGeometry.js */ "gVKr");
/* harmony import */ var _centroid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../centroid.js */ "2X7Z");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const o={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(e,r)=>new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_0__["default"](r,e.attributes,null,e.objectId),getGeometry:t=>t.geometry,getCentroid:(t,o)=>(t.centroid||(t.centroid=Object(_centroid_js__WEBPACK_IMPORTED_MODULE_2__["getCentroidOptimizedGeometry"])(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__["default"],t.geometry,o.hasZ,o.hasM)),t.centroid)};/* harmony default export */ __webpack_exports__["default"] = (o);


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

/***/ "ZRfE":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/FeatureStore.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Evented.js */ "zm0L");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../featureConversionUtils.js */ "ZlUD");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingBox.js */ "QmHG");
/* harmony import */ var _BoundsStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BoundsStore.js */ "BMSW");
/* harmony import */ var _optimizedFeatureQueryEngineAdapter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./optimizedFeatureQueryEngineAdapter.js */ "Rh/S");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class u{constructor(e){this.geometryInfo=e,this._boundsStore=new _BoundsStore_js__WEBPACK_IMPORTED_MODULE_7__["BoundsStore"],this._featuresById=new Map,this._markedIds=new Set,this.events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_3__["default"],this.featureAdapter=_optimizedFeatureQueryEngineAdapter_js__WEBPACK_IMPORTED_MODULE_8__["optimizedFeatureQueryEngineAdapter"]}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__["create"])(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__["NEGATIVE_INFINITY"]);return this._featuresById.forEach((t=>{const r=this._boundsStore.get(t.objectId);r&&(e[0]=Math.min(r[0],e[0]),e[1]=Math.min(r[1],e[1]),e[2]=Math.max(r[2],e[2]),e[3]=Math.max(r[3],e[3]))})),e}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,r){for(const s of e){const e=this._boundsStore.get(s.objectId);e&&t(Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__["fromRect"])(r,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,r)=>{this._markedIds.has(r)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(s){if(!s)return;const i=s.objectId;if(null==i)return void _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.layers.graphics.data.FeatureStore").error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("featurestore:invalid-feature","feature id is missing",{feature:s}));const d=this._featuresById.get(i);let n;if(this._markedIds.add(i),d?(s.displayId=d.displayId,n=this._boundsStore.get(i),this._boundsStore.delete(i)):Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.onFeatureAdd)&&this.onFeatureAdd(s),!s.geometry||!s.geometry.coords||!s.geometry.coords.length)return this._boundsStore.set(i,null),void this._featuresById.set(i,s);n=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__["getBoundsOptimizedGeometry"])(n||Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__["create"])(),s.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(i,n),this._featuresById.set(i,s)}_remove(t){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.onFeatureRemove)&&this.onFeatureRemove(t),this._markedIds.delete(t.objectId),this._boundsStore.delete(t.objectId),this._featuresById.delete(t.objectId),t}}/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ }),

/***/ "zna6":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/libs/rbush/PooledRBush.js ***!
  \******************************************************************/
/*! exports provided: default, BBox, PooledRBush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BBox", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PooledRBush", function() { return h; });
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../maybe.js */ "srIe");
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../arrayUtils.js */ "tQ+6");
/* harmony import */ var _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PooledArray.js */ "ikTR");
/* harmony import */ var _chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/quickselect.js */ "RjdO");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class h{constructor(t=9,i){this.compareMinX=l,this.compareMinY=c,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this.toBBox=i:this._initFormat(i)),this.clear()}destroy(){this.clear(),M.prune(),X.prune(),Y.prune(),B.prune()}all(t){this._all(this.data,t)}search(t,i){let n=this.data;const e=this.toBBox;if(p(t,n))for(M.clear();n;){for(let s=0,h=n.children.length;s<h;s++){const h=n.children[s],a=n.leaf?e(h):h;p(t,a)&&(n.leaf?i(h):x(t,a)?this._all(h,i):M.push(h))}n=M.pop()}}collides(t){let i=this.data;const n=this.toBBox;if(!p(t,i))return!1;for(M.clear();i;){for(let e=0,s=i.children.length;e<s;e++){const s=i.children[e],h=i.leaf?n(s):s;if(p(t,h)){if(i.leaf||x(t,h))return!0;M.push(s)}}i=M.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}let i=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){const t=this.data;this.data=i,i=t}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new b([]),this}remove(n){if(!n)return this;let e,s=this.data,h=null,a=0,r=!1;const o=this.toBBox(n);for(Y.clear(),B.clear();s||Y.length>0;){var l;if(!s)s=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["assumeNonNull"])(Y.pop()),h=Y.data[Y.length-1],a=null!=(l=B.pop())?l:0,r=!0;if(s.leaf&&(e=Object(_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(s.children,n,s.children.length,s.indexHint),-1!==e))return s.children.splice(e,1),Y.push(s),this._condense(Y),this;r||s.leaf||!x(s,o)?h?(a++,s=h.children[a],r=!1):s=null:(Y.push(s),B.push(a),a=0,h=s,s=s.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,i){let n=t;for(X.clear();n;){var e;if(!0===n.leaf)for(const t of n.children)i(t);else X.pushArray(n.children);n=null!=(e=X.pop())?e:null}}_build(t,i,n,e){const s=n-i+1;let h=this._maxEntries;if(s<=h){const e=new b(t.slice(i,n+1));return a(e,this.toBBox),e}e||(e=Math.ceil(Math.log(s)/Math.log(h)),h=Math.ceil(s/h**(e-1)));const r=new j([]);r.height=e;const o=Math.ceil(s/h),l=o*Math.ceil(Math.sqrt(h));g(t,i,n,l,this.compareMinX);for(let a=i;a<=n;a+=l){const i=Math.min(a+l-1,n);g(t,a,i,o,this.compareMinY);for(let n=a;n<=i;n+=o){const s=Math.min(n+o-1,i);r.children.push(this._build(t,n,s,e-1))}}return a(r,this.toBBox),r}_chooseSubtree(t,i,n,e){for(;e.push(i),!0!==i.leaf&&e.length-1!==n;){let n,e=1/0,s=1/0;for(let h=0,a=i.children.length;h<a;h++){const a=i.children[h],r=m(a),o=d(t,a)-r;o<s?(s=o,e=r<e?r:e,n=a):o===s&&r<e&&(e=r,n=a)}i=n||i.children[0]}return i}_insert(t,i,n){const e=this.toBBox,s=n?t:e(t);Y.clear();const h=this._chooseSubtree(s,this.data,i,Y);for(h.children.push(t),o(h,s);i>=0&&Y.data[i].children.length>this._maxEntries;)this._split(Y,i),i--;this._adjustParentBBoxes(s,Y,i)}_split(t,i){const n=t.data[i],e=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,e);const h=this._chooseSplitIndex(n,s,e);if(!h)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const r=n.children.splice(h,n.children.length-h),o=n.leaf?new b(r):new j(r);o.height=n.height,a(n,this.toBBox),a(o,this.toBBox),i?t.data[i-1].children.push(o):this._splitRoot(n,o)}_splitRoot(t,i){this.data=new j([t,i]),this.data.height=t.height+1,a(this.data,this.toBBox)}_chooseSplitIndex(t,i,n){let e,s,h;e=s=1/0;for(let a=i;a<=n-i;a++){const i=r(t,0,a,this.toBBox),o=r(t,a,n,this.toBBox),l=f(i,o),c=m(i)+m(o);l<e?(e=l,h=a,s=c<s?c:s):l===e&&c<s&&(s=c,h=a)}return h}_chooseSplitAxis(t,i,n){const e=t.leaf?this.compareMinX:l,s=t.leaf?this.compareMinY:c;this._allDistMargin(t,i,n,e)<this._allDistMargin(t,i,n,s)&&t.children.sort(e)}_allDistMargin(t,i,n,e){t.children.sort(e);const s=this.toBBox,h=r(t,0,i,s),a=r(t,n-i,n,s);let l=u(h)+u(a);for(let r=i;r<n-i;r++){const i=t.children[r];o(h,t.leaf?s(i):i),l+=u(h)}for(let r=n-i-1;r>=i;r--){const i=t.children[r];o(a,t.leaf?s(i):i),l+=u(a)}return l}_adjustParentBBoxes(t,i,n){for(let e=n;e>=0;e--)o(i.data[e],t)}_condense(t){for(let n=t.length-1;n>=0;n--){const e=t.data[n];if(0===e.children.length)if(n>0){const s=t.data[n-1],h=s.children;h.splice(Object(_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(h,e,h.length,s.indexHint),1)}else this.clear();else a(e,this.toBBox)}}_initFormat(t){const i=["return a"," - b",";"];this.compareMinX=new Function("a","b",i.join(t[0])),this.compareMinY=new Function("a","b",i.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,i){r(t,0,t.children.length,i,t)}function r(t,i,n,e,s){s||(s=new b([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let h,a=i;a<n;a++)h=t.children[a],o(s,t.leaf?e(h):h);return s}function o(t,i){t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY)}function l(t,i){return t.minX-i.minX}function c(t,i){return t.minY-i.minY}function m(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function u(t){return t.maxX-t.minX+(t.maxY-t.minY)}function d(t,i){return(Math.max(i.maxX,t.maxX)-Math.min(i.minX,t.minX))*(Math.max(i.maxY,t.maxY)-Math.min(i.minY,t.minY))}function f(t,i){const n=Math.max(t.minX,i.minX),e=Math.max(t.minY,i.minY),s=Math.min(t.maxX,i.maxX),h=Math.min(t.maxY,i.maxY);return Math.max(0,s-n)*Math.max(0,h-e)}function x(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function p(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function g(i,n,e,h,a){const r=[n,e];for(;r.length;){const n=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["assumeNonNull"])(r.pop()),e=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["assumeNonNull"])(r.pop());if(n-e<=h)continue;const o=e+Math.ceil((n-e)/h/2)*h;Object(_chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_3__["q"])(i,o,e,n,a),r.push(e,o,o,n)}}const M=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"],X=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"],Y=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"],B=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"]({deallocator:void 0});class _{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class w extends _{constructor(){super(...arguments),this.height=1,this.indexHint=new _arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__["PositionHint"]}}class b extends w{constructor(t){super(),this.children=t,this.leaf=!0}}class j extends w{constructor(t){super(),this.children=t,this.leaf=!1}}/* harmony default export */ __webpack_exports__["default"] = (h);


/***/ })

}]);
//# sourceMappingURL=default~layers-graphics-sources-geojson-GeoJSONSourceWorker-js~layers-graphics-sources-support-CSVSo~2e9c3931.js.map