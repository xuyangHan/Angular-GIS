(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasks-PrintTask-js"],{

/***/ "/k1A":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/MapImage.js ***!
  \**************************************************************/
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
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../geometry/Extent.js */ "OvF4");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]{constructor(){super(...arguments),this.extent=null,this.height=null,this.href=null,this.opacity=1,this.rotation=0,this.scale=null,this.visible=!0,this.width=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__["default"]})],p.prototype,"extent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],p.prototype,"height",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],p.prototype,"href",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],p.prototype,"opacity",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],p.prototype,"rotation",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],p.prototype,"scale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],p.prototype,"visible",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],p.prototype,"width",void 0),p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layer.support.MapImage")],p);var i=p;/* harmony default export */ __webpack_exports__["default"] = (i);


/***/ }),

/***/ "3AG9":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/support/RasterData.js ***!
  \***************************************************************/
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
let e=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]{constructor(r){super(r),this.format=null,this.itemId=null,this.url=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],e.prototype,"format",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:{source:"itemID"},write:{target:"itemID"}}})],e.prototype,"itemId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],e.prototype,"url",void 0),e=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri/tasks/support/RasterData")],e);var p=e;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "9XlO":
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/PrintTask.js ***!
  \******************************************************/
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
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../geometry/Polygon.js */ "Ehki");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/screenUtils.js */ "qRWG");
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../kernel.js */ "975N");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../renderers/visualVariables/support/visualVariableUtils.js */ "0pea");
/* harmony import */ var _support_Query_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./support/Query.js */ "xk++");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Task.js */ "kglp");
/* harmony import */ var _Geoprocessor_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Geoprocessor.js */ "LE+W");
/* harmony import */ var _support_fileFormat_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support/fileFormat.js */ "Pq/a");
/* harmony import */ var _support_layoutTemplate_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./support/layoutTemplate.js */ "Vd7i");
/* harmony import */ var _support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./support/printTaskUtils.js */ "Oxsg");
/* harmony import */ var _support_PrintTemplate_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./support/PrintTemplate.js */ "yvFI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const $={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},q=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),B=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),K=new _support_Query_js__WEBPACK_IMPORTED_MODULE_17__["default"]({returnGeometry:!0});function Q(e){return e&&(e.path||"image/svg+xml"===e.contentType||e.url&&e.url.endsWith(".svg"))}let H=class extends _Task_js__WEBPACK_IMPORTED_MODULE_18__["default"]{constructor(...e){super(...e),this._ssExtent=null,this._legendLayers=[],this._legendLayerNameMap={},this._gpServerUrl=null,this._cimVersion=null,this._is11xService=!1,this._gpMetadata=null,this.updateDelay=1e3}get _geoprocessor(){return new _Geoprocessor_js__WEBPACK_IMPORTED_MODULE_19__["default"]({url:this.url})}get mode(){return this._gpMetadata&&this._gpMetadata.executionType?B.fromJSON(this._gpMetadata.executionType):"sync"}execute(e,t){let r=this.url;const i=r.lastIndexOf("/GPServer/");return i>0&&(r=r.slice(0,i+9)),Promise.resolve().then((()=>this._gpServerUrl===r?{data:this._gpMetadata}:(this._gpServerUrl=r,Object(_request_js__WEBPACK_IMPORTED_MODULE_15__["default"])(r,{query:{f:"json"}})))).then((t=>(this._gpMetadata=t.data,this._cimVersion=this._gpMetadata.cimVersion,this._is11xService=!!this._cimVersion,this._getGpPrintParams(e)))).then((e=>{const r=e=>"sync"===this.mode?e.results&&e.results[0]&&e.results[0].value:this._geoprocessor.getResultData(e.jobId,"Output_File",t).then((e=>e.value));return"async"===this.mode?this._geoprocessor.submitJob(e,t).then((e=>this._geoprocessor.waitForJobCompletion(e.jobId,{interval:this.updateDelay}).then(r))):this._geoprocessor.execute(e,t).then(r)}))}async _createOperationalLayers(e,t){const r=[],i={layerView:null,printTemplate:t,view:e};let a=0;t.scalePreserved&&(a=t.outScale||e.scale);const s=Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["getVisibleLayerViews"])(e,a);for(const n of s){const e=n.layer;if(!e.loaded||Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["isGroupLayer"])(e))continue;let t;i.layerView=n,t=Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["isBingMapsLayer"])(e)?this._createBingMapsLayerJSON(e):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["isCSVLayer"])(e)?await this._createCSVLayerJSON(e,i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["isFeatureLayer"])(e)?await this._createFeatureLayerJSON(e,i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["isGeoJSONLayer"])(e)?await this._createGeoJSONLayer(e,i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["isGraphicsLayer"])(e)?await this._createGraphicsLayerJSON(e,i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["isImageryLayer"])(e)?this._createImageryLayerJSON(e):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["isKMLLayer"])(e)?await this._createKMLLayerJSON(e,i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["isMapImageLayer"])(e)?this._createMapImageLayerJSON(e,i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["isMapNotesLayer"])(e)?await this._createMapNotesLayerJSON(i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["isOpenStreetMapLayer"])(e)?this._createOpenStreetMapLayerJSON():Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["isStreamLayer"])(e)?await this._createStreamLayerJSON(e,i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["isTileLayer"])(e)?this._createTileLayerJSON(e):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["isVectorTileLayer"])(e)?await this._createVectorTileLayerJSON(e,i):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["isWebTileLayer"])(e)?this._createWebTileLayerJSON(e):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["isWMSLayer"])(e)?this._createWMSLayerJSON(e):Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["isWMTSLayer"])(e)?this._createWMTSLayerJSON(e):await this._createScreenshotJSON(e,i),t&&(Array.isArray(t)?r.push(...t):(t.id=e.id,t.title=this._legendLayerNameMap[e.id]||e.title,t.opacity=e.opacity,t.minScale=e.minScale||0,t.maxScale=e.maxScale||0,r.push(t)))}if(a&&r.forEach((e=>{e.minScale=0,e.maxScale=0})),e.graphics&&e.graphics.length){const i=await this._createFeatureCollectionJSON(null,e.graphics,t);i&&r.push(i)}return r}_createBingMapsLayerJSON(e){return{culture:e.culture,key:e.key,type:"BingMaps"+("aerial"===e.style?"Aerial":"hybrid"===e.style?"Hybrid":"Road")}}async _createCSVLayerJSON(e,{layerView:t,printTemplate:r}){let i;if(this._legendLayers&&this._legendLayers.push({id:e.id}),!this._is11xService){const i=await this._getGraphics(t);return this._createFeatureCollectionJSON(e,i,r)}return i={type:"CSV"},e.write(i,{origin:"web-map"}),delete i.popupInfo,delete i.layerType,i.showLabels=r.showLabels&&e.labelsVisible,i}async _createFeatureCollectionJSON(e,t,r){let i;const a=Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["createPolygonLayer"])(),s=Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["createPolylineLayer"])(),n=Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["createPointLayer"])(),o=Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["createMultipointLayer"])(),c=Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["createPointLayer"])();if(c.layerDefinition.name="textLayer",delete c.layerDefinition.drawingInfo,e){if("esri.layers.FeatureLayer"===e.declaredClass||"esri.layers.StreamLayer"===e.declaredClass?a.layerDefinition.name=s.layerDefinition.name=n.layerDefinition.name=o.layerDefinition.name=this._legendLayerNameMap[e.id]||e.get("arcgisProps.title")||e.title:"esri.layers.GraphicsLayer"===e.declaredClass&&(t=e.graphics.items),e.renderer){const t=e.renderer.toJSON();a.layerDefinition.drawingInfo.renderer=t,s.layerDefinition.drawingInfo.renderer=t,n.layerDefinition.drawingInfo.renderer=t,o.layerDefinition.drawingInfo.renderer=t}if(r.showLabels&&e.labelsVisible&&"function"==typeof e.write){var u,y;const t=null==(u=e.write({},{origin:"web-map"}).layerDefinition)||null==(y=u.drawingInfo)?void 0:y.labelingInfo;t&&(i=!0,a.layerDefinition.drawingInfo.labelingInfo=t,s.layerDefinition.drawingInfo.labelingInfo=t,n.layerDefinition.drawingInfo.labelingInfo=t,o.layerDefinition.drawingInfo.labelingInfo=t)}}let p;null!=e&&e.renderer||i||(delete a.layerDefinition.drawingInfo,delete s.layerDefinition.drawingInfo,delete n.layerDefinition.drawingInfo,delete o.layerDefinition.drawingInfo);const m=e&&e.fields,d=e&&e.renderer;if(m&&d&&"function"==typeof d.collectRequiredFields){const e=new Set;await d.collectRequiredFields(e,m),p=Array.from(e)}if(m){const e=m.map((e=>e.toJSON()));a.layerDefinition.fields=e,s.layerDefinition.fields=e,n.layerDefinition.fields=e,o.layerDefinition.fields=e}const h=t&&t.length;let f;for(let S=0;S<h;S++){const i=t[S]||t.getItemAt(S);if(!1===i.visible||!i.geometry)continue;if(f=i.toJSON(),f.hasOwnProperty("popupTemplate")&&delete f.popupTemplate,f.geometry&&f.geometry.z&&delete f.geometry.z,f.symbol&&f.symbol.outline&&"esriCLS"===f.symbol.outline.type&&!this._is11xService)continue;!this._is11xService&&f.symbol&&f.symbol.outline&&f.symbol.outline.color&&f.symbol.outline.color[3]&&(f.symbol.outline.color[3]=255);const u=e&&e.renderer&&("valueExpression"in e.renderer&&e.renderer.valueExpression||"hasVisualVariables"in e.renderer&&e.renderer.hasVisualVariables());if(!f.symbol&&e&&e.renderer&&u&&!this._is11xService){const t=e.renderer,r=await t.getSymbolAsync(i);if(!r)continue;f.symbol=r.toJSON(),"hasVisualVariables"in t&&t.hasVisualVariables()&&Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["applyVisualVariables"])(f.symbol,{renderer:t,graphic:i,symbol:r})}if(f.symbol&&(f.symbol.angle||delete f.symbol.angle,Q(f.symbol)?f.symbol=await this._convertSvgToPictureMarkerSymbolJson(f.symbol):f.symbol.text&&delete f.attributes),(!r||!r.forceFeatureAttributes)&&p&&p.length){const e={};p.forEach((t=>{f.attributes&&f.attributes.hasOwnProperty(t)&&(e[t]=f.attributes[t])})),f.attributes=e}"polygon"===i.geometry.type?a.featureSet.features.push(f):"polyline"===i.geometry.type?s.featureSet.features.push(f):"point"===i.geometry.type?f.symbol&&f.symbol.text?c.featureSet.features.push(f):n.featureSet.features.push(f):"multipoint"===i.geometry.type?o.featureSet.features.push(f):"extent"===i.geometry.type&&(f.geometry=_geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromExtent(i.geometry).toJSON(),a.featureSet.features.push(f))}const g=[a,s,o,n,c].filter((e=>e.featureSet.features.length>0));for(const l of g){const e=l.featureSet.features.every((e=>e.symbol));!e||r&&r.forceFeatureAttributes||l.featureSet.features.forEach((e=>{delete e.attributes})),e&&delete l.layerDefinition.drawingInfo,l.layerDefinition.drawingInfo&&l.layerDefinition.drawingInfo.renderer&&await this._convertSvgRenderer(l.layerDefinition.drawingInfo.renderer)}return g.length?{featureCollection:{layers:g},showLabels:i}:null}async _createFeatureLayerJSON(e,t){var r,i;let a;this._legendLayers&&this._legendLayers.push({id:e.id});const s=e.renderer;if(e.featureReduction||s&&"dot-density"===s.type&&(!this._is11xService||parseFloat(this._cimVersion)<2.6))return this._createScreenshotJSON(e,t);const{layerView:n,printTemplate:o,view:l}=t,c=s&&("valueExpression"in s&&s.valueExpression||"hasVisualVariables"in s&&s.hasVisualVariables()),u="feature-layer"!==(null==(r=e.source)?void 0:r.type)&&"ogc-feature"!==(null==(i=e.source)?void 0:i.type);if(!this._is11xService&&c||e.featureReduction||u||!s||"field"in s&&null!=s.field&&("string"!=typeof s.field||!e.getField(s.field))){const t=await this._getGraphics(n);a=await this._createFeatureCollectionJSON(e,t,o)}else{var y,p;if(a={id:(m=e.write()).id,title:m.title,opacity:m.opacity,minScale:m.minScale,maxScale:m.maxScale,url:m.url,layerDefinition:m.layerDefinition},a.showLabels=o.showLabels&&e.labelsVisible,this._setURLandToken(a,e),null!=(y=a.layerDefinition)&&null!=(p=y.drawingInfo)&&p.renderer&&(delete a.layerDefinition.minScale,delete a.layerDefinition.maxScale,await this._convertSvgRenderer(a.layerDefinition.drawingInfo.renderer),"visualVariables"in s&&s.visualVariables&&s.visualVariables[0])){const e=s.visualVariables[0];if("size"===e.type&&e.maxSize&&"number"!=typeof e.maxSize&&e.minSize&&"number"!=typeof e.minSize){const t=Object(_renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_16__["getSizeRangeAtScale"])(e,l.scale);a.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=t.minSize,a.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=t.maxSize}}}var m;return a}async _createGeoJSONLayer(e,{layerView:t,printTemplate:r}){this._legendLayers&&this._legendLayers.push({id:e.id});const i=await this._getGraphics(t);return this._createFeatureCollectionJSON(e,i,r)}async _createGraphicsLayerJSON(e,{printTemplate:t}){return this._createFeatureCollectionJSON(e,null,t)}_createImageryLayerJSON(e){this._legendLayers&&this._legendLayers.push({id:e.id});const t={bandIds:e.bandIds,compressionQuality:e.compressionQuality,format:e.format,interpolation:e.interpolation};if((e.mosaicRule||e.definitionExpression)&&(t.mosaicRule=e.exportImageServiceParameters.mosaicRule.toJSON()),e.renderingRule||e.renderer)if(this._is11xService)e.renderingRule&&(t.renderingRule=e.renderingRule.toJSON()),e.renderer&&(t.layerDefinition=t.layerDefinition||{},t.layerDefinition.drawingInfo=t.layerDefinition.drawingInfo||{},t.layerDefinition.drawingInfo.renderer=e.renderer.toJSON());else{const r=e.exportImageServiceParameters.combineRendererWithRenderingRule();r&&(t.renderingRule=r.toJSON())}return this._setURLandToken(t,e),t}async _createKMLLayerJSON(e,t){const r=t.printTemplate;if(this._is11xService){const t={type:"kml"};return e.write(t,{origin:"web-map"}),delete t.layerType,t.url=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["normalize"])(e.url),t}{const i=[],a=t.layerView;a.allVisibleMapImages.forEach(((t,r)=>{const a={id:`${e.id}_image${r}`,type:"image",title:e.id,minScale:e.minScale||0,maxScale:e.maxScale||0,opacity:e.opacity,extent:t.extent};"data:image/png;base64,"===t.href.substr(0,22)?a.imageData=t.href.substr(22):a.url=t.href,i.push(a)}));const s=[...a.allVisiblePoints.items,...a.allVisiblePolylines.items,...a.allVisiblePolygons.items],n={id:e.id,...await this._createFeatureCollectionJSON(null,s,r)};return i.push(n),i}}_createMapImageLayerJSON(e,{view:t}){let r;const i={id:e.id,subLayerIds:[]};let a=[];const s=t.scale,n=e=>{const t=0===s,r=0===e.minScale||s<=e.minScale,o=0===e.maxScale||s>=e.maxScale;if(e.visible&&(t||r&&o))if(e.sublayers)e.sublayers.forEach(n);else{const t=e.toExportImageJSON(),r={id:e.id,name:e.title,layerDefinition:{drawingInfo:t.drawingInfo,definitionExpression:t.definitionExpression,source:t.source}};a.unshift(r),i.subLayerIds.push(e.id)}};return e.sublayers&&e.sublayers.forEach(n),a.length&&(a=a.map((({id:e,name:t,layerDefinition:r})=>({id:e,name:t,layerDefinition:r}))),r={layers:a,visibleLayers:e.capabilities.exportMap.supportsDynamicLayers?void 0:i.subLayerIds},this._setURLandToken(r,e),this._legendLayers.push(i)),r}async _createMapNotesLayerJSON({layerView:e,printTemplate:r}){const i=[],a=e.layer;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(a.featureCollections))for(const t of a.featureCollections){const e=await this._createFeatureCollectionJSON(t,t.source,r);e&&i.push(...e.featureCollection.layers)}else if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(a.sublayers))for(const t of a.sublayers){const e=await this._createFeatureCollectionJSON(null,t.graphics,r);e&&i.push(...e.featureCollection.layers)}return{featureCollection:{layers:i}}}_createOpenStreetMapLayerJSON(){return{type:"OpenStreetMap"}}async _createScreenshotJSON(e,{printTemplate:t,view:r}){const i={type:"image"},a={format:"png",ignoreBackground:!0,layers:[e],rotation:0},s=this._ssExtent||r.extent.clone();let n=96,l=!0,u=!0;if(t.exportOptions){const e=t.exportOptions;e.dpi>0&&(n=e.dpi),e.width>0&&(l=e.width%2==r.width%2),e.height>0&&(u=e.height%2==r.height%2)}if("map-only"===t.layout&&t.scalePreserved&&(!t.outScale||t.outScale===r.scale)&&96===n&&(!l||!u)&&(a.area={x:0,y:0,width:r.width,height:r.height},l||(a.area.width-=1),u||(a.area.height-=1),!this._ssExtent)){const e=r.toMap(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__["createScreenPoint"])(a.area.width,a.area.height));s.ymin=e.y,s.xmax=e.x,this._ssExtent=s}i.extent=s.clone()._normalize(!0).toJSON();const y=await r.takeScreenshot(a),p=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["dataComponents"])(y.dataUrl);return i.imageData=p.data,i}async _createStreamLayerJSON(e,{layerView:t,printTemplate:r}){this._legendLayers&&this._legendLayers.push({id:e.id});const i=await this._getGraphics(t);return this._createFeatureCollectionJSON(e,i,r)}_createTileLayerJSON(e){const t={customParameters:e.customParameters};return this._setURLandToken(t,e),t}async _createVectorTileLayerJSON(e,t){if(this._is11xService&&e.serviceUrl&&e.styleUrl){const t=_kernel_js__WEBPACK_IMPORTED_MODULE_14__["id"]&&_kernel_js__WEBPACK_IMPORTED_MODULE_14__["id"].findCredential(e.styleUrl),r=_kernel_js__WEBPACK_IMPORTED_MODULE_14__["id"]&&_kernel_js__WEBPACK_IMPORTED_MODULE_14__["id"].findCredential(e.serviceUrl);if(!t&&!r||"2.1.0"!==this._cimVersion){const i={type:"VectorTileLayer"};return i.styleUrl=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["normalize"])(e.styleUrl),t&&(i.token=t.token),r&&r.token!==i.token&&(i.additionalTokens=[{url:e.serviceUrl,token:r.token}]),i}}return this._createScreenshotJSON(e,t)}_createWebTileLayerJSON(e){const t={type:"WebTiledLayer",urlTemplate:e.urlTemplate.replace(/\${/g,"{"),credits:e.copyright};return e.subDomains&&e.subDomains.length>0&&(t.subDomains=e.subDomains),t}_createWMSLayerJSON(e){let t;const r=[],i=e=>{e.visible&&(e.sublayers?e.sublayers.forEach(i):e.name&&r.unshift(e.name))};return e.sublayers&&e.sublayers.forEach(i),r.length&&(t={type:"wms",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,transparentBackground:e.imageTransparency,visibleLayers:r,url:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["normalize"])(e.url),version:e.version}),t}_createWMTSLayerJSON(e){const t=e.activeLayer;return{type:"wmts",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,format:t.imageFormat,layer:t.id,style:t.styleId,tileMatrixSet:t.tileMatrixSetId,url:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["normalize"])(e.url)}}_setURLandToken(e,t){var r;if(!t.url)return;e.url=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["normalize"])(e.url||t.url);const i=null==(r=_kernel_js__WEBPACK_IMPORTED_MODULE_14__["id"])?void 0:r.findCredential(t.url);i&&(e.token=i.token)}async _convertSvgToPictureMarkerSymbolJson(e){this._canvas||(this._canvas=document.createElement("canvas"));const t=1024;this._canvas.width=t,this._canvas.height=t;const r=this._canvas.getContext("2d");let i,a;if(e.path){var s;const n=new Path2D(e.path);n.closePath(),r.fillStyle=Array.isArray(e.color)?`rgba(${e.color[0]},${e.color[1]},${e.color[2]},${e.color[3]/255})`:"rgb(0,0,0)",r.fill(n);const o=Object(_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_22__["getContextBoundingBox"])(r);if(!o)return null;r.clearRect(0,0,t,t);const l=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__["pt2px"])(e.size)/Math.max(o.width,o.height);r.scale(l,l);const c=t/l,y=c/2-o.width/2-o.x,p=c/2-o.height/2-o.y;if(r.translate(y,p),Array.isArray(e.color)&&r.fill(n),null!=(s=e.outline)&&s.width&&Array.isArray(e.outline.color)){const t=e.outline;r.lineWidth=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__["pt2px"])(t.width)/l,r.lineJoin="round",r.strokeStyle=`rgba(${t.color[0]},${t.color[1]},${t.color[2]},${t.color[3]/255})`,r.stroke(n),o.width+=r.lineWidth,o.height+=r.lineWidth}o.width*=l,o.height*=l;const m=r.getImageData(t/2-o.width/2,t/2-o.height/2,Math.ceil(o.width),Math.ceil(o.height));i=m.width,a=m.height,r.canvas.width=i,r.canvas.height=a,r.putImageData(m,0,0)}else{const t="image/svg+xml"===e.contentType?"data:image/svg+xml;base64,"+e.imageData:e.url,s=(await Object(_request_js__WEBPACK_IMPORTED_MODULE_15__["default"])(t,{responseType:"image"})).data;i=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__["pt2px"])(e.width),a=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__["pt2px"])(e.height),r.canvas.width=i,r.canvas.height=a,r.drawImage(s,0,0,r.canvas.width,r.canvas.height)}return{type:"esriPMS",imageData:r.canvas.toDataURL("image/png").substr(22),angle:e.angle,contentType:"image/png",height:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__["px2pt"])(a),width:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__["px2pt"])(i),xoffset:e.xoffset,yoffset:e.yoffset}}async _convertSvgRenderer(e){const t=e.type;if("simple"===t&&Q(e.symbol))e.symbol=await this._convertSvgToPictureMarkerSymbolJson(e.symbol);else if("uniqueValue"===t||"classBreaks"===t){Q(e.defaultSymbol)&&(e.defaultSymbol=await this._convertSvgToPictureMarkerSymbolJson(e.defaultSymbol));const r=e["uniqueValue"===t?"uniqueValueInfos":"classBreakInfos"];if(r)for(const e of r)Q(e.symbol)&&(e.symbol=await this._convertSvgToPictureMarkerSymbolJson(e.symbol))}}_getGraphics(e){return e.queryFeatures(K).then((e=>e.features))}async _getPrintDefinition(e,t){const r=e.view;let i=r.spatialReference;const a={operationalLayers:await this._createOperationalLayers(r,t)};let s=this._ssExtent||e.extent||r.extent;return i&&i.isWrappable&&(s=s.clone()._normalize(!0),i=s.spatialReference),a.mapOptions={extent:s&&s.toJSON(),spatialReference:i&&i.toJSON(),showAttribution:t.attributionVisible},this._ssExtent=null,r.background&&(a.background=r.background.toJSON()),r.rotation&&(a.mapOptions.rotation=-r.rotation),t.scalePreserved&&(a.mapOptions.scale=t.outScale||r.scale),a}async _getGpPrintParams(e){const t=e.template||new _support_PrintTemplate_js__WEBPACK_IMPORTED_MODULE_23__["default"];null==t.showLabels&&(t.showLabels=!0);const r=t.exportOptions;let i;const a=Object(_support_layoutTemplate_js__WEBPACK_IMPORTED_MODULE_21__["toJSON"])(t.layout);if(r){if(i={dpi:r.dpi},"map_only"===a.toLowerCase()||""===a){const e=r.width,t=r.height;i.outputSize=[e,t]}}const n=t.layoutOptions;let o;if(n){let e,t;"Miles"===n.scalebarUnit||"Kilometers"===n.scalebarUnit?(e="Kilometers",t="Miles"):"Meters"!==n.scalebarUnit&&"Feet"!==n.scalebarUnit||(e="Meters",t="Feet"),o={titleText:n.titleText,authorText:n.authorText,copyrightText:n.copyrightText,customTextElements:n.customTextElements,scaleBarOptions:{metricUnit:q.toJSON(e),metricLabel:$[e],nonMetricUnit:q.toJSON(t),nonMetricLabel:$[t]}}}let l=null;n&&n.legendLayers&&(l=n.legendLayers.map((e=>{this._legendLayerNameMap[e.layerId]=e.title;const t={id:e.layerId};return e.subLayerIds&&(t.subLayerIds=e.subLayerIds),t})));const c=await this._getPrintDefinition(e,t);if(c.operationalLayers){const e=new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"),t=/[\u0600-\u06FF]/,r=r=>{const i=r.text,a=r.font,s=a&&a.family&&a.family.toLowerCase();i&&a&&("arial"===s||"arial unicode ms"===s)&&(a.family=e.test(i)?"Arial Unicode MS":"Arial","normal"!==a.style&&t.test(i)&&(a.family="Arial Unicode MS"))},i=()=>{throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("print-task:cim-symbol-unsupported","CIMSymbol is not supported by a print service published from ArcMap")};c.operationalLayers.forEach((e=>{var t,a,s;null!=(t=e.featureCollection)&&t.layers?e.featureCollection.layers.forEach((e=>{var t,a,s,n;if(null!=(t=e.layerDefinition)&&null!=(a=t.drawingInfo)&&null!=(s=a.renderer)&&s.symbol){const t=e.layerDefinition.drawingInfo.renderer;"esriTS"===t.symbol.type?r(t.symbol):"CIMSymbolReference"!==t.symbol.type||this._is11xService||i()}null!=(n=e.featureSet)&&n.features&&e.featureSet.features.forEach((e=>{e.symbol&&("esriTS"===e.symbol.type?r(e.symbol):"CIMSymbolReference"!==e.symbol.type||this._is11xService||i())}))})):!this._is11xService&&null!=(a=e.layerDefinition)&&null!=(s=a.drawingInfo)&&s.renderer&&JSON.stringify(e.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"')&&i()}))}e.outSpatialReference&&(c.mapOptions.spatialReference=e.outSpatialReference.toJSON()),Object.assign(c,{exportOptions:i,layoutOptions:o||{}}),Object.assign(c.layoutOptions,{legendOptions:{operationalLayers:null!=l?l:this._legendLayers.slice()}}),this._legendLayers.length=0;const u={Web_Map_as_JSON:JSON.stringify(c),Format:Object(_support_fileFormat_js__WEBPACK_IMPORTED_MODULE_20__["toJSON"])(t.format),Layout_Template:a};return e.extraParameters&&Object.assign(u,e.extraParameters),u}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],H.prototype,"_geoprocessor",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],H.prototype,"_gpMetadata",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0})],H.prototype,"mode",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],H.prototype,"updateDelay",void 0),H=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.tasks.PrintTask")],H);var X=H;/* harmony default export */ __webpack_exports__["default"] = (X);


/***/ }),

/***/ "CgPg":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/support/JobInfo.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _rest_utils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../rest/utils.js */ "u3Ia");
/* harmony import */ var _GPMessage_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./GPMessage.js */ "DKHk");
/* harmony import */ var _rest_geoprocessor_GPOptions_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../rest/geoprocessor/GPOptions.js */ "iZ43");
/* harmony import */ var _rest_geoprocessor_utils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../rest/geoprocessor/utils.js */ "NlB9");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var j;const m=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});let h=j=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_11__["JSONSupport"]{constructor(e){super(e),this.jobId=null,this.jobStatus=null,this.messages=null,this.requestOptions=null,this.sourceUrl=null,this._timer=null}cancelJob(e){const{jobId:t,sourceUrl:s}=this,{path:r}=Object(_rest_utils_js__WEBPACK_IMPORTED_MODULE_13__["parseUrl"])(s),o={...this.requestOptions,...e,query:{f:"json"}};this._clearTimer();return Object(_request_js__WEBPACK_IMPORTED_MODULE_12__["default"])(`${r}/jobs/${t}/cancel`,o).then((e=>{const t=j.fromJSON(e.data);return this.messages=t.messages,this.jobStatus=t.jobStatus,this}))}destroy(){clearInterval(this._timer)}checkJobStatus(e){const{path:t}=Object(_rest_utils_js__WEBPACK_IMPORTED_MODULE_13__["parseUrl"])(this.sourceUrl),s={...this.requestOptions,...e,query:{f:"json"}},r=`${t}/jobs/${this.jobId}`;return Object(_request_js__WEBPACK_IMPORTED_MODULE_12__["default"])(r,s).then((({data:e})=>{const t=j.fromJSON(e);return this.messages=t.messages,this.jobStatus=t.jobStatus,this}))}fetchResultData(e,t,s){t=_rest_geoprocessor_GPOptions_js__WEBPACK_IMPORTED_MODULE_15__["default"].from(t);const{returnFeatureCollection:r,returnM:o,returnZ:i,outSpatialReference:a}=t,{path:u}=Object(_rest_utils_js__WEBPACK_IMPORTED_MODULE_13__["parseUrl"])(this.sourceUrl),j=Object(_rest_geoprocessor_utils_js__WEBPACK_IMPORTED_MODULE_16__["gpEncode"])({returnFeatureCollection:r||void 0,returnM:o||void 0,returnZ:i||void 0,outSR:a,returnType:"data",f:"json"},null),m={...this.requestOptions,...s,query:j},h=`${u}/jobs/${this.jobId}/results/${e}`;return Object(_request_js__WEBPACK_IMPORTED_MODULE_12__["default"])(h,m).then((e=>Object(_rest_geoprocessor_utils_js__WEBPACK_IMPORTED_MODULE_16__["decode"])(e.data)))}fetchResultImage(e,t,s){const{path:r}=Object(_rest_utils_js__WEBPACK_IMPORTED_MODULE_13__["parseUrl"])(this.sourceUrl),o={...t.toJSON(),f:"json"},i=Object(_rest_geoprocessor_utils_js__WEBPACK_IMPORTED_MODULE_16__["gpEncode"])(o),a={...this.requestOptions,...s,query:i},u=`${r}/jobs/${this.jobId}/results/${e}`;return Object(_request_js__WEBPACK_IMPORTED_MODULE_12__["default"])(u,a).then((e=>Object(_rest_geoprocessor_utils_js__WEBPACK_IMPORTED_MODULE_16__["decode"])(e.data)))}async fetchResultMapImageLayer(){const{path:e}=Object(_rest_utils_js__WEBPACK_IMPORTED_MODULE_13__["parseUrl"])(this.sourceUrl),t=e.indexOf("/GPServer/"),s=`${e.substring(0,t)}/MapServer/jobs/${this.jobId}`;return new(0,(await Promise.all(/*! import() | layers-MapImageLayer-js */[__webpack_require__.e("default~MapImageLayer-js~TileLayer-js"), __webpack_require__.e("common"), __webpack_require__.e("MapImageLayer-js")]).then(__webpack_require__.bind(null, /*! ../../layers/MapImageLayer.js */ "U/i9"))).default)({url:s})}async waitForJobCompletion(e={}){const{interval:t=1e3,signal:s,statusCallback:r}=e;return new Promise(((e,a)=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["onAbort"])(s,(()=>{this._clearTimer(),a(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["createAbortError"])())})),this._clearTimer();const c=setInterval((()=>{this._timer||a(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["createAbortError"])()),this.checkJobStatus(this.requestOptions).then((t=>{const{jobStatus:s}=t;switch(this.jobStatus=s,s){case"job-succeeded":this._clearTimer(),e(this);break;case"job-submitted":case"job-executing":case"job-waiting":case"job-new":r&&r(this);break;case"job-cancelled":case"job-cancelling":case"job-deleted":case"job-deleting":case"job-timed-out":case"job-failed":this._clearTimer(),a(this)}}))}),t);this._timer=c}))}_clearTimer(){this._timer&&(clearInterval(this._timer),this._timer=null)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],h.prototype,"jobId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:m.read}})],h.prototype,"jobStatus",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:[_GPMessage_js__WEBPACK_IMPORTED_MODULE_14__["default"]]})],h.prototype,"messages",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],h.prototype,"requestOptions",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{write:!0}})],h.prototype,"sourceUrl",void 0),h=j=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.tasks.support.JobInfo")],h);var d=h;/* harmony default export */ __webpack_exports__["default"] = (d);


/***/ }),

/***/ "DKHk":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/support/GPMessage.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const p=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{constructor(r){super(r),this.description=null,this.type=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],i.prototype,"description",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{read:p.read,write:p.write}})],i.prototype,"type",void 0),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.tasks.support.GPMessage")],i);var a=i;/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ }),

/***/ "E7a0":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geoprocessor/submitJob.js ***!
  \******************************************************************/
/*! exports provided: submitJob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitJob", function() { return s; });
/* harmony import */ var _GPOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GPOptions.js */ "iZ43");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "NlB9");
/* harmony import */ var _tasks_support_JobInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tasks/support/JobInfo.js */ "CgPg");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function s(s,m,n,f){return n=_GPOptions_js__WEBPACK_IMPORTED_MODULE_0__["default"].from(n),Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["constructRequest"])(s,"submitJob",n,m,f).then((o=>{const r=_tasks_support_JobInfo_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(o.data);return r.sourceUrl=s,r}))}


/***/ }),

/***/ "EdPA":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/support/DataFile.js ***!
  \*************************************************************/
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
let e=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]{constructor(r){super(r),this.itemId=null,this.url=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],e.prototype,"itemId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],e.prototype,"url",void 0),e=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.support.DataFile")],e);var p=e;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "LE+W":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/Geoprocessor.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../geometry/Extent.js */ "OvF4");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Task.js */ "kglp");
/* harmony import */ var _rest_geoprocessor_GPOptions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../rest/geoprocessor/GPOptions.js */ "iZ43");
/* harmony import */ var _rest_geoprocessor_execute_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../rest/geoprocessor/execute.js */ "aPpv");
/* harmony import */ var _rest_geoprocessor_submitJob_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../rest/geoprocessor/submitJob.js */ "E7a0");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let c=class extends _Task_js__WEBPACK_IMPORTED_MODULE_11__["default"]{constructor(e){super(e),this._jobs=new Map,this.outSpatialReference=null,this.processExtent=null,this.processSpatialReference=null,this.returnFeatureCollection=!1,this.returnM=!1,this.returnZ=!1}destroy(){this._jobs.forEach((e=>e.destroy())),this._jobs.clear()}cancelJob(e,t){const r=this._jobs.get(e),o={...this.requestOptions,...t};return r.cancelJob(o)}checkJobStatus(e,t){const r=this._jobs.get(e),o={...this.requestOptions,...t};return r.checkJobStatus(o)}execute(e,t){const r=new _rest_geoprocessor_GPOptions_js__WEBPACK_IMPORTED_MODULE_12__["default"]({outSpatialReference:this.outSpatialReference,processExtent:this.processExtent,processSpatialReference:this.processSpatialReference,returnFeatureCollection:this.returnFeatureCollection,returnM:this.returnM,returnZ:this.returnZ}),o={...this.requestOptions,...t};return Object(_rest_geoprocessor_execute_js__WEBPACK_IMPORTED_MODULE_13__["execute"])(this.url,e,r,o)}getResultData(e,t,r){const o=this._jobs.get(e),{returnFeatureCollection:s,returnM:i,returnZ:u,outSpatialReference:p}=this,c=new _rest_geoprocessor_GPOptions_js__WEBPACK_IMPORTED_MODULE_12__["default"]({returnFeatureCollection:s,returnM:i,returnZ:u,outSpatialReference:p,url:this.url}),a={...this.requestOptions,...r};return o.fetchResultData(t,c,a)}getResultImage(e,t,r,o){const s=this._jobs.get(e),i={...this.requestOptions,...o};return s.fetchResultImage(t,r,i)}async getResultMapImageLayer(e){return this._jobs.get(e).fetchResultMapImageLayer()}submitJob(e,t){const r=new _rest_geoprocessor_GPOptions_js__WEBPACK_IMPORTED_MODULE_12__["default"]({outSpatialReference:this.outSpatialReference,processExtent:this.processExtent,processSpatialReference:this.processSpatialReference,returnFeatureCollection:this.returnFeatureCollection,returnM:this.returnM,returnZ:this.returnZ}),o={...this.requestOptions,...t};return Object(_rest_geoprocessor_submitJob_js__WEBPACK_IMPORTED_MODULE_14__["submitJob"])(this.url,e,r,o).then((e=>(e.sourceUrl=this.url,this._jobs.set(e.jobId,e),e)))}waitForJobCompletion(e,t={}){return this._jobs.get(e).waitForJobCompletion(t)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_9__["default"]})],c.prototype,"outSpatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__["default"]})],c.prototype,"processExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_9__["default"]})],c.prototype,"processSpatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({nonNullable:!0})],c.prototype,"returnFeatureCollection",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({nonNullable:!0})],c.prototype,"returnM",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({nonNullable:!0})],c.prototype,"returnZ",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri/tasks/Geoprocessor")],c);var a=c;/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ }),

/***/ "NlB9":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geoprocessor/utils.js ***!
  \**************************************************************/
/*! exports provided: collectGeometries, constructRequest, decode, gpEncode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectGeometries", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructRequest", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gpEncode", function() { return P; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/normalizeUtils.js */ "qNUd");
/* harmony import */ var _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layers/support/Field.js */ "ofM5");
/* harmony import */ var _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tasks/support/FeatureSet.js */ "8prj");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/* harmony import */ var _layers_support_MapImage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layers/support/MapImage.js */ "/k1A");
/* harmony import */ var _tasks_support_DataFile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tasks/support/DataFile.js */ "EdPA");
/* harmony import */ var _tasks_support_LinearUnit_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tasks/support/LinearUnit.js */ "Ujsq");
/* harmony import */ var _tasks_support_ParameterValue_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../tasks/support/ParameterValue.js */ "T1yr");
/* harmony import */ var _tasks_support_RasterData_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../tasks/support/RasterData.js */ "3AG9");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function m(t,r,u,s,l){const n={},i={},c=[];return p(s,c,n),Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_2__["normalizeCentralMeridian"])(c).then((a=>{const{outSpatialReference:c,processExtent:m,processSpatialReference:p,returnFeatureCollection:f,returnM:G,returnZ:v}=u,{path:S}=Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["parseUrl"])(t);for(const e in n){const t=n[e];i[e]=a.slice(t[0],t[1])}const k=c?c.wkid||c:null,y=p?p.wkid||p:null,D="execute"===r?{returnFeatureCollection:f||void 0,returnM:G||void 0,returnZ:v||void 0}:null,J=P({...m?{context:{extent:m,outSR:k,processSR:y}}:{"env:outSR":k,"env:processSR":y},...s,...D,f:"json"},null,i),M={...l,query:J};return Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`${S}/${r}`,M)}))}function p(e,a,t){for(const o in e){const u=e[o];if(u&&"object"==typeof u&&u instanceof _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_4__["default"]){const{features:e}=u;t[o]=[a.length,a.length+e.length],e.forEach((e=>{a.push(e.geometry)}))}}}function f(e){const a=e.dataType,o=_tasks_support_ParameterValue_js__WEBPACK_IMPORTED_MODULE_9__["default"].fromJSON(e);switch(a){case"GPBoolean":case"GPDouble":case"GPLong":case"GPString":return o;case"GPDate":o.value=new Date(o.value);break;case"GPDataFile":o.value=_tasks_support_DataFile_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromJSON(o.value);break;case"GPLinearUnit":o.value=_tasks_support_LinearUnit_js__WEBPACK_IMPORTED_MODULE_8__["default"].fromJSON(o.value);break;case"GPFeatureRecordSetLayer":case"GPRecordSet":{const a=e.value.url;o.value=a?_tasks_support_DataFile_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromJSON(o.value):_tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(o.value);break}case"GPRasterData":case"GPRasterDataLayer":{const a=e.value.mapImage;o.value=a?_layers_support_MapImage_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromJSON(a):_tasks_support_RasterData_js__WEBPACK_IMPORTED_MODULE_10__["default"].fromJSON(o.value);break}case"GPField":o.value=_layers_support_Field_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(o.value);break;case"GPMultiValue:GPBoolean":case"GPMultiValue:GPDouble":case"GPMultiValue:GPLong":case"GPMultiValue:GPString":return o;case"GPMultiValue:GPDate":{const e=o.value;o.value=e.map((e=>new Date(e)));break}case"GPMultiValue:GPDataFile":o.value=o.value.map((e=>_tasks_support_DataFile_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromJSON(e)));break;case"GPMultiValue:GPLinearUnit":o.value=o.value.map((e=>_tasks_support_LinearUnit_js__WEBPACK_IMPORTED_MODULE_8__["default"].fromJSON(e)));break;case"GPMultiValue:GPFeatureRecordSetLayer":case"GPMultiValue:GPRecordSet":o.value=o.value.map((e=>_tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(e)));break;case"GPMultiValue:GPRasterData":case"GPMultiValue:GPRasterDataLayer":o.value=o.value.map((e=>e?_layers_support_MapImage_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromJSON(e):_tasks_support_RasterData_js__WEBPACK_IMPORTED_MODULE_10__["default"].fromJSON(o.value)));break;case"GPMultiValue:GPField":o.value=o.value.map((e=>_layers_support_Field_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(e)))}return o}function P(e,a,t){for(const r in e){const a=e[r];Array.isArray(a)?e[r]=JSON.stringify(a.map((e=>P({item:e},!0).item))):a instanceof Date&&(e[r]=a.getTime())}return Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__["encode"])(e,a,t)}


/***/ }),

/***/ "Oxsg":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/support/printTaskUtils.js ***!
  \*******************************************************************/
/*! exports provided: applyVisualVariables, createMultipointLayer, createPointLayer, createPolygonLayer, createPolylineLayer, getContextBoundingBox, getVisibleLayerViews, isBingMapsLayer, isCSVLayer, isFeatureLayer, isGeoJSONLayer, isGraphicsLayer, isGroupLayer, isImageryLayer, isKMLLayer, isMapImageLayer, isMapNotesLayer, isOpenStreetMapLayer, isStreamLayer, isTileLayer, isVectorTileLayer, isWMSLayer, isWMTSLayer, isWebTileLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyVisualVariables", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMultipointLayer", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPointLayer", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPolygonLayer", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPolylineLayer", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContextBoundingBox", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisibleLayerViews", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBingMapsLayer", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCSVLayer", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFeatureLayer", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGeoJSONLayer", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGraphicsLayer", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGroupLayer", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImageryLayer", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKMLLayer", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMapImageLayer", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMapNotesLayer", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOpenStreetMapLayer", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStreamLayer", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTileLayer", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVectorTileLayer", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWMSLayer", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWMTSLayer", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWebTileLayer", function() { return A; });
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../renderers/visualVariables/support/visualVariableUtils.js */ "0pea");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const o="simple-marker",a="picture-marker",u="simple-line",l="simple-fill",s="shield-label-symbol",y="text";function f(f,p){const{graphic:c,renderer:m,symbol:g}=p,d=g.type;if(d===y||d===s||!("visualVariables"in m)||!m.visualVariables)return;const b=m.getVisualVariablesForType("size"),h=m.getVisualVariablesForType("color"),w=m.getVisualVariablesForType("opacity"),V=m.getVisualVariablesForType("rotation"),T=b&&b[0],v=h&&h[0],G=w&&w[0],k=V&&V[0];if(T){const t=d===o?g.style:null,n=Object(_renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__["getSize"])(T,c,{shape:t});null!=n&&(d===o?f.size=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["px2pt"])(n):d===a?(f.width=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["px2pt"])(n),f.height=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["px2pt"])(n)):d===u?f.width=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["px2pt"])(n):f.outline&&(f.outline.width=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["px2pt"])(n)))}if(v){const e=Object(_renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__["getColor"])(v,c);(e&&d===o||d===u||d===l)&&(f.color=e?e.toJSON():void 0)}if(G){const e=Object(_renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__["getOpacity"])(G,c);null!=e&&f.color&&(f.color[3]=Math.round(255*e))}k&&(f.angle=-Object(_renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__["getRotationAngle"])(m,c))}function p(){return{layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}}function c(){return{layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}}function m(){return{layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}}function g(){return{layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}}function d(e,r=15){const t=e.canvas.width,n=e.canvas.height,i=e.getImageData(0,0,t,n).data;let o,a,u,l,s,y;e:for(a=n;a--;)for(o=t;o--;)if(i[4*(t*a+o)+3]>r){y=a;break e}if(!y)return null;e:for(o=t;o--;)for(a=y+1;a--;)if(i[4*(t*a+o)+3]>r){s=o;break e}e:for(o=0;o<=s;++o)for(a=y+1;a--;)if(i[4*(t*a+o)+3]>r){u=o;break e}e:for(a=0;a<=y;++a)for(o=u;o<=s;++o)if(i[4*(t*a+o)+3]>r){l=a;break e}return{x:u,y:l,width:s-u,height:y-l}}function b(e,r){const t=e.allLayerViews.items;if(r===e.scale)return t.filter((e=>!e.suspended));const n=new Array;for(const i of t)k(i.parent)&&!n.includes(i.parent)||!i.visible||r&&"isVisibleAtScale"in i&&!i.isVisibleAtScale(r)||n.push(i);return n}function h(e){return e&&"bing-maps"===e.type}function w(e){return e&&"csv"===e.type}function V(e){return e&&"feature"===e.type}function T(e){return e&&"geojson"===e.type}function v(e){return e&&"graphics"===e.type}function G(e){return e&&"group"===e.type}function k(e){return e&&"esri.views.2d.layers.GroupLayerView2D"===e.declaredClass}function S(e){return e&&"imagery"===e.type}function D(e){return e&&"kml"===e.type}function L(e){return e&&"map-image"===e.type}function P(e){return e&&"map-notes"===e.type}function I(e){return e&&"open-street-map"===e.type}function F(e){return e&&"stream"===e.type}function j(e){return e&&"tile"===e.type}function x(e){return e&&"vector-tile"===e.type}function A(e){return e&&"web-tile"===e.type}function M(e){return e&&"wms"===e.type}function z(e){return e&&"wmts"===e.type}


/***/ }),

/***/ "Pq/a":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/support/fileFormat.js ***!
  \***************************************************************/
/*! exports provided: fromJSON, toJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJSON", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJSON", function() { return g; });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const p=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["JSONMap"]({PDF:"pdf",PNG32:"png32",PNG8:"png8",JPG:"jpg",GIF:"gif",EPS:"eps",SVG:"svg",SVGZ:"svgz"}),n=p.fromJSON.bind(p),g=p.toJSON.bind(p);


/***/ }),

/***/ "T1yr":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/support/ParameterValue.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const u=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({GPBoolean:"boolean",GPDataFile:"data-file",GPDate:"date",GPDouble:"double",GPFeatureRecordSetLayer:"feature-record-set-layer",GPField:"field",GPLinearUnit:"linear-unit",GPLong:"long",GPRasterData:"raster-data",GPRasterDataLayer:"raster-data-layer",GPRecordSet:"record-set",GPString:"string","GPMultiValue:GPBoolean":"multi-value","GPMultiValue:GPDataFile":"multi-value","GPMultiValue:GPDate":"multi-value","GPMultiValue:GPDouble":"multi-value","GPMultiValue:GPFeatureRecordSetLayer":"multi-value","GPMultiValue:GPField":"multi-value","GPMultiValue:GPLinearUnit":"multi-value","GPMultiValue:GPLong":"multi-value","GPMultiValue:GPRasterData":"multi-value","GPMultiValue:GPRasterDataLayer":"multi-value","GPMultiValue:GPRecordSet":"multi-value","GPMultiValue:GPString":"multi-value"});let o=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{constructor(e){super(e),this.dataType=null,this.value=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:u.read,write:u.write}})],o.prototype,"dataType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],o.prototype,"value",void 0),o=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.tasks.support.ParameterValue")],o);var i=o;/* harmony default export */ __webpack_exports__["default"] = (i);


/***/ }),

/***/ "Ujsq":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/support/LinearUnit.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const i=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({esriMeters:"meters",esriFeet:"feet",esriKilometers:"kilometers",esriMiles:"miles",esriNauticalMiles:"nautical-miles",esriYards:"yards"},{ignoreUnknown:!1});let p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{constructor(r){super(r),this.distance=0,this.units=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{write:!0}})],p.prototype,"distance",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:i.read,write:i.write}})],p.prototype,"units",void 0),p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri/tasks/support/LinearUnit")],p);var c=p;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "Vd7i":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/support/layoutTemplate.js ***!
  \*******************************************************************/
/*! exports provided: fromJSON, toJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJSON", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJSON", function() { return o; });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["JSONMap"]({MAP_ONLY:"map-only","A3 Landscape":"a3-landscape","A3 Portrait":"a3-portrait","A4 Landscape":"a4-landscape","A4 Portrait":"a4-portrait","Letter ANSI A Landscape":"letter-ansi-a-landscape","Letter ANSI A Portrait":"letter-ansi-a-portrait","Tabloid ANSI B Landscape":"tabloid-ansi-b-landscape","Tabloid ANSI B Portrait":"tabloid-ansi-b-portrait"}),r=t.fromJSON.bind(t),o=t.toJSON.bind(t);


/***/ }),

/***/ "aPpv":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geoprocessor/execute.js ***!
  \****************************************************************/
/*! exports provided: execute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return o; });
/* harmony import */ var _tasks_support_GPMessage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tasks/support/GPMessage.js */ "DKHk");
/* harmony import */ var _GPOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GPOptions.js */ "iZ43");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "NlB9");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function o(o,m,a,p){return a=_GPOptions_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(a),Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["constructRequest"])(o,"execute",a,m,p).then((t=>{const r=t.data.results||[],o=t.data.messages||[];return{results:r.map(_utils_js__WEBPACK_IMPORTED_MODULE_2__["decode"]),messages:o.map((t=>_tasks_support_GPMessage_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(t)))}}))}


/***/ }),

/***/ "iZ43":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geoprocessor/GPOptions.js ***!
  \******************************************************************/
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
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/Accessor.js */ "/CmD");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../geometry/Extent.js */ "OvF4");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let c=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(){super(...arguments),this.outSpatialReference=null,this.processExtent=null,this.processSpatialReference=null,this.returnFeatureCollection=!1,this.returnM=!1,this.returnZ=!1}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__["default"]})],c.prototype,"outSpatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"]})],c.prototype,"processExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__["default"]})],c.prototype,"processSpatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({nonNullable:!0})],c.prototype,"returnFeatureCollection",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({nonNullable:!0})],c.prototype,"returnM",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({nonNullable:!0})],c.prototype,"returnZ",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri/rest/geoprocessor/GPOptions")],c),c.from=Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__["ensureType"])(c);var l=c;/* harmony default export */ __webpack_exports__["default"] = (l);


/***/ }),

/***/ "yvFI":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/support/PrintTemplate.js ***!
  \******************************************************************/
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
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/Accessor.js */ "/CmD");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let s=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(o){super(o),this.attributionVisible=!0,this.exportOptions={width:800,height:1100,dpi:96},this.forceFeatureAttributes=!1,this.format="png32",this.label=null,this.layout="map-only",this.layoutOptions=null,this.outScale=0,this.scalePreserved=!0,this.showLabels=!0}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],s.prototype,"attributionVisible",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],s.prototype,"exportOptions",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],s.prototype,"forceFeatureAttributes",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],s.prototype,"format",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],s.prototype,"label",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],s.prototype,"layout",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],s.prototype,"layoutOptions",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],s.prototype,"outScale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],s.prototype,"scalePreserved",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],s.prototype,"showLabels",void 0),s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.support.PrintTemplate")],s);var p=s;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ })

}]);
//# sourceMappingURL=tasks-PrintTask-js.js.map