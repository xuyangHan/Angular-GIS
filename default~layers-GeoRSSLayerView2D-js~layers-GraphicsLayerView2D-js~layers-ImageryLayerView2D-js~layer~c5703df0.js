(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~c5703df0"],{

/***/ "/Hru":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/VertexVector.js ***!
  \******************************************************************************/
/*! exports provided: default, VertexVectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexVectors", function() { return o; });
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils.js */ "yN2G");
/* harmony import */ var _VertexBuffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VertexBuffer.js */ "2vGY");
/* harmony import */ var _util_Writer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Writer.js */ "PeSW");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class s{constructor(t,e){this.data=t,this.stride=e}get vertexCount(){const t=this.stride/4,e=this.data.length/t;return e!==(0|e)&&console.debug("Corrupted stride"),e}transfer(t,e){const r=this.data.buffer();t.vertexCount=this.vertexCount,t.data=r,t.stride=this.stride,e.push(r)}}class o{constructor(e,o,n=!1){this.geometryType=e,this.indexVector=new _util_Writer_js__WEBPACK_IMPORTED_MODULE_2__["default"](Uint32Array,6*o),this.namedVectors={};const i=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["getStrides"])(e,n);for(const t in i){const e=i[t];let n;switch(e%4){case 0:case 2:n=new _util_Writer_js__WEBPACK_IMPORTED_MODULE_2__["default"](Uint32Array,e*o);break;case 1:case 3:n=new _util_Writer_js__WEBPACK_IMPORTED_MODULE_2__["default"](Uint8Array,e*o)}this.namedVectors[t]=new s(n,e)}}get(t){return this.namedVectors[t].data}getVector(t){return this.namedVectors[t]}transfer(t,e){const r=this.indexVector.buffer(),s={};e.push(r);for(const o in this.namedVectors){const t=this.namedVectors[o];s[o]={},t.transfer(s[o],e)}t.geometryType=this.geometryType,t.indexBuffer=r,t.namedBuffers=s,this.destroy()}intoBuffers(){const t=_VertexBuffer_js__WEBPACK_IMPORTED_MODULE_1__["VertexBuffers"].fromVertexVectors(this);return this.destroy(),t}destroy(){this.indexVector=null,this.namedVectors=null}}/* harmony default export */ __webpack_exports__["default"] = (s);


/***/ }),

/***/ "0u2h":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/GraphicsReader.js ***!
  \**************************************************************************************/
/*! exports provided: GraphicsReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicsReader", function() { return o; });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../layers/graphics/featureConversionUtils.js */ "ZlUD");
/* harmony import */ var _FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeatureSetReader.js */ "8NDJ");
/* harmony import */ var _FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeatureSetReaderJSON.js */ "Q0oN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class o extends _FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_3__["FeatureSetReaderJSON"]{constructor(r,t){super(r,t,null)}static from(s){const n=_FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_2__["FeatureSetReader"].createInstance(),i=[],c=s.filter((r=>!!r.geometry));for(const e of c){const s=Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["getJsonType"])(e.geometry);Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertFromGraphics"])(i,[e],s,!1,!1,"uid")}return new o(n,i)}get geometryType(){const r=this._current;return r?r.geometryType:null}get insertAfter(){return this._current.insertAfter}readGraphic(){return this._current}getCursor(){return this.copy()}copy(){const r=new o(this.instance,this._features);return this.copyInto(r),r}}


/***/ }),

/***/ "2vGY":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/VertexBuffer.js ***!
  \******************************************************************************/
/*! exports provided: default, VertexBuffers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexBuffers", function() { return r; });
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils.js */ "yN2G");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class t{constructor(e,t){this.data=e,this.stride=t}static decode(r){const s=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["allocateTypedArrayBufferwithData"])(r.data,r.stride),o=r.stride;return new t(s,o)}static fromVertexVector(r){const s=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["allocateTypedArrayBufferwithData"])(r.data.buffer(),r.stride),o=r.stride;return new t(s,o)}}class r{constructor(e,t,r){this.geometryType=e,this.indexBuffer=new Uint32Array(t),this.namedBuffers=r}static decode(e){const s=e.geometryType,o=e.indexBuffer,n={};for(const r in e.namedBuffers)n[r]=t.decode(e.namedBuffers[r]);return new r(s,o,n)}static fromVertexData(s,o){const n=s.indices,c=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["allocateTypedArrayBufferwithData"])(s.vertices,s.stride),i=s.stride,d={geometry:new t(c,i)};return new r(o,n,d)}static fromVertexVectors(e){const s=e.geometryType,o=e.indexVector.buffer(),n={};for(const r in e.namedVectors)n[r]=t.fromVertexVector(e.namedVectors[r]);return new r(s,o,n)}}/* harmony default export */ __webpack_exports__["default"] = (t);


/***/ }),

/***/ "7+sN":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicStore.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils.js */ "f4Nx");
/* harmony import */ var _geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../geometry/support/contains.js */ "IXLn");
/* harmony import */ var _geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../geometry/support/extentUtils.js */ "+NQI");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/unitUtils.js */ "gEht");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _geometry_support_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../geometry/support/normalizeUtilsCommon.js */ "9w8m");
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../geometry/support/normalizeUtils.js */ "qNUd");
/* harmony import */ var _graphicsUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./graphicsUtils.js */ "M08Z");
/* harmony import */ var _chunks_rbush_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../chunks/rbush.js */ "kB+0");
/* harmony import */ var _GraphicStoreItem_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./GraphicStoreItem.js */ "t0Xj");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const G={minX:0,minY:0,maxX:0,maxY:0},z=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["create"])(),I=[],B=1e-5;function v(e,t,i,r,s){return G.minX=t,G.minY=i,G.maxX=r,G.maxY=s,e.search(G)}class w{constructor(i,r,s,o,a,h){this._graphics=o,this._onAdd=a,this._onRemove=h,this._index=Object(_chunks_rbush_js__WEBPACK_IMPORTED_MODULE_11__["r"])(9,Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("csp-restrictions")?e=>({minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]}):[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]),this._itemByGraphic=new Map,this._currentLevel=-1/0,this._tileInfoView=i,this._uidFieldName=s;const u=i.getClosestInfoForScale(r);u&&(this._currentLevel=u.level,this._resolution=this._tileInfoView.getTileResolution(u.level));const c=i.spatialReference;this._metersPerUnit=Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__["isValid"])(c)?Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_6__["getMetersPerUnit"])(i.spatialReference):1}hitTest(e,t,n,u,c){e=Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_9__["normalizeMapX"])(e,this._tileInfoView.spatialReference);const l=.5*u*n;z[0]=e-l,z[1]=t-l,z[2]=e+l,z[3]=t+l;const b=.5*u*(n+_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_10__["PIXEL_BUFFER"]),x=v(this._index,e-b,t-b,e+b,t+b);if(!x||0===x.length)return[];const G={x:e,y:t},I=[];let B;for(const m of x)if(m.graphic.visible)switch(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__["getJsonType"])(m.geometry)){case"esriGeometryPoint":{const e=m.symbol;if(!e)continue;const t=m.geometry,{x:r,y:s}=t,o=u*this._metersPerUnit;let n;switch(e.type){case"esriTS":n=Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_10__["getTextSymbolBounds"])(r,s,e,m.size,u,c);break;case"expanded-cim":n=Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_10__["getCIMMarkerBounds"])(r,s,e,u,o,c);break;case"esriSMS":case"esriPMS":n=Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_10__["getMarkerSymbolBounds"])(r,s,e,u,o,c)}Object(_geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_2__["polygonContainsPoint"])(n,G)&&I.push(m)}break;case"esriGeometryPolyline":{const i=m.symbol;if(!i||!i.layers.length)continue;const r=i.layers[0];B=1.5*u*window.devicePixelRatio*Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__["pt2px"])(r.width),Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_10__["isPointOnPolyline"])(m.geometry,e,t,B)&&I.push(m)}break;case"esriGeometryEnvelope":{const e=m.geometry,t=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["fromValues"])(e.xmin,e.ymin,e.xmax,e.ymax);Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["intersects"])(t,z)&&I.push(m);break}case"esriGeometryPolygon":{if(Object(_geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_2__["polygonContainsPoint"])(m.geometry,G)){I.push(m);break}const e=Object(_geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_3__["getPolygonExtent"])(m.geometry);if(Math.abs(e.ymax-e.ymin)<5*u||Math.abs(e.xmax-e.xmin)<5*u){const t=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["fromValues"])(e.xmin,e.ymin,e.xmax,e.ymax);Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["intersects"])(t,z)&&I.push(m)}break}case"esriGeometryMultipoint":{const e=m.symbol;if(!e)continue;const t=m.geometry.points;let r;for(let s=0;s<t.length;s++)if(r="esriTS"===e.type?Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_10__["getTextSymbolBounds"])(t[s][0],t[s][1],e,m.size,u,c):Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_10__["getMarkerSymbolBounds"])(t[s][0],t[s][1],e,u,u*this._metersPerUnit,c),Object(_geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_2__["polygonContainsPoint"])(r,G)){I.push(m);break}break}}return I.sort(((e,t)=>{const i=Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_10__["graphicGeometryToNumber"])(e.graphic),r=Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_10__["graphicGeometryToNumber"])(t.graphic);return i===r?t.zorder-e.zorder:i-r})),I.map((e=>e.graphic))}getGraphicsData(e,t,i){const r=this._searchForItems(t);if(0===r.length||0===i.length)return[];r.sort(((e,t)=>e.zorder-t.zorder)),r[0].insertAfter=-1;for(let u=1;u<r.length;u++)r[u].insertAfter=r[u-1].graphic.uid;r.sort(((e,t)=>e.graphic.uid-t.graphic.uid)),i.sort(((e,t)=>e.uid-t.uid));let s,o=0,n=0;const a=[],h={originPosition:"upperLeft",scale:[t.resolution,t.resolution],translate:[t.bounds[0],t.bounds[3]]};for(const u of i){for(n=-2;o<r.length;)if(s=r[o],o++,u.uid===s.graphic.uid){n=s.insertAfter;break}if(!s.geometry||-2===n)continue;const t=s.getGeometryQuantized(h),i={...s.graphic.attributes};i[this._uidFieldName]=u.uid,null==s.groupId&&(s.groupId=e.createTemplateGroup(s.symbol,null)),a.push({centroid:_GraphicStoreItem_js__WEBPACK_IMPORTED_MODULE_12__["default"].getCentroidQuantized(s,h),geometry:t,attributes:i,symbol:s.symbol,groupId:s.groupId,insertAfter:n,zorder:s.zorder})}return a.sort(((e,t)=>e.zorder-t.zorder)),a}queryTileData(e,t){const{bounds:i,resolution:r}=t,s=this._searchForItems(t),o=[];return this._createTileGraphics(o,e,s,{originPosition:"upperLeft",scale:[r,r],translate:[i[0],i[3]]}),o}has(e){return this._itemByGraphic.has(e)}getBounds(e){return this._itemByGraphic.has(e)?this._itemByGraphic.get(e).bounds:null}addOrModify(e,t,i){if(!e)return;this.has(e)&&this.remove(e),this._onAdd(e);const r=_GraphicStoreItem_js__WEBPACK_IMPORTED_MODULE_12__["default"].acquire(e,t,i,this._resolution,this._resolution*this._metersPerUnit,this._tileInfoView.spatialReference);return this._itemByGraphic.set(e,r),i&&this._index.insert(r),r.bounds}remove(e){if(!this._itemByGraphic.has(e))return;this._onRemove(e);const t=this._itemByGraphic.get(e);this._index.remove(t),this._itemByGraphic.delete(e)}updateZ(){const e=this._graphics.items;let t,i;for(let r=0;r<e.length;r++)i=e[r],t=this._itemByGraphic.get(i),t&&(t.zorder=r)}update(e,t,i){const r=this._itemByGraphic.get(e);r.groupId=null;const s=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["clone"])(r.bounds);return r.size[0]=r.size[1]=0,this._index.remove(r),r.set(e,t,i,this._resolution,this._resolution*this._metersPerUnit,this._tileInfoView.spatialReference),i&&this._index.insert(r),{oldBounds:s,newBounds:r.bounds}}updateLevel(e){if(this._currentLevel===e)return;this._currentLevel=e;const t=this._tileInfoView.getTileResolution(e);this._resolution=t,this._index.clear(),I.length=0,this._itemByGraphic.forEach((e=>{e.updateBounds(this._resolution,this._resolution*this._metersPerUnit,this._tileInfoView.spatialReference),e.geometry&&I.push(e)})),this._index.load(I)}clear(){this._itemByGraphic.clear(),this._index.clear()}_createTileGraphics(e,t,i,r){const s=this._uidFieldName;let o,n,a,h;i.sort(((e,t)=>e.zorder-t.zorder));for(let u=0;u<i.length;u++){a=i[u],o=a.graphic,n=a.getGeometryQuantized(r),h=0===u?-1:i[u-1].graphic.uid;const c={...a.graphic.attributes};c[s]=o.uid,null==a.groupId&&(a.groupId=t.createTemplateGroup(a.symbol,null)),e.push({centroid:_GraphicStoreItem_js__WEBPACK_IMPORTED_MODULE_12__["default"].getCentroidQuantized(a,r),geometry:n,attributes:c,symbol:a.symbol,groupId:a.groupId,insertAfter:h,zorder:a.zorder})}}_searchForItems(e){const t=this._tileInfoView.spatialReference,i=e.bounds;if(t.isWrappable){const[r,s]=Object(_geometry_support_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_8__["getSpatialReferenceMinMaxX"])(t),o=Math.abs(i[2]-s)<B,n=Math.abs(i[0]-r)<B;if((!o||!n)&&(o||n)){const t=e.resolution;let n;n=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["create"])(o?[r,i[1],r+t*_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_10__["PIXEL_BUFFER"],i[3]]:[s-t*_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_10__["PIXEL_BUFFER"],i[1],s,i[3]]);const a=v(this._index,i[0],i[1],i[2],i[3]),h=v(this._index,n[0],n[1],n[2],n[3]);return[...new Set([...a,...h])]}}return v(this._index,i[0],i[1],i[2],i[3])}}/* harmony default export */ __webpack_exports__["default"] = (w);


/***/ }),

/***/ "BA+2":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/GraphicsView.js ***!
  \****************************************************************/
/*! exports provided: GraphicsView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicsView", function() { return t; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_Identifiable_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/Identifiable.js */ "pdg3");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t=t=>{let p=class extends(Object(_core_Identifiable_js__WEBPACK_IMPORTED_MODULE_9__["IdentifiableMixin"])(t)){constructor(){super(...arguments),this.graphics=null,this.renderer=null,this.view=null}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],p.prototype,"graphics",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],p.prototype,"renderer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],p.prototype,"updating",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],p.prototype,"view",void 0),p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.layers.GraphicsView")],p),p};


/***/ }),

/***/ "F8bX":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLBuffers.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "D6bk");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Utils.js */ "yN2G");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class a{constructor(t){this.geometryMap=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_6__["createGeometryData"])((()=>({indexBuffer:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"].createIndex(t,35044),vao:null})),((r,a)=>({vertexBuffer:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"].createVertex(t,_Utils_js__WEBPACK_IMPORTED_MODULE_6__["C_VBO_INFO"][a])})))}dispose(){for(let e=0;e<5;e++){const t=this.geometryMap[e];if(t){t.data.vao&&t.data.vao.dispose(!1),t.data.indexBuffer&&t.data.indexBuffer.dispose();for(const e in t.buffers)t.buffers[e]&&t.buffers[e].data.vertexBuffer.dispose()}}}get(e){const r=this.geometryMap[e];return{draw(e,s,a,f,i){if(!r.data.vao){const f={};for(const e in r.buffers)f[e]=r.buffers[e].data.vertexBuffer;r.data.vao=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__["default"](e,a,s,f,r.data.indexBuffer)}const o=r.data.vao;e.bindVAO(o),e.drawElements(4,i,5125,Uint32Array.BYTES_PER_ELEMENT*f),e.bindVAO(null)}}}has(e){return null!=this.geometryMap[e]}upload(e,t){t.forEach(((t,r)=>{this._upload(t,r,e)}))}_upload(e,t,r){if(e.indices&&(e.indices.allDirty?this._uploadIndices(r,t):null!=e.indices.from&&null!=e.indices.count&&this._uploadIndices(r,t,e.indices.from,e.indices.count)),e.vertices){const s=e.vertices;for(const e in s){const a=s[e];a.allDirty?this._uploadVertices(r,t,e):null!=a.from&&null!=a.count&&this._uploadVertices(r,t,e,a.from,a.count)}}}_uploadVertices(e,t,r,s,a){const f=this.geometryMap[t];if(!f)return;const i=e.geometries[t].vertexBuffer[r];if(!i)return;const o=i.stride,n=i.data.buffer;f.buffers[r]&&n.byteLength>0&&(null!=s&&null!=a?f.buffers[r].data.vertexBuffer.setSubData(n,s*o,s*o,(s+a)*o):f.buffers[r].data.vertexBuffer.setData(n))}_uploadIndices(e,t,r,s){const a=this.geometryMap[t];if(!a)return;const f=4,i=e.geometries[t].indexBuffer.buffer;a.data.indexBuffer&&i.byteLength>0&&(null!=r&&null!=s?a.data.indexBuffer.setSubData(i,r*f,r*f,(r+s)*f):a.data.indexBuffer.setData(i))}}/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ }),

/***/ "FA+c":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/MemoryRequirements.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class e{constructor(){this._byGeometryType=null}get satisfied(){return!this._byGeometryType}reset(){this._byGeometryType=null}verticesFor(e){return this._byGeometryType?this._byGeometryType[e].vertices:0}indicesFor(e){return this._byGeometryType?this._byGeometryType[e].indices:0}needMore(e,t,i){if(!t&&!i)return;this._byGeometryType||(this._byGeometryType=[{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0}]);const r=this._byGeometryType[e];r.vertices+=t,r.indices+=i}}/* harmony default export */ __webpack_exports__["default"] = (e);


/***/ }),

/***/ "MQs+":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/DisplayRecordStore.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils.js */ "yN2G");
/* harmony import */ var _FreeList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FreeList.js */ "S4Ec");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const s=["FILL","LINE","MARKER","TEXT","LABEL"];function o(e){const t=e.getStrides(),r={};for(let i=0;i<t.length;i++)r[s[i]]=t[i];return r}const n=.5;class d{constructor(t,r,s,o){this._strides=t,this._displayList=r,this._freeListsAndStorage={},this._dirtyMap=null,this._dirtyMap=s;for(const n in t){this._freeListsAndStorage[n]={vtxFreeList:o?new _FreeList_js__WEBPACK_IMPORTED_MODULE_2__["FreeList"](o):null,idxFreeList:o?new _FreeList_js__WEBPACK_IMPORTED_MODULE_2__["FreeList"](o):null,vertexBuffers:{},indexBuffer:o?new Uint32Array(o):null};for(const r in t[n])this._freeListsAndStorage[n].vertexBuffers[r]={data:o?Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["allocateTypedArrayBuffer"])(o,t[n][r]):null,stride:t[n][r]}}}static fromTileData(e,r){const n=o(e),a=[0,0,0,0,0],x=[0,0,0,0,0],u=e.tileDisplayData.displayObjects;for(const t of u)for(const e of t.displayRecords)a[e.geometryType]=Math.max(a[e.geometryType],e.vertexFrom+e.vertexCount),x[e.geometryType]=Math.max(x[e.geometryType],e.indexFrom+e.indexCount);const f=new d(n,e.tileDisplayData.displayList,r,null);for(let o=0;o<e.tileBufferData.geometries.length;++o){const r=a[o],n=x[o],d=e.tileBufferData.geometries[o],u=s[o],l=f._storageFor(u),c=e.tileBufferData.geometries[o].indexBuffer;let m;l.indexBuffer=c,l.idxFreeList=new _FreeList_js__WEBPACK_IMPORTED_MODULE_2__["FreeList"](c.length),l.idxFreeList.allocate(n);for(const i in d.vertexBuffer){const r=e.tileBufferData.geometries[o].vertexBuffer[i];l.vertexBuffers[i].data=r.data,l.vertexBuffers[i].stride=r.stride;const s=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["strideToPackingFactor"])(r.stride),n=r.data.length*s/r.stride;m||(m=n)}l.vtxFreeList=new _FreeList_js__WEBPACK_IMPORTED_MODULE_2__["FreeList"](m),l.vtxFreeList.allocate(r)}return f}delete(e){const t=s[e.geometryType];this._freeVertices(t,e.vertexFrom,e.vertexCount),this._freeIndices(t,e.indexFrom,e.indexCount),this._displayList.removeFromList(e),e.vertexFrom=void 0,e.indexFrom=void 0}setMeshData(e,t,i,o,n){const d=s[e.geometryType];let a,x;e.meshData=null,void 0===e.vertexFrom?(x=t.vertexCount,a=this._allocateVertices(d,x)):t.vertexCount>e.vertexCount?(this._freeVertices(d,e.vertexFrom,e.vertexCount),x=t.vertexCount,a=this._allocateVertices(d,x)):t.vertexCount===e.vertexCount?(a=e.vertexFrom,x=e.vertexCount):(this._freeVertices(d,e.vertexFrom+t.vertexCount,e.vertexCount-t.vertexCount),a=e.vertexFrom,x=t.vertexCount);let u,f,l,c=!0;if(void 0===e.indexFrom?(u=n,l=t.indexCount,f=this._allocateIndices(d,l)):t.indexCount>e.indexCount?(u=this._displayList.removeFromList(e),this._freeIndices(d,e.indexFrom,e.indexCount),l=t.indexCount,f=this._allocateIndices(d,l)):t.indexCount===e.indexCount?(c=!1,f=e.indexFrom,l=e.indexCount):(u=this._displayList.removeFromList(e),this._freeIndices(d,e.indexFrom+t.indexCount,e.indexCount-t.indexCount),f=e.indexFrom,l=t.indexCount),-1!==a&&-1!==f){const s=this._storageFor(d);if(Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["copyMeshData"])(a,f,s.vertexBuffers,s.indexBuffer,t,i,o),e.vertexFrom=a,e.indexFrom=f,e.vertexCount=t.vertexCount,e.indexCount=t.indexCount,this._dirtyMap){this._dirtyMap.markDirtyIndices(e.geometryType,e.indexFrom,e.indexCount);for(const t in i)this._dirtyMap.markDirtyVertices(e.geometryType,t,e.vertexFrom,e.vertexCount)}return c&&this._displayList.addToList(e,u),!0}return-1!==a&&this._freeVertices(d,a,x),-1!==f&&this._freeIndices(d,f,l),e.setMeshDataFromBuffers(t,i,o),e.vertexFrom=void 0,e.vertexCount=0,e.indexFrom=void 0,e.indexCount=0,!1}tryAddMeshData(e,t){const i=t.vertexBuffer,o=t.indexBuffer,n=s[e.geometryType],d=this._allocateVertices(n,e.vertexCount);if(-1===d)return this._freeVertices(n,d,e.vertexCount),!1;const a=this._allocateIndices(n,e.indexCount);if(-1===a)return this._freeVertices(n,d,e.vertexCount),this._freeIndices(n,a,e.indexCount),!1;const x=this._storageFor(n);if(Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["copyMeshData"])(d,a,x.vertexBuffers,x.indexBuffer,e,i,o),e.vertexFrom=d,e.indexFrom=a,this._dirtyMap){this._dirtyMap.markDirtyIndices(e.geometryType,e.indexFrom,e.indexCount);for(const t in i)this._dirtyMap.markDirtyVertices(e.geometryType,t,d,e.vertexCount)}return this._displayList.addToList(e),!0}_allocateVertices(e,t){const r=this._storageFor(e),i=r.vtxFreeList.allocate(t);if(-1===i)return-1;return r.vtxFreeList.fragmentation>n?-1:i}_freeVertices(e,t,r){this._storageFor(e).vtxFreeList.free(t,r)}_freeIndices(e,t,r){this._storageFor(e).idxFreeList.free(t,r)}_allocateIndices(e,t){const r=this._storageFor(e),i=r.idxFreeList.allocate(t);if(-1===i)return-1;return r.idxFreeList.fragmentation>n?-1:i}_storageFor(e){return this._freeListsAndStorage[e]}_stridesFor(e,t){return this._strides[e][t]}}/* harmony default export */ __webpack_exports__["default"] = (d);


/***/ }),

/***/ "NY75":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GraphicTile.js ***!
  \************************************************************************/
/*! exports provided: GraphicTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicTile", function() { return a; });
/* harmony import */ var _DirtyMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DirtyMap.js */ "T6vb");
/* harmony import */ var _DisplayRecordStore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayRecordStore.js */ "MQs+");
/* harmony import */ var _WGLBuffers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WGLBuffers.js */ "F8bX");
/* harmony import */ var _WGLTile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WGLTile.js */ "KFVX");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class a extends _WGLTile_js__WEBPACK_IMPORTED_MODULE_3__["WGLTile"]{constructor(){super(...arguments),this._data=null,this._displayList=null,this._lastCommitTime=0,this._hasData=!1,this._invalidated=!1,this._wglBuffers=null,this._dirtyMap=new _DirtyMap_js__WEBPACK_IMPORTED_MODULE_0__["default"]}destroy(){super.destroy(),this.clear()}get hasData(){return!!this._hasData}get displayObjects(){var t;return null!=(t=this._displayObjects)?t:[]}getGeometry(t){return this._wglBuffers&&this._wglBuffers.has(t)?this._wglBuffers.get(t):null}getDisplayList(){return this._displayList}patch(e){if(!0===e.clear)return this.clear(),void(this._hasData=!1);const i=e.addOrUpdate,a=e.remove;!this._data&&i&&i.tileDisplayData.displayObjects.length?(i.tileDisplayData.computeDisplayList(),this._dirtyMap=new _DirtyMap_js__WEBPACK_IMPORTED_MODULE_0__["default"],this._dispRecStore=_DisplayRecordStore_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromTileData(i,this._dirtyMap),this._data=i,this._dirtyMap.markAllDirty(),this._hasData=!0,e.end&&this.ready()):this._data&&(i&&i.tileDisplayData.displayObjects.length||a.length)?this._doPatchData(e):e.end&&this.ready(),e.end&&!this._data&&this.clear(),this.requestRender(),this.emit("change")}commit(t){t.time&&t.time===this._lastCommitTime||(this._lastCommitTime=t.time,this.visible&&this._data&&(this._wglBuffers||(this._wglBuffers=new _WGLBuffers_js__WEBPACK_IMPORTED_MODULE_2__["default"](t.context)),(this._dirtyMap.hasDirty()||this._invalidated)&&(this._invalidated=!1,this._wglBuffers.upload(this._data.tileBufferData,this._dirtyMap),this._displayList=this._data.tileDisplayData.displayList.clone(),this._displayObjects=this._data.tileDisplayData.displayObjects.slice(),this._dirtyMap.markAllClean())))}clear(){this._data=null,this._displayList=null,this._dispRecStore=null,this._wglBuffers&&(this._wglBuffers.dispose(),this._wglBuffers=null)}_doPatchData(t){this._invalidated=!0,this._patchData(t)||(this._dirtyMap.markAllDirty(),this._data.reshuffle(),this._dispRecStore=_DisplayRecordStore_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromTileData(this._data,this._dirtyMap)),this.requestRender()}_patchData(t){let s=!0;const e=t.addOrUpdate&&t.addOrUpdate.tileDisplayData&&t.addOrUpdate.tileDisplayData.displayObjects||[],i=(t.remove||[]).slice();for(const a of e)null!=a.insertAfter&&i.push(a.id);for(const a of i){const t=this._data.tileDisplayData.displayObjectRegistry.get(a);if(t){this._data.tileDisplayData.displayList.removeFromList(t.displayRecords);for(const e of t.displayRecords)this._dispRecStore.delete(e);this._data.tileDisplayData.displayObjectRegistry.delete(a);const s=this._data.tileDisplayData.displayObjects.indexOf(t);this._data.tileDisplayData.displayObjects.splice(s,1)}}for(const a of e){let e,i=this._data.tileDisplayData.displayObjectRegistry.get(a.id);if(i){const t=i.displayRecords;i.set(a),i.displayRecords=t;const s=i.displayRecords.length;for(let e=0;e<s;++e){const t=i.displayRecords[e],s=a.displayRecords[e];(e>=a.displayRecords.length||t.geometryType!==s.geometryType||t.symbolLevel!==s.symbolLevel||t.zOrder!==s.zOrder||t.materialKey!==s.materialKey)&&(this._dispRecStore.delete(i.displayRecords[e]),e<a.displayRecords.length&&(i.displayRecords[e]=void 0))}i.displayRecords.length=a.displayRecords.length}else{let t;i=a.copy(),i.displayRecords=[],this._data.tileDisplayData.displayObjectRegistry.set(a.id,i);const s=this._data.tileDisplayData.displayObjects;if(null!=i.insertAfter)if(e={},i.insertAfter>=0){const e=this._data.tileDisplayData.displayObjectRegistry.get(i.insertAfter);e?(t=s.indexOf(e)+1,t<s.length?s.splice(t,0,i):(s.push(i),t=s.length)):(s.push(i),t=s.length)}else s.unshift(i),t=0;else s.push(i),t=s.length;if(e){const i=a.displayRecords.length>0?1:0;let l=0;for(let a=t-1;a>=0&&l<i;--a)for(let t=s[a].displayRecords.length-1;t>=0&&l<i;--t){const i=s[a].displayRecords[t],d=this._data.tileDisplayData.displayList.getDPInfoType();e[d]||(e[d]=i,++l)}}}const l=a.displayRecords.length;for(let d=0;d<l;++d){const l=a.displayRecords[d];let r=i.displayRecords[d];r?(r.meshData=l.meshData,r.materialKey=l.materialKey):(r=l.copy(),r.vertexFrom=void 0,r.indexFrom=void 0,i.displayRecords[d]=r);const p=l.geometryType,h=this._data.tileDisplayData.displayList.getDPInfoType(),o=t.addOrUpdate.tileBufferData.geometries[p],y=o.vertexBuffer,c=o.indexBuffer;let n;e&&(n=e[h]?this._data.tileDisplayData.displayList.splitAfter(e[h]):-1),s=this._dispRecStore.setMeshData(r,l,y,c,n)&&s,e&&null!=r.indexFrom&&null!=r.indexFrom&&(e[h]=r)}}return s}}


/***/ }),

/***/ "RXWn":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/normalizeUtilsSync.js ***!
  \**************************************************************************/
/*! exports provided: normalizeCentralMeridianSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeCentralMeridianSync", function() { return l; });
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spatialReferenceUtils.js */ "f4Nx");
/* harmony import */ var _intersects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intersects.js */ "PNY3");
/* harmony import */ var _boundsUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boundsUtils.js */ "KLE9");
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jsonUtils.js */ "qatw");
/* harmony import */ var _aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aaBoundingRect.js */ "kYAx");
/* harmony import */ var _normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./normalizeUtilsCommon.js */ "9w8m");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function l(r){if(!r)return null;if("mesh"===r.type)return r.toJSON();let f=null;const l=r.spatialReference,h=Object(_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__["getInfo"])(l);if(!h)return r.toJSON();const d=l.isWebMercator?102100:4326,I=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__["cutParams"][d].maxX,g=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__["cutParams"][d].minX,b=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__["cutParams"][d].plus180Line,v=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__["cutParams"][d].minus180Line;let J;const N=r.toJSON();if(Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["isPoint"])(N))J=y(N,I,g);else if(Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["isMultipoint"])(N))N.points=N.points.map((n=>y(n,I,g))),J=N;else if(Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["isExtent"])(N))J=p(N,h);else if(Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["isPolygon"])(N)||Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__["isPolyline"])(N)){const n=M;Object(_boundsUtils_js__WEBPACK_IMPORTED_MODULE_2__["getBoundsXY"])(n,N);const m={xmin:n[0],ymin:n[1],xmax:n[2],ymax:n[3]},s=Object(_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__["offsetMagnitude"])(m.xmin,g)*(2*I),e=0===s?N:u(N,s);m.xmin+=s,m.xmax+=s,Object(_intersects_js__WEBPACK_IMPORTED_MODULE_1__["extentIntersectsPolyline"])(m,b)&&m.xmax!==I||Object(_intersects_js__WEBPACK_IMPORTED_MODULE_1__["extentIntersectsPolyline"])(m,v)&&m.xmin!==g?f=e:J=e}else J=r.toJSON();if(null!==f){return(new j).cut(f,I)}return J}function u(n,t){const i=Object(_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__["getGeometryParts"])(n);for(const m of i)for(const n of m)n[0]+=t;return n}function p(n,t){if(!t)return n;const i=h(n,t).map((n=>n.extent));return i.length<2?i[0]||n:i.length>2?(n.xmin=t.valid[0],n.xmax=t.valid[1],n):{rings:i.map((n=>[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]))}}function y(n,t,i){if(Array.isArray(n)){const m=n[0];if(m>t){const i=Object(_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__["offsetMagnitude"])(m,t);n[0]=m+i*(-2*t)}else if(m<i){const t=Object(_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__["offsetMagnitude"])(m,i);n[0]=m+t*(-2*i)}}else{const m=n.x;if(m>t){const i=Object(_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__["offsetMagnitude"])(m,t);n.x+=i*(-2*t)}else if(m<i){const t=Object(_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__["offsetMagnitude"])(m,i);n.x+=t*(-2*i)}}return n}function h(n,t){const i=[],{ymin:m,ymax:s}=n,e=n.xmax-n.xmin,x=n.xmin,o=n.xmax;let r;const[a,f]=t.valid;r=d(n.xmin,t);const c=r.x,l=r.frameId;r=d(n.xmax,t);const u=r.x,p=r.frameId,y=c===u&&e>0;if(e>2*f){const n={xmin:x<o?c:u,ymin:m,xmax:f,ymax:s},t={xmin:a,ymin:m,xmax:x<o?u:c,ymax:s},e={xmin:0,ymin:m,xmax:f,ymax:s},r={xmin:a,ymin:m,xmax:0,ymax:s},y=[],h=[];I(n,e)&&y.push(l),I(n,r)&&h.push(l),I(t,e)&&y.push(p),I(t,r)&&h.push(p);for(let i=l+1;i<p;i++)y.push(i),h.push(i);i.push({extent:n,frameIds:[l]},{extent:t,frameIds:[p]},{extent:e,frameIds:y},{extent:r,frameIds:h})}else c>u||y?i.push({extent:{xmin:c,ymin:m,xmax:f,ymax:s},frameIds:[l]},{extent:{xmin:a,ymin:m,xmax:u,ymax:s},frameIds:[p]}):i.push({extent:{xmin:c,ymin:m,xmax:u,ymax:s},frameIds:[l]});return i}function d(n,t){const[i,m]=t.valid,s=2*m;let e,x=0;return n>m?(e=Math.ceil(Math.abs(n-m)/s),n-=e*s,x=e):n<i&&(e=Math.ceil(Math.abs(n-i)/s),n+=e*s,x=-e),{x:n,frameId:x}}function I(n,t){const{xmin:i,ymin:m,xmax:s,ymax:e}=t;return g(n,i,m)&&g(n,i,e)&&g(n,s,e)&&g(n,s,m)}function g(n,t,i){return t>=n.xmin&&t<=n.xmax&&i>=n.ymin&&i<=n.ymax}class j{cut(n,t){let i;if(n.rings)this.closed=!0,i=n.rings,this.minPts=4;else{if(!n.paths)return null;this.closed=!1,i=n.paths,this.minPts=2}const m=i.length,s=-2*t;for(let e=0;e<m;e++){const n=i[e];if(n&&n.length>=this.minPts){const t=[];for(const i of n)t.push([i[0]+s,i[1]]);i.push(t)}}return this.closed?n.rings=i:n.paths=i,n}}const M=Object(_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__["create"])();


/***/ }),

/***/ "S4Ec":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/FreeList.js ***!
  \*********************************************************************/
/*! exports provided: FreeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeList", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class e{constructor(e){this._largestRange=null,this._parent=e,this._updateLargestRange()}get largestRange(){return this._largestRange}rangeCreated(e){(!this._largestRange||e.count>this._largestRange.count)&&(this._largestRange=e)}rangeResized(e,t){e===this._largestRange?e.count<t&&this._updateLargestRange():(!this._largestRange||e.count>this._largestRange.count)&&(this._largestRange=e)}findBestRange(e){let t=this._parent._freeHead,n=null;for(;null!==t;)t.count>=e&&(!n||t.count-e<n.count-e)&&(n=t),t=t.next;return n}findAdjacentRanges(e,t){let n=!0,r=!1,s=null,o=this._parent._freeHead;for(;n&&!r;){const a=null!==s?s.from+s.count:0,l=null!==o?o.from:this._parent._size;e>=a&&e+t<=l?(n=!1,r=!0):null!==o?(s=o,o=o.next):n=!1}return[s,o]}_updateLargestRange(){let e=null,t=this._parent._freeHead;for(;null!==t;)(!e||t.count>e.count)&&(e=t),t=t.next;this._largestRange=e}}class t{constructor(t,n){this._allocated=0,this._size=t,this._freeHead=t>0?{from:0,count:t,prev:null,next:null}:null,this._bookKeeper=n||new e(this),this._freeHead&&this._bookKeeper.rangeCreated(this._freeHead)}allocate(e){const n=this._bookKeeper.findBestRange(e);if(null===n)return-1;const r=n.from,s=n.count;if(n.from+=e,n.count-=e,this._bookKeeper.rangeResized(n,r,s),this._allocated+=e,0===n.count){const e=null!==n.prev?this._freeHead:n.next;t._removeRange(n),this._freeHead=e}return r}free(e,n){const[r,s]=this._bookKeeper.findAdjacentRanges(e,n),o={from:e,count:n,prev:r,next:s};if(null!==r&&(r.next=o),null!==s&&(s.prev=o),this._bookKeeper.rangeCreated(o),this._allocated-=n,null!==s&&o.from+o.count===s.from){const e=o.from,n=o.count;t._fuse(o,s),t._removeRange(s),this._bookKeeper.rangeResized(o,e,n),this._bookKeeper.rangeResized(s,void 0,0)}if(null!==r&&r.from+r.count===o.from){const e=r.from,n=r.count;t._fuse(r,o),t._removeRange(o),this._bookKeeper.rangeResized(r,e,n),this._bookKeeper.rangeResized(o,void 0,0)}this._freeHead=null!==o.prev?this._freeHead:o}get fragmentation(){const e=this._size-this._allocated;if(0===e)return 0;return 1-this._bookKeeper.largestRange.count/e}static _removeRange(e){null!==e.prev?null!==e.next?(e.prev.next=e.next,e.next.prev=e.prev):e.prev.next=null:null!==e.next&&(e.next.prev=null)}static _fuse(e,t){e.count+=t.count,e.next=t.next,t.from+=t.count,t.count=0,null!==t.next&&(t.next.prev=e)}}


/***/ }),

/***/ "T6vb":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/DirtyMap.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils.js */ "yN2G");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function i(t,i,r){if(!t.allDirty)if(null!=t.from&&null!=t.count){const s=Math.min(t.from,i),l=Math.max(t.from+t.count,i+r)-s;t.from=s,t.count=l}else t.from=i,t.count=r}class r{constructor(){this._dirties=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["createGeometryData"])((()=>({indices:{from:null,count:null,allDirty:!1}})),(()=>({vertices:{from:null,count:null,allDirty:!1}})))}hasDirty(){for(const t of this._dirties)if(null!==t.data.indices.count||t.data.indices.allDirty)return!0;return!1}markAllClean(){for(const t of this._dirties){t.data.indices.from=null,t.data.indices.count=null,t.data.indices.allDirty=!1;for(const i in t.buffers)t.buffers[i].data.vertices.from=null,t.buffers[i].data.vertices.count=null,t.buffers[i].data.vertices.allDirty=!1}}markAllDirty(){for(const t of this._dirties){t.data.indices.allDirty=!0;for(const i in t.buffers)t.buffers[i].data.vertices.allDirty=!0}}forEach(t){for(let i=0;i<this._dirties.length;++i){const r=this._dirties[i],s={};for(const t in r.buffers){const i=r.buffers[t].data.vertices;(i.allDirty||null!=i.from&&null!=i.count&&i.count>0)&&(s[t]=i)}const l=r.data.indices;let n;n=l.allDirty||null!=l.from&&null!=l.count&&l.count>0?{indices:l,vertices:s}:{indices:null,vertices:s},(n.indices||Object.keys(n).length>0)&&t(n,i)}}markDirtyIndices(t,r,s){i(this._dirties[t].data.indices,r,s)}markDirtyVertices(t,r,s,l){i(this._dirties[t].buffers[r].data.vertices,s,l)}}/* harmony default export */ __webpack_exports__["default"] = (r);


/***/ }),

/***/ "VPKi":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/MeshData.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class t{constructor(){this.vertexData=new Map,this.vertexCount=0,this.indexData=[]}clear(){this.vertexData.clear(),this.vertexCount=0,this.indexData=[]}update(t,e,a){for(const s in t)this.vertexData.set(s,t[s]);for(const s in this.vertexData)null===t[s]&&this.vertexData.delete(s);this.vertexCount=e,this.indexData=a}}/* harmony default export */ __webpack_exports__["default"] = (t);


/***/ }),

/***/ "Vh9r":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicsView2D.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils.js */ "f4Nx");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../geometry/support/coordsUtils.js */ "Mu3I");
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../geometry/Polygon.js */ "Ehki");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../symbols/support/defaults.js */ "psH3");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../core/HandleOwner.js */ "kJYu");
/* harmony import */ var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../engine/webgl/definitions.js */ "jIHu");
/* harmony import */ var _webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../webgl/capabilities.js */ "sq/B");
/* harmony import */ var _geometry_support_normalizeUtilsSync_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../geometry/support/normalizeUtilsSync.js */ "RXWn");
/* harmony import */ var _engine_webgl_util_BidiText_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../engine/webgl/util/BidiText.js */ "t7mB");
/* harmony import */ var _symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../symbols/cim/cimSymbolUtils.js */ "ZxoT");
/* harmony import */ var _layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../layers/graphics/data/projectionSupport.js */ "HsO1");
/* harmony import */ var _engine_webgl_GraphicTile_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../engine/webgl/GraphicTile.js */ "NY75");
/* harmony import */ var _engine_webgl_TileData_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../engine/webgl/TileData.js */ "fZs+");
/* harmony import */ var _features_support_AttributeStore_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../features/support/AttributeStore.js */ "2AbE");
/* harmony import */ var _engine_webgl_mesh_MeshData_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../engine/webgl/mesh/MeshData.js */ "acOm");
/* harmony import */ var _graphicsUtils_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./graphicsUtils.js */ "M08Z");
/* harmony import */ var _features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../features/schemaUtils.js */ "owVx");
/* harmony import */ var _engine_webgl_mesh_factories_matcherUtils_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../engine/webgl/mesh/factories/matcherUtils.js */ "Bcjy");
/* harmony import */ var _engine_webgl_mesh_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../engine/webgl/mesh/templates/WGLTemplateStore.js */ "Dw8i");
/* harmony import */ var _engine_webgl_mesh_factories_WGLMeshFactory_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../engine/webgl/mesh/factories/WGLMeshFactory.js */ "J3nV");
/* harmony import */ var _features_support_ComputedAttributeStorage_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../features/support/ComputedAttributeStorage.js */ "Swtj");
/* harmony import */ var _features_support_GraphicsReader_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../features/support/GraphicsReader.js */ "0u2h");
/* harmony import */ var _features_support_TileStore_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../features/support/TileStore.js */ "w5u1");
/* harmony import */ var _GraphicStore_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./GraphicStore.js */ "7+sN");
/* harmony import */ var _layers_GraphicsView_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../layers/GraphicsView.js */ "BA+2");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function $(t,e,i){if(i.has(t))return i.get(t);const s={tile:e,addedOrModified:[],removed:[]};return i.set(t,s),s}let tt=class extends(Object(_layers_GraphicsView_js__WEBPACK_IMPORTED_MODULE_40__["GraphicsView"])(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_20__["HandleOwnerMixin"])(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_11__["default"]))){constructor(t){super(t),this._storage=new _features_support_ComputedAttributeStorage_js__WEBPACK_IMPORTED_MODULE_36__["ComputedAttributeStorage"],this._displayIds=new Map,this._tiles=new Map,this._graphicStoreUpdate=!1,this._graphicsSet=new Set,this._matcher=Promise.resolve(null),this._tileUpdateSet=new Set,this._tilesToUpdate=new Map,this._graphicIdToAbortController=new Map,this._attached=!1,this._highlightIds=new Map,this._updatingGraphicsTimer=null,this._hashToExpandedSymbol=new Map,this._hashTpExpandedSymbolPromise=new Map,this._processing=!1,this._needsProcessing=!1,this._pendingUpdate={added:new Set,updated:new Set,removed:new Set},this.lastUpdateId=-1,this.updateRequested=!1,this.graphicUpdateHandler=this.graphicUpdateHandler.bind(this)}_createMatcher(t,e){if(t){const i=Object(_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_32__["createMatcherSchema"])({indexCount:0,fields:{}},"feature",t);this._matcher=Object(_engine_webgl_mesh_factories_matcherUtils_js__WEBPACK_IMPORTED_MODULE_33__["createMatcher"])(i,e,null)}}_createDisplayId(t){return this._displayIds.has(t)||this._displayIds.set(t,this._storage.createDisplayId()),this._displayIds.get(t)}initialize(){this._tileStore=new _features_support_TileStore_js__WEBPACK_IMPORTED_MODULE_38__["default"](this.view.featuresTilingScheme),this._attributeStore=new _features_support_AttributeStore_js__WEBPACK_IMPORTED_MODULE_29__["default"]({type:"local",initialize:t=>Promise.resolve(this.container.attributeView.initialize(t)),update:t=>this.container.attributeView.requestUpdate(t),render:()=>this.container.requestRender()},Object(_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_22__["default"])());const t=t=>{this._createDisplayId(t.uid),this._setFilterState(t.uid,t.visible)},e=t=>{const e=this._displayIds.get(t.uid);this._displayIds.delete(t.uid),this._storage.releaseDisplayId(e)};this._graphicStore=new _GraphicStore_js__WEBPACK_IMPORTED_MODULE_39__["default"](this.view.featuresTilingScheme,this.view.state.scale,this.uid,this.graphics,t,e);const i=new _engine_webgl_mesh_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_34__["WGLTemplateStore"](this.container.getMaterialItems.bind(this.container),!0);this._createMatcher(this.renderer,i),this._meshFactory=new _engine_webgl_mesh_factories_WGLMeshFactory_js__WEBPACK_IMPORTED_MODULE_35__["WGLMeshFactory"](null,this.uid,i),this._templateStore=i,this.watch("renderer",(t=>{this._createMatcher(t,i);for(const e of this.graphics)this._pendingUpdate.updated.add(e);this.requestUpdate()})),this._tileStore.on("update",this._onTileUpdate.bind(this)),this.container.on("attach",(()=>{this.graphics.items.length>0&&this._graphicsChangeHandler({target:this.graphics,added:this.graphics.items,removed:[],moved:[]}),this.handles.add(this.graphics.on("change",(t=>this._graphicsChangeHandler(t))),"graphics"),this._attached=!0,this.notifyChange("updating")}))}destroy(){this._updatingGraphicsTimer&&(clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=null,this.notifyChange("updating")),this.container.destroy(),this._set("graphics",null),this._graphicStore.clear(),this._tileStore.destroy(),this._attributeStore=null,this._hashToExpandedSymbol.clear(),this.view=null,this.renderer=null}get updating(){return!this._attached||null!==this._updatingGraphicsTimer||this._tileUpdateSet.size>0||this._tilesToUpdate.size>0}hitTest(t,e){if(!this.view||!this.view.position)return Promise.resolve(null);const i=this.view.toMap(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_17__["createScreenPoint"])(t,e));return this.searchFeatures(i).then((t=>t&&t.length?t[0]:null))}async searchFeatures(t,e=2){return this._graphicStore.hitTest(t.x,t.y,e,this.view.state.resolution,this.view.state.rotation)}update(t){const e=t.state,i=this.view.featuresTilingScheme.getClosestInfoForScale(e.scale).level;if(this._graphicStore.updateLevel(i),this._tileStore.setViewState(e),this._graphicStoreUpdate=!0,this.updateRequested=!1,this._pendingUpdate.updated.size>0){if(!this._processing)return void this._updateGraphics();this._needsProcessing=!0}}viewChange(){this.requestUpdate()}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.requestUpdateCallback())}processUpdate(t){this.updateRequested&&(this.updateRequested=!1,this.update(t))}graphicUpdateHandler(t){const{graphic:e,property:i,newValue:s}=t;switch(i){case"attributes":break;case"geometry":case"symbol":this._pendingUpdate.updated.add(e),this.requestUpdate();break;case"visible":this._setFilterState(e.uid,s),this._attributeStore.sendUpdates()}}addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const t=this._highlightIds.get(e);this._highlightIds.set(e,t+1)}else this._highlightIds.set(e,1);this._updateHighlight()}removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const t=this._highlightIds.get(e)-1;0===t?this._highlightIds.delete(e):this._highlightIds.set(e,t)}this._updateHighlight()}_updateHighlight(){const t=Array.from(this._highlightIds.keys()),e=t.map((t=>this._displayIds.get(t)));this._attributeStore.setHighlight(t,e)}_getIntersectingTiles(t){const i=this._graphicStore.getBounds(t);if(!i||0===Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_18__["width"])(i)||0===Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_18__["height"])(i))return[];const s=Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_31__["intersectingInternationalDateline"])(i,this.view.spatialReference);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(s)?[...this._tileStore.boundsIntersections(s[0]),...this._tileStore.boundsIntersections(s[1])]:this._tileStore.boundsIntersections(i)}async _updateTile(t){const e=t.tile,i=this._getGraphicsData(this._templateStore,e,t.addedOrModified),s=await this._processGraphics(e,i);return this._patchTile(e.key,{type:"update",addOrUpdate:s,remove:t.removed,end:!0,clear:!1}),s}_patchTile(t,e){if(!this._tiles.has(t))return;const i=this._tiles.get(t);this.container.onTileData(i,e),this.container.requestRender()}_graphicsChangeHandler(t){for(const e of t.added)this._pendingUpdate.added.add(e);for(const e of t.moved)this._pendingUpdate.added.add(e);for(const e of t.removed)this._pendingUpdate.added.has(e)?this._pendingUpdate.added.delete(e):this._pendingUpdate.removed.add(e);this._processing?this._needsProcessing=!0:this._updateGraphics()}_getGraphicsToUpdate(){const t={added:[],removed:[],updated:[]};if(!this.graphics)return t;const e=this._pendingUpdate;for(const i of this.graphics.items)e.added.has(i)?t.added.push(i):e.updated.has(i)&&t.updated.push(i);for(const i of e.removed)this._graphicStore.has(i)&&t.removed.push(i);return e.added.clear(),e.removed.clear(),e.updated.clear(),t}async _updateGraphics(){this._processing=!0;const{added:t,removed:e,updated:i}=this._getGraphicsToUpdate(),s=this._tilesToUpdate;let r;try{if(!this._graphicStoreUpdate){const t=this.view.state,e=this.view.featuresTilingScheme.getClosestInfoForScale(t.scale).level;this._graphicStore.updateLevel(e),this._tileStore.setViewState(t)}const a=[],o=new Array(t.length+e.length);for(let t=0;t<i.length;t++){const e=i[t],h=this._getIntersectingTiles(e);for(const t of h){r=t.id;$(r,t,s).removed.push(this._displayIds.get(e.uid))}a.push(this._updateGraphic(e,null)),o[t]=e}const h=i.length;for(let e=0;e<t.length;e++){const i=t[e];o[h+e]=i,this._graphicsSet.add(i),a.push(this._addGraphic(i))}for(const t of e){this._abortProcessingGraphic(t.uid);const e=this._getIntersectingTiles(t);for(const i of e){r=i.id;$(r,i,s).removed.push(this._displayIds.get(t.uid))}this._graphicsSet.delete(t),this._graphicStore.remove(t)}let n;this._flipUpdatingGraphics(),await Promise.all(a);for(let t=0;t<o.length;t++){n=o[t];const e=this._getIntersectingTiles(n);for(const t of e){r=t.id;$(r,t,s).addedOrModified.push(n)}}this._graphicStore.updateZ();const d=[];for(const[t,e]of s)d.push(this._updateTile(e));await Promise.all(d)}catch(a){}for(const o of e){const t=await this._getSymbolForGraphic(o,{});t&&this._hashToExpandedSymbol.delete(t.hash())}s.clear(),this.notifyChange("updating"),this._processing=!1,this._needsProcessing&&(this._needsProcessing=!1,this._updateGraphics())}_getArcadeInfo(t){const e=(t.attributes?Object.keys(t.attributes):[]).map((e=>({name:e,alias:e,type:"string"==typeof t.attributes[e]?"esriFieldTypeString":"esriFieldTypeDouble"})));return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(t.geometry)?null:{geometryType:Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["getJsonType"])(t.geometry),spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromJSON(t.geometry.spatialReference),fields:e}}async _getSymbolForGraphic(t,i){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t.symbol)?t.symbol:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.renderer)?this.renderer.getSymbolAsync(t,{scale:this.view.scale,abortOptions:i}):this._getNullSymbol(t)}async _getSymbolResources(t,e){if(!this.container.stage)return Promise.resolve(null);const i=await this._getSymbolForGraphic(t,e),s=i.hash();let r=this._hashToExpandedSymbol.get(s);if(!r){let h=this._hashTpExpandedSymbolPromise.get(s);if(h)r=await h;else{const n=this._getArcadeInfo(t),d=Object(_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_32__["createSymbolSchema"])(i);h=Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_25__["expandSymbol"])(d,n,e),this._hashTpExpandedSymbolPromise.set(s,h);try{r=await h,this._hashTpExpandedSymbolPromise.delete(s),this._hashToExpandedSymbol.set(s,r)}catch(o){this._hashTpExpandedSymbolPromise.delete(s),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["throwIfAborted"])(o)}}}if("esriTS"===r.type){const t=[],[e]=Object(_engine_webgl_util_BidiText_js__WEBPACK_IMPORTED_MODULE_24__["bidiText"])(r.text);for(let r=0;r<e.length;r++)t.push(e.charCodeAt(r));const i={symbol:r,id:0,glyphIds:t},[{mosaicItem:s}]=await this.container.getMaterialItems([i]);return{symbol:r,mosaicItem:s}}return{symbol:r,mosaicItem:null}}async _projectAndNormalizeGeometry(t,e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(t.geometry)||"mesh"===t.geometry.type)return Promise.resolve(null);let s=t.geometry;if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["isPolygon"])(s)){const t=s.rings;s.rings=t}else if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["isPolyline"])(s)){const t=s.paths;s.paths=t}else if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["isExtent"])(s)){const i=await this._getSymbolForGraphic(t,e);if(Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_31__["isMarkerSymbol"])(i.type)||Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_31__["isTextSymbol"])(i.type)){s=s.center}else s=_geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_15__["default"].fromExtent(s)}await Object(_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_26__["checkProjectionSupport"])(s.spatialReference,this.view.spatialReference);const r=Object(_geometry_support_normalizeUtilsSync_js__WEBPACK_IMPORTED_MODULE_23__["normalizeCentralMeridianSync"])(s),a=Object(_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_26__["project"])(r,s.spatialReference,this.view.spatialReference);return Object(_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_14__["closeRingsAndFixWinding"])(a),a}_onTileUpdate(t){const e=Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_12__["getInfo"])(this.view.spatialReference);if(t.added&&t.added.length>0)for(const i of t.added)this._addNewTile(i,e);if(t.removed&&t.removed.length>0)for(const i of t.removed)this._removeTile(i.key)}async _addGraphic(t){this._abortProcessingGraphic(t.uid);const e=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["createAbortController"])();this._graphicIdToAbortController.set(t.uid,e);const i={signal:e.signal};try{await this._addOrUpdateGraphic(t,i),this._graphicIdToAbortController.delete(t.uid)}catch(s){if(this._graphicIdToAbortController.delete(t.uid),!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAbortError"])(s))throw s}}async _updateGraphic(t,e){const i=this._projectAndNormalizeGeometry(t,e),s=this._getSymbolResources(t,e),[r,a]=await Promise.all([i,s]);this._graphicStore.addOrModify(t,a,r)}async _addOrUpdateGraphic(t,e){const i=this._projectAndNormalizeGeometry(t,e),s=this._getSymbolResources(t,e);try{const[e,r]=await Promise.all([i,s]);this._addProjectedGraphic(t,r,e)}catch(r){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAbortError"])(r))throw r}}_addProjectedGraphic(t,e,i){this._graphicsSet.has(t)&&this._graphicStore.addOrModify(t,e,i)}_addTile(t){const e=this.view.featuresTilingScheme.getTileBounds(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_18__["create"])(),t),i=new _engine_webgl_GraphicTile_js__WEBPACK_IMPORTED_MODULE_27__["GraphicTile"](t,e);return this._tiles.set(t,i),this.container.addChild(i),i}_addNewTile(t,e){const i=this._addTile(t.key),s=this._graphicStore.queryTileData(this._templateStore,t);if(e){const i=Math.round((e.valid[1]-e.valid[0])/t.resolution);for(const t of s)t.geometry&&(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["isPoint"])(t.geometry)||Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["isMultipoint"])(t.geometry))&&this._wrapPoints(t,i)}const r=t.key;this._tileUpdateSet.add(t.key),this.notifyChange("updating"),this._processGraphics(t,s).then((t=>{const e={type:"update",clear:!1,addOrUpdate:t,remove:[],end:!0};i.patch(e),this._tileUpdateSet.delete(r),this.notifyChange("updating")})).catch((t=>{if(this._tileUpdateSet.delete(r),this.notifyChange("updating"),!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAbortError"])(t))throw t}))}_removeTile(t){if(!this._tiles.has(t))return;const e=this._tiles.get(t);this.container.removeChild(e),e.destroy(),this._tiles.delete(t)}_setFilterState(t,e){const i=this._displayIds.get(t),s=this._attributeStore.getHighlightFlag(t);this._attributeStore.setData(i,0,0,s|(e?_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_21__["FILTER_FLAG_0"]:0))}_getGraphicsData(t,e,i){const s=Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_12__["getInfo"])(this.view.spatialReference),r=this._graphicStore.getGraphicsData(t,e,i);if(s){const t=Math.round((s.valid[1]-s.valid[0])/e.resolution);for(const e of r)e.geometry&&(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["isPoint"])(e.geometry)||Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["isMultipoint"])(e.geometry))&&this._wrapPoints(e,t)}return r}_wrapPoints(t,e){const i=t.geometry;Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["isMultipoint"])(i)?this._wrapMultipoint(i,e):this._wrapPoint(t,e)}_wrapMultipoint(t,e){const i=t.points,s=[];let r=0,a=0;for(const[o,h]of i){if(s.push([o+r,h]),r=0,e===_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_31__["TILE_SIZE"]){const t=5*_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_31__["PIXEL_BUFFER"];o+a<t?(s.push([e,0]),r=-e):o+a>_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_31__["TILE_SIZE"]-t&&(s.push([-e,0]),r=e)}else o+a<-_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_31__["PIXEL_BUFFER"]?(s.push([e,0]),r=-e):o+a>_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_31__["TILE_SIZE"]+_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_31__["PIXEL_BUFFER"]&&(s.push([-e,0]),r=e);a+=o}t.points=s}_wrapPoint(t,e){const i=t.geometry;if(e===_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_31__["TILE_SIZE"]){const s=5*_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_31__["PIXEL_BUFFER"];i.x<s?t.geometry={points:[[i.x,i.y],[e,0]]}:i.x>_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_31__["TILE_SIZE"]-s&&(t.geometry={points:[[i.x,i.y],[-e,0]]})}else i.x<-_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_31__["PIXEL_BUFFER"]?t.geometry={points:[[i.x,i.y],[e,0]]}:i.x>_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_31__["TILE_SIZE"]+_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_31__["PIXEL_BUFFER"]&&(t.geometry={points:[[i.x,i.y],[-e,0]]})}async _processGraphics(t,e,i){if(!(e&&e.length)||!this._meshFactory)return null;const s=_features_support_GraphicsReader_js__WEBPACK_IMPORTED_MODULE_37__["GraphicsReader"].from(e),r=this._meshFactory,a=await this._matcher;return await r.analyzeGraphics(s,a,null,null,i),this._attributeStore.sendUpdates(),this._processAnalyzedGraphics(t,s)}_processAnalyzedGraphics(t,e){const i=this._meshFactory,s=e.getApproximateSize(),r=e.getCursor(),a={features:s,records:s,metrics:0},o=new _engine_webgl_mesh_MeshData_js__WEBPACK_IMPORTED_MODULE_30__["MeshData"](t.key.id,a,!1,!1,!1);for(;r.next();){const t=r.readGraphic();t.insertAfter=-1===t.insertAfter?-1:this._displayIds.get(t.insertAfter),t.displayId=this._displayIds.get(t.attributes[this.uid]),i.writeGraphic(o,r)}const h=t.tileInfoView.tileInfo.isWrappable,n=o.serialize(h);if(1!==n.length)return new _engine_webgl_TileData_js__WEBPACK_IMPORTED_MODULE_28__["TileData"];const d=n[0].message;return _engine_webgl_TileData_js__WEBPACK_IMPORTED_MODULE_28__["TileData"].fromVertexData(d)}_abortProcessingGraphic(t){if(this._graphicIdToAbortController.has(t)){this._graphicIdToAbortController.get(t).abort()}}_getNullSymbol(t){const e=t.geometry;return Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["isPolyline"])(e)?_symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_19__["errorPolylineSymbol2D"]:Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["isPolygon"])(e)||Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["isExtent"])(e)?_symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_19__["errorPolygonSymbol2D"]:_symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_19__["errorPointSymbol2D"]}_flipUpdatingGraphics(){this._updatingGraphicsTimer&&clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=setTimeout((()=>{this._updatingGraphicsTimer=null,this.notifyChange("updating")}),160),this.notifyChange("updating")}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({constructOnly:!0})],tt.prototype,"requestUpdateCallback",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],tt.prototype,"container",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({constructOnly:!0})],tt.prototype,"graphics",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],tt.prototype,"updating",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],tt.prototype,"view",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],tt.prototype,"updateRequested",void 0),tt=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.support.GraphicsView2D")],tt);var et=tt;/* harmony default export */ __webpack_exports__["default"] = (et);


/***/ }),

/***/ "ZByl":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLDisplayObject.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WGLDisplayRecord.js */ "opKs");
/* harmony import */ var _util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/serializationUtils.js */ "wnVl");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class e{constructor(s){this.insertAfter=null,this.id=s,this.displayRecords=[]}copy(){const s=new e(this.id);return s.set(this),s}clone(){const s=new e(this.id);return s.displayRecords=this.displayRecords.map((s=>s.clone())),s.insertAfter=this.insertAfter,s}set(s){this.id=s.id,this.displayRecords=s.displayRecords,this.insertAfter=s.insertAfter}serialize(s){return s.push(this.id),Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__["serializeList"])(s,this.displayRecords),s}static deserialize(i){const r=i.readInt32(),d=new e(r),o={id:r};return d.displayRecords=Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__["deserializeList"])(i,_WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_0__["default"],o),d}}/* harmony default export */ __webpack_exports__["default"] = (e);


/***/ }),

/***/ "ZnvS":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileDisplayData.js ***!
  \****************************************************************************/
/*! exports provided: default, groupRecordsByGeometryType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupRecordsByGeometryType", function() { return e; });
/* harmony import */ var _GraphicDisplayList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphicDisplayList.js */ "rhep");
/* harmony import */ var _util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/serializationUtils.js */ "wnVl");
/* harmony import */ var _WGLDisplayObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WGLDisplayObject.js */ "ZByl");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function e(s){const t=[[],[],[],[],[]],i=s;for(const e of i)for(const s of e.displayRecords)t[s.geometryType].push(s);return t}class r{constructor(){}get displayObjectRegistry(){if(!this._displayObjectRegistry){this._displayObjectRegistry=new Map;for(const s of this.displayObjects)this._displayObjectRegistry.set(s.id,s)}return this._displayObjectRegistry}get displayList(){return this._displayList}computeDisplayList(){this._displayList=new _GraphicDisplayList_js__WEBPACK_IMPORTED_MODULE_0__["default"];for(const s of this.displayObjects)for(const t of s.displayRecords)this._displayList.addToList(t)}clone(){const s=new r;return this.displayObjects&&(s.displayObjects=this.displayObjects.map((s=>s.clone()))),s}serialize(s){return Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__["serializeList"])(s,this.displayObjects),s}_deserializeObjects(s){const t=s.readInt32(),e=new Array(t),r=new Map;for(let a=0;a<e.length;++a){const t=_WGLDisplayObject_js__WEBPACK_IMPORTED_MODULE_2__["default"].deserialize(s);e[a]=t,r.set(t.id,t)}this.displayObjects=e,this._displayList=null,this._displayObjectRegistry=r}static deserialize(s){const t=new r;return t._deserializeObjects(s),t}}/* harmony default export */ __webpack_exports__["default"] = (r);


/***/ }),

/***/ "ahbm":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileBufferData.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils.js */ "yN2G");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const r=5;class f{constructor(){this.geometries=[{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}}]}clone(){const e=new f;for(let r=0;r<this.geometries.length;r++){const f=this.geometries[r],t=e.geometries[r];t.indexBuffer=f.indexBuffer.slice(),t.vertexBuffer={};for(const e in f.vertexBuffer){const{data:r,stride:i}=f.vertexBuffer[e];t.vertexBuffer[e]={data:r.slice(),stride:i}}}return e}static deserialize(t){const i=new f;for(let f=0;f<r;++f){i.geometries[f].indexBuffer=new Uint32Array(t.geometries[f].indexBuffer),i.geometries[f].vertexBuffer={};for(const r in t.geometries[f].vertexBuffer)i.geometries[f].vertexBuffer[r]={data:Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["allocateTypedArrayBufferwithData"])(t.geometries[f].vertexBuffer[r].data,t.geometries[f].vertexBuffer[r].stride),stride:t.geometries[f].vertexBuffer[r].stride}}return i}serialize(){const e={geometries:[{indexBuffer:this.geometries[0].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[1].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[2].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[3].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[4].indexBuffer.buffer,vertexBuffer:{}}]};for(let f=0;f<r;++f)for(const r in this.geometries[f].vertexBuffer)e.geometries[f].vertexBuffer[r]={data:this.geometries[f].vertexBuffer[r].data.buffer,stride:this.geometries[f].vertexBuffer[r].stride};return e}getBuffers(){const e=[];for(let f=0;f<r;++f){e.push(this.geometries[f].indexBuffer.buffer);for(const r in this.geometries[f].vertexBuffer)e.push(this.geometries[f].vertexBuffer[r].data.buffer)}return e}}/* harmony default export */ __webpack_exports__["default"] = (f);


/***/ }),

/***/ "fZs+":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileData.js ***!
  \*********************************************************************/
/*! exports provided: TileData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileData", function() { return g; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils.js */ "yN2G");
/* harmony import */ var _cpuMapped_DisplayRecordReader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cpuMapped/DisplayRecordReader.js */ "n21L");
/* harmony import */ var _MemoryRequirements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MemoryRequirements.js */ "FA+c");
/* harmony import */ var _TileBufferData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TileBufferData.js */ "ahbm");
/* harmony import */ var _WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WGLDisplayRecord.js */ "opKs");
/* harmony import */ var _WGLDisplayObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WGLDisplayObject.js */ "ZByl");
/* harmony import */ var _TileDisplayData_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TileDisplayData.js */ "ZnvS");
/* harmony import */ var _mesh_VertexBuffer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mesh/VertexBuffer.js */ "2vGY");
/* harmony import */ var _util_Writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/Writer.js */ "PeSW");
/* harmony import */ var _mesh_VertexVector_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mesh/VertexVector.js */ "/Hru");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const d=new _MemoryRequirements_js__WEBPACK_IMPORTED_MODULE_3__["default"],p=new _MemoryRequirements_js__WEBPACK_IMPORTED_MODULE_3__["default"],h=1.5,x=5;function B(e,r){const s={};for(const i in e){const a={data:Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["allocateTypedArrayBuffer"])(r,e[i]),stride:e[i]};s[i]=a}return s}function y(e){return[e.fill||{},e.line||{},e.icon||{},e.text||{},e.label||{}]}class g{constructor(){this.tileDisplayData=null,this.tileBufferData=null}reshuffle(){d.reset();const e=Object(_TileDisplayData_js__WEBPACK_IMPORTED_MODULE_7__["groupRecordsByGeometryType"])(this.tileDisplayData.displayObjects);for(const t of e)for(const e of t)e&&d.needMore(e.geometryType,e.meshData?e.meshData.vertexCount:e.vertexCount,e.meshData?e.meshData.indexData.length:e.indexCount);const s=e.length,i=new _TileBufferData_js__WEBPACK_IMPORTED_MODULE_4__["default"];for(let r=0;r<s;++r){i.geometries[r].indexBuffer=new Uint32Array(Math.round(h*d.indicesFor(r)));const e=[];for(const t in this.tileBufferData.geometries[r].vertexBuffer)e.push(this.tileBufferData.geometries[r].vertexBuffer[t].stride);const s=g._computeVertexAlignment(e),a=Math.round(h*d.verticesFor(r)),o=g._align(a,s);for(const f in this.tileBufferData.geometries[r].vertexBuffer){const e=this.tileBufferData.geometries[r].vertexBuffer[f].stride;i.geometries[r].vertexBuffer[f]={stride:e,data:Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["allocateTypedArrayBuffer"])(o,e)}}}p.reset(),this.tileDisplayData.displayList.clear();for(let t=0;t<s;++t){const s=e[t];for(const e of s){if(e.meshData)e.writeMeshDataToBuffers(p.verticesFor(t),i.geometries[t].vertexBuffer,p.indicesFor(t),i.geometries[t].indexBuffer),e.meshData=null;else{const s=this.tileBufferData.geometries[t].vertexBuffer,a=this.tileBufferData.geometries[t].indexBuffer,o=i.geometries[t].vertexBuffer,f=i.geometries[t].indexBuffer,n=p.verticesFor(t),l=p.indicesFor(t);Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["copyMeshData"])(n,l,o,f,e,s,a),e.vertexFrom=n,e.indexFrom=l}p.needMore(t,e.vertexCount,e.indexCount)}}for(const t of this.tileDisplayData.displayObjects)this.tileDisplayData.displayList.addToList(t.displayRecords);this.tileBufferData=i}getStrides(){const e=[];for(let t=0;t<this.tileBufferData.geometries.length;++t){const r=this.tileBufferData.geometries[t];e[t]={};for(const s in r.vertexBuffer)e[t][s]=r.vertexBuffer[s].stride}return e}clone(){const e=new g;return e.tileBufferData=this.tileBufferData.clone(),e.tileDisplayData=this.tileDisplayData.clone(),e}_guessSize(){const{displayObjects:e}=this.tileDisplayData,t=Math.min(e.length,4),r=12,s=40;let i=0;for(let a=0;a<t;a++)i=Math.max(i,e[a].displayRecords.length);return 2*(e.length*r+e.length*i*s)}serialize(){const e=this.tileBufferData.serialize(),t=this.tileBufferData.getBuffers(),r=this.tileDisplayData.serialize(new _util_Writer_js__WEBPACK_IMPORTED_MODULE_9__["default"](Int32Array,this._guessSize())).buffer();return t.push(r),{result:{displayData:r,bufferData:e},transferList:t}}static fromVertexData(t){const r=[],a={},o=new Map;return Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["forEachGeometryType"])((s=>{const l=t.data[s];if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(l)){const e=_cpuMapped_DisplayRecordReader_js__WEBPACK_IMPORTED_MODULE_2__["DisplayRecordReader"].from(l.records).getCursor();for(;e.next();){const t=e.id,i=e.materialKey,a=e.insertAfter,l=e.indexFrom,u=e.indexCount,c=e.vertexFrom,m=e.vertexCount;if(!o.has(t)){const e=new _WGLDisplayObject_js__WEBPACK_IMPORTED_MODULE_6__["default"](t);e.insertAfter=a,o.set(t,e),r.push(e)}const D=o.get(t),d=new _WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_5__["default"](t,s,i);d.indexFrom=l,d.indexCount=u,d.vertexFrom=c,d.vertexCount=m,D.displayRecords.push(d)}a[s]=_mesh_VertexBuffer_js__WEBPACK_IMPORTED_MODULE_8__["VertexBuffers"].fromVertexData(l,s)}else a[s]=new _mesh_VertexVector_js__WEBPACK_IMPORTED_MODULE_10__["VertexVectors"](s,0).intoBuffers()})),r.sort(((e,t)=>e.id-t.id)),g.fromMeshData({displayObjects:r,vertexBuffersMap:a})}static fromMeshData(e){const t=new g,r=new _TileDisplayData_js__WEBPACK_IMPORTED_MODULE_7__["default"],s=new _TileBufferData_js__WEBPACK_IMPORTED_MODULE_4__["default"];r.displayObjects=e.displayObjects;for(const i in e.vertexBuffersMap){const t=e.vertexBuffersMap[i];s.geometries[i].indexBuffer=t.indexBuffer,s.geometries[i].vertexBuffer=t.namedBuffers}return t.tileDisplayData=r,t.tileBufferData=s,t}static bind(e,t){const r=new g;return r.tileDisplayData=e,r.tileBufferData=t,r}static create(e,t){const r=new g;r.tileDisplayData=new _TileDisplayData_js__WEBPACK_IMPORTED_MODULE_7__["default"],r.tileDisplayData.displayObjects=e;const s=[0,0,0,0,0],i=[0,0,0,0,0],a=[[],[],[],[],[]];for(const o of e)for(const e of o.displayRecords)a[e.geometryType].push(e),s[e.geometryType]+=e.meshData.vertexCount,i[e.geometryType]+=e.meshData.indexData.length;const n=new _TileBufferData_js__WEBPACK_IMPORTED_MODULE_4__["default"],u=y(t);for(let o=0;o<x;o++){const e=new Uint32Array(i[o]),t=B(u[o],s[o]);_WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_5__["default"].writeAllMeshDataToBuffers(a[o],t,e),n.geometries[o]={indexBuffer:e,vertexBuffer:t}}return r.tileBufferData=n,r}static _align(e,t){const r=e%t;return 0===r?e:e+(t-r)}static _computeVertexAlignment(e){let t=!1,r=!1;for(const s of e)s%4==2?t=!0:s%4!=0&&(r=!0);return r?4:t?2:1}}


/***/ }),

/***/ "kvL/":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/BaseGraphicContainer.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine_FeatureContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/FeatureContainer.js */ "by2V");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class t extends _engine_FeatureContainer_js__WEBPACK_IMPORTED_MODULE_0__["FeatureContainer"]{constructor(e){super(e)}get hasLabels(){return!1}get labelsVisible(){return!1}onTileData(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){e.clear(),this.contains(e)||this.addChild(e)}_renderChildren(e,t){for(const i of this.children)i.isReady&&i.hasData&&(i.commit(e),e.context.setStencilFunction(514,i.stencilRef,255),i._displayList.replay(e,i,t))}}/* harmony default export */ __webpack_exports__["default"] = (t);


/***/ }),

/***/ "opKs":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLDisplayRecord.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils.js */ "yN2G");
/* harmony import */ var _MeshData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeshData.js */ "VPKi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class s{constructor(t,e,s,r=0,i=0){this.id=t,this.geometryType=e,this.materialKey=s,this.minZoom=r,this.maxZoom=i,this.meshData=null,this.symbolLevel=0,this.zOrder=0,this.vertexFrom=0,this.vertexCount=0,this.indexFrom=0,this.indexCount=0}get sortKey(){return void 0===this._sortKey&&this._computeSortKey(),this._sortKey}clone(){return this.copy()}copy(){const t=new s(this.id,this.geometryType,this.materialKey);return t.vertexFrom=this.vertexFrom,t.vertexCount=this.vertexCount,t.indexFrom=this.indexFrom,t.indexCount=this.indexCount,t.zOrder=this.zOrder,t.symbolLevel=this.symbolLevel,t.meshData=this.meshData,t.minZoom=this.minZoom,t.maxZoom=this.maxZoom,t}setMeshDataFromBuffers(s,r,i){const o=new _MeshData_js__WEBPACK_IMPORTED_MODULE_1__["default"];for(const e in r){const i=r[e].stride,a=r[e].data,h=[],n=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["strideToPackingFactor"])(i);for(let t=0;t<i*s.vertexCount/n;++t)h[t]=a[t+i*s.vertexFrom/n];o.vertexData.set(e,h)}o.indexData.length=0;for(let t=0;t<s.indexCount;++t)o.indexData[t]=i[t+s.indexFrom]-s.vertexFrom;o.vertexCount=s.vertexCount,this.meshData=o}readMeshDataFromBuffers(s,r){this.meshData?this.meshData.clear():this.meshData=new _MeshData_js__WEBPACK_IMPORTED_MODULE_1__["default"];for(const e in s){const r=s[e].stride,i=s[e].data,o=[],a=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["strideToPackingFactor"])(r);for(let t=0;t<r*this.vertexCount/a;++t)o[t]=i[t+r*this.vertexFrom/a];this.meshData.vertexData.set(e,o)}this.meshData.indexData.length=0;for(let t=0;t<this.indexCount;++t)this.meshData.indexData[t]=r[t+this.indexFrom]-this.vertexFrom;this.meshData.vertexCount=this.vertexCount}writeMeshDataToBuffers(e,s,r,i){for(const o in s){const r=s[o].stride,i=this.meshData.vertexData.get(o),a=s[o].data,h=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["strideToPackingFactor"])(r);for(let t=0;t<r*this.meshData.vertexCount/h;++t)a[t+r*e/h]=i[t]}for(let t=0;t<this.meshData.indexData.length;++t)i[t+r]=this.meshData.indexData[t]+e;this.vertexFrom=e,this.vertexCount=this.meshData.vertexCount,this.indexFrom=r,this.indexCount=this.meshData.indexData.length}static writeAllMeshDataToBuffers(t,e,s){let r=0,i=0;for(const o of t)o.writeMeshDataToBuffers(r,e,i,s),r+=o.vertexCount,i+=o.indexCount}_computeSortKey(){this._sortKey=(31&this.symbolLevel)<<12|(127&this.zOrder)<<4|7&this.geometryType}serialize(t){return t.push(this.geometryType),t.push(this.materialKey),t.push(this.vertexFrom),t.push(this.vertexCount),t.push(this.indexFrom),t.push(this.indexCount),t.push(this.minZoom),t.push(this.maxZoom),t}static deserialize(t,e){const r=t.readInt32(),i=t.readInt32(),o=new s(e.id,r,i);return o.vertexFrom=t.readInt32(),o.vertexCount=t.readInt32(),o.indexFrom=t.readInt32(),o.indexCount=t.readInt32(),o.minZoom=t.readInt32(),o.maxZoom=t.readInt32(),o}}/* harmony default export */ __webpack_exports__["default"] = (s);


/***/ }),

/***/ "rhep":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GraphicDisplayList.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function n(e,t,n,...o){t<e.length?e.splice(t,n,...o):e.push(...o)}const o=new Map;o.set(_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].MAP,[_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].FILL,_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].LINE,_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].MARKER,_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].TEXT]),o.set(_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].LABEL,[_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].LABEL]),o.set(_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].LABEL_ALPHA,[_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].LABEL]);class i{constructor(){this.symbolLevels=[]}replay(e,t,n){for(const o of this.symbolLevels)for(const i of o.zLevels){const o=i.geometryDPInfo.unified;if(o)for(const i of o){const o=e.painter.getGeometryBrush(i.geometryType),r=t.getGeometry(i.geometryType),s={geometryType:i.geometryType,materialKey:i.materialKey,indexFrom:i.indexFrom,indexCount:i.indexCount,draw:(e,t,n)=>{r.draw(e,t,n,i.indexFrom,i.indexCount)}};o.prepareState(e,t),o.drawGeometry(e,t,s,n)}}}get empty(){return!this.symbolLevels||0===this.symbolLevels.length}clear(){this.symbolLevels.length=0}addToList(e,t){if(Array.isArray(e))for(const n of e)this._addToList(n,t);else this._addToList(e,t)}removeFromList(e){Array.isArray(e)||(e=[e]);let t=null;for(const n of e)t=this._removeFromList(n);return t}clone(){const e=new i;for(const t of this.symbolLevels)e.symbolLevels.push(t.clone());return e}splitAfter(e){const t=this._getDisplayList(e.symbolLevel,e.zOrder),n=t.length,o=e.indexFrom+e.indexCount;for(let i=0;i<n;++i){const n=t[i];if(n.geometryType===e.geometryType&&o>n.indexFrom&&o<=n.indexFrom+n.indexCount){if(o<n.indexFrom+n.indexCount){const e=new r;e.geometryType=n.geometryType,e.materialKey=n.materialKey,e.indexFrom=o,e.indexCount=n.indexFrom+n.indexCount-o,t.splice(i+1,0,e),n.indexCount=o-n.indexFrom}return i}}}_addToList(e,t){const o=e.symbolLevel,i=e.zOrder,s=this._getDisplayList(o,i),l=null!=t?t:s.length-1,m=l>=0&&l<s.length?s[l]:null;if(null!==m&&m.materialKey===e.materialKey&&m.indexFrom+m.indexCount===e.indexFrom&&m.geometryType===e.geometryType)m.indexCount+=e.indexCount;else{const t=new r;t.indexFrom=e.indexFrom,t.indexCount=e.indexCount,t.materialKey=e.materialKey,t.geometryType=e.geometryType,n(s,l+1,0,t)}}_removeFromList(e){const t=e.symbolLevel,o=e.zOrder,i=this._getDisplayList(t,o),s=i.length;let l;for(let n=0;n<s;++n){const t=i[n];if(e.indexFrom+e.indexCount>t.indexFrom&&e.indexFrom<t.indexFrom+t.indexCount&&t.geometryType===e.geometryType){l=n;break}}if(void 0!==l){const t=i[l];if(e.indexFrom===t.indexFrom)return t.indexCount-=e.indexCount,t.indexFrom+=e.indexCount,0===t.indexCount&&n(i,l,1),l-1;if(e.indexFrom+e.indexCount===t.indexFrom+t.indexCount)return t.indexCount-=e.indexCount,0===t.indexCount?(n(i,l,1),l-1):l;{const o=t.indexFrom,s=e.indexFrom-t.indexFrom,m=e.indexCount,d=t.indexFrom+t.indexCount-(e.indexFrom+e.indexCount);t.indexCount=s;const y=new r;return y.geometryType=t.geometryType,y.materialKey=t.materialKey,y.indexFrom=o+s+m,y.indexCount=d,n(i,l+1,0,y),l}}return null}_getDisplayList(e,t){let n;const o=this.symbolLevels.length;for(let s=0;s<o;s++)if(this.symbolLevels[s].symbolLevel===e){n=this.symbolLevels[s];break}let i;n||(n=new m,n.symbolLevel=e,this.symbolLevels.push(n));const r=n.zLevels.length;for(let s=0;s<r;s++)if(n.zLevels[s].zLevel===t){i=n.zLevels[s];break}return i||(i=new l,i.geometryDPInfo=new s,i.zLevel=t,n.zLevels.push(i)),i.geometryDPInfo.unified||(i.geometryDPInfo.unified=[]),i.geometryDPInfo.unified}getDPInfoType(){return"unified"}}class r{constructor(){this.materialKey=null,this.indexFrom=0,this.indexCount=0}clone(){const e=new r;return e.geometryType=this.geometryType,e.materialKey=this.materialKey,e.indexFrom=this.indexFrom,e.indexCount=this.indexCount,e}}class s{constructor(){this.fill=null,this.line=null,this.marker=null,this.text=null,this.label=null,this.unified=null}clone(){const e=new s;return e.fill=this.fill&&this.fill.map((e=>e.clone())),e.line=this.line&&this.line.map((e=>e.clone())),e.marker=this.marker&&this.marker.map((e=>e.clone())),e.text=this.text&&this.text.map((e=>e.clone())),e.label=this.label&&this.label.map((e=>e.clone())),e.unified=this.unified&&this.unified.map((e=>e.clone())),e}}class l{constructor(){this.geometryDPInfo=new s}clone(){const e=new l;return e.zLevel=this.zLevel,e.geometryDPInfo=this.geometryDPInfo.clone(),e}}class m{constructor(){this.zLevels=[]}clone(){const e=new m;e.symbolLevel=this.symbolLevel;for(const t of this.zLevels)e.zLevels.push(t.clone());return e}}/* harmony default export */ __webpack_exports__["default"] = (i);


/***/ }),

/***/ "t0Xj":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicStoreItem.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _geometry_support_centroid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry/support/centroid.js */ "V+VG");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../layers/graphics/OptimizedGeometry.js */ "gVKr");
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../layers/graphics/featureConversionUtils.js */ "ZlUD");
/* harmony import */ var _geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../geometry/support/quantizationUtils.js */ "AIxD");
/* harmony import */ var _graphicsUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./graphicsUtils.js */ "M08Z");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const c=new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__["default"],d=new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__["default"],f="esriGeometryPolyline";function b(t){t.coords.length=0,t.lengths.length=0}class j{constructor(){this.bounds=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["create"])(),this.graphic=null,this.size=[0,0,0,0]}static acquire(t=null,e,s,r,o,i){let h;return 0===j._pool.length?h=new j:(h=j._pool.pop(),this._set.delete(h)),h.acquire(t,e,s,r,o,i),h}static release(t){t&&!this._set.has(t)&&(t.release(),this._pool.push(t),this._set.add(t))}static getCentroidQuantized(r,o){if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(r.geometry)){const s=r.symbol;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(s))return null;if(Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_7__["isMarkerSymbol"])(s.type)||Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_7__["isTextSymbol"])(s.type)){const t=Object(_geometry_support_centroid_js__WEBPACK_IMPORTED_MODULE_1__["polygonCentroid"])(r.geometry);return Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_6__["quantizePoint"])(o,{},{x:t[0],y:t[1]},!1,!1)}}return null}acquire(t=null,e,s,r,o,i){t&&this.set(t,e,s,r,o,i)}release(){this.graphic=null,this.symbolResource=null,this.geometry=null}get symbol(){return this.symbolResource.symbol}set(t,e,s,r,o,i){this.graphic=t,this.geometry=s,this.symbolResource=e,this.updateBounds(r,o,i)}updateBounds(t,e,s){Object(_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_7__["getBounds"])(this.bounds,this.size,this.symbolResource,this.geometry,t,e,s)}getGeometryQuantized(t){if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(this.geometry)){const e=this.geometry.rings;if(1===e.length&&2===e[0].length)return Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_6__["quantizeGeometry"])(t,{paths:[[e[0][0],e[0][1]]]})}else if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(this.geometry))return b(c),b(d),Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__["convertFromPolyline"])(c,this.geometry),Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__["generalizeOptimizedGeometry"])(d,c,this.geometry.hasZ,this.geometry.hasM,f,t.scale[0]),Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__["quantizeOptimizedGeometry"])(c,d,this.geometry.hasZ,this.geometry.hasM,f,t),Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__["convertToPolyline"])(c,this.geometry.hasZ,this.geometry.hasM);return Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_6__["quantizeGeometry"])(t,this.geometry)}}j._pool=[],j._set=new Set;/* harmony default export */ __webpack_exports__["default"] = (j);


/***/ }),

/***/ "wnVl":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/serializationUtils.js ***!
  \************************************************************************************/
/*! exports provided: deserializeList, serializeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeList", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeList", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function e(e,n){if(null!==n){e.push(n.length);for(const r of n)r.serialize(e);return e}e.push(0)}function n(e,n,r){const t=e.readInt32(),o=new Array(t);for(let i=0;i<o.length;i++)o[i]=n.deserialize(e,r);return o}


/***/ })

}]);
//# sourceMappingURL=default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~c5703df0.js.map