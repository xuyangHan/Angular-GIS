(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layer~ddde8d1b"],{

/***/ "/iQf":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/CIMEffects.js ***!
  \*************************************************************/
/*! exports provided: SimpleGeometryCursor, clone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleGeometryCursor", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return e; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class r{constructor(t){this._geometry=t}next(){const t=this._geometry;return this._geometry=null,t}}function e(r){return Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(r)}


/***/ }),

/***/ "/vtc":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/CurveHelper.js ***!
  \**************************************************************/
/*! exports provided: CurveHelper, PIXEL_TOLERANCE, PathHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurveHelper", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PIXEL_TOLERANCE", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathHelper", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t=.03;class e{constructor(){this._path=[]}path(){return this._path}addPath(t,e){e||t.reverse(),Array.prototype.push.apply(this._path,t),e||t.reverse()}static mergePath(t,e){e&&Array.prototype.push.apply(t,e)}startPath(t){this._path.push(t)}lineTo(t){this._path.push(t)}close(){const t=this._path;t.length>1&&(t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]||t.push([t[0][0],t[0][1]]))}}class s{constructor(t=0,e=!1){}normalize(t){const e=Math.sqrt(t[0]*t[0]+t[1]*t[1]);t[0]/=e,t[1]/=e}calculateLength(t,e){const s=e[0]-t[0],n=e[1]-t[1];return Math.sqrt(s*s+n*n)}calculateSegLength(t,e){return this.calculateLength(t[e],t[e+1])}calculatePathLength(t){let e=0;const s=t?t.length:0;for(let n=0;n<s-1;++n)e+=this.calculateSegLength(t,n);return e}calculatePathArea(t){let e=0;const s=t?t.length:0;for(let n=0;n<s-1;++n)e+=(t[n+1][0]-t[n][0])*(t[n+1][1]+t[n][1]);return e/2}getCoord2D(t,e,s){return[t[0]+(e[0]-t[0])*s,t[1]+(e[1]-t[1])*s]}getSegCoord2D(t,e,s){return this.getCoord2D(t[e],t[e+1],s)}getAngle(t,e,s){const n=e[0]-t[0],r=e[1]-t[1];return Math.atan2(r,n)}getSegAngle(t,e,s){return this.getAngle(t[e],t[e+1],s)}getAngleCS(t,e,s){const n=e[0]-t[0],r=e[1]-t[1],h=Math.sqrt(n*n+r*r);return h>0?[n/h,r/h]:[1,0]}getSegAngleCS(t,e,s){return this.getAngleCS(t[e],t[e+1],s)}cut(t,e,s,n){return[s<=0?t[e]:this.getSegCoord2D(t,e,s),n>=1?t[e+1]:this.getSegCoord2D(t,e,n)]}addSegment(t,e,s){s&&t.push(e[0]),t.push(e[1])}getSubCurve(t,e,s){const n=[];return this.appendSubCurve(n,t,e,s)?n:null}appendSubCurve(t,e,s,n){const r=e?e.length-1:0;let h=0,l=!0,a=0;for(;a<r;){const r=this.calculateSegLength(e,a);if(0!==r){if(l){if(h+r>s){const o=(s-h)/r;let u=1,c=!1;h+r>=n&&(u=(n-h)/r,c=!0);const i=this.cut(e,a,o,u);if(i&&this.addSegment(t,i,l),c)break;l=!1}}else{if(h+r>n){const s=this.cut(e,a,0,(n-h)/r);s&&this.addSegment(t,s,l);break}this.addSegment(t,[e[a],e[a+1]],l)}h+=r,++a}else++a}return!0}getCIMPointAlong(t,e){const s=t?t.length-1:0;let n=0,r=-1;for(;r<s;){++r;const s=this.calculateSegLength(t,r);if(0!==s){if(n+s>e){const h=(e-n)/s;return this.getCoord2D(t[r],t[r+1],h)}n+=s}}return null}isEmpty(t,e){if(!t||t.length<=1)return!0;const s=t?t.length-1:0;let n=-1;for(;n<s;){if(++n,t[n+1][0]!==t[n][0]||t[n+1][1]!==t[n][1])return!1;if(e&&t[n+1][2]!==t[n][2])return!1}return!0}offset(t,e,s,n,r){if(!t||t.length<2)return null;let h=t.length;const l=t[0][0]===t[h-1][0]&&t[0][1]===t[h-1][1];if(l){if(t.length<3)return null;--h}const a=[];let o=l?t[h-1]:null,u=t[0];for(let c=0;c<h;c++){const r=c===h-1?l?t[0]:null:t[c+1];if(o)if(r){const t=[r[0]-u[0],r[1]-u[1]];this.normalize(t);const h=[u[0]-o[0],u[1]-o[1]];this.normalize(h);const l=h[0]*t[1]-h[1]*t[0],c=h[0]*t[0]+h[1]*t[1];if(l>=0==e<=0){const s=[t[0]-h[0],t[1]-h[1]];this.normalize(s);const n=Math.sqrt((1+c)/2),r=-Math.abs(e)/n;a.push([u[0]-s[0]*r,u[1]-s[1]*r])}else switch(s){case"Mitered":{const s=Math.sqrt((1+c)/2);if(s>0&&1/s<n){const n=[t[0]-h[0],t[1]-h[1]];this.normalize(n);const r=Math.abs(e)/s;a.push([u[0]-n[0]*r,u[1]-n[1]*r]);break}}case"Bevelled":a.push([u[0]+h[1]*e,u[1]-h[0]*e]),a.push([u[0]+t[1]*e,u[1]-t[0]*e]);break;case"Rounded":{a.push([u[0]+h[1]*e,u[1]-h[0]*e]);const s=5,n=1/s;let r=n;for(let l=1;l<s;l++,r+=n){const s=[h[1]*(1-r)+t[1]*r,-h[0]*(1-r)-t[0]*r];this.normalize(s),a.push([u[0]+s[0]*e,u[1]+s[1]*e])}a.push([u[0]+t[1]*e,u[1]-t[0]*e]);break}case"Square":default:if(l<0)a.push([u[0]+(h[1]+h[0])*e,u[1]+(h[1]-h[0])*e]),a.push([u[0]+(t[1]-t[0])*e,u[1]-(t[0]+t[1])*e]);else{const s=Math.sqrt((1+Math.abs(c))/2),n=[t[0]-h[0],t[1]-h[1]];this.normalize(n);const r=e/s;a.push([u[0]-n[0]*r,u[1]-n[1]*r])}}}else{const t=[u[0]-o[0],u[1]-o[1]];this.normalize(t),a.push([u[0]+t[1]*e,u[1]-t[0]*e])}else{const t=[r[0]-u[0],r[1]-u[1]];this.normalize(t),a.push([u[0]+t[1]*e,u[1]-t[0]*e])}o=u,u=r}return l&&a.push([a[0][0],a[0][1]]),a}}


/***/ }),

/***/ "01wM":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/placements/PlacementAtExtremities.js ***!
  \************************************************************************************/
/*! exports provided: PlacementAtExtremities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementAtExtremities", function() { return i; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class i{static local(){return null===i.instance&&(i.instance=new i),i.instance}execute(e,t,s){return new n(e,t,s)}}i.instance=null;class n extends _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathTransformationCursor"]{constructor(e,t,i){super(e,!1,!0),this._curveHelper=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"],this._angleToLine=void 0===t.angleToLine||t.angleToLine,this._offset=void 0!==t.offset?t.offset*i:0,this._type=t.extremityPlacement,this._position=void 0!==t.offsetAlongLine?t.offsetAlongLine*i:0,this._beginProcessed=!1}processPath(e){let t;switch(this._type){case"Both":default:this._beginProcessed?(t=this._atExtremities(e,this._position,!1),this._beginProcessed=!1,this.iteratePath=!1):(t=this._atExtremities(e,this._position,!0),this._beginProcessed=!0,this.iteratePath=!0);break;case"JustBegin":t=this._atExtremities(e,this._position,!0);break;case"JustEnd":t=this._atExtremities(e,this._position,!1);break;case"None":}return t}_atExtremities(e,s,i){const n=e.length;if(n<2)return null;const r=i?1:n-2,o=i?n:-1,a=i?1:-1;let l,h=0,c=i?e[0]:e[n-1];for(let _=r;_!==o;_+=a){l=c,c=e[_];const i=this._curveHelper.calculateLength(l,c);if(h+i>s){const e=(s-h)/i,[n,r]=this._curveHelper.getAngleCS(l,c,e),o=Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getCoord2D"])(l,c,e);return this.internalPlacement.setTranslate(o[0]-this._offset*r,o[1]+this._offset*n),this._angleToLine&&this.internalPlacement.setRotateCS(-n,-r),this.internalPlacement}h+=i}return null}}


/***/ }),

/***/ "6BGx":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/placements/PlacementAlongLineSameSize.js ***!
  \****************************************************************************************/
/*! exports provided: PlacementAlongLineSameSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementAlongLineSameSize", function() { return n; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GeometryWalker.js */ "DAsI");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ "qzns");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class n{static local(){return null===n.instance&&(n.instance=new n),n.instance}execute(t,e,s){return new a(t,e,s)}}n.instance=null;class a extends _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathTransformationCursor"]{constructor(t,i,n){super(t,!0,!0),this._grometryWalker=new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_1__["GeometryWalker"],this._grometryWalker.updateTolerance(n),this._angleToLine=void 0===i.angleToLine||i.angleToLine,this._offset=void 0!==i.offset?i.offset*n:0,this._originalEndings=i.endings,this._offsetAtEnd=void 0!==i.customEndingOffset?i.customEndingOffset*n:0,this._position=void 0!==i.offsetAlongLine?i.offsetAlongLine*n:0,this._pattern=new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_1__["DashPattern"],this._pattern.init(i.placementTemplate,!1),this._pattern.scale(n),this._endings=this._originalEndings}processPath(t){if(this._pattern.isEmpty())return null;let e;if(this.iteratePath)e=this._pattern.nextValue();else{this._originalEndings===_enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].WithFullGap&&this.isClosed?this._endings=_enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].WithMarkers:this._endings=this._originalEndings,this._pattern.extPtGap=0;let s,n=!0;switch(this._endings){case _enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].NoConstraint:s=-this._position,s=this._adjustPosition(s),n=!1;break;case _enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].WithHalfGap:default:s=-this._pattern.lastValue()/2;break;case _enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].WithFullGap:s=-this._pattern.lastValue(),this._pattern.extPtGap=this._pattern.lastValue();break;case _enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].WithMarkers:s=0;break;case _enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].Custom:s=-this._position,s=this._adjustPosition(s),this._pattern.extPtGap=.5*this._offsetAtEnd}if(!this._grometryWalker.init(t,this._pattern,n))return null;this._pattern.reset();let a=0;for(;s>a;)s-=a,a=this._pattern.nextValue();a-=s,e=a,this.iteratePath=!0}const s={};return this._grometryWalker.nextPointAndAngle(e,s)?this._endings===_enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].WithFullGap&&this._grometryWalker.isPathEnd()?(this.iteratePath=!1,null):this._endings===_enums_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEndings"].WithMarkers&&this._grometryWalker.isPathEnd()&&(this.iteratePath=!1,this.isClosed)?null:(this.internalPlacement.setTranslate(s.pt[0]+this._offset*s.sa,s.pt[1]-this._offset*s.ca),this._angleToLine&&this.internalPlacement.setRotateCS(s.ca,s.sa),this.internalPlacement):(this.iteratePath=!1,null)}_adjustPosition(t){let e=t/this._pattern.length();return e-=Math.floor(e),e*this._pattern.length()}}


/***/ }),

/***/ "8Fik":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectWave.js ***!
  \*********************************************************************/
/*! exports provided: EffectWave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectWave", function() { return n; });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/* harmony import */ var _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GeometryWalker.js */ "DAsI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class n{static local(){return null===n.instance&&(n.instance=new n),n.instance}execute(t,e,i){return new r(t,e,i)}}n.instance=null;class r{constructor(t,e,i){this._inputGeometries=t,this._height=(void 0!==e.amplitude?e.amplitude:2)*i,this._period=(void 0!==e.period?e.period:3)*i,this._style=e.waveform,this._height<=0&&(this._height=Math.abs(this._height)),this._period<=0&&(this._period=Math.abs(this._period)),this._pattern=new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_2__["DashPattern"],this._pattern.addValue(this._period),this._pattern.addValue(this._period),this._walker=new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_2__["GeometryWalker"],this._walker.updateTolerance(i)}next(){let i=this._inputGeometries.next();for(;i;){if(0===this._height||0===this._period)return i;if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolyline"])(i)){const t=this._processGeom(i.paths);if(t.length)return{paths:t}}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolygon"])(i)){const t=this._processGeom(i.rings);if(t.length)return{rings:t}}i=this._inputGeometries.next()}return null}_processGeom(t){const e=[];for(const i of t)if(this._walker.init(i,this._pattern))switch(this._style){case"Sinus":default:e.push(this._constructCurve(i,!1));break;case"Square":e.push(this._constructSquare(i));break;case"Triangle":e.push(this._constructTriangle(i));break;case"Random":e.push(this._constructCurve(i,!0))}else e.push(i);return e}_constructCurve(t,e){const s=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PathHelper"],h=this._walker.calculatePathLength(t);let n=Math.round(h/this._period);0===n&&(n=1);const r=n*16+1,a=h/n,o=this._period/16,l=1/r,_=2*Math.PI*h/a,c=2*Math.PI*Math.random(),p=2*Math.PI*Math.random(),u=2*Math.PI*Math.random(),d=.75-Math.random()/2,g=.75-Math.random()/2,w={};this._walker.curPointAndAngle(w),s.startPath(w.pt);let k=0;for(;;){if(!this._walker.nextPointAndAngle(o,w)){s.lineTo(t[t.length-1]);break}{const t=k;let i;if(k+=l,e){const e=this._height/2*(1+.3*Math.sin(d*_*t+c));i=e*Math.sin(_*t+p),i+=e*Math.sin(g*_*t+u),i/=2}else i=.5*this._height*Math.sin(.5*_*t);s.lineTo([w.pt[0]-i*w.sa,w.pt[1]+i*w.ca])}}return s.path()}_constructSquare(t){const e=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PathHelper"],s=this._walker.calculatePathLength(t);let h=Math.round(s/this._period);0===h&&(h=1);let n=!0;for(;;){let t=!1;if(this._walker.curPositionIsValid()){const i={};this._walker.curPointAndAngle(i);const s={};if(this._walker.nextPointAndAngle(this._period,s)){const h={};this._walker.nextPointAndAngle(this._period,h)&&(n?(e.startPath(i.pt),n=!1):e.lineTo(i.pt),e.lineTo([i.pt[0]-this._height/2*i.sa,i.pt[1]+this._height/2*i.ca]),e.lineTo([s.pt[0]-this._height/2*s.sa,s.pt[1]+this._height/2*s.ca]),e.lineTo([s.pt[0]+this._height/2*s.sa,s.pt[1]-this._height/2*s.ca]),e.lineTo([h.pt[0]+this._height/2*h.sa,h.pt[1]-this._height/2*h.ca]),t=!0)}}if(!t){e.lineTo(this._walker.getPathEnd());break}}return e.path()}_constructTriangle(t){const e=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PathHelper"],s=this._walker.calculatePathLength(t);let h=Math.round(s/this._period);0===h&&(h=1);let n=!0;for(;;){let t=!1;if(this._walker.curPositionIsValid()){const i={};this._walker.curPointAndAngle(i);const s={};if(this._walker.nextPointAndAngle(this._period/2,s)){const h={};this._walker.nextPointAndAngle(this._period,h)&&(this._walker.nextPosition(this._period/2)&&(n?(e.startPath(i.pt),n=!1):e.lineTo(i.pt),e.lineTo([s.pt[0]-this._height/2*s.sa,s.pt[1]+this._height/2*s.ca]),e.lineTo([h.pt[0]+this._height/2*h.sa,h.pt[1]-this._height/2*h.ca])),t=!0)}}if(!t){e.lineTo(this._walker.getPathEnd());break}}return e.path()}}


/***/ }),

/***/ "8YkW":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectDonut.js ***!
  \**********************************************************************/
/*! exports provided: EffectDonut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectDonut", function() { return h; });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class h{static local(){return null===h.instance&&(h.instance=new h),h.instance}execute(t,i,e){return new n(t,i,e)}}h.instance=null;class n{constructor(t,i,h){switch(this._inputGeometries=t,this._curveHelper=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"],this._width=(void 0!==i.width?i.width:2)*h,i.method){case"Mitered":default:this._method="Mitered";break;case"Bevelled":this._method="Bevelled";break;case"Rounded":case"TrueBuffer":this._method="Rounded";break;case"Square":this._method="Square"}this._option=i.option,this._offsetFlattenError=_CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PIXEL_TOLERANCE"]*h}next(){let e=this._inputGeometries.next();for(;e;){if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isExtent"])(e)&&this._width>0){if(Math.min(e.xmax-e.xmin,e.ymax-e.ymin)-2*this._width<0)return e;const t=[];return t.push([[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]),t.push([[e.xmin+this._width,e.ymin+this._width],[e.xmax-this._width,e.ymin+this._width],[e.xmax-this._width,e.ymax-this._width],[e.xmin+this._width,e.ymax-this._width],[e.xmin+this._width,e.ymin+this._width]]),{rings:t}}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolygon"])(e)&&this._width>0){const t=[];for(const i of e.rings){const e=this._curveHelper.calculatePathLength(i),s=this._curveHelper.offset(i,this._width,this._method,4,this._offsetFlattenError);s&&(e<0&&s.reverse(),t.push(s))}if(t.length)return{rings:t}}e=this._inputGeometries.next()}return null}}


/***/ }),

/***/ "CUuX":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/placements/PlacementOnLine.js ***!
  \*****************************************************************************/
/*! exports provided: PlacementOnLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementOnLine", function() { return r; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const s=.001;class r{static local(){return null===r.instance&&(r.instance=new r),r.instance}execute(e,t,n){return new l(e,t,n)}}r.instance=null;class l extends _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathTransformationCursor"]{constructor(e,t,n){super(e,!0,!0),this._curveHelper=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"],this._angleToLine=void 0===t.angleToLine||t.angleToLine,this._offset=void 0!==t.offset?t.offset*n:0,this._relativeTo=t.relativeTo,this._position=void 0!==t.startPointOffset?t.startPointOffset*n:0,this._epsilon=s*n}processPath(e){const i=this._position;if("SegmentMidpoint"===this._relativeTo){for(this.iteratePath||(this._segmentCount=e.length,this._curSegment=1,this.iteratePath=!0);this._curSegment<this._segmentCount;){const n=this._curSegment;this._curSegment++;const i=e[n-1],s=e[n],r=this._curveHelper.calculateLength(i,s);if(r<this._epsilon)continue;const l=.5+this._position/r,[a,o]=this._curveHelper.getAngleCS(i,s,l),h=Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getCoord2D"])(i,s,l);return this.internalPlacement.setTranslate(h[0]-this._offset*o,h[1]+this._offset*a),this._angleToLine&&this.internalPlacement.setRotateCS(a,o),this.internalPlacement}return this.iteratePath=!1,null}"LineEnd"===this._relativeTo&&Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["reversePath"])(e);const s=this.onLine(e,i);return"LineEnd"===this._relativeTo&&Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["reversePath"])(e),s}onLine(e,n){let i,s=!1;switch(this._relativeTo){case"LineMiddle":default:i=this._curveHelper.calculatePathLength(e)/2+n;break;case"LineBeginning":i=n;break;case"LineEnd":i=n,s=!0}const r=e.length;let l,a=0,o=e[0];for(let h=1;h<r;++h){l=o,o=e[h];const n=this._curveHelper.calculateLength(l,o);if(a+n>i){const e=(i-a)/n,[r,h]=this._curveHelper.getAngleCS(l,o,e),c=Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getCoord2D"])(l,o,e),u=s?this._offset:-this._offset;return this.internalPlacement.setTranslate(c[0]-u*h,c[1]+u*r),this._angleToLine&&(s?this.internalPlacement.setRotateCS(-r,-h):this.internalPlacement.setRotateCS(r,h)),this.internalPlacement}a+=n}return null}}


/***/ }),

/***/ "DAsI":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/GeometryWalker.js ***!
  \*****************************************************************/
/*! exports provided: DashPattern, GeometryWalker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashPattern", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeometryWalker", function() { return r; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CIMCursor.js */ "tqcG");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CurveHelper.js */ "/vtc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const i=1e-7;class n{constructor(){this._values=[],this.extPtGap=0,this.ctrlPtGap=0,this._length=0,this._currentValue=0}isEmpty(){return 0===this._values.length}size(){return this._values.length}init(t,s,e=!0){if(this._setEmpty(),!t||0===t.length)return!1;for(let n=0;n<t.length;n++){let s=Math.abs(t[n]);e&&s<i&&(s=i),this._values.push(s),this._length+=s}return s&&1&t.length&&(this._length*=2),0!==this._length&&(this.ctrlPtGap=this.extPtGap=0,this._currentValue=-1,!0)}scale(t){const s=this._values?this._values.length:0;for(let e=0;e<s;++e)this._values[e]*=t;this._length*=t,this.extPtGap*=t,this.ctrlPtGap*=t}addValue(t){this._length+=t,this._values.push(t)}firstValue(){return this._values[0]}lastValue(){return this._values[this._values.length-1]}nextValue(){return this._currentValue++,this._currentValue===this._values.length&&(this._currentValue=0),this._values[this._currentValue]}reset(){this._currentValue=-1}length(){return this._length}_setEmpty(){this.extPtGap=this.ctrlPtGap=this._length=0,this._currentValue=-1,this._values.length=0}}class h{constructor(){this.reset()}reset(){this.segment=-1,this.segmentLength=0,this.abscissa=0,this.isPathEnd=!1,this.isPartEnd=!1}isValid(){return-1!==this.segment}copyTo(t){t.segment=this.segment,t.segmentLength=this.segmentLength,t.abscissa=this.abscissa,t.isPathEnd=this.isPathEnd,t.isPartEnd=this.isPartEnd}}class r extends _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"]{constructor(t=0,s=!1){super(t,s),this._tolerance=_CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PIXEL_TOLERANCE"],this._currentPosition=new h}updateTolerance(t){this._tolerance=_CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PIXEL_TOLERANCE"]*t}init(t,s,e=!0){return e?(this._patternLength=s.length(),this._partExtPtGap=s.extPtGap,this._partCtrlPtGap=s.ctrlPtGap):(this._patternLength=0,this._partExtPtGap=0,this._partCtrlPtGap=0),this._currentPosition.reset(),this._partSegCount=0,this._path=t,this._seg=-1,this.setPosAtNextPart()}curPositionIsValid(){return this._currentPosition.isValid()}nextPosition(t,s=0){const e=new h;return!!this._nextPosition(t,e,null,s)&&(e.copyTo(this._currentPosition),!0)}curPointAndAngle(t){t.pt=this._getPoint(this._currentPosition);const[s,e]=this._getAngle(this._currentPosition);t.ca=s,t.sa=e}nextPointAndAngle(t,s,e=0){const i=new h;if(!this._nextPosition(t,i,null,e))return!1;i.copyTo(this._currentPosition),s.pt=this._getPoint(i);const[n,r]=this._getAngle(i);return s.ca=n,s.sa=r,!0}nextCurve(t){if(0===t)return null;const s=[],e=new h;return this._nextPosition(t,e,s,1)?(e.copyTo(this._currentPosition),s):null}isPathEnd(){return this._currentPosition.isPathEnd}getPathEnd(){if(-1===this._currentPosition.segment)throw new Error("missing segment");return this._path[this._currentPosition.segment+1]}_nextPosition(t,s,e,i){if(this._currentPosition.isPathEnd)return!1;let n=this._currentPosition.abscissa;for(this._currentPosition.segmentLength>0&&(n/=this._currentPosition.segmentLength),this._currentPosition.copyTo(s);s.abscissa+t*this._partLengthRatio>s.segmentLength+this._tolerance;){if(e){if(0===e.length)if(0===n){const t=this._path[s.segment];e.push([t[0],t[1]])}else e.push(this.getSegCoord2D(this._path,s.segment,n));const t=this._path[s.segment+1];e.push([t[0],t[1]])}if(n=0,t-=(s.segmentLength-s.abscissa)/this._partLengthRatio,this._partSegCount)s.segment=this.nextSegment(),s.segmentLength=this.calculateSegLength(this._path,s.segment),s.abscissa=0,this._partSegCount--;else{if(!this.setPosAtNextPart())return 0!==i&&(s.segmentLength=this.calculateSegLength(this._path,s.segment),s.isPartEnd=!0,1===i?(s.abscissa=s.segmentLength,s.isPathEnd=!0):s.abscissa=s.segmentLength+t,!0);this._currentPosition.copyTo(s)}}if(s.abscissa+=t*this._partLengthRatio,e){if(0===e.length)if(0===n){const t=this._path[s.segment];e.push([t[0],t[1]])}else e.push(this.getSegCoord2D(this._path,s.segment,n));const t=s.abscissa/s.segmentLength;if(1===t){const t=this._path[s.segment+1];e.push([t[0],t[1]])}else e.push(this.getSegCoord2D(this._path,s.segment,t))}return this._partSegCount||Math.abs(s.abscissa-s.segmentLength)<this._tolerance&&(s.isPathEnd=this._partIsLast,s.isPartEnd=!0),!0}_getPoint(t){if(-1===t.segment)throw new Error("missing segment");const s=t.segmentLength<=0?0:t.abscissa/t.segmentLength;return this.getSegCoord2D(this._path,t.segment,s)}_getAngle(t){if(-1===t.segment)throw new Error("missing segment");const s=t.segmentLength<=0?0:t.abscissa/t.segmentLength;return this.getSegAngleCS(this._path,t.segment,s)}setPosAtNextPart(){for(;this._partSegCount;)this.hasNextSegment()&&this.nextSegment(),this._partSegCount--;if(!this.hasNextSegment())return!1;for(this._partLength=0,this._partIsLast=!0,this._partSegCount=0;this.hasNextSegment();)if(this._partLength+=this.calculateSegLength(this._path,this.nextSegment()),this._partSegCount++,1===Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getId"])(this._path[this.getEndPointIndex()])){this._partIsLast=!this.hasNextSegment();break}let s=this._partSegCount;for(;s;)this.previousSegment(),--s;this._currentPosition.segment=this.nextSegment(),this._currentPosition.segmentLength=this.calculateSegLength(this._path,this._currentPosition.segment),this._currentPosition.abscissa=0,this._currentPosition.isPathEnd=this._currentPosition.isPartEnd=!1,--this._partSegCount;const e=this.getStartPointIndex();this._ctrlPtBegin=1===Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getId"])(this._path[e]);let i=e+this._partSegCount+1;if(i>=this._path.length&&(i=0),this._ctrlPtEnd=1===Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getId"])(this._path[i]),this._patternLength>0){const t=this._ctrlPtBegin?this._partCtrlPtGap:this._partExtPtGap,s=this._ctrlPtEnd?this._partCtrlPtGap:this._partExtPtGap;let e=Math.round((this._partLength-(t+s))/this._patternLength);e<=0&&(e=t+s>0?0:1),this._partLengthRatio=this._partLength/(t+s+e*this._patternLength),this._partLengthRatio<.01&&(this._partLengthRatio=1)}else this._partLengthRatio=1;return!0}hasNextSegment(){return this._seg<this._path.length-2}previousSegment(){return--this._seg}nextSegment(){return++this._seg}getStartPointIndex(){return this._seg}getEndPointIndex(){return this._seg+1}}


/***/ }),

/***/ "Du6U":
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/Rect.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class t{constructor(t=0,h=0,i=0,s=0){this.x=t,this.y=h,this.width=i,this.height=s}get isEmpty(){return this.width<=0||this.height<=0}union(t){this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.width=Math.max(this.width,t.width),this.height=Math.max(this.height,t.height)}}/* harmony default export */ __webpack_exports__["default"] = (t);


/***/ }),

/***/ "E/5U":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectArrow.js ***!
  \**********************************************************************/
/*! exports provided: EffectArrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectArrow", function() { return c; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const s=1.7320508075688772,i=5,l="OpenEnded";class c{static local(){return null===c.instance&&(c.instance=new c),c.instance}execute(t,e,r){return new u(t,e,r)}}c.instance=null;class u extends _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathGeometryCursor"]{constructor(t,e,o){super(t,!1,!0),this._curveHelper=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"],this._width=(void 0!==e.width?e.width:i)*o,this._arrowType=void 0!==e.geometricEffectArrowType?e.geometricEffectArrowType:l,this._offsetFlattenError=_CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PIXEL_TOLERANCE"]*o}processPath(t){switch(this._arrowType){case"OpenEnded":default:return this._constructSimpleArrow(t,!0);case"Block":return this._constructSimpleArrow(t,!1);case"Crossed":return this._constructCrossedArrow(t)}}_constructSimpleArrow(t,e){const r=this._curveHelper.calculatePathLength(t);let n=this._width;r<2*n&&(n=r/2);const s=this._curveHelper.getSubCurve(t,0,r-n);if(!s)return null;const i=n/2;if(this._curveHelper.isEmpty(s,!1))return null;const l=this._constructOffset(s,-i);if(!l)return null;const c=this._constructOffset(s,i);if(!c)return null;const u=this._constructArrowBasePoint(l,-i/2);if(!u)return null;const h=this._constructArrowBasePoint(c,i/2);if(!h)return null;const a=t[t.length-1];e||(this._makeControlPoint(c,!0),this._makeControlPoint(l,!0));const _=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PathHelper"];return _.addPath(c,!0),_.lineTo(h),this._makeControlPoint(_.path()),_.lineTo(a),this._makeControlPoint(_.path()),_.lineTo(u),this._makeControlPoint(_.path()),_.addPath(l,!1),e?{paths:[_.path()]}:(_.close(),{rings:[_.path()]})}_constructCrossedArrow(t){const e=this._curveHelper.calculatePathLength(t);let r=this._width;e<r*(1+s+1)&&(r=e/(1+s+1));const n=this._curveHelper.getSubCurve(t,0,e-r*(1+s));if(!n)return null;const i=r/2;if(this._curveHelper.isEmpty(n,!1))return null;const l=this._constructOffset(n,i);if(!l)return null;const c=this._constructOffset(n,-i);if(!c)return null;const u=this._curveHelper.getSubCurve(t,0,e-r);if(!u)return null;if(this._curveHelper.isEmpty(u,!1))return null;const h=this._constructOffset(u,i);if(!h)return null;const a=this._constructOffset(u,-i);if(!a)return null;const _=h[h.length-1],f=this._constructArrowBasePoint(h,i/2);if(!f)return null;const p=a[a.length-1],d=this._constructArrowBasePoint(a,-i/2);if(!d)return null;const m=t[t.length-1];this._makeControlPoint(l,!1),this._makeControlPoint(c,!1);const w=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PathHelper"];return w.addPath(l,!0),this._makeControlPoint(w.path()),w.lineTo(p),w.lineTo(d),this._makeControlPoint(w.path()),w.lineTo(m),this._makeControlPoint(w.path()),w.lineTo(f),this._makeControlPoint(w.path()),w.lineTo(_),this._makeControlPoint(w.path()),w.addPath(c,!1),{paths:[w.path()]}}_constructOffset(t,e){return this._curveHelper.offset(t,e,"Rounded",4,this._offsetFlattenError)}_constructArrowBasePoint(t,e){if(!t||t.length<2)return null;const r=t[t.length-2],n=t[t.length-1],o=[n[0]-r[0],n[1]-r[1]];return this._curveHelper.normalize(o),[n[0]+o[1]*e,n[1]-o[0]*e]}_makeControlPoint(t,r=!1){Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["setId"])(r?t[0]:t[t.length-1],1)}}


/***/ }),

/***/ "GQfk":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectDashes.js ***!
  \***********************************************************************/
/*! exports provided: EffectDashes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectDashes", function() { return i; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/* harmony import */ var _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GeometryWalker.js */ "DAsI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class i{static local(){return null===i.instance&&(i.instance=new i),i.instance}execute(t,e,s){return new r(t,e,s)}}i.instance=null;class r extends _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathGeometryCursor"]{constructor(t,e,i){super(t,!0,!0),this._walker=new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_2__["GeometryWalker"],this._walker.updateTolerance(i),this._endings=e.lineDashEnding,this._customDashPos=void 0!==e.offsetAlongLine?e.offsetAlongLine*i:0,this._offsetAtEnd=void 0!==e.customEndingOffset?e.customEndingOffset*i:0,this._pattern=new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_2__["DashPattern"],this._pattern.init(e.dashTemplate,!0),this._pattern.scale(i)}processPath(t){if(0===this._pattern.length())return this.iteratePath=!1,{paths:[t]};if(!this.iteratePath){let e=!0;switch(this._endings){case"HalfPattern":case"HalfGap":default:this._pattern.extPtGap=0;break;case"FullPattern":this.isClosed||(this._pattern.extPtGap=.5*this._pattern.firstValue());break;case"FullGap":this.isClosed||(this._pattern.extPtGap=.5*this._pattern.lastValue());break;case"NoConstraint":this.isClosed||(e=!1);break;case"Custom":this.isClosed||(this._pattern.extPtGap=.5*this._offsetAtEnd)}const s=this._walker.calculatePathLength(t);if(this._pattern.isEmpty()||s<.1*this._pattern.length())return{paths:[t]};if(!this._walker.init(t,this._pattern,e))return{paths:[t]}}let s;if(this.iteratePath)s=this._pattern.nextValue();else{let t;switch(this._endings){case"HalfPattern":default:t=.5*this._pattern.firstValue();break;case"HalfGap":t=.5*-this._pattern.lastValue();break;case"FullGap":t=-this._pattern.lastValue();break;case"FullPattern":t=0;break;case"NoConstraint":case"Custom":t=-this._customDashPos}let e=t/this._pattern.length();e-=Math.floor(e),t=e*this._pattern.length(),this._pattern.reset(),s=this._pattern.nextValue();let a=!1;for(;t>=s;)t-=s,s=this._pattern.nextValue(),a=!a;s-=t,a?(this._walker.nextPosition(s),s=this._pattern.nextValue()):this.isClosed&&(this._firstCurve=this._walker.nextCurve(s),s=this._pattern.nextValue(),this._walker.nextPosition(s),s=this._pattern.nextValue())}let a=this._walker.nextCurve(s);return a?this._walker.isPathEnd()?(this.iteratePath=!1,this._firstCurve&&(this._firstCurve.splice(0,1),_CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PathHelper"].mergePath(a,this._firstCurve),this._firstCurve=null)):(s=this._pattern.nextValue(),!this._walker.nextPosition(s)||this._walker.isPathEnd()?(this.iteratePath=!1,this._firstCurve&&(a=this._firstCurve,this._firstCurve=null)):this.iteratePath=!0):(this.iteratePath=!1,a=this._firstCurve,this._firstCurve=null),{paths:[a]}}}


/***/ }),

/***/ "J8sa":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectRotate.js ***!
  \***********************************************************************/
/*! exports provided: EffectRotate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectRotate", function() { return u; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/lang.js */ "f/qv");
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/boundsUtils.js */ "KLE9");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "kYAx");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class u{static local(){return null===u.instance&&(u.instance=new u),u.instance}execute(t,n,e){return new c(t,n,e)}}u.instance=null;class c{constructor(t,n,e){this._inputGeometries=t,this._rotateAngle=void 0!==n.angle?-n.angle*Math.PI/180:0}next(){let u=this._inputGeometries.next();for(;u;){if(0===this._rotateAngle)return u;const c=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["create"])();Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__["getBoundsXY"])(c,u);const l=(c[2]+c[0])/2,m=(c[3]+c[1])/2;if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isExtent"])(u)){const t={rings:[[[u.xmin,u.ymin],[u.xmin,u.ymax],[u.xmax,u.ymax],[u.xmax,u.ymin],[u.xmin,u.ymin]]]};return this._rotateMultipath(t.rings,l,m),t}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(u)){const n=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(u);return this._rotateMultipath(n.rings,l,m),n}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(u)){const n=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(u);return this._rotateMultipath(n.paths,l,m),n}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isMultipoint"])(u)){const n=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(u);return this._rotatePath(n.points,l,m),n}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPoint"])(u))return u;u=this._inputGeometries.next()}return null}_rotateMultipath(t,n,e){if(t)for(const r of t)this._rotatePath(r,n,e)}_rotatePath(t,n,e){if(t){const r=Math.cos(this._rotateAngle),i=Math.sin(this._rotateAngle);for(const o of t){const t=o[0]-n,s=o[1]-e;o[0]=n+t*r-s*i,o[1]=e+t*i+s*r}}}}


/***/ }),

/***/ "MbPc":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/placements/PlacementOnVertices.js ***!
  \*********************************************************************************/
/*! exports provided: PlacementOnVertices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementOnVertices", function() { return n; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class n{static local(){return null===n.instance&&(n.instance=new n),n.instance}execute(t,e,s){return new r(t,e,s)}}n.instance=null;const a=1e-15;class r extends _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathTransformationCursor"]{constructor(t,e,s){super(t,!0,!0),this._curveHelper=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"],this._angleToLine=void 0===e.angleToLine||e.angleToLine,this._offset=void 0!==e.offset?e.offset*s:0,this._endPoints=void 0===e.placeOnEndPoints||e.placeOnEndPoints,this._controlPoints=void 0===e.placeOnControlPoints||e.placeOnControlPoints,this._regularVertices=void 0===e.placeOnRegularVertices||e.placeOnRegularVertices,this._tags=[],this._tagIterator=0}processPath(t){if(this.iteratePath||(this._preparePath(t),this.iteratePath=!0),this._tagIterator>=this._tags.length)return this._tags.length=0,this._tagIterator=0,this.iteratePath=!1,null;const e=this._tags[this._tagIterator];this._angleToLine&&this.internalPlacement.setRotate(e[2]);let s=e[0],i=e[1];if(0!==this._offset){const t=Math.cos(e[2]),n=Math.sin(e[2]);s-=this._offset*n,i+=this._offset*t}return this.internalPlacement.setTranslate(s,i),this._tagIterator++,this.internalPlacement}_preparePath(t){this._tags.length=0,this._tagIterator=0;const i=Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["isClosedPath"])(t),n=t.length-1;let a,r,o=0,l=0,_=0,c=0,g=0;for(;o<n;){o++,a=t[o-1],r=t[o];const e=Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getId"])(a),u=Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["getId"])(r);(this._angleToLine||0!==this._offset)&&(c=this._curveHelper.getAngle(a,r,0)),1===o?i?(l=c,_=e):this._endPoints&&this._tags.push([a[0],a[1],c]):1===e?this._controlPoints&&this._tags.push([a[0],a[1],h(g,c)]):this._regularVertices&&this._tags.push([a[0],a[1],h(g,c)]),(this._angleToLine||0!==this._offset)&&(g=this._curveHelper.getAngle(a,r,1)),o===n&&(i?1===u||1===_?this._controlPoints&&this._tags.push([r[0],r[1],h(g,l)]):this._regularVertices&&this._tags.push([r[0],r[1],h(g,l)]):this._endPoints&&this._tags.push([r[0],r[1],g]))}this._tagIterator=0}}function h(t,e){const s=Math.PI;for(;Math.abs(e-t)>s+2*a;)e-t>s?e-=2*s:e+=2*s;return(t+e)/2}


/***/ }),

/***/ "Nl1v":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/placements/PlacementAtRatioPositions.js ***!
  \***************************************************************************************/
/*! exports provided: PlacementAtRatioPositions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementAtRatioPositions", function() { return e; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GeometryWalker.js */ "DAsI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class e{static local(){return null===e.instance&&(e.instance=new e),e.instance}execute(t,i,s){return new n(t,i,s)}}e.instance=null;class n extends _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathTransformationCursor"]{constructor(t,e,n){super(t,!0,!0),this._walker=new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_1__["GeometryWalker"],this._walker.updateTolerance(n),this._angleToLine=void 0===e.angleToLine||e.angleToLine,this._offset=void 0!==e.offset?e.offset*n:0,this._beginGap=void 0!==e.beginPosition?e.beginPosition*n:0,this._endGap=void 0!==e.endPosition?e.endPosition*n:0,this._flipFirst=void 0===e.flipFirst||e.flipFirst,this._pattern=new _GeometryWalker_js__WEBPACK_IMPORTED_MODULE_1__["DashPattern"],this._pattern.init(e.positionArray,!1,!1),this._subPathLen=0,this._posCount=this._pattern.size(),this._isFirst=!0,this._prevPos=0}processPath(t){if(this._pattern.isEmpty())return null;let i;if(this.iteratePath){const t=this._pattern.nextValue()*this._subPathLen,s=this._beginGap+t;i=s-this._prevPos,this._prevPos=s}else{if(this._posCount=this._pattern.size(),this._isFirst=!0,this._prevPos=0,this._subPathLen=this._walker.calculatePathLength(t)-this._beginGap-this._endGap,this._subPathLen<0)return this.iteratePath=!1,null;if(!this._walker.init(t,this._pattern,!1))return null;this._pattern.reset();const s=this._pattern.nextValue()*this._subPathLen,e=this._beginGap+s;i=e-this._prevPos,this._prevPos=e,this.iteratePath=!0}const s={};if(!this._walker.nextPointAndAngle(i,s,1))return this.iteratePath=!1,null;this.internalPlacement.setTranslate(s.pt[0]+this._offset*s.sa,s.pt[1]-this._offset*s.ca);const e=this._isFirst&&this._flipFirst;let n,a;return this._angleToLine?(n=s.ca,a=s.sa):(n=1,a=0),e&&(n=-n,a=-a),this.internalPlacement.setRotateCS(n,a),this._isFirst=!1,this._posCount--,0===this._posCount&&(this.iteratePath=!1),this.internalPlacement}}


/***/ }),

/***/ "PiQZ":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectBuffer.js ***!
  \***********************************************************************/
/*! exports provided: EffectBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectBuffer", function() { return o; });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class o{static local(){return null===o.instance&&(o.instance=new o),o.instance}execute(e,t,i){return new f(e,t,i)}}o.instance=null;class f{constructor(e,t,i){this._inputGeometries=e,this._curveHelper=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"],this._size=(void 0!==t.size?t.size:1)*i,this._offsetFlattenError=_CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PIXEL_TOLERANCE"]*i}next(){let n=this._inputGeometries.next();for(;n;){if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isExtent"])(n))if(this._size>0){const e=[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]],t=this._curveHelper.offset(e,this._size,"Rounded",4,this._offsetFlattenError);if(t)return{rings:[t]}}else{if(!(this._size<0))return n;if(Math.min(n.xmax-n.xmin,n.ymax-n.ymin)+2*this._size>0)return{xmin:n.xmin-this._size,xmax:n.xmax+this._size,ymin:n.ymin-this._size,ymax:n.ymax+this._size}}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolygon"])(n)){if(0===this._size)return n;const e=[];for(const t of n.rings){const i=this._curveHelper.offset(t,this._size,"Rounded",4,this._offsetFlattenError);i&&e.push(i)}if(e.length)return{rings:e}}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolyline"])(n)&&this._size>0){const e=[];for(const t of n.paths)if(t&&t.length>1){const i=this._curveHelper.offset(t,this._size,"Rounded",4,this._offsetFlattenError),s=this._curveHelper.offset(t,-this._size,"Rounded",4,this._offsetFlattenError);if(i&&s){for(let e=s.length-1;e>=0;e--)i.push(s[e]);i.push([i[0][0],i[0][1]]),e.push(i)}}if(e.length)return{rings:e}}Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPoint"])(n)&&this._size,n=this._inputGeometries.next()}return null}}


/***/ }),

/***/ "Q/g2":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectReverse.js ***!
  \************************************************************************/
/*! exports provided: EffectReverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectReverse", function() { return s; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/lang.js */ "f/qv");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class s{static local(){return null===s.instance&&(s.instance=new s),s.instance}execute(e,t,r){return new n(e,t,r)}}s.instance=null;class n{constructor(e,t,r){this._inputGeometries=e,this._reverse=void 0===t.reverse||t.reverse}next(){let s=this._inputGeometries.next();for(;s;){if(!this._reverse)return s;if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(s)){const t=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(s);return Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_2__["reverseMultipath"])(t.paths),t}s=this._inputGeometries.next()}return null}}


/***/ }),

/***/ "QPyG":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectMove.js ***!
  \*********************************************************************/
/*! exports provided: EffectMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectMove", function() { return n; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/lang.js */ "f/qv");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "qatw");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class n{static local(){return null===n.instance&&(n.instance=new n),n.instance}execute(t,s,e){return new r(t,s,e)}}n.instance=null;class r{constructor(t,s,e){this._inputGeometries=t,this._offsetX=void 0!==s.offsetX?s.offsetX*e:0,this._offsetY=void 0!==s.offsetY?-s.offsetY*e:0}next(){let n=this._inputGeometries.next();for(;n;){if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isExtent"])(n))return{xmin:n.xmin+this._offsetX,xmax:n.xmax+this._offsetX,ymin:n.ymin+this._offsetY,ymax:n.ymax+this._offsetY};if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolygon"])(n)){const s=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(n);return this._moveMultipath(s.rings,this._offsetX,this._offsetY),s}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(n)){const s=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(n);return this._moveMultipath(s.paths,this._offsetX,this._offsetY),s}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isMultipoint"])(n)){const s=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(n);return this._movePath(s.points,this._offsetX,this._offsetY),s}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPoint"])(n))return{x:n.x+this._offsetX,y:n.y+this._offsetY};n=this._inputGeometries.next()}return null}_moveMultipath(t,s,e){if(t)for(const i of t)this._movePath(i,s,e)}_movePath(t,s,e){if(t)for(const i of t)i[0]+=s,i[1]+=e}}


/***/ }),

/***/ "Sld3":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectScale.js ***!
  \**********************************************************************/
/*! exports provided: EffectScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectScale", function() { return c; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/lang.js */ "f/qv");
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/boundsUtils.js */ "KLE9");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "kYAx");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class c{static local(){return null===c.instance&&(c.instance=new c),c.instance}execute(t,s,i){return new l(t,s,i)}}c.instance=null;class l{constructor(t,s,i){this._inputGeometries=t,this._xFactor=void 0!==s.xScaleFactor?s.xScaleFactor:1.15,this._yFactor=void 0!==s.yScaleFactor?s.yScaleFactor:1.15}next(){let c=this._inputGeometries.next();for(;c;){if(1===this._xFactor&&1===this._yFactor)return c;const l=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["create"])();Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__["getBoundsXY"])(l,c);const u=(l[2]+l[0])/2,m=(l[3]+l[1])/2;if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isExtent"])(c)){const t={rings:[[[c.xmin,c.ymin],[c.xmin,c.ymax],[c.xmax,c.ymax],[c.xmax,c.ymin],[c.xmin,c.ymin]]]};return this._scaleMultipath(t.rings,u,m),t}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(c)){const s=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(c);return this._scaleMultipath(s.rings,u,m),s}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(c)){const s=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(c);return this._scaleMultipath(s.paths,u,m),s}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isMultipoint"])(c)){const s=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(c);return this._scalePath(s.points,u,m),s}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPoint"])(c))return c;c=this._inputGeometries.next()}return null}_scaleMultipath(t,s,i){if(t)for(const r of t)this._scalePath(r,s,i)}_scalePath(t,s,i){if(t)for(const r of t){const t=(r[0]-s)*this._xFactor,n=(r[1]-i)*this._yFactor;r[0]=s+t,r[1]=i+n}}}


/***/ }),

/***/ "WPSO":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/CIMPlacements.js ***!
  \****************************************************************/
/*! exports provided: EmptyPlacementCursor, Placement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyPlacementCursor", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Placement", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class t{constructor(){this.setIdentity()}getAngle(){return(null==this.rz||0===this.rz&&1!==this.rz_c&&0!==this.rz_s)&&(this.rz=Math.atan2(this.rz_s,this.rz_c)),this.rz}setIdentity(){this.tx=0,this.ty=0,this.tz=0,this.s=1,this.rx=0,this.ry=0,this.rz=0,this.rz_c=1,this.rz_s=0}setTranslate(t,s){this.tx=t,this.ty=s}setTranslateZ(t){this.tz=t}setRotateCS(t,s){this.rz=void 0,this.rz_c=t,this.rz_s=s}setRotate(t){this.rz=t,this.rz_c=void 0,this.rz_s=void 0}setRotateY(t){this.ry=t}setScale(t){this.s=t}setMeasure(t){this.m=t}}class s{constructor(){}next(){return null}}


/***/ }),

/***/ "X4zr":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/packingUtils.js ***!
  \***************************************************************/
/*! exports provided: packFloatRGBA, unpackFloatRGBA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packFloatRGBA", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpackFloatRGBA", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t=[1,256,65536,16777216],n=[1/256,1/65536,1/16777216,1/4294967296],o=e(new Uint8ClampedArray([255,255,255,255]));function r(n,r,e=0){const c=f(n,0,o);for(let o=0;o<4;o++)r[e+o]=Math.floor(256*u(c*t[o]))}function e(t,o=0){let r=0;for(let e=0;e<4;e++)r+=t[o+e]*n[e];return r}function f(t,n,o){return t<n?n:t>o?o:t}function u(t){return t-Math.floor(t)}


/***/ }),

/***/ "XunE":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/CIMSymbolDrawHelper.js ***!
  \**********************************************************************/
/*! exports provided: CIMSymbolDrawHelper, C_DEG_TO_RAD, CanvasDrawHelper, EnvDrawHelper, Transformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CIMSymbolDrawHelper", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_DEG_TO_RAD", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasDrawHelper", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvDrawHelper", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transformation", function() { return m; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/support/boundsUtils.js */ "KLE9");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CIMPlacements.js */ "WPSO");
/* harmony import */ var _CIMEffects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CIMEffects.js */ "/iQf");
/* harmony import */ var _CIMOperators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CIMOperators.js */ "k0QX");
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Rect.js */ "Du6U");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const c=Math.PI/180,f=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.symbols.cim.CIMSymbolDrawHelper");class m{constructor(t){this._t=t}static createIdentity(){return new m([1,0,0,0,1,0])}clone(){const t=this._t;return new m(t.slice())}transform(t){const s=this._t;return[s[0]*t[0]+s[1]*t[1]+s[2],s[3]*t[0]+s[4]*t[1]+s[5]]}static createScale(t,s){return new m([t,0,0,0,s,0])}scale(t,s){const e=this._t;return e[0]*=t,e[1]*=t,e[2]*=t,e[3]*=s,e[4]*=s,e[5]*=s,this}scaleRatio(){return Math.sqrt(this._t[0]*this._t[0]+this._t[1]*this._t[1])}static createTranslate(t,s){return new m([0,0,t,0,0,s])}translate(t,s){const e=this._t;return e[2]+=t,e[5]+=s,this}static createRotate(t){const s=Math.cos(t),e=Math.sin(t);return new m([s,-e,0,e,s,0])}rotate(t){return this.multiply(m.createRotate(t))}multiply(t){const s=this._t,e=t._t,r=s[0]*e[0]+s[3]*e[1],i=s[1]*e[0]+s[4]*e[1],o=s[2]*e[0]+s[5]*e[1]+e[2],a=s[0]*e[3]+s[3]*e[4],n=s[1]*e[3]+s[4]*e[4],h=s[2]*e[3]+s[5]*e[4]+e[5];return s[0]=r,s[1]=i,s[2]=o,s[3]=a,s[4]=n,s[5]=h,this}}class u{constructor(t){this._transfos=[],this._sizeTransfos=[],this._transfos.push(t||m.createIdentity()),this._sizeTransfos.push(t?t.scaleRatio():1)}transformPt(t){return this._transfos[this._transfos.length-1].transform(t)}transformSize(t){return t*this._sizeTransfos[this._sizeTransfos.length-1]}back(){return this._transfos[this._transfos.length-1]}push(t,s){const e=s?t.scaleRatio():1;t.multiply(this.back()),this._transfos.push(t),this._sizeTransfos.push(this._sizeTransfos[this._sizeTransfos.length-1]*e)}pop(){this._transfos.splice(-1,1),this._sizeTransfos.splice(-1,1)}drawSymbol(t,s){if(t)switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":this.drawMultiLayerSymbol(t,s)}}drawMultiLayerSymbol(t,s){if(!t)return;const e=t.symbolLayers;if(!e)return;const r=t.effects;if(r){const t=this.executeEffects(r,s);if(t){let s=t.next();for(;s;)this.drawSymbolLayers(e,s),s=t.next()}}else this.drawSymbolLayers(e,s)}executeEffects(t,s){const e=1;let r=new _CIMEffects_js__WEBPACK_IMPORTED_MODULE_5__["SimpleGeometryCursor"](s);for(const i of t){const t=Object(_CIMOperators_js__WEBPACK_IMPORTED_MODULE_6__["getEffectOperator"])(i);t&&(r=t.execute(r,i,e))}return r}drawSymbolLayers(t,s){let e=t.length;for(;e--;){const r=t[e];if(!r||!1===r.enable)continue;const i=r.effects;if(i){const t=this.executeEffects(i,s);if(t){let s=t.next();for(;s;)this.drawSymbolLayer(r,s),s=t.next()}}else this.drawSymbolLayer(r,s)}}drawSymbolLayer(t,s){switch(t.type){case"CIMSolidFill":this.drawSolidFill(s,t.color);break;case"CIMHatchFill":this.drawHatchFill(t,s);break;case"CIMSolidStroke":this.drawSolidStroke(s,t.color,t.width,t.capStyle,t.joinStyle,t.miterLimit);break;case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":this.drawMarkerLayer(t,s)}}drawHatchFill(t,s){const e=1,r=this._buildHatchPolyline(t,s,e);r&&(this.pushClipPath(s),this.drawMultiLayerSymbol(t.lineSymbol,r),this.popClipPath())}drawMarkerLayer(t,s){const e=t.markerPlacement;if(e){const r=Object(_CIMOperators_js__WEBPACK_IMPORTED_MODULE_6__["getPlacementOperator"])(e);if(r){const i="CIMMarkerPlacementInsidePolygon"===e.type;i&&this.pushClipPath(s);const o=1,a=r.execute(s,e,o);if(a){let s=a.next();for(;s;)this.drawMarker(t,s),s=a.next()}i&&this.popClipPath()}}else{const e=new _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_4__["Placement"];e.tx=s.x,e.ty=s.y,this.drawMarker(t,e)}}drawMarker(t,s){switch(t.type){case"CIMCharacterMarker":case"CIMPictureMarker":this.drawPictureMarker(t,s);break;case"CIMVectorMarker":this.drawVectorMarker(t,s)}}drawPictureMarker(t,s){if(!t)return;const e=t.size||10,r=m.createIdentity(),i=t.anchorPoint;if(i){let s=i.x,o=i.y;"Absolute"!==t.anchorPointUnits&&(s*=e,o*=e),r.translate(-s,-o)}t.rotation&&r.rotate(t.rotation*c),r.translate(t.offsetX||0,t.offsetY||0),r.translate(s.tx,s.ty),this.push(r,!1),this.drawImage(t.url,e,t.scaleX),this.pop()}drawVectorMarker(t,s){if(!t)return;const e=t.markerGraphics;if(!e)return;const r=t.size,i=t.frame,o=i?i.ymax-i.ymin:0,a=r&&o?r/o:1,n=m.createIdentity();i&&n.translate(.5*-(i.xmax+i.xmin),.5*-(i.ymax+i.ymin));const h=t.anchorPoint;if(h){let s=h.x,e=h.y;"Absolute"!==t.anchorPointUnits&&i&&(s*=i.xmax-i.xmin,e*=i.ymax-i.ymin),n.translate(-s,-e)}1!==a&&n.scale(a,a),t.rotation&&n.rotate(t.rotation*c),n.translate(t.offsetX||0,t.offsetY||0),n.translate(s.tx,s.ty),this.push(n,t.scaleSymbolsProportionally);for(const l of e)l&&l.symbol&&l.geometry||f.error("Invalid marker graphic",l),this.drawSymbol(l.symbol,l.geometry);this.pop()}_buildHatchPolyline(t,e,r){let o=(void 0!==t.separation?t.separation:4)*r,a=void 0!==t.rotation?t.rotation:0;if(0===o)return null;o<0&&(o=-o);let n=0;const h=.5*o;for(;n>h;)n-=o;for(;n<-h;)n+=o;const l=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["create"])();Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__["getBoundsXY"])(l,e),l[0]-=h,l[1]-=h,l[2]+=h,l[3]+=h;const f=[[l[0],l[1]],[l[0],l[3]],[l[2],l[3]],[l[2],l[1]]];for(;a>180;)a-=180;for(;a<0;)a+=180;const m=Math.cos(a*c),u=Math.sin(a*c),p=-o*u,_=o*m;let y,d,x,M;n=(void 0!==t.offsetX?t.offsetX*r:0)*u-(void 0!==t.offsetY?t.offsetY*r:0)*m,y=x=Number.MAX_VALUE,d=M=-Number.MAX_VALUE;for(const s of f){const t=s[0],e=s[1],r=m*t+u*e,i=-u*t+m*e;y=Math.min(y,r),x=Math.min(x,i),d=Math.max(d,r),M=Math.max(M,i)}x=Math.floor(x/o)*o;let b=m*y-u*x-p*n/o,w=u*y+m*x-_*n/o,P=m*d-u*x-p*n/o,S=u*d+m*x-_*n/o;const g=1+Math.round((M-x)/o),C=[];for(let s=0;s<g;s++)b+=p,w+=_,P+=p,S+=_,C.push([[b,w],[P,S]]);return{paths:C}}}class p extends u{constructor(){super(),this.reset()}reset(){this._xmin=this._ymin=1/0,this._xmax=this._ymax=-1/0,this._clipCount=0}envelope(){return new _Rect_js__WEBPACK_IMPORTED_MODULE_7__["default"](this._xmin,this._ymin,this._xmax-this._xmin,this._ymax-this._ymin)}drawSolidFill(t){!t||this._clipCount>0||(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(t)?this._processPath(t.rings,0):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(t)&&this._processPath(t.paths,0))}drawSolidStroke(t,s,i){if(!t||this._clipCount>0)return;const o=.5*this.transformSize(i);Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(t)?this._processPath(t.rings,o):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(t)&&this._processPath(t.paths,o)}pushClipPath(t){this.drawSolidFill(t),++this._clipCount}popClipPath(){--this._clipCount}drawImage(t,s,e){const r=s/2;this._merge(this.transformPt([0,0]),r)}_processPath(t,s){if(t)for(const e of t){const t=e?e.length:0;if(t>1){this._merge(this.transformPt(e[0]),s);for(let r=1;r<t;++r)this._merge(this.transformPt(e[r]),s)}}}_merge(t,s){t[0]-s<this._xmin&&(this._xmin=t[0]-s),t[0]+s>this._xmax&&(this._xmax=t[0]+s),t[1]-s<this._ymin&&(this._ymin=t[1]-s),t[1]+s>this._ymax&&(this._ymax=t[1]+s)}}class _ extends u{constructor(t,s){super(s),this._ctx=t}drawSolidFill(t,s){if(!t)return;if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(t))this._buildPath(t.rings,!0);else{if(!Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(t))return;this._buildPath(t.paths,!0)}const i=this._ctx;i.fillStyle="string"==typeof s?s:"rgba("+Math.round(s[0])+","+Math.round(s[1])+","+Math.round(s[2])+","+s[3]/255+")",i.fill("evenodd")}drawSolidStroke(t,s,i,o,a,n){if(!t||!s||0===i)return;if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(t))this._buildPath(t.rings,!0);else{if(!Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(t))return;this._buildPath(t.paths,!1)}const h=this._ctx;h.strokeStyle="string"==typeof s?s:"rgba("+Math.round(s[0])+","+Math.round(s[1])+","+Math.round(s[2])+","+s[3]/255+")",h.lineWidth=this.transformSize(i)+.5,this._setCapStyle(o),this._setJoinStyle(a),h.miterLimit=n,h.stroke()}pushClipPath(t){this._ctx.save(),Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolygon"])(t)?this._buildPath(t.rings,!0):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPolyline"])(t)&&this._buildPath(t.paths,!0),this._ctx.clip("evenodd")}popClipPath(){this._ctx.restore()}drawImage(t,s,e){}_buildPath(t,s){const e=this._ctx;if(e.beginPath(),t)for(const r of t){const t=r?r.length:0;if(t>1){let i=this.transformPt(r[0]);e.moveTo(i[0],i[1]);for(let s=1;s<t;++s)i=this.transformPt(r[s]),e.lineTo(i[0],i[1]);s&&e.closePath()}}}_setCapStyle(t){switch(t){case"Butt":this._ctx.lineCap="butt";break;case"Round":this._ctx.lineCap="round";break;case"Square":this._ctx.lineCap="square"}}_setJoinStyle(t){switch(t){case"Bevel":this._ctx.lineJoin="bevel";break;case"Round":this._ctx.lineJoin="round";break;case"Miter":this._ctx.lineJoin="miter"}}}


/***/ }),

/***/ "agE9":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectOffset.js ***!
  \***********************************************************************/
/*! exports provided: EffectOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectOffset", function() { return o; });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class o{static local(){return null===o.instance&&(o.instance=new o),o.instance}execute(t,e,s){return new r(t,e,s)}}o.instance=null;class r{constructor(t,e,s){this._inputGeometries=t,this._curveHelper=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"],this._offset=(void 0!==e.offset?e.offset:1)*s,this._method=e.method,this._option=e.option,this._offsetFlattenError=_CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["PIXEL_TOLERANCE"]*s}next(){let i=this._inputGeometries.next();for(;i;){if(0===this._offset)return i;if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isExtent"])(i)){if("Rounded"===this._method&&this._offset>0){const t=[[i.xmin,i.ymin],[i.xmin,i.ymax],[i.xmax,i.ymax],[i.xmax,i.ymin],[i.xmin,i.ymin]],e=this._curveHelper.offset(t,this._offset,this._method,4,this._offsetFlattenError);return e?{rings:[e]}:null}if(Math.min(i.xmax-i.xmin,i.ymax-i.ymin)+2*this._offset>0)return{xmin:i.xmin-this._offset,xmax:i.xmax+this._offset,ymin:i.ymin-this._offset,ymax:i.ymax+this._offset}}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolygon"])(i)){const t=[];for(const e of i.rings){const s=this._curveHelper.offset(e,this._offset,this._method,4,this._offsetFlattenError);s&&t.push(s)}if(t.length)return{rings:t}}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolyline"])(i)){const t=[];for(const e of i.paths){const s=this._curveHelper.offset(e,this._offset,this._method,4,this._offsetFlattenError);s&&t.push(s)}if(t.length)return{paths:t}}i=this._inputGeometries.next()}return null}}


/***/ }),

/***/ "cG1k":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/placements/PlacementPolygonCenter.js ***!
  \************************************************************************************/
/*! exports provided: PlacementPolygonCenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementPolygonCenter", function() { return o; });
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/boundsUtils.js */ "KLE9");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CIMPlacements.js */ "WPSO");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function s(t){return void 0!==t.rings}class o{static local(){return null===o.instance&&(o.instance=new o),o.instance}execute(t,e,n){return new r(t,e,n)}}o.instance=null;class r{constructor(t,e,s){this._geometry=t,this._offsetX=void 0!==e.offsetX?e.offsetX*s:0,this._offsetY=void 0!==e.offsetY?e.offsetY*s:0,this._method=void 0!==e.method?e.method:"OnPolygon",this._internalPlacement=new _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_2__["Placement"]}next(){const t=this._geometry;return this._geometry=null,t&&s(t)?this._polygonCenter(t):null}_polygonCenter(n){let s=!1;switch(this._method){case"OnPolygon":default:case"CenterOfMass":case"BoundingBoxCenter":{const o=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__["create"])();Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_0__["getBoundsXY"])(o,n),this._internalPlacement.setTranslate((o[2]+o[0])/2+this._offsetX,(o[3]+o[1])/2-this._offsetY),s=!0;break}}return s?this._internalPlacement:null}}


/***/ }),

/***/ "eT81":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/CIMSymbolHelper.js ***!
  \******************************************************************/
/*! exports provided: CIMSymbolHelper, OverrideHelper, SymbolHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CIMSymbolHelper", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverrideHelper", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolHelper", function() { return p; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Color.js */ "nvBr");
/* harmony import */ var _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CIMPlacements.js */ "WPSO");
/* harmony import */ var _CIMSymbolDrawHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CIMSymbolDrawHelper.js */ "XunE");
/* harmony import */ var _packingUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./packingUtils.js */ "X4zr");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const n=Math.PI,l=n/2,m=4,y=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.symbols.cim.CIMSymbolHelper");function f(e,t){switch(t.type){case"CIMSymbolReference":{const r={type:"point",x:0,y:0};e.drawSymbol(t.symbol,r);break}case"CIMPointSymbol":{const r={type:"point",x:0,y:0};e.drawSymbol(t,r);break}case"CIMTextSymbol":break;case"CIMVectorMarker":{const r=new _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_3__["Placement"];e.drawMarker(t,r);break}}return e.envelope()}class h{static getEnvelope(e){const t=new _CIMSymbolDrawHelper_js__WEBPACK_IMPORTED_MODULE_4__["EnvDrawHelper"];if(Array.isArray(e)){let r;for(const o of e)r?r.union(f(t,o)):r=f(t,o);return r}return f(t,e)}static getTextureAnchor(e){const t=this.getEnvelope(e);if(!t||t.width<=0||t.height<=0)return[0,0,0];const r=96/72,o=(t.x+.5*t.width)*r,s=-(t.y+.5*t.height)*r,a=t.width*r+2,i=t.height*r+2;return[o/a,s/i,i]}static rasterize(e,t,r,s=!0){const c=r||this.getEnvelope(t);if(!c||c.width<=0||c.height<=0)return[null,0,0,0,0];const n=96/72,l=(c.x+.5*c.width)*n,m=(c.y+.5*c.height)*n;e.width=c.width*n,e.height=c.height*n,r||(e.width+=2,e.height+=2);const y=e.getContext("2d"),f=_CIMSymbolDrawHelper_js__WEBPACK_IMPORTED_MODULE_4__["Transformation"].createScale(n,-n);f.translate(.5*e.width-l,.5*e.height+m);const h=new _CIMSymbolDrawHelper_js__WEBPACK_IMPORTED_MODULE_4__["CanvasDrawHelper"](y,f);switch(t.type){case"CIMPointSymbol":{const e={type:"point",x:0,y:0};h.drawSymbol(t,e);break}case"CIMVectorMarker":{const e=new _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_3__["Placement"];h.drawMarker(t,e);break}}const p=y.getImageData(0,0,e.width,e.height),S=new Uint8Array(p.data);if(s){let e;for(let t=0;t<S.length;t+=4)e=S[t+3]/255,S[t]=S[t]*e,S[t+1]=S[t+1]*e,S[t+2]=S[t+2]*e}return[S,e.width,e.height,-l/e.width,-m/e.height]}static fromSimpleMarker(e){const t=100,r=50;let o,s;const a=e.style;if("circle"===a||"esriSMSCircle"===a){const e=.25;let t=Math.acos(1-e/r),a=Math.ceil(n/t/4);0===a&&(a=1),t=l/a,a*=4;const i=[];i.push([r,0]);for(let o=1;o<a;o++)i.push([r*Math.cos(o*t),-r*Math.sin(o*t)]);i.push([r,0]),o={rings:[i]},s={xmin:-r,ymin:-r,xmax:r,ymax:r}}else if("cross"===a||"esriSMSCross"===a){const e=0;o={rings:[[[e,r],[e,e],[r,e],[r,-e],[e,-e],[e,-r],[-e,-r],[-e,-e],[-r,-e],[-r,e],[-e,e],[-e,r],[e,r]]]},s={xmin:-r,ymin:-r,xmax:r,ymax:r}}else if("diamond"===a||"esriSMSDiamond"===a)o={rings:[[[-r,0],[0,r],[r,0],[0,-r],[-r,0]]]},s={xmin:-r,ymin:-r,xmax:r,ymax:r};else if("square"===a||"esriSMSSquare"===a)o={rings:[[[-r,-r],[-r,r],[r,r],[r,-r],[-r,-r]]]},s={xmin:-r,ymin:-r,xmax:r,ymax:r};else if("x"===a||"esriSMSX"===a){const e=0;o={rings:[[[0,e],[r-e,r],[r,r-e],[e,0],[r,e-r],[r-e,-r],[0,-e],[e-r,-r],[-r,e-r],[-e,0],[-r,r-e],[e-r,r],[0,e]]]},s={xmin:-r,ymin:-r,xmax:r,ymax:r}}else if("triangle"===a||"esriSMSTriangle"===a){const e=t*.5773502691896257,r=-e,a=2/3*t,i=a-t;o={rings:[[[r,i],[0,a],[e,i],[r,i]]]},s={xmin:r,ymin:i,xmax:e,ymax:a}}else"arrow"!==a&&"esriSMSArrow"!==a||(o={rings:[[[-50,50],[50,0],[-50,-50],[-33,-20],[-33,20],[-50,50]]]},s={xmin:-r,ymin:-r,xmax:r,ymax:r});let i;if(o&&s){const t=[{type:"CIMSolidFill",enable:!0,color:e.color}];e.outline&&t.push({type:"CIMSolidStroke",enable:!0,width:e.outline.width,color:e.outline.color});const r={type:"CIMPolygonSymbol",symbolLayers:t};i={type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,rotation:e.angle,size:e.size,offsetX:e.xoffset,offsetY:e.yoffset,frame:s,markerGraphics:[{type:"CIMMarkerGraphic",geometry:o,symbol:r}]}]}}return i}static fromCIMHatchFill(e){const t=void 0!==e.separation?e.separation:m,r=t/2;let o=this._getLineSymbolPeriod(e.lineSymbol)||m;for(;o<4;)o*=2;const s=o/2;return{type:"CIMVectorMarker",frame:{xmin:-s,xmax:s,ymin:-r,ymax:r},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[-s,0],[s,0]]]},symbol:e.lineSymbol}],size:t}}static _getLineSymbolPeriod(e){if(e){const t=this._getEffectsRepeat(e.effects);if(t)return t;if(e.symbolLayers)for(const r of e.symbolLayers){const e=this._getEffectsRepeat(r.effects);if(e)return e;if(r){const e=this._getPlacementRepeat(r.markerPlacement);if(e)return e}}}return 0}static _getEffectsRepeat(e){if(e)for(const t of e)if(t)switch(t.type){case"CIMGeometricEffectDashes":{const e=t.dashTemplate;if(e&&e.length){let t=0;for(const r of e)t+=r;return 1&e.length&&(t*=2),t}break}case"CIMGeometricEffectWave":return t.period;default:y.error(`unsupported geometric effect type ${t.type}`)}return 0}static _getPlacementRepeat(e){if(e)switch(e.type){case"CIMMarkerPlacementAlongLineSameSize":case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineVariableSize":{const t=e.placementTemplate;if(t&&t.length){let e=0;for(const r of t)e+=r;return 1&t.length&&(e*=2),e}break}}return 0}static fromCIMInsidePolygon(e){const t=e.markerPlacement,r={type:e.type,...e};let o,s,a,i;if(r.markerPlacement=null,r.anchorPoint=null,!0===t.shiftOddRows){s=t.stepX/2,a=t.stepY,i=2*t.stepY;o=[{x:-s,y:0},{x:s,y:0},{x:0,y:a},{x:0,y:-a}].map((e=>({type:"CIMMarkerGraphic",geometry:e,symbol:{type:"CIMPointSymbol",symbolLayers:[r]}})))}else s=t.stepX/2,a=t.stepY/2,i=t.stepY,o=[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:{type:"CIMPointSymbol",symbolLayers:[r]}}];return{type:"CIMVectorMarker",frame:{xmin:-s,xmax:s,ymin:-a,ymax:a},markerGraphics:o,size:i}}static getFillColor(e){if(!e)return null;switch(e.type){case"CIMPolygonSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const e=h.getFillColor(t);if(null!=e)return e}break;case"CIMTextSymbol":return h.getFillColor(e.symbol);case"CIMSolidFill":return e.color}}static getStrokeColor(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const e=h.getStrokeColor(t);if(void 0!==e)return e}break;case"CIMTextSymbol":return h.getStrokeColor(e.symbol);case"CIMSolidStroke":return e.color}}static getStrokeWidth(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const e=h.getStrokeWidth(t);if(void 0!==e)return e}break;case"CIMTextSymbol":return h.getStrokeWidth(e.symbol);case"CIMSolidStroke":case"CIMGradientStroke":case"CIMPictureStroke":return e.width}}static getSize(e){if(e)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{let t=0;if(e.symbolLayers)for(const r of e.symbolLayers){const e=h.getSize(r);e>t&&(t=e)}return t}case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":return e.width;case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":return e.size}}static getMarkerScaleRatio(e){if(e)switch(e.type){case"CIMVectorMarker":if(!1!==e.scaleSymbolsProportionally&&e.frame){const t=e.frame.ymax-e.frame.ymin;return e.size/t}}return 1}}class p{static rasterizeSimpleFill(e,r,o){"solid"!==r&&"none"!==r&&"esriSFSSolid"!==r&&"esriSFSNull"!==r||console.error("Unexpected: style does not require rasterization");const s=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["nextPowerOfTwo"])(Math.ceil(o)),a=this._isHorizontalOrVertical(r)?8*s:16*s,i=2*s;e.width=a,e.height=a;const c=e.getContext("2d");c.strokeStyle="#FFFFFF",c.lineWidth=s,c.beginPath(),"vertical"!==r&&"cross"!==r&&"esriSFSCross"!==r&&"esriSFSVertical"!==r||(c.moveTo(a/2,-i),c.lineTo(a/2,a+i)),"horizontal"!==r&&"cross"!==r&&"esriSFSCross"!==r&&"esriSFSHorizontal"!==r||(c.moveTo(-i,a/2),c.lineTo(a+i,a/2)),"forward-diagonal"!==r&&"diagonal-cross"!==r&&"esriSFSDiagonalCross"!==r&&"esriSFSForwardDiagonal"!==r||(c.moveTo(-i,-i),c.lineTo(a+i,a+i),c.moveTo(a-i,-i),c.lineTo(a+i,i),c.moveTo(-i,a-i),c.lineTo(i,a+i)),"backward-diagonal"!==r&&"diagonal-cross"!==r&&"esriSFSBackwardDiagonal"!==r&&"esriSFSDiagonalCross"!==r||(c.moveTo(a+i,-i),c.lineTo(-i,a+i),c.moveTo(i,-i),c.lineTo(-i,i),c.moveTo(a+i,a-i),c.lineTo(a-i,a+i)),c.stroke();const n=c.getImageData(0,0,e.width,e.height),l=new Uint8Array(n.data);let m;for(let t=0;t<l.length;t+=4)m=l[t+3]/255,l[t]=l[t]*m,l[t+1]=l[t+1]*m,l[t+2]=l[t+2]*m;return[l,e.width,e.height]}static rasterizeSimpleLine(e,t){let r;switch(t){case"butt":r="Butt";break;case"square":r="Square";break;default:r="Round"}const o="Butt"===r;let s;switch(e){case"dash":case"esriSLSDash":s=o?[4,3]:[3,4];break;case"dash-dot":case"esriSLSDashDot":s=o?[4,3,1,3]:[3,4,0,4];break;case"dot":case"esriSLSDot":s=o?[1,3]:[0,4];break;case"long-dash":case"esriSLSLongDash":s=o?[8,3]:[7,4];break;case"long-dash-dot":case"esriSLSLongDashDot":s=o?[8,3,1,3]:[7,4,0,4];break;case"long-dash-dot-dot":case"esriSLSDashDotDot":s=o?[8,3,1,3,1,3]:[7,4,0,4,0,4];break;case"short-dash":case"esriSLSShortDash":s=o?[4,1]:[3,2];break;case"short-dash-dot":case"esriSLSShortDashDot":s=o?[4,1,1,1]:[3,2,0,2];break;case"short-dash-dot-dot":case"esriSLSShortDashDotDot":s=o?[4,1,1,1,1,1]:[3,2,0,2,0,2];break;case"short-dot":case"esriSLSShortDot":s=o?[1,1]:[0,2];break;case"solid":case"esriSLSSolid":case"none":y.error("Unexpected: style does not require rasterization"),s=[0,0];break;default:y.error(`Tried to rasterize SLS, but found an unexpected style: ${e}!`),s=[0,0]}return this.rasterizeDash(s,r)}static rasterizeDash(e,t){const r="Butt"===t,o="Square"===t,s=!r&&!o,a=15,i=2*a+1;let n=0;for(const c of e)n+=c;const l=n*a,m=l*i,y=new Float32Array(m),f=s?a*a:a;for(let c=0;c<m;++c)y[c]=f;const h=a,p=.5*a;let S=0,d=0,M=!0;for(const c of e){S=d,d+=c*a;let e=S;for(;e<d;){let t=0;for(;t<i;){const a=t*l+e,i=s?(t-h)*(t-h):Math.abs(t-h);y[a]=M?r?Math.max(Math.max(S+p-e,i),Math.max(e-d+p,i)):i:s?Math.min((e-S)*(e-S)+i,(e-d)*(e-d)+i):o?Math.min(Math.max(e-S,i),Math.max(d-e,i)):Math.min(Math.max(e-S+p,i),Math.max(d+p-e,i)),t++}e++}M=!M}const b=y.length,g=new Uint8Array(4*b);for(let u=0;u<b;++u){const e=(s?Math.sqrt(y[u]):y[u])/a;Object(_packingUtils_js__WEBPACK_IMPORTED_MODULE_5__["packFloatRGBA"])(e,g,4*u)}return[g,l,i]}static _isHorizontalOrVertical(e){return"vertical"===e||"horizontal"===e||"cross"===e||"esriSFSCross"===e||"esriSFSVertical"===e||"esriSFSHorizontal"===e}}class S{static findApplicableOverrides(e,t,r){if(t){if(e.primitiveName){let o=!1;for(const t of r)if(t.primitiveName===e.primitiveName){o=!0;break}if(!o)for(const s of t)s.primitiveName===e.primitiveName&&r.push(s)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const o of e.effects)S.findApplicableOverrides(o,t,r);if(e.symbolLayers)for(const o of e.symbolLayers)S.findApplicableOverrides(o,t,r);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const o of e.effects)S.findApplicableOverrides(o,t,r);if(e.markerPlacement&&S.findApplicableOverrides(e.markerPlacement,t,r),"CIMVectorMarker"===e.type){if(e.markerGraphics)for(const o of e.markerGraphics)S.findApplicableOverrides(o,t,r),S.findApplicableOverrides(o.symbol,t,r)}else"CIMCharacterMarker"===e.type?S.findApplicableOverrides(e.symbol,t,r):"CIMHatchFill"===e.type&&S.findApplicableOverrides(e.lineSymbol,t,r)}}}static applyOverrides(e,t,r,o){if(!t)return;const s=e=>e?e.charAt(0).toLowerCase()+e.substr(1):e;if(e.primitiveName)for(const a of t)if(a.primitiveName===e.primitiveName){const t=s(a.propertyName);if(o&&o.push({cim:e,nocapPropertyName:t,value:e[t]}),a.expression&&(a.value=S.toValue(a.propertyName,a.expression)),r){let t=!1;for(const o of r)o.primitiveName===e.primitiveName&&(t=!0);t||r.push(a)}e[t]=a.value}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const s of e.effects)S.applyOverrides(s,t,r,o);if(e.symbolLayers)for(const s of e.symbolLayers)S.applyOverrides(s,t,r,o);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const s of e.effects)S.applyOverrides(s,t,r,o);if("CIMVectorMarker"===e.type&&e.markerGraphics)for(const s of e.markerGraphics)S.applyOverrides(s,t,r,o),S.applyOverrides(s.symbol,t,r,o)}}static restoreOverrides(e){for(const t of e)t.cim[t.nocapPropertyName]=t.value}static buildOverrideKey(e){let t="";for(const r of e)void 0!==r.value&&(t+=`${r.primitiveName}${r.propertyName}${JSON.stringify(r.value)}`);return t}static toValue(e,t){if("DashTemplate"===e)return t.split(" ").map((e=>Number(e)));if("Color"===e){const e=new _Color_js__WEBPACK_IMPORTED_MODULE_2__["default"](t).toRgba();return e[3]*=255,e}return t}}


/***/ }),

/***/ "k0QX":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/CIMOperators.js ***!
  \***************************************************************/
/*! exports provided: getEffectOperator, getPlacementOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEffectOperator", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlacementOperator", function() { return A; });
/* harmony import */ var _effects_EffectAddControlPoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./effects/EffectAddControlPoints.js */ "tdjz");
/* harmony import */ var _effects_EffectArrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects/EffectArrow.js */ "E/5U");
/* harmony import */ var _effects_EffectBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effects/EffectBuffer.js */ "PiQZ");
/* harmony import */ var _effects_EffectCut_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./effects/EffectCut.js */ "vxUa");
/* harmony import */ var _effects_EffectDashes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./effects/EffectDashes.js */ "GQfk");
/* harmony import */ var _effects_EffectDonut_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./effects/EffectDonut.js */ "8YkW");
/* harmony import */ var _effects_EffectJog_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./effects/EffectJog.js */ "l263");
/* harmony import */ var _effects_EffectMove_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./effects/EffectMove.js */ "QPyG");
/* harmony import */ var _effects_EffectOffset_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./effects/EffectOffset.js */ "agE9");
/* harmony import */ var _effects_EffectReverse_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./effects/EffectReverse.js */ "Q/g2");
/* harmony import */ var _effects_EffectRotate_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./effects/EffectRotate.js */ "J8sa");
/* harmony import */ var _effects_EffectScale_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./effects/EffectScale.js */ "Sld3");
/* harmony import */ var _effects_EffectWave_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./effects/EffectWave.js */ "8Fik");
/* harmony import */ var _placements_PlacementAlongLineSameSize_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./placements/PlacementAlongLineSameSize.js */ "6BGx");
/* harmony import */ var _placements_PlacementAtExtremities_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./placements/PlacementAtExtremities.js */ "01wM");
/* harmony import */ var _placements_PlacementAtRatioPositions_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./placements/PlacementAtRatioPositions.js */ "Nl1v");
/* harmony import */ var _placements_PlacementInsidePolygon_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./placements/PlacementInsidePolygon.js */ "pckB");
/* harmony import */ var _placements_PlacementOnLine_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./placements/PlacementOnLine.js */ "CUuX");
/* harmony import */ var _placements_PlacementOnVertices_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./placements/PlacementOnVertices.js */ "MbPc");
/* harmony import */ var _placements_PlacementPolygonCenter_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./placements/PlacementPolygonCenter.js */ "cG1k");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function G(p){if(!p)return null;switch(p.type){case"CIMGeometricEffectAddControlPoints":return _effects_EffectAddControlPoints_js__WEBPACK_IMPORTED_MODULE_0__["EffectAddControlPoints"].local();case"CIMGeometricEffectArrow":return _effects_EffectArrow_js__WEBPACK_IMPORTED_MODULE_1__["EffectArrow"].local();case"CIMGeometricEffectBuffer":return _effects_EffectBuffer_js__WEBPACK_IMPORTED_MODULE_2__["EffectBuffer"].local();case"CIMGeometricEffectCut":return _effects_EffectCut_js__WEBPACK_IMPORTED_MODULE_3__["EffectCut"].local();case"CIMGeometricEffectDashes":return _effects_EffectDashes_js__WEBPACK_IMPORTED_MODULE_4__["EffectDashes"].local();case"CIMGeometricEffectDonut":return _effects_EffectDonut_js__WEBPACK_IMPORTED_MODULE_5__["EffectDonut"].local();case"CIMGeometricEffectJog":return _effects_EffectJog_js__WEBPACK_IMPORTED_MODULE_6__["EffectJog"].local();case"CIMGeometricEffectMove":return _effects_EffectMove_js__WEBPACK_IMPORTED_MODULE_7__["EffectMove"].local();case"CIMGeometricEffectOffset":return _effects_EffectOffset_js__WEBPACK_IMPORTED_MODULE_8__["EffectOffset"].local();case"CIMGeometricEffectReverse":return _effects_EffectReverse_js__WEBPACK_IMPORTED_MODULE_9__["EffectReverse"].local();case"CIMGeometricEffectRotate":return _effects_EffectRotate_js__WEBPACK_IMPORTED_MODULE_10__["EffectRotate"].local();case"CIMGeometricEffectScale":return _effects_EffectScale_js__WEBPACK_IMPORTED_MODULE_11__["EffectScale"].local();case"CIMGeometricEffectWave":return _effects_EffectWave_js__WEBPACK_IMPORTED_MODULE_12__["EffectWave"].local()}return null}function A(e){if(!e)return null;switch(e.type){case"CIMMarkerPlacementAlongLineSameSize":return _placements_PlacementAlongLineSameSize_js__WEBPACK_IMPORTED_MODULE_13__["PlacementAlongLineSameSize"].local();case"CIMMarkerPlacementAtExtremities":return _placements_PlacementAtExtremities_js__WEBPACK_IMPORTED_MODULE_14__["PlacementAtExtremities"].local();case"CIMMarkerPlacementAtRatioPositions":return _placements_PlacementAtRatioPositions_js__WEBPACK_IMPORTED_MODULE_15__["PlacementAtRatioPositions"].local();case"CIMMarkerPlacementInsidePolygon":return _placements_PlacementInsidePolygon_js__WEBPACK_IMPORTED_MODULE_16__["PlacementInsidePolygon"].local();case"CIMMarkerPlacementOnLine":return _placements_PlacementOnLine_js__WEBPACK_IMPORTED_MODULE_17__["PlacementOnLine"].local();case"CIMMarkerPlacementOnVertices":return _placements_PlacementOnVertices_js__WEBPACK_IMPORTED_MODULE_18__["PlacementOnVertices"].local();case"CIMMarkerPlacementPolygonCenter":return _placements_PlacementPolygonCenter_js__WEBPACK_IMPORTED_MODULE_19__["PlacementPolygonCenter"].local()}return null}


/***/ }),

/***/ "l263":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectJog.js ***!
  \********************************************************************/
/*! exports provided: EffectJog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectJog", function() { return s; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class s{static local(){return null===s.instance&&(s.instance=new s),s.instance}execute(t,i,s){return new e(t,i,s)}}s.instance=null;class e extends _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathGeometryCursor"]{constructor(t,s,e){super(t,!1,!0),this._curveHelper=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"],this._length=(void 0!==s.length?s.length:20)*e,this._angle=void 0!==s.angle?s.angle:225,this._position=void 0!==s.position?s.position:50,this._length<0&&(this._length=-this._length),this._position<20&&(this._position=20),this._position>80&&(this._position=80),this._mirror=!1}processPath(t){if(this._curveHelper.isEmpty(t,!1))return null;const i=t[0],s=t[t.length-1],e=[s[0]-i[0],s[1]-i[1]];this._curveHelper.normalize(e);const n=[i[0]+(s[0]-i[0])*this._position/100,i[1]+(s[1]-i[1])*this._position/100],h=Math.cos((90-this._angle)/180*Math.PI);let r=Math.sin((90-this._angle)/180*Math.PI);this._mirror&&(r=-r),this._mirror=!this._mirror;return{paths:[[i,[n[0]-this._length/2*h,n[1]-this._length/2*r],[n[0]+this._length/2*h,n[1]+this._length/2*r],s]]}}}


/***/ }),

/***/ "pckB":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/placements/PlacementInsidePolygon.js ***!
  \************************************************************************************/
/*! exports provided: PlacementInsidePolygon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementInsidePolygon", function() { return i; });
/* harmony import */ var _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMPlacements.js */ "WPSO");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function s(t){return void 0!==t.rings}class i{static local(){return null===i.instance&&(i.instance=new i),i.instance}execute(t,s,i){return new h(t,s,i)}}i.instance=null;class h{constructor(i,h,e){if(this._xMin=0,this._xMax=0,this._yMin=0,this._yMax=0,this._currentX=0,this._currentY=0,this._stepX=(void 0!==h.stepX?Math.abs(h.stepX):16)*e,this._stepY=(void 0!==h.stepY?Math.abs(h.stepY):16)*e,0!==this._stepX&&0!==this._stepY&&i&&s(i)&&i.rings){if(this._gridType=void 0!==h.gridType?h.gridType:"Fixed","Random"===this._gridType)this._randomness=void 0!==h.randomness?h.randomness/100:1,this._gridAngle=0,this._shiftOddRows=!1,this._cosAngle=1,this._sinAngle=0,this._offsetX=0,this._offsetY=0;else{if(this._randomness=0,this._gridAngle=void 0!==h.gridAngle?h.gridAngle:0,this._shiftOddRows=void 0!==h.shiftOddRows&&h.shiftOddRows,this._offsetX=void 0!==h.offsetX?h.offsetX*e:0,this._offsetY=void 0!==h.offsetY?h.offsetY*e:0,this._cosAngle=Math.cos(this._gridAngle/180*Math.PI),this._sinAngle=-Math.sin(this._gridAngle/180*Math.PI),this._stepX)if(this._offsetX<0)for(;this._offsetX<-.5*this._stepX;)this._offsetX+=this._stepX;else for(;this._offsetX>=.5*this._stepX;)this._offsetX-=this._stepX;if(this._stepY)if(this._offsetY<0)for(;this._offsetY<-.5*this._stepY;)this._offsetY+=this._stepY;else for(;this._offsetY>=.5*this._stepY;)this._offsetY-=this._stepY}this._graphicOriginX=0,this._graphicOriginY=0,this._internalPlacement=new _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_0__["Placement"],this._calculateMinMax(i),this._geometry=i}}next(){return this._geometry?this._nextInside():null}_calculateMinMax(t){let s,i,h,e,n,_,r,o;this._xMin=0,this._xMax=0,this._yMin=0,this._yMax=0,n=_=Number.MAX_VALUE,r=o=-Number.MAX_VALUE;for(const a of t.rings){const t=a?a.length:0;for(let f=0;f<t;++f)s=a[f][0]-this._graphicOriginX-this._offsetX,i=a[f][1]-this._graphicOriginY-this._offsetY,h=this._cosAngle*s-this._sinAngle*i,e=this._sinAngle*s+this._cosAngle*i,n=Math.min(n,h),r=Math.max(r,h),_=Math.min(_,e),o=Math.max(o,e)}n+=this._graphicOriginX,r+=this._graphicOriginX,_+=this._graphicOriginY,o+=this._graphicOriginY,this._xMin=Math.round(n/this._stepX),this._xMax=Math.round(r/this._stepX),this._yMin=Math.round(_/this._stepY),this._yMax=Math.round(o/this._stepY),this._currentX=this._xMax+1,this._currentY=this._yMin-1}_nextInside(){for(;;){if(this._currentX>this._xMax){if(this._currentY++,this._currentY>this._yMax)return null;this._currentX=this._xMin,this._shiftOddRows&&this._currentY%2&&this._currentX--}let t=this._currentX*this._stepX+this._offsetX;this._shiftOddRows&&this._currentY%2&&(t+=.5*this._stepX);const s=this._currentY*this._stepY+this._offsetY;let i,h;return this._currentX++,"Random"===this._gridType?(i=this._graphicOriginX+t+this._stepX*this._randomness*(.5-Math.random())*2/3,h=this._graphicOriginY+s+this._stepY*this._randomness*(.5-Math.random())*2/3):(i=this._graphicOriginX+this._cosAngle*t+this._sinAngle*s,h=this._graphicOriginY-this._sinAngle*t+this._cosAngle*s),this._internalPlacement.setTranslate(i,h),this._internalPlacement}}}


/***/ }),

/***/ "qzns":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/enums.js ***!
  \********************************************************/
/*! exports provided: PlacementEndings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementEndings", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var t;!function(t){t.NoConstraint="NoConstraint",t.WithMarkers="WithMarkers",t.WithFullGap="WithFullGap",t.WithHalfGap="WithHalfGap",t.Custom="Custom"}(t||(t={}));


/***/ }),

/***/ "tdjz":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectAddControlPoints.js ***!
  \*********************************************************************************/
/*! exports provided: EffectAddControlPoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectAddControlPoints", function() { return o; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/lang.js */ "f/qv");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class o{static local(){return null===o.instance&&(o.instance=new o),o.instance}execute(s,t,e){return new r(s,t,e)}}o.instance=null;class r{constructor(s,t,e){this._inputGeometries=s,this._angleTolerance=void 0!==t.angleTolerance?t.angleTolerance:120,this._maxCosAngle=Math.cos((1-Math.abs(this._angleTolerance)/180)*Math.PI)}next(){let n=this._inputGeometries.next();for(;n;){if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolygon"])(n)){this._isClosed=!0;const t=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(n);return this._processMultipath(t.rings),t}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(n)){this._isClosed=!1;const t=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(n);return this._processMultipath(t.paths),t}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isExtent"])(n)){if(this._maxCosAngle)return n;this._isClosed=!0;const s=[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]];return this._processPath(s),{rings:[s]}}n=this._inputGeometries.next()}return null}_processMultipath(s){if(s)for(const t of s)this._processPath(t)}_processPath(s){if(s){let t,e,i,o,r,l,a=s.length,h=s[0];this._isClosed&&++a;for(let c=1;c<a;++c){let m;m=this._isClosed&&c===a-1?s[0]:s[c];const _=m[0]-h[0],u=m[1]-h[1],p=Math.sqrt(_*_+u*u);if(c>1&&p>0&&i>0){(t*_+e*u)/p/i<=this._maxCosAngle&&Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_2__["setId"])(h,1)}1===c&&(o=_,r=u,l=p),p>0&&(h=m,t=_,e=u,i=p)}if(this._isClosed&&i>0&&l>0){(t*o+e*r)/l/i<=this._maxCosAngle&&Object(_CIMCursor_js__WEBPACK_IMPORTED_MODULE_2__["setId"])(s[0],1)}}}}


/***/ }),

/***/ "tqcG":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/CIMCursor.js ***!
  \************************************************************/
/*! exports provided: PathGeometryCursor, PathTransformationCursor, cloneAndDecodeGeometry, deltaDecodeGeometry, deltaEncodeGeometry, getCoord2D, getId, isClosedPath, reverseMultipath, reversePath, setId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathGeometryCursor", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathTransformationCursor", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneAndDecodeGeometry", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deltaDecodeGeometry", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deltaEncodeGeometry", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoord2D", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getId", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClosedPath", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseMultipath", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reversePath", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setId", function() { return d; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CIMPlacements.js */ "WPSO");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function o(i){const h=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(i);return c(h),h}function a(t){if(t){for(let i=t.length-1;i>0;--i)t[i][0]-=t[i-1][0],t[i][1]-=t[i-1][1]}}function r(t){if(t)for(const i of t)a(i)}function l(t){if(t){const i=t.length;for(let h=1;h<i;++h)t[h][0]+=t[h-1][0],t[h][1]+=t[h-1][1]}}function u(t){if(t)for(const i of t)l(i)}function c(t){t&&(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolygon"])(t)?u(t.rings):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(t)?u(t.paths):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isMultipoint"])(t)&&l(t.points))}function p(t){t&&(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolygon"])(t)?r(t.rings):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(t)?r(t.paths):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isMultipoint"])(t)&&a(t.points))}function m(t){if(t)for(const i of t)f(i)}function f(t){t&&t.reverse()}function P(t,i,h){return[t[0]+(i[0]-t[0])*h,t[1]+(i[1]-t[1])*h]}function x(t){return!(!t||0===t.length)&&(t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1])}function g(t){return t[4]}function d(t,i){t[4]=i}class C{constructor(t,n,o,a){this.acceptPolygon=n,this.acceptPolyline=o,this.geomUnitsPerPoint=a,this.pathCount=-1,this.pathIndex=-1,this.iteratePath=!1,t&&(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolygon"])(t)?n&&(this.multiPath=t.rings,this.isClosed=!0):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(t)?o&&(this.multiPath=t.paths,this.isClosed=!1):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isExtent"])(t)&&n&&(this.multiPath=I(t).rings,this.isClosed=!0),this.multiPath&&(this.pathCount=this.multiPath.length)),this.internalPlacement=new _CIMPlacements_js__WEBPACK_IMPORTED_MODULE_2__["Placement"]}next(){if(!this.multiPath)return null;for(;this.iteratePath||this.pathIndex<this.pathCount-1;){this.iteratePath||this.pathIndex++;const t=this.processPath(this.multiPath[this.pathIndex]);if(t)return t}return this.pathCount=-1,this.pathIndex=-1,this.multiPath=null,null}}class y{constructor(t,i,h,n){this.inputGeometries=t,this.acceptPolygon=i,this.acceptPolyline=h,this.geomUnitsPerPoint=n,this.pathCount=-1,this.pathIndex=-1,this.iteratePath=!1}next(){for(;;){if(!this.multiPath){let t=this.inputGeometries.next();for(;t;){if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolygon"])(t)?this.acceptPolygon&&(this.multiPath=t.rings,this.isClosed=!0):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(t)?this.acceptPolyline&&(this.multiPath=t.paths,this.isClosed=!1):Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isExtent"])(t)&&this.acceptPolygon&&(this.multiPath=I(t).rings,this.isClosed=!0),this.multiPath){this.pathCount=this.multiPath.length,this.pathIndex=-1;break}t=this.inputGeometries.next()}if(!this.multiPath)return null}for(;this.iteratePath||this.pathIndex<this.pathCount-1;){this.iteratePath||this.pathIndex++;const t=this.processPath(this.multiPath[this.pathIndex]);if(t)return t}this.pathCount=-1,this.pathIndex=-1,this.multiPath=null}}}function I(t){return{rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}}


/***/ }),

/***/ "vxUa":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/effects/EffectCut.js ***!
  \********************************************************************/
/*! exports provided: EffectCut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectCut", function() { return u; });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ "tqcG");
/* harmony import */ var _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurveHelper.js */ "/vtc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class u{static local(){return null===u.instance&&(u.instance=new u),u.instance}execute(e,t,u){return new s(e,t,u)}}u.instance=null;class s extends _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__["PathGeometryCursor"]{constructor(e,u,s){super(e,!0,!0),this._curveHelper=new _CurveHelper_js__WEBPACK_IMPORTED_MODULE_1__["CurveHelper"],this._beginCut=(void 0!==u.beginCut?u.beginCut:1)*s,this._endCut=(void 0!==u.endCut?u.endCut:1)*s,this._middleCut=(void 0!==u.middleCut?u.middleCut:0)*s,this._invert=void 0!==u.invert&&u.invert,this._beginCut<0&&(this._beginCut=0),this._endCut<0&&(this._endCut=0),this._middleCut<0&&(this._middleCut=0)}processPath(e){const t=this._beginCut,u=this._endCut,s=this._middleCut,i=this._curveHelper.calculatePathLength(e),r=[];if(this._invert)if(0===t&&0===u&&0===s);else if(t+u+s>=i)r.push(e);else{let n=this._curveHelper.getSubCurve(e,0,t);n&&r.push(n),n=this._curveHelper.getSubCurve(e,.5*(i-s),.5*(i+s)),n&&r.push(n),n=this._curveHelper.getSubCurve(e,i-u,u),n&&r.push(n)}else if(0===t&&0===u&&0===s)r.push(e);else if(t+u+s>=i);else if(0===s){const s=this._curveHelper.getSubCurve(e,t,i-u);s&&r.push(s)}else{let n=this._curveHelper.getSubCurve(e,t,.5*(i-s));n&&r.push(n),n=this._curveHelper.getSubCurve(e,.5*(i+s),i-u),n&&r.push(n)}return 0===r.length?null:{paths:r}}}


/***/ })

}]);
//# sourceMappingURL=default~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layer~ddde8d1b.js.map