(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["BuildingSceneLayer-js"],{

/***/ "6BQF":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/buildingSublayers/BuildingComponentSublayer.js ***!
  \*****************************************************************************************/
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
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "RI0u");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../PopupTemplate.js */ "SFah");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _core_Promise_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../core/Promise.js */ "+rMe");
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../core/Loadable.js */ "bV/r");
/* harmony import */ var _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../symbols/support/ElevationInfo.js */ "/RTN");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../support/commonProperties.js */ "IvSi");
/* harmony import */ var _renderers_Renderer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../renderers/Renderer.js */ "ZnuT");
/* harmony import */ var _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../renderers/ClassBreaksRenderer.js */ "tCO6");
/* harmony import */ var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../renderers/UniqueValueRenderer.js */ "2gBT");
/* harmony import */ var _renderers_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../renderers/DictionaryRenderer.js */ "JhoD");
/* harmony import */ var _renderers_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../renderers/DotDensityRenderer.js */ "tI3Y");
/* harmony import */ var _renderers_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../renderers/HeatmapRenderer.js */ "R4xK");
/* harmony import */ var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../renderers/SimpleRenderer.js */ "/1dM");
/* harmony import */ var _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../renderers/support/types.js */ "XNvV");
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../renderers/support/jsonUtils.js */ "+Xal");
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../support/FieldsIndex.js */ "gLc9");
/* harmony import */ var _support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../support/fieldProperties.js */ "L+uT");
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../support/popupUtils.js */ "9Ruv");
/* harmony import */ var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../tasks/support/Query.js */ "xk++");
/* harmony import */ var _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../FeatureLayer.js */ "W9Wu");
/* harmony import */ var _BuildingSublayer_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./BuildingSublayer.js */ "Lk2K");
/* harmony import */ var _support_capabilities_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../support/capabilities.js */ "fqtG");
/* harmony import */ var _support_I3SIndexInfo_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../support/I3SIndexInfo.js */ "bjZF");
/* harmony import */ var _support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../support/I3SLayerDefinitions.js */ "XTTP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const P=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),E=Object(_support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_32__["defineFieldProperties"])();let Q=class extends(_core_Loadable_js__WEBPACK_IMPORTED_MODULE_19__["default"].LoadableMixin(Object(_core_Promise_js__WEBPACK_IMPORTED_MODULE_18__["EsriPromiseMixin"])(_BuildingSublayer_js__WEBPACK_IMPORTED_MODULE_36__["default"]))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_31__["default"](this.fields)}readAssociatedLayer(e,t){const o=this.layer.associatedFeatureServiceItem,s=t.associatedLayerID;return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(o)&&"number"==typeof s?new _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_35__["default"]({portalItem:o,layerId:s}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.associatedLayer)?this.associatedLayer.displayField:null}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t).then((()=>{this.indexInfo=Object(_support_I3SIndexInfo_js__WEBPACK_IMPORTED_MODULE_38__["fetchIndexInfo"])(this.parsedUrl.path,this.rootNode,this.nodePages,P,t)}))),Promise.resolve(this)}createPopupTemplate(e){return Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_33__["createPopupTemplate"])(this,e)}async _fetchService(e){const r=(await Object(_request_js__WEBPACK_IMPORTED_MODULE_17__["default"])(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){const r=this.getField(e);return r&&r.domain?r.domain:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:_support_capabilities_js__WEBPACK_IMPORTED_MODULE_37__["zeroCapabilities"],{query:t,data:{supportsZ:o,supportsM:s,isVersioned:i}}=e;return{query:t,data:{supportsZ:o,supportsM:s,isVersioned:i}}}createQuery(){const e=new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_34__["default"];return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryExtent(e||this.createQuery(),r)))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryFeatureCount(e||this.createQuery(),r)))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryFeatures(e||this.createQuery(),r))).then((e=>{if(e&&e.features)for(const r of e.features)r.layer=this.layer,r.sourceLayer=this;return e}))}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryObjectIds(e||this.createQuery(),r)))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(this.associatedLayer))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_10__["default"]("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_10__["default"]("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0})],Q.prototype,"parsedUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_39__["I3SNodePageDefinition"],readOnly:!0})],Q.prototype,"nodePages",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_39__["I3SMaterialDefinition"]],readOnly:!0})],Q.prototype,"materialDefinitions",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_39__["I3STextureSetDefinition"]],readOnly:!0})],Q.prototype,"textureSetDefinitions",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_39__["I3SGeometryDefinition"]],readOnly:!0})],Q.prototype,"geometryDefinitions",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0})],Q.prototype,"serviceUpdateTimeStamp",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0})],Q.prototype,"store",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],Q.prototype,"rootNode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0})],Q.prototype,"attributeStorageInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(E.fields)],Q.prototype,"fields",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0})],Q.prototype,"fieldsIndex",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,type:_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_35__["default"]})],Q.prototype,"associatedLayer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service","associatedLayer",["associatedLayerID"])],Q.prototype,"readAssociatedLayer",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(E.outFields)],Q.prototype,"outFields",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,readOnly:!0})],Q.prototype,"objectIdField",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,type:String,json:{read:!1}})],Q.prototype,"displayField",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__["default"],aliasOf:"layer.fullExtent"})],Q.prototype,"fullExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__["default"],aliasOf:"layer.spatialReference"})],Q.prototype,"spatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,aliasOf:"layer.version"})],Q.prototype,"version",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,type:_symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_20__["default"],aliasOf:"layer.elevationInfo"})],Q.prototype,"elevationInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],Q.prototype,"minScale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],Q.prototype,"maxScale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:["hide","show"],json:{write:!0}})],Q.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({types:_renderers_support_types_js__WEBPACK_IMPORTED_MODULE_29__["webSceneRendererTypes"],json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],Q.prototype,"renderer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],Q.prototype,"definitionExpression",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__["popupEnabled"])],Q.prototype,"popupEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_16__["default"],json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],Q.prototype,"popupTemplate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],Q.prototype,"normalReferenceFrame",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,json:{read:!1}})],Q.prototype,"defaultPopupTemplate",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{write:!1}}),Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__["enumeration"])(new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({"3DObject":"3d-object",Point:"point"}))],Q.prototype,"layerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],Q.prototype,"geometryType",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],Q.prototype,"profile",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,json:{read:!1}})],Q.prototype,"capabilities",null),Q=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__["subclass"])("esri.layers.buildingSublayers.BuildingComponentSublayer")],Q);var R=Q;/* harmony default export */ __webpack_exports__["default"] = (R);


/***/ }),

/***/ "9MMG":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfoBlock.js ***!
  \**************************************************************************************/
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
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/Collection.js */ "LE9a");
/* harmony import */ var _BuildingFilterAuthoringInfoType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BuildingFilterAuthoringInfoType.js */ "V6mo");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var c;const l=_core_Collection_js__WEBPACK_IMPORTED_MODULE_11__["default"].ofType(_BuildingFilterAuthoringInfoType_js__WEBPACK_IMPORTED_MODULE_12__["default"]);let m=c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{clone(){return new c({filterTypes:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.filterTypes)})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:l,json:{write:!0}})],m.prototype,"filterTypes",void 0),m=c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.BuildingFilterAuthoringInfoBlock")],m);var u=m;/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ }),

/***/ "BG+7":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterModeXRay.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BuildingFilterMode.js */ "fbJh");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var t;let p=t=class extends _BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(){super(...arguments),this.type="x-ray"}clone(){return new t}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["x-ray"],readOnly:!0,json:{write:!0}})],p.prototype,"type",void 0),p=t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.BuildingFilterModeXRay")],p);var i=p;/* harmony default export */ __webpack_exports__["default"] = (i);


/***/ }),

/***/ "LQ9q":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingSummaryStatistics.js ***!
  \*******************************************************************************/
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
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _core_Promise_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/Promise.js */ "+rMe");
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/Loadable.js */ "bV/r");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const u=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.layers.support.BuildingSummaryStatistics");let n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String})],n.prototype,"fieldName",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String})],n.prototype,"modelName",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String})],n.prototype,"label",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number})],n.prototype,"min",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number})],n.prototype,"max",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{read:r=>Array.isArray(r)&&(r.every((r=>"string"==typeof r))||r.every((r=>"number"==typeof r)))?r.slice():null}})],n.prototype,"mostFrequentValues",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[Number]})],n.prototype,"subLayerIds",void 0),n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.BuildingFieldStatistics")],n);let m=class extends(_core_Loadable_js__WEBPACK_IMPORTED_MODULE_13__["default"].LoadableMixin(Object(_core_Promise_js__WEBPACK_IMPORTED_MODULE_12__["EsriPromiseMixin"])(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(u.error("building summary statistics are not loaded"),null)}load(r){const t=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(r)?r.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(r){const e=(await Object(_request_js__WEBPACK_IMPORTED_MODULE_11__["default"])(this.url,{query:{f:"json"},responseType:"json",signal:r})).data;this.read(e,{origin:"service"})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({constructOnly:!0,type:String})],m.prototype,"url",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,type:[n],json:{read:{source:"summary"}}})],m.prototype,"fields",null),m=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.BuildingSummaryStatistics")],m);var c=m;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "Lk2K":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/buildingSublayers/BuildingSublayer.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_Identifiable_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/Identifiable.js */ "pdg3");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../support/commonProperties.js */ "IvSi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let l=class extends(Object(_core_Identifiable_js__WEBPACK_IMPORTED_MODULE_10__["IdentifiableMixin"])(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_11__["MultiOriginJSONSupport"])){constructor(r){super(r),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(r,o){return"string"==typeof o.alias?o.alias:"string"==typeof o.name?o.name:""}readIdOnlyOnce(r){return-1!==this.id?this.id:"number"==typeof r?r:void 0}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],l.prototype,"title",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("service","title",["alias","name"])],l.prototype,"readTitle",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__["Integer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],l.prototype,"id",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("service","id")],l.prototype,"readIdOnlyOnce",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(Object(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_12__["readOnlyService"])(String))],l.prototype,"modelName",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(Object(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_12__["readOnlyService"])(Boolean))],l.prototype,"isEmpty",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Boolean,json:{name:"visibility",write:!0}})],l.prototype,"visible",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number,json:{write:!0}})],l.prototype,"opacity",void 0),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.buildingSublayers.BuildingSublayer")],l);var n=l;/* harmony default export */ __webpack_exports__["default"] = (n);


/***/ }),

/***/ "MAqE":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterModeSolid.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BuildingFilterMode.js */ "fbJh");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var t;let p=t=class extends _BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(){super(...arguments),this.type="solid"}clone(){return new t}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["solid"],readOnly:!0,json:{write:!0}})],p.prototype,"type",void 0),p=t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.BuildingFilterModeSolid")],p);var i=p;/* harmony default export */ __webpack_exports__["default"] = (i);


/***/ }),

/***/ "Qz9p":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/buildingSublayers/BuildingGroupSublayer.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Warning.js */ "ACjl");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/Collection.js */ "LE9a");
/* harmony import */ var _core_loadAll_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/loadAll.js */ "GFPt");
/* harmony import */ var _BuildingSublayer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BuildingSublayer.js */ "Lk2K");
/* harmony import */ var _BuildingComponentSublayer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BuildingComponentSublayer.js */ "6BQF");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p;const a={type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_10__["default"],readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:l}}},read:!1}};function l(r,e,s){if(r&&Array.isArray(r))return new _core_Collection_js__WEBPACK_IMPORTED_MODULE_10__["default"](r.map((r=>{const e=y(r);if(e){const o=new e;return o.read(r,s),o}s&&s.messages&&r&&s.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__["default"]("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(r.type||"unknown")+"' are not supported",{definition:r,context:s}))})))}let c=p=class extends _BuildingSublayer_js__WEBPACK_IMPORTED_MODULE_12__["default"]{constructor(r){super(r),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return Object(_core_loadAll_js__WEBPACK_IMPORTED_MODULE_11__["loadAllChildren"])(this,(r=>p.forEachSublayer(this.sublayers,(e=>{"building-group"!==e.type&&r(e)}))))}};function y(r){return"group"===r.layerType?c:_BuildingComponentSublayer_js__WEBPACK_IMPORTED_MODULE_13__["default"]}Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["hide","show","hide-children"],json:{write:!0}})],c.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(a)],c.prototype,"sublayers",void 0),c=p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.buildingSublayers.BuildingGroupSublayer")],c),function(r){function e(r,o){r.forEach((r=>{o(r),"building-group"===r.type&&e(r.sublayers,o)}))}r.sublayersProperty=a,r.readSublayers=l,r.forEachSublayer=e}(c||(c={}));var d=c;/* harmony default export */ __webpack_exports__["default"] = (d);


/***/ }),

/***/ "RuRd":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfoCheckbox.js ***!
  \*****************************************************************************************/
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
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/Collection.js */ "LE9a");
/* harmony import */ var _BuildingFilterAuthoringInfo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BuildingFilterAuthoringInfo.js */ "dWXJ");
/* harmony import */ var _BuildingFilterAuthoringInfoBlock_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BuildingFilterAuthoringInfoBlock.js */ "9MMG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var c;const l=_core_Collection_js__WEBPACK_IMPORTED_MODULE_10__["default"].ofType(_BuildingFilterAuthoringInfoBlock_js__WEBPACK_IMPORTED_MODULE_12__["default"]);let n=c=class extends _BuildingFilterAuthoringInfo_js__WEBPACK_IMPORTED_MODULE_11__["default"]{constructor(){super(...arguments),this.type="checkbox"}clone(){return new c({filterBlocks:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.filterBlocks)})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:["checkbox"]})],n.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:l,json:{write:!0}})],n.prototype,"filterBlocks",void 0),n=c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],n);var u=n;/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ }),

/***/ "TWTt":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/BuildingSceneLayer.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/lang.js */ "f/qv");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/Collection.js */ "LE9a");
/* harmony import */ var _core_loadAll_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/loadAll.js */ "GFPt");
/* harmony import */ var _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/CollectionFlattener.js */ "TRCY");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support/commonProperties.js */ "IvSi");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "uRH/");
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ "PVlI");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "WmKv");
/* harmony import */ var _buildingSublayers_BuildingComponentSublayer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./buildingSublayers/BuildingComponentSublayer.js */ "6BQF");
/* harmony import */ var _buildingSublayers_BuildingGroupSublayer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./buildingSublayers/BuildingGroupSublayer.js */ "Qz9p");
/* harmony import */ var _mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mixins/SceneService.js */ "lq5k");
/* harmony import */ var _support_BuildingFilter_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./support/BuildingFilter.js */ "drKW");
/* harmony import */ var _support_BuildingSummaryStatistics_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./support/BuildingSummaryStatistics.js */ "LQ9q");
/* harmony import */ var _support_FetchAssociatedFeatureLayer_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./support/FetchAssociatedFeatureLayer.js */ "mYC1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const B=_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.layers.BuildingSceneLayer"),E=_core_Collection_js__WEBPACK_IMPORTED_MODULE_15__["default"].ofType(_support_BuildingFilter_js__WEBPACK_IMPORTED_MODULE_28__["default"]),_=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(_buildingSublayers_BuildingGroupSublayer_js__WEBPACK_IMPORTED_MODULE_26__["default"].sublayersProperty);_.json.origins["web-scene"]={type:[_buildingSublayers_BuildingComponentSublayer_js__WEBPACK_IMPORTED_MODULE_25__["default"]],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},_.json.origins["portal-item"]={type:[_buildingSublayers_BuildingComponentSublayer_js__WEBPACK_IMPORTED_MODULE_25__["default"]],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let A=class extends(Object(_mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_27__["SceneService"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_22__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_23__["PortalLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_24__["ScaleRangeLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_19__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_18__["default"]))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_17__["default"]({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new E,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,r,t){const s=_buildingSublayers_BuildingGroupSublayer_js__WEBPACK_IMPORTED_MODULE_26__["default"].readSublayers(e,r,t);return _buildingSublayers_BuildingGroupSublayer_js__WEBPACK_IMPORTED_MODULE_26__["default"].forEachSublayer(s,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(s,this.sublayerOverrides),this.sublayerOverrides=null),s}applySublayerOverrides(e,{overrides:r,context:t}){_buildingSublayers_BuildingGroupSublayer_js__WEBPACK_IMPORTED_MODULE_26__["default"].forEachSublayer(e,(e=>e.read(r.get(e.id),t)))}readSublayerOverrides(e,r){const t=new Map;for(const s of e)null!=s&&"object"==typeof s&&"number"==typeof s.id?t.set(s.id,s):r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:s}));return{overrides:t,context:r}}writeSublayerOverrides(e,r,t){const s=[];_buildingSublayers_BuildingGroupSublayer_js__WEBPACK_IMPORTED_MODULE_26__["default"].forEachSublayer(this.sublayers,(e=>{const r=e.write({},t);Object.keys(r).length>1&&s.push(r)})),s.length>0&&(r.sublayers=s)}writeUnappliedOverrides(e,t){t.sublayers=[],e.overrides.forEach((e=>{t.sublayers.push(Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(e))}))}write(e,r){return e=super.write(e,r),!r||"web-scene"!==r.origin&&"portal-item"!==r.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&("web-scene"===r.origin||"portal-item"===r.origin)&&null!=e&&Array.isArray(e.sublayers)){const t=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,t):this.sublayerOverrides=t}}readSummaryStatistics(e,r){if("string"==typeof r.statisticsHRef){const e=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["join"])(this.parsedUrl.path,r.statisticsHRef);return new _support_BuildingSummaryStatistics_js__WEBPACK_IMPORTED_MODULE_29__["default"]({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e)?e.signal:null,s=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["throwIfAbortError"]).then((()=>this._fetchService(r))).then((()=>this._fetchAssociatedFeatureService(r)));return this.addResolvingPromise(s),Promise.resolve(this)}loadAll(){return Object(_core_loadAll_js__WEBPACK_IMPORTED_MODULE_16__["loadAll"])(this,(e=>{_buildingSublayers_BuildingGroupSublayer_js__WEBPACK_IMPORTED_MODULE_26__["default"].forEachSublayer(this.sublayers,(r=>{"building-group"!==r.type&&e(r)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,r){return this._debouncedSaveOperations(1,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&B.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&B.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const r=new _support_FetchAssociatedFeatureLayer_js__WEBPACK_IMPORTED_MODULE_30__["FetchAssociatedFeatureLayer"](this.parsedUrl,this.portalItem,e);try{this.associatedFeatureServiceItem=await r.fetchPortalItem()}catch(t){B.warn("Associated feature service item could not be loaded",t)}}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:["BuildingSceneLayer"]})],A.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0})],A.prototype,"allSublayers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_)],A.prototype,"sublayers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("service","sublayers")],A.prototype,"readSublayers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:E,nonNullable:!0,json:{write:!0}})],A.prototype,"filters",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:String,json:{write:!0}})],A.prototype,"activeFilterId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0,type:_support_BuildingSummaryStatistics_js__WEBPACK_IMPORTED_MODULE_29__["default"]})],A.prototype,"summaryStatistics",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("summaryStatistics",["statisticsHRef"])],A.prototype,"readSummaryStatistics",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:[String],json:{read:!1}})],A.prototype,"outFields",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__["sceneLayerFullExtent"])],A.prototype,"fullExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:["show","hide","hide-children"]})],A.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(Object(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__["readOnlyService"])(_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__["default"]))],A.prototype,"spatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__["elevationInfo"])],A.prototype,"elevationInfo",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({json:{read:!1},readOnly:!0})],A.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],A.prototype,"associatedFeatureServiceItem",void 0),A=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.BuildingSceneLayer")],A);var P=A;/* harmony default export */ __webpack_exports__["default"] = (P);


/***/ }),

/***/ "V6mo":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfoType.js ***!
  \*************************************************************************************/
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
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var p;let i=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new p({filterType:this.filterType,filterValues:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.filterValues)})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{write:!0}})],i.prototype,"filterType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[String],json:{write:!0}})],i.prototype,"filterValues",void 0),i=p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.BuildingFilterAuthoringInfoType")],i);var l=i;/* harmony default export */ __webpack_exports__["default"] = (l);


/***/ }),

/***/ "bBuK":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterBlock.js ***!
  \*************************************************************************/
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
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BuildingFilterMode.js */ "fbJh");
/* harmony import */ var _BuildingFilterModeSolid_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BuildingFilterModeSolid.js */ "MAqE");
/* harmony import */ var _BuildingFilterModeWireFrame_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BuildingFilterModeWireFrame.js */ "n095");
/* harmony import */ var _BuildingFilterModeXRay_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./BuildingFilterModeXRay.js */ "BG+7");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var a;const d={nonNullable:!0,types:{key:"type",base:_BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_11__["default"],typeMap:{solid:_BuildingFilterModeSolid_js__WEBPACK_IMPORTED_MODULE_12__["default"],"wire-frame":_BuildingFilterModeWireFrame_js__WEBPACK_IMPORTED_MODULE_13__["default"],"x-ray":_BuildingFilterModeXRay_js__WEBPACK_IMPORTED_MODULE_14__["default"]}},json:{read:r=>{switch(r&&r.type){case"solid":return _BuildingFilterModeSolid_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromJSON(r);case"wireFrame":return _BuildingFilterModeWireFrame_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromJSON(r);case"x-ray":return _BuildingFilterModeXRay_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromJSON(r);default:return}},write:{enabled:!0,isRequired:!0}}};let u=a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new _BuildingFilterModeSolid_js__WEBPACK_IMPORTED_MODULE_12__["default"],this.title=""}clone(){return new a({filterExpression:this.filterExpression,filterMode:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.filterMode),title:this.title})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"filterExpression",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(d)],u.prototype,"filterMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"title",void 0),u=a=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.BuildingFilterBlock")],u);var c=u;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "dWXJ":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfo.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let e=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]{constructor(){super(...arguments),this.type=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,readOnly:!0,json:{write:!0}})],e.prototype,"type",void 0),e=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.BuildingFilterAuthoringInfo")],e);var p=e;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "drKW":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingFilter.js ***!
  \********************************************************************/
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
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/Collection.js */ "LE9a");
/* harmony import */ var _BuildingFilterAuthoringInfo_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BuildingFilterAuthoringInfo.js */ "dWXJ");
/* harmony import */ var _BuildingFilterAuthoringInfoCheckbox_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BuildingFilterAuthoringInfoCheckbox.js */ "RuRd");
/* harmony import */ var _BuildingFilterBlock_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./BuildingFilterBlock.js */ "bBuK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var u;const d=_core_Collection_js__WEBPACK_IMPORTED_MODULE_11__["default"].ofType(_BuildingFilterBlock_js__WEBPACK_IMPORTED_MODULE_14__["default"]);let m=u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Object(_core_uuid_js__WEBPACK_IMPORTED_MODULE_8__["generateUUID"])(),this.name=null}clone(){return new u({description:this.description,filterBlocks:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.filterAuthoringInfo)})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{write:!0}})],m.prototype,"description",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:d,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"filterBlocks",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({types:{key:"type",base:_BuildingFilterAuthoringInfo_js__WEBPACK_IMPORTED_MODULE_12__["default"],typeMap:{checkbox:_BuildingFilterAuthoringInfoCheckbox_js__WEBPACK_IMPORTED_MODULE_13__["default"]}},json:{read:r=>{switch(r&&r.type){case"checkbox":return _BuildingFilterAuthoringInfoCheckbox_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromJSON(r);default:return null}},write:!0}})],m.prototype,"filterAuthoringInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"id",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"name",void 0),m=u=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.BuildingFilter")],m);var a=m;/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ }),

/***/ "fbJh":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterMode.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]{};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0,json:{read:!1}})],t.prototype,"type",void 0),t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.BuildingFilterMode")],t);var p=t;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "n095":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterModeWireFrame.js ***!
  \*********************************************************************************/
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
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "RI0u");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _symbols_edges_utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../symbols/edges/utils.js */ "9quj");
/* harmony import */ var _BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BuildingFilterMode.js */ "fbJh");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var c;let m=c=class extends _BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_12__["default"]{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new c({edges:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.edges)})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({wireFrame:"wire-frame"})],m.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_symbols_edges_utils_js__WEBPACK_IMPORTED_MODULE_11__["symbol3dEdgesProperty"])],m.prototype,"edges",void 0),m=c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.support.BuildingFilterModeWireFrame")],m);var a=m;/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ })

}]);
//# sourceMappingURL=BuildingSceneLayer-js.js.map