(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-OGCFeatureLayerView2D-js"],{

/***/ "17tH":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/OGCFeatureLayerView.js ***!
  \***********************************************************************/
/*! exports provided: default, OGCFeatureLayerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OGCFeatureLayerView", function() { return i; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../layers/support/fieldUtils.js */ "wdpY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const i=i=>{let a=class extends i{initialize(){const{layer:e,view:r}=this;e.source.supportsSpatialReference(r.spatialReference)||this.addResolvingPromise(Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:e})))}get availableFields(){return Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_10__["fixFields"])(this.layer.fields,["*"])}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],a.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],a.prototype,"availableFields",null),a=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.layers.OGCFeatureLayerView")],a),a};/* harmony default export */ __webpack_exports__["default"] = (i);


/***/ }),

/***/ "bL7n":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/OGCFeatureLayerView2D.js ***!
  \****************************************************************************/
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
/* harmony import */ var _layers_OGCFeatureLayerView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../layers/OGCFeatureLayerView.js */ "17tH");
/* harmony import */ var _FeatureLayerView2D_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FeatureLayerView2D.js */ "GJxj");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let t=class extends(Object(_layers_OGCFeatureLayerView_js__WEBPACK_IMPORTED_MODULE_9__["OGCFeatureLayerView"])(_FeatureLayerView2D_js__WEBPACK_IMPORTED_MODULE_10__["default"])){};t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.OGCFeatureLayerView2D")],t);var p=t;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ })

}]);
//# sourceMappingURL=layers-OGCFeatureLayerView2D-js.js.map