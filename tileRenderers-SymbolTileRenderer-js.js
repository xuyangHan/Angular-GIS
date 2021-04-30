(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tileRenderers-SymbolTileRenderer-js"],{

/***/ "BI/k":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/MetricReader.js ***!
  \************************************************************************************/
/*! exports provided: MetricReader, MetricReaderNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricReader", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricReaderNode", function() { return i; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const e=6,r=4294967296;class o{constructor(t){this._head=t,this._cursor=t}static from(t){const s=i.from(new Float32Array(t));return new o(s)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get hasVV(){return this._cursor.hasVV}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(t){return this._cursor.setComputedMinZoom(t)}boundsComputedAnchorX(t){return this._cursor.boundsComputedAnchorX(t)}boundsComputedAnchorY(t){return this._cursor.boundsComputedAnchorY(t)}setBoundsComputedAnchorX(t,s){return this._cursor.setBoundsComputedAnchorX(t,s)}setBoundsComputedAnchorY(t,s){return this._cursor.setBoundsComputedAnchorY(t,s)}boundsCenterX(t){return this._cursor.boundsCenterX(t)}boundsCenterY(t){return this._cursor.boundsCenterY(t)}boundsWidth(t){return this._cursor.boundsWidth(t)}boundsHeight(t){return this._cursor.boundsHeight(t)}link(s){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s._head))return this._cursor.link(s._head)}getCursor(){return this.copy()}copy(){var t;const s=new o(null==(t=this._head)?void 0:t.copy());if(!s._head)return s;let e=s._head,r=s._head._link;for(;r;)e._link=r.copy(),e=r,r=e._link;return s}peekId(){var t;return null!=(t=this._cursor.peekId())?t:this._cursor._link.peekId()}nextId(){const t=this.id;for(;t===this.id;)if(!this.next())return!1;return!0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset}restore(){this._cursor=this._savedCursor,this._cursor._offset=this._savedOffset}next(){if(!this._cursor)return!1;if(!this._cursor.next()){if(!this._cursor._link)return!1;this._cursor=this._cursor._link,this._cursor._offset=0}return!0}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}delete(s){let e=this._head,r=null;for(;e;){if(e.delete(s))return e.isEmpty()&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&(r._link=e._link),!0;r=e,e=e._link}return!1}}class i{constructor(t){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=t}static from(t){return new i(new Float32Array(t))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset+0]}set id(t){this._buffer[this._offset+0]=t}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get hasVV(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(t){this._buffer[this._offset+8]=t}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(t){return this._buffer[this._offset+10+t*e+0]}boundsComputedAnchorY(t){return this._buffer[this._offset+10+t*e+1]}setBoundsComputedAnchorX(t,s){this._buffer[this._offset+10+t*e+0]=s}setBoundsComputedAnchorY(t,s){this._buffer[this._offset+10+t*e+1]=s}boundsCenterX(t){return this._buffer[this._offset+10+t*e+2]}boundsCenterY(t){return this._buffer[this._offset+10+t*e+3]}boundsWidth(t){return this._buffer[this._offset+10+t*e+4]}boundsHeight(t){return this._buffer[this._offset+10+t*e+5]}link(t){let s=this;for(;s._link;)s=s._link;s._link=t}getCursor(){return this.copy()}copy(){const t=new i(this._buffer);return t._link=this._link,t._offset=this._offset,t._deletedCount=this._deletedCount,t._offsets=this._offsets,t._count=this._count,t}peekId(){const t=this._offset+10+this.boundsCount*e+0;return t>=this._buffer.length?0:this._buffer[t]}next(){let t=0;for(;this._offset<this._buffer.length&&t++<100&&(-1===this._offset?this._offset=0:this._offset+=10+this.boundsCount*e,this.id===r););return this.id!==r&&this._offset<this._buffer.length}delete(t){const s=this._offset,e=this.lookup(t);if(e)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===t;)this.id=4294967295,++this._deletedCount;return this._offset=s,e}lookup(t){const e=this._offset;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._offsets.instance)){this._offsets.instance=new Map;const t=this.copy();t._offset=-1;let s=0;for(;t.next();)t.id!==s&&(this._offsets.instance.set(t.id,t._offset),s=t.id)}return!!this._offsets.instance.has(t)&&(this._offset=this._offsets.instance.get(t),this.id!==r||(this._offset=e,!1))}_computeCount(){const t=this._offset;let s=0;for(this._offset=-1;this.next();)s++;return this._offset=t,s}}


/***/ }),

/***/ "PL4a":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/FeatureTile.js ***!
  \************************************************************************/
/*! exports provided: FeatureTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureTile", function() { return g; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/CircularArray.js */ "lx5q");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/mat2d.js */ "opr1");
/* harmony import */ var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/mat2df32.js */ "LGNZ");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Utils.js */ "yN2G");
/* harmony import */ var _WGLTile_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WGLTile.js */ "KFVX");
/* harmony import */ var _collisions_MetricReader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./collisions/MetricReader.js */ "BI/k");
/* harmony import */ var _cpuMapped_Geometry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cpuMapped/Geometry.js */ "jo7+");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const u=50,f=4,S=8;let w=0;class g extends _WGLTile_js__WEBPACK_IMPORTED_MODULE_9__["WGLTile"]{constructor(e,t,r){super(e,t),this.instanceId=w++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_2__["default"](100),this._lastCommitTime=0,this._lastMessageWasClear=!1,this.transforms.labelMat2d=Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),this._store=r}destroy(){super.destroy(),this._renderState.current.geometry.forEach((e=>e.destroy()))}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return!!this._renderState.current.geometry.size}getGeometry(e){return this._renderState.current.geometry.get(e)}setTransform(e,t){super.setTransform(e,t);const r=this.transforms.labelMat2d,s=e.getScreenTransform(r,t),o=Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_6__["c"])();Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["t"])(o,this.coords,s),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_4__["i"])(r),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_4__["t"])(r,r,o),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_4__["m"])(r,e.viewMat2d,r)}patch(e){this.patchCount++,e.clear&&this._lastMessageWasClear||(this._lastMessageWasClear=e.clear,e.clear&&this._patches.size>=u&&this._dropPatches(),this._patches.enqueue(e),this.requestRender())}commit(e){if(this._lastCommitTime!==e.time){this._lastCommitTime=e.time;for(let e=0;e<f;e++)this._updateMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender())}}lock(){this._renderState.locked=!0}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap()}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();if(this._renderState.swap=!0,0===this._renderState.swapFrames)return this._renderState.swapFrames=S,void this.requestRender();1==this._renderState.swapFrames--?this._swap():this.requestRender()}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._renderState.next)&&(this._renderState.current.geometry.forEach((e=>e.destroy())),this._renderState.current=this._renderState.next,this._renderState.next=null))}_flushUpdates(){let e=this._patches.maxSize;for(;this._patches.size&&e--;)this._updateMesh(),this._swap()}_updateMesh(){const t=this._patches.peek();if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t)&&t.clear&&null!==this._renderState.next)return;const r=this._patches.dequeue();if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(r)){if(!0===r.clear){if(!this.isReady)return;return this._renderState.next,void(this._renderState.next={geometry:new Map,metrics:null})}this.requestRender(),this._patch(r),r.end&&(this.ready(),this._swapRenderStates())}}_patch(e){Object(_Utils_js__WEBPACK_IMPORTED_MODULE_8__["forEachGeometryType"])((t=>{this._remove(t,e.remove),this._insert(e.type,t,e.addOrUpdate,e.clear)}))}_insert(e,s,i,a){try{const n=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOr"])(this._renderState.next,this._renderState.current),h=null==i?void 0:i.data[s],o=n.geometry;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(h))return;o.has(s)||o.set(s,new _cpuMapped_Geometry_js__WEBPACK_IMPORTED_MODULE_11__["Geometry"](s,this.stage)),o.get(s).insert(e,h),s===_enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLGeometryType"].LABEL&&this._insertLabelMetrics(e,h.metrics,a)}catch(n){}}_insertLabelMetrics(e,s,i){const a=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOr"])(this._renderState.next,this._renderState.current);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(s))return;const n=_collisions_MetricReader_js__WEBPACK_IMPORTED_MODULE_10__["MetricReader"].from(s);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(a.metrics))a.metrics=n;else{if("update"===e){const e=n.getCursor();for(;e.next();)a.metrics.delete(e.id)}a.metrics.link(n)}}_remove(e,r){const s=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOr"])(this._renderState.next,this._renderState.current).geometry.get(e);r&&r.length&&s&&(s.remove(r),this._removeLabelMetrics(r))}_removeLabelMetrics(e){const{metrics:s}=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOr"])(this._renderState.next,this._renderState.current);if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(s)&&e.length)for(const t of e)for(;s.delete(t););}_dropPatches(){const e=new Array;let t=!1;for(;this._patches.size;){const s=this._patches.dequeue();if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(s))break;if(s.clear){if(t)break;t=!0}e.push(s)}this._patches.clear(),e.forEach((e=>this._patches.enqueue(e)))}}


/***/ }),

/***/ "bdHb":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/support/WGLFeatureView.js ***!
  \****************************************************************************************************/
/*! exports provided: WGLFeatureView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLFeatureView", function() { return a; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../engine/webgl/enums.js */ "yE7X");
/* harmony import */ var _engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../engine/brushes.js */ "Oxob");
/* harmony import */ var _engine_FeatureContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../engine/FeatureContainer.js */ "by2V");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class a extends _engine_FeatureContainer_js__WEBPACK_IMPORTED_MODULE_3__["FeatureContainer"]{constructor(e,s,t){super(e),this._pointToCallbacks=new Map,this._layer=t,this._layerView=s}renderChildren(e){if(this.attributeView.update(),this.hasAnimation){e.painter.effects.integrate.draw(e,e.attributeView)}super.renderChildren(e)}hitTest(s,t){const i=[s,t],a=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["createResolver"])();return this._pointToCallbacks.set(i,a),this.requestRender(),a.promise}onTileData(e,s){e.patch(s),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){this.contains(e)||this.addChild(e)}doRender(e){const{minScale:s,maxScale:t}=this._layer,i=e.state.scale;i<=(s||1/0)&&i>=t&&super.doRender(e)}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate()}get hasAnimation(){return this.hasLabels}get hasLabels(){const e=this._layer.featureReduction,s=e&&"cluster"===e.type&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!s}get labelsVisible(){return this._layer.labelsVisible}prepareRenderPasses(e){const i=e.registerRenderPass({name:"label",brushes:[_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].label],target:()=>this.hasLabels?this.children:null,drawPhase:_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].LABEL|_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].LABEL_ALPHA}),a=e.registerRenderPass({name:"geometry",brushes:[_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].fill,_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].line,_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].marker,_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.hasEffects,effects:[{apply:e.effects.outsideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.excluded},{apply:e.effects.insideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.included},{apply:e.effects.hittest,enable:()=>!!this._pointToCallbacks.size,args:()=>this._pointToCallbacks}]}),r=e.registerRenderPass({name:"highlight",brushes:[_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].fill,_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].line,_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].marker,_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].text],target:()=>this.children,drawPhase:_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:e.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return[...super.prepareRenderPasses(e),a,r,i]}}


/***/ }),

/***/ "gzK8":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/support/visualVariablesUtils.js ***!
  \**********************************************************************************************************/
/*! exports provided: convertColorVariable, convertVisualVariables, getVisualVariableSizeValueRepresentationRatio, getVisualVariablesFields, normalizeSizeElement, normalizeSizeStops, stopToSizeStop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertColorVariable", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertVisualVariables", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisualVariableSizeValueRepresentationRatio", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisualVariablesFields", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeSizeElement", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeSizeStops", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopToSizeStop", function() { return a; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../engine/webgl/definitions.js */ "jIHu");
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../engine/webgl/enums.js */ "yE7X");
/* harmony import */ var _engine_webgl_color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../engine/webgl/color.js */ "qaIE");
/* harmony import */ var _engine_webgl_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../engine/webgl/visualVariablesUtils.js */ "NIRN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function r(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function a(e){return{value:e.value,size:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["toPt"])(e.size)}}function u(e){return e.map((e=>a(e)))}function c(e){if("string"==typeof e||"number"==typeof e)return Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["toPt"])(e);const s=e;return{type:"size",expression:s.expression,stops:u(s.stops)}}function p(e){const t=e&&e.length>0?{}:null;return t&&e.forEach((e=>{const s=e.type;e.field&&(t[s]=e.field)})),t}const f=e=>{const t=[],o=[],i=u(e),l=i.length;for(let r=0;r<6;r++){const e=i[Math.min(r,l-1)];t.push(e.value),o.push(null==e.size?_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_2__["NAN_MAGIC_NUMBER"]:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(e.size))}return{values:new Float32Array(t),sizes:new Float32Array(o)}};function m(e){const t=e&&e.length>0?{}:null,s=t?{}:null;if(!t)return{vvFields:t,vvRanges:s};for(const n of e)if(n.field&&(t[n.type]=n.field),"size"===n.type){s.size||(s.size={});const e=n;switch(Object(_engine_webgl_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_5__["getTypeOfSizeVisualVariable"])(e)){case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLVVFlag"].SIZE_MINMAX_VALUE:s.size.minMaxValue={minDataValue:e.minDataValue,maxDataValue:e.maxDataValue,minSize:c(e.minSize),maxSize:c(e.maxSize)};break;case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLVVFlag"].SIZE_SCALE_STOPS:s.size.scaleStops={stops:u(e.stops)};break;case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLVVFlag"].SIZE_FIELD_STOPS:if(e.levels){const t={};for(const s in e.levels)t[s]=f(e.levels[s]);s.size.fieldStops={type:"level-dependent",levels:t}}else s.size.fieldStops={type:"static",...f(e.stops)};break;case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLVVFlag"].SIZE_UNIT_VALUE:s.size.unitValue={unit:e.valueUnit,valueRepresentation:e.valueRepresentation}}}else if("color"===n.type)s.color=y(n);else if("opacity"===n.type)s.opacity=v(n);else if("rotation"===n.type){const e=n;s.rotation={type:e.rotationType}}return{vvFields:t,vvRanges:s}}function v(e){const t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;{if(e.stops.length>8)return null;const s=e.stops;for(let e=0;e<8;++e){const n=s[Math.min(e,s.length-1)];t.values[e]=n.value,t.opacities[e]=n.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const s=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(let e=0;e<8;e++)t.values[e]=1/0,t.opacities[e]=s}}return t}function g(e,t,s){e[4*t+0]=s.r/255,e[4*t+1]=s.g/255,e[4*t+2]=s.b/255,e[4*t+3]=s.a}function y(t){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t))return null;if(t.normalizationField)return null;const s={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if("string"==typeof t.field){if(!t.stops)return null;{if(t.stops.length>8)return null;s.field=t.field;const e=t.stops;for(let t=0;t<8;++t){const n=e[Math.min(t,e.length-1)];s.values[t]=n.value,g(s.colors,t,n.color)}}}else{if(!(t.stops&&t.stops.length>=0))return null;{const e=t.stops&&t.stops.length>=0&&t.stops[0].color;for(let t=0;t<8;t++)s.values[t]=1/0,g(s.colors,t,e)}}for(let e=0;e<32;e+=4)Object(_engine_webgl_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlpha"])(s.colors,e,!0);return s}


/***/ }),

/***/ "jo7+":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/Geometry.js ***!
  \*******************************************************************************/
/*! exports provided: Geometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return e; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class e{constructor(e,s){this._buffers=[],this.geometryType=e,this._stage=s}destroy(){this._buffers.forEach((e=>e.release()))}insert(e,s){if(!s.records.byteLength)return;"update"===e&&this._buffers.forEach((e=>e.free(s)));const r={done:!1,offset:0,vertexData:s};this._buffers.forEach((e=>e.insert(r)));let t=1e3;for(;!r.done&&--t;){const e=this._stage.pools.bufferData.acquire(s,this.geometryType,r.offset);e.insert(r),this._buffers.push(e)}}remove(e){this._buffers.forEach((s=>s.freeIds(e)))}upload(e){this._buffers.forEach((s=>s.upload(e)))}forEachCommand(e){this._buffers.forEach((s=>s.displayList.forEach(e)))}}


/***/ }),

/***/ "l8tk":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/debug.js ***!
  \***********************************************************************/
/*! exports provided: DEBUG_ATTR_UPDATES, createDebugLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG_ATTR_UPDATES", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDebugLogger", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const n=(n,l)=>n&&((...n)=>l.warn("DEBUG:",...n))||(()=>null),l=!1;


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

/***/ "wfc5":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/SymbolTileRenderer.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _support_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./support/visualVariablesUtils.js */ "gzK8");
/* harmony import */ var _support_rendererUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../support/rendererUtils.js */ "tDOP");
/* harmony import */ var _engine_webgl_FeatureTile_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../engine/webgl/FeatureTile.js */ "PL4a");
/* harmony import */ var _BaseTileRenderer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BaseTileRenderer.js */ "4xTw");
/* harmony import */ var _support_WGLFeatureView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./support/WGLFeatureView.js */ "bdHb");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let u=class extends _BaseTileRenderer_js__WEBPACK_IMPORTED_MODULE_13__["default"]{install(e){const t=new _support_WGLFeatureView_js__WEBPACK_IMPORTED_MODULE_14__["WGLFeatureView"](this.tileInfoView,this.layerView,this.layer);this.featuresView=t,e.addChild(t)}uninstall(e){e.removeChild(this.featuresView),this.featuresView.destroy()}hitTest(e,t){return this.featuresView.hitTest(e,t)}supportsRenderer(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)}onConfigUpdate(e){let t=null;if("visualVariables"in e){const r=(Object(_support_rendererUtils_js__WEBPACK_IMPORTED_MODULE_11__["simplifyVVRenderer"])(e).visualVariables||[]).map((e=>{const t=e.clone();return"normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));t=Object(_support_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_10__["convertVisualVariables"])(r)}this.featuresView.setRendererInfo(e,t,this.layerView.effects)}onTileData(e){const t=this.tiles.get(e.tileKey);t&&e.data&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate()}onTileError(e){const t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t)}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload()}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((e=>e.lock()))}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((e=>e.unlock()))}async getMaterialItems(e){return this.featuresView.getMaterialItems(e)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()}createTile(e){const t=this.tileInfoView.getTileBounds(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_9__["create"])(),e);return new _engine_webgl_FeatureTile_js__WEBPACK_IMPORTED_MODULE_12__["FeatureTile"](e,t,this.featuresView.attributeView)}disposeTile(e){this.featuresView.removeChild(e),e.destroy(),this.layerView.view.labelManager.requestUpdate()}};u=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],u);var n=u;/* harmony default export */ __webpack_exports__["default"] = (n);


/***/ })

}]);
//# sourceMappingURL=tileRenderers-SymbolTileRenderer-js.js.map