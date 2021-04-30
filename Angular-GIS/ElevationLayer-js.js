(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ElevationLayer-js"],{

/***/ "03hq":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/LercDecoder.js ***!
  \*****************************************************************/
/*! exports provided: acquireDecoder, releaseDecoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acquireDecoder", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "releaseDecoder", function() { return s; });
/* harmony import */ var _core_workers_WorkerHandle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/workers/WorkerHandle.js */ "eLqb");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class r extends _core_workers_WorkerHandle_js__WEBPACK_IMPORTED_MODULE_0__["WorkerHandle"]{constructor(e){super("LercWorker","_decode",e,{strategy:"dedicated"}),this.scheduler=e}decode(e,r,t){return e&&0!==e.byteLength?this.invoke({buffer:e,options:r},t):Promise.resolve(null)}getTransferList(e){return[e.buffer]}}const t=new Map;function n(e){let n=t.get(e);return n||(n={instance:new r(e),ref:0},t.set(e,n)),++n.ref,n.instance}function s(e){if(null==e)return;const r=e.scheduler,n=t.get(r);n&&--n.ref<=0&&(n.instance.destroy(),t.delete(r))}


/***/ }),

/***/ "8g7C":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/ElevationLayer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../geometry/HeightModelInfo.js */ "5k2a");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./support/commonProperties.js */ "IvSi");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "uRH/");
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ "PVlI");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/* harmony import */ var _mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/ArcGISCachedService.js */ "tIWS");
/* harmony import */ var _support_LercDecoder_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./support/LercDecoder.js */ "03hq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const w=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.layers.ElevationLayer");let x=class extends(Object(_mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_21__["ArcGISCachedService"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_19__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_18__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_20__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_15__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_14__["default"])))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=Object(_support_LercDecoder_js__WEBPACK_IMPORTED_MODULE_22__["acquireDecoder"])()}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}destroy(){Object(_support_LercDecoder_js__WEBPACK_IMPORTED_MODULE_22__["releaseDecoder"])(this._lercDecoder),this._lercDecoder=null}set minScale(e){this.constructed&&w.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`)}get minScale(){}set maxScale(e){this.constructed&&w.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`)}get maxScale(){}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const t=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return!0;throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).then((()=>this._fetchImageService(t)),(()=>this._fetchImageService(t)))),Promise.resolve(this)}fetchTile(e,t,o,i){const s=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])((i=i||{signal:null}).signal)?i.signal:i.signal=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["createAbortController"])().signal,a={responseType:"array-buffer",signal:s},l={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,o,i))).then((()=>Object(_request_js__WEBPACK_IMPORTED_MODULE_13__["default"])(this.getTileUrl(e,t,o),a))).then((e=>this._lercDecoder.decode(e.data,l,s))).then((e=>({values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue})))}getTileUrl(e,r,t){const o=!this.tilemapCache&&this.supportsBlankTile,i=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["objectToQuery"])({...this.parsedUrl.query,blankTile:!o&&null});return`${this.parsedUrl.path}/tile/${e}/${r}/${t}${i?"?"+i:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await __webpack_require__.e(/*! import() | support-ElevationQuery-js */ "support-ElevationQuery-js").then(__webpack_require__.bind(null, /*! ./support/ElevationQuery.js */ "LfYK"));Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["throwIfAborted"])(r);return(new t).query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await __webpack_require__.e(/*! import() | support-ElevationQuery-js */ "support-ElevationQuery-js").then(__webpack_require__.bind(null, /*! ./support/ElevationQuery.js */ "LfYK"));Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["throwIfAborted"])(r);return(new t).createSampler(this,e,r)}_fetchTileAvailability(e,r,t,o){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,o):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const r={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},t=await Object(_request_js__WEBPACK_IMPORTED_MODULE_13__["default"])(this.parsedUrl.path,r);t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{read:{source:"copyrightText"}}})],x.prototype,"copyright",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,type:_geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_16__["default"]})],x.prototype,"heightModelInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],x.prototype,"path",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:["show","hide"]})],x.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],x.prototype,"minScale",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],x.prototype,"maxScale",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],x.prototype,"opacity",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:["ArcGISTiledElevationServiceLayer"]})],x.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],x.prototype,"sourceJSON",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{read:!1},value:"elevation",readOnly:!0})],x.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_17__["url"])],x.prototype,"url",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],x.prototype,"version",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("version",["currentVersion"])],x.prototype,"readVersion",null),x=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.ElevationLayer")],x);var T=x;/* harmony default export */ __webpack_exports__["default"] = (T);


/***/ }),

/***/ "eLqb":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/WorkerHandle.js ***!
  \****************************************************************/
/*! exports provided: WorkerHandle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerHandle", function() { return n; });
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../maybe.js */ "srIe");
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger.js */ "6S2I");
/* harmony import */ var _handleUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handleUtils.js */ "xkkJ");
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../arrayUtils.js */ "tQ+6");
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../promiseUtils.js */ "9MzC");
/* harmony import */ var _workers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workers.js */ "36Co");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const h=_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.core.workers.WorkerHandle");class n{constructor(e,t,r,s={}){this._mainMethod=t,this._listeners=[],this._promise=Object(_workers_js__WEBPACK_IMPORTED_MODULE_5__["open"])(e,{...s,scheduler:r}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,s.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>h.error(`Failed to initialize ${e} worker: ${t}`)))}on(t,i){const o={removed:!1,eventName:t,callback:i,threadHandle:null};return this._listeners.push(o),this._connectListener(o),Object(_handleUtils_js__WEBPACK_IMPORTED_MODULE_2__["makeHandle"])((()=>{o.removed=!0,Object(_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__["remove"])(this._listeners,o),this._thread&&Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(o.threadHandle)&&o.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){const s=this.getTransferList(t,e);return this._thread.invoke(e,t,{transferList:s,signal:r})}return this._promise?this._promise.then((()=>(Object(_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["throwIfAborted"])(r),this.invokeMethod(e,t,r)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}


/***/ })

}]);
//# sourceMappingURL=ElevationLayer-js.js.map