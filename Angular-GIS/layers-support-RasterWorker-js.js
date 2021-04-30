(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-support-RasterWorker-js"],{

/***/ "DABJ":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/RasterWorker.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ "4GrV");
/* harmony import */ var _PixelBlock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PixelBlock.js */ "Piei");
/* harmony import */ var _rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rasterFormats/RasterCodec.js */ "FFFX");
/* harmony import */ var _rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rasterFunctions/pixelUtils.js */ "ne7T");
/* harmony import */ var _renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../renderers/support/RasterSymbolizer.js */ "ciAr");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class n{async decode(e){const r=await Object(_rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_3__["decode"])(e.data,e.options);return r&&r.toJSON()}symbolize(s){s.pixelBlock=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(s.pixelBlock),s.extent=s.extent?_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(s.extent):null;const o=this.symbolizer.symbolize(s);return Promise.resolve(o&&o.toJSON())}async updateSymbolizer(e){var r;this.symbolizer=_renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null==(r=this.symbolizer)?void 0:r.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(e){const s=this.symbolizer.simpleStretch(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(s&&s.toJSON())}estimateStatisticsHistograms(e){const s=Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_4__["estimateStatisticsHistograms"])(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(e.srcPixelBlock));return Promise.resolve(s)}split(e){const s=Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_4__["split"])(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return s&&s.forEach(((e,r)=>{s.set(r,null==e?void 0:e.toJSON())})),Promise.resolve(s)}async mosaicAndTransform(e){const s=e.srcPixelBlocks.map((e=>e?new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_2__["default"](e):null)),o=Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_4__["mosaic"])(s,e.srcMosaicSize);if(!e.coefs)return o&&o.toJSON();const t=Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_4__["approximateTransform"])(o,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation);return t&&t.toJSON()}}/* harmony default export */ __webpack_exports__["default"] = (n);


/***/ })

}]);
//# sourceMappingURL=layers-support-RasterWorker-js.js.map