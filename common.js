(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "1agI":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionGrid.js ***!
  \*************************************************************************************/
/*! exports provided: CollisionBitsetGrid, CollisionGrid, HAS_COLLISION, NONE, OUTSIDE_EXTENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollisionBitsetGrid", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollisionGrid", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAS_COLLISION", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NONE", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OUTSIDE_EXTENT", function() { return r; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _layers_features_support_StaticBitSet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layers/features/support/StaticBitSet.js */ "feGD");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../definitions.js */ "jIHu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const i=2,o=1,h=0,r=1,n=2;class c{constructor(t,e){this.width=t,this.height=e;const i=Math.ceil(t/o),h=Math.ceil(e/o);this._cols=i,this._rows=h,this._cells=_layers_features_support_StaticBitSet_js__WEBPACK_IMPORTED_MODULE_1__["StaticBitSet"].create(i*h)}insertMetrics(t){const s=this._hasCollision(t);return s===h&&this._markMetrics(t),s}getCellId(t,s){return t+s*this._cols}has(t){return this._cells.has(t)}hasRange(t,s){return this._cells.hasRange(t,s)}set(t){this._cells.set(t)}setRange(t,s){this._cells.setRange(t,s)}_hasCollision(t){const s=t.id;let e=0,o=0;t.save();do{const s=t.boundsCount;e+=s;for(let e=0;e<s;e++){const s=t.boundsComputedAnchorX(e),h=t.boundsComputedAnchorY(e),c=t.boundsWidth(e)+i,l=t.boundsHeight(e)+i;switch(this._collide(s,h,c,l)){case n:return n;case r:o++}}}while(t.peekId()===s&&t.next());return t.restore(),e===o?r:h}_collide(s,e,i,c){const l=s-i/2,_=s+i/2,a=e-c/2,u=e+c/2;if(_<0||u<0||l>this.width||a>this.height)return r;const d=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.floor(l/o),0,this._cols),g=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.floor(a/o),0,this._rows),f=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.ceil(_/o),0,this._cols),m=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.ceil(u/o),0,this._rows);for(let t=g;t<=m;t++)for(let s=d;s<=f;s++){const e=this.getCellId(s,t);if(this.has(e))return n}return h}_mark(s,e,i,h){const r=s-i/2,n=s+i/2,c=e-h/2,l=e+h/2,_=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.floor(r/o),0,this._cols),a=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.floor(c/o),0,this._rows),u=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.ceil(n/o),0,this._cols),d=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.ceil(l/o),0,this._rows);for(let t=a;t<=d;t++)for(let s=_;s<=u;s++){const e=this.getCellId(s,t);this.set(e)}return!1}_markMetrics(t){const s=t.id;do{const s=t.boundsCount;for(let e=0;e<s;e++){const s=t.boundsComputedAnchorX(e),o=t.boundsComputedAnchorY(e),h=t.boundsWidth(e)+i,r=t.boundsHeight(e)+i;this._mark(s,o,h,r)}}while(t.peekId()===s&&t.next())}}class l{constructor(t,s=2){this._bucketSize=t,this._rowsLength=_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TILE_SIZE"]/t,this._colsLength=_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TILE_SIZE"]/t,this._elementsPerBucket=s,this._grid=this._initGrid()}checkOverlap(t,s){const e=Math.floor(t/this._bucketSize),i=Math.floor(s/this._bucketSize);return e<0||e>=this._rowsLength||i<0||i>=this._colsLength||this._grid[i*this._colsLength+e]>=this._elementsPerBucket}markUsed(t,s){const e=Math.floor(t/this._bucketSize),i=Math.floor(s/this._bucketSize);this._grid[i*this._colsLength+e]+=1}reset(){this._grid=this._initGrid()}_initGrid(){return new Uint8Array(this._rowsLength*this._colsLength)}}


/***/ }),

/***/ "2uVf":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat3f64.js ***!
  \*****************************************************/
/*! exports provided: a, b, c, f, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return a; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,1,0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function n(e,r,n,t,a,o,u,c,f){return[e,r,n,t,a,o,u,c,f]}function t(e,r){return new Float64Array(e,r,9)}var a=Object.freeze({__proto__:null,create:e,clone:r,fromValues:n,createView:t});


/***/ }),

/***/ 3:
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "46M0":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/geojson/geojson.js ***!
  \******************************************************************************/
/*! exports provided: createOptimizedFeatures, inferLayerProperties, validateGeoJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOptimizedFeatures", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inferLayerProperties", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateGeoJSON", function() { return I; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../OptimizedFeature.js */ "k5I3");
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../OptimizedGeometry.js */ "gVKr");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function o(e){const n=[];for(;;){const{value:t,done:o}=e.next();if(o)return n;n.push(t)}}function r(e){const n=[];return e.forEach((e=>n.push(e))),n}const i={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function*s(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const n of e.features)n&&(yield n)}}function*u(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const n of e.coordinates)yield*n;break;case"MultiPolygon":for(const n of e.coordinates)for(const e of n)yield*e}}function*c(e,o={}){const{geometryType:r,objectIdFieldName:s}=o;for(;;){const{value:u,done:c}=e.next();if(c)return;const{geometry:l,properties:f,id:a}=u;if(l&&i[l.type]!==r)continue;const y=f||{};s&&null!=a&&!y[s]&&(y[s]=a);const p=new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_1__["default"](l?d(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__["default"],l,o):null,y);yield p}}function l(e){for(;;){const{value:n,done:t}=e.next();if(t)return!1;if(n.length>2)return!0}}function f(e){return!y(e)}function a(e){return y(e)}function y(e){let n=0;for(let t=0;t<e.length;t++){const o=e[t],r=e[(t+1)%e.length];n+=o[0]*r[1]-r[0]*o[1]}return n<=0}function p(e){const n=e[0],t=e[e.length-1];return n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]||e.push(n),e}function d(e,n,t){switch(n.type){case"LineString":return g(e,n,t);case"MultiLineString":return m(e,n,t);case"MultiPoint":return h(e,n,t);case"MultiPolygon":return w(e,n,t);case"Point":return b(e,n,t);case"Polygon":return P(e,n,t)}}function g(e,n,t){return S(e,n.coordinates,t),e}function m(e,n,t){for(const o of n.coordinates)S(e,o,t);return e}function h(e,n,t){return S(e,n.coordinates,t),e}function w(e,n,t){for(const o of n.coordinates){j(e,o[0],t);for(let n=1;n<o.length;n++)F(e,o[n],t)}return e}function b(e,n,t){return G(e,n.coordinates,t),e}function P(e,n,t){const o=n.coordinates;j(e,o[0],t);for(let r=1;r<o.length;r++)F(e,o[r],t);return e}function j(e,n,t){const o=p(n);f(o)?M(e,o,t):S(e,o,t)}function F(e,n,t){const o=p(n);a(o)?M(e,o,t):S(e,o,t)}function S(e,n,t){for(const o of n)G(e,o,t);e.lengths.push(n.length)}function M(e,n,t){for(let o=n.length-1;o>=0;o--)G(e,n[o],t);e.lengths.push(n.length)}function G(e,n,t){const[o,r,i]=n;e.coords.push(o,r),t.hasZ&&e.coords.push(i||0)}function x(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function I(n){if(!n)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==n.type&&"FeatureCollection"!==n.type)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:n});const{crs:t}=n;if(!t)return;const o="string"==typeof t?t:"name"===t.type?t.properties.name:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!o||!r.test(o))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function N(e,n={}){const t=s(e),o=[],c=new Set,f=new Set;let a,y=!1,p=Number.NEGATIVE_INFINITY,d=null,g=!1,{geometryType:m=null}=n,h=!1;for(;;){const{value:e,done:n}=t.next();if(n){const e=d&&1===d.length&&d[0]||null;if(e)for(const n of o)n.name===e&&(n.type="esriFieldTypeOID");return{fields:o,geometryType:m,hasZ:y,maxObjectId:Math.max(0,p),objectIdFieldName:e,objectIdFieldType:a,unknownFields:r(f)}}const{geometry:s,properties:w,id:b}=e;if(!s||(m||(m=i[s.type]),i[s.type]===m)){if(!y){y=l(u(s))}if(g||(g=null!=b,g&&(a=typeof b,"number"===a&&(d=Object.keys(w).filter((e=>w[e]===b))))),g&&"number"===a&&null!=b&&(p=Math.max(p,b),d.length>1?d=d.filter((e=>w[e]===b)):1===d.length&&(d=w[d[0]]===b?d:[])),!h&&w){let e=!0;for(const n in w){if(c.has(n))continue;const t=w[n];if(null==t){e=!1,f.add(n);continue}const r=x(t);"unknown"!==r?(f.delete(n),c.add(n),o.push({name:n,alias:n,type:r})):f.add(n)}h=e}}}}function T(e,n){return o(c(s(e),n))}


/***/ }),

/***/ "4xTw":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/BaseTileRenderer.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/HandleOwner.js */ "kJYu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let i=class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_9__["HandleOwner"]{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",(()=>this.notifyChange("updating"))),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach((t=>{e=e&&t.isReady})),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],i.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],i.prototype,"layerView",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],i.prototype,"tileInfoView",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],i.prototype,"updating",null),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],i);var o=i;/* harmony default export */ __webpack_exports__["default"] = (o);


/***/ }),

/***/ "6Az7":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/BitmapTileContainer.js ***!
  \**************************************************************************/
/*! exports provided: BitmapTileContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitmapTileContainer", function() { return n; });
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webgl/enums.js */ "yE7X");
/* harmony import */ var _brushes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brushes.js */ "Oxob");
/* harmony import */ var _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webgl/TileContainer.js */ "ZyIX");
/* harmony import */ var _BitmapTile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BitmapTile.js */ "lP2y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class n extends _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"]{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(r){const s=this._tileInfoView.getTileBounds(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__["create"])(),r);return new _BitmapTile_js__WEBPACK_IMPORTED_MODULE_4__["BitmapTile"](r,s,this._tileInfoView.tileInfo.size)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP&&super.doRender(e)}}


/***/ }),

/***/ "8Lmx":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/byteSizeEstimations.js ***!
  \***************************************************************/
/*! exports provided: estimateAttributesObjectSize, estimateFixedArraySize, estimateNumberByteSize, estimateStringByteSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateAttributesObjectSize", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateFixedArraySize", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateNumberByteSize", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateStringByteSize", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function n(n){return 32+n.length}function t(){return 16}function e(e){if(!e)return 0;let r=32;for(const o in e)if(e.hasOwnProperty(o)){const c=e[o];switch(typeof c){case"string":r+=n(c);break;case"number":r+=t();break;case"boolean":r+=4}}return r}function r(n,t){return 32+n.length*t}


/***/ }),

/***/ "A8Zi":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/viewStateUtils.js ***!
  \**************************************************************/
/*! exports provided: bboxIntersects, getBBox, getOuterSize, snapToPixel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bboxIntersects", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBBox", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOuterSize", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapToPixel", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t=Math.PI/180;function n(n){return n*t}function o(t,n,o){const{resolution:r,size:u}=o;return t[0]=r*(Math.round(n[0]/r)+u[0]%2*.5),t[1]=r*(Math.round(n[1]/r)+u[1]%2*.5),t}function r(t,o){const r=n(o.rotation),u=Math.abs(Math.cos(r)),a=Math.abs(Math.sin(r)),[s,c]=o.size;return t[0]=Math.round(c*a+s*u),t[1]=Math.round(c*u+s*a),t}function u(t,n,o,r){const[u,a]=n,[s,c]=r,i=.5*o;return t[0]=u-i*s,t[1]=a-i*c,t[2]=u+i*s,t[3]=a+i*c,t}function a(t,n){const[o,r,u,a]=t,[s,c,i,e]=n;return!(o>i||u<s||r>e||a<c)}


/***/ }),

/***/ "AfLA":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/heatmapUtils.js ***!
  \*********************************************************************/
/*! exports provided: calculateHeatmapIntensityInfo, calculateHeatmapIntensityInfoReaders, createHeatmapImageData, createKernel, createValueFunction, createValueFunctionCursor, drawHeatmap, generateGradient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateHeatmapIntensityInfo", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateHeatmapIntensityInfoReaders", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHeatmapImageData", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createKernel", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createValueFunction", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createValueFunctionCursor", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawHeatmap", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateGradient", function() { return n; });
/* harmony import */ var _core_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/global.js */ "3r0u");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/mathUtils.js */ "OKTS");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const n=(()=>{if(!("document"in _core_global_js__WEBPACK_IMPORTED_MODULE_0__["default"]))return()=>null;const e=document.createElement("canvas"),n=e.getContext("2d"),r=512;return e.height=r,e.width=1,t=>{n.clearRect(0,0,1,e.height);const r=n.createLinearGradient(0,0,0,e.height);for(const{ratio:e,color:n}of t.colorStops)r.addColorStop(Math.max(e,.001),`rgba(${n[0]}, ${n[1]}, ${n[2]}, ${n[3]})`);return n.fillStyle=r,n.fillRect(0,0,1,e.height),n.getImageData(0,0,1,e.height).data}})();function r(t,e,n,r){const{blurRadius:o,fieldOffset:a,field:i}=e,u=new Float64Array(n*r),l=f(o),s=Math.round(3*o);let h,d=Number.NEGATIVE_INFINITY;const m=c(i,a);for(const{geometry:f,attributes:c}of t){const t=f.x-s,e=f.y-s,o=Math.max(0,t),a=Math.max(0,e),i=Math.min(r,f.y+s),g=Math.min(n,f.x+s),y=+m(c);for(let r=a;r<i;r++){const a=l[r-e];for(let e=o;e<g;e++){const o=l[e-t];h=u[r*n+e]+=a*o*y,h>d&&(d=h)}}}return{matrix:u.buffer,max:d}}function o(t,e,n,r){const{blurRadius:o,fieldOffset:a,field:i}=e,c=new Float64Array(n*r),l=f(o),s=Math.round(3*o);let h,d=Number.NEGATIVE_INFINITY;const m=u(i,a),g=new Set;for(const f of t){const t=f.getCursor();for(;t.next();){const e=t.getObjectId();if(g.has(e))continue;g.add(e);const o=t.readLegacyPointGeometry(),a=128;if(o.x<-a||o.x>=n+a||o.y<-a||o.y>r+a)continue;const i=+m(t),f=Math.round(o.x)-s,u=Math.round(o.y)-s,y=Math.max(0,f),M=Math.max(0,u),x=Math.min(r,Math.round(o.y)+s),b=Math.min(n,Math.round(o.x)+s);for(let t=M;t<x;t++){const e=l[t-u];for(let r=y;r<b;r++){const o=l[r-f];h=c[t*n+r]+=e*o*i,h>d&&(d=h)}}}}return{matrix:c.buffer,max:d}}function a(t,e,n,r,o,a){t.canvas.width=t.canvas.height=e,t.clearRect(0,0,e,e);const f=t.getImageData(0,0,e,e);n&&r&&f.data.set(new Uint8ClampedArray(i(e,n,r,o,a))),t.putImageData(f,0,0)}function i(t,n,r,o,a){const i=new Uint32Array(t*t),f="buffer"in n?n:new Float64Array(n),c="buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer),u=c.length/(a-o);for(let l=0;l<f.length;l++){const t=f[l],n=Math.floor((t-o)*u);i[l]=c[Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])(n,0,c.length-1)]}return i.buffer}function f(t){const e=Math.round(3*t),n=2*t*t,r=new Float64Array(2*e+1);for(let o=0;o<=r.length;o++)r[o]=Math.exp(-((o-e)**2)/n)/Math.sqrt(2*Math.PI)*(t/2);return r}function c(t,e){return"function"==typeof t?t:t?"string"==typeof e?e=>-1*+e[t]:n=>+n[t]+e:()=>1}function u(t,e){return null!=t?"string"==typeof e?e=>-1*+e.readAttribute(t):n=>+n.readAttribute(t)+e:t=>1}


/***/ }),

/***/ "BGvB":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/kmlUtils.js ***!
  \**************************************************************/
/*! exports provided: computeExtent, fetchService, getGraphics, parseKML, sublayersFromJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeExtent", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchService", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGraphics", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseKML", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sublayersFromJSON", function() { return S; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ "EyXx");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../geometry/support/boundsUtils.js */ "KLE9");
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../PopupTemplate.js */ "SFah");
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../kernel.js */ "975N");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../renderers/support/jsonUtils.js */ "+Xal");
/* harmony import */ var _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../tasks/support/FeatureSet.js */ "8prj");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../geometry/support/aaBoundingBox.js */ "QmHG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const c={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function d(o){const t=o.folders||[],r=t.slice(),s=new Map,n=new Map,i=new Map,a=new Map,f=new Map,l={esriGeometryPoint:n,esriGeometryPolyline:i,esriGeometryPolygon:a};(o.featureCollection&&o.featureCollection.layers||[]).forEach((o=>{const t=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(o);t.featureSet.features=[];const r=o.featureSet.geometryType;s.set(r,t);const f=o.layerDefinition.objectIdField;"esriGeometryPoint"===r?G(n,f,o.featureSet.features):"esriGeometryPolyline"===r?G(i,f,o.featureSet.features):"esriGeometryPolygon"===r&&G(a,f,o.featureSet.features)})),o.groundOverlays&&o.groundOverlays.forEach((e=>{f.set(e.id,e)})),t.forEach((e=>{e.networkLinkIds.forEach((t=>{const s=P(t,e.id,o.networkLinks);s&&r.push(s)}))})),r.forEach((o=>{o.featureInfos&&(o.points=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(s.get("esriGeometryPoint")),o.polylines=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(s.get("esriGeometryPolyline")),o.polygons=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(s.get("esriGeometryPolygon")),o.mapImages=[],o.featureInfos.map((e=>{switch(e.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const t=l[e.type].get(e.id);t&&o[c[e.type]].featureSet.features.push(t);break}case"GroundOverlay":{const t=f.get(e.id);t&&o.mapImages.push(t);break}}})),o.fullExtent=j([o]))}));const u=j(r);return{folders:t,sublayers:r,extent:u}}function g(e,r,s,n){const f=_kernel_js__WEBPACK_IMPORTED_MODULE_6__["id"]&&_kernel_js__WEBPACK_IMPORTED_MODULE_6__["id"].findCredential(e);e=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["addQueryParameters"])(e,{token:f&&f.token});const l=_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].kmlServiceUrl;return Object(_request_js__WEBPACK_IMPORTED_MODULE_7__["default"])(l,{query:{url:e,model:"simple",folders:"",refresh:0!==s||void 0,outSR:JSON.stringify(r)},responseType:"json",signal:n})}function S(e,o,t=null,r=[]){const s=[],n={},i=o.sublayers,a=o.folders.map((e=>e.id));return i.forEach((o=>{const i=new e;if(t?i.read(o,t):i.read(o),r.length&&a.indexOf(i.id)>-1&&(i.visible=-1!==r.indexOf(i.id)),n[o.id]=i,null!=o.parentFolderId&&-1!==o.parentFolderId){const e=n[o.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(i)}else s.unshift(i)})),s}function G(e,o,t){t.forEach((t=>{e.set(t.attributes[o],t)}))}function h(e,o){let t;return o.some((o=>o.id===e&&(t=o,!0))),t}function P(e,o,t){const r=h(e,t);return r&&(r.parentFolderId=o,r.networkLink=r),r}async function b(e){const o=_tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_9__["default"].fromJSON(e.featureSet).features,t=e.layerDefinition,r=Object(_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["fromJSON"])(t.drawingInfo.renderer),s=_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromJSON(e.popupInfo),i=[];for(const n of o){const e=await r.getSymbolAsync(n);n.symbol=e,n.popupTemplate=s,n.visible=!0,i.push(n)}return i}function j(e){const o=Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["create"])(),t=Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["create"])(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["NEGATIVE_INFINITY"]);for(const r of e){if(r.polygons&&r.polygons.featureSet&&r.polygons.featureSet.features)for(const e of r.polygons.featureSet.features)Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__["getBoundsXYZ"])(o,e.geometry),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["expandWithAABB"])(t,o);if(r.polylines&&r.polylines.featureSet&&r.polylines.featureSet.features)for(const e of r.polylines.featureSet.features)Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__["getBoundsXYZ"])(o,e.geometry),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["expandWithAABB"])(t,o);if(r.points&&r.points.featureSet&&r.points.featureSet.features)for(const e of r.points.featureSet.features)Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__["getBoundsXYZ"])(o,e.geometry),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["expandWithAABB"])(t,o);if(r.mapImages)for(const e of r.mapImages)Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__["getBoundsXYZ"])(o,e.extent),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["expandWithAABB"])(t,o)}return Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["equals"])(t,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["NEGATIVE_INFINITY"])?null:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"].WGS84}}


/***/ }),

/***/ "BPBZ":
/*!**************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/quat.js ***!
  \**************************************************/
/*! exports provided: A, B, C, D, E, F, G, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return tt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return nt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return rt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return T; });
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec3f64.js */ "Cy1f");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.js */ "QhKk");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3.js */ "5DEt");
/* harmony import */ var _mat3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mat3f64.js */ "2uVf");
/* harmony import */ var _quatf64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quatf64.js */ "sTkM");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vec4.js */ "dXfX");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function x(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function A(t,s,a){a*=.5;const n=Math.sin(a);return t[0]=n*s[0],t[1]=n*s[1],t[2]=n*s[2],t[3]=Math.cos(a),t}function I(t,s){const n=2*Math.acos(s[3]),o=Math.sin(n/2);return o>_common_js__WEBPACK_IMPORTED_MODULE_1__["E"]?(t[0]=s[0]/o,t[1]=s[1]/o,t[2]=s[2]/o):(t[0]=1,t[1]=0,t[2]=0),n}function P(t,s,a){const n=s[0],o=s[1],r=s[2],c=s[3],e=a[0],u=a[1],i=a[2],h=a[3];return t[0]=n*h+c*e+o*i-r*u,t[1]=o*h+c*u+r*e-n*i,t[2]=r*h+c*i+n*u-o*e,t[3]=c*h-n*e-o*u-r*i,t}function b(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],c=s[3],e=Math.sin(a),u=Math.cos(a);return t[0]=n*u+c*e,t[1]=o*u+r*e,t[2]=r*u-o*e,t[3]=c*u-n*e,t}function y(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],c=s[3],e=Math.sin(a),u=Math.cos(a);return t[0]=n*u-r*e,t[1]=o*u+c*e,t[2]=r*u+n*e,t[3]=c*u-o*e,t}function E(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],c=s[3],e=Math.sin(a),u=Math.cos(a);return t[0]=n*u+o*e,t[1]=o*u-n*e,t[2]=r*u+c*e,t[3]=c*u-r*e,t}function _(t,s){const a=s[0],n=s[1],o=s[2];return t[0]=a,t[1]=n,t[2]=o,t[3]=Math.sqrt(Math.abs(1-a*a-n*n-o*o)),t}function z(t,s,n,o){const r=s[0],c=s[1],e=s[2],u=s[3];let i,h,M,f,l,m=n[0],p=n[1],q=n[2],j=n[3];return h=r*m+c*p+e*q+u*j,h<0&&(h=-h,m=-m,p=-p,q=-q,j=-j),1-h>_common_js__WEBPACK_IMPORTED_MODULE_1__["E"]?(i=Math.acos(h),M=Math.sin(i),f=Math.sin((1-o)*i)/M,l=Math.sin(o*i)/M):(f=1-o,l=o),t[0]=f*r+l*m,t[1]=f*c+l*p,t[2]=f*e+l*q,t[3]=f*u+l*j,t}function L(t){const s=Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["R"])(),a=Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["R"])(),o=Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["R"])(),r=Math.sqrt(1-s),c=Math.sqrt(s);return t[0]=r*Math.sin(2*Math.PI*a),t[1]=r*Math.cos(2*Math.PI*a),t[2]=c*Math.sin(2*Math.PI*o),t[3]=c*Math.cos(2*Math.PI*o),t}function k(t,s){const a=s[0],n=s[1],o=s[2],r=s[3],c=a*a+n*n+o*o+r*r,e=c?1/c:0;return t[0]=-a*e,t[1]=-n*e,t[2]=-o*e,t[3]=r*e,t}function w(t,s){return t[0]=-s[0],t[1]=-s[1],t[2]=-s[2],t[3]=s[3],t}function B(t,s){const a=s[0]+s[4]+s[8];let n;if(a>0)n=Math.sqrt(a+1),t[3]=.5*n,n=.5/n,t[0]=(s[5]-s[7])*n,t[1]=(s[6]-s[2])*n,t[2]=(s[1]-s[3])*n;else{let a=0;s[4]>s[0]&&(a=1),s[8]>s[3*a+a]&&(a=2);const o=(a+1)%3,r=(a+2)%3;n=Math.sqrt(s[3*a+a]-s[3*o+o]-s[3*r+r]+1),t[a]=.5*n,n=.5/n,t[3]=(s[3*o+r]-s[3*r+o])*n,t[o]=(s[3*o+a]+s[3*a+o])*n,t[r]=(s[3*r+a]+s[3*a+r])*n}return t}function C(t,s,a,n){const o=.5*Math.PI/180;s*=o,a*=o,n*=o;const r=Math.sin(s),c=Math.cos(s),e=Math.sin(a),u=Math.cos(a),i=Math.sin(n),h=Math.cos(n);return t[0]=r*u*h-c*e*i,t[1]=c*e*h+r*u*i,t[2]=c*u*i-r*e*h,t[3]=c*u*h+r*e*i,t}function D(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}const F=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["c"],G=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["s"],O=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["a"],R=P,T=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["b"],W=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["d"],X=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["l"],Y=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["e"],Z=Y,H=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["f"],J=H,K=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["n"],N=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["g"],Q=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["h"];function S(t,s,a){const n=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(s,a);return n<-.999999?(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(U,V,s),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["j"])(U)<1e-6&&Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(U,$,s),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(U,U),A(t,U,Math.PI),t):n>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(U,s,a),t[0]=U[0],t[1]=U[1],t[2]=U[2],t[3]=1+n,K(t,t))}const U=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),V=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(1,0,0),$=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(0,1,0);function tt(t,s,a,n,o,r){return z(st,s,o,r),z(at,a,n,r),z(t,st,at,2*r*(1-r)),t}const st=Object(_quatf64_js__WEBPACK_IMPORTED_MODULE_4__["a"])(),at=Object(_quatf64_js__WEBPACK_IMPORTED_MODULE_4__["a"])();function nt(t,s,a,n){const o=ot;return o[0]=a[0],o[3]=a[1],o[6]=a[2],o[1]=n[0],o[4]=n[1],o[7]=n[2],o[2]=-s[0],o[5]=-s[1],o[8]=-s[2],K(t,B(t,o))}const ot=Object(_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])();var rt=Object.freeze({__proto__:null,identity:x,setAxisAngle:A,getAxisAngle:I,multiply:P,rotateX:b,rotateY:y,rotateZ:E,calculateW:_,slerp:z,random:L,invert:k,conjugate:w,fromMat3:B,fromEuler:C,str:D,copy:F,set:G,add:O,mul:R,scale:T,dot:W,lerp:X,length:Y,len:Z,squaredLength:H,sqrLen:J,normalize:K,exactEquals:N,equals:Q,rotationTo:S,sqlerp:tt,setAxes:nt});


/***/ }),

/***/ "Dfpg":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/portalItemUtils.js ***!
  \*********************************************************************/
/*! exports provided: addTypeKeyword, hasTypeKeyword, removeTypeKeyword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTypeKeyword", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasTypeKeyword", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTypeKeyword", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function e(e,n){if(!t(e,n)){const t=e.typeKeywords;t?t.push(n):e.typeKeywords=[n]}}function t(e,t){return!!e.typeKeywords&&e.typeKeywords.indexOf(t)>-1}function n(e,t){const n=e.typeKeywords;if(n){const e=n.indexOf(t);e>-1&&n.splice(e,1)}}


/***/ }),

/***/ "Fewv":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/jsonContext.js ***!
  \*****************************************************************/
/*! exports provided: createForItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createForItem", function() { return o; });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Portal.js */ "AiS/");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function o(o){return{origin:"portal-item",url:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__["urlToObject"])(o.itemUrl),portal:o.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDefault(),portalItem:o,readResourcePaths:[]}}


/***/ }),

/***/ "Fkrg":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/BitmapTileLayerView2D.js ***!
  \****************************************************************************/
/*! exports provided: BitmapTileLayerView2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitmapTileLayerView2D", function() { return i; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _engine_BitmapTileContainer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../engine/BitmapTileContainer.js */ "6Az7");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const i=i=>{let s=class extends i{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new _engine_BitmapTileContainer_js__WEBPACK_IMPORTED_MODULE_9__["BitmapTileContainer"](this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren()}};return s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.BitmapTileLayerView2D")],s),s};


/***/ }),

/***/ "IcpP":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/sourceUtils.js ***!
  \**********************************************************************************/
/*! exports provided: createFeatureEditErrorResult, createFeatureEditSuccessResult, loadGeometryEngine, loadGeometryEngineForSimplify, mixAttributes, simplify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFeatureEditErrorResult", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFeatureEditSuccessResult", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGeometryEngine", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGeometryEngineForSimplify", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixAttributes", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplify", function() { return h; });
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils.js */ "f4Nx");
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../support/fieldUtils.js */ "wdpY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class o{constructor(){this.code=null,this.description=null}}class l{constructor(t){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function u(t){return new l(t)}class a{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function c(t){return new a(t)}const f=new Set;function d(t,e,r,s,o=!1,l){f.clear();for(const a in s){const e=t.get(a);if(!e)continue;const c=s[a],d=m(e,c);if(d!==c&&l&&l.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:e,originalValue:c,sanitizedValue:d}}),f.add(e.name),e&&(o||e.editable)){const t=Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["validateFieldValue"])(e,d);if(t)return u(Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["validationErrorToString"])(t,e,d));r[e.name]=d}}for(const n of e)if(!f.has(n.name))return u(`missing required field "${n.name}"`);return null}function m(t,n){let i=n;return"string"==typeof n&&Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["isNumericField"])(t)?i=parseFloat(n):null!=n&&Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["isStringField"])(t)&&"string"!=typeof n&&(i=String(n)),Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["sanitizeNullFieldValue"])(i)}let p;function h(e,n){if(!e||!Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__["isValid"])(n))return e;if("rings"in e||"paths"in e){if(!p)throw new TypeError("geometry engine not loaded");return p.simplify(n,e)}return e}async function g(){return p||(p=await Promise.all(/*! import() | geometry-geometryEngineJSON-js */[__webpack_require__.e("default~chunks-geometryEngineBase-js~geometry-geometryEngine-js~geometry-geometryEngineJSON-js~geome~1472b8fb"), __webpack_require__.e("common"), __webpack_require__.e("geometry-geometryEngineJSON-js")]).then(__webpack_require__.bind(null, /*! ../../../../geometry/geometryEngineJSON.js */ "AKzY")),p)}async function y(e,n){!Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__["isValid"])(e)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n||await g()}


/***/ }),

/***/ "JYLa":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TileIndex.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _layers_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../layers/support/TilemapCache.js */ "llFo");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tiling/TileKey.js */ "rlSK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class r{constructor(e){if(e instanceof _layers_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_1__["TilemapCache"])this._tilemapCache=e;else{if(!e||!("index"in e))throw new Error("Invalid tilemap!");this._tilemap=e.index}}dataKey(t,r){if(this._tilemapCache){const{level:i,row:o,col:a}=t,s=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](t);return this._tilemapCache.fetchAvailabilityUpsample(i,o,a,s,r).then((()=>(s.world=t.world,s))).catch((t=>{if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["isAbortError"])(t))throw t;return null}))}return this._getIndexedDataKey(t)}forEach(e,t,l,r,i){this._callback=i,this._maxLevel=t+e,this._forEach(this._tilemap,t,l,r)}_forEach(e,t,l,r){0!==e&&(this._callback(t,l,r),t!==this._maxLevel&&"object"==typeof e&&(this._forEach(e[0],t+1,2*l,2*r),this._forEach(e[1],t+1,2*l,2*r+1),this._forEach(e[2],t+1,2*l+1,2*r),this._forEach(e[3],t+1,2*l+1,2*r+1)))}_getIndexedDataKey(e){const t=[e];if(e.level<0||e.row<0||e.col<0||e.row>>e.level>0||e.col>>e.level>0)return Promise.resolve(null);let r=e;for(;0!==r.level;)r=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](r.level-1,r.row>>1,r.col>>1,r.world),t.push(r);let i,o,a=this._tilemap,s=t.pop();if(1===a)return Promise.resolve(s);for(;t.length;)if(i=t.pop(),o=(1&i.col)+((1&i.row)<<1),a){if(0===a[o]){s=null;break}if(1===a[o]){s=i;break}s=i,a=a[o]}return Promise.resolve(s)}}/* harmony default export */ __webpack_exports__["default"] = (r);


/***/ }),

/***/ "LTnl":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/BitmapContainer.js ***!
  \**********************************************************************/
/*! exports provided: BitmapContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitmapContainer", function() { return t; });
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl/enums.js */ "yE7X");
/* harmony import */ var _brushes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brushes.js */ "Oxob");
/* harmony import */ var _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webgl/WGLContainer.js */ "mgI5");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class t extends _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"]{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(s){const t=s.registerRenderPass({name:"bitmap",brushes:[_brushes_js__WEBPACK_IMPORTED_MODULE_1__["brushes"].bitmap],target:()=>this.children,drawPhase:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].MAP});return[...super.prepareRenderPasses(s),t]}}


/***/ }),

/***/ "LbAs":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/support/requestImageUtils.js ***!
  \****************************************************************/
/*! exports provided: requestImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestImage", function() { return t; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function t(t,r){const{data:a}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t,{responseType:"image",...r});return a}


/***/ }),

/***/ "N3sV":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/testSVGPremultipliedAlpha.js ***!
  \****************************************************************************/
/*! exports provided: testSVGPremultipliedAlpha */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testSVGPremultipliedAlpha", function() { return n; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _Program_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Program.js */ "jjdI");
/* harmony import */ var _BufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BufferObject.js */ "fOQB");
/* harmony import */ var _Texture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Texture.js */ "of9L");
/* harmony import */ var _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VertexArrayObject.js */ "D6bk");
/* harmony import */ var _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FramebufferObject.js */ "0meK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function n(n){const a=new Image;if(a.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",a.width=5,a.height=5,await a.decode(),!n.gl)return!0;const s=new _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__["default"](n,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),p=_BufferObject_js__WEBPACK_IMPORTED_MODULE_2__["default"].createVertex(n,35044,new Uint16Array([0,0,1,0,0,1,1,1])),m=new _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__["default"](n,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:p}),d=new _Program_js__WEBPACK_IMPORTED_MODULE_1__["default"](n,"\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv = a_pos;\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor = texture2D(u_texture, v_uv);\n  }\n  ",{a_pos:0});n.bindProgram(d);const g=new _Texture_js__WEBPACK_IMPORTED_MODULE_3__["default"](n,{dataType:5121,pixelFormat:6408,preMultiplyAlpha:!1,wrapMode:33071,samplingMode:9729},a);n.bindTexture(g,0),d.setUniform1i("u_texture",0);const c=n.getBoundFramebufferObject(),{x:f,y:u,width:l,height:w}=n.getViewport();n.bindFramebuffer(s),n.setViewport(0,0,1,1),n.bindVAO(m),n.drawArrays(5,0,4);const h=new Uint8Array(4);return s.readPixels(0,0,1,1,6408,5121,h),d.dispose(),m.dispose(!1),p.dispose(),s.dispose(),g.dispose(),n.setViewport(f,u,l,w),n.bindFramebuffer(c),a.src="",255===h[0]}


/***/ }),

/***/ "OYGz":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/WMTSLayerInfo.js ***!
  \*******************************************************************/
/*! exports provided: default, WMTSLayerInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WMTSLayerInfo", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var i;let p=i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{constructor(r){super(r)}clone(){return new i({customLayerParameters:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.customLayerParameters),customParameters:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{type:Object,write:!0}})],p.prototype,"customLayerParameters",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{type:Object,write:!0}})],p.prototype,"customParameters",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{write:!0}})],p.prototype,"layerIdentifier",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{write:!0}})],p.prototype,"tileMatrixSet",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{write:!0}})],p.prototype,"url",void 0),p=i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.WMTSLayerInfo")],p);var a=p;/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ }),

/***/ "R/jG":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec3f32.js ***!
  \*****************************************************/
/*! exports provided: O, U, Z, a, b, c, d, e, f, g, h, o, u, v, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function n(){return new Float32Array(3)}function r(n){const r=new Float32Array(3);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r}function t(n,r,t){const a=new Float32Array(3);return a[0]=n,a[1]=r,a[2]=t,a}function a(n,r){return new Float32Array(n,r,3)}function e(){return n()}function o(){return t(1,1,1)}function u(){return t(1,0,0)}function s(){return t(0,1,0)}function c(){return t(0,0,1)}const i=e(),f=o(),l=u(),_=s(),w=c();var y=Object.freeze({__proto__:null,create:n,clone:r,fromValues:t,createView:a,zeros:e,ones:o,unitX:u,unitY:s,unitZ:c,ZEROS:i,ONES:f,UNIT_X:l,UNIT_Y:_,UNIT_Z:w});


/***/ }),

/***/ "SaAm":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/scaleUtils.js ***!
  \******************************************************************/
/*! exports provided: getExtentForScale, getResolutionForScale, getScale, getScaleForResolution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtentForScale", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResolutionForScale", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScale", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaleForResolution", function() { return o; });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/unitUtils.js */ "gEht");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const e=96;function r(r,i){const o=i||r.extent,c=r.width,u=Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__["getMetersPerUnitForSR"])(o&&o.spatialReference);return o&&c?o.width/c*u*_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__["inchesPerMeter"]*e:0}function i(r,i){return r/(Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__["getMetersPerUnitForSR"])(i)*_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__["inchesPerMeter"]*e)}function o(r,i){return r*(Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__["getMetersPerUnitForSR"])(i)*_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__["inchesPerMeter"]*e)}function c(t,n){const e=t.extent,r=t.width,o=i(n,e.spatialReference);return e.clone().expand(o*r/e.width)}


/***/ }),

/***/ "XJLX":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/portalLayers.js ***!
  \******************************************************************/
/*! exports provided: fromItem, selectLayerClassPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromItem", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLayerClassPath", function() { return u; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _PortalItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PortalItem.js */ "p+Gi");
/* harmony import */ var _portalItemUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portalItemUtils.js */ "Dfpg");
/* harmony import */ var _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layers/support/lazyLayerLoader.js */ "oLSx");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function l(e){return!e.portalItem||e.portalItem instanceof _PortalItem_js__WEBPACK_IMPORTED_MODULE_3__["default"]||(e={...e,portalItem:new _PortalItem_js__WEBPACK_IMPORTED_MODULE_3__["default"](e.portalItem)}),s(e.portalItem).then((r=>{const t={portalItem:e.portalItem,...r.properties},a=r.constructor;return Promise.resolve(new a(t))}))}function s(e){return e.load().then(u).then(i)}function u(e){switch(e.type){case"Map Service":return c(e);case"Feature Service":return y(e);case"Feature Collection":return p(e);case"Scene Service":return m(e);case"Image Service":return f(e);case"Stream Service":return d();case"Vector Tile Service":return L();case"KML":return h();case"WMTS":return N();case"WMS":return I();default:return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function i(e){return(0,_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"][e.className])().then((r=>({constructor:r,properties:e.properties})))}function c(e){return S(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}))}function y(e){return g(e).then((e=>{if("object"==typeof e){const r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}function m(e){return g(e).then((r=>{if("object"==typeof r){const t={};let a;if(null!=r.id?(t.layerId=r.id,a=`${e.url}/layers/${r.id}`):a=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const r={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const t of Object.keys(r))if(-1!==e.typeKeywords.indexOf(t))return{className:r[t]}}return j(a).then((e=>{let r="SceneLayer";const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&a[e.layerType]&&(r=a[e.layerType]),{className:r,properties:t}}))}return{className:"GroupLayer"}}))}async function p(e){await e.load();if(Object(_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_4__["hasTypeKeyword"])(e,"Map Notes"))return{className:"MapNotesLayer"};if(Object(_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_4__["hasTypeKeyword"])(e,"Route Layer"))return{className:"RouteLayer"};return 1===T(await e.fetchData())?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function f(e){var r,t,a;await e.load();const n=null!=(r=null==(t=e.typeKeywords)?void 0:t.map((e=>e.toLowerCase())))?r:[];if(n.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const o=await e.fetchData(),l=null==o?void 0:o.layerType;if("ArcGISTiledImageServiceLayer"===l)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===l)return{className:"ImageryLayer"};return"map"===(null==(a=(await j(e.url)).cacheType)?void 0:a.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function d(){return{className:"StreamLayer"}}function L(){return{className:"VectorTileLayer"}}function h(){return{className:"KMLLayer"}}function I(){return{className:"WMSLayer"}}function N(){return{className:"WMTSLayer"}}function S(e){return j(e.url).then((e=>e.tileInfo))}function g(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((r=>T(r)>0?v(r):j(e.url).then(v)))}function v(r){return 1===T(r)&&{id:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(w(r))}}function w(e){const r=e.layers;if(r&&r.length)return r[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function T(e){var r,t,a,n;return(null!=(r=null==e||null==(t=e.layers)?void 0:t.length)?r:0)+(null!=(a=null==e||null==(n=e.tables)?void 0:n.length)?a:0)}function j(e){return Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e,{responseType:"json",query:{f:"json"}}).then((e=>e.data))}


/***/ }),

/***/ "XTTP":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/I3SLayerDefinitions.js ***!
  \*************************************************************************/
/*! exports provided: I3SGeometryAttribute, I3SGeometryBuffer, I3SGeometryCompressedAttributes, I3SGeometryDefinition, I3SMaterialDefinition, I3SMaterialPBRMetallicRoughness, I3SMaterialTexture, I3SNodePageDefinition, I3STextureFormat, I3STextureSetDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3SGeometryAttribute", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3SGeometryBuffer", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3SGeometryCompressedAttributes", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3SGeometryDefinition", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3SMaterialDefinition", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3SMaterialPBRMetallicRoughness", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3SMaterialTexture", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3SNodePageDefinition", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3STextureFormat", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3STextureSetDefinition", function() { return u; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "RI0u");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number})],s.prototype,"nodesPerPage",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number})],s.prototype,"rootIndex",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String})],s.prototype,"lodSelectionMetricType",void 0),s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SNodePageDefinition")],s);let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{constructor(){super(...arguments),this.factor=1}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],i.prototype,"id",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number})],i.prototype,"factor",void 0),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SMaterialTexture")],i);let a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:[Number]})],a.prototype,"baseColorFactor",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:i})],a.prototype,"baseColorTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:i})],a.prototype,"metallicRoughnessTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number})],a.prototype,"metallicFactor",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number})],a.prototype,"roughnessFactor",void 0),a=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SMaterialPBRMetallicRoughness")],a);let l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({opaque:"opaque",mask:"mask",blend:"blend"})],l.prototype,"alphaMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number})],l.prototype,"alphaCutoff",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Boolean})],l.prototype,"doubleSided",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({none:"none",back:"back",front:"front"})],l.prototype,"cullFace",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:i})],l.prototype,"normalTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:i})],l.prototype,"occlusionTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:i})],l.prototype,"emissiveTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:[Number]})],l.prototype,"emissiveFactor",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:a})],l.prototype,"pbrMetallicRoughness",void 0),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SMaterialDefinition")],l);let n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],n.prototype,"name",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",basis:"basis"})],n.prototype,"format",void 0),n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3STextureFormat")],n);let u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{constructor(){super(...arguments),this.atlas=!1}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:[n]})],u.prototype,"formats",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Boolean})],u.prototype,"atlas",void 0),u=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3STextureSetDefinition")],u);let y=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],y.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number})],y.prototype,"component",void 0),y=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SGeometryAttribute")],y);let c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({draco:"draco"})],c.prototype,"encoding",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:[String]})],c.prototype,"attributes",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SGeometryCompressedAttributes")],c);let d=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{constructor(){super(...arguments),this.offset=0}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number})],d.prototype,"offset",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:y})],d.prototype,"position",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:y})],d.prototype,"normal",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:y})],d.prototype,"uv0",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:y})],d.prototype,"color",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:y})],d.prototype,"uvRegion",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:y})],d.prototype,"featureId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:y})],d.prototype,"faceRange",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:c})],d.prototype,"compressedAttributes",void 0),d=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SGeometryBuffer")],d);let m=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__["enumeration"])({triangle:"triangle"})],m.prototype,"topology",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],m.prototype,"geometryBuffers",void 0),m=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layer.support.I3SGeometryDefinition")],m);


/***/ }),

/***/ "cBWO":
/*!**************************************************!*\
  !*** ./node_modules/@arcgis/core/core/number.js ***!
  \**************************************************/
/*! exports provided: _parseInfo, format, getCustoms, parse, regexp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_parseInfo", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustoms", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexp", function() { return c; });
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string.js */ "s7YA");
/* harmony import */ var _intl_locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../intl/locale.js */ "IDUf");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t={ar:[".",","],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function r(e){e||(e=Object(_intl_locale_js__WEBPACK_IMPORTED_MODULE_1__["getLocale"])());let r=e in t;if(!r){const n=e.split("-");n.length>1&&n[0]in t&&(e=n[0],r=!0),r||(e="en")}const[o,i,s="#,##0.###"]=t[e];return{decimal:o,group:i,pattern:s}}function o(e,n){const t=r((n={...n}).locale);n.customs=t;const o=n.pattern||t.pattern;return isNaN(e)||Math.abs(e)===1/0?null:s(e,o,n)}const i=/[#0,]*[#0](?:\.0*#*)?/;function s(e,n,t){const r=(t=t||{}).customs.group,o=t.customs.decimal,s=n.split(";"),c=s[0];if(-1!==(n=s[e<0?1:0]||"-"+c).indexOf("%"))e*=100;else if(-1!==n.indexOf("‰"))e*=1e3;else{if(-1!==n.indexOf("¤"))throw new Error("currency notation not supported");if(-1!==n.indexOf("E"))throw new Error("exponential notation not supported")}const a=i,p=c.match(a);if(!p)throw new Error("unable to find a number expression in pattern: "+n);return!1===t.fractional&&(t.places=0),n.replace(a,l(e,p[0],{decimal:o,group:r,places:t.places,round:t.round}))}function l(e,n,t){!0===(t=t||{}).places&&(t.places=0),t.places===1/0&&(t.places=6);const r=n.split("."),o="string"==typeof t.places&&t.places.indexOf(",");let i=t.places;o?i=t.places.substring(o+1):i>=0||(i=(r[1]||[]).length),t.round<0||(e=Number(e.toFixed(Number(i))));const s=String(Math.abs(e)).split("."),l=s[1]||"";if(r[1]||t.places){o&&(t.places=t.places.substring(0,o));const e=void 0!==t.places?t.places:r[1]&&r[1].lastIndexOf("0")+1;e>l.length&&(s[1]=l.padEnd(Number(e),"0")),i<l.length&&(s[1]=l.substr(0,Number(i)))}else s[1]&&s.pop();const c=r[0].replace(",","");let a=c.indexOf("0");-1!==a&&(a=c.length-a,a>s[0].length&&(s[0]=s[0].padStart(a,"0")),-1===c.indexOf("#")&&(s[0]=s[0].substr(s[0].length-a)));let p,u,f=r[0].lastIndexOf(",");if(-1!==f){p=r[0].length-f-1;const e=r[0].substr(0,f);f=e.lastIndexOf(","),-1!==f&&(u=e.length-f-1)}const d=[];for(let g=s[0];g;){const e=g.length-p;d.push(e>0?g.substr(e):g),g=e>0?g.slice(0,e):"",u&&(p=u,u=void 0)}return s[0]=d.reverse().join(t.group||","),s.join(t.decimal||".")}function c(e){return a(e).regexp}function a(n){const t=r((n=n||{}).locale),o=n.pattern||t.pattern,s=t.group,l=t.decimal;let c=1;if(-1!==o.indexOf("%"))c/=100;else if(-1!==o.indexOf("‰"))c/=1e3;else if(-1!==o.indexOf("¤"))throw new Error("currency notation not supported");const a=o.split(";");1===a.length&&a.push("-"+a[0]);return{regexp:d(a,(function(t){return(t="(?:"+Object(_string_js__WEBPACK_IMPORTED_MODULE_0__["escapeRegExpString"])(t,".")+")").replace(i,(function(e){const t={signed:!1,separator:n.strict?s:[s,""],fractional:n.fractional,decimal:l,exponent:!1},r=e.split(".");let o=n.places;1===r.length&&1!==c&&(r[1]="###"),1===r.length||0===o?t.fractional=!1:(void 0===o&&(o=n.pattern?r[1].lastIndexOf("0")+1:1/0),o&&null==n.fractional&&(t.fractional=!0),!n.places&&o<r[1].length&&(o+=","+r[1].length),t.places=o);const i=r[0].split(",");return i.length>1&&(t.groupSize=i.pop().length,i.length>1&&(t.groupSize2=i.pop().length)),"("+u(t)+")"}))}),!0).replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:s,decimal:l,factor:c}}function p(e,n){const t=a(n),r=new RegExp("^"+t.regexp+"$").exec(e);if(!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],t.factor*=-1}return o=o.replace(new RegExp("["+t.group+"\\s\\xa0]","g"),"").replace(t.decimal,"."),Number(o)*t.factor}function u(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!/^0/.test(String(e.places))||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const n=f(e),t=d(e.fractional,(function(n){let t="";return n&&0!==e.places&&(t="\\"+e.decimal,e.places===1/0?t="(?:"+t+"\\d+)?":t+="\\d{"+e.places+"}"),t}),!0);let r=n+t;return t&&(r="(?:(?:"+r+")|(?:"+t+"))"),r+d(e.exponent,(function(n){return n?"([eE]"+f({signed:e.eSigned})+")":""}))}function f(n){"signed"in(n=n||{})||(n.signed=[!0,!1]),"separator"in n?"groupSize"in n||(n.groupSize=3):n.separator="";return d(n.signed,(function(e){return e?"[-+]":""}),!0)+d(n.separator,(function(t){if(!t)return"(?:\\d+)";" "===(t=Object(_string_js__WEBPACK_IMPORTED_MODULE_0__["escapeRegExpString"])(t))?t="\\s":" "===t&&(t="\\s\\xa0");const r=n.groupSize,o=n.groupSize2;if(o){const e="(?:0|[1-9]\\d{0,"+(o-1)+"}(?:["+t+"]\\d{"+o+"})*["+t+"]\\d{"+r+"})";return r-o>0?"(?:"+e+"|(?:0|[1-9]\\d{0,"+(r-1)+"}))":e}return"(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+t+"]\\d{"+r+"})*)"}),!0)}const d=function(e,n,t){if(!(e instanceof Array))return n(e);const r=[];for(let o=0;o<e.length;o++)r.push(n(e[o]));return g(r.join("|"),t)},g=function(e,n){return"("+(n?"?:":"")+e+")"};


/***/ }),

/***/ "cM4j":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/ExportImageParameters.js ***!
  \***************************************************************************/
/*! exports provided: ExportImageParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportImageParameters", function() { return n; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/Accessor.js */ "/CmD");
/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./commonProperties.js */ "IvSi");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/HandleOwner.js */ "kJYu");
/* harmony import */ var _sublayerUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sublayerUtils.js */ "Ilhi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const l={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let n=class extends(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_11__["HandleOwnerMixin"])(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"])){constructor(e){super(e),this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>e.toExportImageJSON()));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&Object(_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_12__["isExportDynamic"])(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(l[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=this.visibleSublayers.filter((e=>null!=e.definitionExpression));return e.length?JSON.stringify(e.reduce(((e,r)=>(e[r.id]=r.definitionExpression,e)),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,s=r=>{const t=this.scale,i=0===t,a=0===r.minScale||t<=r.minScale,o=0===r.maxScale||t>=r.maxScale;r.visible&&(i||a&&o)&&(r.sublayers?r.sublayers.forEach(s):e.unshift(r))};r&&r.forEach(s);const t=this._get("visibleSublayers");return!t||t.length!==e.length||t.some(((r,s)=>e[s]!==r))?e:t}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],n.prototype,"dynamicLayers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],n.prototype,"hasDynamicLayers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],n.prototype,"layer",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],n.prototype,"layers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],n.prototype,"layerDefs",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number})],n.prototype,"scale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(_commonProperties_js__WEBPACK_IMPORTED_MODULE_10__["combinedViewLayerTimeExtentProperty"])],n.prototype,"timeExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],n.prototype,"version",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],n.prototype,"visibleSublayers",null),n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.mixins.ExportImageParameters")],n);


/***/ }),

/***/ "dZC4":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/geometryAdapters/hydrated.js ***!
  \*************************************************************************/
/*! exports provided: hydratedAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydratedAdapter", function() { return r; });
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Point.js */ "SuVq");
/* harmony import */ var _Extent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Extent.js */ "OvF4");
/* harmony import */ var _Multipoint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Multipoint.js */ "V9wi");
/* harmony import */ var _Polygon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Polygon.js */ "Ehki");
/* harmony import */ var _Polyline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Polyline.js */ "UhwK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const r={convertToGEGeometry:s,exportPoint:a,exportPolygon:c,exportPolyline:h,exportMultipoint:m,exportExtent:x};function s(e,n){if(null==n)return null;let t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t}function a(n,t,o){const i=n.hasZ(t),r=n.hasM(t),s=new _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"]({x:n.getPointX(t),y:n.getPointY(t),spatialReference:o});return i&&(s.z=n.getPointZ(t)),r&&(s.m=n.getPointM(t)),s.cache._geVersion=t,s}function c(e,n,t){const i=new _Polygon_js__WEBPACK_IMPORTED_MODULE_3__["default"]({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return i.cache._geVersion=n,i}function h(e,n,t){const o=new _Polyline_js__WEBPACK_IMPORTED_MODULE_4__["default"]({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return o.cache._geVersion=n,o}function m(e,n,o){const i=new _Multipoint_js__WEBPACK_IMPORTED_MODULE_2__["default"]({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:o});return i.cache._geVersion=n,i}function x(e,t,o){const i=e.hasZ(t),r=e.hasM(t),s=new _Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"]({xmin:e.getXMin(t),ymin:e.getYMin(t),xmax:e.getXMax(t),ymax:e.getYMax(t),spatialReference:o});if(i){const n=e.getZExtent(t);s.zmin=n.vmin,s.zmax=n.vmax}if(r){const n=e.getMExtent(t);s.mmin=n.vmin,s.mmax=n.vmax}return s.cache._geVersion=t,s}


/***/ }),

/***/ "e4KH":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/Rasterizer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "NrhG");
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rect.js */ "Du6U");
/* harmony import */ var _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CIMSymbolHelper.js */ "eT81");
/* harmony import */ var _SDFHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SDFHelper.js */ "QFw1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const s=512;class o{dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(e,s,o){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){const[r,a,n]=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__["SymbolHelper"].rasterizeSimpleFill(this._rasterizationCanvas,e.style,s);return{size:[a,n],image:new Uint32Array(r.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===e.type||"esriSLS"===e.type){const[r,a,n]=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__["SymbolHelper"].rasterizeSimpleLine(e.style,e.cap);return{size:[a,n],image:new Uint32Array(r.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let m,l,f;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(m=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__["CIMSymbolHelper"].fromSimpleMarker(e),f=Object(_SDFHelper_js__WEBPACK_IMPORTED_MODULE_3__["getSDFInfo"])(m)):"CIMHatchFill"===e.type?(m=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__["CIMSymbolHelper"].fromCIMHatchFill(e),l=new _Rect_js__WEBPACK_IMPORTED_MODULE_1__["default"](m.frame.xmin,-m.frame.ymax,m.frame.xmax-m.frame.xmin,m.frame.ymax-m.frame.ymin)):e.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.markerPlacement.type?(m=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__["CIMSymbolHelper"].fromCIMInsidePolygon(e),l=new _Rect_js__WEBPACK_IMPORTED_MODULE_1__["default"](m.frame.xmin,-m.frame.ymax,m.frame.xmax-m.frame.xmin,m.frame.ymax-m.frame.ymin)):(m=e,f=Object(_SDFHelper_js__WEBPACK_IMPORTED_MODULE_3__["getSDFInfo"])(m)),f&&!o){const[e,r,t]=Object(_SDFHelper_js__WEBPACK_IMPORTED_MODULE_3__["buildSDF"])(f);return e?{size:[r,t],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}const[c,h,p,y,u]=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__["CIMSymbolHelper"].rasterize(this._rasterizationCanvas,m,l,!o);return c?{size:[h,p],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:y,anchorY:u}:null}rasterizeImageResource(r,t,a,n){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=r,this._rasterizationCanvas.height=t;const i=this._rasterizationCanvas.getContext("2d");a instanceof ImageData?i.putImageData(a,0,0):(a.setAttribute("width",`${r}px`),a.setAttribute("height",`${t}px`),i.drawImage(a,0,0,r,t));const o=i.getImageData(0,0,r,t),m=new Uint8Array(o.data);if(n)for(const e of n)if(e&&e.oldColor&&4===e.oldColor.length&&e.newColor&&4===e.newColor.length){const[r,t,a,n]=e.oldColor,[i,s,o,l]=e.newColor;if(r===i&&t===s&&a===o&&n===l)continue;for(let e=0;e<m.length;e+=4)r===m[e]&&t===m[e+1]&&a===m[e+2]&&n===m[e+3]&&(m[e]=i,m[e+1]=s,m[e+2]=o,m[e+3]=l)}let l;for(let e=0;e<m.length;e+=4)l=m[e+3]/255,m[e]=m[e]*l,m[e+1]=m[e+1]*l,m[e+2]=m[e+2]*l;let f=m,c=r,h=t;const p=s;if(c>=p||h>=p){const a=c/h;a>1?(c=p,h=Math.round(p/a)):(h=p,c=Math.round(p*a)),f=new Uint8Array(4*c*h);const n=new Uint8ClampedArray(f.buffer);Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["resampleHermite"])(m,r,t,n,c,h,!1)}return{size:[r,t],image:new Uint32Array(f.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}/* harmony default export */ __webpack_exports__["default"] = (o);


/***/ }),

/***/ "fqtG":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/capabilities.js ***!
  \******************************************************************/
/*! exports provided: zeroCapabilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroCapabilities", function() { return s; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const s={attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsStatistics:!1,tileMaxRecordCount:0}};


/***/ }),

/***/ "iNG6":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/clientSideDefaults.js ***!
  \*****************************************************************************************/
/*! exports provided: createDefaultAttributesFunction, createDefaultTemplate, createDrawingInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDefaultAttributesFunction", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDefaultTemplate", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDrawingInfo", function() { return i; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/lang.js */ "f/qv");
/* harmony import */ var _symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../symbols/support/defaultsJSON.js */ "gkbi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function i(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_2__["defaultPointSymbolJSON"]:"esriGeometryPolyline"===t?_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_2__["defaultPolylineSymbolJSON"]:_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_2__["defaultPolygonSymbolJSON"]}}}function s(r,e){if(Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("csp-restrictions"))return()=>({[e]:null,...r});try{let t=`this.${e} = null;`;for(const e in r){t+=`this${e.indexOf(".")?`["${e}"]`:`.${e}`} = ${JSON.stringify(r[e])};`}const n=new Function(t);return()=>new n}catch(n){return()=>({[e]:null,...r})}}function u(t={}){return[{name:"New Feature",description:"",prototype:{attributes:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_1__["clone"])(t)}}]}


/***/ }),

/***/ "iUxC":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/ImageryBitmapSource.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class e{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return this.pixelBlock?this.pixelBlock.width:0}get height(){return this.pixelBlock?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(!t)return;const i=this.filter({pixelBlock:t}),l=i.pixelBlock.getAsRGBA(),h=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);h.data.set(l),e.putImageData(h,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}/* harmony default export */ __webpack_exports__["default"] = (e);


/***/ }),

/***/ "l5Tg":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/geometryEngineJSON.js ***!
  \****************************************************************/
/*! exports provided: A, B, C, D, E, F, G, H, I, J, K, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return V; });
/* harmony import */ var _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometryEngineBase.js */ "9gar");
/* harmony import */ var _geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry/geometryAdapters/json.js */ "1kEK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function r(n){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].extendedSpatialReferenceInfo(n)}function t(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].clip(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function i(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].cut(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function s(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].contains(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function u(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].crosses(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function o(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].distance(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}function a(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].equals(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function c(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].intersects(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function f(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].touches(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function l(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].within(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function p(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].disjoint(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function g(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].overlaps(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function d(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].relate(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}function m(r,t){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].isSimple(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t)}function h(r,t){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].simplify(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t)}function y(r,t,i=!1){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].convexHull(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function x(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].difference(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function w(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].symmetricDifference(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function A(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].intersect(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function E(r,t,i=null){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].union(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function j(r,t,i,s,u,o,a){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].offset(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u,o,a)}function v(r,t,i,s,u=!1){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].buffer(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u)}function z(r,t,i,s,u,o,a){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].geodesicBuffer(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u,o,a)}function I(r,t,i,s=!0){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].nearestCoordinate(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}function V(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].nearestVertex(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function D(r,t,i,s,u){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].nearestVertices(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u)}function H(n,r,t,i){if(null==r||null==i)throw new Error("Illegal Argument Exception");const s=_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].rotate(r,t,i);return s.spatialReference=n,s}function R(n,r,t){if(null==r||null==t)throw new Error("Illegal Argument Exception");const i=_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].flipHorizontal(r,t);return i.spatialReference=n,i}function b(n,r,t){if(null==r||null==t)throw new Error("Illegal Argument Exception");const i=_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].flipVertical(r,t);return i.spatialReference=n,i}function B(r,t,i,s,u){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].generalize(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u)}function L(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].densify(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}function S(r,t,i,s,u=0){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].geodesicDensify(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u)}function _(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].planarArea(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function q(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].planarLength(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function C(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].geodesicArea(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}function k(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].geodesicLength(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}var F=Object.freeze({__proto__:null,extendedSpatialReferenceInfo:r,clip:t,cut:i,contains:s,crosses:u,distance:o,equals:a,intersects:c,touches:f,within:l,disjoint:p,overlaps:g,relate:d,isSimple:m,simplify:h,convexHull:y,difference:x,symmetricDifference:w,intersect:A,union:E,offset:j,buffer:v,geodesicBuffer:z,nearestCoordinate:I,nearestVertex:V,nearestVertices:D,rotate:H,flipHorizontal:R,flipVertical:b,generalize:B,densify:L,geodesicDensify:S,planarArea:_,planarLength:q,geodesicArea:C,geodesicLength:k});


/***/ }),

/***/ "lP2y":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/BitmapTile.js ***!
  \*****************************************************************/
/*! exports provided: BitmapTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitmapTile", function() { return s; });
/* harmony import */ var _webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl/TiledDisplayObject.js */ "5LEI");
/* harmony import */ var _Bitmap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bitmap.js */ "xzrc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class s extends _webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_0__["TiledDisplayObject"]{constructor(t,s,r,i=null){super(t,s,r,r),this.bitmap=new _Bitmap_js__WEBPACK_IMPORTED_MODULE_1__["Bitmap"](i,"standard",!1),this.bitmap.coordScale=r,this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(t){super.beforeRender(t),this.bitmap.beforeRender(t)}afterRender(t){super.afterRender(t),this.bitmap.afterRender(t)}set stencilRef(t){this.bitmap.stencilRef=t}get stencilRef(){return this.bitmap.stencilRef}setTransform(t,e){super.setTransform(t,e),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}


/***/ }),

/***/ "mYC1":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/FetchAssociatedFeatureLayer.js ***!
  \*********************************************************************************/
/*! exports provided: FetchAssociatedFeatureLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchAssociatedFeatureLayer", function() { return l; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../kernel.js */ "975N");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../portal/Portal.js */ "AiS/");
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../portal/PortalItem.js */ "p+Gi");
/* harmony import */ var _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FeatureLayer.js */ "W9Wu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class l{constructor(t,r,e){this.parsedUrl=t,this.portalItem=r,this.signal=e,this.rootDocument=null;const a=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);a&&(this.urlParts={root:a[1],layerId:parseInt(a[2],10)})}async fetch(){var r;if(!this.urlParts)return null;const e=null!=(r=this.portalItem)?r:await this.portalItemFromServiceItemId();if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e))return this.loadFromUrl();const a=await this.findAndLoadRelatedPortalItem(e);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a)?null:this.loadFeatureLayerFromPortalItem(a)}async fetchPortalItem(){var r;if(!this.urlParts)return null;const e=null!=(r=this.portalItem)?r:await this.portalItemFromServiceItemId();return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e)?null:this.findAndLoadRelatedPortalItem(e)}async fetchRootDocument(){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.rootDocument))return this.rootDocument;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.urlParts))return this.rootDocument={},{};const e={query:{f:"json"},responseType:"json",signal:this.signal},a=`${this.urlParts.root}/SceneServer`;try{const t=await Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(a,e);this.rootDocument=t.data}catch{this.rootDocument={}}return this.rootDocument}async fetchServiceOwningPortalUrl(){var t;const r=null==(t=_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"])?void 0:t.findServerInfo(this.parsedUrl.path);if(null!=r&&r.owningSystemUrl)return r.owningSystemUrl;const n=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const t=(await Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(n,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(t)return t}catch(o){Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfAbortError"])(o)}return null}async findAndLoadRelatedPortalItem(t){try{return(await t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((t=>"Feature Service"===t.type))||null}catch(r){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfAbortError"])(r),null}}async loadFeatureLayerFromPortalItem(t){await t.load({signal:this.signal});const r=await this.findMatchingAssociatedSublayerUrl(t.url);return new _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_6__["default"]({url:r,portalItem:t}).load({signal:this.signal})}async loadFromUrl(){const t=await this.findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_6__["default"]({url:t}).load({signal:this.signal})}async findMatchingAssociatedSublayerUrl(t){const r=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),e={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},a=this.urlParts.layerId,n=this.fetchRootDocument(),o=Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(r,e),[i,l]=await Promise.all([o,n]),c=l&&l.layers,u=i.data&&i.data.layers;if(!Array.isArray(u))throw new Error("expected layers array");if(Array.isArray(c))for(let s=0;s<Math.min(c.length,u.length);s++){if(c[s].id===a)return`${r}/${u[s].id}`}else if(a<u.length)return`${r}/${u[a].id}`;throw new Error("could not find matching associated sublayer")}async portalItemFromServiceItemId(){const t=(await this.fetchRootDocument()).serviceItemId;if(!t)return null;const a=new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_5__["default"]({id:t}),s=await this.fetchServiceOwningPortalUrl();Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s)&&(a.portal=new _portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__["default"]({url:s}));try{return a.load({signal:this.signal})}catch(i){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfAbortError"])(i),null}}}


/***/ }),

/***/ "ncPp":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/WebTileLayer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/string.js */ "s7YA");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../geometry/Point.js */ "SuVq");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../geometry.js */ "4GrV");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "uRH/");
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ "mXvl");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ "jhcG");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "WmKv");
/* harmony import */ var _support_LOD_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./support/LOD.js */ "UOZ4");
/* harmony import */ var _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./support/TileInfo.js */ "3/ME");
/* harmony import */ var _support_WMTSLayerInfo_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./support/WMTSLayerInfo.js */ "OYGz");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let R=class extends(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_21__["BlendLayer"])(Object(_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_23__["RefreshableLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_24__["ScaleRangeLayer"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_20__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_22__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_19__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_18__["default"]))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__["default"](-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__["default"].WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__["default"].WebMercator,this.subDomains=null,this.tileInfo=new _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_26__["default"]({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__["default"]({x:-20037508.342787,y:20037508.342787,spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__["default"].WebMercator}),spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__["default"].WebMercator,lods:[new _support_LOD_js__WEBPACK_IMPORTED_MODULE_25__["default"]({level:0,scale:591657527.591555,resolution:156543.033928}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_25__["default"]({level:1,scale:295828763.795777,resolution:78271.5169639999}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_25__["default"]({level:2,scale:147914381.897889,resolution:39135.7584820001}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_25__["default"]({level:3,scale:73957190.948944,resolution:19567.8792409999}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_25__["default"]({level:4,scale:36978595.474472,resolution:9783.93962049996}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_25__["default"]({level:5,scale:18489297.737236,resolution:4891.96981024998}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_25__["default"]({level:6,scale:9244648.868618,resolution:2445.98490512499}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_25__["default"]({level:7,scale:4622324.434309,resolution:1222.99245256249}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_25__["default"]({level:8,scale:2311162.217155,resolution:611.49622628138}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_25__["default"]({level:9,scale:1155581.108577,resolution:305.748113140558}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_25__["default"]({level:10,scale:577790.554289,resolution:152.874056570411}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_25__["default"]({level:11,scale:288895.277144,resolution:76.4370282850732}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_25__["default"]({level:12,scale:144447.638572,resolution:38.2185141425366}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_25__["default"]({level:13,scale:72223.819286,resolution:19.1092570712683}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_25__["default"]({level:14,scale:36111.909643,resolution:9.55462853563415}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_25__["default"]({level:15,scale:18055.954822,resolution:4.77731426794937}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_25__["default"]({level:16,scale:9027.977411,resolution:2.38865713397468}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_25__["default"]({level:17,scale:4513.988705,resolution:1.19432856685505}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_25__["default"]({level:18,scale:2256.994353,resolution:.597164283559817}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_25__["default"]({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["Url"](this.urlTemplate);!!this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,l=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["Url"](t),o=l.scheme?l.scheme+"://":"//",s=o+l.authority+"/";if(-1===l.authority.indexOf("{subDomain}"))e.push(s);else if(r&&r.length>0&&l.authority.split(".").length>1)for(const i of r)e.push(o+l.authority.replace(/\{subDomain\}/gi,i)+"/");return e.map((e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e)))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["Url"](e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["isProtocolRelative"])(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["normalize"])(e)),t.templateUrl=e}fetchTile(e,t,r,l={}){const{signal:o,timestamp:s}=l,i=this.getTileUrl(e,t,r),n={responseType:"image",signal:o};return null!=s&&(n.query={_ts:l.timestamp}),Object(_request_js__WEBPACK_IMPORTED_MODULE_17__["default"])(i,n).then((e=>e.data))}getTileUrl(e,r,l){const o=this.levelValues[e];return this.tileServers[r%this.tileServers.length]+Object(_core_string_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this.urlPath,{level:o,z:o,col:l,x:l,row:r,y:r})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,value:"",json:{write:!0}})],R.prototype,"copyright",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__["default"],json:{write:!0}})],R.prototype,"fullExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"legendEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:["show","hide"]})],R.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],R.prototype,"levelValues",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],R.prototype,"isReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:["WebTiledLayer"],value:"WebTiledLayer"})],R.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"popupEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__["default"]})],R.prototype,"spatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("spatialReference",["spatialReference","fullExtent.spatialReference"])],R.prototype,"readSpatialReference",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[String],json:{write:!0}})],R.prototype,"subDomains",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_26__["default"],json:{write:!0}})],R.prototype,"tileInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0})],R.prototype,"tileServers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{read:!1}})],R.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],R.prototype,"urlPath",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],R.prototype,"urlTemplate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("urlTemplate",["urlTemplate","templateUrl"])],R.prototype,"readUrlTemplate",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("urlTemplate",{templateUrl:{type:String}})],R.prototype,"writeUrlTemplate",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_support_WMTSLayerInfo_js__WEBPACK_IMPORTED_MODULE_27__["default"],json:{write:!0}})],R.prototype,"wmtsInfo",void 0),R=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.WebTileLayer")],R);var x=R;/* harmony default export */ __webpack_exports__["default"] = (x);


/***/ }),

/***/ "oLSx":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js ***!
  \*********************************************************************/
/*! exports provided: layerLookupMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layerLookupMap", function() { return a; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const a={BingMapsLayer:async()=>(await __webpack_require__.e(/*! import() | BingMapsLayer-js */ "BingMapsLayer-js").then(__webpack_require__.bind(null, /*! ../BingMapsLayer.js */ "CR/Q"))).default,BuildingSceneLayer:async()=>(await Promise.all(/*! import() | BuildingSceneLayer-js */[__webpack_require__.e("default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js"), __webpack_require__.e("common"), __webpack_require__.e("BuildingSceneLayer-js")]).then(__webpack_require__.bind(null, /*! ../BuildingSceneLayer.js */ "TWTt"))).default,CSVLayer:async()=>(await __webpack_require__.e(/*! import() | CSVLayer-js */ "CSVLayer-js").then(__webpack_require__.bind(null, /*! ../CSVLayer.js */ "Kn0e"))).default,ElevationLayer:async()=>(await Promise.all(/*! import() | ElevationLayer-js */[__webpack_require__.e("default~ElevationLayer-js~TileLayer-js~VectorTileLayer-js"), __webpack_require__.e("ElevationLayer-js")]).then(__webpack_require__.bind(null, /*! ../ElevationLayer.js */ "8g7C"))).default,FeatureLayer:async()=>(await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../FeatureLayer.js */ "W9Wu"))).default,GroupLayer:async()=>(await __webpack_require__.e(/*! import() | GroupLayer-js */ "GroupLayer-js").then(__webpack_require__.bind(null, /*! ../GroupLayer.js */ "VPx4"))).default,GeoRSSLayer:async()=>(await __webpack_require__.e(/*! import() | GeoRSSLayer-js */ "GeoRSSLayer-js").then(__webpack_require__.bind(null, /*! ../GeoRSSLayer.js */ "AP+b"))).default,ImageryLayer:async()=>(await Promise.all(/*! import() | ImageryLayer-js */[__webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js~layers-ImageryLayerView2D-js~layers-ImageryTileLayerView~fc91ae2a"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js~layers-support-RasterWorker-js"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js"), __webpack_require__.e("ImageryLayer-js")]).then(__webpack_require__.bind(null, /*! ../ImageryLayer.js */ "/GVf"))).default,ImageryTileLayer:async()=>(await Promise.all(/*! import() | ImageryTileLayer-js */[__webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js~layers-ImageryLayerView2D-js~layers-ImageryTileLayerView~fc91ae2a"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js~layers-support-RasterWorker-js"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js"), __webpack_require__.e("default~ImageryTileLayer-js~layers-ImageryTileLayerView2D-js"), __webpack_require__.e("ImageryTileLayer-js")]).then(__webpack_require__.bind(null, /*! ../ImageryTileLayer.js */ "mRf7"))).default,IntegratedMeshLayer:async()=>(await Promise.all(/*! import() | IntegratedMeshLayer-js */[__webpack_require__.e("default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js"), __webpack_require__.e("common"), __webpack_require__.e("IntegratedMeshLayer-js")]).then(__webpack_require__.bind(null, /*! ../IntegratedMeshLayer.js */ "yvy3"))).default,KMLLayer:async()=>(await Promise.all(/*! import() | KMLLayer-js */[__webpack_require__.e("common"), __webpack_require__.e("KMLLayer-js")]).then(__webpack_require__.bind(null, /*! ../KMLLayer.js */ "9fxc"))).default,MapImageLayer:async()=>(await Promise.all(/*! import() | MapImageLayer-js */[__webpack_require__.e("default~MapImageLayer-js~TileLayer-js"), __webpack_require__.e("common"), __webpack_require__.e("MapImageLayer-js")]).then(__webpack_require__.bind(null, /*! ../MapImageLayer.js */ "U/i9"))).default,MapNotesLayer:async()=>(await Promise.all(/*! import() | MapNotesLayer-js */[__webpack_require__.e("common"), __webpack_require__.e("MapNotesLayer-js")]).then(__webpack_require__.bind(null, /*! ../MapNotesLayer.js */ "Wvof"))).default,OpenStreetMapLayer:async()=>(await Promise.all(/*! import() | OpenStreetMapLayer-js */[__webpack_require__.e("common"), __webpack_require__.e("OpenStreetMapLayer-js")]).then(__webpack_require__.bind(null, /*! ../OpenStreetMapLayer.js */ "jFi3"))).default,PointCloudLayer:async()=>(await Promise.all(/*! import() | PointCloudLayer-js */[__webpack_require__.e("default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js"), __webpack_require__.e("default~PointCloudLayer-js~views-3d-layers-PointCloudWorker-js"), __webpack_require__.e("PointCloudLayer-js")]).then(__webpack_require__.bind(null, /*! ../PointCloudLayer.js */ "RLtZ"))).default,RouteLayer:async()=>(await __webpack_require__.e(/*! import() | RouteLayer-js */ "RouteLayer-js").then(__webpack_require__.bind(null, /*! ../RouteLayer.js */ "soW6"))).default,SceneLayer:async()=>(await Promise.all(/*! import() | SceneLayer-js */[__webpack_require__.e("default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js"), __webpack_require__.e("common"), __webpack_require__.e("SceneLayer-js")]).then(__webpack_require__.bind(null, /*! ../SceneLayer.js */ "0yFX"))).default,StreamLayer:async()=>(await __webpack_require__.e(/*! import() | StreamLayer-js */ "StreamLayer-js").then(__webpack_require__.bind(null, /*! ../StreamLayer.js */ "u6iX"))).default,TileLayer:async()=>(await Promise.all(/*! import() | TileLayer-js */[__webpack_require__.e("default~ElevationLayer-js~TileLayer-js~VectorTileLayer-js"), __webpack_require__.e("default~MapImageLayer-js~TileLayer-js"), __webpack_require__.e("TileLayer-js")]).then(__webpack_require__.bind(null, /*! ../TileLayer.js */ "JlDE"))).default,UnknownLayer:async()=>(await __webpack_require__.e(/*! import() | UnknownLayer-js */ "UnknownLayer-js").then(__webpack_require__.bind(null, /*! ../UnknownLayer.js */ "qcqe"))).default,UnsupportedLayer:async()=>(await __webpack_require__.e(/*! import() | UnsupportedLayer-js */ "UnsupportedLayer-js").then(__webpack_require__.bind(null, /*! ../UnsupportedLayer.js */ "GN2T"))).default,VectorTileLayer:async()=>(await Promise.all(/*! import() | VectorTileLayer-js */[__webpack_require__.e("default~VectorTileLayer-js~layers-VectorTileLayerView2D-js~views-2d-engine-vectorTiles-WorkerTileHandler-js"), __webpack_require__.e("default~ElevationLayer-js~TileLayer-js~VectorTileLayer-js"), __webpack_require__.e("common"), __webpack_require__.e("VectorTileLayer-js")]).then(__webpack_require__.bind(null, /*! ../VectorTileLayer.js */ "FzwJ"))).default,WebTileLayer:async()=>(await __webpack_require__.e(/*! import() | WebTileLayer-js */ "common").then(__webpack_require__.bind(null, /*! ../WebTileLayer.js */ "ncPp"))).default,WMSLayer:async()=>(await Promise.all(/*! import() | WMSLayer-js */[__webpack_require__.e("common"), __webpack_require__.e("WMSLayer-js")]).then(__webpack_require__.bind(null, /*! ../WMSLayer.js */ "h2Da"))).default,WMTSLayer:async()=>(await Promise.all(/*! import() | WMTSLayer-js */[__webpack_require__.e("common"), __webpack_require__.e("WMTSLayer-js")]).then(__webpack_require__.bind(null, /*! ../WMTSLayer.js */ "sDlQ"))).default};


/***/ }),

/***/ "p0UO":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/objectIdUtils.js ***!
  \********************************************************************/
/*! exports provided: findLastObjectIdFromFeatures, initialObjectId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLastObjectIdFromFeatures", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialObjectId", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t=1;function n(t,n){let o=0;for(const r of n){var e;const n=null==(e=r.attributes)?void 0:e[t];"number"==typeof n&&isFinite(n)&&(o=Math.max(o,n))}return o}


/***/ }),

/***/ "q03O":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicContainer.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/webgl/enums.js */ "yE7X");
/* harmony import */ var _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseGraphicContainer.js */ "kvL/");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class i extends _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__["default"]{renderChildren(r){this.attributeView.bindTextures(r.context),this.children.some((e=>e.hasData))&&(super.renderChildren(r),r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].MAP&&this._renderChildren(r),r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].HIGHLIGHT&&this._renderHighlight(r))}_renderHighlight(e){const{painter:r}=e,i=r.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}/* harmony default export */ __webpack_exports__["default"] = (i);


/***/ }),

/***/ "sTkM":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/quatf64.js ***!
  \*****************************************************/
/*! exports provided: I, a, b, c, f, q */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function e(){return[0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3]]}function n(e,r,n,t){return[e,r,n,t]}function t(e,r){return new Float64Array(e,r,4)}const a=e();var o=Object.freeze({__proto__:null,create:e,clone:r,fromValues:n,createView:t,IDENTITY:a});


/***/ }),

/***/ "uAeW":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/ExportWMSImageParameters.js ***!
  \******************************************************************************/
/*! exports provided: ExportWMSImageParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportWMSImageParameters", function() { return l; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/HandleOwner.js */ "kJYu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const a={visible:"visibleSublayers"};let l=class extends(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_10__["HandleOwnerMixin"])(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"])){constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(a[e.propertyName])))],"layer"))}get layers(){const{visibleSublayers:e}=this;return e.filter((e=>e.name)).map((e=>e.name)).join(",")}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:r}=this,s=null==e?void 0:e.sublayers,t=[],o=e=>{const{minScale:s,maxScale:a,sublayers:l,visible:i}=e;i&&(0===r||(0===s||r<=s)&&(0===a||r>=a))&&(l?l.forEach(o):t.unshift(e))};return null==s||s.forEach(o),t}toJSON(){const{layer:e,layers:r}=this,{imageFormat:s,imageTransparency:t,version:o}=e;return{format:s,request:"GetMap",service:"WMS",styles:"",transparent:t,version:o,layers:r}}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"layer",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],l.prototype,"layers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number})],l.prototype,"scale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],l.prototype,"version",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],l.prototype,"visibleSublayers",null),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.ExportWMSImageParameters")],l);


/***/ }),

/***/ "ukaK":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/processors/BaseProcessor.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/HandleOwner.js */ "kJYu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let s=class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_9__["HandleOwner"]{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],s.prototype,"supportsTileUpdates",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({constructOnly:!0})],s.prototype,"remoteClient",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({constructOnly:!0})],s.prototype,"service",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],s.prototype,"spatialReference",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({constructOnly:!0})],s.prototype,"tileInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({constructOnly:!0})],s.prototype,"tileStore",void 0),s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.features.processors.BaseProcessor")],s);var p=s;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "vbiG":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/ExportStrategy.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils.js */ "f4Nx");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../layers/support/TileInfo.js */ "3/ME");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../tiling/TileKey.js */ "rlSK");
/* harmony import */ var _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../tiling/TileInfoView.js */ "AY31");
/* harmony import */ var _viewStateUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../viewStateUtils.js */ "A8Zi");
/* harmony import */ var _engine_Bitmap_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../engine/Bitmap.js */ "xzrc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const u=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_13__["create"])(),g=[0,0],f=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_15__["default"](0,0,0,0),x={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let y=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_10__["default"]{constructor(t){super(t),this._imagePromise=null,this.hidpi=x.hidpi,this.imageMaxWidth=x.imageMaxWidth,this.imageMaxHeight=x.imageMaxHeight,this.imageRotationSupported=x.imageRotationSupported,this.imageNormalizationSupported=x.imageNormalizationSupported,this.update=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["debounce"])((async(t,e)=>{const i=t.state,o=Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_11__["getInfo"])(i.spatialReference),r=this.hidpi?t.pixelRatio:1;if(!t.stationary||this.destroyed)return null;this.imageRotationSupported?(g[0]=i.size[0],g[1]=i.size[1]):Object(_viewStateUtils_js__WEBPACK_IMPORTED_MODULE_17__["getOuterSize"])(g,i);const a=Math.floor(g[0]*r)>this.imageMaxWidth||Math.floor(g[1]*r)>this.imageMaxHeight,p=o&&(i.extent.xmin<o.valid[0]||i.extent.xmax>o.valid[1]),n=!this.imageNormalizationSupported&&p,m=!a&&!n,l=this.imageRotationSupported?i.rotation:0;if(m)this._imagePromise=this._singleExport(i,g,l,r,e);else{let t=Math.min(this.imageMaxWidth,this.imageMaxHeight);n&&(t=Math.min(i.worldScreenWidth,t)),this._imagePromise=this._tiledExport(i,t,l,r,e)}return this._imagePromise.then((async t=>{if(this._imagePromise=null,!this.destroyed){for(const e of this.container.children)t.includes(e)||e.fadeOut().then((()=>{e.remove()}));for(const e of t)this.container.addChild(e),e.fadeIn()}})).catch((t=>{throw this._imagePromise=null,t}))}),5e3)}destroy(){}get updating(){return null!==this._imagePromise}updateExports(t){for(const e of this.container.children){if(!e.visible||!e.stage)return;t(e)?console.error("ExportStrategy.updateExports doesn't support promise yet"):(e.invalidateTexture(),e.requestRender())}}_export(t,e,i,o,r,s){return Promise.resolve().then((()=>this.fetchSource(t,Math.floor(e*r),Math.floor(i*r),{rotation:o,pixelRatio:r,signal:s}))).then((i=>{const s=new _engine_Bitmap_js__WEBPACK_IMPORTED_MODULE_18__["Bitmap"](i,"additive");return s.x=t.xmin,s.y=t.ymax,s.resolution=t.width/e,s.rotation=o,s.pixelRatio=r,s}))}_singleExport(t,e,i,o,r){Object(_viewStateUtils_js__WEBPACK_IMPORTED_MODULE_17__["getBBox"])(u,t.center,t.resolution,e);const s=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__["default"](u[0],u[1],u[2],u[3],t.spatialReference);return this._export(s,e[0],e[1],i,o,r).then((t=>[t]))}_tiledExport(t,e,i,o,r){const s=_layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_14__["default"].create({size:e,spatialReference:t.spatialReference,scales:[t.scale]}),p=new _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_16__["default"](s),m=p.getTileCoverage(t);if(!m)return null;const h=[];return m.forEach(((s,n,m,l)=>{f.set(s,n,m,l),p.getTileBounds(u,f);const d=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__["default"](u[0],u[1],u[2],u[3],t.spatialReference);h.push(this._export(d,e,e,i,o,r))})),Promise.all(h)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],y.prototype,"_imagePromise",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],y.prototype,"container",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],y.prototype,"fetchSource",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],y.prototype,"hidpi",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],y.prototype,"imageMaxWidth",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],y.prototype,"imageMaxHeight",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],y.prototype,"imageRotationSupported",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],y.prototype,"imageNormalizationSupported",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],y.prototype,"requestUpdate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],y.prototype,"updating",null),y=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.support.ExportStrategy")],y);var S=y;/* harmony default export */ __webpack_exports__["default"] = (S);


/***/ }),

/***/ "xzrc":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/Bitmap.js ***!
  \*************************************************************/
/*! exports provided: Bitmap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bitmap", function() { return _; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/mat3f32.js */ "jHF5");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DisplayObject.js */ "fEsP");
/* harmony import */ var _ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ImageryBitmapSource.js */ "iUxC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function d(t){return t&&"render"in t}function c(t){return t&&!("render"in t)}function l(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}function x(t,e,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return e&&i&&(s.width=e,s.height=i),new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__["default"](t,s)}class _ extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_8__["DisplayObject"]{constructor(t=null,e,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.transforms={dvs:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__["c"])()},this.blendFunction=e,this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){this._source=t,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}setTransform(h){const o=Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this.transforms.dvs),[u,a]=h.toScreenNoRotation([0,0],this.x,this.y),d=this.resolution/this.pixelRatio/h.resolution,c=d*this.width,l=d*this.height,x=Math.PI*this.rotation/180;Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(o,o,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["f"])(u,a)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(o,o,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["f"])(c/2,l/2)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(o,o,-x),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(o,o,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["f"])(-c/2,-l/2)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["j"])(o,o,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["f"])(c,l)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["m"])(this.transforms.dvs,h.displayViewMat3,o)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind({context:t},e){this._texture&&t.bindTexture(this._texture,e)}updateTexture({context:t}){var e;if(!this.stage)return null==(e=this._texture)||e.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=x(t,this.sourceWidth,this.sourceHeight):this._texture=x(t));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),d(i))if(i instanceof _ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_9__["default"]){const t=i.getRenderedRasterPixels();this._texture.setData(t.renderedRasterPixels)}else this._texture.setData(l(i));else c(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}


/***/ })

}]);
//# sourceMappingURL=common.js.map