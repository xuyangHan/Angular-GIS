(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["graphics-editingSupport-js"],{

/***/ "CJn3":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/editingSupport.js ***!
  \*********************************************************************/
/*! exports provided: applyEdits, isEditableLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyEdits", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEditableLayer", function() { return l; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Collection.js */ "LE9a");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Graphic.js */ "jWBI");
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/support/normalizeUtils.js */ "qNUd");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function l(e){var t,a;return!0===(null==e||null==(t=e.capabilities)||null==(a=t.operations)?void 0:a.supportsEditing)&&e&&(!("editingEnabled"in e)||e.editingEnabled)}function n(e){return e&&null!=e.applyEdits}async function o(t,a,r,s){let d,i;const l={edits:r,result:new Promise(((e,t)=>{d=e,i=t}))};t.emit("apply-edits",l);try{const{results:i,edits:l}=await p(t,a,r,s),n=t=>t.filter((e=>!e.error)).map(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"]),o={edits:l,addedFeatures:n(i.addFeatureResults),updatedFeatures:n(i.updateFeatureResults),deletedFeatures:n(i.deleteFeatureResults),addedAttachments:n(i.addAttachmentResults),updatedAttachments:n(i.updateAttachmentResults),deletedAttachments:n(i.deleteAttachmentResults)};return(o.addedFeatures.length||o.updatedFeatures.length||o.deletedFeatures.length||o.addedAttachments.length||o.updatedAttachments.length||o.deletedAttachments.length)&&t.emit("edits",o),d(o),i}catch(n){throw i(n),n}}async function p(e,t,r,s){if(await e.load(),!n(t))return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e}));if(!e.editingEnabled)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const d=await u(e,r,s);return d.addFeatures.length||d.updateFeatures.length||d.deleteFeatures.length||d.addAttachments.length||d.updateAttachments.length||d.deleteAttachments.length?{edits:d,results:await t.applyEdits(d,s)}:{edits:d,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}function u(e,t,r){const d=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),i=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments);if(!t||!d&&!i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&r&&r.gdbVersion)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&r&&r.rollbackOnFailureEnabled)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&r&&r.globalIdUsed)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!r||!r.globalIdUsed)&&i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const l={...t};if(l.addFeatures=t&&_core_Collection_js__WEBPACK_IMPORTED_MODULE_4__["default"].isCollection(t.addFeatures)?t.addFeatures.toArray():l.addFeatures||[],l.updateFeatures=t&&_core_Collection_js__WEBPACK_IMPORTED_MODULE_4__["default"].isCollection(t.updateFeatures)?t.updateFeatures.toArray():l.updateFeatures||[],l.deleteFeatures=t&&_core_Collection_js__WEBPACK_IMPORTED_MODULE_4__["default"].isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():l.deleteFeatures||[],l.addFeatures.length&&!e.capabilities.operations.supportsAdd)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(l.updateFeatures.length&&!e.capabilities.operations.supportsUpdate)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(l.deleteFeatures.length&&!e.capabilities.operations.supportsDelete)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");l.addAttachments=l.addAttachments||[],l.updateAttachments=l.updateAttachments||[],l.deleteAttachments=l.deleteAttachments||[],l.addFeatures=l.addFeatures.map(b),l.updateFeatures=l.updateFeatures.map(b);const n=r&&r.globalIdUsed;return l.addFeatures.forEach((t=>c(t,e,n))),l.updateFeatures.forEach((t=>y(t,e,n))),l.deleteFeatures.forEach((t=>m(t,e,n))),l.addAttachments.forEach((t=>g(t,e))),l.updateAttachments.forEach((t=>g(t,e))),f(l)}function h(e,r,s){if(s){if("attributes"in e&&!e.attributes[r.globalIdField])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${r.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${r.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.geometry)){if(e.geometry.hasZ&&!1===r.capabilities.data.supportsZ)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${r.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===r.capabilities.data.supportsM)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${r.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function c(e,t,a){h(e,t,a)}function m(e,t,a){h(e,t,a)}function y(e,r,s){if(h(e,r,s),"geometry"in e&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.geometry)&&!r.capabilities.editing.supportsGeometryUpdate)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${r.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function g(e,t){const{feature:s,attachment:d}=e;if(!s||"attributes"in s&&!s.attributes[t.globalIdField])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in s)&&!s.globalId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!d.globalId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!d.data&&!d.uploadId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(d.data instanceof File&&!!d.data.name)&&!d.name)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&d.uploadId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof d.data){const e=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["dataComponents"])(d.data);if(e&&!e.isBase64)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function f(e){const t=e.addFeatures,a=e.updateFeatures,r=t.concat(a).map((e=>e.geometry)),s=await Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_6__["normalizeCentralMeridian"])(r),d=t.length,l=a.length;return s.slice(0,d).forEach(((t,a)=>{e.addFeatures[a].geometry=t})),s.slice(d,d+l).forEach(((t,a)=>{e.updateFeatures[a].geometry=t})),e}function b(e){const t=new _Graphic_js__WEBPACK_IMPORTED_MODULE_5__["default"];return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}


/***/ })

}]);
//# sourceMappingURL=graphics-editingSupport-js.js.map