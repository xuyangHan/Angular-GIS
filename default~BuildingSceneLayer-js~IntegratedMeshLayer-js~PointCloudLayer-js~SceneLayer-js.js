(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js"],{

/***/ "+bym":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/webdoc/support/saveUtils.js ***!
  \***************************************************************/
/*! exports provided: saveResources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveResources", function() { return a; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/asyncUtils.js */ "eSsm");
/* harmony import */ var _portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../portal/support/resourceUtils.js */ "5qYV");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function a(s,a,u){if(!a||!a.resources)return;const h=a.portalItem===s.portalItem?new Set(s.paths):new Set;s.paths.length=0,s.portalItem=a.portalItem;const i=new Set(a.resources.toKeep.map((r=>r.resource.path))),f=new Set,m=[];i.forEach((r=>{h.delete(r),s.paths.push(r)}));for(const r of a.resources.toUpdate)if(h.delete(r.resource.path),i.has(r.resource.path)||f.has(r.resource.path)){const{resource:o,content:t,finish:a,error:p}=r,h=Object(_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_4__["getSiblingOfSameTypeI"])(o,Object(_core_uuid_js__WEBPACK_IMPORTED_MODULE_1__["generateUUID"])());s.paths.push(h.path),m.push(n({resource:h,content:t,finish:a,error:p},u))}else s.paths.push(r.resource.path),m.push(p(r,u)),f.add(r.resource.path);for(const r of a.resources.toAdd)m.push(n(r,u)),s.paths.push(r.resource.path);if(h.forEach((r=>{const e=a.portalItem.resourceFromPath(r);m.push(e.portalItem.removeResource(e).catch((()=>{})))})),0===m.length)return;const l=await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["eachAlways"])(m);Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["throwIfAborted"])(u);const d=l.filter((r=>"error"in r)).map((r=>r.error));if(d.length>0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("save:resources","Failed to save one or more resources",{errors:d})}async function n(r,e){const o=await Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_3__["result"])(r.resource.portalItem.addResource(r.resource,r.content,e));if(!0!==o.ok)throw r.error&&r.error(o.error),o.error;r.finish&&r.finish(r.resource)}async function p(r,e){const o=await Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_3__["result"])(r.resource.update(r.content,e));if(!0!==o.ok)throw r.error(o.error),o.error;r.finish(r.resource)}


/***/ }),

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


/***/ }),

/***/ "Jpjp":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/multiOriginJSONSupportUtils.js ***!
  \***********************************************************************/
/*! exports provided: isMultiOriginJSONMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMultiOriginJSONMixin", function() { return i; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function i(i){return i&&"getAtOrigin"in i&&"originOf"in i}


/***/ }),

/***/ "bjZF":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/I3SIndexInfo.js ***!
  \******************************************************************/
/*! exports provided: fetchIndexInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchIndexInfo", function() { return n; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function n(n,t,s,a,i){let d=null;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s)){const o=`${n}/nodepages/`,t=o+Math.floor(s.rootIndex/s.nodesPerPage);try{return{type:"page",rootPage:(await Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(t,{query:{f:"json"},responseType:"json",signal:i})).data,rootIndex:s.rootIndex,pageSize:s.nodesPerPage,lodMetric:s.lodSelectionMetricType,urlPrefix:o}}catch(c){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(a)&&a.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",t,c),d=c}}if(!t)return null;const l=`${n}/nodes/`,p=l+(t&&t.split("/").pop());try{return{type:"node",rootNode:(await Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(p,{query:{f:"json"},responseType:"json",signal:i})).data,urlPrefix:l}}catch(c){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("sceneservice:root-node-missing","Root node missing.",{pageError:d,nodeError:c,url:p})}}


/***/ }),

/***/ "lq5k":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/SceneService.js ***!
  \*****************************************************************/
/*! exports provided: SCENE_SERVICE_ITEM_TYPE, SceneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCENE_SERVICE_ITEM_TYPE", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneService", function() { return R; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../portal/Portal.js */ "AiS/");
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../portal/PortalItem.js */ "p+Gi");
/* harmony import */ var _core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../core/accessorSupport/originUtils.js */ "yoHx");
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../support/arcgisLayerUrl.js */ "VLTf");
/* harmony import */ var _geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../geometry/HeightModelInfo.js */ "5k2a");
/* harmony import */ var _webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../webdoc/support/saveUtils.js */ "+bym");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../support/commonProperties.js */ "IvSi");
/* harmony import */ var _support_I3SIndexInfo_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../support/I3SIndexInfo.js */ "bjZF");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const N=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.layers.mixins.SceneService"),R=r=>{let R=class extends r{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["debounce"])((async(e,t,r)=>{switch(e){case 0:return this._save(t);case 1:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__["default"](o):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e)return _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__["default"].fromJSON(e,r);const o=t.store,i=this._readSpatialReference(t);return null==i||null==o||null==o.extent||!Array.isArray(o.extent)||o.extent.some((e=>e<O))?null:new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__["default"]({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:i})}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"",i={major:Number.NaN,minor:Number.NaN,versionString:o},s=o.split(".");return s.length>=2&&(i.major=parseInt(s[0],10),i.minor=parseInt(s[1],10)),i}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,r){const o=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_20__["titleFromUrlAndName"])(this.url,r.name);let i=r.name;if(!i&&this.url){const e=Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_20__["parse"])(this.url);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)&&(i=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&o&&(i=o+" - "+i),Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_20__["cleanTitle"])(i)}set url(e){const t=Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_20__["sanitizeUrlWithLayerId"])({layer:this,url:e,nonStandardUrlAllowed:!1,logger:N});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_20__["writeUrlWithLayerId"])(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["urlToObject"])(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=Object(_support_I3SIndexInfo_js__WEBPACK_IMPORTED_MODULE_24__["fetchIndexInfo"])(this.parsedUrl.path,this.rootNode,e,N,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===(null==e?void 0:e.type)){var t,r;const o=e.rootIndex%e.pageSize,i=null==(t=e.rootPage)||null==(r=t.nodes)?void 0:r[o];if(null==i||null==i.obb||null==i.obb.center||null==i.obb.halfSize)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("sceneservice:invalid-node-page","Invalid node page.");if(i.obb.center[0]<O||null==this.fullExtent||this.fullExtent.hasZ)return;const s=i.obb.halfSize,a=i.obb.center[2],n=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this.fullExtent.zmin=a-n,this.fullExtent.zmax=a+n}else if("node"===(null==e?void 0:e.type)){var o;const t=null==(o=e.rootNode)?void 0:o.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<O)return;const r=t[2],i=t[3];this.fullExtent.zmin=r-i,this.fullExtent.zmax=r+i}}async _fetchService(e){if(null==this.url)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await Object(_request_js__WEBPACK_IMPORTED_MODULE_16__["default"])(this.url,{query:{f:"json"},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await Object(_request_js__WEBPACK_IMPORTED_MODULE_16__["default"])(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));const r=t.data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const i of o)e.typeKeywords.push(i);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),1===r&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const r={...T,...t};let o=_portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__["default"].from(e);o||(N.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),o.id&&(o=o.clone(),o.id=null);const i=o.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__["default"].getDefault();await this._ensureLoadBeforeSave(),o.type=E,o.portal=i;const s={origin:"portal-item",url:null,messages:[],portal:i,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},a={layers:[this.write(null,s)]};return await Promise.all(s.resources.pendingOperations),await this._validateAgainstJSONSchema(a,s,r),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,r,1),await i._signIn(),await i.user.addItem({item:o,folder:r&&r.folder,data:a}),await Object(_webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_22__["saveResources"])(this.resourceReferences,s,null),this.portalItem=o,Object(_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_19__["updateOrigins"])(s),s.portalItem=o,o}async _save(e){const t={...T,...e};this.portalItem||(N.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==E&&(N.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+E),await Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${E}"`))),await this._ensureLoadBeforeSave();const r={origin:"portal-item",url:this.portalItem.itemUrl&&Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["urlToObject"])(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__["default"].getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write(null,r)]};return await Promise.all(r.resources.pendingOperations),await this._validateAgainstJSONSchema(o,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,0),await this.portalItem.update({data:o}),await Object(_webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_22__["saveResources"])(this.resourceReferences,r,null),Object(_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_19__["updateOrigins"])(r),this.portalItem}async _validateAgainstJSONSchema(e,t,r){let o=t.messages.filter((e=>"error"===e.type)).map((e=>new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"](e.name,e.message,e.details)));if(r&&r.validationOptions.ignoreUnsupported&&(o=o.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name))),r.validationOptions.enabled||U){const t=(await __webpack_require__.e(/*! import() | support-schemaValidator-js */ "support-schemaValidator-js").then(__webpack_require__.bind(null, /*! ../support/schemaValidator.js */ "p+sB"))).validate(e,r.portalItemLayerType);if(t.length>0){const e=`Layer item did not validate:\n${t.join("\n")}`;if(N.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===r.validationOptions.failPolicy){const e=t.map((e=>new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("sceneservice:schema-validation",e))).concat(o);throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(o.length>0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:o})}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_23__["id"])],R.prototype,"id",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__["default"]})],R.prototype,"spatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],R.prototype,"readSpatialReference",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__["default"]})],R.prototype,"fullExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],R.prototype,"readFullExtent",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,type:_geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_21__["default"]})],R.prototype,"heightModelInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],R.prototype,"minScale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],R.prototype,"maxScale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0})],R.prototype,"version",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("version",["store.version"])],R.prototype,"readVersion",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{read:{source:"copyrightText"}}})],R.prototype,"copyright",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{read:!1}})],R.prototype,"sublayerTitleMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String})],R.prototype,"title",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("portal-item","title")],R.prototype,"readTitlePortalItem",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("service","title",["name"])],R.prototype,"readTitleService",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],R.prototype,"layerId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_23__["url"])],R.prototype,"url",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("url")],R.prototype,"writeUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],R.prototype,"parsedUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0})],R.prototype,"store",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],R.prototype,"rootNode",void 0),R=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.mixins.SceneService")],R),R},O=-1e38,U=!1,E="Scene Service",T={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};


/***/ }),

/***/ "yoHx":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/accessorSupport/originUtils.js ***!
  \***********************************************************************/
/*! exports provided: updateOrigins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOrigins", function() { return r; });
/* harmony import */ var _multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../multiOriginJSONSupportUtils.js */ "Jpjp");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function r(r){r&&r.writtenProperties&&r.writtenProperties.forEach((r=>{const t=r.target;r.newOrigin&&r.oldOrigin!==r.newOrigin&&Object(_multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__["isMultiOriginJSONMixin"])(t)&&t.updateOrigin(r.propName,r.newOrigin)}))}


/***/ })

}]);
//# sourceMappingURL=default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js.js.map