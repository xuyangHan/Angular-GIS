(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasks-GeometryService-js"],{

/***/ "+L3b":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/trimExtend.js ***!
  \**********************************************************************/
/*! exports provided: trimExtend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimExtend", function() { return i; });
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/Polyline.js */ "UhwK");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ "4GrV");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/* harmony import */ var _tasks_operations_trimExtend_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tasks/operations/trimExtend.js */ "GeAh");
/* harmony import */ var _tasks_support_TrimExtendParameters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tasks/support/TrimExtendParameters.js */ "5SEJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function i(i,p,a){p=_tasks_support_TrimExtendParameters_js__WEBPACK_IMPORTED_MODULE_5__["default"].from(p);const n=Object(_tasks_operations_trimExtend_js__WEBPACK_IMPORTED_MODULE_4__["trimExtendToRESTParameters"])(p),f=Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["parseUrl"])(i),j={...f.query,f:"json",...n},u=p.sr,y=Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["asValidOptions"])(j,a);return Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(f.path+"/trimExtend",y).then((({data:r})=>(r.geometries||[]).map((({paths:r})=>new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_0__["default"]({spatialReference:u,paths:r})))))}


/***/ }),

/***/ "0aJI":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/union.js ***!
  \*****************************************************************/
/*! exports provided: union */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "union", function() { return i; });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "pXG8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function i(i,n,m){const f=n[0].spatialReference,p=Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["parseUrl"])(i),a={...p.query,f:"json",sr:JSON.stringify(f.toJSON()),geometries:JSON.stringify(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["encodeGeometries"])(n))},u=Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asValidOptions"])(a,m);return Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(p.path+"/union",u).then((({data:e})=>Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(e.geometry).set({spatialReference:f})))}


/***/ }),

/***/ "1E6V":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/GeometryService.js ***!
  \************************************************************/
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
/* harmony import */ var _rest_geometryService_areasAndLengths_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rest/geometryService/areasAndLengths.js */ "T9St");
/* harmony import */ var _rest_geometryService_autoComplete_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../rest/geometryService/autoComplete.js */ "Cexc");
/* harmony import */ var _rest_geometryService_buffer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../rest/geometryService/buffer.js */ "vBrX");
/* harmony import */ var _rest_geometryService_convexHull_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../rest/geometryService/convexHull.js */ "Giuk");
/* harmony import */ var _rest_geometryService_cut_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../rest/geometryService/cut.js */ "JhN6");
/* harmony import */ var _rest_geometryService_densify_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../rest/geometryService/densify.js */ "xC5X");
/* harmony import */ var _rest_geometryService_difference_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../rest/geometryService/difference.js */ "EhxB");
/* harmony import */ var _rest_geometryService_distance_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../rest/geometryService/distance.js */ "5USS");
/* harmony import */ var _rest_geometryService_units_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../rest/geometryService/units.js */ "vaBp");
/* harmony import */ var _rest_geometryService_fromGeoCoordinateString_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../rest/geometryService/fromGeoCoordinateString.js */ "bMVx");
/* harmony import */ var _rest_geometryService_generalize_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../rest/geometryService/generalize.js */ "NdSu");
/* harmony import */ var _rest_geometryService_intersect_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../rest/geometryService/intersect.js */ "vB4c");
/* harmony import */ var _rest_geometryService_labelPoints_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../rest/geometryService/labelPoints.js */ "q/vV");
/* harmony import */ var _rest_geometryService_lengths_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../rest/geometryService/lengths.js */ "whjZ");
/* harmony import */ var _rest_geometryService_offset_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../rest/geometryService/offset.js */ "EPdg");
/* harmony import */ var _rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../rest/geometryService/project.js */ "rJHQ");
/* harmony import */ var _rest_geometryService_relation_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../rest/geometryService/relation.js */ "nkC/");
/* harmony import */ var _rest_geometryService_reshape_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../rest/geometryService/reshape.js */ "5Q/F");
/* harmony import */ var _rest_geometryService_simplify_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../rest/geometryService/simplify.js */ "1STP");
/* harmony import */ var _rest_geometryService_toGeoCoordinateString_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../rest/geometryService/toGeoCoordinateString.js */ "MSw1");
/* harmony import */ var _rest_geometryService_trimExtend_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../rest/geometryService/trimExtend.js */ "+L3b");
/* harmony import */ var _rest_geometryService_union_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../rest/geometryService/union.js */ "0aJI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let C=class extends _Task_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(r){super(r),this.url=null}areasAndLengths(r,e){return Object(_rest_geometryService_areasAndLengths_js__WEBPACK_IMPORTED_MODULE_10__["areasAndLengths"])(this.url,r,e)}autoComplete(r,e,t){return Object(_rest_geometryService_autoComplete_js__WEBPACK_IMPORTED_MODULE_11__["autoComplete"])(this.url,r,e,t)}buffer(r,e){return Object(_rest_geometryService_buffer_js__WEBPACK_IMPORTED_MODULE_12__["buffer"])(this.url,r,e)}convexHull(r,e){return Object(_rest_geometryService_convexHull_js__WEBPACK_IMPORTED_MODULE_13__["convexHull"])(this.url,r,e)}cut(r,e,t){return Object(_rest_geometryService_cut_js__WEBPACK_IMPORTED_MODULE_14__["cut"])(this.url,r,e,t)}densify(r,e){return Object(_rest_geometryService_densify_js__WEBPACK_IMPORTED_MODULE_15__["densify"])(this.url,r,e)}difference(r,e,t){return Object(_rest_geometryService_difference_js__WEBPACK_IMPORTED_MODULE_16__["difference"])(this.url,r,e,t)}distance(r,e){return Object(_rest_geometryService_distance_js__WEBPACK_IMPORTED_MODULE_17__["distance"])(this.url,r,e)}fromGeoCoordinateString(r,e){return Object(_rest_geometryService_fromGeoCoordinateString_js__WEBPACK_IMPORTED_MODULE_19__["fromGeoCoordinateString"])(this.url,r,e)}generalize(r,e){return Object(_rest_geometryService_generalize_js__WEBPACK_IMPORTED_MODULE_20__["generalize"])(this.url,r,e)}intersect(r,e,t){return Object(_rest_geometryService_intersect_js__WEBPACK_IMPORTED_MODULE_21__["intersect"])(this.url,r,e,t)}labelPoints(r,e){return Object(_rest_geometryService_labelPoints_js__WEBPACK_IMPORTED_MODULE_22__["labelPoints"])(this.url,r,e)}lengths(r,e){return Object(_rest_geometryService_lengths_js__WEBPACK_IMPORTED_MODULE_23__["lengths"])(this.url,r,e)}offset(r,e){return Object(_rest_geometryService_offset_js__WEBPACK_IMPORTED_MODULE_24__["offset"])(this.url,r,e)}project(r,e){return Object(_rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_25__["project"])(this.url,r,e)}relation(r,e){return Object(_rest_geometryService_relation_js__WEBPACK_IMPORTED_MODULE_26__["relation"])(this.url,r,e)}reshape(r,e,t){return Object(_rest_geometryService_reshape_js__WEBPACK_IMPORTED_MODULE_27__["reshape"])(this.url,r,e,t)}simplify(r,e){return Object(_rest_geometryService_simplify_js__WEBPACK_IMPORTED_MODULE_28__["simplify"])(this.url,r,e)}toGeoCoordinateString(r,e){return Object(_rest_geometryService_toGeoCoordinateString_js__WEBPACK_IMPORTED_MODULE_29__["toGeoCoordinateString"])(this.url,r,e)}trimExtend(r,e){return Object(_rest_geometryService_trimExtend_js__WEBPACK_IMPORTED_MODULE_30__["trimExtend"])(this.url,r,e)}union(r,e){return Object(_rest_geometryService_union_js__WEBPACK_IMPORTED_MODULE_31__["union"])(this.url,r,e)}};C.UNIT_METER=9001,C.UNIT_GERMAN_METER=9031,C.UNIT_FOOT=9002,C.UNIT_SURVEY_FOOT=9003,C.UNIT_CLARKE_FOOT=9005,C.UNIT_FATHOM=9014,C.UNIT_NAUTICAL_MILE=9030,C.UNIT_SURVEY_CHAIN=9033,C.UNIT_SURVEY_LINK=9034,C.UNIT_SURVEY_MILE=9035,C.UNIT_KILOMETER=9036,C.UNIT_CLARKE_YARD=9037,C.UNIT_CLARKE_CHAIN=9038,C.UNIT_CLARKE_LINK=9039,C.UNIT_SEARS_YARD=9040,C.UNIT_SEARS_FOOT=9041,C.UNIT_SEARS_CHAIN=9042,C.UNIT_SEARS_LINK=9043,C.UNIT_BENOIT_1895A_YARD=9050,C.UNIT_BENOIT_1895A_FOOT=9051,C.UNIT_BENOIT_1895A_CHAIN=9052,C.UNIT_BENOIT_1895A_LINK=9053,C.UNIT_BENOIT_1895B_YARD=9060,C.UNIT_BENOIT_1895B_FOOT=9061,C.UNIT_BENOIT_1895B_CHAIN=9062,C.UNIT_BENOIT_1895B_LINK=9063,C.UNIT_INDIAN_FOOT=9080,C.UNIT_INDIAN_1937_FOOT=9081,C.UNIT_INDIAN_1962_FOOT=9082,C.UNIT_INDIAN_1975_FOOT=9083,C.UNIT_INDIAN_YARD=9084,C.UNIT_INDIAN_1937_YARD=9085,C.UNIT_INDIAN_1962_YARD=9086,C.UNIT_INDIAN_1975_YARD=9087,C.UNIT_FOOT_1865=9070,C.UNIT_RADIAN=9101,C.UNIT_DEGREE=9102,C.UNIT_ARCMINUTE=9103,C.UNIT_ARCSECOND=9104,C.UNIT_GRAD=9105,C.UNIT_GON=9106,C.UNIT_MICRORADIAN=9109,C.UNIT_ARCMINUTE_CENTESIMAL=9112,C.UNIT_ARCSECOND_CENTESIMAL=9113,C.UNIT_MIL6400=9114,C.UNIT_BRITISH_1936_FOOT=9095,C.UNIT_GOLDCOAST_FOOT=9094,C.UNIT_INTERNATIONAL_CHAIN=109003,C.UNIT_INTERNATIONAL_LINK=109004,C.UNIT_INTERNATIONAL_YARD=109001,C.UNIT_STATUTE_MILE=9093,C.UNIT_SURVEY_YARD=109002,C.UNIT_50KILOMETER_LENGTH=109030,C.UNIT_150KILOMETER_LENGTH=109031,C.UNIT_DECIMETER=109005,C.UNIT_CENTIMETER=109006,C.UNIT_MILLIMETER=109007,C.UNIT_INTERNATIONAL_INCH=109008,C.UNIT_US_SURVEY_INCH=109009,C.UNIT_INTERNATIONAL_ROD=109010,C.UNIT_US_SURVEY_ROD=109011,C.UNIT_US_NAUTICAL_MILE=109012,C.UNIT_UK_NAUTICAL_MILE=109013,C.UNIT_SQUARE_INCHES="esriSquareInches",C.UNIT_SQUARE_FEET="esriSquareFeet",C.UNIT_SQUARE_YARDS="esriSquareYards",C.UNIT_ACRES="esriAcres",C.UNIT_SQUARE_MILES="esriSquareMiles",C.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",C.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",C.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",C.UNIT_SQUARE_METERS="esriSquareMeters",C.UNIT_ARES="esriAres",C.UNIT_HECTARES="esriHectares",C.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],C.prototype,"url",void 0),C=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.GeometryService")],C);var g=C;/* harmony default export */ __webpack_exports__["default"] = (g);


/***/ }),

/***/ "1STP":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/simplify.js ***!
  \********************************************************************/
/*! exports provided: simplify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplify", function() { return o; });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "pXG8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function o(o,m,f){const n="string"==typeof o?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__["urlToObject"])(o):o,p=m[0].spatialReference,a=Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["getJsonType"])(m[0]),u={...f,query:{...n.query,f:"json",sr:p.wkid?p.wkid:JSON.stringify(p),geometries:JSON.stringify(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["encodeGeometries"])(m))}},{data:y}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(n.path+"/simplify",u);return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["decodeGeometries"])(y.geometries,a,p)}


/***/ }),

/***/ "5Q/F":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/reshape.js ***!
  \*******************************************************************/
/*! exports provided: reshape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reshape", function() { return i; });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function i(i,n,p,a){const f=n.spatialReference,m=Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["parseUrl"])(i),y={...m.query,f:"json",sr:JSON.stringify(f.toJSON()),target:JSON.stringify({geometryType:Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["getJsonType"])(n),geometry:n.toJSON()}),reshaper:JSON.stringify(p.toJSON())},g=Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asValidOptions"])(y,a);return Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(m.path+"/reshape",g).then((({data:e})=>Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(e.geometry).set({spatialReference:f})))}


/***/ }),

/***/ "5USS":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/distance.js ***!
  \********************************************************************/
/*! exports provided: distance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return r; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function r(r,s,e){const a=Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["parseUrl"])(r),i={...a.query,f:"json",...s.toJSON()},c=Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["asValidOptions"])(i,e);return Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a.path+"/distance",c).then((({data:t})=>t&&t.distance))}


/***/ }),

/***/ "Cexc":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/autoComplete.js ***!
  \************************************************************************/
/*! exports provided: autoComplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoComplete", function() { return i; });
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/Polygon.js */ "Ehki");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ "4GrV");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "pXG8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function i(i,n,m,p){const g=n[0].spatialReference,f=Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["parseUrl"])(i),a={...f.query,f:"json",sr:JSON.stringify(g.toJSON()),polygons:JSON.stringify(Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["encodeGeometries"])(n).geometries),polylines:JSON.stringify(Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["encodeGeometries"])(m).geometries)},y=Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["asValidOptions"])(a,p);return Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(f.path+"/autoComplete",y).then((({data:t})=>(t.geometries||[]).map((({rings:t})=>new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_0__["default"]({spatialReference:g,rings:t})))))}


/***/ }),

/***/ "EPdg":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/offset.js ***!
  \******************************************************************/
/*! exports provided: offset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return m; });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/* harmony import */ var _tasks_operations_offset_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tasks/operations/offset.js */ "xazm");
/* harmony import */ var _tasks_support_OffsetParameters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tasks/support/OffsetParameters.js */ "jksI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function m(m,p,a){p=_tasks_support_OffsetParameters_js__WEBPACK_IMPORTED_MODULE_4__["default"].from(p);const i=Object(_tasks_operations_offset_js__WEBPACK_IMPORTED_MODULE_3__["offsetToRESTParameters"])(p),n=Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["parseUrl"])(m),j={...n.query,f:"json",...i},u=p.geometries[0].spatialReference,c=Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asValidOptions"])(j,a);return Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(n.path+"/offset",c).then((({data:e})=>(e.geometries||[]).map((e=>Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(e).set({spatialReference:u})))))}


/***/ }),

/***/ "EhxB":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/difference.js ***!
  \**********************************************************************/
/*! exports provided: difference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return i; });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "pXG8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function i(i,m,n,f){const p=m[0].spatialReference,y=Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["parseUrl"])(i);let a={query:{...y.query,f:"json",sr:JSON.stringify(p.toJSON()),geometries:JSON.stringify(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["encodeGeometries"])(m)),geometry:JSON.stringify({geometryType:Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["getJsonType"])(n),geometry:n.toJSON()})}};return f&&(a={...f,...a}),Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(y.path+"/difference",a).then((({data:e})=>(e.geometries||[]).map((e=>Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(e).set({spatialReference:p})))))}


/***/ }),

/***/ "Giuk":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/convexHull.js ***!
  \**********************************************************************/
/*! exports provided: convexHull */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convexHull", function() { return i; });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "pXG8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function i(i,n,m){const f=n[0].spatialReference,p=Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["parseUrl"])(i),a={...p.query,f:"json",sr:JSON.stringify(f.toJSON()),geometries:JSON.stringify(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["encodeGeometries"])(n))},u=Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asValidOptions"])(a,m);return Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(p.path+"/convexHull",u).then((({data:e})=>Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(e.geometry).set({spatialReference:f})))}


/***/ }),

/***/ "JhN6":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/cut.js ***!
  \***************************************************************/
/*! exports provided: cut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cut", function() { return o; });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ "4GrV");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function o(o,i,n,m){const a=Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["parseUrl"])(o),p=i[0].spatialReference,u={...m,query:{...a.query,f:"json",sr:JSON.stringify(p),target:JSON.stringify({geometryType:Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["getJsonType"])(i[0]),geometries:i}),cutter:JSON.stringify(n)}},c=await Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a.path+"/cut",u),{cutIndexes:f,geometries:g=[]}=c.data;return{cutIndexes:f,geometries:g.map((e=>{const r=Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(e);return r.spatialReference=p,r}))}}


/***/ }),

/***/ "MSw1":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/toGeoCoordinateString.js ***!
  \*********************************************************************************/
/*! exports provided: toGeoCoordinateString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toGeoCoordinateString", function() { return t; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/* harmony import */ var _units_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./units.js */ "vaBp");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function t(t,i,e){const c={};null!=i.sr&&"object"==typeof i.sr?c.sr=i.sr.wkid||JSON.stringify(i.sr):c.sr=i.sr,c.coordinates=JSON.stringify(i.coordinates);const d=i.conversionType||"mgrs";c.conversionType=_units_js__WEBPACK_IMPORTED_MODULE_2__["conversionTypeKebabDict"].toJSON(d),c.conversionMode=i.conversionMode,c.numOfDigits=i.numOfDigits,c.rounding=i.rounding,c.addSpaces=i.addSpaces;const a=Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["parseUrl"])(t),u={...a.query,f:"json",...c},f=Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["asValidOptions"])(u,e);return Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a.path+"/toGeoCoordinateString",f).then((({data:o})=>o.strings))}


/***/ }),

/***/ "NdSu":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/generalize.js ***!
  \**********************************************************************/
/*! exports provided: generalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalize", function() { return i; });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/* harmony import */ var _tasks_operations_generalize_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tasks/operations/generalize.js */ "Fpx9");
/* harmony import */ var _tasks_support_GeneralizeParameters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tasks/support/GeneralizeParameters.js */ "UH+o");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function i(i,m,p){const n=(m=_tasks_support_GeneralizeParameters_js__WEBPACK_IMPORTED_MODULE_4__["default"].from(m)).toJSON(),f=Object(_tasks_operations_generalize_js__WEBPACK_IMPORTED_MODULE_3__["generalizeToRESTParameters"])(m),j=Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["parseUrl"])(i),l={...j.query,f:"json",...f},u=n.geometries[0].spatialReference,c=Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asValidOptions"])(l,p);return Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(j.path+"/generalize",c).then((({data:r})=>(r.geometries||[]).map((r=>Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(r).set({spatialReference:u})))))}


/***/ }),

/***/ "T9St":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/areasAndLengths.js ***!
  \***************************************************************************/
/*! exports provided: areasAndLengths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areasAndLengths", function() { return o; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function o(o,s,e){const a=Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["parseUrl"])(o),u={...a.query,f:"json",...s.toJSON()},f=Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["asValidOptions"])(u,e);return Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a.path+"/areasAndLengths",f).then((t=>t.data))}


/***/ }),

/***/ "bMVx":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/fromGeoCoordinateString.js ***!
  \***********************************************************************************/
/*! exports provided: fromGeoCoordinateString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromGeoCoordinateString", function() { return t; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/* harmony import */ var _units_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./units.js */ "vaBp");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function t(t,i,e){const c={};null!=i.sr&&"object"==typeof i.sr?c.sr=i.sr.wkid||JSON.stringify(i.sr):c.sr=i.sr,c.strings=JSON.stringify(i.strings);const f=i.conversionType||"mgrs";c.conversionType=_units_js__WEBPACK_IMPORTED_MODULE_2__["conversionTypeKebabDict"].toJSON(f),c.conversionMode=i.conversionMode;const m=Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["parseUrl"])(t),p={...m.query,f:"json",...c},u=Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["asValidOptions"])(p,e);return Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(m.path+"/fromGeoCoordinateString",u).then((({data:o})=>o.coordinates))}


/***/ }),

/***/ "nkC/":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/relation.js ***!
  \********************************************************************/
/*! exports provided: relation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relation", function() { return e; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/* harmony import */ var _tasks_operations_relation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tasks/operations/relation.js */ "fQPN");
/* harmony import */ var _tasks_support_RelationParameters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tasks/support/RelationParameters.js */ "Nvf0");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function e(e,n,i){n=_tasks_support_RelationParameters_js__WEBPACK_IMPORTED_MODULE_3__["default"].from(n);const m=Object(_tasks_operations_relation_js__WEBPACK_IMPORTED_MODULE_2__["relationToRESTParameters"])(n),p=Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["parseUrl"])(e),f={...p.query,f:"json",...m},u=Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["asValidOptions"])(f,i);return Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(p.path+"/relation",u).then((({data:t})=>t.relations))}


/***/ }),

/***/ "q/vV":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/labelPoints.js ***!
  \***********************************************************************/
/*! exports provided: labelPoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labelPoints", function() { return r; });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function r(r,i,n){const p=i.map((t=>t.toJSON())),a=i[0].spatialReference,f=Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["parseUrl"])(r),l={...f.query,f:"json",sr:a.wkid?a.wkid:JSON.stringify(a.toJSON()),polygons:JSON.stringify(p)},m=Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asValidOptions"])(l,n);return Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(f.path+"/labelPoints",m).then((({data:e})=>(e.labelPoints||[]).map((e=>Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(e).set({spatialReference:a})))))}


/***/ }),

/***/ "vB4c":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/intersect.js ***!
  \*********************************************************************/
/*! exports provided: intersect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersect", function() { return m; });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "pXG8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function m(m,n,p,f){const y=n[0].spatialReference,a=Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["parseUrl"])(m),g={...a.query,f:"json",sr:JSON.stringify(y.toJSON()),geometries:JSON.stringify(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["encodeGeometries"])(n)),geometry:JSON.stringify({geometryType:Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["getJsonType"])(p),geometry:p.toJSON()})},u=Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asValidOptions"])(g,f);return Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a.path+"/intersect",u).then((({data:e})=>(e.geometries||[]).map((e=>Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(e).set({spatialReference:y})))))}


/***/ }),

/***/ "vBrX":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/buffer.js ***!
  \******************************************************************/
/*! exports provided: buffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return s; });
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/Polygon.js */ "Ehki");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ "4GrV");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function s(s,n,i){const m=Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["parseUrl"])(s),a={...m.query,f:"json",...n.toJSON()},f=n.outSpatialReference||n.geometries[0].spatialReference,p=Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["asValidOptions"])(a,i);return Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(m.path+"/buffer",p).then((r=>(r.data.geometries||[]).map((({rings:r})=>new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_0__["default"]({spatialReference:f,rings:r})))))}


/***/ }),

/***/ "whjZ":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/lengths.js ***!
  \*******************************************************************/
/*! exports provided: lengths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lengths", function() { return n; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/* harmony import */ var _tasks_operations_lengths_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tasks/operations/lengths.js */ "2jrz");
/* harmony import */ var _tasks_support_LengthsParameters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tasks/support/LengthsParameters.js */ "1lHr");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function n(n,m,a){m=_tasks_support_LengthsParameters_js__WEBPACK_IMPORTED_MODULE_3__["default"].from(m);const p=Object(_tasks_operations_lengths_js__WEBPACK_IMPORTED_MODULE_2__["lengthsToRESTParameters"])(m),f=Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["parseUrl"])(n),i={...f.query,f:"json",...p},u=Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["asValidOptions"])(i,a);return Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(f.path+"/lengths",u).then((({data:t})=>t))}


/***/ }),

/***/ "xC5X":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/densify.js ***!
  \*******************************************************************/
/*! exports provided: densify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "densify", function() { return o; });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "u3Ia");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function o(o,i,n){const m=i.geometries[0].spatialReference,p=Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["parseUrl"])(o),a={...p.query,f:"json",...i.toJSON()},f=Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["asValidOptions"])(a,n);return Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(p.path+"/densify",f).then((({data:t})=>(t.geometries||[]).map((t=>Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["fromJSON"])(t).set({spatialReference:m})))))}


/***/ })

}]);
//# sourceMappingURL=tasks-GeometryService-js.js.map