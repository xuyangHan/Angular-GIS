(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CSVLayer-js"],{

/***/ "Kn0e":
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/CSVLayer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../chunks/persistableUrlUtils.js */ "/PL2");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../geometry.js */ "4GrV");
/* harmony import */ var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tasks/support/Query.js */ "xk++");
/* harmony import */ var _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FeatureLayer.js */ "W9Wu");
/* harmony import */ var _graphics_data_QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./graphics/data/QueryEngineCapabilities.js */ "qUyK");
/* harmony import */ var _graphics_sources_CSVSource_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./graphics/sources/CSVSource.js */ "KoJe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let d=class extends _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_14__["default"]{constructor(...e){super(...e),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__["default"].WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get capabilities(){return{data:{supportsAttachment:!1,supportsM:!1,supportsZ:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsQuery:!0,supportsResizeAttachments:!1,supportsUpdate:!1},query:_graphics_data_QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_15__["queryCapabilities"],queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}set url(e){this._set("url",e)}async createGraphicsSource(e){const t=new _graphics_sources_CSVSource_js__WEBPACK_IMPORTED_MODULE_16__["default"]({delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.columnDelimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(_tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_13__["default"].from(e)||this.createQuery()))).then((e=>{if(e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(_tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_13__["default"].from(e)||this.createQuery())))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(_tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_13__["default"].from(e)||this.createQuery())))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(_tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_13__["default"].from(e)||this.createQuery())))}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0,dependsOn:["loaded"],json:{read:!1,write:!1}})],d.prototype,"capabilities",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],d.prototype,"delimiter",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],d.prototype,"editingEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],d.prototype,"fields",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Boolean,readOnly:!0})],d.prototype,"isTable",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],d.prototype,"readWebMapLabelsVisible",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],d.prototype,"latitudeField",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["show","hide"]})],d.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],d.prototype,"locationType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],d.prototype,"longitudeField",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["CSV"]})],d.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],d.prototype,"outFields",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],d.prototype,"path",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],d.prototype,"portalItem",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:!1},cast:null,type:_graphics_sources_CSVSource_js__WEBPACK_IMPORTED_MODULE_16__["default"],readOnly:!0})],d.prototype,"source",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:!1},value:"csv",readOnly:!0})],d.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__["r"],write:{isRequired:!0,ignoreOrigin:!0,writer:_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__["w"]}}})],d.prototype,"url",null),d=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.CSVLayer")],d);var c=d;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "KoJe":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/CSVSource.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../geometry.js */ "4GrV");
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/Loadable.js */ "bV/r");
/* harmony import */ var _core_workers_workers_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/workers/workers.js */ "36Co");
/* harmony import */ var _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../tasks/support/FeatureSet.js */ "8prj");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let u=class extends _core_Loadable_js__WEBPACK_IMPORTED_MODULE_12__["default"]{constructor(e){super(e),this.type="csv"}load(e){const t=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>_tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__["default"].fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}async _startWorker(e){this._connection=await Object(_core_workers_workers_js__WEBPACK_IMPORTED_MODULE_13__["open"])("CSVSourceWorker",{strategy:Object(_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("feature-layers-workers")?"dedicated":"local",signal:e});const o=await this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map((e=>e.toJSON())),latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:e});this.locationInfo=o.locationInfo,this.sourceJSON=o.layerDefinition,this.columnDelimiter=o.columnDelimiter}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],u.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],u.prototype,"url",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],u.prototype,"delimiter",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],u.prototype,"fields",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],u.prototype,"latitudeField",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],u.prototype,"longitudeField",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],u.prototype,"spatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],u.prototype,"timeInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],u.prototype,"locationInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],u.prototype,"sourceJSON",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],u.prototype,"columnDelimiter",void 0),u=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.graphics.sources.CSVSource")],u);var a=u;/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ }),

/***/ "qUyK":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/QueryEngineCapabilities.js ***!
  \***********************************************************************************/
/*! exports provided: queryCapabilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryCapabilities", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0};


/***/ })

}]);
//# sourceMappingURL=CSVLayer-js.js.map