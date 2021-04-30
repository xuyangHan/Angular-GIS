(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~1502452f"],{

/***/ "+TxJ":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLBaseMarkerTemplate.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../layers/graphics/featureConversionUtils.js */ "ZlUD");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../chunks/mat2d.js */ "opr1");
/* harmony import */ var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../chunks/mat2df32.js */ "LGNZ");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../enums.js */ "yE7X");
/* harmony import */ var _symbols_cim_placements_CIMMarkerPlacementHelper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../symbols/cim/placements/CIMMarkerPlacementHelper.js */ "5Bb1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const d=3.14159265359/180,v=8,W=W=>class extends W{constructor(...t){super(...t),this.angle=0,this.xOffset=0,this.yOffset=0,this.width=0,this.height=0,this.boundsType="square",this._anchorX=0,this._anchorY=0,this._computedWidth=0,this._computedHeight=0,this._vertexBoundsScaleX=1,this._vertexBoundsScaleY=1,this._offsets={xUpperLeft:0,yUpperLeft:0,xUpperRight:0,yUpperRight:0,xBottomLeft:0,yBottomLeft:0,xBottomRight:0,yBottomRight:0},this.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].MARKER}_write(t,e,i){const r=e.getDisplayId();t.recordStart(r,this._materialKey,this.geometryType,!1,!0),this._writeGeometry(t,e,r,i),t.recordEnd()}_writeGeometry(e,i,o,h){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._markerPlacement))return this._writePlacedMarkers(e,i,h);const f=h?Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__["deltaDecodeGeometry"])(Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__["convertFromGeometry"])(h),2):"esriGeometryPolygon"===i.geometryType?i.readCentroid():i.readUnquantizedGeometry();if(f){if(f.isPoint){const[t,i]=f.coords;if(!e.hasAggregates&&e.hasPixelBufferEnabled&&(t<-1||t>=513||i<-1||i>=513))return;return this._writeVertices(e,o,this._getPos(t,i),t,i)}f.forEachVertex(((t,i)=>this._writeVertices(e,o,this._getPos(t,i),t,i)))}}_writePlacedMarkers(t,r,s){const o=null!=s?s:r.readLegacyGeometry(),h=_symbols_cim_placements_CIMMarkerPlacementHelper_js__WEBPACK_IMPORTED_MODULE_9__["CIMMarkerPlacementHelper"].getPlacement(o,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(this._markerPlacement),Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(1));if(!h)return;const f=r.getDisplayId(),n=Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),x=Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),a=-128,l=640;let p=h.next();for(;null!=p;){const{tx:e,ty:i}=p;e>=a&&e<=l&&i>=a&&i<=l&&(this._applyTransformation(x,n,p.getAngle()/d),this._writeVertices(t,f,this._getPos(e,i),e,i)),p=h.next()}}_writeVertices(t,e,i,r,s){const o=t.vertexCount();t.vertexBounds(r+this.xOffset,s-this.yOffset,this._computedWidth*this._vertexBoundsScaleX,this._computedHeight*this._vertexBoundsScaleY),t.vertexWrite(i),t.vertexWrite(this._offsetUpperLeft),t.vertexWrite(this._texUpperLeft),t.vertexWrite(this._bitestAndDistRatio),t.vertexWrite(e),t.vertexWrite(this._fillColor),t.vertexWrite(this._outlineColor),t.vertexWrite(this._sizeOutlineWidth),t.vertexEnd(),t.vertexWrite(i),t.vertexWrite(this._offsetUpperRight),t.vertexWrite(this._texUpperRight),t.vertexWrite(this._bitestAndDistRatio),t.vertexWrite(e),t.vertexWrite(this._fillColor),t.vertexWrite(this._outlineColor),t.vertexWrite(this._sizeOutlineWidth),t.vertexEnd(),t.vertexWrite(i),t.vertexWrite(this._offsetBottomLeft),t.vertexWrite(this._texBottomLeft),t.vertexWrite(this._bitestAndDistRatio),t.vertexWrite(e),t.vertexWrite(this._fillColor),t.vertexWrite(this._outlineColor),t.vertexWrite(this._sizeOutlineWidth),t.vertexEnd(),t.vertexWrite(i),t.vertexWrite(this._offsetBottomRight),t.vertexWrite(this._texBottomRight),t.vertexWrite(this._bitestAndDistRatio),t.vertexWrite(e),t.vertexWrite(this._fillColor),t.vertexWrite(this._outlineColor),t.vertexWrite(this._sizeOutlineWidth),t.vertexEnd(),t.indexWrite(o+0),t.indexWrite(o+1),t.indexWrite(o+2),t.indexWrite(o+1),t.indexWrite(o+3),t.indexWrite(o+2)}_applyTransformation(t,e,i=0){Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_4__["i"])(t),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_4__["t"])(t,t,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_6__["f"])(this.xOffset,-this.yOffset)),this.angle+i!==0&&Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_4__["r"])(t,t,d*(this.angle+i));const r=this._computedWidth,s=this._computedHeight,_=(this._anchorX-.5)*r,m=(this._anchorY-.5)*s;Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["s"])(e,_,m),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["t"])(e,e,t),this._offsetUpperLeft=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(16*e[0],16*e[1]),this._offsets.xUpperLeft=e[0],this._offsets.yUpperLeft=e[1],Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["s"])(e,_+r,m),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["t"])(e,e,t),this._offsetUpperRight=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(16*e[0],16*e[1]),this._offsets.xUpperRight=e[0],this._offsets.yUpperRight=e[1],Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["s"])(e,_,m+s),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["t"])(e,e,t),this._offsetBottomLeft=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(16*e[0],16*e[1]),this._offsets.xBottomLeft=e[0],this._offsets.yBottomLeft=e[1],Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["s"])(e,_+r,m+s),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["t"])(e,e,t),this._offsetBottomRight=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(16*e[0],16*e[1]),this._offsets.xBottomRight=e[0],this._offsets.yBottomRight=e[1]}_getPos(t,e){return Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(Math.round(v*t),Math.round(v*e))}};/* harmony default export */ __webpack_exports__["default"] = (W);


/***/ }),

/***/ "/kT+":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/segmentUtils.js ***!
  \****************************************************************************************/
/*! exports provided: SegmentCursor, pathDivide, pathLength, pathSubdivide, segmentAt, segmentCount, segmentLength, smoothPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentCursor", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathDivide", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathLength", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathSubdivide", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segmentAt", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segmentCount", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segmentLength", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothPaths", function() { return l; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "aixI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function r(t,e){return t[e+1]}function h(t){return t.length-1}function a(t){let e=0;for(let s=0;s<h(t);s++)e+=d(t,s);return e}function d(t,e,s=1){const[n,i]=r(t,e);return Math.sqrt(n*n+i*i)*s}class c{constructor(t,e,s,n,i){this._segments=t,this._index=e,this._distance=s,this._xStart=n,this._yStart=i,this._done=!1}static create(t){return new c(t,0,0,t[0][0],t[0][1])}clone(){return new c(this._segments,this._index,this._distance,this.xStart,this.yStart)}equals(t){return this._index===t._index||t._index===this._index-1&&(0===this._distance||1===t._distance)||t._index===this._index+1&&(1===this._distance||0===t._distance)}leq(t){return this._index<t._index||this._index===t._index&&this._distance<=t._distance}geq(t){return this._index>t._index||this._index===t._index&&this._distance>=t._distance}get _segment(){return this._segments[this._index+1]}get angle(){const t=this.dy,e=(0*t+-1*-this.dx)/(1*this.length);let s=Math.acos(e);return t>0&&(s=2*Math.PI-s),s}get xStart(){return this._xStart}get yStart(){return this._yStart}get x(){return this.xStart+this.distance*this.dx}get y(){return this.yStart+this.distance*this.dy}get dx(){return this._segment[0]}get dy(){return this._segment[1]}get xMidpoint(){return this.xStart+.5*this.dx}get yMidpoint(){return this.yStart+.5*this.dy}get xEnd(){return this.xStart+this.dx}get yEnd(){return this.yStart+this.dy}get length(){const{dx:t,dy:e}=this;return Math.sqrt(t*t+e*e)}get remainingLength(){return this.length*(1-this._distance)}get backwardLength(){return this.length*this._distance}get distance(){return this._distance}get done(){return this._done}hasPrev(){return this._index-1>=0}hasNext(){return this._index+1<h(this._segments)}next(){return this.hasNext()?(this._xStart+=this.dx,this._yStart+=this.dy,this._distance=0,this._index+=1,this):null}prev(){return this.hasPrev()?(this._index-=1,this._xStart-=this.dx,this._yStart-=this.dy,this._distance=1,this):(this._done=!0,null)}_seekBackwards(t,e){const s=this.backwardLength;if(t<=s)return this._distance=(s-t)/this.length,this;let n=this.backwardLength;for(;this.prev();){if(n+this.length>t)return this._seekBackwards(t-n);n+=this.length}return this._distance=0,e?this:null}seek(t,e=!1){if(t<0)return this._seekBackwards(Math.abs(t),e);if(t<=this.remainingLength)return this._distance=(this.backwardLength+t)/this.length,this;let s=this.remainingLength;for(;this.next();){if(s+this.length>t)return this.seek(t-s,e);s+=this.length}return this._distance=1,e?this:null}}function u(t,e,s){const n=a(t),i=c.create(t),r=n/2,h=(n-e)/2,d=Math.floor(h/e),u=r-d*e;i.seek(u);for(let a=-d;a<=d;a++)i.x<512&&i.x>=0&&i.y<512&&i.y>=0&&s(i.clone(),a,r+a*e,n),i.seek(e)}function o(t,e,s){_(s,e,a(t),c.create(t),0)}function _(s,n,i,r,h){if(i<n)return;const a=r.clone().seek(i/2);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a))return;s(a.clone(),i,h),i=(i-n)/2;const d=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(a.seek(n/2));_(s,n,i,r,h+1),_(s,n,i,d,h+1)}function l(t,e){const s=e;for(let n=0;n<t.length;n++){let e=t[n];const i=[];i.push(e[0]);for(let t=1;t<e.length;t++){let[s,n]=i[t-1];s+=e[t][0],n+=e[t][1],i.push([s,n])}g(i,s);const r=[];r.push(i[0]);for(let t=1;t<i.length;t++){const[e,s]=i[t-1],[n,h]=i[t],a=Math.round(n-e),d=Math.round(h-s);r.push([a,d])}t[n]=r,e=r}return t}function g(t,e){const r=1e-6;if(e<=0)return;const h=t.length;if(h<3)return;const a=[];let d=0;a.push(0);for(let n=1;n<h;n++)d+=Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["dist"])(t[n],t[n-1]),a.push(d);e=Math.min(e,.2*d);const c=[];c.push(t[0][0]),c.push(t[0][1]);const u=t[h-1][0],o=t[h-1][1],_=Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["sub"])([0,0],t[0],t[1]);Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["normalize"])(_),t[0][0]+=e*_[0],t[0][1]+=e*_[1],Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["sub"])(_,t[h-1],t[h-2]),Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["normalize"])(_),t[h-1][0]+=e*_[0],t[h-1][1]+=e*_[1];for(let s=1;s<h;s++)a[s]+=e;a[h-1]+=e;const l=.5*e;for(let s=1;s<h-1;s++){let n=0,i=0,d=0;for(let h=s-1;h>=0&&!(a[h+1]<a[s]-l);h--){const c=l+a[h+1]-a[s],u=a[h+1]-a[h],o=a[s]-a[h]<l?1:c/u;if(Math.abs(o)<r)break;const _=o*o,g=o*c-.5*_*u,x=o*u/e,f=t[h+1],y=t[h][0]-f[0],p=t[h][1]-f[1];n+=x/g*(f[0]*o*c+.5*_*(c*y-u*f[0])-_*o*u*y/3),i+=x/g*(f[1]*o*c+.5*_*(c*p-u*f[1])-_*o*u*p/3),d+=x}for(let c=s+1;c<h&&!(a[c-1]>a[s]+l);c++){const h=l-a[c-1]+a[s],u=a[c]-a[c-1],o=a[c]-a[s]<l?1:h/u;if(Math.abs(o)<r)break;const _=o*o,g=o*h-.5*_*u,x=o*u/e,f=t[c-1],y=t[c][0]-f[0],p=t[c][1]-f[1];n+=x/g*(f[0]*o*h+.5*_*(h*y-u*f[0])-_*o*u*y/3),i+=x/g*(f[1]*o*h+.5*_*(h*p-u*f[1])-_*o*u*p/3),d+=x}c.push(n/d),c.push(i/d)}c.push(u),c.push(o);for(let s=0,n=0;s<h;s++)t[s][0]=c[n++],t[s][1]=c[n++]}


/***/ }),

/***/ "5Bb1":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/placements/CIMMarkerPlacementHelper.js ***!
  \**************************************************************************************/
/*! exports provided: CIMMarkerPlacementHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CIMMarkerPlacementHelper", function() { return e; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _CIMOperators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CIMOperators.js */ "k0QX");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class e{static getPlacement(e,o,s){const c=Object(_CIMOperators_js__WEBPACK_IMPORTED_MODULE_1__["getPlacementOperator"])(o);if(!c)return null;const n=Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["cloneAndDecodeGeometry"])(e);return c.execute(n,o,s)}}


/***/ }),

/***/ "916D":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLMeshTemplate.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _symbols_cim_effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../symbols/cim/effects/CIMEffectHelper.js */ "XbuD");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class r{bindFeature(e,t,r){}write(r,f){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._effects))return this._write(r,f);const s=_symbols_cim_effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_1__["CIMEffectHelper"].executeEffects(this._effects,f.readLegacyGeometry());let i=_symbols_cim_effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_1__["CIMEffectHelper"].next(s);for(;i;)this._write(r,f,i),i=_symbols_cim_effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_1__["CIMEffectHelper"].next(s)}_write(e,t,r){}}/* harmony default export */ __webpack_exports__["default"] = (r);


/***/ }),

/***/ "9SkJ":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLLineTemplate.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../color.js */ "qaIE");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Utils.js */ "yN2G");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util.js */ "aixI");
/* harmony import */ var _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WGLMeshTemplate.js */ "916D");
/* harmony import */ var _WGLBaseLineTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WGLBaseLineTemplate.js */ "bzZf");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const f=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.webgl.WGLLineTemplate");class p extends(Object(_WGLBaseLineTemplate_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_8__["default"])){constructor(e,t,i,r,o,l,n,a,c,h,f,p,d,u,L,y){super();const _=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__["LineMaterialKey"].load(e);t&&(_.sdf=t.sdf,_.pattern=!0,_.textureBinding=t.textureBinding),this._capType=r,this._joinType=o,this._miterLimitCosine=Object(_util_js__WEBPACK_IMPORTED_MODULE_7__["getLimitCosine"])(l),this.tessellationProperties._fillColor=n,this.tessellationProperties._tl=a,this.tessellationProperties._br=c,this._hasPattern=h,this._isDashed=f,this._joinOnUTurn=L,this._isColorLocked=p,this._zOrder=u,this._effects=y,this._materialKey=_.data,this.tessellationProperties._bitset=p?1:0,this.tessellationProperties._halfWidth=.5*i,this.tessellationProperties._halfReferenceWidth=.5*d,this._initializeTessellator(!1)}static fromCIMLine(e,s,o){const n=e.color,a=e.scaleFactor||1,m=e.isDashed;let c=e.cap;m&&1===c&&(c=2);const h=e.join,f=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(e.width)*a,d=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(e.referenceWidth),u=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(e.miterLimit),L=n&&Object(_color_js__WEBPACK_IMPORTED_MODULE_5__["premultiplyAlphaRGBA"])(n)||0;if(!s)return new p(e.materialKey,s,f,c,h,u,L,0,0,!1,m,e.colorLocked,d,e.zOrder,o,e.effects);const{rect:y,width:_,height:j}=s,S=y.x+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],g=y.y+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],w=S+_,P=g+j,x=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(S,g),K=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(w,P);return new p(e.materialKey,s,f,c,h,u,L,x,K,!0,m,e.colorLocked,d,e.zOrder,o,e.effects)}static fromSimpleLine(e,s,l){const{color:m}=e,c="esriSLSSolid"!==e.style&&"esriSLSNull"!==e.style,h=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_6__["getCapType"])(e.cap||"round",c),f=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_6__["getJoinType"])(e.join||"round");let d=m&&"esriSLSNull"!==e.style&&Object(_color_js__WEBPACK_IMPORTED_MODULE_5__["premultiplyAlphaRGBAArray"])(m)||0;"esriSLSNull"===e.style&&(d=0);const u=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(e.width),L=e.miterLimit;if(!s)return new p(e.materialKey,s,u,h,f,L,d,0,0,!1,c,!1,u,0,l,null);const{rect:y,width:_,height:j}=s,S=y.x+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],g=y.y+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],w=S+_,P=g+j,x=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(S,g),K=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(w,P);return new p(e.materialKey,s,u,h,f,L,d,x,K,!0,c,!1,u,0,l,null)}static fromPictureLineSymbol(e,t,i,r){return f.error("PictureLineSymbol support does not exist!"),null}}/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "Bcjy":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/factories/matcherUtils.js ***!
  \****************************************************************************************/
/*! exports provided: createMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMatcher", function() { return s; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _util_Matcher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/Matcher.js */ "YB6V");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const a=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri/views/2d/engine/webgl/mesh/factories/matcherUtils");async function s(e,s,c){switch(e.type){case"simple":return _util_Matcher_js__WEBPACK_IMPORTED_MODULE_2__["FeatureMatcher"].fromBasicRenderer(e,s,c);case"map":return _util_Matcher_js__WEBPACK_IMPORTED_MODULE_2__["MapMatcher"].fromUVRenderer(e,s,c);case"interval":return _util_Matcher_js__WEBPACK_IMPORTED_MODULE_2__["IntervalMatcher"].fromCBRenderer(e,s,c);case"dictionary":return _util_Matcher_js__WEBPACK_IMPORTED_MODULE_2__["DictionaryMatcher"].fromDictionaryRenderer(e,s,c);default:return a.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("mapview-mesh:invalid-renderer","Unable to handle unknown renderer type")),null}}


/***/ }),

/***/ "C/3w":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLBaseFillTemplate.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../layers/graphics/featureConversionUtils.js */ "ZlUD");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums.js */ "yE7X");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _templateUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templateUtils.js */ "DiuL");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const l=1e3,c=1,y=y=>class extends y{constructor(...e){super(...e),this.forceLibtess=!1,this.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLGeometryType"].FILL}_write(e,t,r){const i="esriGeometryPoint"===t.geometryType,s=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__["FillMaterialKey"].load(this._materialKey);e.recordStart(t.getDisplayId(),this._materialKey,this.geometryType,s.dotDensity,i),this._writeGeometry(e,t,s,r,i),e.recordEnd()}_writeGeometry(t,r,i,s,o){const a=this._getGeometry(r,s,o);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a))return;const c=t.indexCount();if(!(a.lengths[0]>l)&&!this.forceLibtess&&Object(_templateUtils_js__WEBPACK_IMPORTED_MODULE_5__["triangulate"])(t,a)){return void(!(c===t.indexCount())&&this._writeVertices(t,r,a.coords,a.lengths,i))}const y=Object(_templateUtils_js__WEBPACK_IMPORTED_MODULE_5__["triangulateLibtess"])(t,a);!(c===t.indexCount())&&this._writeVertices(t,r,y,[y.length/2],i)}_writeVertices(e,t,r,s,o){const n=t.getDisplayId();let m=0;for(const a of s){const s=a+m;for(let a=m;a<s;a++){const s=r[2*a],m=r[2*a+1],l=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(c*s,c*m);e.vertexBounds(s,m,0,0),e.vertexWrite(l),e.vertexWrite(n),o.dotDensity?e.vertexWriteF32(1/Math.abs(t.readGeometryArea())):(e.vertexWrite(this.fillColor),e.vertexWrite(this.tl),e.vertexWrite(this.br),e.vertexWrite(this.aux1),e.vertexWrite(this.aux2),e.vertexWrite(this.aux3))}m+=a}}_getGeometry(e,i,s){const o=i?Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__["deltaDecodeGeometry"])(Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertFromGeometry"])(i),2):e.readUnquantizedGeometry();if(!o)return null;return Object(_templateUtils_js__WEBPACK_IMPORTED_MODULE_5__["clipMarshall"])(o,s?256:128)}};/* harmony default export */ __webpack_exports__["default"] = (y);


/***/ }),

/***/ "C8N4":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/bufcut.js ***!
  \************************************************************************/
/*! exports provided: bufcut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bufcut", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function e(e,t,r,i,u,l,o){D=0;const f=(i-r)*l,p=u&&u.length,c=p?(u[0]-r)*l:f;let v,s,h,d,Z,a=n(t,r,i,0,c,l,!0);if(a&&a.next!==a.prev){if(p&&(a=y(t,r,i,u,a,l)),f>80*l){v=h=t[0+r*l],s=d=t[1+r*l];for(let e=l;e<c;e+=l){const n=t[e+r*l],x=t[e+1+r*l];v=Math.min(v,n),s=Math.min(s,x),h=Math.max(h,n),d=Math.max(d,x)}Z=Math.max(h-v,d-s),Z=0!==Z?1/Z:0}x(a,e,l,v,s,Z,o,0)}}function n(e,n,t,x,r,i,o){let y;if(o===Z(e,n,t,x,r,i)>0)for(let l=x;l<r;l+=i)y=u(l+n*i,e[l+n*i],e[l+1+n*i],y);else for(let l=r-i;l>=x;l-=i)y=u(l+n*i,e[l+n*i],e[l+1+n*i],y);return y&&M(y,y.next)&&(l(y),y=y.next),y}function t(e,n=e){if(!e)return e;let t,x=e;do{if(t=!1,x.steiner||!M(x,x.next)&&0!==s(x.prev,x,x.next))x=x.next;else{if(l(x),x=n=x.prev,x===x.next)break;t=!0}}while(t||x!==n);return n}function x(e,n,u,o,y,f,p,v){if(!e)return;!v&&f&&(e=c(e,o,y,f));let s=e;for(;e.prev!==e.next;){const c=e.prev,h=e.next;if(f?i(e,o,y,f):r(e))n.push(c.index/u+p),n.push(e.index/u+p),n.push(h.index/u+p),l(e),e=h.next,s=h.next;else if((e=h)===s){v?1===v?x(e=b(e,n,u,p),n,u,o,y,f,p,2):2===v&&g(e,n,u,o,y,f,p):x(t(e),n,u,o,y,f,p,1);break}}}function r(e){const n=e.prev,t=e,x=e.next;if(s(n,t,x)>=0)return!1;let r=e.next.next;const i=r;let u=0;for(;r!==e.prev&&(0===u||r!==i);){if(u++,a(n.x,n.y,t.x,t.y,x.x,x.y,r.x,r.y)&&s(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function i(e,n,t,x){const r=e.prev,i=e,u=e.next;if(s(r,i,u)>=0)return!1;const l=r.x<i.x?r.x<u.x?r.x:u.x:i.x<u.x?i.x:u.x,o=r.y<i.y?r.y<u.y?r.y:u.y:i.y<u.y?i.y:u.y,y=r.x>i.x?r.x>u.x?r.x:u.x:i.x>u.x?i.x:u.x,f=r.y>i.y?r.y>u.y?r.y:u.y:i.y>u.y?i.y:u.y,p=z(l,o,n,t,x),c=z(y,f,n,t,x);let v=e.prevZ,h=e.nextZ;for(;v&&v.z>=p&&h&&h.z<=c;){if(v!==e.prev&&v!==e.next&&a(r.x,r.y,i.x,i.y,u.x,u.y,v.x,v.y)&&s(v.prev,v,v.next)>=0)return!1;if(v=v.prevZ,h!==e.prev&&h!==e.next&&a(r.x,r.y,i.x,i.y,u.x,u.y,h.x,h.y)&&s(h.prev,h,h.next)>=0)return!1;h=h.nextZ}for(;v&&v.z>=p;){if(v!==e.prev&&v!==e.next&&a(r.x,r.y,i.x,i.y,u.x,u.y,v.x,v.y)&&s(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;h&&h.z<=c;){if(h!==e.prev&&h!==e.next&&a(r.x,r.y,i.x,i.y,u.x,u.y,h.x,h.y)&&s(h.prev,h,h.next)>=0)return!1;h=h.nextZ}return!0}function u(e,n,t,x){const r=q.create(e,n,t);return x?(r.next=x.next,r.prev=x,x.next.prev=r,x.next=r):(r.prev=r,r.next=r),r}function l(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function o(e){let n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function y(e,x,r,i,u,l){const y=new Array;for(let t=0,f=i.length;t<f;t++){const u=n(e,x,r,i[t]*l,t<f-1?i[t+1]*l:r*l,l,!1);u===u.next&&(u.steiner=!0),y.push(o(u))}y.sort(m);for(const n of y)f(n,u),u=t(u,u.next);return u}function f(e,n){if(n=p(e,n)){const x=j(n,e);t(x,x.next)}}function p(e,n){let t=n;const x=e.x,r=e.y;let i,u=-1/0;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const e=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(e<=x&&e>u){if(u=e,e===x){if(r===t.y)return t;if(r===t.next.y)return t.next}i=t.x<t.next.x?t:t.next}}t=t.next}while(t!==n);if(!i)return null;if(x===u)return i.prev;const l=i,o=i.x,y=i.y;let f,p=1/0;for(t=i.next;t!==l;)x>=t.x&&t.x>=o&&x!==t.x&&a(r<y?x:u,r,o,y,r<y?u:x,r,t.x,t.y)&&(f=Math.abs(r-t.y)/(x-t.x),(f<p||f===p&&t.x>i.x)&&w(t,e)&&(i=t,p=f)),t=t.next;return i}function c(e,n,t,x){for(let r;r!==e;r=r.next){if(r=r||e,null===r.z&&(r.z=z(r.x,r.y,n,t,x)),r.prev.next!==r||r.next.prev!==r)return r.prev.next=r,r.next.prev=r,c(e,n,t,x);r.prevZ=r.prev,r.nextZ=r.next}return e.prevZ.nextZ=null,e.prevZ=null,v(e)}function v(e){let n,t=1;for(;;){let x,r=e;e=null,n=null;let i=0;for(;r;){i++,x=r;let u=0;for(;u<t&&x;u++)x=x.nextZ;let l=t;for(;u>0||l>0&&x;){let t;0===u?(t=x,x=x.nextZ,l--):0!==l&&x?r.z<=x.z?(t=r,r=r.nextZ,u--):(t=x,x=x.nextZ,l--):(t=r,r=r.nextZ,u--),n?n.nextZ=t:e=t,t.prevZ=n,n=t}r=x}if(n.nextZ=null,t*=2,i<2)return e}}function s(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function h(e,n,t,x){return!!(M(e,n)&&M(t,x)||M(e,x)&&M(t,n))||s(e,n,t)>0!=s(e,n,x)>0&&s(t,x,e)>0!=s(t,x,n)>0}function d(e,n){let t=e;do{if(t.index!==e.index&&t.next.index!==e.index&&t.index!==n.index&&t.next.index!==n.index&&h(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}function Z(e,n,t,x,r,i){let u=0;for(let l=x,o=r-i;l<r;l+=i)u+=(e[o+n*i]-e[l+n*i])*(e[l+1+n*i]+e[o+1+n*i]),o=l;return u}function a(e,n,t,x,r,i,u,l){return(r-u)*(n-l)-(e-u)*(i-l)>=0&&(e-u)*(x-l)-(t-u)*(n-l)>=0&&(t-u)*(i-l)-(r-u)*(x-l)>=0}function w(e,n){return s(e.prev,e,e.next)<0?s(e,n,e.next)>=0&&s(e,e.prev,n)>=0:s(e,n,e.prev)<0||s(e,e.next,n)<0}function z(e,n,t,x,r){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-t)*r)|e<<8))|e<<4))|e<<2))|e<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-x)*r)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function M(e,n){return e.x===n.x&&e.y===n.y}function m(e,n){return e.x-n.x}function b(e,n,t,x){let r=e;do{const i=r.prev,u=r.next.next;!M(i,u)&&h(i,r,r.next,u)&&w(i,u)&&w(u,i)&&(n.push(i.index/t+x),n.push(r.index/t+x),n.push(u.index/t+x),l(r),l(r.next),r=e=u),r=r.next}while(r!==e);return r}function g(e,n,r,i,u,l,o){let y=e;do{let e=y.next.next;for(;e!==y.prev;){if(y.index!==e.index&&k(y,e)){let f=j(y,e);return y=t(y,y.next),f=t(f,f.next),x(y,n,r,i,u,l,o,0),void x(f,n,r,i,u,l,o,0)}e=e.next}y=y.next}while(y!==e)}function k(e,n){return e.next.index!==n.index&&e.prev.index!==n.index&&!d(e,n)&&w(e,n)&&w(n,e)&&A(e,n)}function A(e,n){let t=e,x=!1;const r=(e.x+n.x)/2,i=(e.y+n.y)/2;do{t.y>i!=t.next.y>i&&t.next.y!==t.y&&r<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(x=!x),t=t.next}while(t!==e);return x}function j(e,n){const t=q.create(e.index,e.x,e.y),x=q.create(n.index,n.x,n.y),r=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=r,r.prev=t,x.next=t,t.prev=x,i.next=x,x.prev=i,x}class q{constructor(){this.index=0,this.x=0,this.y=0,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}static create(e,n,t){const x=D<B.length?B[D++]:new q;return x.index=e,x.x=n,x.y=t,x.prev=null,x.next=null,x.z=null,x.prevZ=null,x.nextZ=null,x.steiner=!1,x}}const B=new Array,C=8096;let D=0;for(let E=0;E<C;E++)B.push(new q);


/***/ }),

/***/ "DiuL":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/templateUtils.js ***!
  \*****************************************************************************************/
/*! exports provided: area, clip, clipLinesMarshall, clipMarshall, triangleArea, triangulate, triangulateEarcut, triangulateLibtess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "area", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clip", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clipLinesMarshall", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clipMarshall", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangleArea", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangulate", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangulateEarcut", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangulateLibtess", function() { return a; });
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../layers/graphics/OptimizedGeometry.js */ "gVKr");
/* harmony import */ var _core_libs_earcut_earcut_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/libs/earcut/earcut.js */ "+yyC");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _TileClipper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../TileClipper.js */ "LaVW");
/* harmony import */ var _bufcut_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bufcut.js */ "C8N4");
/* harmony import */ var _Tesselator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Tesselator.js */ "6NBT");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const l=1e-5,c=new _Tesselator_js__WEBPACK_IMPORTED_MODULE_5__["default"],i=new _TileClipper_js__WEBPACK_IMPORTED_MODULE_3__["TileClipper"](0,0,0,1,0),f=new _TileClipper_js__WEBPACK_IMPORTED_MODULE_3__["TileClipper"](0,0,0,1,0);function u(t,o,e){let n=0;for(let r=1;r<e;r++){const e=t[2*(o+r-1)],s=t[2*(o+r-1)+1];n+=(t[2*(o+r)]-e)*(t[2*(o+r)+1]+s)}return n}function h(t,o,e,n,r){let s=0;const l=2;for(let c=e;c<n;c+=3){const e=(t.getValue(c)-r)*l,n=(t.getValue(c+1)-r)*l,i=(t.getValue(c+2)-r)*l;s+=Math.abs((o[e]-o[i])*(o[n+1]-o[e+1])-(o[e]-o[n])*(o[i+1]-o[e+1]))}return s}function d(t,o){const{coords:e,lengths:n,hasIndeterminateRingOrder:s}=o,c=t.indexWriter(),i=t.vertexCount();if(s)return!1;const f=c.length;let d=0;for(let g=0;g<n.length;){let t=g,o=n[g],s=u(e,d,o);const a=[];for(;++t<n.length;){const r=n[t],l=u(e,d+o,r);if(!(l>0))break;s+=l,a.push(d+o),o+=r}const p=c.length;Object(_bufcut_js__WEBPACK_IMPORTED_MODULE_4__["bufcut"])(c,e,d,d+o,a,2,i);const m=h(c,e,p,c.length,i),x=Math.abs(s);if(Math.abs((m-x)/Math.max(1e-7,x))>l)return c.seek(f),!1;g=t,d+=o}return!0}function g(t,e,n){const{coords:r,lengths:s,hasIndeterminateRingOrder:l}=e;if(l)return!1;let c=0;for(let i=0;i<s.length;){let l=i,f=s[i];const h=[];for(;++l<s.length;){const t=s[l];if(!(u(r,c+f,t)>0))break;h.push(c+f-c),f+=t}const d=c+f,g=e.coords.slice(2*c,2*d),a=Object(_core_libs_earcut_earcut_js__WEBPACK_IMPORTED_MODULE_1__["earcut"])(g,h,2);for(const o of a)t.push(o+n+c);i=l,c+=f}return!0}function a(t,o){const e=[],n=[],r=t.indexWriter(),s=t.vertexCount(),{coords:l,lengths:i}=o;c.beginPolygon(e,n);let f=0;for(let u=0;u<i.length;u++){const t=o.lengths[u];c.beginContour();for(let o=0;o<t;o++){const t=[l[2*(f+o)],l[2*(f+o)+1],0];c.addVertex(t,t)}c.endContour(),f+=t}c.endPolygon();for(let c=0;c<n.length;c++)r.push(n[c]+s);return e}function p(t,o,e,n,r,s,l,c){const i=((t-r)*(s-c)-(o-c)*(r-l))/((t-e)*(s-c)-(o-n)*(r-l));if(i<0||i>1)return null;return{x:Math.round(t+i*(e-t)),y:Math.round(o+i*(n-o))}}function m(t,o,e){let n=0;for(let r=0;r<t.lengths.length;r++){const s=t.lengths[r];for(let r=0;r<s;r++){const s=t.coords[2*(r+n)],l=t.coords[2*(r+n)+1];if(s<o||s>e||l<o||l>e)return!0}n+=s}return!1}function x(o,n){if(!m(o,-128,_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TILE_SIZE"]+128))return o;i.setPixelMargin(n),i.reset(3);let r=0;for(let t=0;t<o.lengths.length;t++){const e=o.lengths[t];let n=o.coords[2*(0+r)],s=o.coords[2*(0+r)+1];i.moveTo(n,s);for(let t=1;t<e;t++)n=o.coords[2*(t+r)],s=o.coords[2*(t+r)+1],i.lineTo(n,s);i.close(),r+=e}const s=i.result(!1);if(!s)return null;const l=[],c=[];for(const t of s){let o=0;for(const e of t)c.push(e.x),c.push(e.y),o++;l.push(o)}return new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_0__["default"](l,c)}function b(t,o){f.setPixelMargin(o);const n=f,r=-o,s=_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TILE_SIZE"]+o;let l=[],c=!1,i=0;for(;i<t.length;){const o=[],e=t[i];n.reset(2);let[f,u]=e[0];if(c)n.moveTo(f,u);else{if(f<r||f>s||u<r||u>s){c=!0;continue}o.push({x:f,y:u})}let h=!1;const d=e.length;for(let t=1;t<d;++t)if(f+=e[t][0],u+=e[t][1],c)n.lineTo(f,u);else{if(f<r||f>s||u<r||u>s){h=!0;break}o.push({x:f,y:u})}if(h)c=!0;else{if(c){const t=n.resultWithStarts();if(t)for(const o of t)l.push(o)}else l.push({line:o,start:0});i++,c=!1}}return l=l.filter((t=>t.line.length>1)),0===l.length?null:l}function y(t,o,e=0){const n=-e,r=o+e;let s=0,l=0,c=0;for(let i=0;i<t.lengths.length;i++){const o=t.lengths[i],e=c+o;let f=0,u=null;for(;s!==e;){let o=t.coords[2*s],c=t.coords[2*s+++1],i=o<n||o>=r||c<n||c>=r;const h=i;for(;s!==e&&i===h;)i||(t.coords[2*l]=o,t.coords[2*l+++1]=c,f++),o=t.coords[2*s],c=t.coords[2*s+++1],i=o<n||o>=r||c<n||c>=r;if(s===e){i?u&&(t.coords[2*l]=u.x,t.coords[2*l+++1]=u.y,f++):(t.coords[2*l]=o,t.coords[2*l+++1]=c,f++);continue}const d=t.coords[2*(s-2)],g=t.coords[2*(s-2)+1],a=p(d,g,o,c,n,n,r,n)||p(d,g,o,c,r,n,r,r)||p(d,g,o,c,r,r,n,r)||p(d,g,o,c,n,n,n,r);a&&(t.coords[2*l]=a.x,t.coords[2*l+++1]=a.y,f++,u||(u=a)),i||(t.coords[2*l]=o,t.coords[2*l+++1]=c,f++)}t.lengths[i]=f,c+=o}}i.setExtent(_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TILE_SIZE"]),f.setExtent(_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TILE_SIZE"]);


/***/ }),

/***/ "Dw8i":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLTemplateStore.js ***!
  \********************************************************************************************/
/*! exports provided: WGLTemplateStore, isDynamicId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLTemplateStore", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDynamicId", function() { return S; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../symbols/support/defaults.js */ "psH3");
/* harmony import */ var _util_Result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/Result.js */ "GqaZ");
/* harmony import */ var _layers_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../layers/features/schemaUtils.js */ "owVx");
/* harmony import */ var _WGLTextTemplate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WGLTextTemplate.js */ "iegs");
/* harmony import */ var _WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WGLMarkerTemplate.js */ "qLV0");
/* harmony import */ var _WGLDynamicFillTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WGLDynamicFillTemplate.js */ "I6rf");
/* harmony import */ var _WGLDynamicLineTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WGLDynamicLineTemplate.js */ "ImOt");
/* harmony import */ var _WGLDynamicMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WGLDynamicMarkerTemplate.js */ "xF2a");
/* harmony import */ var _layers_features_textUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../layers/features/textUtils.js */ "MrbB");
/* harmony import */ var _WGLDynamicTextTemplate_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./WGLDynamicTextTemplate.js */ "OetV");
/* harmony import */ var _WGLFillTemplate_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./WGLFillTemplate.js */ "n7P2");
/* harmony import */ var _WGLLineTemplate_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./WGLLineTemplate.js */ "9SkJ");
/* harmony import */ var _util_Lock_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../util/Lock.js */ "L/mq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const I=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLTemplateStore"),d=new Array;function g(e,t){const r=e.length;return e.push(null),t.then((t=>e[r]=t)),e}function S(e){return!!(1&e)}function w(e){return"worker:port-closed"===e.name}class k{constructor(e,t){this._idCounter=1,this._templateIdCounter=1,this._idToTemplateGroup=new Map,this._symbolToTemplate=new Map,this._fetchQueue=[],this._idToResolver=new Map,this._cimTemplateCache=new Map,this._cimAnalyses=[],this._lock=new _util_Lock_js__WEBPACK_IMPORTED_MODULE_15__["default"],this._fetchResource=e,this._joinOnUTurn=t}get _markerError(){return this._errorTemplates.marker[0]}get _fillError(){return this._errorTemplates.fill[0]}get _lineError(){return this._errorTemplates.line[0]}get _textError(){return this._errorTemplates.line[0]}createTemplateGroup(e,t){this._initErrorTemplates();const r=e.hash;if(this._symbolToTemplate.has(r))return this._symbolToTemplate.get(r);const s=new Array;t&&this._createMeshTemplates(s,t,!0),this._createMeshTemplates(s,e,!1);const i=this._createGroupId("expanded-cim"===e.type);return this._idToTemplateGroup.set(i,s),this._symbolToTemplate.set(r,i),i}getTemplateGroup(e){return this._idToTemplateGroup.has(e)?this._idToTemplateGroup.get(e):d}getDynamicTemplateGroup(e){return this._idToTemplateGroup.has(e)?(S(e)||I.error("mapview-template-store",`Id ${e} does not refer to a dynamic template`),this._idToTemplateGroup.get(e)):d}getMosaicItem(e,t){const r=this._createTemplateId(),s=new Promise((e=>this._idToResolver.set(r,e)));return this._fetchQueue.push({symbol:e,id:r,glyphIds:t}),s}finalize(e){return this._fetchQueue.length||this._lock.isHeld()?Object(_util_Lock_js__WEBPACK_IMPORTED_MODULE_15__["withLock"])(this._lock,this._fetchAllQueuedResources.bind(this),e):Promise.resolve()}_initErrorTemplates(){this._errorTemplates||(this._errorTemplates={fill:this._createMeshTemplates([],Object(_layers_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_5__["createSymbolSchema"])(_symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_3__["errorPolygonSymbol2D"]),!1),marker:this._createMeshTemplates([],Object(_layers_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_5__["createSymbolSchema"])(_symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_3__["errorPointSymbol2D"]),!1),line:this._createMeshTemplates([],Object(_layers_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_5__["createSymbolSchema"])(_symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_3__["errorPolylineSymbol2D"]),!1)})}_fetchAllQueuedResources(e){if(!this._fetchQueue.length)return Promise.resolve();const s=this._fetchQueue,i=this._cimAnalyses;return this._fetchQueue=[],this._cimAnalyses=[],Promise.all(i).then((()=>this._fetchResource(s,e).then((e=>{for(const{id:t,mosaicItem:r}of e){this._idToResolver.get(t)(r),this._idToResolver.delete(t)}})))).catch((e=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAbortError"])(e)?this._fetchQueue=this._fetchQueue.concat(s):w(e)||I.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("mapview-template-store","Unable to fetch requested texture resources",e))}))}_createGroupId(e){return this._idCounter++<<1|(e?1:0)}_createTemplateId(){return this._templateIdCounter++}async _createSMS(e){const{spriteMosaicItem:t}=await this.getMosaicItem(e);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(t,I)?_WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromSimpleMarker(e,t):this._markerError}async _createPMS(e){const{spriteMosaicItem:t}=await this.getMosaicItem(e);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(t,I)?_WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromPictureMarker(e,t):this._markerError}async _createSFS(e,t){const{spriteMosaicItem:r}=await this.getMosaicItem(e);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(r,I)?_WGLFillTemplate_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromSimpleFill(e,r,t):this._fillError}async _createPFS(e,t){const{spriteMosaicItem:r}=await this.getMosaicItem(e);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(r,I)?_WGLFillTemplate_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromPictureFill(e,r,t):this._fillError}async _createSLS(e,t){const{spriteMosaicItem:r}=await this.getMosaicItem(e);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(r,I)?_WGLLineTemplate_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromSimpleLine(e,r,this._joinOnUTurn):this._lineError}async _createLMS(e){const{spriteMosaicItem:t}=await this.getMosaicItem(e);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(t,I)?_WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromLineSymbolMarker(e,t):this._markerError}async _createTS(e){const{glyphMosaicItems:t}=await this.getMosaicItem(e);return _WGLTextTemplate_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromText(e,t)}async _createCIMText(e){const{glyphMosaicItems:t}=await this.getMosaicItem(e.cim,Object(_layers_features_textUtils_js__WEBPACK_IMPORTED_MODULE_11__["codepoints"])(e.text));return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(t,I)?_WGLTextTemplate_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromCIMText(e,t):this._textError}async _createCIMFill(e){const{spriteMosaicItem:t}=await this.getMosaicItem(e.cim);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(t,I)?_WGLFillTemplate_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromCIMFill(e,t):this._fillError}async _createCIMLine(e){const{spriteMosaicItem:t}=await this.getMosaicItem(e.cim);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(t,I)?_WGLLineTemplate_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromCIMLine(e,t,this._joinOnUTurn):this._lineError}async _createCIMMarker(e){const{spriteMosaicItem:t}=await this.getMosaicItem(e.cim);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_4__["ok"])(t,I)?_WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromCIMMarker(e,t):this._markerError}async _createCIM(e){const t=e.templateHash;if(this._cimTemplateCache.has(t))return this._cimTemplateCache.get(t);const r={...e,cim:{...e.cim,mosaicHash:e.materialHash}};let s;switch(r.type){case"marker":s=this._createCIMMarker(r);break;case"line":s=this._createCIMLine(r);break;case"fill":s=this._createCIMFill(r);break;case"text":s=this._createCIMText(r)}return s.then((e=>this._cimTemplateCache.set(t,e))),s}_createDynamicCIM(e){const t=e.templateHash;if(this._cimTemplateCache.has(t))return this._cimTemplateCache.get(t);let r;switch(e.type){case"marker":r=_WGLDynamicMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_10__["default"].fromCIMMarker(e);break;case"line":r=_WGLDynamicLineTemplate_js__WEBPACK_IMPORTED_MODULE_9__["default"].fromCIMLine(e);break;case"fill":r=_WGLDynamicFillTemplate_js__WEBPACK_IMPORTED_MODULE_8__["default"].fromCIMFill(e);break;case"text":r=_WGLDynamicTextTemplate_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromCIMText(e)}return this._cimTemplateCache.set(t,r),r}_createPrimitiveMeshTemplates(e,t,r){switch(t.type){case"esriSMS":return g(e,this._createSMS(t));case"esriPMS":return g(e,this._createPMS(t));case"esriSFS":return g(e,this._createSFS(t,r));case"line-marker":return g(e,this._createLMS(t));case"esriPFS":return g(e,this._createPFS(t,r));case"esriSLS":return g(e,this._createSLS(t,!1));case"esriTS":return g(e,this._createTS(t));default:return I.error("Unable to create mesh template for unknown symbol type {: $ }{symbol.type}"),e}}_createMeshTemplates(e,t,r){if(-1!==t.type.indexOf("3d"))return I.error("3D symbols are not supported with MapView"),e;if("expanded-cim"===t.type){for(const r of t.layers)"function"==typeof r.materialHash?e.push(this._createDynamicCIM(r)):g(e,this._createCIM(r));return e}if("composite-symbol"===t.type){for(const s of t.layers)this._createPrimitiveMeshTemplates(e,s,r);return e}return"cim"===t.type||"label"===t.type||"web-style"===t.type?e:this._createPrimitiveMeshTemplates(e,t,r)}}


/***/ }),

/***/ "GqaZ":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/Result.js ***!
  \************************************************************************/
/*! exports provided: ok */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ok", function() { return e; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function e(e,n){if(e&&"name"in e){const o=e;return n&&n.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](o.name,o.message,o.details)),!1}return!0}


/***/ }),

/***/ "I6rf":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLDynamicFillTemplate.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../color.js */ "qaIE");
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../GeometryUtils.js */ "HQFP");
/* harmony import */ var _util_Result_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/Result.js */ "GqaZ");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util.js */ "aixI");
/* harmony import */ var _WGLBaseFillTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WGLBaseFillTemplate.js */ "C/3w");
/* harmony import */ var _WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WGLDynamicMeshTemplate.js */ "ej3m");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const m=128;class p extends(Object(_WGLBaseFillTemplate_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_10__["default"])){constructor(t){var s;if(super(t),Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.color)){const e=(e,s,i)=>{const r=t.color(e,s,i);return r&&Object(_color_js__WEBPACK_IMPORTED_MODULE_5__["premultiplyAlphaRGBA"])(r)||0};this._dynamicPropertyMap.set("_fillColor",e)}else{const e=t.color;this.fillColor=e&&Object(_color_js__WEBPACK_IMPORTED_MODULE_5__["premultiplyAlphaRGBA"])(e)||0}let i=0;Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.height)||(i=t.height||0);const r="CIMMarkerPlacementInsidePolygon"===(null==(s=t.cim.placement)?void 0:s.type)&&t.cim.placement.shiftOddRows?2:1,n=(e,s,o)=>Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.height)?t.height(e,s,o)*r:i*r;this._dynamicPropertyMap.set("_height",n);let f=0;Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.offsetX)||(f=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.offsetX||0)+m,f>255&&(f=255));const h=(s,i,r)=>{if(Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.offsetX)){let o=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.offsetX(s,i,r))+m;return o>255&&(o=255),o}return f};this._dynamicPropertyMap.set("_offsetX",h);let p=1;Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.scaleX)||(p=t.scaleX||1);const y=(e,s,i)=>Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.scaleX)?t.scaleX(e,s,i):p;this._dynamicPropertyMap.set("_scaleX",y);let d=0;Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.offsetY)||(d=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(-t.offsetY||0)+m,d>255&&(d=255));const _=(s,i,r)=>{if(Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.offsetY)){let o=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(-t.offsetY(s,i,r))+m;return o>255&&(o=255),o}return d};this._dynamicPropertyMap.set("_offsetY",_);let u=0;Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.angle)||(u=Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_6__["radToByte"])(t.angle)||0);const g=(e,s,i)=>Object(_util_js__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(t.angle)?Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_6__["radToByte"])(t.angle(e,s,i)):u;this._dynamicPropertyMap.set("_angle",g),this._effects=t.effects,this._cimFillLayer=t,this._fillMaterialKey=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__["FillMaterialKey"].load(t.materialKey)}static fromCIMFill(t){return new p(t)}bindFeature(o,a,l){const c=o.readLegacyFeature();this._dynamicPropertyMap.forEach(((t,e)=>{this[e]=t(c,a,l)}));const f=this._fillMaterialKey,h=this._materialCache,p=this._cimFillLayer;this.aux3=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(0,0,this._angle,p.colorLocked?1:0);const y=(0,p.materialHash)(c,a,l),d=h.get(y);let _=null;if(d&&Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_7__["ok"])(d.spriteMosaicItem)&&(_=d.spriteMosaicItem),_){const{rect:o,width:a,height:l}=_,n=o.x+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],c=o.y+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],h=n+a,p=c+l;let y=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(this._height));y>255?y=255:y<=0&&(y=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(p-c));let d=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(this._height/l*a||0));d>255?d=255:d<=0&&(d=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(h-n));const u=this._scaleX,g=1;this.tl=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(n,c),this.br=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(h,p),this.aux1=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(d,y,this._offsetX,this._offsetY),this.aux2=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(m*u,m*g),f.sdf=_.sdf,f.pattern=!0,f.textureBinding=_.textureBinding}else this.tl=0,this.br=0,this.aux1=0,this.aux2=0,f.sdf=!1,f.pattern=!1,f.textureBinding=0;this._materialKey=f.data}}/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "ImOt":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLDynamicLineTemplate.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../color.js */ "qaIE");
/* harmony import */ var _util_Result_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/Result.js */ "GqaZ");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util.js */ "aixI");
/* harmony import */ var _WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WGLDynamicMeshTemplate.js */ "ej3m");
/* harmony import */ var _WGLBaseLineTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WGLBaseLineTemplate.js */ "bzZf");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class c extends(Object(_WGLBaseLineTemplate_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_7__["default"])){constructor(i){super(i),this._cimLineLayer=i;let e=0;Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(i.width)||(e=.5*Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(i.width));const s=(s,r,o)=>Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(i.width)?.5*Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(i.width(s,r,o)):e;if(this._dynamicPropertyMap.set("_halfWidth",s),Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(i.cap)?this._dynamicPropertyMap.set("_capType",i.cap):this._capType=i.cap,Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(i.join)?this._dynamicPropertyMap.set("_joinType",i.join):this._joinType=i.join,Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(i.color)){const t=(t,e,s)=>{const o=i.color(t,e,s);return o&&Object(_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlphaRGBA"])(o)||0};this._dynamicPropertyMap.set("_fillColor",t)}else{const t=i.color;this._fillColor=t&&Object(_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlphaRGBA"])(t)||0}if(Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(i.miterLimit)){const t=(t,e,s)=>Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["getLimitCosine"])(i.miterLimit(t,e,s));this._dynamicPropertyMap.set("_miterLimitCosine",t)}else this._miterLimitCosine=Object(_util_js__WEBPACK_IMPORTED_MODULE_6__["getLimitCosine"])(i.miterLimit);this._scaleFactor=i.scaleFactor||1,this._isDashed=i.isDashed,this._effects=i.effects,this.tessellationProperties._bitset=i.colorLocked?1:0,this._materialKey=i.materialKey,this._initializeTessellator(!0)}static fromCIMLine(t){return new c(t)}bindFeature(t,r,a){const l=t.readLegacyFeature();this._dynamicPropertyMap.forEach(((t,i)=>{this[i]=t(l,r,a)})),this._halfWidth*=this._scaleFactor;const h=this._materialCache,n=(0,this._cimLineLayer.materialHash)(l,r,a),c=h.get(n);let m=null;if(c&&Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_5__["ok"])(c.spriteMosaicItem)&&(m=c.spriteMosaicItem),m){this._hasPattern=!0;const{rect:t,width:s,height:r}=m,o=t.x+_definitions_js__WEBPACK_IMPORTED_MODULE_1__["SPRITE_PADDING"],a=t.y+_definitions_js__WEBPACK_IMPORTED_MODULE_1__["SPRITE_PADDING"],l=o+s,h=a+r;this.tessellationProperties._tl=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(o,a),this.tessellationProperties._br=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(l,h)}else this._hasPattern=!1,this.tessellationProperties._tl=0,this.tessellationProperties._br=0;this.tessellationProperties._fillColor=this._fillColor,this.tessellationProperties._halfWidth=this._halfWidth,this.tessellationProperties._halfReferenceWidth=this.tessellationProperties._halfWidth;const p=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_3__["LineMaterialKey"].load(this._materialKey);m&&(p.sdf=m.sdf,p.pattern=!0,p.textureBinding=m.textureBinding),this._materialKey=p.data}}/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "J3nV":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/factories/WGLMeshFactory.js ***!
  \******************************************************************************************/
/*! exports provided: WGLMeshFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLMeshFactory", function() { return i; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _layers_features_support_AttributeStore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../layers/features/support/AttributeStore.js */ "2AbE");
/* harmony import */ var _templates_WGLLabelTemplate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/WGLLabelTemplate.js */ "phaq");
/* harmony import */ var _templates_WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/WGLMarkerTemplate.js */ "qLV0");
/* harmony import */ var _templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../templates/WGLTemplateStore.js */ "Dw8i");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class i{constructor(e,t,r){this._geometryType=e,this._idField=t,this._templateStore=r}update(t,r){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t.mesh.labels)&&this._setLabelTemplates(t.mesh.labels,r)}_setLabelTemplates(e,t){this._labelTemplates=e.map((e=>_templates_WGLLabelTemplate_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromLabelClass(e,t)))}get templates(){return this._templateStore}async analyze(o,s,i,l,p,n){if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAborted"])(n))return;let m;"dictionary"===s.type&&(m=await s.analyze(this._idField,o.copy(),l,p,n));let f=0;for(;o.next();){let t;if(t=m?m[f++]:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(i)&&Object(_layers_features_support_AttributeStore_js__WEBPACK_IMPORTED_MODULE_3__["isAggregateId"])(o.getDisplayId())&&1!==o.readAttribute("cluster_count")?i.match(this._idField,o,this._geometryType,l,p):s.match(this._idField,o,this._geometryType,l,p),o.setGroupId(t),Object(_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_6__["isDynamicId"])(t)){const e=this._templateStore.getDynamicTemplateGroup(t);for(const t of e)t&&t.analyze&&t.analyze(this._templateStore,o,l,p)}}return this._templateStore.finalize(n)}async analyzeGraphics(e,r,o,s,i){if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAborted"])(i))return;const l=e.getCursor();for(r&&await r.analyze(this._idField,l.copy(),o,s,i);l.next();){let e=l.getGroupId();if(null!=e&&-1!==e||(e=r.match(this._idField,l,l.geometryType,o,s),l.setGroupId(e)),Object(_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_6__["isDynamicId"])(e)){const t=this._templateStore.getDynamicTemplateGroup(e);for(const e of t)e&&e.analyze&&e.analyze(this._templateStore,l,o,s)}l.setGroupId(e)}return this._templateStore.finalize(i)}writeGraphic(e,t){const r=t.getGroupId(),o=t.getDisplayId(),s=this._templateStore.getTemplateGroup(r);if(e.featureStart(t.insertAfter),null!=o){if(Object(_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_6__["isDynamicId"])(r))for(const e of s)e.bindFeature(t,null,null);if(s){for(const r of s)r&&r.write(e,t);e.featureEnd()}}}writeCursor(t,r,o,s,i,l){const p=r.getGroupId(),n=r.getDisplayId(),m=this._templateStore.getTemplateGroup(p);if(r.getObjectId(),null!=n&&m){if(Object(_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_6__["isDynamicId"])(p))for(const e of m)e.bindFeature(r,o,s);for(const e of m)e.write(t,r);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(l)&&t.hasRecords){const e=l&&this._findLabelRef(m);this._writeLabels(t,r,l,e,i)}}}_findLabelRef(e){for(const t of e)if(t instanceof _templates_WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_5__["default"])return t;return null}_writeLabels(t,r,o,s,a){for(const i of o)if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(i)&&i){const{glyphs:e,rtl:o,index:l}=i,p=this._labelTemplates[l];p.setZoomLevel(a),p.bindReferenceTemplate(s),p.bindTextInfo(e,o),p.write(t,r)}}}


/***/ }),

/***/ "L/mq":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/Lock.js ***!
  \**********************************************************************/
/*! exports provided: default, withLock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withLock", function() { return s; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "9MzC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class r{constructor(){this._resolver=null}isHeld(){return!!this._resolver}async acquire(){if(!this._resolver)return this._resolver=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["createResolver"])(),Promise.resolve();await this._resolver.promise,await this.acquire()}release(){const e=this._resolver;this._resolver=null,e.resolve()}}async function s(e,r,s){try{await e.acquire(),await r(s),e.release()}catch(t){throw e.release(),t}}/* harmony default export */ __webpack_exports__["default"] = (r);


/***/ }),

/***/ "MrbB":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/textUtils.js ***!
  \*************************************************************************/
/*! exports provided: codepoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codepoints", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function t(t){const e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}


/***/ }),

/***/ "OetV":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLDynamicTextTemplate.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../alignmentUtils.js */ "Mt1D");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../color.js */ "qaIE");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util.js */ "aixI");
/* harmony import */ var _WGLBaseTextTemplate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WGLBaseTextTemplate.js */ "RNFe");
/* harmony import */ var _WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WGLDynamicMeshTemplate.js */ "ej3m");
/* harmony import */ var _layers_features_textUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../layers/features/textUtils.js */ "MrbB");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const h=5,c=24;function m(t,e,i,s){return"string"==typeof t.text?t.text:"function"==typeof t.text?t.text(e,i,s):""}class _ extends(Object(_WGLBaseTextTemplate_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_6__["default"])){constructor(e){super(e),this._horizontalAlignment="center",this._verticalAlignment="middle",this._textToGlyphs=new Map;const i=e.scaleFactor||1;if(this._cimTextLayer=e,Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.color)){const t=(t,i,s)=>Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["premultiplyAlphaRGBA"])(e.color(t,i,s));this._dynamicPropertyMap.set("_color",t)}else this._color=Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["premultiplyAlphaRGBA"])(e.color);if(Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.color)){const t=(t,i,s)=>Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["premultiplyAlphaRGBA"])(e.outlineColor(t,i,s));this._dynamicPropertyMap.set("_haloColor",t)}else this._haloColor=Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["premultiplyAlphaRGBA"])(e.outlineColor);let n;Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.size)||(n=Math.min(Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.size*e.sizeRatio)),127));const r=(i,s,o)=>Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.size)?Math.min(Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.size(i,s,o)*e.sizeRatio)),127):n;if(this._dynamicPropertyMap.set("_size",r),Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.outlineSize)){const i=(i,s,o)=>Math.min(Math.floor(h*Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.outlineSize(i,s,o)*e.sizeRatio)),127);this._dynamicPropertyMap.set("_haloSize",i)}else this._haloSize=Math.min(Math.floor(h*Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.outlineSize*e.sizeRatio)),127);let l;Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.offsetX)||(l=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.offsetX*e.sizeRatio)));const c=(i,s,o)=>Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.offsetX)?Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.offsetX(i,s,o)*e.sizeRatio)):l;let m;this._dynamicPropertyMap.set("_xOffset",c),Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.offsetY)||(m=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.offsetY*e.sizeRatio)));const _=(i,s,o)=>Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.offsetY)?Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.offsetY(i,s,o)*e.sizeRatio)):m;this._dynamicPropertyMap.set("_yOffset",_),Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.angle)?this._dynamicPropertyMap.set("_angle",e.angle):this._angle=e.angle,Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.horizontalAlignment)?this._dynamicPropertyMap.set("_horizontalAlignment",e.horizontalAlignment):this._horizontalAlignment=e.horizontalAlignment,Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.verticalAlignment)?this._dynamicPropertyMap.set("_verticalAlignment",e.verticalAlignment):this._verticalAlignment=e.verticalAlignment,this._scaleFactor=i,Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(e.text)?this._dynamicPropertyMap.set("_text",e.text):this._text=e.text;const f=Math.min(Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(e.referenceSize*e.sizeRatio)),127);this._referenceSize=Math.round(Math.sqrt(256*f)),this._materialKey=e.materialKey;const y=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_2__["TextMaterialKey"].load(this._materialKey);y.sdf=!0,this._bitset=(1===e.alignment?1:0)|(e.colorLocked?1:0)<<1,this._materialKey=y.data,this._decoration="none",this._lineHeight=1,this._lineWidth=512,this._textPlacement=e.markerPlacement,this._effects=e.effects,this._isCIM=!0}static fromCIMText(t){return new _(t)}async analyze(t,e,i,s){const o=e.readLegacyFeature(),a=m(this._cimTextLayer,o,i,s),n=await t.getMosaicItem(this._cimTextLayer.cim,Object(_layers_features_textUtils_js__WEBPACK_IMPORTED_MODULE_7__["codepoints"])(a));return this._textToGlyphs.set(a,n.glyphMosaicItems),n}bindFeature(t,s,o){const a=t.readLegacyFeature();if(this._dynamicPropertyMap.forEach(((t,e)=>{this[e]=t(a,s,o)})),!this._text||0===this._text.length)return void(this._shapingInfo=null);this._size*=this._scaleFactor,this._scale=this._size/c,this._xOffset*=this._scaleFactor,this._yOffset*=this._scaleFactor,this._xAlignD=Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["getXAnchorDirection"])(this._horizontalAlignment||"center"),this._yAlignD=Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["getYAnchorDirection"])(this._verticalAlignment||"baseline");const n=this._textToGlyphs.get(this._text);this.bindTextInfo(n,!1)}}/* harmony default export */ __webpack_exports__["default"] = (_);


/***/ }),

/***/ "PeSW":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/Writer.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t=1.5;class r{constructor(t,r){this._pos=0;const e=r?this._roundToNearest(r,t.BYTES_PER_ELEMENT):40;this._array=new ArrayBuffer(e),this._buffer=new t(this._array),this._ctor=t,this._i16View=new Int16Array(this._array)}get length(){return this._pos}_roundToNearest(t,r){const e=Math.round(t);return e+(r-e%r)}_ensureSize(r){if(this._pos+r>=this._buffer.length){const e=this._roundToNearest((this._array.byteLength+r*this._buffer.BYTES_PER_ELEMENT)*t,this._buffer.BYTES_PER_ELEMENT),s=new ArrayBuffer(e),i=new this._ctor(s);i.set(this._buffer,0),this._array=s,this._buffer=i,this._i16View=new Int16Array(this._array)}}writeF32(t){this._ensureSize(1);const r=this._pos;return new Float32Array(this._array,4*this._pos,1)[0]=t,this._pos++,r}push(t){this._ensureSize(1);const r=this._pos;return this._buffer[this._pos++]=t,r}writeFixed(t){this._buffer[this._pos++]=t}setValue(t,r){this._buffer[t]=r}i1616Add(t,r,e){this._i16View[2*t]+=r,this._i16View[2*t+1]+=e}getValue(t){return this._buffer[t]}incr(t){if(this._buffer.length<t)throw new Error("Increment index overflows the target buffer");this._buffer[t]++}decr(t){this._buffer[t]--}writeRegion(t){this._ensureSize(t.length);const r=this._pos;return this._buffer.set(t,this._pos),this._pos+=t.length,r}writeManyFrom(t,r,e){this._ensureSize(e-r);for(let s=r;s!==e;s++)this.writeFixed(t._buffer[s])}buffer(){const t=this._array.slice(0,4*this._pos);return this.destroy(),t}toArray(){const t=this._array,r=[];for(let e=0;e<t.byteLength/4;e++)r.push(t[e]);return r}seek(t){this._pos=t}destroy(){this._array=null,this._buffer=null}}/* harmony default export */ __webpack_exports__["default"] = (r);


/***/ }),

/***/ "RNFe":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLBaseTextTemplate.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../layers/graphics/featureConversionUtils.js */ "ZlUD");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _shapingUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shapingUtils.js */ "G0q+");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../enums.js */ "yE7X");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _symbols_cim_placements_CIMMarkerPlacementHelper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../symbols/cim/placements/CIMMarkerPlacementHelper.js */ "5Bb1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const _=8,f=f=>class extends f{constructor(...e){super(...e),this._isCIM=!1,this._vertexBoundsScale=1,this.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].TEXT,this._aux=Object(_number_js__WEBPACK_IMPORTED_MODULE_4__["i8888to32"])(0,0,this._referenceSize,this._bitset)}bindTextInfo(t,i){t&&t.length?this._shapingInfo=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["andThen"])(t,(e=>Object(_shapingUtils_js__WEBPACK_IMPORTED_MODULE_5__["shapeGlyphs"])(e,i,{scale:this._scale,angle:this._angle,xOffset:this._xOffset,yOffset:this._yOffset,hAlign:this._xAlignD,vAlign:this._yAlignD,maxLineWidth:Math.max(32,Math.min(this._lineWidth,512)),lineHeight:_definitions_js__WEBPACK_IMPORTED_MODULE_3__["MAGIC_LABEL_LINE_HEIGHT"]*Math.max(.25,Math.min(this._lineHeight,4)),decoration:this._decoration,isCIM:this._isCIM}))):this._shapingInfo=null}_write(e,t,i){const r=t.getDisplayId();this._writeGeometry(e,t,r,i)}_writeGeometry(e,r,s,h){const x=this._shapingInfo;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(x))return;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._textPlacement)){const t=null!=h?h:r.readLegacyGeometry();return this._writePlacedText(e,s,t,x)}const a=h?Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__["deltaDecodeGeometry"])(Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__["convertFromGeometry"])(h),2):"esriGeometryPolygon"===r.geometryType?r.readCentroid():r.readUnquantizedGeometry();if(a){if(a.isPoint){const[t,i]=a.coords;return this._writeGlyphs(e,s,{x:t,y:i},x)}a.forEachVertex(((t,i)=>this._writeGlyphs(e,s,{x:t,y:i},x)))}}_writePlacedText(e,t,i,o){const n=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(this._textPlacement),h=_symbols_cim_placements_CIMMarkerPlacementHelper_js__WEBPACK_IMPORTED_MODULE_8__["CIMMarkerPlacementHelper"].getPlacement(i,n,Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(1));if(!h)return;let x=h.next();for(;null!=x;){const i=x.getAngle();o.setRotation(i),this._writeGlyphs(e,t,{x:x.tx,y:x.ty},o),o.setRotation(-i),x=h.next()}}_writeGlyphs(e,t,i,r){const s=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_7__["MaterialKeyBase"].load(this._materialKey),o=Object(_number_js__WEBPACK_IMPORTED_MODULE_4__["i1616to32"])(Math.round(_*i.x),Math.round(_*i.y));for(const n of r.glyphs){s.textureBinding=n.textureBinding,e.recordStart(t,s.data,this.geometryType,!1,!0);const i=n.bounds,r=this._vertexBoundsScale;e.vertexBounds(i.x*r,i.y*r,i.width*r,i.height*r),this._writeVertices(e,t,o,n),e.recordEnd()}}_writeGlyph(e,t,i,r,s){const o=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_7__["MaterialKeyBase"].load(this._materialKey),n=Object(_number_js__WEBPACK_IMPORTED_MODULE_4__["i1616to32"])(Math.round(_*i),Math.round(_*r));o.textureBinding=s.textureBinding,e.recordStart(t,o.data,this.geometryType,!1,!0);const h=s.bounds,x=this._vertexBoundsScale;e.vertexBounds(h.x*x,h.y*x,h.width*x,h.height*x),this._writeVertices(e,t,n,s),e.recordEnd()}_writeVertices(e,t,i,r){const s=e.vertexCount();this._writeVertexCommon(e,t,i,r),e.vertexWrite(r.offsets.upperLeft),e.vertexWrite(r.texcoords.upperLeft),e.vertexEnd(),this._writeVertexCommon(e,t,i,r),e.vertexWrite(r.offsets.upperRight),e.vertexWrite(r.texcoords.upperRight),e.vertexEnd(),this._writeVertexCommon(e,t,i,r),e.vertexWrite(r.offsets.lowerLeft),e.vertexWrite(r.texcoords.lowerLeft),e.vertexEnd(),this._writeVertexCommon(e,t,i,r),e.vertexWrite(r.offsets.lowerRight),e.vertexWrite(r.texcoords.lowerRight),e.vertexEnd(),e.indexWrite(s+0),e.indexWrite(s+1),e.indexWrite(s+2),e.indexWrite(s+1),e.indexWrite(s+3),e.indexWrite(s+2)}_writeVertexCommon(e,t,i,r){const s=this._color,o=this._haloColor,n=Object(_number_js__WEBPACK_IMPORTED_MODULE_4__["i8888to32"])(0,0,this._referenceSize,this._bitset),h=Object(_number_js__WEBPACK_IMPORTED_MODULE_4__["i8888to32"])(0,0,this._size,this._haloSize);e.vertexWrite(i),e.vertexWrite(t),e.vertexWrite(s),e.vertexWrite(o),e.vertexWrite(h),e.vertexWrite(n)}};/* harmony default export */ __webpack_exports__["default"] = (f);


/***/ }),

/***/ "VIer":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/heuristics.js ***!
  \****************************************************************************/
/*! exports provided: getMeshHeuristic, getMeshSizeHint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeshHeuristic", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeshSizeHint", function() { return c; });
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../definitions.js */ "jIHu");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "yE7X");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const i=new Map;function t(e){return i.get(e)}function c(r,t,c){const{indicesPerRecord:s,multiplier:o,verticesPerRecord:d}=i.get(r);return{recordBytes:c*_definitions_js__WEBPACK_IMPORTED_MODULE_0__["DISPLAY_RECORD_INT_PER_ELEMENT"]*Uint32Array.BYTES_PER_ELEMENT,indexBytes:o*s*c*Uint32Array.BYTES_PER_ELEMENT,vertexBytes:o*d*c*t}}i.set(_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].MARKER,{multiplier:1,indicesPerRecord:6,verticesPerRecord:4}),i.set(_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LINE,{multiplier:1,indicesPerRecord:24,verticesPerRecord:8}),i.set(_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].FILL,{multiplier:1,indicesPerRecord:10,verticesPerRecord:10}),i.set(_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].TEXT,{multiplier:8,indicesPerRecord:6,verticesPerRecord:4}),i.set(_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LABEL,{multiplier:8,indicesPerRecord:6,verticesPerRecord:4});


/***/ }),

/***/ "XbuD":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/CIMEffectHelper.js ***!
  \**************************************************************************/
/*! exports provided: CIMEffectHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CIMEffectHelper", function() { return c; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _CIMEffects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CIMEffects.js */ "/iQf");
/* harmony import */ var _CIMOperators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CIMOperators.js */ "k0QX");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const s=96/72;class c{static executeEffects(e,c){const n=Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["cloneAndDecodeGeometry"])(c),f=s;let m=new _CIMEffects_js__WEBPACK_IMPORTED_MODULE_1__["SimpleGeometryCursor"](n);for(const t of e){const e=Object(_CIMOperators_js__WEBPACK_IMPORTED_MODULE_2__["getEffectOperator"])(t);e&&(m=e.execute(m,t,f))}return m}static next(t){const o=t.next();return Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["deltaEncodeGeometry"])(o),o}}


/***/ }),

/***/ "YB6V":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/Matcher.js ***!
  \*************************************************************************/
/*! exports provided: DictionaryMatcher, FeatureMatcher, IntervalMatcher, MapMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryMatcher", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureMatcher", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalMatcher", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMatcher", function() { return d; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../support/arcadeOnDemand.js */ "gvqN");
/* harmony import */ var _symbols_cim_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../symbols/cim/utils.js */ "NrhG");
/* harmony import */ var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/LRUCache.js */ "wk6I");
/* harmony import */ var _arcade_callExpressionWithFeature_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../arcade/callExpressionWithFeature.js */ "ictz");
/* harmony import */ var _symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../symbols/cim/cimSymbolUtils.js */ "ZxoT");
/* harmony import */ var _layers_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layers/features/schemaUtils.js */ "owVx");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const o=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri/views/2d/engine/webgl/util/Matcher");class u{constructor(){this.type="feature",this._defaultResult=null}static async fromBasicRenderer(e,t,i){const s=new u;if(e.symbol){const r=await Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_6__["expandSymbol"])(e.symbol,i),a=t.createTemplateGroup(r,null);s.setDefault(a)}return s}size(){return 1}getDefault(){return this._defaultResult}setDefault(e){this._defaultResult=e}match(e,t,i,s,r){return this.getDefault()}async analyze(e,t,i,s,r){return null}}class c extends u{constructor(e,t,i,s){super(),this.type="interval",this._intervals=[],this._isMaxInclusive=t,this._fieldIndex=s,this._field=e,this._normalizationInfo=i}static async fromCBRenderer(e,t,i){const{isMaxInclusive:s,normalizationField:r,normalizationTotal:a,normalizationType:l}=e,o=e.field,u=new c(o,s,{normalizationField:r,normalizationTotal:a,normalizationType:l},e.fieldIndex),d=await Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_6__["expandSymbol"])(e.backgroundFillSymbol,i);await Promise.all(e.intervals.map((async e=>{const s=await Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_6__["expandSymbol"])(e.symbol,i),r=await t.createTemplateGroup(s,d),a={min:e.min,max:e.max};u.add(a,r)})));const f=await Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_6__["expandSymbol"])(e.defaultSymbol,i);if(f){const e=await t.createTemplateGroup(f,d);u.setDefault(e)}return u}add(e,t){this._intervals.push({interval:e,result:t}),this._intervals.sort(((e,t)=>e.interval.min-t.interval.min))}size(){return super.size()+this._intervals.length}match(e,t,i,s,r){if(null==this._fieldIndex&&!this._field)return this.getDefault();const a=null!=this._fieldIndex?t.getComputedNumericAtIndex(this._fieldIndex):this._getValueFromField(t);if(!a&&(null==a||isNaN(a)))return this.getDefault();for(let n=0;n<this._intervals.length;n++){const{interval:e,result:t}=this._intervals[n],i=a>=e.min,s=this._isMaxInclusive?a<=e.max:a<e.max;if(i&&s)return t}return this.getDefault()}_needsNormalization(){const e=this._normalizationInfo;return e&&(e.normalizationField||e.normalizationTotal||e.normalizationType)}_getValueFromField(e){const t=e.readAttribute(this._field);if(!this._needsNormalization()||null==t)return t;const{normalizationField:i,normalizationTotal:s,normalizationType:r}=this._normalizationInfo,a=!!i&&e.readAttribute(i);if(r)switch(r){case"esriNormalizeByField":return a?t/a:void 0;case"esriNormalizeByLog":return Math.log(t)*Math.LOG10E;case"esriNormalizeByPercentOfTotal":return t/s*100;default:return void o.error(`Found unknown normalization type: ${r}`)}else o.error("Normalization is required, but no type was set!")}}class d extends u{constructor(e,t,i){super(),this.type="map",this._nullResult=null,this._resultsMap=new Map,this._fieldsIndex=i,this._fields=e,this._seperator=t||""}static async fromUVRenderer(e,t,i){const s=e.fieldDelimiter,r=[e.field];e.field2&&r.push(e.field2),e.field3&&r.push(e.field3);const a=await Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_6__["expandSymbol"])(e.backgroundFillSymbol,i),l=new d(r,s,e.fieldIndex);await Promise.all(e.map.map((async e=>{const s=await Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_6__["expandSymbol"])(e.symbol,i),r=await t.createTemplateGroup(s,a);"<Null>"===e.value?l.setNullResult(r):l.add(e.value,r)})));const o=await Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_6__["expandSymbol"])(e.defaultSymbol,i);if(o){const e=await t.createTemplateGroup(o,a);l.setDefault(e)}return l}setNullResult(e){this._nullResult=e}add(e,t){this._resultsMap.set(e.toString(),t)}size(){return super.size()+this._resultsMap.size}match(e,t,i,s,r){if(null==this._fieldsIndex&&!this._fields)return this.getDefault();const a=null!=this._fieldsIndex?t.getComputedStringAtIndex(this._fieldsIndex):this._getValueFromFields(t);if(null!==this._nullResult&&(null==a||""===a||"<Null>"===a))return this._nullResult;if(!a&&null==a)return this.getDefault();const n=a.toString();return this._resultsMap.has(n)?this._resultsMap.get(n):this.getDefault()}_getValueFromFields(e){const t=[];for(const i of this._fields){const s=e.readAttribute(i);t.push(s)}return t.join(this._seperator)}}async function f(e,t){const s=e||1;if("number"==typeof s)return(e,t,i)=>s;const r=await Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_2__["createRendererExpression"])(s,t.spatialReference,t.fields);return(e,i,s)=>Object(_arcade_callExpressionWithFeature_js__WEBPACK_IMPORTED_MODULE_5__["default"])(r,e,{$view:s},t.geometryType,i)||1}class m extends u{constructor(e,t,i,s){super(),this.type="dictionary",this._groupIdCache=new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_4__["default"](100),this._renderer=e,this._fieldMap=e.fieldMap,this._symbolFields=e.getSymbolFields(),this._templates=t,this._info=i,this._scaleFn=s}static async fromDictionaryRenderer(e,t,i){const s=(await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../../../../renderers/DictionaryRenderer.js */ "JhoD"))).default.fromJSON(e.renderer);await s.fetchResources({spatialReference:i.spatialReference,fields:i.fields});const r=await f(s.scaleExpression,i);return new m(s,t,i,r)}async _analyzeFeature(e,i,r,a){const u=e.readLegacyFeature(),c=this._scaleFn(u,i,r),d=this._attributeHash(u)+"-"+c,f=this._groupIdCache.get(d);if(f)return f;const m={...r,spatialReference:this._info.spatialReference,abortOptions:a,fields:this._info.fields},h=await this._renderer.getSymbolAsync(u,m),p=Object(_layers_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_7__["createSymbolSchema"])(h,this._renderer),_=Object(_symbols_cim_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_6__["expandSymbol"])(p,this._info,a).then((e=>{if("expanded-cim"!==e.type)return o.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("mapview-bad-type",`Found unexpected type ${e.type} in dictionary response`)),null;e.hash+="-"+c;for(const t of e.layers)t.scaleFactor=c,t.templateHash+="-"+c,"text"===t.type&&"string"==typeof t.text&&t.text.indexOf("[")>-1&&(t.text=Object(_symbols_cim_utils_js__WEBPACK_IMPORTED_MODULE_3__["createLabelOverrideFunction"])(this._fieldMap,t.text,t.cim.textCase));return this._templates.createTemplateGroup(e,null)}));return this._groupIdCache.put(d,_,1),_}async analyze(e,t,i,s,r){const a=t.getCursor(),n=[];for(;a.next();)n.push(this._analyzeFeature(a,i,s,r));return Promise.all(n)}match(e,t,i,s,r){return null}_attributeHash(e){let t="";for(const i of this._symbolFields){const s=this._fieldMap[i];s&&(t+=e.attributes[s]+"-")}return t}}


/***/ }),

/***/ "ZxoT":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/cimSymbolUtils.js ***!
  \*****************************************************************/
/*! exports provided: expandSymbol, expandSymbols */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandSymbol", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandSymbols", function() { return a; });
/* harmony import */ var _WebStyleSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WebStyleSymbol.js */ "3cLA");
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../symbols.js */ "H9eC");
/* harmony import */ var _cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cimAnalyzer.js */ "T8sT");
/* harmony import */ var _ExpandedCIM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExpandedCIM.js */ "wlZk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const a=async(e,r,t)=>Promise.all(e.map((e=>i(e,r,t)))),m=async(e,a)=>new _ExpandedCIM_js__WEBPACK_IMPORTED_MODULE_3__["ExpandedCIM"](await Object(_cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_2__["analyzeCIMSymbol"])(e.data,a),e.data,e.rendererKey,e.maxVVSize),i=async(r,t,a)=>{if(!r)return null;if("cim"===r.type)return m(r,t);if("web-style"===r.type){const i=_WebStyleSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(r),n={type:"cim",data:(await i.fetchCIMSymbol(a)).data,rendererKey:r.rendererKey,maxVVSize:r.maxVVSize};return m(n,t)}return r};


/***/ }),

/***/ "acOm":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/MeshData.js ***!
  \**************************************************************************/
/*! exports provided: MeshData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeshData", function() { return E; });
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../tiling/TileKey.js */ "rlSK");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions.js */ "jIHu");
/* harmony import */ var _tiling_PagedTileQueue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../tiling/PagedTileQueue.js */ "Pns9");
/* harmony import */ var _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../tiling/TileInfoView.js */ "AY31");
/* harmony import */ var _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../tiling/TileQueue.js */ "B81a");
/* harmony import */ var _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../tiling/TileStrategy.js */ "0wLv");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums.js */ "yE7X");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Utils.js */ "yN2G");
/* harmony import */ var _VertexDataWriter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VertexDataWriter.js */ "qkUw");
/* harmony import */ var _layers_features_support_AttributeStore_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../layers/features/support/AttributeStore.js */ "2AbE");
/* harmony import */ var _layers_features_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../layers/features/support/tileUtils.js */ "oBXe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const h=1,c=2,o=4,_=8,l=16,d=32,g=64,p=128;function f(t){switch(t){case h:case _:case d:return-1;case c:case g:return 0;case o:case l:case p:return 1}}function m(t){switch(t){case h:case c:case o:return-1;case _:case l:return 0;case d:case g:case p:return 1}}const x=h|_|d,w=o|l|p,y=h|c|o,v=d|g|p;class E{constructor(t,e,r,i,s){this._hasDotDensity=!1,this._hasAggregate=!1,this.hasRecords=!1,this._data={self:new Map,neighbors:new Array},this._current={geometryType:0,writer:null,overlaps:0,start:0,insertAfter:0,id:0,materialKey:0,indexStart:0,vertStart:0,isDotDensity:!1,bufferingEnabled:!1,metricBoxLenPointer:0},this.hint=e,this.tileKey=t,this._hasDotDensity=r,this._hasAggregate=i,this._pixelBufferEnabled=s}get hasAggregates(){return this._hasAggregate}get hasPixelBufferEnabled(){return this._pixelBufferEnabled}serialize(e){const r=[];return r.push(this._serializeTileVertexData(this.tileKey,this._data.self)),this._data.neighbors.forEach(((i,s)=>{const n=1<<s,u=f(n),h=m(n),c=Object(_layers_features_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_10__["getPow2NeighborKey"])(new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.tileKey),u,h,e);r.push(this._serializeTileVertexData(c.id,i))})),r}_serializeTileVertexData(t,e){var r,s,n,u,a;const h=new Array;return{message:{tileKey:t,data:{[_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].MARKER]:null==(r=e.get(_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].MARKER))?void 0:r.serialize(h),[_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].FILL]:null==(s=e.get(_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].FILL))?void 0:s.serialize(h),[_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].LINE]:null==(n=e.get(_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].LINE))?void 0:n.serialize(h),[_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].TEXT]:null==(u=e.get(_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].TEXT))?void 0:u.serialize(h),[_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].LABEL]:null==(a=e.get(_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].LABEL))?void 0:a.serialize(h)}},transferList:h}}featureStart(t=0){this._current.insertAfter=t}featureEnd(){}recordStart(t,e,r,i,s){this._current.writer=this._getVertexWriter(r,i),this._current.overlaps=0,this._current.indexStart=this._current.writer.indexCount,this._current.vertStart=this._current.writer.vertexCount,this._current.bufferingEnabled=s,this._current.id=t,this._current.materialKey=e,this._current.geometryType=r,this._current.isDotDensity=!1,this._current.writer.recordStart()}recordCount(){return this._current.writer.recordCount}vertexCount(){return this._current.writer.vertexCount}indexCount(){return this._current.writer.indexCount}vertexBounds(t,e,r,i){this._current.bufferingEnabled&&this._addOverlap(t,e,r,i)}vertexWrite(t){this._current.writer.writeVertex(t)}vertexWriteF32(t){this._current.writer.writeVertexF32(t)}vertexEnd(){}vertexWriter(){return this._current.writer.vertexWriter}indexWrite(t){this._current.writer.writeIndex(t)}indexWriter(){return this._current.writer.indexWriter}metricWriter(){return this._current.writer.metricWriter}metricStart(t,e,r,s,n,a,h,c){this._current.writer=this._getVertexWriter(_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].LABEL,!1);const o=this._current.writer.metricWriter;o.push(Object(_layers_features_support_AttributeStore_js__WEBPACK_IMPORTED_MODULE_9__["getDisplayIdTexel"])(t)),o.push(e),o.push(r),o.push(s),o.push(n),o.push(a),o.push(h),o.push(c),o.push(255),this._current.metricBoxLenPointer=o.push(0)}metricEnd(){const t=this._current.writer.metricWriter;0===t.getValue(this._current.metricBoxLenPointer)&&t.seek(t.length-10)}metricBoxWrite(t,e,r,i){const s=this._current.writer.metricWriter;s.incr(this._current.metricBoxLenPointer),s.push(0),s.push(0),s.push(t),s.push(e),s.push(r),s.push(i)}recordEnd(){const t=this._current.indexStart,r=this._current.writer.indexCount;if(t===r)return!1;this.hasRecords=!0;const u=r-t,a=this._current.vertStart,h=this._current.writer.vertexCount-a;if(this._current.writer.recordEnd(this._current.id,this._current.materialKey,this._current.insertAfter,t,u,a,h),!this._pixelBufferEnabled||this._hasAggregate||0===this._current.overlaps||this._current.geometryType===_enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLGeometryType"].LABEL)return!0;const c=this._current.writer;for(let i=0;i<8;i++){const t=1<<i;if(!!(this._current.overlaps&t)){if(!this._data.neighbors[i]){const t=new Map;this._data.neighbors[i]=t}const r=this._data.neighbors[i],u=this._current.geometryType;if(!r.has(u)){const t=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_7__["getStrides"])(u,this._current.isDotDensity).geometry;r.set(u,new _VertexDataWriter_js__WEBPACK_IMPORTED_MODULE_8__["VertexDataWriter"](u,t,_definitions_js__WEBPACK_IMPORTED_MODULE_1__["PATCH_PIXEL_BUFFER_ALLOC_SIZE"]))}const a=r.get(this._current.geometryType),h=8,o=512*-f(t)*h,_=512*-m(t)*h;a.copyLastFrom(c,o,_)}}return!0}_addOverlap(t,e,i,s){const n=255^((t<0+i?w:t>=_definitions_js__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"]-i?x:w|x)|(e<0+s?v:e>=_definitions_js__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"]-s?y:v|y));this._current.overlaps|=n}_getVertexWriter(t,e){if(!this._data.self.has(t)){const e=this._data.self,r=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_7__["getStrides"])(t,this._hasDotDensity).geometry;e.set(t,new _VertexDataWriter_js__WEBPACK_IMPORTED_MODULE_8__["VertexDataWriter"](t,r,8e3))}return this._data.self.get(t)}}


/***/ }),

/***/ "bzZf":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLBaseLineTemplate.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums.js */ "yE7X");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _templateUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templateUtils.js */ "DiuL");
/* harmony import */ var _TurboLine_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../TurboLine.js */ "Jimw");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const h=8,u=31,d=1024,v=65535,c=1/3.8,W=r=>class extends r{constructor(...e){super(...e),this.tessellationProperties={},this._tessellationOptions={},this.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLGeometryType"].LINE}_initializeTessellator(e){const r=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__["LineMaterialKey"].load(this._materialKey),i=this._tessellationOptions,s=r.vvSizeFieldStops||r.vvSizeMinMaxValue||r.vvSizeScaleStops||r.vvSizeUnitValue,o=this.tessellationProperties._halfWidth<_definitions_js__WEBPACK_IMPORTED_MODULE_1__["THIN_LINE_THRESHOLD"]/2;if(i.thin=o&&!e&&!s,i.trackDistance=this._isDashed||this._hasPattern,i.wrapDistance=v,i.innerBisectorAutoSplitThreshold=c,i.outerBisectorAutoSplitThreshold=c,i.enableInnerBisectorSplit=this._isDashed||this._hasPattern,i.enableOuterBisectorSplit=this._isDashed||this._hasPattern,i.thin)return void(this._tessellationCallbacks={vertex:_(this.tessellationProperties),bridge:p(this.tessellationProperties)});const a=new _TurboLine_js__WEBPACK_IMPORTED_MODULE_6__["StandardTessellationCallbacks"](f(this.tessellationProperties),m(this.tessellationProperties));a.miterLimitCosine=this._miterLimitCosine,a.textured=this._isDashed||this._hasPattern,a.joinOnUTurn=this._joinOnUTurn,this._tessellationCallbacks=a}_write(e,t,r){const i="esriGeometryPoint"===t.geometryType;e.recordStart(t.getDisplayId(),this._materialKey,this.geometryType,!1,i),this._writeGeometry(e,t,r,i),e.recordEnd()}_writeGeometry(t,r,i,s){const n=null!=i?i:r.readLegacyGeometry(),o=this._getLines(n,s);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(o)||this._writeVertices(t,r,o)}_getLines(t,r){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t))return null;const i=t.paths||t.rings;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(i))return null;return Object(_templateUtils_js__WEBPACK_IMPORTED_MODULE_5__["clipLinesMarshall"])(i,r?256:16)}_writeVertices(e,t,r){const i=t.getDisplayId(),s=e.vertexCount(),n=this.tessellationProperties;n.out=e,n.id=i,n.indexCount=0,n.vertexCount=0,n.offset=s;for(const{line:o,start:h}of r)this._tessellationOptions.initialDistance=h%v,this._tessellationCallbacks instanceof _TurboLine_js__WEBPACK_IMPORTED_MODULE_6__["StandardTessellationCallbacks"]&&(this._tessellationCallbacks.capType=this._capType,this._tessellationCallbacks.joinType=this._joinType),Object(_TurboLine_js__WEBPACK_IMPORTED_MODULE_6__["tessellate"])(o,this._tessellationOptions,this._tessellationCallbacks),Object(_TurboLine_js__WEBPACK_IMPORTED_MODULE_6__["cleanup"])()}},_=e=>t=>{const s=e.out,n=Math.ceil(d*e._halfWidth),o=Math.ceil(d*e._halfReferenceWidth);t.entry0=e.offset+e.vertexCount++;{const l=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(t.distance,n),a=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(Math.round(u*t.prevNormal.x),Math.round(u*t.prevNormal.y),Math.round(0*u),Math.round(-1*u)),x=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(0,0,0,e._bitset);s.vertexBounds(t.currentVertex.x,t.currentVertex.y,0,0),s.vertexWrite(Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(h*t.currentVertex.x,h*t.currentVertex.y)),s.vertexWrite(e.id),s.vertexWrite(e._fillColor),s.vertexWrite(a),s.vertexWrite(l),s.vertexWrite(e._tl),s.vertexWrite(e._br),s.vertexWrite(x),s.vertexWrite(Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(o,0)),s.vertexEnd()}t.entry2=e.offset+e.vertexCount++;{const l=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(t.distance,n),a=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(Math.round(u*-t.prevNormal.x),Math.round(u*-t.prevNormal.y),Math.round(0*u),Math.round(1*u)),x=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(0,0,0,e._bitset);s.vertexBounds(t.currentVertex.x,t.currentVertex.y,0,0),s.vertexWrite(Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(h*t.currentVertex.x,h*t.currentVertex.y)),s.vertexWrite(e.id),s.vertexWrite(e._fillColor),s.vertexWrite(a),s.vertexWrite(l),s.vertexWrite(e._tl),s.vertexWrite(e._br),s.vertexWrite(x),s.vertexWrite(Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(o,0)),s.vertexEnd()}t.exit0=e.offset+e.vertexCount++;{const l=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(t.distance,n),a=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(Math.round(u*t.nextNormal.x),Math.round(u*t.nextNormal.y),Math.round(0*u),Math.round(-1*u)),x=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(0,0,0,e._bitset);s.vertexBounds(t.currentVertex.x,t.currentVertex.y,0,0),s.vertexWrite(Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(h*t.currentVertex.x,h*t.currentVertex.y)),s.vertexWrite(e.id),s.vertexWrite(e._fillColor),s.vertexWrite(a),s.vertexWrite(l),s.vertexWrite(e._tl),s.vertexWrite(e._br),s.vertexWrite(x),s.vertexWrite(Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(o,0)),s.vertexEnd()}t.exit2=e.offset+e.vertexCount++;{const l=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(t.distance,n),a=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(Math.round(u*-t.nextNormal.x),Math.round(u*-t.nextNormal.y),Math.round(0*u),Math.round(1*u)),x=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(0,0,0,e._bitset);s.vertexBounds(t.currentVertex.x,t.currentVertex.y,0,0),s.vertexWrite(Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(h*t.currentVertex.x,h*t.currentVertex.y)),s.vertexWrite(e.id),s.vertexWrite(e._fillColor),s.vertexWrite(a),s.vertexWrite(l),s.vertexWrite(e._tl),s.vertexWrite(e._br),s.vertexWrite(x),s.vertexWrite(Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(o,0)),s.vertexEnd()}},p=e=>t=>{const r=e.out;r.indexWrite(t.leftExit0),r.indexWrite(t.rightEntry0),r.indexWrite(t.leftExit2),r.indexWrite(t.rightEntry0),r.indexWrite(t.rightEntry2),r.indexWrite(t.leftExit2),e.indexCount+=6},f=e=>(t,s,n,o,l,a,x,v,c)=>{const W=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(c,Math.ceil(d*e._halfWidth)),_=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(Math.round(u*l),Math.round(u*a),Math.round(u*x),Math.round(u*v)),p=Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i8888to32"])(u*n,u*o,0,e._bitset),f=e.out;return f.vertexBounds(t,s,1,1),f.vertexWrite(Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(h*t,h*s)),f.vertexWrite(e.id),f.vertexWrite(e._fillColor),f.vertexWrite(_),f.vertexWrite(W),f.vertexWrite(e._tl),f.vertexWrite(e._br),f.vertexWrite(p),f.vertexWrite(Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["i1616to32"])(Math.ceil(d*e._halfReferenceWidth),0)),f.vertexEnd(),e.offset+e.vertexCount++},m=e=>(t,r,i)=>{const s=e.out;s.indexWrite(t),s.indexWrite(r),s.indexWrite(i),e.indexCount+=3};/* harmony default export */ __webpack_exports__["default"] = (W);


/***/ }),

/***/ "ej3m":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLDynamicMeshTemplate.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _symbols_cim_cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../symbols/cim/cimAnalyzer.js */ "T8sT");
/* harmony import */ var _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WGLMeshTemplate.js */ "916D");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const i=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.webgl.WGLDynamicMeshTemplate");class s extends _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_2__["default"]{constructor(e){super(),this._ongoingMaterialRequestMap=new Map,this._materialCache=new Map,this._dynamicPropertyMap=new Map,this._cimLayer=e}analyze(e,a,s,r){const o=a.readLegacyFeature(),n=this._materialCache,m=this._cimLayer.materialHash;if(!m)return i.error("A Dynamic mesh template must have a material hash value or function!"),Promise.reject(null);const c="function"==typeof m?m(o,s,r):m;if(n.has(c)){const e=n.get(c);return Promise.resolve(e)}if(this._ongoingMaterialRequestMap.has(c))return this._ongoingMaterialRequestMap.get(c);const l=Object(_symbols_cim_cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_1__["analyzeCIMResource"])(this._cimLayer.cim,this._cimLayer.materialOverrides);l.mosaicHash=c;const h=e.getMosaicItem(l).then((e=>(this._ongoingMaterialRequestMap.delete(c),n.set(c,e),e))).catch((e=>(this._ongoingMaterialRequestMap.delete(c),i.error(".analyze()",e.message),null)));return this._ongoingMaterialRequestMap.set(c,h),h}}/* harmony default export */ __webpack_exports__["default"] = (s);


/***/ }),

/***/ "iegs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLTextTemplate.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../alignmentUtils.js */ "Mt1D");
/* harmony import */ var _util_BidiText_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/BidiText.js */ "t7mB");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../color.js */ "qaIE");
/* harmony import */ var _WGLBaseTextTemplate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WGLBaseTextTemplate.js */ "RNFe");
/* harmony import */ var _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WGLMeshTemplate.js */ "916D");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const c=5,f=24;class _ extends(Object(_WGLBaseTextTemplate_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_6__["default"])){constructor(n,l,r,h,m,_,x,d,z,u,g,M,p,S,y,j,T,V=!1){super(),this._xOffset=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(M),this._yOffset=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(p),this._decoration=z||"none",this._color=h,this._haloColor=m,this._haloSize=Math.min(Math.floor(c*Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["toPt"])(r))),127),this._size=Math.min(Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(l)),127);const b=Math.min(Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(l)),127);this._referenceSize=Math.round(Math.sqrt(256*b)),this._scale=this._size/f,this._angle=g,this._justify=Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["getJustification"])(_||"center"),this._xAlignD=Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["getXAnchorDirection"])(_||"center"),this._yAlignD=Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["getYAnchorDirection"])(x||"baseline"),this._baseline="baseline"===(x||"baseline"),this._bitset=(1===d?1:0)|(u?1:0)<<1;const A=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_3__["MaterialKeyBase"].load(n);A.sdf=!0,this._materialKey=A.data,this._lineWidth=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(S)||512,this._lineHeight=y||1,this._textPlacement=j,this._effects=T,this._isCIM=V}static fromText(t,e){const i=new _(t.materialKey,t.font.size,t.haloSize||0,t.color&&Object(_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlphaRGBAArray"])(t.color)||0,t.haloColor&&Object(_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlphaRGBAArray"])(t.haloColor)||0,t.horizontalAlignment,t.verticalAlignment,0,t.font.decoration,!1,t.angle||0,t.xoffset,t.yoffset,t.lineWidth,t.lineHeight,null,null,!1),[,o]=Object(_util_BidiText_js__WEBPACK_IMPORTED_MODULE_2__["bidiText"])(t.text);return i.bindTextInfo(e,o),i._vertexBoundsScale=t.maxVVSize?t.maxVVSize/t.font.size:1,i}static fromCIMText(t,e){const i=t.scaleFactor||1,o=t.size*t.sizeRatio*i,s=new _(t.materialKey,o,t.outlineSize*t.sizeRatio,Object(_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlphaRGBA"])(t.color),Object(_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlphaRGBA"])(t.outlineColor),t.horizontalAlignment,t.verticalAlignment,t.alignment,t.decoration,t.colorLocked,t.angle,t.offsetX*t.sizeRatio*i,t.offsetY*t.sizeRatio*i,512,1,t.markerPlacement,t.effects,!0),[,a]=Object(_util_BidiText_js__WEBPACK_IMPORTED_MODULE_2__["bidiText"])(t.text);return s.bindTextInfo(e,a),s._vertexBoundsScale=t.maxVVSize?t.maxVVSize/o:1,s}}/* harmony default export */ __webpack_exports__["default"] = (_);


/***/ }),

/***/ "n21L":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/DisplayRecordReader.js ***!
  \******************************************************************************************/
/*! exports provided: DisplayRecordReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayRecordReader", function() { return r; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions.js */ "jIHu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const s=2147483647;class r{constructor(t){this._head=t,this._cursor=t}static from(t,e=0,i=t.byteLength/_.BYTES_PER_RECORD-e){const s=new _(new Int32Array(t,e*_.BYTES_PER_RECORD,i*_.ELEMENTS_PER_RECORD));return new r(s)}size(){var t,e;return null!=(t=null==(e=this._cursor)?void 0:e.size())?t:0}get id(){return this._cursor.id}set id(t){this._cursor.id=t}get materialKey(){return this._cursor.materialKey}set materialKey(t){this._cursor.materialKey=t}get insertAfter(){return this._cursor.insertAfter}get indexFrom(){return this._cursor.indexFrom}set indexFrom(t){this._cursor.indexFrom=t}get indexCount(){return this._cursor.indexCount}set indexCount(t){this._cursor.indexCount=t}get vertexFrom(){return this._cursor.vertexFrom}set vertexFrom(t){this._cursor.vertexFrom=t}get vertexCount(){return this._cursor.vertexCount}set vertexCount(t){this._cursor.vertexCount=t}get index(){return this._cursor._index}link(t){if(!this._head)return void(this._head=t._head);let e=this._head;for(;e._link;)e=e._link;e._link=t._head}getCursor(){return this.copy()}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}copy(){var t;const e=new r(null==(t=this._head)?void 0:t.copy());if(!e._head)return e;let i=e._head,s=e._head._link;for(;s;)i._link=s.copy(),i=s,s=i._link;return e}next(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){var t;return null!=(t=this._cursor.peekId())?t:this._cursor._link.peekId()}delete(e){let i=this._head,s=null;for(;i;){if(i.delete(e))return i.isEmpty()&&(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s)&&(s._link=i._link),i===this._head&&(this._head=i._link),i===this._cursor&&(this._cursor=i._link)),!0;s=i,i=i._link}return!1}}r.ELEMENTS_PER_RECORD=_definitions_js__WEBPACK_IMPORTED_MODULE_1__["DISPLAY_RECORD_INT_PER_ELEMENT"],r.BYTES_PER_RECORD=r.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;class _{constructor(t){this._link=null,this._index=-1,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=t}static from(t,e=0,i=t.byteLength/this.BYTES_PER_RECORD-e){return new _(new Int32Array(t,e*this.BYTES_PER_RECORD,i*this.ELEMENTS_PER_RECORD))}delete(t){const e=this._index,i=this.lookup(t);if(i)for(this.id=s,++this._deletedCount;this.next()&&this.id===t;)this.id=s,++this._deletedCount;return this._index=e,i}isEmpty(){return this._deletedCount===this.size()}link(t){this._link?this._link.link(t):this._link=t}lookup(t){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._offsets.instance)){this._offsets.instance=new Map;const t=this.copy();t._index=-1;let e=0;for(;t.next();)t.id!==e&&(this._offsets.instance.set(t.id,t._index),e=t.id)}if(!this._offsets.instance.has(t))return!1;const i=this._index;return this._index=this._offsets.instance.get(t),this.id!==s||(this._index=i,!1)}get id(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD]}set id(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD]=t}get materialKey(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+1]}set materialKey(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+1]=t}get insertAfter(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+3]}set indexFrom(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+3]=t}get indexCount(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+4]}set indexCount(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+4]=t}get vertexFrom(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+5]}set vertexFrom(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+5]=t}get vertexCount(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+6]}set vertexCount(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+6]=t}get index(){return this._index}size(){return this._packedRecords.length/_.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&this.id===s;);return this._index<this.size()}peekId(){const t=(this._index+1)*_.ELEMENTS_PER_RECORD;return t>=this._packedRecords.length?0:this._packedRecords[t]}getCursor(){return this.copy()}copy(){const t=new _(this._packedRecords);return t._link=this._link,t._index=this._index,t._offsets=this._offsets,t._deletedCount=this._deletedCount,t}}_.ELEMENTS_PER_RECORD=_definitions_js__WEBPACK_IMPORTED_MODULE_1__["DISPLAY_RECORD_INT_PER_ELEMENT"],_.BYTES_PER_RECORD=_.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;


/***/ }),

/***/ "n7P2":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLFillTemplate.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../color.js */ "qaIE");
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../GeometryUtils.js */ "HQFP");
/* harmony import */ var _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WGLMeshTemplate.js */ "916D");
/* harmony import */ var _WGLBaseFillTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WGLBaseFillTemplate.js */ "C/3w");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const h=128;class u extends(Object(_WGLBaseFillTemplate_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_7__["default"])){constructor(t,e,r,l,o,s,n,c,f){super(),this._effects=f;const a=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__["FillMaterialKey"].load(t);e&&(a.sdf=e.sdf,a.pattern=!0,a.textureBinding=e.textureBinding),this.fillColor=r,this.tl=l,this.br=o,this.aux1=s,this.aux2=n,this.aux3=c,this._materialKey=a.data}static fromCIMFill(l,i){const n=l.color,a=n&&Object(_color_js__WEBPACK_IMPORTED_MODULE_5__["premultiplyAlphaRGBA"])(n)||0,m=l.materialKey;if(!i){const t=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(0,0,0,l.colorLocked?1:0);return new u(m,null,a,0,0,0,0,t,l.effects)}const{rect:d,width:p,height:y}=i,x=d.x+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],j=d.y+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],w=x+p,g=j+y;let K=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(y);K>255?K=255:K<=0&&(K=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(g-j));let F=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(p||0);F>255?F=255:F<=0&&(F=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(w-x));let L=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(l.offsetX||0)+h;L>255&&(L=255);let B=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(-l.offsetY||0)+h;B>255&&(B=255);const G=l.scaleX||1,M=1,S=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(x,j),U=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(w,g),b=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(F,K,L,B),k=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(h*G,h*M),C=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(0,0,Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_6__["degToByte"])(l.angle),l.colorLocked?1:0);return new u(m,i,a,S,U,b,k,C,l.effects)}static fromSimpleFill(e,l,i=!1){const{color:c}=e,f=c&&"esriSFSNull"!==e.style&&Object(_color_js__WEBPACK_IMPORTED_MODULE_5__["premultiplyAlphaRGBAArray"])(c)||0,a=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(0,0,0,i?255:0),m=e.materialKey;if(!l)return new u(m,null,f,0,0,0,0,a,null);const{rect:d,width:p,height:y}=l,x=d.x+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],j=d.y+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],w=x+p,g=j+y,K=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(x,j),F=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(w,g),L=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(w-x),Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(g-j),0,0),B=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(h,h);return new u(m,l,f,K,F,L,B,a,null)}static fromPictureFill(i,n,c=!1){const f=_definitions_js__WEBPACK_IMPORTED_MODULE_2__["PICTURE_FILL_COLOR"],{rect:a,width:m,height:d}=n,p=a.x+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],y=a.y+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],x=p+m,j=y+d,w=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(p,y),g=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(x,j);let K=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(i.width));K>255&&(K=255);let F=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(i.height));F>255&&(F=255);let L=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(i.xoffset)+h;L>255&&(L=255);let B=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(-i.yoffset)+h;B>255&&(B=255);const G=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(K,F,L,B),M=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i1616to32"])(h*i.xscale,h*i.yscale),S=Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["i8888to32"])(0,0,0,c?255:0),U=i.materialKey;return new u(U,n,f,w,g,G,M,S,null)}}/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ }),

/***/ "oBXe":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/tileUtils.js ***!
  \*********************************************************************************/
/*! exports provided: getPow2NeighborKey, getPow2NeighborTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPow2NeighborKey", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPow2NeighborTile", function() { return e; });
/* harmony import */ var _Tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tile.js */ "7g5W");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function e(e,n,r){const t=e.tileInfoView.tileInfo.isWrappable,i=l(e.key,n,r,t);return new _Tile_js__WEBPACK_IMPORTED_MODULE_0__["Tile"](e.tileInfoView,i)}function l(o,e,l,n){const r=o.clone(),t=1<<r.level,i=r.col+e,c=r.row+l;return n&&i<0?(r.col=i+t,r.world-=1):i>=t?(r.col=i-t,r.world+=1):r.col=i,r.row=c,r}


/***/ }),

/***/ "phaq":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLLabelTemplate.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _alignmentUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../alignmentUtils.js */ "Mt1D");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../enums.js */ "yE7X");
/* harmony import */ var _meshUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./meshUtils.js */ "m3fN");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../color.js */ "qaIE");
/* harmony import */ var _segmentUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./segmentUtils.js */ "/kT+");
/* harmony import */ var _WGLTextTemplate_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./WGLTextTemplate.js */ "iegs");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const y=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate"),b=(e,t="mapview-labeling")=>y.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](t,e)),L=1,S=128,v=0,w=16,P=4;function M(e,t){const i=!!e.minScale&&t.scaleToZoom(e.minScale)||0;return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["clamp"])(i,0,25.5)}function Z(e,t){const i=!!e.maxScale&&t.scaleToZoom(e.maxScale)||255;return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["clamp"])(i,0,25.5)}function z(e){const t=new Map;return i=>(t.has(i)||t.set(i,e(i)),t.get(i))}const G=z((e=>{let t=0;if(0===e)return 1/0;for(;!(e%2);)t++,e/=2;return t})),O=e=>Math.floor(127*e+127),j=e=>Math.floor(10*e),A=e=>Math.round(e*(254/360));class I extends _WGLTextTemplate_js__WEBPACK_IMPORTED_MODULE_13__["default"]{constructor(e,t,i,o){super(e,i.font.size,i.haloSize||0,i.color&&Object(_color_js__WEBPACK_IMPORTED_MODULE_11__["premultiplyAlphaRGBAArray"])(i.color)||0,i.haloColor&&Object(_color_js__WEBPACK_IMPORTED_MODULE_11__["premultiplyAlphaRGBAArray"])(i.haloColor)||0,i.horizontalAlignment,i.verticalAlignment,Object(_meshUtils_js__WEBPACK_IMPORTED_MODULE_9__["isMapAligned"])(t.labelPlacement)?1:0,i.font.decoration,!1,i.angle||0,i.xoffset,i.yoffset,i.lineWidth,i.lineHeight,null,null),this._outLineLabelAngle=0,this._refPlacementPadding=0,this._refPlacementDirX=0,this._refPlacementDirY=0,this._refOffsetX=0,this._refOffsetY=0,this._zoomLevel=0,this.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_8__["WGLGeometryType"].LABEL;const n=M(t,o),r=Z(t,o),l=t.labelPlacement,[m,c]=Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_6__["getAlignmentFromPlacement"])(l);this._xAlignD=m,this._yAlignD=c,this._minZoom=n,this._maxZoom=r,this._refPlacementPadding=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__["pt2px"])(i.haloSize)+_definitions_js__WEBPACK_IMPORTED_MODULE_5__["TEXT_PLACEMENT_PADDING"];const d=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_10__["LabelMaterialKey"].load(e);d.sdf=!0,this._materialKey=d.data}static fromLabelClass(e,t){if("center-along"===e.labelPlacement){const t=e.symbol;t.xoffset=0,t.yoffset=0,t.angle=0,t.font.decoration="none"}return new I(e.materialKey,e,e.symbol,t)}get _shapedBox(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(this._shapingInfo).bounds}setZoomLevel(e){this._zoomLevel=e}bindReferenceTemplate(e){let i=Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_6__["getXDirection"])(this._xAlignD),o=Object(_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_6__["getYDirection"])(this._yAlignD);if(this._refOffsetX=0,this._refOffsetY=0,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e))return void(this._refSymbolAndPlacementOffset=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i8888to32"])(0,0,O(i),O(o)));if("circle"===e.boundsType&&(i||o)){const e=Math.sqrt(i*i+o*o);i/=e,o/=e}const n=Math.max(e.height,e.width),r=this._refPlacementPadding*P;this._refSymbolAndPlacementOffset=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i8888to32"])(r,n,O(i),O(o)),this._referenceSize=n,this._refPlacementDirX=i,this._refPlacementDirY=o,this._refOffsetX=e.xOffset,this._refOffsetY=e.yOffset}_write(e,i){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._shapingInfo))return;const o=this._shapingInfo,n=i.getDisplayId(),r="esriGeometryPolygon"===i.geometryType?i.readLegacyCentroid():i.readLegacyGeometry();if(r)switch(this.current={out:e,inId:n,inShaping:o,zoomLevel:this._zoomLevel},i.geometryType){case"esriGeometryPolyline":this._placeLineLabels(r);break;case"esriGeometryPoint":case"esriGeometryPolygon":this._placePointLabels(r);break;default:b("mapview-labeling",`Geometry of type ${i.geometryType} is not supported`)}}_isVisible(e,t){const i=j(this.current.zoomLevel);return j(e)<=i&&i<=j(t)}_placePointLabels(e){const{out:t,inId:i,inShaping:o}=this.current;this._writeGlyphs(t,i,e,o)}_placeLineLabels(e){const t=Object(_segmentUtils_js__WEBPACK_IMPORTED_MODULE_12__["smoothPaths"])(e.paths,this.current.inShaping.bounds.width),i=this._placeSubdivGlyphs.bind(this),o=(this._shapedBox.width+S)/(1<<L);for(const n of t)Object(_segmentUtils_js__WEBPACK_IMPORTED_MODULE_12__["pathDivide"])(n,o,i)}_placeSubdivGlyphs(e,t,i,o){const n=G(t),s=this._shapedBox.width/(1<<L),a=w/(1<<L),h=Math.min(i,o-i),l=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["log2"])(h/(a+s/2)),m=0===t?l:Math.min(n,l),c=Math.max(this._minZoom,this.current.zoomLevel+L-m),f=this.current.zoomLevel-c,_=this._shapedBox.width/2*2**f;this.current.inShaping.isMultiline?0===t&&this._placeStraight(e,c):this._placeCurved(e,c,_)}_placeStraight(e,t){const{out:i,inId:o,inShaping:n}=this.current;this._writeGlyphs(i,o,e,n,t)}_placeCurved(e,t,i){const{out:o,inId:n}=this.current;o.metricStart(n,t,e.x,e.y,0,0,0,0);const r=e.clone(),s=e.angle*(180/Math.PI)%360,a=(e.angle*(180/Math.PI)+180)%360;this._outLineLabelAngle=A(s),this._placeFirst(r,t,1),this._placeBack(e,r,t,i,1),this._placeForward(e,r,t,i,1),this._outLineLabelAngle=A(a),this._placeFirst(r,t,0),this._placeBack(e,r,t,i,0),this._placeForward(e,r,t,i,0),o.metricEnd()}_placeBack(e,t,i,o,n){const r=e.clone();let s=e.backwardLength+v;for(;r.prev()&&!(s>=o);)this._placeOnSegment(r,t,s,i,-1,n),s+=r.length+v}_placeForward(e,t,i,o,n){const r=e.clone();let s=e.remainingLength+v;for(;r.next()&&!(s>=o);)this._placeOnSegment(r,t,s,i,1,n),s+=r.length+v}_placeFirst(e,t,i){const o=e,n=this.current.inShaping,s=n.glyphs,a=this.current.zoomLevel,{out:h,inId:l}=this.current;for(const m of s){const s=m.x>n.bounds.x?i:1-i,c=s*e.remainingLength+(1-s)*e.backwardLength,f=Math.abs(m.x+m.width/2-n.bounds.x),_=Math.max(0,a+Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["log2"])(f/(c+v))),p=Math.max(t,_);if(m.maxZoom=25,m.angle=e.angle+(1-i)*Math.PI,m.minZoom=p,!(o.x<0||o.x>=512||o.y<0||o.y>=512)&&(this._writeGlyph(h,l,o.x,o.y,m),i&&this._isVisible(m.minZoom,m.maxZoom))){const e=m.bounds;h.metricBoxWrite(e.center[0],e.center[1],e.width,e.height)}}}_placeOnSegment(e,t,i,o,n,s){const a=this.current.inShaping.glyphs,{out:h,inId:l}=this.current,m=this.current.inShaping,c=this.current.zoomLevel,f=e.dx/e.length,_=e.dy/e.length,p={x:e.x+i*-n*f,y:e.y+i*-n*_};for(const g of a){const a=g.x>m.bounds.x?s:1-s;if(!(a&&1===n||!a&&-1===n))continue;const f=Math.abs(g.x+g.width/2-m.bounds.x),_=Math.max(0,c+Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["log2"])(f/i)-.1),d=Math.max(o,c+Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["log2"])(f/(i+e.length+v)));if(0!==_&&(g.angle=e.angle+(1-s)*Math.PI,g.minZoom=d,g.maxZoom=_,!(p.x<0||p.x>=512||p.y<0||p.y>=512)&&(this._writeGlyph(h,l,p.x,p.y,g),s&&this._isVisible(g.minZoom,g.maxZoom)))){const i=g.bounds,o=e.x-t.x,n=e.y-t.y;h.metricBoxWrite(i.center[0]+o,i.center[1]+n,i.width,i.height)}}}_writeGlyphs(e,t,i,o,n=this._minZoom){if(i.x<0||i.x>=512||i.y<0||i.y>=512)return;const r=i.x+this._refOffsetX,s=i.y-this._refOffsetY;for(const f of o.glyphs)f.minZoom=n,f.maxZoom=this._maxZoom,this._writeGlyph(e,t,r,s,f);const a=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_10__["LabelMaterialKey"].load(this._materialKey),h=this._refPlacementDirX,l=this._refPlacementDirY,m=a.vvSizeFieldStops||a.vvSizeMinMaxValue||a.vvSizeScaleStops||a.vvSizeUnitValue,c=o.boundsT;e.metricStart(t,n,r,s,h,l,this._referenceSize,m?1:0),e.metricBoxWrite(c.center[0],c.center[1],c.width,c.height),e.metricEnd()}_writeVertexCommon(e,t,i,o){const n=this._color,r=this._haloColor,s=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i8888to32"])(0,0,this._size,this._haloSize),a=Math.max(o.minZoom,this._minZoom),h=Math.min(o.maxZoom,this._maxZoom),l=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i8888to32"])(j(a),j(h),this._outLineLabelAngle,0);e.vertexWrite(i),e.vertexWrite(t),e.vertexWrite(n),e.vertexWrite(r),e.vertexWrite(s),e.vertexWrite(this._refSymbolAndPlacementOffset),e.vertexWrite(l)}}/* harmony default export */ __webpack_exports__["default"] = (I);


/***/ }),

/***/ "qLV0":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLMarkerTemplate.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../chunks/mat2df32.js */ "LGNZ");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../color.js */ "qaIE");
/* harmony import */ var _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WGLMeshTemplate.js */ "916D");
/* harmony import */ var _WGLBaseMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WGLBaseMarkerTemplate.js */ "+TxJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class d extends(Object(_WGLBaseMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_8__["default"])){constructor(t,e,o,l,m,c,f,d,u,x,p,M,y,_,S,g,V,z,B,k,w){super(),this.angle=l,this.height=f,this.width=c,this.xOffset=e*B,this.yOffset=o*B,this._markerPlacement=k,this._effects=w,this._anchorX=.5-(.5+g)*S.width/S.width,this._anchorY=.5-(.5+V)*S.height/S.height;const b=(1===_?1:0)|(p?1:0)<<1|(y?1:0)<<2|(M?1:0)<<3,L=S&&S.sdf,j=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_6__["MarkerMaterialKey"].load(t);j.sdf=L,j.pattern=!0,j.textureBinding=S.textureBinding,this._materialKey=j.data,this._fillColor=m,this._outlineColor=u,this._sizeOutlineWidth=Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i8888to32"])(Math.round(Math.min(Math.sqrt(128*c),255)),Math.round(Math.min(Math.sqrt(128*f),255)),Math.round(Math.min(Math.sqrt(128*x),255)),Math.round(Math.min(Math.sqrt(128*d),255)));const P=S.rect.x+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],C=S.rect.y+_definitions_js__WEBPACK_IMPORTED_MODULE_2__["SPRITE_PADDING"],R=P+S.width,v=C+S.height;this._offsets.xUpperLeft=P,this._offsets.yUpperLeft=C,this._offsets.xUpperRight=R,this._offsets.yUpperRight=C,this._offsets.xBottomLeft=P,this._offsets.yBottomLeft=v,this._offsets.xBottomRight=R,this._offsets.yBottomRight=v,this._texUpperLeft=Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(P,C),this._texUpperRight=Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(R,C),this._texBottomLeft=Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(P,v),this._texBottomRight=Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(R,v),c*=z,f*=z,c*=B,f*=B;const K=Math.round(64*z);this._bitestAndDistRatio=Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["i1616to32"])(b,K),this._computedWidth=c,this._computedHeight=f;const U=Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),W=Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_3__["c"])();this._applyTransformation(W,U)}static fromCIMMarker(i,o){const s=o&&o.width||1,r=o&&o.height||1,a=i.size,n=s/r*i.scaleX,h=i.scaleSymbolsProportionally&&i.frameHeight?a/i.frameHeight:1,m=Object(_color_js__WEBPACK_IMPORTED_MODULE_7__["premultiplyAlphaRGBA"])(i.color),c=Object(_color_js__WEBPACK_IMPORTED_MODULE_7__["premultiplyAlphaRGBA"])(i.outlineColor),f=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(a),u=f*n,x=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(i.offsetX||0),p=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(i.offsetY||0),M=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(i.outlineWidth||0)*h,y=i.alignment||0,_=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(i.referenceSize);let S=i.rotation||0;i.rotateClockwise||(S=-S);let g=0,V=0;const z=i.anchorPoint;z&&(i.isAbsoluteAnchorPoint?a&&(g=-z.x/(a*n),V=z.y/a):(g=z.x,V=z.y));const B=new d(i.materialKey,x,p,S,m,u,f,_,c,M,i.colorLocked,i.scaleSymbolsProportionally,!1,y,o,g,V,i.sizeRatio,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(i.scaleFactor,1),i.markerPlacement,i.effects);return B._vertexBoundsScaleX=i.maxVVSize?i.maxVVSize/u:1,B._vertexBoundsScaleY=i.maxVVSize?i.maxVVSize/f:1,B}static fromPictureMarker(t,i){const s=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.width)),r=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.height)),a=_definitions_js__WEBPACK_IMPORTED_MODULE_2__["PICTURE_FILL_COLOR"],n=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.xoffset||0)),h=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.yoffset||0)),l=new d(t.materialKey,n,h,t.angle,a,s,r,r,0,0,!1,!1,!1,0,i,0,0,1,1,null,null);return l._vertexBoundsScaleX=t.maxVVSize?t.maxVVSize/t.width:1,l._vertexBoundsScaleY=t.maxVVSize?t.maxVVSize/t.height:1,l}static fromSimpleMarker(t,i){const o=Object(_color_js__WEBPACK_IMPORTED_MODULE_7__["premultiplyAlphaRGBAArray"])(t.color),s=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.size)),r=s,a=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.xoffset||0)),n=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.yoffset||0)),h=t.style,l=t.outline,c=0|(l&&l.color&&Object(_color_js__WEBPACK_IMPORTED_MODULE_7__["premultiplyAlphaRGBAArray"])(l.color)),f=0|(l&&l.width&&Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(l.width))),u=new d(t.materialKey,a,n,t.angle,o,s,r,r,c,f,!1,!1,"esriSMSCross"===h||"esriSMSX"===h,0,i,0,0,126/64,1,null,null);return u.boundsType="esriSMSCircle"===h?"circle":"square",u._vertexBoundsScaleX=t.maxVVSize?t.maxVVSize/t.size:1,u._vertexBoundsScaleY=t.maxVVSize?t.maxVVSize/t.size:1,u}static fromLineSymbolMarker(t,i){const o=Object(_color_js__WEBPACK_IMPORTED_MODULE_7__["premultiplyAlphaRGBAArray"])(t.color),s=6,r=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(s*t.lineWidth)),a=r,n="cross"===t.style||"x"===t.style;let h;switch(t.placement){case"begin-end":h="Both";break;case"begin":h="JustBegin";break;case"end":h="JustEnd";break;default:h="None"}const l={type:"CIMMarkerPlacementAtExtremities",angleToLine:!0,offset:0,extremityPlacement:h,offsetAlongLine:0},c=new d(t.materialKey,0,0,0,o,r,a,a/s,o,n?Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(t.lineWidth)):0,!1,!1,n,1,i,0,0,126/64,1,l,null);return c.boundsType="circle"===t.style?"circle":"square",c}}/* harmony default export */ __webpack_exports__["default"] = (d);


/***/ }),

/***/ "qkUw":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/VertexDataWriter.js ***!
  \**********************************************************************************/
/*! exports provided: VertexDataWriter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexDataWriter", function() { return r; });
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../definitions.js */ "jIHu");
/* harmony import */ var _heuristics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heuristics.js */ "VIer");
/* harmony import */ var _util_Writer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Writer.js */ "PeSW");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class r{constructor(t,r,i){this._start={index:0,vertex:0};const h=Object(_heuristics_js__WEBPACK_IMPORTED_MODULE_1__["getMeshSizeHint"])(t,r,i),c=r/4;this.geometryType=t,this._records=new _util_Writer_js__WEBPACK_IMPORTED_MODULE_2__["default"](Int32Array,h.recordBytes),this._indices=new _util_Writer_js__WEBPACK_IMPORTED_MODULE_2__["default"](Uint32Array,h.indexBytes),this._vertices=new _util_Writer_js__WEBPACK_IMPORTED_MODULE_2__["default"](Uint32Array,h.vertexBytes),this._metrics=new _util_Writer_js__WEBPACK_IMPORTED_MODULE_2__["default"](Float32Array,0),this._strideInt=c}serialize(t){const e=this._records.buffer(),s=this._indices.buffer(),r=this._vertices.buffer(),i=this._metrics.length?this._metrics.buffer():null,h=4*this._strideInt;return t.push(e,s,r),{stride:h,records:e,indices:s,vertices:r,metrics:i}}get strideInt(){return this._strideInt}get recordCount(){return this._records.length/_definitions_js__WEBPACK_IMPORTED_MODULE_0__["DISPLAY_RECORD_INT_PER_ELEMENT"]}get vertexCount(){return this._vertices.length/this._strideInt}get indexCount(){return this._indices.length}get indexWriter(){return this._indices}get vertexWriter(){return this._vertices}get metricWriter(){return this._metrics}recordStart(){this._start.index=this._indices.length,this._start.vertex=this._vertices.length}recordEnd(t,e,s,r,i,h,c){this._records.push(t),this._records.push(e),this._records.push(s),this._records.push(r),this._records.push(i),this._records.push(h),this._records.push(c)}writeIndex(t){this._indices.push(t)}writeVertex(t){this._vertices.push(t)}writeVertexF32(t){this._vertices.writeF32(t)}copyLastFrom(t,e,s){const r=t._records.length-7,i=t._records.getValue(r),h=t._records.getValue(r+1),c=t._records.getValue(r+2),n=t._records.getValue(r+4),_=t._records.getValue(r+6),d=this._vertices.length,o=(t._start.vertex-this._vertices.length)/this._strideInt,u=this._indices.length,l=this.vertexCount;for(let g=t._start.index;g!==t._indices.length;g++){const e=t._indices.getValue(g);this._indices.push(e-o)}for(let g=t._start.vertex;g!==t._vertices.length;g++){const e=t._vertices.getValue(g);this._vertices.push(e)}for(let g=d;g<=this._vertices.length;g+=this._strideInt)this._vertices.i1616Add(g,e,s);this._records.push(i),this._records.push(h),this._records.push(c),this._records.push(u),this._records.push(n),this._records.push(l),this._records.push(_)}}


/***/ }),

/***/ "wlZk":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/ExpandedCIM.js ***!
  \**************************************************************/
/*! exports provided: ExpandedCIM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandedCIM", function() { return s; });
/* harmony import */ var _views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/2d/engine/webgl/enums.js */ "yE7X");
/* harmony import */ var _views_2d_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/2d/engine/webgl/materialKey/MaterialKey.js */ "GMaR");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const r={marker:_views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].MARKER,fill:_views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].FILL,line:_views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].LINE,text:_views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].TEXT};class s{constructor(e,s,a,i){this.layers=e,this.data=s,this.hash=this._createHash(),this.rendererKey=a;for(const n of e){const e=r[n.type];n.materialKey=Object(_views_2d_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__["createMaterialKey"])(e,this.rendererKey,!1,!1),n.maxVVSize=i}}get type(){return"expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}


/***/ }),

/***/ "xF2a":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLDynamicMarkerTemplate.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../chunks/mat2df32.js */ "LGNZ");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../number.js */ "0RS7");
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ "GMaR");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../color.js */ "qaIE");
/* harmony import */ var _util_Result_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../util/Result.js */ "GqaZ");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util.js */ "aixI");
/* harmony import */ var _WGLBaseMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./WGLBaseMarkerTemplate.js */ "+TxJ");
/* harmony import */ var _WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./WGLDynamicMeshTemplate.js */ "ej3m");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const y=Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),d=Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),M=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.engine.webgl.WGLDynamicMarkerTemplate");class u extends(Object(_WGLBaseMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_13__["default"])){constructor(e){if(super(e),this._cimMarkerLayer=e,Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.color)){const t=(t,i,s)=>Object(_color_js__WEBPACK_IMPORTED_MODULE_9__["premultiplyAlphaRGBA"])(e.color(t,i,s));this._dynamicPropertyMap.set("_fillColor",t)}else this._fillColor=Object(_color_js__WEBPACK_IMPORTED_MODULE_9__["premultiplyAlphaRGBA"])(e.color);if(Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.outlineColor)){const t=(t,i,s)=>Object(_color_js__WEBPACK_IMPORTED_MODULE_9__["premultiplyAlphaRGBA"])(e.outlineColor(t,i,s));this._dynamicPropertyMap.set("_outlineColor",t)}else this._outlineColor=Object(_color_js__WEBPACK_IMPORTED_MODULE_9__["premultiplyAlphaRGBA"])(e.outlineColor);if(Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.size)){const t=(t,i,r)=>Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.size(t,i,r));this._dynamicPropertyMap.set("_size",t)}else this._size=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.size);if(Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.scaleX)?this._dynamicPropertyMap.set("_scaleX",e.scaleX):this._scaleX=e.scaleX,Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.offsetX)){const t=(t,i,r)=>Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.offsetX(t,i,r));this._dynamicPropertyMap.set("xOffset",t)}else this.xOffset=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.offsetX);if(Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.offsetY)){const t=(t,i,r)=>Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.offsetY(t,i,r));this._dynamicPropertyMap.set("yOffset",t)}else this.yOffset=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.offsetY);if(Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.outlineWidth)){const t=(t,i,r)=>Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.outlineWidth(t,i,r));this._dynamicPropertyMap.set("_outlineWidth",t)}else this._outlineWidth=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.outlineWidth);Object(_util_js__WEBPACK_IMPORTED_MODULE_11__["isFunction"])(e.rotation)?this._dynamicPropertyMap.set("_angle",e.rotation):this._angle=e.rotation,this._scaleFactor=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(e.scaleFactor,1),this._markerPlacement=e.markerPlacement,this._effects=e.effects,this._bitSet=(1===e.alignment?1:0)|(e.colorLocked?1:0)<<1|(e.scaleSymbolsProportionally?1:0)<<3,this._materialKey=e.materialKey}static fromCIMMarker(t){return new u(t)}bindFeature(t,e,o){const a=t.readLegacyFeature();this._dynamicPropertyMap.forEach(((t,i)=>{this[i]=t(a,e,o)}));const l=this._cimMarkerLayer.materialHash,f="function"==typeof l?l(a,e,o):l,_=this._materialCache.get(f);if(!_||!Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_10__["ok"])(_.spriteMosaicItem)||!_.spriteMosaicItem)return void M.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-cim","Encountered an error when binding feature"));const p=_.spriteMosaicItem,u=this._cimMarkerLayer.sizeRatio,g=p.width/p.height*this._scaleX,k=this._cimMarkerLayer.rotateClockwise?this._angle:-this._angle;let L=this._size,x=L*g;const P=this.xOffset,j=this.yOffset;this.xOffset*=this._scaleFactor,this.yOffset*=this._scaleFactor;const w=this._cimMarkerLayer.scaleSymbolsProportionally&&this._cimMarkerLayer.frameHeight?this._size/Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(this._cimMarkerLayer.frameHeight):1,z=this._outlineWidth*w,b=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(this._cimMarkerLayer.referenceSize);let O=0,W=0;const C=this._cimMarkerLayer.anchorPoint;C&&(this._cimMarkerLayer.isAbsoluteAnchorPoint?this._size&&(O=-C.x/(this._size*g),W=C.y/this._size):(O=C.x,W=C.y)),this._sizeOutlineWidth=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i8888to32"])(Math.round(Math.min(Math.sqrt(128*x),255)),Math.round(Math.min(Math.sqrt(128*L),255)),Math.round(Math.min(Math.sqrt(128*z),255)),Math.round(Math.min(Math.sqrt(128*b),255))),this.angle=k;const X=Math.round(64*u);this._bitestAndDistRatio=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(this._bitSet,X);const F=p.rect.x+_definitions_js__WEBPACK_IMPORTED_MODULE_4__["SPRITE_PADDING"],K=p.rect.y+_definitions_js__WEBPACK_IMPORTED_MODULE_4__["SPRITE_PADDING"],B=F+p.width,R=K+p.height;this._texUpperLeft=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(F,K),this._texUpperRight=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(B,K),this._texBottomLeft=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(F,R),this._texBottomRight=Object(_number_js__WEBPACK_IMPORTED_MODULE_7__["i1616to32"])(B,R);const S=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_8__["MarkerMaterialKey"].load(this._materialKey);S.sdf=p.sdf,S.pattern=!0,S.textureBinding=p.textureBinding,this._materialKey=S.data,this._anchorX=.5-(.5+O)*p.width/p.width,this._anchorY=.5-(.5+W)*p.height/p.height,x*=u,L*=u,x*=this._scaleFactor,L*=this._scaleFactor,x*=p.rect.width/p.width,L*=p.rect.height/p.height,this._computedWidth=x,this._computedHeight=L,this._applyTransformation(d,y),this.xOffset=P,this.yOffset=j}}/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ })

}]);
//# sourceMappingURL=default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~1502452f.js.map