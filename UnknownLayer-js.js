(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["UnknownLayer-js"],{

/***/ "qcqe":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/UnknownLayer.js ***!
  \**********************************************************/
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
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/scheduling.js */ "WBXD");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let c=class extends(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_13__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_12__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_11__["default"]))){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise(((r,o)=>{Object(_core_scheduling_js__WEBPACK_IMPORTED_MODULE_10__["schedule"])((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let e="Unknown layer type";r&&(e+=" "+r),o(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("layer:unknown-layer-type",e,{layerType:r}))}))})))}read(r,o){super.read({resourceInfo:r},o)}write(){return null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],c.prototype,"resourceInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["show","hide"]})],c.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:!1},readOnly:!0,value:"unknown"})],c.prototype,"type",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.UnknownLayer")],c);var u=c;/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ })

}]);
//# sourceMappingURL=UnknownLayer-js.js.map