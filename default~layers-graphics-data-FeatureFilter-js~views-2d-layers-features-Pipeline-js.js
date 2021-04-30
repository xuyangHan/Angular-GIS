(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-graphics-data-FeatureFilter-js~views-2d-layers-features-Pipeline-js"],{

/***/ "8gnY":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/FeatureSetReaderPBFIndirect.js ***!
  \***************************************************************************************************/
/*! exports provided: FeatureSetReaderIndirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureSetReaderIndirect", function() { return r; });
/* harmony import */ var _FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeatureSetReader.js */ "8NDJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class r extends _FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_0__["FeatureSetReader"]{constructor(r,t){super(_FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_0__["FeatureSetReader"].createInstance()),this._currentIndex=-1,this._reader=r,this._indices=t}static from(e,t){return new r(e.copy(),t)}get hasNext(){return this._currentIndex+1<this._indices.length}getApproximateSize(){return this._indices.length}getCursor(){return this.copy()}copy(){const e=new r(this._reader.copy(),this._indices);return e._currentIndex=this._currentIndex,e}next(){for(;this._nextIndex()&&!this._reader._passesFilter()&&!this._reader._getExists(););return this._currentIndex<this._indices.length}_nextIndex(){return++this._currentIndex<this._indices.length&&(this._reader.setIndex(this._indices[this._currentIndex]),!0)}setArcadeSpatialReference(e){this._reader.setArcadeSpatialReference(e)}attachStorage(e){this._reader.attachStorage(e)}get geometryType(){return this._reader.geometryType}get hasFeatures(){return this._reader.hasFeatures}get exceededTransferLimit(){return this._reader.exceededTransferLimit}get hasZ(){return this._reader.hasZ}get hasM(){return this._reader.hasM}getStorage(){return this._reader.getStorage()}getComputedNumeric(e){return this._reader.getComputedNumericAtIndex(0)}setComputedNumeric(e,r){return this._reader.setComputedNumericAtIndex(r,0)}getComputedString(e){return this._reader.getComputedStringAtIndex(0)}setComputedString(e,r){return this._reader.setComputedStringAtIndex(0,r)}getComputedNumericAtIndex(e){return this._reader.getComputedNumericAtIndex(e)}setComputedNumericAtIndex(e,r){this._reader.setComputedNumericAtIndex(e,r)}getComputedStringAtIndex(e){return this._reader.getComputedStringAtIndex(e)}setComputedStringAtIndex(e,r){return this._reader.setComputedStringAtIndex(e,r)}transform(e,r,t,d){const a=this.copy();return a._reader=this._reader.transform(e,r,t,d),a}extent(e,r,t,d){const a=this.copy();return a._reader=this._reader.extent(e,r,t,d),a}hasFilter(){return this._reader.hasFilter()}readAttribute(e,r=!1){return this._reader.readAttribute(e,r)}readAttributes(){return this._reader.readAttributes()}joinAttributes(e){return this._reader.joinAttributes(e)}readArcadeFeature(){return this._reader.readArcadeFeature()}geometry(){return this._reader.geometry()}field(e){return this.readAttribute(e,!0)}hasField(e){return this._reader.hasField(e)}setField(e,r){return this._reader.setField(e,r)}keys(){return this._reader.keys()}castToText(){return this._reader.castToText()}getQuantizationTransform(){return this._reader.getQuantizationTransform()}getAttributeHash(){return this._reader.getAttributeHash()}getObjectId(){return this._reader.getObjectId()}getDisplayId(){return this._reader.getDisplayId()}setDisplayId(e){return this._reader.setDisplayId(e)}getGroupId(){return this._reader.getGroupId()}setGroupId(e){return this._reader.setGroupId(e)}getXHydrate(){return this._reader.getXHydrate()}getYHydrate(){return this._reader.getYHydrate()}getX(){return this._reader.getX()}getY(){return this._reader.getY()}setIndex(e){return this._reader.setIndex(e)}getIndex(){return this._reader.getIndex()}readLegacyFeature(){return this._reader.readLegacyFeature()}readOptimizedFeature(){return this._reader.readOptimizedFeature()}readLegacyPointGeometry(){return this._reader.readLegacyPointGeometry()}readLegacyGeometry(){return this._reader.readLegacyGeometry()}readLegacyCentroid(){return this._reader.readLegacyCentroid()}readGeometryArea(){return this._reader.readGeometryArea()}readUnquantizedGeometry(){return this._reader.readUnquantizedGeometry()}readHydratedGeometry(){return this._reader.readHydratedGeometry()}readGeometry(){return this._reader.readGeometry()}readCentroid(){return this._reader.readCentroid()}_passesFilter(){return this._reader._passesFilter()}_readAttribute(e,r){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}_readAttributes(){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}}


/***/ }),

/***/ "DJok":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/FeatureStore2D.js ***!
  \******************************************************************************/
/*! exports provided: FeatureStore2D, featureAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureStore2D", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureAdapter", function() { return u; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Evented.js */ "zm0L");
/* harmony import */ var _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/CircularArray.js */ "lx5q");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingBox.js */ "QmHG");
/* harmony import */ var _chunks_rbush_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/rbush.js */ "kB+0");
/* harmony import */ var _Store2D_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Store2D.js */ "hIOP");
/* harmony import */ var _support_FeatureSetReaderPBFIndirect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./support/FeatureSetReaderPBFIndirect.js */ "8gnY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function h(t,e){return t<<16|e}function c(t){return(4294901760&t)>>>16}function I(t){return 65535&t}const u={getObjectId:t=>t.getObjectId(),getAttributes:t=>t.readAttributes(),getAttribute:(t,e)=>t.readAttribute(e),cloneWithGeometry:(t,e)=>t,getGeometry:t=>t.readHydratedGeometry(),getCentroid:(t,e)=>t.readCentroid()};class l extends _Store2D_js__WEBPACK_IMPORTED_MODULE_6__["Store2D"]{constructor(t,e,s){super(t,e),this.featureAdapter=u,this.events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__["default"],this._featureSetsByInstance=new Map,this._objectIdToDisplayId=new Map,this._spatialIndexInvalid=!0,this._indexSearchCache=new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_3__["default"](50),this._index=Object(_chunks_rbush_js__WEBPACK_IMPORTED_MODULE_5__["r"])(9,(t=>({minX:this._storage.getXMin(t),minY:this._storage.getYMin(t),maxX:this._storage.getXMax(t),maxY:this._storage.getYMax(t)}))),this._storage=e,this.mode=s}get storage(){return this._storage}get storeStatistics(){return{featureCount:0,vertexCount:0}}hasInstance(t){return this._featureSetsByInstance.has(t)}onTileData(e,s){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(s.addOrUpdate))return s;if(s.addOrUpdate.attachStorage(this._storage),"snapshot"===this.mode){const t=s.addOrUpdate.getCursor();for(;t.next();){const s=t.getDisplayId();this.setComputedAttributes(this._storage,t,s,e.scale)}return s}this._featureSetsByInstance.set(s.addOrUpdate.instance,s.addOrUpdate);const a=s.addOrUpdate.getCursor();for(;a.next();)this._insertFeature(a,e.scale);return this._spatialIndexInvalid=!0,this.events.emit("changed"),s}search(t){this._rebuildIndex();const s=t.id,a=this._indexSearchCache.find((t=>t.tileId===s));if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a))return a.readers;const r=new Map,n=this._searchIndex(t.bounds),i=[];for(const e of n){const t=this._storage.getInstanceId(e),s=c(t),a=I(t);r.has(s)||r.set(s,[]);r.get(s).push(a)}return r.forEach(((t,e)=>{const s=this._featureSetsByInstance.get(e);i.push(_support_FeatureSetReaderPBFIndirect_js__WEBPACK_IMPORTED_MODULE_7__["FeatureSetReaderIndirect"].from(s,t))})),this._indexSearchCache.enqueue({tileId:s,readers:i}),i}insert(t){const e=t.getCursor(),s=this._storage;for(;e.next();){var a;const t=h(e.instance,e.getIndex()),r=e.getObjectId(),n=null!=(a=this._objectIdToDisplayId.get(r))?a:this._storage.createDisplayId();e.setDisplayId(n),s.setInstanceId(n,t),this._objectIdToDisplayId.set(r,n)}this._featureSetsByInstance.set(t.instance,t),this._spatialIndexInvalid=!0}remove(t){const e=this._objectIdToDisplayId.get(t);if(!e)return;const s=this._storage.getInstanceId(e),a=I(s),r=c(s),n=this._featureSetsByInstance.get(r);this._objectIdToDisplayId.delete(t),this._storage.releaseDisplayId(e),n.removeAtIndex(a),n.isEmpty&&this._featureSetsByInstance.delete(r),this._spatialIndexInvalid=!0}forEach(t){this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e),a=this._lookupFeature(s);t(a)}))}forEachUnsafe(t){this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e),a=c(s),r=I(s),n=this._getFeatureSet(a);n.setIndex(r),t(n)}))}forEachInBounds(t,e){const a=this._searchIndex(t);for(const r of a){const t=this.lookupFeatureByDisplayId(r,this._storage);e(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(t))}}forEachBounds(t,e,s){this._rebuildIndex();const a=[0,0,0,0];for(const r of t){if(!r.readGeometry())continue;const t=r.getDisplayId();a[0]=this._storage.getXMin(t),a[1]=this._storage.getYMin(t),a[2]=this._storage.getXMax(t),a[3]=this._storage.getYMax(t),e(Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["fromRect"])(s,a))}}sweepFeatures(t,e,s){this._spatialIndexInvalid=!0,this._objectIdToDisplayId.forEach(((a,r)=>{t.has(a)||(e.releaseDisplayId(a),s&&s.unsetAttributeData(a),this._objectIdToDisplayId.delete(r))})),this.events.emit("changed")}sweepFeatureSets(t){this._spatialIndexInvalid=!0,this._featureSetsByInstance.forEach(((e,s)=>{t.has(s)||this._featureSetsByInstance.delete(s)}))}lookupObjectId(e,s){const a=this.lookupFeatureByDisplayId(e,s);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(a)?null:a.getObjectId()}lookupDisplayId(t){return this._objectIdToDisplayId.get(t)}lookupFeatureByDisplayId(t,e){const s=e.getInstanceId(t);return this._lookupFeature(s)}lookupByDisplayIdUnsafe(t){const e=this._storage.getInstanceId(t),s=c(e),a=I(e),r=this._getFeatureSet(s);return r?(r.setIndex(a),r):null}_insertFeature(t,e){const s=this._storage,a=t.getObjectId(),r=h(t.instance,t.getIndex());s.getInstanceId(t.getDisplayId());let n=this._objectIdToDisplayId.get(a);n||(n=s.createDisplayId(),this._objectIdToDisplayId.set(a,n),this._spatialIndexInvalid=!0),t.setDisplayId(n),s.setInstanceId(n,r),this.setComputedAttributes(s,t,n,e)}_searchIndex(t){this._rebuildIndex();const e={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]};return this._index.search(e)}_rebuildIndex(){if(!this._spatialIndexInvalid)return;const t=[];"snapshot"===this.mode?this._featureSetsByInstance.forEach((e=>{const s=e.getCursor();for(;s.next();){const e=s.getDisplayId();this._storage.setBounds(e,s)&&t.push(e)}})):this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e);this._storage.setBounds(e,this._lookupFeature(s))&&t.push(e)})),this._index.clear(),this._index.load(t),this._indexSearchCache.clear(),this._spatialIndexInvalid=!1}_lookupFeature(t){const e=c(t),s=I(t),a=this._getFeatureSet(e);if(!a)return null;const r=a.getCursor();return r.setIndex(s),r}_getFeatureSet(t){return this._featureSetsByInstance.get(t)}}


/***/ }),

/***/ "hIOP":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/Store2D.js ***!
  \***********************************************************************/
/*! exports provided: Store2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store2D", function() { return o; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../support/arcadeOnDemand.js */ "gvqN");
/* harmony import */ var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/accessorSupport/diffUtils.js */ "DxxZ");
/* harmony import */ var _arcade_callExpressionWithCursor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../arcade/callExpressionWithCursor.js */ "xMVW");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const c=__webpack_require__.e(/*! import() | layers-support-labelFormatUtils-js */ "layers-support-labelFormatUtils-js").then(__webpack_require__.bind(null, /*! ../../../../layers/support/labelFormatUtils.js */ "zKxS"));class o{constructor(e,s){this._canCacheExpressionValue=!1,this._sourceInfo=e,this._bitsets={computed:s.getBitset(s.createBitset())}}invalidate(){this._bitsets.computed.clear()}async updateSchema(t,r){const c=Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_3__["diff"])(this._schema,r);if(this._schema=r,!r||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(c)||!Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_3__["hasDiff"])(c,"attributes"))return;Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-2d-update-debug")&&console.debug("Applying Update - Store:",c),this._bitsets.computed.clear(),t.targets[r.name]=!0;const o=r.attributes,n=[],p=[];for(const e in o){const s=o[e];switch(s.type){case"field":break;case"expression":n.push(this._createArcadeComputedField(s));break;case"label-expression":n.push(this._createLabelArcadeComputedField(s));break;case"statistic":p.push(s)}}this._computedFields=await Promise.all(n),this._canCacheExpressionValue=!this._computedFields.some((e=>"expression"===e.type&&e.expression.referencesScale())),this._statisticFields=p}setComputedAttributes(e,s,t,i){const a=this._bitsets.computed;if(!this._canCacheExpressionValue||!a.has(t)){a.set(t);for(const a of this._computedFields){const r=this._evaluateField(s,a,i);switch(a.resultType){case"numeric":e.setComputedNumericAtIndex(t,a.fieldIndex,r);break;case"string":e.setComputedStringAtIndex(t,a.fieldIndex,r)}}}}async _createArcadeComputedField(e){const s=this._sourceInfo.spatialReference,i=this._sourceInfo.fieldsIndex;return{...e,expression:await Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_2__["createRendererExpression"])(e.valueExpression,s,i)}}async _createLabelArcadeComputedField(e){const s=this._sourceInfo.spatialReference,t=this._sourceInfo.fields,{createLabelFunction:i}=await c,a=await i(e.label,t,s);return{...e,builder:a}}_evaluateField(e,s,t){switch(s.type){case"label-expression":{const t=e.readArcadeFeature();return s.builder.evaluate(t)||""}case"expression":{const{expression:i}=s;return Object(_arcade_callExpressionWithCursor_js__WEBPACK_IMPORTED_MODULE_4__["default"])(i,e,{$view:{scale:t}})}}}}


/***/ }),

/***/ "lx5q":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/core/CircularArray.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class s{constructor(t=Number.POSITIVE_INFINITY){this.size=0,this._start=0,this.maxSize=t,this._buffer=isFinite(t)?new Array(t):[]}get entries(){return this._buffer}enqueue(t){if(this.size===this.maxSize){const s=this._buffer[this._start];return this._buffer[this._start]=t,this._start=(this._start+1)%this.maxSize,s}return isFinite(this.maxSize)?this._buffer[(this._start+this.size++)%this.maxSize]=t:this._buffer[this._start+this.size++]=t,null}dequeue(){if(0===this.size)return null;const t=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,t}peek(){return 0===this.size?null:this._buffer[this._start]}find(s){if(0===this.size)return null;for(const i of this._buffer)if(Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(i)&&s(i))return i;return null}clear(s){let i=this.dequeue();for(;Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(i);)s&&s(i),i=this.dequeue()}}/* harmony default export */ __webpack_exports__["default"] = (s);


/***/ }),

/***/ "xMVW":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/arcade/callExpressionWithCursor.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function r(r,a,t){r.referencesGeometry();const n=a.readArcadeFeature();try{return r.evaluate({...t,$feature:n})}catch(o){return _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",o),null}}/* harmony default export */ __webpack_exports__["default"] = (r);


/***/ })

}]);
//# sourceMappingURL=default~layers-graphics-data-FeatureFilter-js~views-2d-layers-features-Pipeline-js.js.map