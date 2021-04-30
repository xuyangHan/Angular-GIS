(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-MapImageLayerView2D-js"],{

/***/ "/wA8":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/HighlightGraphicContainer.js ***!
  \*****************************************************************************************/
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
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../engine/webgl/enums.js */ "yE7X");
/* harmony import */ var _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BaseGraphicContainer.js */ "kvL/");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let o=class extends _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_10__["default"]{renderChildren(r){if(r.drawPhase!==_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLDrawPhase"].HIGHLIGHT)return;if(this.attributeView.bindTextures(r.context),!this.children.some((r=>r.hasData)))return;super.renderChildren(r);const{painter:e}=r,t=e.effects.highlight;t.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(16384),this._renderChildren(r,t.defines.concat(["highlightAll"])),t.draw(r),t.unbind()}};o=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.support.HighlightGraphicContainer")],o);var i=o;/* harmony default export */ __webpack_exports__["default"] = (i);


/***/ }),

/***/ "6BjF":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/MapImageLayerView2D.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../support/GraphicsCollection.js */ "9iar");
/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layers/RefreshableLayerView.js */ "bHqs");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/* harmony import */ var _support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../support/drapedUtils.js */ "6UvW");
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./graphics/GraphicsView2D.js */ "Vh9r");
/* harmony import */ var _layers_MapImageLayerView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../layers/MapImageLayerView.js */ "U3zk");
/* harmony import */ var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../engine/BitmapContainer.js */ "LTnl");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/* harmony import */ var _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./support/ExportStrategy.js */ "vbiG");
/* harmony import */ var _graphics_HighlightGraphicContainer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./graphics/HighlightGraphicContainer.js */ "/wA8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const l=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.layers.MapImageLayerView2D");let y=class extends(Object(_layers_MapImageLayerView_js__WEBPACK_IMPORTED_MODULE_15__["MapImageLayerView"])(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_11__["RefreshableLayerView"])(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_17__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__["default"])))){constructor(){super(...arguments),this._highlightGraphics=new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_10__["default"]}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["isAbortError"])(e)||l.error(e)}))}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,i=r>=10.3,s=r>=10;this._bitmapContainer=new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_16__["BitmapContainer"],this.container.addChild(this._bitmapContainer);const a=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_14__["default"]({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new _graphics_HighlightGraphicContainer_js__WEBPACK_IMPORTED_MODULE_19__["default"](this.view.featuresTilingScheme)});this.container.addChild(a.container),this.strategy=new _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_18__["default"]({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:i,imageNormalizationSupported:s,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e)}}}createFetchPopupFeaturesQueryGeometry(e,t){return Object(_support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_13__["createQueryGeometry"])(e,t,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,timestamp:this.refreshTimestamp,...i})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],y.prototype,"strategy",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],y.prototype,"updating",void 0),y=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.MapImageLayerView2D")],y);var f=y;/* harmony default export */ __webpack_exports__["default"] = (f);


/***/ }),

/***/ "6UvW":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/support/drapedUtils.js ***!
  \****************************************************************/
/*! exports provided: createQueryGeometry, intersectsDrapedGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQueryGeometry", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectsDrapedGeometry", function() { return o; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry.js */ "4GrV");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/unitUtils.js */ "gEht");
/* harmony import */ var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../renderers/support/clickToleranceUtils.js */ "U282");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function a(t,i,a,o=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"]){let s;if("2d"===a.type)s=i*a.resolution;else if("3d"===a.type){const r=a.overlayPixelSizeInMapUnits(t),o=a.basemapSpatialReference;s=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(o)&&!o.equals(a.spatialReference)?Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__["getMetersPerUnitForSR"])(o)/Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__["getMetersPerUnitForSR"])(a.spatialReference):i*r}const m=t.x-s,p=t.y-s,c=t.x+s,l=t.y+s,{spatialReference:f}=a;return o.xmin=Math.min(m,c),o.ymin=Math.min(p,l),o.xmax=Math.max(m,c),o.ymax=Math.max(p,l),o.spatialReference=f,o}function o(e,r,n){const o=n.toMap(e);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(o))return!1;return a(o,Object(_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_4__["calculateTolerance"])(),n,s).intersects(r)}const s=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "Ilhi":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/sublayerUtils.js ***!
  \*******************************************************************/
/*! exports provided: isExportDynamic, isSublayerOverhaul, shouldWriteSublayerStructure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExportDynamic", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSublayerOverhaul", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldWriteSublayerStructure", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function e(e,n,i){if(n.flatten((({sublayers:e})=>e)).length!==e.length)return!0;return!!e.some((e=>e.originIdOf("minScale")>i||e.originIdOf("maxScale")>i||e.originIdOf("renderer")>i||e.originIdOf("labelingInfo")>i||e.originIdOf("opacity")>i||e.originIdOf("labelsVisible")>i||e.originIdOf("source")>i))||!r(e,n)}function n(e,n,i){return!!e.some((e=>{const n=e.source;return!(!n||"map-layer"===n.type&&n.mapLayerId===e.id&&(!n.gdbVersion||n.gdbVersion===i.gdbVersion))||e.originIdOf("renderer")>2||e.originIdOf("labelingInfo")>2||e.originIdOf("opacity")>2||e.originIdOf("labelsVisible")>2}))||!r(e,n)}function r(e,n){if(!e||!e.length)return!0;const r=n.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).map((e=>e.id)).toArray();if(e.length>r.length)return!1;let i=0;const o=r.length;for(const{id:t}of e){for(;i<o&&r[i]!==t;)i++;if(i>=o)return!1}return!0}function i(e){return!!e&&e.some((e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale))}


/***/ }),

/***/ "U282":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/clickToleranceUtils.js ***!
  \****************************************************************************/
/*! exports provided: calculateTolerance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTolerance", function() { return s; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function t(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function e(t){let e=0,n=0;for(let r=0;r<t.length;r++){const s=t[r].size;"number"==typeof s&&(e+=s,n++)}return e/n}function n(t,n){return"number"==typeof t?t:t&&t.stops&&t.stops.length?e(t.stops):n}function r(t,e){if(!e)return t;const r=e.filter((t=>"size"===t.type)).map((e=>{const{maxSize:r,minSize:s}=e;return(n(r,t)+n(s,t))/2}));let s=0;const o=r.length;if(0===o)return t;for(let n=0;n<o;n++)s+=r[n];const f=Math.floor(s/o);return Math.max(f,t)}function s(e){const n=e&&e.renderer,s="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!n)return s;const o="visualVariables"in n?r(s,n.visualVariables):s;if("simple"===n.type)return t(o,n.symbol);if("unique-value"===n.type){let e=o;return n.uniqueValueInfos.forEach((n=>{e=t(e,n.symbol)})),e}if("class-breaks"===n.type){let e=o;return n.classBreakInfos.forEach((n=>{e=t(e,n.symbol)})),e}return n.type,o}


/***/ }),

/***/ "U3zk":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/MapImageLayerView.js ***!
  \*********************************************************************/
/*! exports provided: default, MapImageLayerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapImageLayerView", function() { return c; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../support/arcadeOnDemand.js */ "gvqN");
/* harmony import */ var _layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../layers/support/commonProperties.js */ "IvSi");
/* harmony import */ var _layers_support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../layers/support/ExportImageParameters.js */ "cM4j");
/* harmony import */ var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../renderers/support/clickToleranceUtils.js */ "U282");
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./support/popupUtils.js */ "rXMu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const c=c=>{let y=class extends c{initialize(){this.exportImageParameters=new _layers_support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_14__["ExportImageParameters"]({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,t){const{layer:o}=this;if(!e)return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o}));const p=this.get("view.scale"),i=[],m=async e=>{const o=0===e.minScale||p<=e.minScale,s=0===e.maxScale||p>=e.maxScale;if(e.visible&&o&&s)if(e.sublayers)e.sublayers.forEach(m);else if(e.popupEnabled){const o=Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_16__["getFetchPopupTemplate"])(e,{...t,defaultPopupTemplateEnabled:!1});Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(o)&&i.unshift({sublayer:e,popupTemplate:o})}},c=o.sublayers.toArray().reverse().map(m);await Promise.all(c);const y=i.map((async({sublayer:o,popupTemplate:s})=>{await o.load().catch((()=>{}));const a=o.createQuery(),p=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t)?t.event:null,i=Object(_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_15__["calculateTolerance"])({renderer:o.renderer,event:p}),m=this.createFetchPopupFeaturesQueryGeometry(e,i);a.geometry=m,a.outFields=await Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_16__["getRequiredFields"])(o,s);const n=await this._loadArcadeModules(s);n&&n.arcadeUtils.hasGeometryOperations(s)||(a.maxAllowableOffset=m.width/i);return(await o.queryFeatures(a)).features}));return(await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["eachAlways"])(y)).reduce(((e,r)=>r.value?[...e,...r.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return!!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_12__["loadArcade"])()}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],y.prototype,"exportImageParameters",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0})],y.prototype,"exportImageVersion",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],y.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],y.prototype,"suspended",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_13__["combinedViewLayerTimeExtentProperty"])],y.prototype,"timeExtent",void 0),y=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.layers.MapImageLayerView")],y),y};/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "rXMu":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/support/popupUtils.js ***!
  \**********************************************************************/
/*! exports provided: getFetchPopupTemplate, getRequiredFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFetchPopupTemplate", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequiredFields", function() { return i; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layers/support/fieldUtils.js */ "wdpY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function i(i,d=i.popupTemplate){if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(d))return[];const o=await d.getRequiredFields(i.fields),{lastEditInfoEnabled:s}=d,{objectIdField:u,typeIdField:a,globalIdField:n,relationships:f}=i;if(o.includes("*"))return["*"];const r=s?await Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["getFeatureEditFields"])(i):[],m=Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["fixFields"])(i.fields,[...o,...r]);return a&&m.push(a),m&&u&&Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(i.fields,u)&&-1===m.indexOf(u)&&m.push(u),m&&n&&Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(i.fields,n)&&-1===m.indexOf(n)&&m.push(n),f&&f.forEach((e=>{const{keyField:p}=e;m&&p&&Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(i.fields,p)&&-1===m.indexOf(p)&&m.push(p)})),m}function d(p,l){return p.popupTemplate?p.popupTemplate:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(l)&&l.defaultPopupTemplateEnabled&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(p.defaultPopupTemplate)?p.defaultPopupTemplate:null}


/***/ })

}]);
//# sourceMappingURL=layers-MapImageLayerView2D-js.js.map