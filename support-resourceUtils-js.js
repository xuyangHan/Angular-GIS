(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-resourceUtils-js"],{

/***/ "5qYV":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/resourceUtils.js ***!
  \*******************************************************************/
/*! exports provided: addOrUpdateResource, contentToBlob, fetchResources, getSiblingOfSameType, getSiblingOfSameTypeI, removeAllResources, removeResource, splitPrefixFileNameAndExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOrUpdateResource", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentToBlob", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchResources", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSiblingOfSameType", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSiblingOfSameTypeI", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllResources", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeResource", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitPrefixFileNameAndExtension", function() { return m; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function c(t,r={},a){await t.load(a);const s=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(t.itemUrl,"resources"),{start:n=1,num:c=10,sortOrder:u="asc",sortField:l="created"}=r,i={query:{start:n,num:c,sortOrder:u,sortField:l},signal:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["get"])(a,"signal")},p=await t.portal._request(s,i);return{total:p.total,nextStart:p.nextStart,resources:p.resources.map((({created:e,size:r,resource:a})=>({created:new Date(e),size:r,resource:t.resourceFromPath(a)})))}}async function u(r,s,n,c){if(!r.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](`portal-item-resource-${s}:invalid-path`,"Resource does not have a valid path");await r.portalItem.load(c);const u=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(r.portalItem.userItemUrl,"add"===s?"addResources":"updateResources"),[l,i]=p(r.path),m=await h(n),d=new FormData;return l&&"."!==l&&d.append("resourcesPrefix",l),d.append("fileName",i),d.append("file",m,i),d.append("f","json"),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c)&&c.access&&d.append("access",c.access),await r.portalItem.portal._request(u,{method:"post",body:d,signal:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["get"])(c,"signal")}),r}async function l(t,r,s){if(!r.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await t.load(s);const n=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(t.userItemUrl,"removeResources");await t.portal._request(n,{method:"post",query:{resource:r.path},signal:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["get"])(s,"signal")}),r.portalItem=null}async function i(t,r){await t.load(r);const a=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(t.userItemUrl,"removeResources");return t.portal._request(a,{method:"post",query:{deleteAll:!0},signal:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["get"])(r,"signal")})}function p(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function m(e){const[t,r]=d(e),[a,o]=p(t);return[a,o,r]}function d(e){const t=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["getPathExtension"])(e);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function h(e){if(e instanceof Blob)return e;return(await Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e.url,{responseType:"blob"})).data}function f(e,t){if(!e.hasPath())return null;const[r,,a]=m(e.path);return e.portalItem.resourceFromPath(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(r,t+a))}function w(e,t){if(!e.hasPath())return null;const[r,,a]=m(e.path);return e.portalItem.resourceFromPath(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(r,t+a))}


/***/ })

}]);
//# sourceMappingURL=support-resourceUtils-js.js.map