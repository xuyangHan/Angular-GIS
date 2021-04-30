(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["IntegratedMeshLayer-js"],{

/***/ "Yjsn":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/SceneModification.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Warning.js */ "ACjl");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_accessorSupport_decorators_persistable_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/persistable.js */ "xvdR");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../geometry/Polygon.js */ "Ehki");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../geometry.js */ "4GrV");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../geometry/projection.js */ "gYg2");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var l;let y=l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,r,o,s){if(s.layer&&s.layer.spatialReference&&!s.layer.spatialReference.equals(this.geometry.spatialReference)){if(!Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_13__["canProjectWithoutEngine"])(e.spatialReference,s.layer.spatialReference))return void(s&&s.messages&&s.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_6__["default"]("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s.layer.spatialReference,context:s})));const p=new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_11__["default"];Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_13__["projectPolygon"])(e,p,s.layer.spatialReference),r[o]=p.toJSON(s)}else r[o]=e.toJSON(s);delete r[o].spatialReference}clone(){return new l({geometry:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.geometry),type:this.type})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_11__["default"]}),Object(_core_accessorSupport_decorators_persistable_js__WEBPACK_IMPORTED_MODULE_9__["persistable"])()],y.prototype,"geometry",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])(["web-scene","portal-item"],"geometry")],y.prototype,"writeGeometry",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:["clip","mask","replace"],nonNullable:!0}),Object(_core_accessorSupport_decorators_persistable_js__WEBPACK_IMPORTED_MODULE_9__["persistable"])()],y.prototype,"type",void 0),y=l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.support.SceneModification")],y);var f=y;/* harmony default export */ __webpack_exports__["default"] = (f);


/***/ }),

/***/ "wigO":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/SceneModifications.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/Collection.js */ "LE9a");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _SceneModification_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SceneModification.js */ "Yjsn");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var m;let n=m=class extends(Object(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupportMixin"])(_core_Collection_js__WEBPACK_IMPORTED_MODULE_11__["default"].ofType(_SceneModification_js__WEBPACK_IMPORTED_MODULE_13__["default"]))){constructor(r){super(r),this.url=null}toJSON(r){return this.toArray().map((o=>o.toJSON(r))).filter((r=>!!r.geometry))}clone(){return new m({url:this.url,items:this.items.map((r=>r.clone()))})}_readModifications(r,o){for(const t of r)this.add(_SceneModification_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromJSON(t,o))}static fromJSON(r,o){const t=new m;return t._readModifications(r,o),t}static async fromUrl(r,t,e){const i={url:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["urlToObject"])(r),origin:"service"},c=await Object(_request_js__WEBPACK_IMPORTED_MODULE_12__["default"])(r,{responseType:"json",signal:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["get"])(e,"signal")}),n=t.toJSON(),u=[];for(const o of c.data)u.push(_SceneModification_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromJSON({...o,geometry:{...o.geometry,spatialReference:n}},i));return new m({url:r,items:u})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String})],n.prototype,"url",void 0),n=m=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.SceneModifications")],n);var u=n;/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ }),

/***/ "xvdR":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/accessorSupport/decorators/persistable.js ***!
  \**********************************************************************************/
/*! exports provided: persistable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistable", function() { return g; });
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../maybe.js */ "srIe");
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata.js */ "evjZ");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property.js */ "WbKI");
/* harmony import */ var _multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../multiOriginJSONSupportUtils.js */ "Jpjp");
/* harmony import */ var _urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../urlUtils.js */ "4EHJ");
/* harmony import */ var _uuid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../uuid.js */ "ju1D");
/* harmony import */ var _PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PropertyOrigin.js */ "ku/q");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../chunks/persistableUrlUtils.js */ "/PL2");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function g(r){const e=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&r.origins?r.origins:[void 0];return(t,o)=>{const n=w(r,t,o);for(const r of e){const e=Object(_property_js__WEBPACK_IMPORTED_MODULE_2__["propertyJSONMeta"])(t,r,o);for(const t in n)e[t]=n[t]}}}function w(r,e,o){if(Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&"resource"===r.type)return v(r,e,o);switch(Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&r.type?r.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:t,write:r}=_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"];return{read:t,write:r}}}}function v(e,i,p){const a=Object(_metadata_js__WEBPACK_IMPORTED_MODULE_1__["getOwnPropertyMetadata"])(i,p);return{type:String,read:(t,r,e)=>{const o=Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__["r"])(t,r,e);return a.type===String?o:"function"==typeof a.type?new a.type({url:o}):void 0},write:{writer(o,i,c,f){if(!f||!f.resources)return"string"==typeof o?void(i[c]=Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__["t"])(o,f)):void(i[c]=o.write({},f));const m=P(o),d=m?Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__["t"])(m,{...f,verifyItemRelativeUrls:f&&f.verifyItemRelativeUrls?{writtenUrls:f.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},1):null,g=a.type!==String&&(!Object(_multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_3__["isMultiOriginJSONMixin"])(this)||f&&f.origin&&this.originIdOf(p)>Object(_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_6__["nameToId"])(f.origin));f&&f.portalItem&&Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(d)&&!Object(_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["isAbsolute"])(d)?g?j(this,p,o,d,i,c,f,e):I(d,i,c,f):f&&f.portalItem&&(Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(d)||Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__["i"])(d))||Object(_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["isBlobProtocol"])(d)||g)?U(this,p,o,d,i,c,f,e):i[c]=d}}}}function U(t,r,o,i,n,s,a,l){const m=Object(_uuid_js__WEBPACK_IMPORTED_MODULE_5__["generateUUID"])(),y=S(o,i,a),h=Object(_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["join"])(Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["get"])(l,"prefix"),m),d=`${h}.${Object(_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__["getResourceContentExtension"])(y)}`,g=a.portalItem.resourceFromPath(d);Object(_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["isBlobProtocol"])(i)&&a.resources.pendingOperations.push(b(i).then((t=>{g.path=`${h}.${Object(_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__["getResourceContentExtension"])(t)}`,n[s]=g.itemRelativeUrl})).catch((()=>{}))),O(t,r,g,y,a.resources.toAdd),n[s]=g.itemRelativeUrl}function j(t,r,e,o,i,n,s,u){const p=s.portalItem.resourceFromPath(o),c=S(e,o,s);Object(_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__["getResourceContentExtension"])(c)===Object(_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["getPathExtension"])(p.path)?(O(t,r,p,c,s.resources.toUpdate),i[n]=o):U(t,r,e,o,i,n,s,u)}function I(t,r,e,o){o.resources.toKeep.push({resource:o.portalItem.resourceFromPath(t)}),r[e]=t}function O(t,r,e,o,i){i.push({resource:e,content:o,finish:e=>{R(t,r,e)}})}function S(t,r,e){return"string"==typeof t?{url:r}:new Blob([JSON.stringify(t.toJSON(e))],{type:"application/json"})}async function b(t){const r=(await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../../request.js */ "Lqtk"))).default,{data:e}=await r(t,{responseType:"blob"});return e}function P(t){return Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t)?null:"string"==typeof t?t:t.url}function R(t,r,e){"string"==typeof t[r]?t[r]=e.url:t[r].url=e.url}


/***/ }),

/***/ "yvy3":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/IntegratedMeshLayer.js ***!
  \*****************************************************************/
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
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../chunks/persistableUrlUtils.js */ "/PL2");
/* harmony import */ var _core_accessorSupport_decorators_persistable_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/decorators/persistable.js */ "xvdR");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/Handles.js */ "r0DZ");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/watchUtils.js */ "N5XI");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./support/commonProperties.js */ "IvSi");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "uRH/");
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ "PVlI");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "WmKv");
/* harmony import */ var _support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./support/I3SLayerDefinitions.js */ "XTTP");
/* harmony import */ var _mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/SceneService.js */ "lq5k");
/* harmony import */ var _support_SceneModifications_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./support/SceneModifications.js */ "wigO");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let I=class extends(Object(_mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_22__["SceneService"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_18__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_17__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_19__["PortalLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_20__["ScaleRangeLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_14__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_13__["default"]))))))){constructor(...e){super(...e),this.handles=new _core_Handles_js__WEBPACK_IMPORTED_MODULE_12__["default"],this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add(Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_15__["on"])(this,"modifications","after-changes",(()=>this.modifications=this.modifications),null,null,!0))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__["f"])(e,r),context:r}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const o=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["get"])(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(i){Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["throwIfAbortError"])(i)}if(await this._fetchService(o),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this._modificationsSource)){const t=await _support_SceneModifications_js__WEBPACK_IMPORTED_MODULE_23__["default"].fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,o)}beforeSave(){if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,readOnly:!0})],I.prototype,"geometryType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:["show","hide"]})],I.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:["IntegratedMeshLayer"]})],I.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{read:!1},readOnly:!0})],I.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_21__["I3SNodePageDefinition"],readOnly:!0})],I.prototype,"nodePages",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_21__["I3SMaterialDefinition"]],readOnly:!0})],I.prototype,"materialDefinitions",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_21__["I3STextureSetDefinition"]],readOnly:!0})],I.prototype,"textureSetDefinitions",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_21__["I3SGeometryDefinition"]],readOnly:!0})],I.prototype,"geometryDefinitions",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0})],I.prototype,"serviceUpdateTimeStamp",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_support_SceneModifications_js__WEBPACK_IMPORTED_MODULE_23__["default"]}),Object(_core_accessorSupport_decorators_persistable_js__WEBPACK_IMPORTED_MODULE_10__["persistable"])({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],I.prototype,"modifications",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])(["web-scene","portal-item"],"modifications")],I.prototype,"readModifications",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_16__["elevationInfo"])],I.prototype,"elevationInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],I.prototype,"path",void 0),I=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.IntegratedMeshLayer")],I);var O=I;/* harmony default export */ __webpack_exports__["default"] = (O);


/***/ })

}]);
//# sourceMappingURL=IntegratedMeshLayer-js.js.map