(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portal-support-layersLoader-js"],{

/***/ "O5Ly":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/layersLoader.js ***!
  \******************************************************************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return a; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Portal.js */ "AiS/");
/* harmony import */ var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../renderers/support/styleUtils.js */ "YOx9");
/* harmony import */ var _jsonContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jsonContext.js */ "Fewv");
/* harmony import */ var _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layers/support/lazyLayerLoader.js */ "oLSx");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function a(e,t){const r=e.instance.portalItem;return r&&r.id?(await r.load(t),s(e),i(e,t)):Promise.resolve()}function s(t){const r=t.instance.portalItem;if(-1===t.supportedTypes.indexOf(r.type))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:t.supportedTypes.join(", ")})}async function i(e,t){const r=e.instance,o=r.portalItem,{url:a,title:s}=o,i=Object(_jsonContext_js__WEBPACK_IMPORTED_MODULE_4__["createForItem"])(o);if("group"===r.type)return r.read({title:s},i),u(r,e);a&&r.read({url:a},i);const p=await y(e,t);return p&&r.read(p,i),r.resourceReferences={portalItem:o,paths:i.readResourcePaths},r.read({title:s},i),Object(_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_3__["loadStyleRenderer"])(r,i)}function u(t,r){let n;const l=t.portalItem.type;switch(l){case"Feature Service":n=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"].FeatureLayer;break;case"Stream Service":n=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"].StreamLayer;break;case"Scene Service":n=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"].SceneLayer;break;case"Feature Collection":n=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"].FeatureLayer;break;default:throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("portal:unsupported-item-type-as-group",`The item type '${l}' is not supported as a 'GroupLayer'`)}let a;return n().then((e=>(a=e,y(r)))).then((e=>h(e)>0?c(t,a,e):p(t,a)))}function p(e,r){if(!e.portalItem.url)return Promise.resolve();const n={responseType:"json",query:{f:"json"}};return Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.portalItem.url,n).then((t=>{var n,l;const o=t.data;function a(e){return{id:e.id,name:e.name}}o&&c(e,r,{layers:null==(n=o.layers)?void 0:n.map(a),tables:null==(l=o.tables)?void 0:l.map(a)})}))}function c(e,t,r){let n=r.layers||[];const l=r.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((e=>{var t;"Table"===(null==e||null==(t=e.layerDefinition)?void 0:t.type)&&l.push(e)})),n=n.filter((e=>{var t;return"Table"!==(null==e||null==(t=e.layerDefinition)?void 0:t.type)}))),n.reverse().forEach((n=>{const l=d(e,t,r,n);e.add(l)})),l.reverse().forEach((n=>{const l=d(e,t,r,n);e.tables.add(l)}))}function d(e,t,n,l){const o=new t({portalItem:e.portalItem.clone(),layerId:l.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const t={origin:"portal-item",portal:e.portalItem.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_2__["default"].getDefault()};o.read(l,t);const a=n.showLegend;null!=a&&o.read({showLegend:a},t)}return o}function y(e,t){if(!1===e.supportsData)return Promise.resolve(void 0);const r=e.instance;return r.portalItem.fetchData("json",t).catch((()=>null)).then((e=>{const t=e;let n;if(v(r)){let l=!0;return e&&h(t)>0&&(null==r.layerId&&(r.layerId=f(t)),n=m(t,r.layerId),n&&(1===h(t)&&(l=!1),null!=e.showLegend&&(n.showLegend=e.showLegend))),l&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),n}return e}))}function f(e){const t=e.layers;if(t&&t.length)return t[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function m(e,t){const r=e.layers;if(r)for(let l=0;l<r.length;l++)if(r[l].id===t)return r[l];const n=e.tables;if(n)for(let l=0;l<n.length;l++)if(n[l].id===t)return n[l];return null}function h(e){var t,r,n,l;return(null!=(t=null==e||null==(r=e.layers)?void 0:r.length)?t:0)+(null!=(n=null==e||null==(l=e.tables)?void 0:l.length)?n:0)}function v(e){return"stream"!==e.type&&"layerId"in e}


/***/ })

}]);
//# sourceMappingURL=portal-support-layersLoader-js.js.map