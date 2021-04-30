(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~mapViewDeps-js~webgl-js"],{

/***/ "0X3F":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/enums.js ***!
  \********************************************************/
/*! exports provided: BASE_TEXTURE_UNIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_TEXTURE_UNIT", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const o=33984;


/***/ }),

/***/ "6c4E":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities/LoseContext.js ***!
  \***************************************************************************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function e(e,t){const n=t.loseContext&&e.getExtension("WEBGL_lose_context");return n?{loseRenderingContext:()=>n.loseContext()}:null}


/***/ }),

/***/ "GJyJ":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/renderState.js ***!
  \**************************************************************/
/*! exports provided: StateTracker, backFaceCullingParams, defaultColorWriteParams, defaultDepthWriteParams, makeBlending, makeColorWrite, makeCulling, makeDepthTest, makeDepthWrite, makePipelineState, makePolygonOffset, makeStencilTest, makeStencilWrite, separateBlendingParams, simpleBlendingParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateTracker", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backFaceCullingParams", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultColorWriteParams", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDepthWriteParams", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeBlending", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeColorWrite", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCulling", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDepthTest", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDepthWrite", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePipelineState", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePolygonOffset", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStencilTest", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStencilWrite", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "separateBlendingParams", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleBlendingParams", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function t(t,e,i=32774,n=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:i,opAlpha:i,color:{r:n[0],g:n[1],b:n[2],a:n[3]}}}function e(t,e,i,n,s=32774,l=32774,r=[0,0,0,0]){return{srcRgb:t,srcAlpha:e,dstRgb:i,dstAlpha:n,opRgb:s,opAlpha:l,color:{r:r[0],g:r[1],b:r[2],a:r[3]}}}const i={face:1029,mode:2305},n={zNear:0,zFar:1},s={r:!0,g:!0,b:!0,a:!0};function l(t){return f.intern(t)}function r(t){return I.intern(t)}function h(t){return S.intern(t)}function o(t){return T.intern(t)}function a(t){return O.intern(t)}function c(t){return w.intern(t)}function d(t){return D.intern(t)}function p(t){return m.intern(t)}function u(t){return k.intern(t)}class _{constructor(t,e){this.makeKey=t,this.makeRef=e,this.interns=new Map}intern(t){if(!t)return null;const e=this.makeKey(t),i=this.interns;return i.has(e)||i.set(e,this.makeRef(t)),i.get(e)}}function g(t){return"["+t.join(",")+"]"}const f=new _(v,(t=>({__tag:"Blending",...t})));function v(t){return t?g([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const I=new _(W,(t=>({__tag:"Culling",...t})));function W(t){return t?g([t.face,t.mode]):null}const S=new _(b,(t=>({__tag:"PolygonOffset",...t})));function b(t){return t?g([t.factor,t.units]):null}const T=new _(y,(t=>({__tag:"DepthTest",...t})));function y(t){return t?g([t.func]):null}const O=new _(R,(t=>({__tag:"StencilTest",...t})));function R(t){return t?g([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const w=new _(C,(t=>({__tag:"DepthWrite",...t})));function C(t){return t?g([t.zNear,t.zFar]):null}const D=new _(A,(t=>({__tag:"ColorWrite",...t})));function A(t){return t?g([t.r,t.g,t.b,t.a]):null}const m=new _(P,(t=>({__tag:"StencilWrite",...t})));function P(t){return t?g([t.mask]):null}const k=new _(z,(t=>({blending:l(t.blending),culling:r(t.culling),polygonOffset:h(t.polygonOffset),depthTest:o(t.depthTest),stencilTest:a(t.stencilTest),depthWrite:c(t.depthWrite),colorWrite:d(t.colorWrite),stencilWrite:p(t.stencilWrite)})));function z(t){return t?g([v(t.blending),W(t.culling),b(t.polygonOffset),y(t.depthTest),R(t.stencilTest),C(t.depthWrite),A(t.colorWrite),P(t.stencilWrite)]):null}class B{constructor(t){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=t}setPipeline(t){(this._pipelineInvalid||t!==this._pipeline)&&(this.setBlending(t.blending),this.setCulling(t.culling),this.setPolygonOffset(t.polygonOffset),this.setDepthTest(t.depthTest),this.setStencilTest(t.stencilTest),this.setDepthWrite(t.depthWrite),this.setColorWrite(t.colorWrite),this.setStencilWrite(t.stencilWrite),this._pipeline=t),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}setBlending(t){this._blending=this.setSubState(t,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}setCulling(t){this._culling=this.setSubState(t,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}setPolygonOffset(t){this._polygonOffset=this.setSubState(t,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}setDepthTest(t){this._depthTest=this.setSubState(t,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}setStencilTest(t){this._stencilTest=this.setSubState(t,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}setDepthWrite(t){this._depthWrite=this.setSubState(t,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}setColorWrite(t){this._colorWrite=this.setSubState(t,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}setStencilWrite(t){this._stencilWrite=this.setSubState(t,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}setSubState(t,e,i,n){return(i||t!==e)&&(n(t),this._pipelineInvalid=!0),t}}


/***/ }),

/***/ "GprA":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities/DisjointTimerQuery.js ***!
  \**********************************************************************************/
/*! exports provided: DisjointTimerQuery, createDisjointTimerQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisjointTimerQuery", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDisjointTimerQuery", function() { return t; });
/* harmony import */ var _isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isWebGL2Context.js */ "xRQN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class E{constructor(e,E,t,T,r,_,i,u){this.createQuery=e,this.resultAvailable=E,this.getResult=t,this.disjoint=T,this.beginTimeElapsed=r,this.endTimeElapsed=_,this.createTimestamp=i,this.timestampBits=u}}function t(t,T){if(T.disjointTimerQuery)return null;let r=t.getExtension("EXT_disjoint_timer_query_webgl2");return r&&Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t)?new E((()=>t.createQuery()),(e=>t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE)),(e=>t.getQueryParameter(e,t.QUERY_RESULT)),(()=>t.getParameter(r.GPU_DISJOINT_EXT)),(e=>t.beginQuery(r.TIME_ELAPSED_EXT,e)),(()=>t.endQuery(r.TIME_ELAPSED_EXT)),(e=>r.queryCounterEXT(e,r.TIMESTAMP_EXT)),(()=>t.getQuery(r.TIMESTAMP_EXT,r.QUERY_COUNTER_BITS_EXT))):(r=t.getExtension("EXT_disjoint_timer_query"),r?new E((()=>r.createQueryEXT()),(e=>r.getQueryObjectEXT(e,r.QUERY_RESULT_AVAILABLE_EXT)),(e=>r.getQueryObjectEXT(e,r.QUERY_RESULT_EXT)),(()=>t.getParameter(r.GPU_DISJOINT_EXT)),(e=>r.beginQueryEXT(r.TIME_ELAPSED_EXT,e)),(()=>r.endQueryEXT(r.TIME_ELAPSED_EXT)),(e=>r.queryCounterEXT(e,r.TIMESTAMP_EXT)),(()=>r.getQueryEXT(r.TIMESTAMP_EXT,r.QUERY_COUNTER_BITS_EXT))):null)}


/***/ }),

/***/ "MTaK":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities/Instancing.js ***!
  \**************************************************************************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return r; });
/* harmony import */ var _isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isWebGL2Context.js */ "xRQN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function r(r){if(Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r))return{drawArraysInstanced:r.drawArraysInstanced.bind(r),drawElementsInstanced:r.drawElementsInstanced.bind(r),vertexAttribDivisor:r.vertexAttribDivisor.bind(r)};const t=r.getExtension("ANGLE_instanced_arrays");return t?{drawArraysInstanced:t.drawArraysInstancedANGLE.bind(t),drawElementsInstanced:t.drawElementsInstancedANGLE.bind(t),vertexAttribDivisor:t.vertexAttribDivisorANGLE.bind(t)}:null}


/***/ }),

/***/ "RiM0":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities/DrawBuffers.js ***!
  \***************************************************************************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return A; });
/* harmony import */ var _isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isWebGL2Context.js */ "xRQN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function A(A,_){if(_.disjointTimerQuery)return null;if(Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(A))return{drawBuffers:A.drawBuffers.bind(A),MAX_DRAW_BUFFERS:A.MAX_DRAW_BUFFERS,MAX_COLOR_ATTACHMENTS:A.MAX_COLOR_ATTACHMENTS};if(_.drawBuffers)return null;const e=A.getExtension("WEBGL_draw_buffers");return e?{drawBuffers:e.drawBuffersWEBGL.bind(e),MAX_DRAW_BUFFERS:e.MAX_DRAW_BUFFERS_WEBGL,MAX_COLOR_ATTACHMENTS:e.MAX_COLOR_ATTACHMENTS_WEBGL}:null}


/***/ }),

/***/ "bfJE":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/RenderingContext.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _renderState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderState.js */ "GJyJ");
/* harmony import */ var _capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./capabilities/isWebGL2Context.js */ "xRQN");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums.js */ "0X3F");
/* harmony import */ var _InstanceCounter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InstanceCounter.js */ "r3F2");
/* harmony import */ var _capabilities_load_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./capabilities/load.js */ "uzVh");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class l{constructor(t,s){this.gl=null,this.instanceCounter=new _InstanceCounter_js__WEBPACK_IMPORTED_MODULE_5__["InstanceCounter"],this._blendEnabled=!1,this._blendColorState={r:0,g:0,b:0,a:0},this._blendFunctionState={srcRGB:1,dstRGB:0,srcAlpha:1,dstAlpha:0},this._blendEquationState={mode:32774,modeAlpha:32774},this._colorMaskState={r:!0,g:!0,b:!0,a:!0},this._polygonCullingEnabled=!1,this._cullFace=1029,this._frontFace=2305,this._scissorTestEnabled=!1,this._scissorRect={x:0,y:0,width:0,height:0},this._depthTestEnabled=!1,this._depthFunction=513,this._clearDepth=1,this._depthWriteEnabled=!0,this._depthRange={zNear:0,zFar:1},this._viewport=null,this._stencilTestEnabled=!1,this._polygonOffsetFillEnabled=!1,this._polygonOffset=[0,0],this._stencilFunction={face:1032,func:519,ref:0,mask:1},this._clearStencil=0,this._stencilWriteMask=1,this._stencilOperation={face:1032,fail:7680,zFail:7680,zPass:7680},this._clearColor={r:0,g:0,b:0,a:0},this._activeShaderProgram=null,this._activeVertexBuffer=null,this._activeIndexBuffer=null,this._activeFramebuffer=null,this._activeRenderbuffer=null,this._activeTextureUnit=0,this._textureUnitMap=[],this._numOfDrawCalls=0,this._numOfTriangles=0,this.contextVersion=Object(_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_3__["default"])(t)?"webgl2":"webgl",this.gl=t,t instanceof WebGLRenderingContext&&this.gl.getExtension("OES_element_index_uint"),this._capabilities=Object(_capabilities_load_js__WEBPACK_IMPORTED_MODULE_6__["loadCapabilities"])(t,s);const l=this.gl.getParameter(this.gl.VIEWPORT);this._viewport={x:l[0],y:l[1],width:l[2],height:l[3]},this._stateTracker=new _renderState_js__WEBPACK_IMPORTED_MODULE_2__["StateTracker"]({setBlending:t=>{if(t){this.setBlendingEnabled(!0),this.setBlendEquationSeparate(t.opRgb,t.opAlpha),this.setBlendFunctionSeparate(t.srcRgb,t.dstRgb,t.srcAlpha,t.dstAlpha);const e=t.color;this.setBlendColor(e.r,e.g,e.b,e.a)}else this.setBlendingEnabled(!1)},setCulling:t=>{t?(this.setFaceCullingEnabled(!0),this.setCullFace(t.face),this.setFrontFace(t.mode)):this.setFaceCullingEnabled(!1)},setPolygonOffset:t=>{t?(this.setPolygonOffsetFillEnabled(!0),this.setPolygonOffset(t.factor,t.units)):this.setPolygonOffsetFillEnabled(!1)},setDepthTest:t=>{t?(this.setDepthTestEnabled(!0),this.setDepthFunction(t.func)):this.setDepthTestEnabled(!1)},setStencilTest:t=>{if(t){this.setStencilTestEnabled(!0);const e=t.function;this.setStencilFunction(e.func,e.ref,e.mask);const i=t.operation;this.setStencilOp(i.fail,i.zFail,i.zPass)}else this.setStencilTestEnabled(!1)},setDepthWrite:t=>{t?(this.setDepthWriteEnabled(!0),this.setDepthRange(t.zNear,t.zFar)):this.setDepthWriteEnabled(!1)},setColorWrite:t=>{t?this.setColorMask(t.r,t.g,t.b,t.a):this.setColorMask(!1,!1,!1,!1)},setStencilWrite:t=>{t?this.setStencilWriteMask(t.mask):this.setStencilWriteMask(0)}}),this.enforceState()}isWebGL2Context(){return"webgl2"===this.contextVersion}get contextAttributes(){return this.gl.getContextAttributes()}get parameters(){if(!this._parameters){const t=this.capabilities.textureFilterAnisotropic;this._parameters={versionString:this.gl.getParameter(this.gl.VERSION),maxVertexTextureImageUnits:this.gl.getParameter(this.gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxVertexAttributes:this.gl.getParameter(this.gl.MAX_VERTEX_ATTRIBS),maxMaxAnisotropy:t?this.gl.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY):void 0,maxTextureImageUnits:this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS),maxTextureSize:this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE)}}return this._parameters}dispose(){this.bindVAO(null),this.unbindBuffer(34962),this.unbindBuffer(34963),this._textureUnitMap=[],this.gl=null,this._capabilities=null}setPipelineState(t){this._stateTracker.setPipeline(t)}setBlendingEnabled(t){this._blendEnabled!==t&&(!0===t?this.gl.enable(this.gl.BLEND):this.gl.disable(this.gl.BLEND),this._blendEnabled=t,this._stateTracker.invalidateBlending())}setBlendColor(t,e,i,s){t===this._blendColorState.r&&e===this._blendColorState.g&&i===this._blendColorState.b&&s===this._blendColorState.a||(this.gl.blendColor(t,e,i,s),this._blendColorState.r=t,this._blendColorState.g=e,this._blendColorState.b=i,this._blendColorState.a=s,this._stateTracker.invalidateBlending())}setBlendFunction(t,e){t===this._blendFunctionState.srcRGB&&e===this._blendFunctionState.dstRGB||(this.gl.blendFunc(t,e),this._blendFunctionState.srcRGB=t,this._blendFunctionState.srcAlpha=t,this._blendFunctionState.dstRGB=e,this._blendFunctionState.dstAlpha=e,this._stateTracker.invalidateBlending())}setBlendFunctionSeparate(t,e,i,s){this._blendFunctionState.srcRGB===t&&this._blendFunctionState.srcAlpha===i&&this._blendFunctionState.dstRGB===e&&this._blendFunctionState.dstAlpha===s||(this.gl.blendFuncSeparate(t,e,i,s),this._blendFunctionState.srcRGB=t,this._blendFunctionState.srcAlpha=i,this._blendFunctionState.dstRGB=e,this._blendFunctionState.dstAlpha=s,this._stateTracker.invalidateBlending())}setBlendEquation(t){this._blendEquationState.mode!==t&&(this.gl.blendEquation(t),this._blendEquationState.mode=t,this._blendEquationState.modeAlpha=t,this._stateTracker.invalidateBlending())}setBlendEquationSeparate(t,e){this._blendEquationState.mode===t&&this._blendEquationState.modeAlpha===e||(this.gl.blendEquationSeparate(t,e),this._blendEquationState.mode=t,this._blendEquationState.modeAlpha=e,this._stateTracker.invalidateBlending())}setColorMask(t,e,i,s){this._colorMaskState.r===t&&this._colorMaskState.g===e&&this._colorMaskState.b===i&&this._colorMaskState.a===s||(this.gl.colorMask(t,e,i,s),this._colorMaskState.r=t,this._colorMaskState.g=e,this._colorMaskState.b=i,this._colorMaskState.a=s,this._stateTracker.invalidateColorWrite())}setClearColor(t,e,i,s){this._clearColor.r===t&&this._clearColor.g===e&&this._clearColor.b===i&&this._clearColor.a===s||(this.gl.clearColor(t,e,i,s),this._clearColor.r=t,this._clearColor.g=e,this._clearColor.b=i,this._clearColor.a=s)}setFaceCullingEnabled(t){this._polygonCullingEnabled!==t&&(!0===t?this.gl.enable(this.gl.CULL_FACE):this.gl.disable(this.gl.CULL_FACE),this._polygonCullingEnabled=t,this._stateTracker.invalidateCulling())}setPolygonOffsetFillEnabled(t){this._polygonOffsetFillEnabled!==t&&(!0===t?this.gl.enable(this.gl.POLYGON_OFFSET_FILL):this.gl.disable(this.gl.POLYGON_OFFSET_FILL),this._polygonOffsetFillEnabled=t,this._stateTracker.invalidatePolygonOffset())}setPolygonOffset(t,e){this._polygonOffset[0]===t&&this._polygonOffset[1]===e||(this._polygonOffset[0]=t,this._polygonOffset[1]=e,this.gl.polygonOffset(t,e),this._stateTracker.invalidatePolygonOffset())}setCullFace(t){this._cullFace!==t&&(this.gl.cullFace(t),this._cullFace=t,this._stateTracker.invalidateCulling())}setFrontFace(t){this._frontFace!==t&&(this.gl.frontFace(t),this._frontFace=t,this._stateTracker.invalidateCulling())}setScissorTestEnabled(t){this._scissorTestEnabled!==t&&(!0===t?this.gl.enable(this.gl.SCISSOR_TEST):this.gl.disable(this.gl.SCISSOR_TEST),this._scissorTestEnabled=t)}setScissorRect(t,e,i,s){this._scissorRect.x===t&&this._scissorRect.y===e&&this._scissorRect.width===i&&this._scissorRect.height===s||(this.gl.scissor(t,e,i,s),this._scissorRect.x=t,this._scissorRect.y=e,this._scissorRect.width=i,this._scissorRect.height=s)}setDepthTestEnabled(t){this._depthTestEnabled!==t&&(!0===t?this.gl.enable(this.gl.DEPTH_TEST):this.gl.disable(this.gl.DEPTH_TEST),this._depthTestEnabled=t,this._stateTracker.invalidateDepthTest())}setClearDepth(t){this._clearDepth!==t&&(this.gl.clearDepth(t),this._clearDepth=t)}setDepthFunction(t){this._depthFunction!==t&&(this.gl.depthFunc(t),this._depthFunction=t,this._stateTracker.invalidateDepthTest())}setDepthWriteEnabled(t){this._depthWriteEnabled!==t&&(this.gl.depthMask(t),this._depthWriteEnabled=t,this._stateTracker.invalidateDepthWrite())}setDepthRange(t,e){this._depthRange.zNear===t&&this._depthRange.zFar===e||(this.gl.depthRange(t,e),this._depthRange.zNear=t,this._depthRange.zFar=e,this._stateTracker.invalidateDepthWrite())}setStencilTestEnabled(t){this._stencilTestEnabled!==t&&(!0===t?this.gl.enable(this.gl.STENCIL_TEST):this.gl.disable(this.gl.STENCIL_TEST),this._stencilTestEnabled=t,this._stateTracker.invalidateStencilTest())}setClearStencil(t){t!==this._clearStencil&&(this.gl.clearStencil(t),this._clearStencil=t)}setStencilFunction(t,e,i){this._stencilFunction.func===t&&this._stencilFunction.ref===e&&this._stencilFunction.mask===i||(this.gl.stencilFunc(t,e,i),this._stencilFunction.face=1032,this._stencilFunction.func=t,this._stencilFunction.ref=e,this._stencilFunction.mask=i,this._stateTracker.invalidateStencilTest())}setStencilFunctionSeparate(t,e,i,s){this._stencilFunction.face===t&&this._stencilFunction.func===e&&this._stencilFunction.ref===i&&this._stencilFunction.mask===s||(this.gl.stencilFuncSeparate(t,e,i,s),this._stencilFunction.face=t,this._stencilFunction.func=e,this._stencilFunction.ref=i,this._stencilFunction.mask=s,this._stateTracker.invalidateStencilTest())}setStencilWriteMask(t){this._stencilWriteMask!==t&&(this.gl.stencilMask(t),this._stencilWriteMask=t,this._stateTracker.invalidateStencilWrite())}setStencilOp(t,e,i){this._stencilOperation.fail===t&&this._stencilOperation.zFail===e&&this._stencilOperation.zPass===i||(this.gl.stencilOp(t,e,i),this._stencilOperation.face=1032,this._stencilOperation.fail=t,this._stencilOperation.zFail=e,this._stencilOperation.zPass=i,this._stateTracker.invalidateStencilTest())}setStencilOpSeparate(t,e,i,s){this._stencilOperation.face===t&&this._stencilOperation.fail===e&&this._stencilOperation.zFail===i&&this._stencilOperation.zPass===s||(this.gl.stencilOpSeparate(t,e,i,s),this._stencilOperation.face=t,this._stencilOperation.face=t,this._stencilOperation.fail=e,this._stencilOperation.zFail=i,this._stencilOperation.zPass=s,this._stateTracker.invalidateStencilTest())}setActiveTexture(t){const e=this._activeTextureUnit;return t>=0&&t!==this._activeTextureUnit&&(this.gl.activeTexture(_enums_js__WEBPACK_IMPORTED_MODULE_4__["BASE_TEXTURE_UNIT"]+t),this._activeTextureUnit=t),e}clear(t){t&&this.gl.clear(t)}clearSafe(t,e=255){t&&(16384&t&&this.setColorMask(!0,!0,!0,!0),256&t&&this.setDepthWriteEnabled(!0),1024&t&&this.setStencilWriteMask(e),this.gl.clear(t))}drawArrays(t,e,i){this.gl.drawArrays(t,e,i)}drawElements(t,e,i,s){5123!==i?5125===i&&this.gl.drawElements(t,e,i,s):this.gl.drawElements(t,e,i,s)}logIno(){}get capabilities(){return this._capabilities}setViewport(t,e,i,s){const a=this._viewport;a.x===t&&a.y===e&&a.width===i&&a.height===s||(a.x=t,a.y=e,a.width=i,a.height=s,this.gl.viewport(t,e,i,s))}getViewport(){return{x:this._viewport.x,y:this._viewport.y,width:this._viewport.width,height:this._viewport.height}}bindProgram(t){if(!t)return this.gl.useProgram(null),void(this._activeShaderProgram=null);this._activeShaderProgram!==t&&(t.initialize(),this.gl.useProgram(t.glName),this._activeShaderProgram=t)}bindTexture(t,e){(e>=this.parameters.maxTextureImageUnits||e<0)&&console.error("Input texture unit is out of range of available units!");const i=this._textureUnitMap[e];if(this.setActiveTexture(e),null==t||null==t.glName)return null!=i&&this.gl.bindTexture(i.descriptor.target,null),void(this._textureUnitMap[e]=null);i!==t?(this.gl.bindTexture(t.descriptor.target,t.glName),t.applyChanges(),this._textureUnitMap[e]=t):t.applyChanges()}unbindTextureAllUnits(t){for(let e=0;e<this.parameters.maxTextureImageUnits;e++)this._textureUnitMap[e]===t&&this.bindTexture(null,e)}bindFramebuffer(e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(e))return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),void(this._activeFramebuffer=null);this._activeFramebuffer!==e&&(e.initializeAndBind(),this._activeFramebuffer=e)}bindBuffer(t){t&&(34962===t.bufferType?this._activeVertexBuffer=r(this.gl,t,t.bufferType,this._activeVertexBuffer):this._activeIndexBuffer=r(this.gl,t,t.bufferType,this._activeIndexBuffer))}bindRenderbuffer(t){const e=this.gl;t||(e.bindRenderbuffer(e.RENDERBUFFER,null),this._activeRenderbuffer=null),this._activeRenderbuffer!==t&&(e.bindRenderbuffer(e.RENDERBUFFER,t.glName),this._activeRenderbuffer=t)}unbindBuffer(t){34962===t?this._activeVertexBuffer=r(this.gl,null,t,this._activeVertexBuffer):this._activeIndexBuffer=r(this.gl,null,t,this._activeIndexBuffer)}bindVAO(t){t?this._activeVertexArrayObject&&this._activeVertexArrayObject===t||(t.bind(),this._activeVertexArrayObject=t):this._activeVertexArrayObject&&(this._activeVertexArrayObject.unbind(),this._activeVertexArrayObject=null)}getBoundTexture(t){return this._textureUnitMap[t]}getBoundFramebufferObject(){return this._activeFramebuffer}getBoundVAO(){return this._activeVertexArrayObject}resetState(){this.bindProgram(null),this.bindVAO(null),this.bindFramebuffer(null),this.unbindBuffer(34962),this.unbindBuffer(34963);for(let t=0;t<this.parameters.maxTextureImageUnits;t++)this.bindTexture(null,t);this.setBlendingEnabled(!1),this.setBlendFunction(1,0),this.setBlendEquation(32774),this.setBlendColor(0,0,0,0),this.setFaceCullingEnabled(!1),this.setCullFace(1029),this.setFrontFace(2305),this.setPolygonOffsetFillEnabled(!1),this.setPolygonOffset(0,0),this.setScissorTestEnabled(!1),this.setScissorRect(0,0,this.gl.canvas.width,this.gl.canvas.height),this.setDepthTestEnabled(!1),this.setDepthFunction(513),this.setDepthRange(0,1),this.setStencilTestEnabled(!1),this.setStencilFunction(519,0,0),this.setStencilOp(7680,7680,7680),this.setClearColor(0,0,0,0),this.setClearDepth(1),this.setClearStencil(0),this.setColorMask(!0,!0,!0,!0),this.setStencilWriteMask(4294967295),this.setDepthWriteEnabled(!0),this.setViewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}enforceState(){const t=this.gl,e=this.capabilities.vao;e&&e.bindVertexArray(null);for(let i=0;i<this.parameters.maxVertexAttributes;i++)t.disableVertexAttribArray(i);if(this._activeVertexBuffer?t.bindBuffer(this._activeVertexBuffer.bufferType,this._activeVertexBuffer.glName):t.bindBuffer(34962,null),this._activeIndexBuffer?t.bindBuffer(this._activeIndexBuffer.bufferType,this._activeIndexBuffer.glName):t.bindBuffer(34963,null),e&&this._activeVertexArrayObject){const t=this._activeVertexArrayObject;this._activeVertexArrayObject&&(this._activeVertexArrayObject.unbind(),this._activeVertexArrayObject=null),this.bindVAO(t)}t.bindFramebuffer(t.FRAMEBUFFER,this._activeFramebuffer?this._activeFramebuffer.glName:null),t.useProgram(this._activeShaderProgram?this._activeShaderProgram.glName:null),t.blendColor(this._blendColorState.r,this._blendColorState.g,this._blendColorState.b,this._blendColorState.a),t.bindRenderbuffer(t.RENDERBUFFER,this._activeRenderbuffer?this._activeRenderbuffer.glName:null),!0===this._blendEnabled?t.enable(this.gl.BLEND):t.disable(this.gl.BLEND),t.blendEquationSeparate(this._blendEquationState.mode,this._blendEquationState.modeAlpha),t.blendFuncSeparate(this._blendFunctionState.srcRGB,this._blendFunctionState.dstRGB,this._blendFunctionState.srcAlpha,this._blendFunctionState.dstAlpha),t.clearColor(this._clearColor.r,this._clearColor.g,this._clearColor.b,this._clearColor.a),t.clearDepth(this._clearDepth),t.clearStencil(this._clearStencil),t.colorMask(this._colorMaskState.r,this._colorMaskState.g,this._colorMaskState.b,this._colorMaskState.a),t.cullFace(this._cullFace),t.depthFunc(this._depthFunction),t.depthRange(this._depthRange.zNear,this._depthRange.zFar),!0===this._depthTestEnabled?t.enable(t.DEPTH_TEST):t.disable(t.DEPTH_TEST),t.depthMask(this._depthWriteEnabled),t.frontFace(this._frontFace),t.lineWidth(1),!0===this._polygonCullingEnabled?t.enable(t.CULL_FACE):t.disable(t.CULL_FACE),t.polygonOffset(this._polygonOffset[0],this._polygonOffset[1]),!0===this._polygonOffsetFillEnabled?t.enable(t.POLYGON_OFFSET_FILL):t.disable(t.POLYGON_OFFSET_FILL),t.scissor(this._scissorRect.x,this._scissorRect.y,this._scissorRect.width,this._scissorRect.height),!0===this._scissorTestEnabled?t.enable(t.SCISSOR_TEST):t.disable(t.SCISSOR_TEST),t.stencilFunc(this._stencilFunction.func,this._stencilFunction.ref,this._stencilFunction.mask),t.stencilOpSeparate(this._stencilOperation.face,this._stencilOperation.fail,this._stencilOperation.zFail,this._stencilOperation.zPass),!0===this._stencilTestEnabled?t.enable(t.STENCIL_TEST):t.disable(t.STENCIL_TEST),t.stencilMask(this._stencilWriteMask);for(let i=0;i<this.parameters.maxTextureImageUnits;i++){t.activeTexture(_enums_js__WEBPACK_IMPORTED_MODULE_4__["BASE_TEXTURE_UNIT"]+i),t.bindTexture(3553,null);const e=this._textureUnitMap[i];e&&t.bindTexture(e.descriptor.target,e.glName)}t.activeTexture(_enums_js__WEBPACK_IMPORTED_MODULE_4__["BASE_TEXTURE_UNIT"]+this._activeTextureUnit),t.viewport(this._viewport.x,this._viewport.y,this._viewport.width,this._viewport.height)}}function r(t,e,i,s){return e?s!==e&&t.bindBuffer(i,e.glName):t.bindBuffer(i,null),e}/* harmony default export */ __webpack_exports__["default"] = (l);


/***/ }),

/***/ "cXeJ":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities/VertexArrayObjects.js ***!
  \**********************************************************************************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return r; });
/* harmony import */ var _isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isWebGL2Context.js */ "xRQN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function r(r,t){if(Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r))return{createVertexArray:r.createVertexArray.bind(r),deleteVertexArray:r.deleteVertexArray.bind(r),bindVertexArray:r.bindVertexArray.bind(r)};if(t.vao)return null;const n=r.getExtension("OES_vertex_array_object")||r.getExtension("MOZ_OES_vertex_array_object")||r.getExtension("WEBKIT_OES_vertex_array_object");return n?{createVertexArray:n.createVertexArrayOES.bind(n),deleteVertexArray:n.deleteVertexArrayOES.bind(n),bindVertexArray:n.bindVertexArrayOES.bind(n)}:null}


/***/ }),

/***/ "kGdt":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/ProgramCache.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _programUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./programUtils.js */ "1F90");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class t{constructor(r){this._programCacheByTemplate=new Map,this._rctx=r}dispose(){this._programCacheByTemplate.forEach((r=>{r.programs.forEach((r=>{r.dispose()}))})),this._programCacheByTemplate=null}getProgram(t,a){return this._programCacheByTemplate.has(t)||this.addProgramTemplate(t,(a=>Object(_programUtils_js__WEBPACK_IMPORTED_MODULE_0__["createProgram"])(this._rctx,t,a))),this.getProgramTemplateInstance(t,a)}addProgramTemplate(r,t){this._programCacheByTemplate.set(r,{constructor:t,programs:new Map})}getProgramTemplateInstance(r,t){const a=this._programCacheByTemplate.get(r);if(a){const r=t?JSON.stringify(t):"default";if(!a.programs.has(r)){const e=a.constructor(t);a.programs.set(r,e)}return a.programs.get(r)}return null}}/* harmony default export */ __webpack_exports__["default"] = (t);


/***/ }),

/***/ "r3F2":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/InstanceCounter.js ***!
  \******************************************************************/
/*! exports provided: InstanceCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstanceCounter", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class t{constructor(){for(this._current=new Array,this._max=new Array,this._allocations=new Map;this._current.length<6;)this._current.push(0),this._max.push(0)}resetMax(){for(this._max.length=0;this._max.length<this._current.length;)this._max.push(0)}increment(t,e){const s=++this._current[t];this._max[t]=Math.max(s,this._max[t])}decrement(t,e){--this._current[t]}get max(){return this._max}get current(){return this._current}printResourceCount(){if(console.log("Live objects:"),console.log(`Textures: ${this._current[0]}`),console.log(`Buffers: ${this._current[1]}`),console.log(`VAOs: ${this._current[2]}`),console.log(`Programs: ${this._current[3]}`),console.log(`Framebuffers: ${this._current[4]}`),console.log(`Renderbuffers: ${this._current[5]}`),this._allocations.size>0){console.log(`${this._allocations.size} live object allocations:`);const t=new Map;this._allocations.forEach((e=>{var s;t.set(e,(null!=(s=t.get(e))?s:0)+1)})),t.forEach(((t,e)=>console.log(t," : ",e)))}}}


/***/ }),

/***/ "uzVh":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities/load.js ***!
  \********************************************************************/
/*! exports provided: loadCapabilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCapabilities", function() { return o; });
/* harmony import */ var _isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isWebGL2Context.js */ "xRQN");
/* harmony import */ var _DisjointTimerQuery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisjointTimerQuery.js */ "GprA");
/* harmony import */ var _DrawBuffers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DrawBuffers.js */ "RiM0");
/* harmony import */ var _Instancing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Instancing.js */ "MTaK");
/* harmony import */ var _LoseContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoseContext.js */ "6c4E");
/* harmony import */ var _VertexArrayObjects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VertexArrayObjects.js */ "cXeJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function o(t,o){const T=o&&o.disabledExtensions||{},s=o&&o.debugWebGLExtensions||{};let x,C,A,F,G,O,B,D,M,c,X,d=null,g=null,P=null,L=null;return{get drawBuffers(){return X||(X=Object(_DrawBuffers_js__WEBPACK_IMPORTED_MODULE_2__["load"])(t,T)),X},get instancing(){return x||(x=Object(_Instancing_js__WEBPACK_IMPORTED_MODULE_3__["load"])(t)),x},get vao(){return C||(C=Object(_VertexArrayObjects_js__WEBPACK_IMPORTED_MODULE_5__["load"])(t,T)),C},get compressedTextureETC(){return A||(A=l(t,T)),A},get compressedTextureS3TC(){return F||(F=u(t,T)),F},get textureFilterAnisotropic(){return G||(G=a(t,T)),G},get disjointTimerQuery(){return O||(O=Object(_DisjointTimerQuery_js__WEBPACK_IMPORTED_MODULE_1__["createDisjointTimerQuery"])(t,T)),O},get textureFloat(){return B||(B=R(t,T)),B},get colorBufferFloat(){return D||(D=f(t,T)),D},get blendMinMax(){return M||(M=i(t,T)),M},get depthTexture(){return null===d&&(d=S(t,T,"depthTexture",!0,["WEBGL_depth_texture","MOZ_WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture"])),d},get standardDerivatives(){return null===g&&(g=S(t,T,"standardDerivatives",!0,["OES_standard_derivatives"])),g},get shaderTextureLOD(){return null===P&&(P=S(t,T,"shaderTextureLOD",!0,["EXT_shader_texture_lod"])),P},get fragDepth(){return null===L&&(L=S(t,T,"fragDepth",!0,["EXT_frag_depth"])),L},get loseContext(){return c||(c=Object(_LoseContext_js__WEBPACK_IMPORTED_MODULE_4__["load"])(t,s)),c},enable(t){return this[t]}}}function l(t,e){if(e.compressedTextureETC)return null;const r=t.getExtension("WEBGL_compressed_texture_etc");return r?{COMPRESSED_R11_EAC:r.COMPRESSED_R11_EAC,COMPRESSED_SIGNED_R11_EAC:r.COMPRESSED_SIGNED_R11_EAC,COMPRESSED_RG11_EAC:r.COMPRESSED_RG11_EAC,COMPRESSED_SIGNED_RG11_EAC:r.COMPRESSED_SIGNED_RG11_EAC,COMPRESSED_RGB8_ETC2:r.COMPRESSED_RGB8_ETC2,COMPRESSED_SRGB8_ETC2:r.COMPRESSED_SRGB8_ETC2,COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:r.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:r.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,COMPRESSED_RGBA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC,COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC}:null}function u(t,e){if(e.compressedTextureS3TC)return null;const r=t.getExtension("WEBGL_compressed_texture_s3tc");return r?{COMPRESSED_RGB_S3TC_DXT1:r.COMPRESSED_RGB_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT1:r.COMPRESSED_RGBA_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT3:r.COMPRESSED_RGBA_S3TC_DXT3_EXT,COMPRESSED_RGBA_S3TC_DXT5:r.COMPRESSED_RGBA_S3TC_DXT5_EXT}:null}function i(e,r){if(Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e))return{MIN:e.MIN,MAX:e.MAX};if(r.blendMinMax)return null;{const t=e.getExtension("EXT_blend_minmax");return t?{MIN:t.MIN_EXT,MAX:t.MAX_EXT}:null}}function a(t,e){if(e.textureFilterAnisotropic)return null;const r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");return r?{MAX_TEXTURE_MAX_ANISOTROPY:r.MAX_TEXTURE_MAX_ANISOTROPY_EXT,TEXTURE_MAX_ANISOTROPY:r.TEXTURE_MAX_ANISOTROPY_EXT}:null}function R(e,r){if(Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e))return{textureFloat:!0,textureFloatLinear:!r.textureFloatLinear&&!!e.getExtension("OES_texture_float_linear"),textureHalfFloat:!0,textureHalfFloatLinear:!r.textureHalfFloatLinear&&!!e.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:e.HALF_FLOAT};if(e instanceof WebGLRenderingContext){const t=!r.textureHalfFloat&&e.getExtension("OES_texture_half_float");return{textureFloat:!r.textureFloat&&!!e.getExtension("OES_texture_float"),textureFloatLinear:!r.textureFloatLinear&&!!e.getExtension("OES_texture_float_linear"),textureHalfFloat:!!t,textureHalfFloatLinear:!r.textureHalfFloatLinear&&!!e.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:t?t.HALF_FLOAT_OES:void 0}}return null}function f(e,r){if(Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e)){const t=!r.colorBufferFloat&&e.getExtension("EXT_color_buffer_half_float"),_=!r.colorBufferFloat&&e.getExtension("EXT_color_buffer_float"),n=!r.colorBufferFloat&&e.getExtension("EXT_float_blend");return t||_||n?{textureFloat:!!_,textureHalfFloat:!!t,R16F:e.R16F,RG16F:e.RG16F,RGBA16F:e.RGBA16F,R32F:e.R32F,RG32F:e.RG32F,RGBA32F:e.RGBA32F,R11F_G11F_B10F:e.R11F_G11F_B10F,RGB16F:e.RGB16F}:null}if(e instanceof WebGLRenderingContext){const t=!r.colorBufferFloat&&e.getExtension("EXT_color_buffer_half_float"),_=!r.colorBufferFloat&&e.getExtension("WEBGL_color_buffer_float"),n=!r.colorBufferFloat&&e.getExtension("EXT_float_blend");return t||_||n?{textureFloat:!!_,textureHalfFloat:!!t,RGBA16F:t?t.RGBA16F_EXT:void 0,RGB16F:t?t.RGB16F_EXT:void 0,RGBA32F:_?_.RGBA32F_EXT:void 0}:null}return null}function S(e,r,_,n,E){if(n&&Object(_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e))return!0;if(r[_])return!1;for(const t of E)if(e.getExtension(t))return!0;return!1}


/***/ })

}]);
//# sourceMappingURL=default~mapViewDeps-js~webgl-js.js.map