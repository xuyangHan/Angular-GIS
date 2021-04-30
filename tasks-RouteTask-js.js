(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasks-RouteTask-js"],{

/***/ "mIeD":
/*!*************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/route.js ***!
  \*************************************************/
/*! exports provided: solve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "solve", function() { return m; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry/support/normalizeUtils.js */ "qNUd");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "u3Ia");
/* harmony import */ var _core_queryUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/queryUtils.js */ "o6Le");
/* harmony import */ var _networkUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./networkUtils.js */ "ZKYY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const p=Object(_core_queryUtils_js__WEBPACK_IMPORTED_MODULE_3__["createQueryParamsHelper"])({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});async function m(s,m,l){const c=[],f=[],y={},B={},h=Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["parseUrl"])(s);return m.stops&&m.stops.features&&Object(_networkUtils_js__WEBPACK_IMPORTED_MODULE_4__["collectGeometries"])(m.stops.features,f,"stops.features",y),m.pointBarriers&&m.pointBarriers.features&&Object(_networkUtils_js__WEBPACK_IMPORTED_MODULE_4__["collectGeometries"])(m.pointBarriers.features,f,"pointBarriers.features",y),m.polylineBarriers&&m.polylineBarriers.features&&Object(_networkUtils_js__WEBPACK_IMPORTED_MODULE_4__["collectGeometries"])(m.polylineBarriers.features,f,"polylineBarriers.features",y),m.polygonBarriers&&m.polygonBarriers.features&&Object(_networkUtils_js__WEBPACK_IMPORTED_MODULE_4__["collectGeometries"])(m.polygonBarriers.features,f,"polygonBarriers.features",y),Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_1__["normalizeCentralMeridian"])(f).then((e=>{for(const r in y){const t=y[r];c.push(r),B[r]=e.slice(t[0],t[1])}return Object(_networkUtils_js__WEBPACK_IMPORTED_MODULE_4__["isInputGeometryZAware"])(B,c)?Object(_networkUtils_js__WEBPACK_IMPORTED_MODULE_4__["fetchServiceDescription"])(h.path):Promise.resolve({dontCheck:!0})})).then((r=>{("dontCheck"in r?r.dontCheck:r.hasZ)||Object(_networkUtils_js__WEBPACK_IMPORTED_MODULE_4__["dropZValuesOffInputGeometry"])(B,c);for(const e in B)B[e].forEach(((r,t)=>{m.get(e)[t].geometry=r}));const t={...l,query:{...h.query,...p.toQueryParams(m),f:"json"}},{path:s}=h,o="/solve",i=s.endsWith(o)?s:s+o;return Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i,t)})).then((e=>Object(_networkUtils_js__WEBPACK_IMPORTED_MODULE_4__["handleSolveResponse"])(e)))}


/***/ }),

/***/ "mL23":
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/RouteTask.js ***!
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
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Task.js */ "kglp");
/* harmony import */ var _rest_route_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rest/route.js */ "mIeD");
/* harmony import */ var _mixins_NAServiceDescription_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mixins/NAServiceDescription.js */ "OvWd");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let p=class extends(Object(_mixins_NAServiceDescription_js__WEBPACK_IMPORTED_MODULE_11__["NAServiceDescriptionMixin"])(_Task_js__WEBPACK_IMPORTED_MODULE_9__["default"])){constructor(r){super(r)}solve(r,s){return Object(_rest_route_js__WEBPACK_IMPORTED_MODULE_10__["solve"])(this.url,r,s)}};p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.RouteTask")],p);var c=p;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ })

}]);
//# sourceMappingURL=tasks-RouteTask-js.js.map