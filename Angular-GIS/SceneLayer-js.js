(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SceneLayer-js"],{

/***/ "0yFX":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/SceneLayer.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/utils.js */ "TDcG");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./support/fieldUtils.js */ "wdpY");
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../PopupTemplate.js */ "SFah");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/watchUtils.js */ "N5XI");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support/commonProperties.js */ "IvSi");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "uRH/");
/* harmony import */ var _renderers_Renderer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../renderers/Renderer.js */ "ZnuT");
/* harmony import */ var _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../renderers/ClassBreaksRenderer.js */ "tCO6");
/* harmony import */ var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../renderers/UniqueValueRenderer.js */ "2gBT");
/* harmony import */ var _renderers_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../renderers/DictionaryRenderer.js */ "JhoD");
/* harmony import */ var _renderers_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../renderers/DotDensityRenderer.js */ "tI3Y");
/* harmony import */ var _renderers_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../renderers/HeatmapRenderer.js */ "R4xK");
/* harmony import */ var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../renderers/SimpleRenderer.js */ "/1dM");
/* harmony import */ var _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../renderers/support/types.js */ "XNvV");
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../renderers/support/jsonUtils.js */ "+Xal");
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./support/FieldsIndex.js */ "gLc9");
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ "PVlI");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "WmKv");
/* harmony import */ var _support_FeatureReduction_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./support/FeatureReduction.js */ "7MGP");
/* harmony import */ var _support_LabelClass_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./support/LabelClass.js */ "wkZP");
/* harmony import */ var _support_FeatureReductionSelection_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./support/FeatureReductionSelection.js */ "kbDD");
/* harmony import */ var _support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./support/fieldProperties.js */ "L+uT");
/* harmony import */ var _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./support/labelingInfo.js */ "EOvV");
/* harmony import */ var _support_LayerFloorInfo_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./support/LayerFloorInfo.js */ "AMWc");
/* harmony import */ var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../renderers/support/styleUtils.js */ "YOx9");
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../support/popupUtils.js */ "9Ruv");
/* harmony import */ var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../tasks/support/Query.js */ "xk++");
/* harmony import */ var _support_capabilities_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./support/capabilities.js */ "fqtG");
/* harmony import */ var _support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./support/I3SLayerDefinitions.js */ "XTTP");
/* harmony import */ var _mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./mixins/SceneService.js */ "lq5k");
/* harmony import */ var _support_FetchAssociatedFeatureLayer_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./support/FetchAssociatedFeatureLayer.js */ "mYC1");
/* harmony import */ var _support_RangeInfo_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./support/RangeInfo.js */ "3Z6q");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const z=["3DObject","Point"],Z=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.layers.SceneLayer"),B=Object(_support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_38__["defineFieldProperties"])();let J=class extends(Object(_mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_46__["SceneService"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_32__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_33__["PortalLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_34__["ScaleRangeLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_18__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_17__["default"]))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.definitionExpression=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.cachedDrawingInfo={color:!1},this.editingEnabled=!0,this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){const t=this.getField(e);return t&&t.domain?t.domain:null}get fieldsIndex(){return new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_31__["default"](this.fields)}readNodePages(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_45__["I3SNodePageDefinition"].fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return X[this.profile]||"mesh"}set renderer(e){Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_14__["fixRendererFields"])(e,this.fields),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){const e=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:_support_capabilities_js__WEBPACK_IMPORTED_MODULE_44__["zeroCapabilities"],{query:r,editing:{supportsGlobalId:o,supportsRollbackOnFailure:s,supportsUploadWithItemId:i},data:{supportsZ:a,supportsM:n,isVersioned:p},operations:{supportsEditing:l,supportsUpdate:d}}=e,y=e.operations.supportsChangeTracking;return{query:r,editing:{supportsGlobalId:o,supportsRollbackOnFailure:s,supportsGeometryUpdate:!1,supportsUploadWithItemId:i},data:{supportsZ:a,supportsM:n,isVersioned:p},operations:{supportsEditing:l&&y,supportsAdd:!1,supportsDelete:!1,supportsUpdate:d&&y}}}get defaultPopupTemplate(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const r=t.store.profile;return null!=r&&H[r]?H[r]:(Z.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["throwIfAbortError"]).then((()=>this._fetchService(r))).then((()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,r),this._setAssociatedFeatureLayer(r)]))).then((()=>this._validateElevationInfo())).then((()=>this._applyAssociatedLayerOverrides())).then((()=>this._populateFieldUsageInfo())).then((()=>Object(_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_41__["loadStyleRenderer"])(this,{origin:"service"},r))).then((()=>Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_14__["fixRendererFields"])(this.renderer,this.fields)));return this.addResolvingPromise(o),Promise.resolve(this)}createQuery(){const e=new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_43__["default"];return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e&&e.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(Z.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_42__["createPopupTemplate"])(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(this.associatedLayer))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.statisticsInfo)if(o.name===r.name){const e=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["join"])(this.parsedUrl.path,o.href);return Object(_request_js__WEBPACK_IMPORTED_MODULE_16__["default"])(e,{query:{f:"json"},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(0,e)}async applyEdits(e,t){const o=await __webpack_require__.e(/*! import() | graphics-editingSupport-js */ "graphics-editingSupport-js").then(__webpack_require__.bind(null, /*! ./graphics/editingSupport.js */ "CJn3"));if(await this.load(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(this.associatedLayer))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"](`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),o.applyEdits(this,this.associatedLayer.source,e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&-1===z.indexOf(e.layerType))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});function t(e,t){let r=!1,o=!1;if(null==e)r=!0,o=!0;else{const s=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,o=s;break;case"vertex-reference-frame":r=!0,o=!s;break;default:r=!1}}if(!r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const r=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((t=>t.name===e.name))),o=!!(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some((t=>t&&e.name===t.name))),s={supportsLabelingInfo:r,supportsRenderer:r,supportsPopupTemplate:r||o,supportsLayerQuery:o};this._fieldUsageInfo[e.name]=s}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=Object(_core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_5__["getProperties"])(this);for(let r=0;r<e.length;r++){const o=e[r];this._buddyIsMoreImportant(o)&&(t.setDefaultOrigin(this.associatedLayer.originOf(o)),t.set(o,this.associatedLayer[o]),t.setDefaultOrigin("user"))}}async _setAssociatedFeatureLayer(e){if(-1===["mesh-pyramids","points"].indexOf(this.profile))return;const t=new _support_FetchAssociatedFeatureLayer_js__WEBPACK_IMPORTED_MODULE_47__["FetchAssociatedFeatureLayer"](this.parsedUrl,this.portalItem,e);try{this.associatedLayer=await t.fetch()}catch(r){Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["isAbortError"])(r)||this._logWarningOnPopupEnabled()}}_logWarningOnPopupEnabled(){Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_19__["whenValidOnce"])(this,["popupTemplate","popupEnabled"],(()=>this.popupEnabled&&null!=this.popupTemplate)).then((()=>()=>{const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?Z.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):Z.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}))}_buddyIsMoreImportant(e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(this.associatedLayer))return!1;const t=this.originIdOf(e),o=this.associatedLayer.originIdOf(e);return null!=o&&o<=2?null==t||t<2:null!=o&&o<=3&&(null==t||t<3)}_validateElevationInfo(){const e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"absolute-height"!==e.mode&&Z.warn(".elevationInfo=","Mesh scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&Z.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({types:{key:"type",base:_support_FeatureReduction_js__WEBPACK_IMPORTED_MODULE_35__["default"],typeMap:{selection:_support_FeatureReductionSelection_js__WEBPACK_IMPORTED_MODULE_37__["default"]}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],J.prototype,"featureReduction",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:[_support_RangeInfo_js__WEBPACK_IMPORTED_MODULE_48__["default"]],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],J.prototype,"rangeInfos",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({json:{read:!1}})],J.prototype,"associatedLayer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:["show","hide"]})],J.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:["ArcGISSceneServiceLayer"]})],J.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({json:{read:!1},readOnly:!0})],J.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({...B.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],J.prototype,"fields",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0})],J.prototype,"fieldsIndex",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:_support_LayerFloorInfo_js__WEBPACK_IMPORTED_MODULE_40__["default"],json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],J.prototype,"floorInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(B.outFields)],J.prototype,"outFields",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_45__["I3SNodePageDefinition"],readOnly:!0,json:{read:!1}})],J.prototype,"nodePages",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("service","nodePages",["nodePages","pointNodePages"])],J.prototype,"readNodePages",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:[_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_45__["I3SMaterialDefinition"]],readOnly:!0})],J.prototype,"materialDefinitions",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:[_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_45__["I3STextureSetDefinition"]],readOnly:!0})],J.prototype,"textureSetDefinitions",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:[_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_45__["I3SGeometryDefinition"]],readOnly:!0})],J.prototype,"geometryDefinitions",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0})],J.prototype,"serviceUpdateTimeStamp",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0})],J.prototype,"attributeStorageInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0})],J.prototype,"statisticsInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:!0}})],J.prototype,"definitionExpression",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],J.prototype,"path",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__["elevationInfo"])],J.prototype,"elevationInfo",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:String})],J.prototype,"geometryType",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__["labelsVisible"])],J.prototype,"labelsVisible",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:[_support_LabelClass_js__WEBPACK_IMPORTED_MODULE_36__["default"]],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:_support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_39__["reader"]},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:_support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_39__["reader"]},write:!0}})],J.prototype,"labelingInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__["legendEnabled"])],J.prototype,"legendEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__["opacityDrawingInfo"])],J.prototype,"opacity",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({types:_renderers_support_types_js__WEBPACK_IMPORTED_MODULE_29__["webSceneRendererTypes"],json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],J.prototype,"renderer",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({json:{read:!1}})],J.prototype,"cachedDrawingInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("service","cachedDrawingInfo")],J.prototype,"readCachedDrawingInfo",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0,json:{read:!1}})],J.prototype,"capabilities",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:Boolean,json:{read:!1}})],J.prototype,"editingEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__["popupEnabled"])],J.prototype,"popupEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_15__["default"],json:{name:"popupInfo",write:!0}})],J.prototype,"popupTemplate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0,json:{read:!1}})],J.prototype,"defaultPopupTemplate",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:String,json:{read:!1}})],J.prototype,"objectIdField",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("service","objectIdField",["objectIdField","fields"])],J.prototype,"readObjectIdField",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:String,json:{read:!1}})],J.prototype,"globalIdField",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("service","globalIdField",["globalIdField","fields"])],J.prototype,"readGlobalIdField",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0,type:String,json:{read:!1}})],J.prototype,"displayField",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:String,json:{read:!1}})],J.prototype,"profile",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("service","profile",["store.profile"])],J.prototype,"readProfile",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],J.prototype,"normalReferenceFrame",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__["screenSizePerspectiveEnabled"])],J.prototype,"screenSizePerspectiveEnabled",void 0),J=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.SceneLayer")],J);const H={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},X={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"};var Y=J;/* harmony default export */ __webpack_exports__["default"] = (Y);


/***/ }),

/***/ "3Z6q":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/RangeInfo.js ***!
  \***************************************************************/
/*! exports provided: default, RangeInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeInfo", function() { return s; });
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
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{read:!0,write:!0}})],s.prototype,"name",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{read:!0,write:!0}})],s.prototype,"field",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:[Number],json:{read:!0,write:!0}})],s.prototype,"currentRangeExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:[Number],json:{read:!0,write:!0}})],s.prototype,"fullRangeExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],s.prototype,"type",void 0),s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.RangeInfo")],s);var p=s;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ })

}]);
//# sourceMappingURL=SceneLayer-js.js.map