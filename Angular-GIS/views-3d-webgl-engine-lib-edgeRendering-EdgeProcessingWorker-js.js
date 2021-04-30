(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-3d-webgl-engine-lib-edgeRendering-EdgeProcessingWorker-js"],{

/***/ "/OIm":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/meshProcessing.js ***!
  \**********************************************************************/
/*! exports provided: computeNeighbors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeNeighbors", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function t(t,o,n){const r=o/3,c=new Uint32Array(n+1),e=new Uint32Array(n+1),s=(t,o)=>{t<o?c[t+1]++:e[o+1]++};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];s(o,n),s(n,r),s(r,o)}let f=0,l=0;for(let x=0;x<n;x++){const t=c[x+1],o=e[x+1];c[x+1]=f,e[x+1]=l,f+=t,l+=o}const i=new Uint32Array(6*r),a=c[n],w=(t,o,n)=>{if(t<o){const r=c[t+1]++;i[2*r]=o,i[2*r+1]=n}else{const r=e[o+1]++;i[2*a+2*r]=t,i[2*a+2*r+1]=n}};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];w(o,n,x),w(n,r,x),w(r,o,x)}const y=(t,o)=>{const n=2*t,r=o-t;for(let c=1;c<r;c++){const t=i[n+2*c],o=i[n+2*c+1];let r=c-1;for(;r>=0&&i[n+2*r]>t;r--)i[n+2*r+2]=i[n+2*r],i[n+2*r+3]=i[n+2*r+1];i[n+2*r+2]=t,i[n+2*r+3]=o}};for(let x=0;x<n;x++)y(c[x],c[x+1]),y(a+e[x],a+e[x+1]);const A=new Int32Array(3*r),U=(o,n)=>o===t[3*n]?0:o===t[3*n+1]?1:o===t[3*n+2]?2:-1,u=(t,o)=>{const n=U(t,o);A[3*o+n]=-1},p=(t,o,n,r)=>{const c=U(t,o);A[3*o+c]=r;const e=U(n,r);A[3*r+e]=o};for(let x=0;x<n;x++){let t=c[x];const o=c[x+1];let n=e[x];const r=e[x+1];for(;t<o&&n<r;){const o=i[2*t],r=i[2*a+2*n];o===r?(p(x,i[2*t+1],r,i[2*a+2*n+1]),t++,n++):o<r?(u(x,i[2*t+1]),t++):(u(r,i[2*a+2*n+1]),n++)}for(;t<o;)u(x,i[2*t+1]),t++;for(;n<r;){u(i[2*a+2*n],i[2*a+2*n+1]),n++}}return A}


/***/ }),

/***/ "ABOp":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing.js ***!
  \************************************************************************************************/
/*! exports provided: extractEdges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractEdges", function() { return u; });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/typedArrayUtil.js */ "ohva");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _support_mathUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../support/mathUtils.js */ "aAs6");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const p=-1;function u(n,r,l,g=V){const f=n.vertices.position,m=n.vertices.componentIndex,u=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["deg2rad"])(g.anglePlanar),I=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["deg2rad"])(g.angleSignificantEdge),j=Math.cos(I),N=Math.cos(u),x=y.edge,F=x.position0,U=x.position1,k=x.faceNormal0,E=x.faceNormal1,D=w(n),M=v(n),P=M.length/4,S=r.allocate(P);let b=0;const L=P,q=l.allocate(L);let z=0,B=0,C=0;const G=Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__["range"])(0,P),H=new Float32Array(P);Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["forEach"])(H,((e,t,o)=>{f.getVec(M[4*t+0],F),f.getVec(M[4*t+1],U),o[t]=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["k"])(F,U)})),G.sort(((e,t)=>H[t]-H[e]));const J=new Array,K=new Array;for(let e=0;e<P;e++){const t=G[e],o=H[t],n=M[4*t+0],s=M[4*t+1],g=M[4*t+2],v=M[4*t+3],w=v===p;if(f.getVec(n,F),f.getVec(s,U),w)Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(k,D[3*g+0],D[3*g+1],D[3*g+2]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(E,k),x.componentIndex=m.get(n),x.cosAngle=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(k,E);else{if(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(k,D[3*g+0],D[3*g+1],D[3*g+2]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(E,D[3*v+0],D[3*v+1],D[3*v+2]),x.componentIndex=m.get(n),x.cosAngle=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(k,E),d(x,N))continue;x.cosAngle<-.9999&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(E,k)}B+=o,C++,w||h(x,j)?(r.write(S,b++,x),J.push(o)):A(x,u)&&(l.write(q,z++,x),K.push(o))}const O=new Float32Array(J.reverse()),Q=new Float32Array(K.reverse());return{regular:{instancesData:r.trim(S,b),lodInfo:{lengths:O}},silhouette:{instancesData:l.trim(q,z),lodInfo:{lengths:Q}},averageEdgeLength:B/C}}function h(e,t){return e.cosAngle<t}function d(e,t){return e.cosAngle>t}function A(e,t){const o=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["acosClamped"])(e.cosAngle),r=y.fwd,s=y.ortho;Object(_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_5__["directionFromTo"])(r,e.position1,e.position0);return o*(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(s,e.faceNormal0,e.faceNormal1),r)>0?-1:1)>t}function v(e){const t=e.faces.length/3,o=e.faces,n=e.neighbors;let r=0;for(let a=0;a<t;a++){const e=n[3*a+0],t=n[3*a+1],s=n[3*a+2],c=o[3*a+0],i=o[3*a+1],l=o[3*a+2];r+=e===p||c<i?1:0,r+=t===p||i<l?1:0,r+=s===p||l<c?1:0}const s=new Int32Array(4*r);let c=0;for(let a=0;a<t;a++){const e=n[3*a+0],t=n[3*a+1],r=n[3*a+2],i=o[3*a+0],l=o[3*a+1],g=o[3*a+2];(e===p||i<l)&&(s[c++]=i,s[c++]=l,s[c++]=a,s[c++]=e),(t===p||l<g)&&(s[c++]=l,s[c++]=g,s[c++]=a,s[c++]=t),(r===p||g<i)&&(s[c++]=g,s[c++]=i,s[c++]=a,s[c++]=r)}return s}function w(e){const t=e.faces.length/3,o=e.vertices.position,n=e.faces,r=I.v0,s=I.v1,c=I.v2,a=new Float32Array(3*t);for(let i=0;i<t;i++){const e=n[3*i+0],t=n[3*i+1],m=n[3*i+2];o.getVec(e,r),o.getVec(t,s),o.getVec(m,c),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["f"])(s,s,r),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["f"])(c,c,r),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(r,s,c),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["n"])(r,r),a[3*i+0]=r[0],a[3*i+1]=r[1],a[3*i+2]=r[2]}return a}const y={edge:{position0:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),position1:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),faceNormal0:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),faceNormal1:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),componentIndex:0,cosAngle:0},ortho:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),fwd:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])()},I={v0:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),v1:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),v2:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])()},V={anglePlanar:4,angleSignificantEdge:35};


/***/ }),

/***/ "BICm":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/workerHelper.js ***!
  \***************************************************************************/
/*! exports provided: packInterleavedBuffer, packLayout, unpackInterleavedBuffer, unpackLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packInterleavedBuffer", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packLayout", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpackInterleavedBuffer", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpackLayout", function() { return G; });
/* harmony import */ var _BufferView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BufferView.js */ "VeZB");
/* harmony import */ var _InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterleavedLayout.js */ "/ADo");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function z(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:F(e.layout)}}function D(e){return G(e.layout).createView(e.buffer)}function F(e){const t=new Array;return e.fields.forEach(((e,r)=>{const n={...e,constructor:J(e.constructor)};t.push([r,n])})),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}function G(e){const t=Object(_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__["newLayout"])();return t.stride=e.stride,t.fieldNames=e.fieldNames,e.fields.forEach((e=>t.fields.set(e[0],{...e[1],constructor:K(e[1].constructor)}))),t}const H=[_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewFloat"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2f"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4f"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat3f"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat4f"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewFloat64"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2f64"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f64"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4f64"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat3f64"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat4f64"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint8"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2u8"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3u8"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u8"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint16"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2u16"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3u16"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u16"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint32"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2u32"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3u32"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u32"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewInt8"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2i8"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3i8"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4i8"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewInt16"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2i16"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3i16"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4i16"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewInt32"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2i32"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3i32"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4i32"]];function J(e){return`${e.ElementType}_${e.ElementCount}`}function K(e){return O.get(e)}const O=new Map;H.forEach((e=>O.set(J(e),e)));


/***/ }),

/***/ "DJ1h":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js ***!
  \********************************************************************************************/
/*! exports provided: CommonInstancesLayout, EdgeInputBufferLayout, EdgeShaderAttributeLocations, RegularEdgeInstancesLayout, SilhouetteEdgeInstancesLayout, VertexLayout, glVertexLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonInstancesLayout", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdgeInputBufferLayout", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdgeShaderAttributeLocations", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularEdgeInstancesLayout", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SilhouetteEdgeInstancesLayout", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexLayout", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glVertexLayout", function() { return t; });
/* harmony import */ var _support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../support/buffer/glUtil.js */ "Lrt+");
/* harmony import */ var _support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../support/buffer/InterleavedLayout.js */ "/ADo");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const e=Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__["newLayout"])().vec3f("position").u16("componentIndex").u16("u16padding"),i=Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__["newLayout"])().vec2u8("sideness"),t=Object(_support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_0__["glLayout"])(i),a=Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__["newLayout"])().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("u8padding",{glPadding:!0}).u16("u16padding",{glPadding:!0}),r=a.clone().vec3f("normal"),s=a.clone().vec3f("normalA").vec3f("normalB"),d={position0:0,position1:1,componentIndex:2,variantOffset:4,variantStroke:5,variantExtension:6,normal:7,normalA:7,normalB:8,sideness:9};


/***/ }),

/***/ "InNl":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker.js ***!
  \***************************************************************************************************/
/*! exports provided: work, wrappedWork */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "work", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrappedWork", function() { return a; });
/* harmony import */ var _geometry_support_meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../geometry/support/meshUtils/deduplicate.js */ "jEtK");
/* harmony import */ var _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bufferLayouts.js */ "DJ1h");
/* harmony import */ var _edgeBufferWriters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edgeBufferWriters.js */ "fgxy");
/* harmony import */ var _support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../support/buffer/workerHelper.js */ "BICm");
/* harmony import */ var _support_meshProcessing_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../support/meshProcessing.js */ "/OIm");
/* harmony import */ var _edgePreprocessing_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edgePreprocessing.js */ "ABOp");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function a(e){const t=u(e),n=f(t),r=[t.data.buffer];return{result:c(n,r),transferList:r}}function f(e){const t=g(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return d.updateSettings(e.writerSettings),l.updateSettings(e.writerSettings),Object(_edgePreprocessing_js__WEBPACK_IMPORTED_MODULE_5__["extractEdges"])(t,d,l)}function u(e){return{data:_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__["EdgeInputBufferLayout"].createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indicesBuffer):"Uint16Array"===e.indicesType?new Uint16Array(e.indicesBuffer):void 0,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function c(e,t){t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer);return{regular:{instancesData:Object(_support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_3__["packInterleavedBuffer"])(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:Object(_support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_3__["packInterleavedBuffer"])(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}function g(n,r,i,o){if(r){return{faces:i,facesLength:o,neighbors:Object(_support_meshProcessing_js__WEBPACK_IMPORTED_MODULE_4__["computeNeighbors"])(i,o,n.count),vertices:n}}const a=Object(_geometry_support_meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_0__["deduplicate"])(n.buffer,n.stride/4,{originalIndices:i,originalIndicesLength:o}),f=Object(_support_meshProcessing_js__WEBPACK_IMPORTED_MODULE_4__["computeNeighbors"])(a.indices,o,a.uniqueCount);return{faces:a.indices,facesLength:a.indices.length,neighbors:f,vertices:_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__["EdgeInputBufferLayout"].createView(a.buffer)}}const d=new _edgeBufferWriters_js__WEBPACK_IMPORTED_MODULE_2__["RegularEdgeBufferWriter"],l=new _edgeBufferWriters_js__WEBPACK_IMPORTED_MODULE_2__["SilhouetteEdgeBufferWriter"];


/***/ }),

/***/ "Lrt+":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/glUtil.js ***!
  \*********************************************************************/
/*! exports provided: glLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glLayout", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t={divisor:0};function o(o,n={}){n={...t,...n};const r=o.stride;return o.fieldNames.filter((t=>{const e=o.fields.get(t).optional;return!(e&&e.glPadding)})).map((t=>{const i=o.fields.get(t),s=i.constructor.ElementCount,u=e(i.constructor.ElementType),f=i.offset,c=!(!i.optional||!i.optional.glNormalized);return{name:t,stride:r,count:s,type:u,offset:f,normalized:c,divisor:n.divisor}}))}function e(t){const o=n[t];if(o)return o;throw new Error("BufferType not supported in WebGL")}const n={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126};


/***/ }),

/***/ "fgxy":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters.js ***!
  \************************************************************************************************/
/*! exports provided: CommonBufferWriter, RegularEdgeBufferWriter, SilhouetteEdgeBufferWriter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonBufferWriter", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularEdgeBufferWriter", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SilhouetteEdgeBufferWriter", function() { return w; });
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/RandomLCG.js */ "iA3P");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../support/buffer/glUtil.js */ "Lrt+");
/* harmony import */ var _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bufferLayouts.js */ "DJ1h");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class a{updateSettings(t){this.settings=t,this.edgeHashFunction=t.reducedPrecision?f:p}write(t,o,e){const n=this.edgeHashFunction(e);y.seed=n;const i=y.getIntRange(0,255),r=y.getIntRange(0,this.settings.variants-1),s=.7,a=y.getFloat(),c=255*(.5*g(-(1-Math.min(a/s,1))+Math.max(0,a-s)/(1-s),1.2)+.5);t.position0.setVec(o,e.position0),t.position1.setVec(o,e.position1),t.componentIndex.set(o,e.componentIndex),t.variantOffset.set(o,i),t.variantStroke.set(o,r),t.variantExtension.set(o,c)}trim(t,o){return t.slice(0,o)}}const c=new Float32Array(6),m=new Uint32Array(c.buffer),u=new Uint32Array(1);function p(t){const o=c;o[0]=t.position0[0],o[1]=t.position0[1],o[2]=t.position0[2],o[3]=t.position1[0],o[4]=t.position1[1],o[5]=t.position1[2],u[0]=5381;for(let e=0;e<m.length;e++)u[0]=31*u[0]+m[e];return u[0]}function f(t){const o=c;o[0]=h(t.position0[0]),o[1]=h(t.position0[1]),o[2]=h(t.position0[2]),o[3]=h(t.position1[0]),o[4]=h(t.position1[1]),o[5]=h(t.position1[2]),u[0]=5381;for(let e=0;e<m.length;e++)u[0]=31*u[0]+m[e];return u[0]}const l=1e4;function h(t){return Math.round(t*l)/l}function g(t,o){const e=t<0?-1:1;return Math.abs(t)**o*e}class d{constructor(){this.commonWriter=new a}updateSettings(t){this.commonWriter.updateSettings(t)}allocate(t){return _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["RegularEdgeInstancesLayout"].createBuffer(t)}write(t,o,i){this.commonWriter.write(t,o,i),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(v,i.faceNormal0,i.faceNormal1),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(v,v),t.normal.setVec(o,v)}trim(t,o){return this.commonWriter.trim(t,o)}}d.Layout=_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["RegularEdgeInstancesLayout"],d.glLayout=Object(_support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_3__["glLayout"])(_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["RegularEdgeInstancesLayout"],{divisor:1});class w{constructor(){this.commonWriter=new a}updateSettings(t){this.commonWriter.updateSettings(t)}allocate(t){return _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["SilhouetteEdgeInstancesLayout"].createBuffer(t)}write(t,o,e){this.commonWriter.write(t,o,e),t.normalA.setVec(o,e.faceNormal0),t.normalB.setVec(o,e.faceNormal1)}trim(t,o){return this.commonWriter.trim(t,o)}}w.Layout=_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["SilhouetteEdgeInstancesLayout"],w.glLayout=Object(_support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_3__["glLayout"])(_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["SilhouetteEdgeInstancesLayout"],{divisor:1});const v=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),y=new _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),

/***/ "jEtK":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/deduplicate.js ***!
  \*****************************************************************************/
/*! exports provided: default, deduplicate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deduplicate", function() { return n; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/mathUtils.js */ "OKTS");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function n(n,f,i){var u;const c=n.byteLength/(4*f),s=new Uint32Array(n,0,c*f);let a=new Uint32Array(c);const h=null!=(u=null==i?void 0:i.minReduction)?u:0,d=(null==i?void 0:i.originalIndices)||null,g=d?d.length:0,y=(null==i?void 0:i.componentOffsets)||null;let U=0;if(y)for(let t=0;t<y.length-1;t++){const n=y[t+1]-y[t];n>U&&(U=n)}else U=c;const w=Math.floor(1.1*U)+1;(null==o||o.length<2*w)&&(o=new Uint32Array(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(2*w)));for(let t=0;t<2*w;t++)o[t]=0;let A=0;const m=!!y&&!!d,b=m?g:c,p=m?new Uint32Array(g):null,v=1.96;let M=0!==h?Math.ceil(4*v*v/(h*h)*h*(1-h)):b,q=1,x=y?y[1]:b;for(let t=0;t<b;t++){if(t===M){const n=1-A/t;if(n+v*Math.sqrt(n*(1-n)/t)<h)return null;M*=2}if(t===x){for(let t=0;t<2*w;t++)o[t]=0;if(d)for(let t=y[q-1];t<y[q];t++)p[t]=a[d[t]];x=y[++q]}const n=m?d[t]:t,l=n*f,i=r(s,l,f);let u=i%w,c=A;for(;0!==o[2*u+1];){if(o[2*u]===i){const t=o[2*u+1]-1;if(e(s,l,t*f,f)){c=a[t];break}}u++,u>=w&&(u-=w)}c===A&&(o[2*u]=i,o[2*u+1]=n+1,A++),a[n]=c}if(0!==h&&1-A/c<h)return null;if(m){for(let t=y[q-1];t<p.length;t++)p[t]=a[d[t]];a=p}const j=new Uint32Array(f*A);A=0;for(let t=0;t<b;t++)if(a[t]===A){l(s,(m?d[t]:t)*f,j,A*f,f),A++}if(d&&!m){const t=new Uint32Array(g);for(let n=0;n<t.length;n++)t[n]=a[d[n]];a=t}return{buffer:j.buffer,indices:a,uniqueCount:A}}function e(t,n,e,l){for(let r=0;r<l;r++)if(t[n+r]!==t[e+r])return!1;return!0}function l(t,n,e,l,r){for(let o=0;o<r;o++)e[l+o]=t[n+o]}function r(t,n,e){let l=0;for(let r=0;r<e;r++)l=t[n+r]+l|0,l=l+(l<<11)+(l>>>2)|0;return l>>>0}let o=null;/* harmony default export */ __webpack_exports__["default"] = (n);


/***/ })

}]);
//# sourceMappingURL=views-3d-webgl-engine-lib-edgeRendering-EdgeProcessingWorker-js.js.map