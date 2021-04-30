(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["GeoRSSLayer-js"],{

/***/ "AP+b":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/GeoRSSLayer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.js */ "EyXx");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../symbols/Symbol.js */ "DZP5");
/* harmony import */ var _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../symbols/SimpleLineSymbol.js */ "21Ip");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _symbols_PictureMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../symbols/PictureMarkerSymbol.js */ "N+cL");
/* harmony import */ var _symbols_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../symbols/SimpleFillSymbol.js */ "DXYb");
/* harmony import */ var _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../symbols/SimpleMarkerSymbol.js */ "Tcmu");
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../symbols.js */ "H9eC");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./support/commonProperties.js */ "IvSi");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "uRH/");
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ "mXvl");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ "jhcG");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "WmKv");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const R=["atom","xml"],C={base:_symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_12__["default"],key:"type",typeMap:{"simple-line":_symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_13__["default"]},errorContext:"symbol"},L={base:_symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_12__["default"],key:"type",typeMap:{"picture-marker":_symbols_PictureMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_15__["default"],"simple-marker":_symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_17__["default"]},errorContext:"symbol"},k={base:_symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_12__["default"],key:"type",typeMap:{"simple-fill":_symbols_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_16__["default"]},errorContext:"symbol"};let F=class extends(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_23__["BlendLayer"])(Object(_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_25__["RefreshableLayer"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_22__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_24__["PortalLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_26__["ScaleRangeLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_20__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_19__["default"]))))))){constructor(...e){super(...e),this.description=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.outSpatialReference=null,this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,o){return"string"==typeof e?{url:e,...o}:e}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["getFilename"])(this.url,R)||"GeoRSS":e||""}set title(e){this._set("title",e)}readFeatureCollections(e,o){return o.featureCollection.layers.forEach((e=>{const o=e.layerDefinition.drawingInfo.renderer.symbol;o&&"esriSFS"===o.type&&o.outline&&-1!==o.outline.style.indexOf("esriSFS")&&(o.outline.style="esriSLSSolid")})),o.featureCollection.layers}load(e){const o=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).then((()=>this._fetchService(o)),(()=>this._fetchService(o)))),Promise.resolve(this)}async _fetchService(e){const{data:r}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:e});this.read(r,{origin:"service"})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],F.prototype,"description",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],F.prototype,"title",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],F.prototype,"featureCollections",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("service","featureCollections",["featureCollection.layers"])],F.prototype,"readFeatureCollections",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__["id"])],F.prototype,"id",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__["legendEnabled"])],F.prototype,"legendEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({types:C,json:{write:!0}})],F.prototype,"lineSymbol",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:["show","hide"]})],F.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({types:L,json:{write:!0}})],F.prototype,"pointSymbol",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({types:k,json:{write:!0}})],F.prototype,"polygonSymbol",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:["GeoRSS"]})],F.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],F.prototype,"outSpatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__["url"])],F.prototype,"url",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0,json:{read:!1},value:"geo-rss"})],F.prototype,"type",void 0),F=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.GeoRSSLayer")],F);var M=F;/* harmony default export */ __webpack_exports__["default"] = (M);


/***/ })

}]);
//# sourceMappingURL=GeoRSSLayer-js.js.map