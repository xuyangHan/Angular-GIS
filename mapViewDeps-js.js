(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mapViewDeps-js"],{

/***/ "0Ht6":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/magnifier/MagnifierView2D.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../request.js */ "Lqtk");
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/Handles.js */ "r0DZ");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/watchUtils.js */ "N5XI");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../webgl/VertexArrayObject.js */ "D6bk");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _engine_DisplayObject_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../engine/DisplayObject.js */ "fEsP");
/* harmony import */ var _magnifier_resources_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../magnifier/resources.js */ "UBW5");
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../engine/webgl/enums.js */ "yE7X");
/* harmony import */ var _engine_webgl_shaders_MagnifierPrograms_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../engine/webgl/shaders/MagnifierPrograms.js */ "fUoV");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class f extends _engine_DisplayObject_js__WEBPACK_IMPORTED_MODULE_13__["DisplayObject"]{constructor(){super(),this._handles=new _core_Handles_js__WEBPACK_IMPORTED_MODULE_6__["default"],this._resourcePixelRatio=1,this.visible=!1}destroy(){this._handles.destroy(),this._handles=null,this._disposeRenderResources(),this._resourcesTask&&(this._resourcesTask.abort(),this._resourcesTask=null)}get background(){return this._background}set background(e){this._background=e,this.requestRender()}get magnifier(){return this._magnifier}set magnifier(e){this._magnifier=e,this._handles.removeAll(),this._handles.add([Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_7__["init"])(e,"version",(()=>{this.visible=e.visible&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.position)&&e.size>0,this.requestRender()})),e.watch(["mask","overlay"],(()=>this._reloadResources())),e.watch("size",(()=>{this._disposeRenderResources(),this.requestRender()}))])}doRender(r){var s;const t=r.context;if(!this._resourcesTask)return void this._reloadResources();if(r.drawPhase!==_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["WGLDrawPhase"].MAP||!this._canRender())return;this._updateResources(r);const i=this._magnifier;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i.position))return;const o=r.pixelRatio,n=i.size*o,l=1/i.factor,h=Math.ceil(l*n);this._readbackTexture.resize(h,h);const{size:m}=r.state,d=o*m[0],u=o*m[1],c=.5*h,_=.5*h,g=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__["clamp"])(o*i.position.x,c,d-c-1),f=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__["clamp"])(u-o*i.position.y,_,u-_-1);t.setBlendingEnabled(!0);const b=g-c,x=f-_,y=this._readbackTexture;t.bindTexture(y,0),t.gl.copyTexImage2D(y.descriptor.target,0,y.descriptor.pixelFormat,b,x,h,h,0);const k=null==(s=this.background)?void 0:s.color,T=k?[k.a*k.r/255,k.a*k.g/255,k.a*k.b/255,k.a]:[1,1,1,1],v=(g+i.offset.x*o)/d*2-1,R=(f-i.offset.y*o)/u*2-1,w=n/d*2,j=n/u*2,A=this._program;t.bindVAO(this._vertexArrayObject),t.bindTexture(this._overlayTexture,6),t.bindTexture(this._maskTexture,7),t.bindProgram(A),A.setUniform4fv("u_background",T),A.setUniform1i("u_readbackTexture",0),A.setUniform1i("u_overlayTexture",6),A.setUniform1i("u_maskTexture",7),A.setUniform4f("u_drawPos",v,R,w,j),A.setUniform1i("u_maskEnabled",i.maskEnabled?1:0),A.setUniform1i("u_overlayEnabled",i.overlayEnabled?1:0),t.setStencilTestEnabled(!1),t.setColorMask(!0,!0,!0,!0),t.drawArrays(5,0,4),t.bindVAO()}_canRender(){return this.mask&&this.overlay&&null!=this._magnifier}_reloadResources(){this._resourcesTask&&this._resourcesTask.abort();const s=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._magnifier)?this._magnifier.maskUrl:null,t=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._magnifier)?this._magnifier.overlayUrl:null;this._resourcesTask=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["createTask"])((async i=>{const a=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(s)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t)?Object(_magnifier_resources_js__WEBPACK_IMPORTED_MODULE_14__["loadMagnifierResources"])(i):null,n=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(s)?Object(_request_js__WEBPACK_IMPORTED_MODULE_5__["default"])(s,{responseType:"image",signal:i}).then((e=>e.data)):a.then((e=>e.mask)),l=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t)?Object(_request_js__WEBPACK_IMPORTED_MODULE_5__["default"])(t,{responseType:"image",signal:i}).then((e=>e.data)):a.then((e=>e.overlay)),[h,m]=await Promise.all([n,l]);this.mask=h,this.overlay=m,this._disposeRenderResources(),this.requestRender()}))}_disposeRenderResources(){this._readbackTexture=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["disposeMaybe"])(this._readbackTexture),this._overlayTexture=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["disposeMaybe"])(this._overlayTexture),this._maskTexture=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["disposeMaybe"])(this._maskTexture),this._vertexArrayObject=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["disposeMaybe"])(this._vertexArrayObject),this._program=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["disposeMaybe"])(this._program)}_updateResources(e){if(e.pixelRatio!==this._resourcePixelRatio&&this._disposeRenderResources(),this._readbackTexture)return;const r=e.context;this._resourcePixelRatio=e.pixelRatio;const s=Math.ceil(this._magnifier.size*e.pixelRatio);this._program=Object(_engine_webgl_shaders_MagnifierPrograms_js__WEBPACK_IMPORTED_MODULE_16__["createMagnifierProgram"])(r);const i={geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1,divisor:0}]},a=new Uint16Array([0,1,0,0,1,1,1,0]),o=_engine_webgl_shaders_MagnifierPrograms_js__WEBPACK_IMPORTED_MODULE_16__["magnifierProgramTemplate"].attributes;this._vertexArrayObject=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_11__["default"](r,o,i,{geometry:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_9__["default"].createVertex(r,35044,a)}),this.overlay.width=s,this.overlay.height=s,this._overlayTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_10__["default"](r,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!0,preMultiplyAlpha:!Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["isSVG"])(this.overlay.src)||!e.driverTestResult.svgAlwaysPremultipliesAlpha},this.overlay),this.mask.width=s,this.mask.height=s,this._maskTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_10__["default"](r,{target:3553,pixelFormat:6406,internalFormat:6406,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!0},this.mask);const n=1/this._magnifier.factor;this._readbackTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_10__["default"](r,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:Math.ceil(n*s),height:Math.ceil(n*s)})}}/* harmony default export */ __webpack_exports__["default"] = (f);


/***/ }),

/***/ "0O54":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/HighlightEffect.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BitBlitRenderer.js */ "bfVh");
/* harmony import */ var _Effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Effect.js */ "FrEu");
/* harmony import */ var _highlight_HighlightGradient_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlight/HighlightGradient.js */ "ygGI");
/* harmony import */ var _highlight_HighlightRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./highlight/HighlightRenderer.js */ "aK+o");
/* harmony import */ var _highlight_HighlightSurfaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./highlight/HighlightSurfaces.js */ "26zf");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const r=4,d=3/r;class l extends _Effect_js__WEBPACK_IMPORTED_MODULE_2__["Effect"]{constructor(){super(...arguments),this.defines=["highlight"],this._hlRenderer=new _highlight_HighlightRenderer_js__WEBPACK_IMPORTED_MODULE_4__["default"],this._hlGradient=new _highlight_HighlightGradient_js__WEBPACK_IMPORTED_MODULE_3__["default"],this._width=void 0,this._height=void 0,this._hlSurfaces=new _highlight_HighlightSurfaces_js__WEBPACK_IMPORTED_MODULE_5__["default"],this._adjustedWidth=void 0,this._adjustedHeight=void 0,this._blitRenderer=new _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_1__["BitBlitRenderer"]}dispose(){this._hlSurfaces&&this._hlSurfaces.dispose(),this._hlRenderer&&this._hlRenderer.dispose(),this._hlGradient&&this._hlGradient.destroy(),this._boundFBO=null}bind(e){const{context:t,painter:i}=e,{width:h,height:s}=t.getViewport(),r=i.getFbos(h,s).effect0;this.setup(e,h,s),t.bindFramebuffer(r),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)}unbind(){}setup({context:e},t,i){this._width=t,this._height=i;const h=t%r,s=i%r;t+=h<r/2?-h:r-h,i+=s<r/2?-s:r-s,this._adjustedWidth=t,this._adjustedHeight=i,this._boundFBO=e.getBoundFramebufferObject();const l=Math.round(t*d),n=Math.round(i*d);this._hlRenderer.setup(e,l,n),this._hlSurfaces.setup(e,l,n)}draw({context:e}){const t=e.getBoundFramebufferObject();e.setViewport(0,0,this._adjustedWidth*d,this._adjustedHeight*d),e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),e.setStencilTestEnabled(!1),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._blitRenderer.render(e,t.colorTexture,9728,1),e.setStencilTestEnabled(!1),e.setBlendingEnabled(!1),e.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.preBlur(e,this._hlSurfaces.sharedBlur1Tex),e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(e,this._hlSurfaces.sharedBlur2Tex),e.bindFramebuffer(this._boundFBO),e.setBlendingEnabled(!0),e.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(e,this._hlSurfaces.sharedBlur1Tex,this._hlGradient),this._boundFBO=null}setHighlightOptions(e){this._hlGradient.setHighlightOptions(e)}}/* harmony default export */ __webpack_exports__["default"] = (l);


/***/ }),

/***/ "1dih":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/navigation/MapViewNavigation.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../geometry/Point.js */ "SuVq");
/* harmony import */ var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Viewpoint.js */ "y3LX");
/* harmony import */ var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../viewpointUtils.js */ "qYtE");
/* harmony import */ var _ZoomBox_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ZoomBox.js */ "qnLi");
/* harmony import */ var _actions_Pan_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./actions/Pan.js */ "JlMO");
/* harmony import */ var _actions_Pinch_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./actions/Pinch.js */ "cwtj");
/* harmony import */ var _actions_Rotate_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./actions/Rotate.js */ "KOSm");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const l=10,v=1,w=new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_11__["default"]({targetGeometry:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__["default"]}),g=[0,0],d=250;let _=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(t){super(t),this._endTimer=null,this.animationManager=null}initialize(){this.pan=new _actions_Pan_js__WEBPACK_IMPORTED_MODULE_14__["default"]({navigation:this}),this.rotate=new _actions_Rotate_js__WEBPACK_IMPORTED_MODULE_16__["default"]({navigation:this}),this.pinch=new _actions_Pinch_js__WEBPACK_IMPORTED_MODULE_15__["default"]({navigation:this}),this.zoomBox=new _ZoomBox_js__WEBPACK_IMPORTED_MODULE_13__["default"]({view:this.view,navigation:this})}destroy(){this.zoomBox.destroy(),this.zoomBox=null,this.animationManager=null}begin(){this._set("interacting",!0)}end(){this._lastEventTimestamp=performance.now(),this._startTimer(d)}async zoom(t,i=this._getDefaultAnchor()){if(this.stop(),this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return t<1?this.zoomIn(i):this.zoomOut(i);this.setViewpoint(i,t,0,[0,0])}async zoomIn(t){const i=this.view,o=i.constraints.snapToNextScale(i.scale);return this._zoomToScale(o,t)}async zoomOut(t){const i=this.view,o=i.constraints.snapToPreviousScale(i.scale);return this._zoomToScale(o,t)}setViewpoint(t,i,o,n){this.begin(),this.view.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,t,i,o,n),this.end()}setViewpointImmediate(t,i=0,o=[0,0],n=this._getDefaultAnchor()){this.view.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,n,t,i,o)}continousRotateClockwise(){const t=this.get("view.viewpoint");this.animationManager.animateContinous(t,(t=>{Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__["rotateBy"])(t,t,-v)}))}continousRotateCounterclockwise(){const t=this.get("view.viewpoint");this.animationManager.animateContinous(t,(t=>{Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__["rotateBy"])(t,t,v)}))}resetRotation(){this.view.rotation=0}continousPanLeft(){this._continuousPan([-l,0])}continousPanRight(){this._continuousPan([l,0])}continousPanUp(){this._continuousPan([0,l])}continousPanDown(){this._continuousPan([0,-l])}stop(){this.pan.stopMomentumNavigation(),this.animationManager.stop(),this.end(),null!==this._endTimer&&(clearTimeout(this._endTimer),this._endTimer=null,this._set("interacting",!1))}_continuousPan(t){const i=this.get("view.viewpoint");this.animationManager.animateContinous(i,(i=>{Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__["translateBy"])(i,i,t),this.view.constraints.constrainByGeometry(i)}))}_startTimer(t){return null!==this._endTimer||(this._endTimer=setTimeout((()=>{this._endTimer=null;const t=performance.now()-this._lastEventTimestamp;t<d?this._endTimer=this._startTimer(t):this._set("interacting",!1)}),t)),this._endTimer}_getDefaultAnchor(){const{size:t,padding:{left:i,right:o,top:n,bottom:e}}=this.view;return g[0]=.5*(t[0]-o+i),g[1]=.5*(t[1]-e+n),g}async _zoomToScale(t,i=this._getDefaultAnchor()){const{view:o}=this,{constraints:n,scale:e,viewpoint:s,size:a,padding:r}=o,m=n.canZoomInTo(t),p=n.canZoomOutTo(t);if(!(t<e&&!m||t>e&&!p))return Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__["padAndScaleAndRotateBy"])(w,s,t/e,0,i,a,r),n.constrainByGeometry(w),o.goTo(w,{animate:!0})}_scaleRotateTranslateViewpoint(t,i,o,n,e){const{view:s}=this,{size:a,padding:m,constraints:p,scale:h,viewpoint:u}=s,l=h*o,v=p.canZoomInTo(l),w=p.canZoomOutTo(l);return(o<1&&!v||o>1&&!w)&&(o=1),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__["translateBy"])(u,u,e),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__["padAndScaleAndRotateBy"])(t,u,o,n,i,a,m),p.constrainByGeometry(t)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],_.prototype,"animationManager",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Boolean,readOnly:!0})],_.prototype,"interacting",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],_.prototype,"pan",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],_.prototype,"pinch",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],_.prototype,"rotate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],_.prototype,"view",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],_.prototype,"zoomBox",void 0),_=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.navigation.MapViewNavigation")],_);var T=_;/* harmony default export */ __webpack_exports__["default"] = (T);


/***/ }),

/***/ "26zf":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightSurfaces.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/has.js */ "wSAH");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ "0meK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function s(s,t,i){const h=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__["default"](s,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,width:t,height:i,samplingMode:9729});return[h,new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"](s,{colorTarget:0,depthStencilTarget:2},h)]}class t{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.sharedBlur1Tex.dispose(),this._resources.sharedBlur1Fbo.dispose(),this._resources.sharedBlur2Tex.dispose(),this._resources.sharedBlur2Fbo.dispose(),this._resources=null)}_initialize(e,r,t){this._width=r,this._height=t;const[i,h]=s(e,r,t),[o,u]=s(e,r,t);this._resources={sharedBlur1Tex:i,sharedBlur1Fbo:h,sharedBlur2Tex:o,sharedBlur2Fbo:u}}setup(e,r,s){!this._resources||this._width===r&&this._height===s||this.dispose(),this._resources||this._initialize(e,r,s)}get sharedBlur1Tex(){return this._resources.sharedBlur1Tex}get sharedBlur1Fbo(){return this._resources.sharedBlur1Fbo}get sharedBlur2Tex(){return this._resources.sharedBlur2Tex}get sharedBlur2Fbo(){return this._resources.sharedBlur2Fbo}}/* harmony default export */ __webpack_exports__["default"] = (t);


/***/ }),

/***/ "297m":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/MaterialPrograms.js ***!
  \*************************************************************************************/
/*! exports provided: createProgramTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProgramTemplate", function() { return o; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../webgl/programUtils.js */ "1F90");
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sources/resolver.js */ "vpBa");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const e=r=>{let t="";t+=r[0].toUpperCase();for(let e=1;e<r.length;e++){const s=r[e];s===s.toUpperCase()?(t+="_",t+=s):t+=s.toUpperCase()}return t},s=t=>{const s={};for(const r in t){s[e(r)]=t[r]}return Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_5__["glslifyDefineMap"])(s)},o=(r,e,o)=>{const n=r+r.substring(r.lastIndexOf("/")),a=e+e.substring(e.lastIndexOf("/"));return{attributes:o,shaders:r=>({vertexShader:s(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])(`${n}.vert`),fragmentShader:s(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])(`${a}.frag`)})}};


/***/ }),

/***/ "3d+Z":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/BufferData.js ***!
  \*********************************************************************************/
/*! exports provided: BufferData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferData", function() { return u; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../definitions.js */ "jIHu");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../webgl/VertexArrayObject.js */ "D6bk");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _FeatureDisplayList_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FeatureDisplayList.js */ "98J/");
/* harmony import */ var _Buffer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Buffer.js */ "YeA2");
/* harmony import */ var _DisplayRecordReader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DisplayRecordReader.js */ "n21L");
/* harmony import */ var _mesh_heuristics_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../mesh/heuristics.js */ "VIer");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class u{constructor(e,r,t,s,i){this._vaoInvalidated=!0;const o=Object(_mesh_heuristics_js__WEBPACK_IMPORTED_MODULE_11__["getMeshHeuristic"])(r),d=Math.max(o.indicesPerRecord*o.multiplier*t,i+1),u=Math.max(o.verticesPerRecord*o.multiplier*t,s+1),a=e/Uint32Array.BYTES_PER_ELEMENT,l=new _Buffer_js__WEBPACK_IMPORTED_MODULE_9__["Buffer"]("index",d,1),h={geometry:new _Buffer_js__WEBPACK_IMPORTED_MODULE_9__["Buffer"]("vertex",u,a)};this.stride=e,this.strideInt=a,this.geometryType=r,this._buffers={index:l,vertex:h}}static createPooled(r,t,i,o,n,d,f){const a=Math.max(_definitions_js__WEBPACK_IMPORTED_MODULE_3__["BUFFER_DATA_MINIMUM_SIZE"],Math.round(1.5*d)),l=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOr"])(r,(()=>new u(t.stride,i,a,o,n)));return l._buffers.index.clear(),l._buffers.vertex.geometry.clear(),l._records=null,l._displayList=null,l._vaoInvalidated=!0,l._pool=f,l._released=!1,l}release(){this.isReleased||(this._pool.release(this),this._released=!0)}destroy(){this._buffers.index.destroy(),this._buffers.vertex.geometry.destroy(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(this._vao,(e=>e.dispose(!1)))}get isReleased(){return this._released}get indexBufferSize(){return this._buffers.index.bufferSize}get vertexBufferSize(){return this._buffers.vertex.geometry.bufferSize}get displayList(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this._displayList)&&(this._displayList=_FeatureDisplayList_js__WEBPACK_IMPORTED_MODULE_8__["FeatureDisplayList"].from(this,this._records.getCursor())),this._displayList}draw(e,r,t,s,i){this.upload(e);const o=this._getVAO(e,r,t),n=Uint32Array.BYTES_PER_ELEMENT*s;e.bindVAO(o),e.drawElements(4,i,5125,n),e.bindVAO(null)}insert(e){if(e.done)return;const{vertexData:r,offset:t}=e,{records:s,indices:i,vertices:o}=r,n=this._getInsertionInfo(_DisplayRecordReader_js__WEBPACK_IMPORTED_MODULE_10__["DisplayRecordReader"].from(s,t)),{vertFrom:f,vertCount:u,indexFrom:a,indexCount:l,recordCount:h,done:c}=n;if(e.done=c,e.offset=h+t,0===h)return;const{index:_,vertex:m}=this._buffers,x=m.geometry.insert(o,f,u,0),v=_.insert(i,a,l,x);this._addRecords(_DisplayRecordReader_js__WEBPACK_IMPORTED_MODULE_10__["DisplayRecordReader"].from(s,t,h),v,x)}free(e){const r=_DisplayRecordReader_js__WEBPACK_IMPORTED_MODULE_10__["DisplayRecordReader"].from(e.records).getCursor();for(;r.next();)this._freeId(r.id)}freeIds(e){for(const r of e)this._freeId(r)}upload(e){const{index:r,vertex:t}=this._buffers;r.upload(e),t.geometry.upload(e)}has(e){if(!this._records)return!1;const r=this._records.getCursor();for(;r.next();)if(r.id===e)return!0;return!1}getViewOf(e){if(!this._records)return null;const r=this._records.getCursor();for(;r.next();)if(r.id===e)return r;return null}_getInsertionInfo(e){const r=e.getCursor(),{index:t,vertex:s}=this._buffers,i=t.maxAvailableSpace(),o=s.geometry.maxAvailableSpace();let n=0,d=null,f=0,u=null,a=0,l=!0;for(;r.next();){null===u&&(u=r.vertexFrom,d=r.indexFrom);const e=a+r.vertexCount,t=f+r.indexCount;if(e>=o||t>=i){l=!1;break}n+=1,f=t,a=e}return{done:l,vertFrom:u,vertCount:a,indexFrom:d,indexCount:f,recordCount:n}}_addRecords(e,r,t){const s=e.getCursor();for(;s.next();)s.indexFrom+=r,s.vertexFrom+=t;this._records?(this._records.link(e),this._displayList=null):this._records=e}_freeId(e){const r=this._records.getCursor(),t=this._buffers.index,s=this._buffers.vertex.geometry;if(!r.lookup(e))return;const i=r.indexFrom;let o=r.indexCount;const n=r.vertexFrom;let d=r.vertexCount;for(;r.next()&&r.id===e;)o+=r.indexCount,d+=r.vertexCount;t.free(i,o),s.free(n,d,!0),this._records.delete(e)}_getVAO(e,s,o){if(this._vaoInvalidated){const e=JSON.stringify(s)+JSON.stringify(o);e!==this._vaoHash&&(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(this._vao,(e=>{e.dispose(!1)})),this._vao=null,this._vaoHash=e),this._vaoInvalidated=!1}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this._vao)){const{index:r,vertex:n}=this._buffers;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(n.geometry.gpu)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(r.gpu))throw new Error("bad news");this._vao=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_6__["default"](e,o,s,{geometry:n.geometry.gpu},r.gpu)}return this._vao}}


/***/ }),

/***/ "3wQP":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/StencilPrograms.js ***!
  \************************************************************************************/
/*! exports provided: stencil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencil", function() { return r; });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ "vpBa");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const r={shaders:{vertexShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("stencil/stencil.vert"),fragmentShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("stencil/stencil.frag")},attributes:{a_pos:0}};


/***/ }),

/***/ "5ROZ":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/fontUtils.js ***!
  \**********************************************************************/
/*! exports provided: getFontDecorationTop, getFullyQualifiedFontName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFontDecorationTop", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullyQualifiedFontName", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const e=-26,r=-18;function t(e){const r=e.toLowerCase().split(" ").join("-");switch(r){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return r}}function n(e){const r=c(e)+i(e);return t(e.family)+(r.length>0?r:"-regular")}function s(t){switch(t){case"underline":return e;case"line-through":return r}return NaN}function c(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}function i(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblic":return"-italic"}return""}


/***/ }),

/***/ "60EV":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/HittestEffect.js ***!
  \**********************************************************************************/
/*! exports provided: HittestEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HittestEffect", function() { return o; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions.js */ "jIHu");
/* harmony import */ var _Effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Effect.js */ "FrEu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class o extends _Effect_js__WEBPACK_IMPORTED_MODULE_2__["Effect"]{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["id"],this._lastSize=0}dispose(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._fbo)&&this._fbo.dispose()}bind({context:t,painter:e}){const{width:s,height:o}=t.getViewport(),r=e.getFbos(s,o).effect0;t.bindFramebuffer(r),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)}unbind(){}draw({context:t,state:s,pixelRatio:o},r,i=_definitions_js__WEBPACK_IMPORTED_MODULE_1__["HITTEST_SEARCH_SIZE"]){const f=t.getBoundFramebufferObject(),n=s.size[1]*o,a=Math.round(i*o),h=a/2,c=a/2;this._ensureBuffer(a),r.forEach(((t,e)=>{const s=new Map,i=Math.floor(e[0]*o-a/2),u=Math.floor(n-e[1]*o-a/2);f.readPixels(i,u,a,a,6408,5121,this._buf);for(let o=0;o<this._buf32.length;o++){const t=this._buf32[o];if(4294967295!==t&&0!==t){const e=o%a,r=a-Math.floor(o/a),i=(h-e)*(h-e)+(c-r)*(c-r),f=s.has(t)?s.get(t):4294967295;s.set(t,Math.min(i,f))}}const l=Array.from(s).sort(((t,e)=>t[1]-e[1])).map((t=>t[0]));t.resolve(l),r.delete(e)}))}_ensureBuffer(t){this._lastSize!==t&&(this._lastSize=t,this._buf=new Uint8Array(4*t*t),this._buf32=new Uint32Array(this._buf.buffer))}}


/***/ }),

/***/ "6ldq":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/Programs.js ***!
  \***********************************************************************************/
/*! exports provided: background, circle, fill, icon, line, outline, text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circle", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "line", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outline", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return v; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../webgl/programUtils.js */ "1F90");
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sources/resolver.js */ "QSUW");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t=r=>Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_5__["glslifyDefineMap"])({ID:r.id,PATTERN:r.pattern}),a={shaders:e=>({vertexShader:t(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("background/background.vert"),fragmentShader:t(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("background/background.frag")})},i=r=>Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_5__["glslifyDefineMap"])({ID:r.id}),d={shaders:e=>({vertexShader:i(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("circle/circle.vert"),fragmentShader:i(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("circle/circle.frag")})},s=r=>Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_5__["glslifyDefineMap"])({ID:r.id,PATTERN:r.pattern}),n={shaders:e=>({vertexShader:s(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("fill/fill.vert"),fragmentShader:s(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("fill/fill.frag")})},o=r=>Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_5__["glslifyDefineMap"])({ID:r.id}),l={shaders:e=>({vertexShader:o(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("outline/outline.vert"),fragmentShader:o(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("outline/outline.frag")})},h=r=>Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_5__["glslifyDefineMap"])({ID:r.id,SDF:r.sdf}),c={shaders:e=>({vertexShader:h(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("icon/icon.vert"),fragmentShader:h(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("icon/icon.frag")})},f=r=>Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_5__["glslifyDefineMap"])({ID:r.id,PATTERN:r.pattern}),g={shaders:e=>({vertexShader:f(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("line/line.vert"),fragmentShader:f(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("line/line.frag")})},m=r=>Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_5__["glslifyDefineMap"])({ID:r.id}),v={shaders:e=>({vertexShader:m(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("text/text.vert"),fragmentShader:m(e)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("text/text.frag")})};


/***/ }),

/***/ "98J/":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/FeatureDisplayList.js ***!
  \*******************************************************************************/
/*! exports provided: FeatureDisplayList, FeatureDisplayListInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureDisplayList", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureDisplayListInfo", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class t{constructor(t,e,i,s,n){this.target=t,this.geometryType=e,this.materialKey=i,this.indexFrom=s,this.indexCount=n}get indexEnd(){return this.indexFrom+this.indexCount}extend(t){this.indexCount+=t}draw(t,e,i){this.target.draw(t,e,i,this.indexFrom,this.indexCount)}}class e{constructor(t){this._infos=new Array,this._target=t}static from(t,i){const s=new e(t);for(;i.next();)s.add(i);return s}get _last(){return this._infos[this._infos.length-1]}add(e){const{materialKey:i,indexFrom:s,indexCount:n}=e;if(this._infos.length&&e.materialKey===this._last.materialKey&&e.indexFrom===this._last.indexEnd)this._last.extend(n);else{const e=new t(this._target,this.geometryType,i,s,n);this._infos.push(e)}}forEach(t){for(const e of this._infos)t(e)}}


/***/ }),

/***/ "A+Tu":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/LayerCollisionInfo.js ***!
  \******************************************************************************************/
/*! exports provided: default, createLabelVVEvaluator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLabelVVEvaluator", function() { return c; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _visualVariableSimpleUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visualVariableSimpleUtils.js */ "cZ4F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const i=(e,t)=>e.order-t.order,n=(e,t)=>e.index-t.index,l=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri/views/2d/engine/webgl/collisions/CollisionEngine");function s(e,r){const o=!!e.minScale,i=!!e.maxScale,n=o&&r.scaleToZoom(e.minScale)||0,l=i&&r.scaleToZoom(e.maxScale)||255;return{deconflictionStrategy:e.deconflictionStrategy,minZoom:Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])(Math.floor(10*n),0,255),maxZoom:Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])(Math.floor(10*l),0,255)}}function a(e){return t=>Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(Object(_visualVariableSimpleUtils_js__WEBPACK_IMPORTED_MODULE_3__["getSizeForValueSimple"])(t,e))}function c(e){if(!e)return null;for(const t of e)if("size"===t.type)return a(t);return null}class d{constructor(e,t,r,o){this._vvHandle=null;const i=e.layer,{geometryType:n,labelingInfo:l,renderer:a}=i;a&&(this.vvEval=c("visualVariables"in a&&a.visualVariables)),this._vvHandle=i.watch("renderer",(e=>{e&&(this.vvEval=c("visualVariables"in e&&e.visualVariables))}));const d=i.featureReduction,f=d&&"cluster"===d.type&&d.labelingInfo,m=(l||[]).map((e=>s(e,o))),u=(f||[]).map((e=>s(e,o)));this.layerView=e,this.geometryType=n,this.index=t,this.order=r,this.zoomRanges=[...m,...u],this.layerView=e}hasVV(){return!!this.vvEval}allOrNothing(){return!("polyline"===this.geometryType)}destroy(){this._vvHandle.remove()}static create(e,t,r,o){const n=r.sort(i);let l=!1,s=-1;for(const i of n)!l&&i.order>t&&(s=i.index,l=!0),l&&i.index++;return l||(s=n.length),new d(e,s,t,o)}static delete(e,t){const r=t.sort(n);for(let o=e+1;o<r.length;o++)t[o].index--;t[e].destroy(),t.splice(e,1)}static find(e,t){for(const r of t)if(r.index===e)return r;return l.error("Tried to get a LayerCollisionInfo for an index that doesn't exist!"),null}}/* harmony default export */ __webpack_exports__["default"] = (d);


/***/ }),

/***/ "BaZm":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GlyphMosaic.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Rect.js */ "qcDN");
/* harmony import */ var _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RectangleBinPack.js */ "rhr1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const r=256,a=t=>Math.floor(t/256);function n(t){const e=new Set;for(const i of t)e.add(a(i));return e}function c(t,i,h){return t.has(i)||t.set(i,h().then((()=>{t.delete(i)})).catch((h=>{t.delete(i),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfNotAbortError"])(h)}))),t.get(i)}const o=t=>({rect:new _Rect_js__WEBPACK_IMPORTED_MODULE_3__["default"](0,0,0,0),page:0,metrics:{left:0,width:0,height:0,advance:0,top:0},code:t,sdf:!0});class l{constructor(t,e,i){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphCache={},this._textures=[],this._rangePromises=new Map,this.width=t,this.height=e,this._glyphSource=i,this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_4__["default"](t-4,e-4),this._glyphData.push(new Uint8Array(t*e)),this._dirties.push(!0),this._textures.push(null),this._initDecorationGlyph()}dispose(){this._binPack=null;for(const t of this._textures)t&&t.dispose();this._textures.length=0,this._glyphData.length=0}_initDecorationGlyph(){const t=[117,149,181,207,207,181,149,117],e=[];for(let h=0;h<t.length;h++){const i=t[h];for(let t=0;t<11;t++)e.push(i)}const i={metrics:{width:5,height:2,left:0,top:0,advance:0},bitmap:new Uint8Array(e)};this._recordGlyph(i)}async getGlyphItems(t,e,i){const h=this._getGlyphCache(t);return await this._fetchRanges(t,e,i),e.map((e=>this._getMosaicItem(h,t,e)))}bind(t,e,i,h){const s=this._getTexture(t,i);s.setSamplingMode(e),this._dirties[i]&&(s.setData(this._glyphData[i]),this._dirties[i]=!1),t.bindTexture(s,h)}_getGlyphCache(t){return this._glyphCache[t]||(this._glyphCache[t]={}),this._glyphCache[t]}_getTexture(t,e){return this._textures[e]||(this._textures[e]=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](t,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height))),this._textures[e]}_invalidate(){this._dirties[this._currentPage]=!0}async _fetchRanges(t,e,i){const h=n(e),s=[];h.forEach((e=>{s.push(this._fetchRange(t,e,i))})),await Promise.all(s)}async _fetchRange(t,e,i){if(e>r)return null;const h=t+e;return c(this._rangePromises,h,(()=>this._glyphSource.getRange(t,e,i)))}_getMosaicItem(t,e,i){if(!t[i]){const h=this._glyphSource.getGlyph(e,i);if(!h||!h.metrics)return o(i);const s=this._recordGlyph(h),r=this._currentPage,a=h.metrics;t[i]={rect:s,page:r,metrics:a,code:i,sdf:!0},this._invalidate()}return t[i]}_recordGlyph(e){const i=e.metrics;let r;if(0===i.width)r=new _Rect_js__WEBPACK_IMPORTED_MODULE_3__["default"](0,0,0,0);else{const h=3,a=i.width+2*h,n=i.height+2*h;r=this._binPack.allocate(a,n),r.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(null),this._initDecorationGlyph(),this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.width-4,this.height-4),r=this._binPack.allocate(a,n));const c=this._glyphData[this._currentPage],o=e.bitmap;let l,g;if(o)for(let t=0;t<n;t++){l=a*t,g=this.width*(r.y+t)+r.x;for(let t=0;t<a;t++)c[g+t]=o[l+t]}Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-glyph-debug")&&this._showDebugPage(c)}return r}_showDebugPage(t){const e=document.createElement("canvas"),i=e.getContext("2d"),h=new ImageData(this.width,this.height),s=h.data;e.width=this.width,e.height=this.height,e.style.border="1px solid black";for(let r=0;r<t.length;++r)s[4*r+0]=t[r],s[4*r+1]=0,s[4*r+2]=0,s[4*r+3]=255;i.putImageData(h,0,0),document.body.appendChild(e)}}/* harmony default export */ __webpack_exports__["default"] = (l);


/***/ }),

/***/ "Coxz":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/EffectManager.js ***!
  \**************************************************************************************************/
/*! exports provided: EffectManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectManager", function() { return s; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function e(e){switch(e){case"bloom":case"blur":case"opacity":case"drop-shadow":return e;default:return"colorize"}}const t={colorize:async()=>new((await __webpack_require__.e(/*! import() | Colorize-js */ "Colorize-js").then(__webpack_require__.bind(null, /*! ./Colorize.js */ "P3Vg"))).Colorize),blur:async()=>new((await __webpack_require__.e(/*! import() | Blur-js */ "Blur-js").then(__webpack_require__.bind(null, /*! ./Blur.js */ "B2cn"))).Blur),bloom:async()=>new((await __webpack_require__.e(/*! import() | Bloom-js */ "Bloom-js").then(__webpack_require__.bind(null, /*! ./Bloom.js */ "mxcV"))).Bloom),opacity:async()=>new((await __webpack_require__.e(/*! import() | Opacity-js */ "Opacity-js").then(__webpack_require__.bind(null, /*! ./Opacity.js */ "T/wP"))).Opacity),"drop-shadow":async()=>new((await __webpack_require__.e(/*! import() | DropShadow-js */ "DropShadow-js").then(__webpack_require__.bind(null, /*! ./DropShadow.js */ "eylR"))).DropShadow)};class s{constructor(e){this._requestRender=e,this._effectMap=new Map,this._effectPromiseMap=new Map}dispose(){this._requestRender&&(this._requestRender=null),this._effectMap.forEach((e=>e.dispose())),this._effectMap.clear(),this._effectPromiseMap.clear()}getPostProcessingEffects(t){if(!t||0===t.length)return[];const s=[];for(const o of t){const t=e(o.type),r=this._effectMap.get(t);r?s.push({postProcessingEffect:r,effect:o}):this._enablePostProcessingEffect(t)}return s}async _enablePostProcessingEffect(e){const t=await this._loadPostProcessingEffect(e);this._requestRender&&(this._effectMap.set(e,t),this._requestRender.requestRender())}async _loadPostProcessingEffect(e){return this._effectPromiseMap.has(e)||this._effectPromiseMap.set(e,t[e]()),this._effectPromiseMap.get(e)}}


/***/ }),

/***/ "DKFY":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/FilteredFiniteDifference.js ***!
  \********************************************************************************/
/*! exports provided: FilteredFiniteDifference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilteredFiniteDifference", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class t{constructor(t){this.gain=t}update(t){if(this.hasLastValue){const e=this.computeDelta(t);this.updateDelta(e)}this.lastValue=t}reset(){this.lastValue=void 0,this.filteredDelta=void 0}get hasLastValue(){return void 0!==this.lastValue}get hasFilteredDelta(){return void 0!==this.filteredDelta}computeDelta(t){return t-this.lastValue}updateDelta(t){this.hasFilteredDelta?this.filteredDelta=(1-this.gain)*this.filteredDelta+this.gain*t:this.filteredDelta=t}}


/***/ }),

/***/ "DRKG":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/symbolUtils.js ***!
  \*****************************************************************************/
/*! exports provided: keyFromSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyFromSymbol", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function e(e){switch(e.type){case"esriSMS":return`${e.style}.${e.path}`;case"esriSLS":return`${e.style}.${e.cap}`;case"esriSFS":return`${e.style}`;case"esriPFS":case"esriPMS":return e.imageData?`${e.imageData}${e.width}${e.height}`:`${e.url}${e.width}${e.height}`;default:return e.mosaicHash?e.mosaicHash:JSON.stringify(e)}}


/***/ }),

/***/ "E7yl":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/packingUtils.js ***!
  \*************************************************************************/
/*! exports provided: packFloatRGBA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packFloatRGBA", function() { return r; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t=[1,256,65536,16777216],n=[1/256,1/65536,1/16777216,1/4294967296],o=e(new Uint8ClampedArray([255,255,255,255]));function r(n,r,e=0){const c=f(n,0,o);for(let o=0;o<4;o++)r[e+o]=Math.floor(256*u(c*t[o]))}function e(t,o=0){let r=0;for(let e=0;e<4;e++)r+=t[o+e]*n[e];return r}function f(t,n,o){return t<n?n:t>o?o:t}function u(t){return t-Math.floor(t)}


/***/ }),

/***/ "EdjT":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/RotationMomentumEstimator.js ***!
  \*********************************************************************************/
/*! exports provided: RotationMomentumEstimator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotationMomentumEstimator", function() { return a; });
/* harmony import */ var _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MomentumEstimator.js */ "VfAO");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class a extends _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_0__["MomentumEstimator"]{constructor(t=3,a=.01,s=.95,e=12){super(t,a,s,e)}add(t,a){if(this.value.hasLastValue){const a=this.value.lastValue;let s=t-a;for(;s>Math.PI;)s-=2*Math.PI;for(;s<-Math.PI;)s+=2*Math.PI;t=a+s}super.add(t,a)}}


/***/ }),

/***/ "FGzj":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/MaterialManager.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/ProgramCache.js */ "kGdt");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _shaders_MaterialPrograms_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shaders/MaterialPrograms.js */ "297m");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const a=r=>r===_enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLDrawPhase"].HITTEST||r===_enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLDrawPhase"].LABEL_ALPHA,s=r=>(a(r)?1:0)|(r===_enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLDrawPhase"].HIGHLIGHT?2:0),i=({rendererInfo:e,drawPhase:t},o,a,i)=>`${o.getVariationHash()}-${i.join(".")}-${s(t)}-${e.getVariationHash()}-${Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a)&&a.join(".")}`,m=(e,o,s,i)=>{const m=i.reduce(((r,t)=>({...r,[t]:e.driverTestResult[t]})),{}),g={...o.getVariation(),...e.rendererInfo.getVariation(),highlight:e.drawPhase===_enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLDrawPhase"].HIGHLIGHT,id:a(e.drawPhase),...m};if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(s))for(const r of s)g[r]=!0;return g};class g{constructor(r){this._programByKey=new Map,this._programCache=new _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_6__["default"](r)}dispose(){this._programCache&&this._programCache.dispose()}getProgram(r,e,t=[],a=[]){const s=e.vsPath+"."+e.fsPath+JSON.stringify(t)+a.join(".");if(this._programByKey.has(s))return this._programByKey.get(s);const i=a.reduce(((e,t)=>({...e,[t]:r.driverTestResult[t]})),{}),m={...t.map((r=>"string"==typeof r?{name:r,value:!0}:r)).reduce(((r,e)=>({...r,[e.name]:e.value})),{}),...i},{vsPath:g,fsPath:h,attributes:n}=e,p=this._programCache.getProgram(Object(_shaders_MaterialPrograms_js__WEBPACK_IMPORTED_MODULE_8__["createProgramTemplate"])(g,h,n),m);if(!p)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(s,p),p}getMaterialProgram(r,e,t,a,s,g=["ignoresSamplerPrecision"]){const h=i(r,e,s,g);if(this._programByKey.has(h))return this._programByKey.get(h);const n=m(r,e,s,g),p=this._programCache.getProgram(Object(_shaders_MaterialPrograms_js__WEBPACK_IMPORTED_MODULE_8__["createProgramTemplate"])(t,t,a),n);if(!p)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(h,p),p}}/* harmony default export */ __webpack_exports__["default"] = (g);


/***/ }),

/***/ "FrEu":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/Effect.js ***!
  \***************************************************************************/
/*! exports provided: Effect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Effect", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class t{constructor(){this.name=this.constructor.name}}


/***/ }),

/***/ "G+vY":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/animatedFormats/gif.js ***!
  \********************************************************************************/
/*! exports provided: default, getGIFSize, isAnimatedGIF, isGIF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGIFSize", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnimatedGIF", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGIF", function() { return r; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "9MzC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const a={GCExt:249,COMMENT:254,APPExt:255,UNKNOWN:1,IMAGE:44,EOF:59,EXT:33};function r(t){if(!t||0===t.byteLength)return!1;const e=t.constructor===Uint8Array?t:new Uint8Array(t);return 71===e[0]&&73===e[1]&&70===e[2]&&56===e[3]}function h(t){const e=new Uint8ClampedArray(t);let s=6;return[e[s++]+(e[s++]<<8),e[s++]+(e[s++]<<8)]}function o(t){if(!t||0===t.byteLength)return!1;const e=new Uint8Array(t);if(!r(e))return!1;let s=0;for(let i=0,a=e.length-9;i<a&&(0!==e[i]||33!==e[i+1]||249!==e[i+2]||4!==e[i+3]||0!==e[i+8]||44!==e[i+9]&&33!==e[i+9]||(s++,!(s>1)));++i);return s>1}class n{constructor(){this.paused=!1,this.playing=!1,this.waitTillDone=!0,this.loading=!1,this.firstFrameOnly=!1,this.frames=[],this.comment="",this.length=0,this.currentFrameNumber=0,this.frameCount=0,this.playSpeed=1,this.lastFrame=null,this.playOnLoad=!0,this.complete=!1,this.interlaceOffsets=[0,4,2,1],this.interlaceSteps=[8,8,4,2],this._lastUsedFrame=-1}static async create(s,i){const a=new n;try{await a._load(s,i)}catch(r){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(r))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid-resource",`Could not load PNG: ${r.message}`)}return a}play(){this.playing||(this.paused=!1,this.playing=!0,this._play())}pause(){this.paused=!0,this.playing=!1,clearTimeout(this.timerID)}togglePlay(){this.paused||!this.playing?this.play():this.pause()}bindFrame(t,e,s){t.bindTexture(e,s);const i=this.frameChanged();if(i){const t=this.currentFrame,s=t.frameData;e.updateData(0,0,0,t.width,t.height,s),this.updateUsedFrame()}return i}seekFrame(t){clearTimeout(this.timerID),this.currentFrameNumber=t%this.frames.length,this.playing?this._play():this._setCurrentFrame(this.currentFrameNumber)}seek(t){clearTimeout(this.timerID),t<0&&(t=0),t*=1e3,t%=this.length;let e=0;for(;t>this.frames[e].time+this.frames[e].delay&&e<this.frames.length;)e+=1;this.currentFrameNumber=e,this.playing?this._play():this._setCurrentFrame(this.currentFrameNumber)}frameChanged(){return this._lastUsedFrame!==this.currentFrameNumber}updateUsedFrame(){this._lastUsedFrame=this.currentFrameNumber}async _load(s,i){try{this.loading=!0,await this._parse(s,i),this.loading=!1,this.play()}catch(a){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(a))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid-resource","Could not parse gif!")}}_parse(t,e){const s=new l(t);s.pos+=6,this.width=s.data[s.pos++]+(s.data[s.pos++]<<8),this.height=s.data[s.pos++]+(s.data[s.pos++]<<8);const i=s.data[s.pos++];return this.globalColourCount=1<<1+(7&i),s.pos++,s.pos++,128&i&&(this.globalColourTable=this._parseColourTable(this.globalColourCount,s)),new Promise(((t,i)=>{setTimeout((()=>this._parseBlock(s,t,i,e)),0)}))}async _parseBlock(t,e,r,h){if(h&&h.signal&&Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAborted"])(h.signal))return void r(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["createAbortError"])());const o=t.data[t.pos++];if(o===a.IMAGE){if(this._parseImg(t),this.firstFrameOnly)return this._finishedLoading(),void e()}else{if(o===a.EOF)return this._finishedLoading(),void e();this._parseExt(t)}"function"==typeof this.onprogress&&this.onprogress({bytesRead:t.pos,totalBytes:t.data.length,frame:this.frames.length}),setTimeout((()=>this._parseBlock(t,e,r,h)),0)}_parseColourTable(t,e){const s=[];for(let i=0;i<t;i++)s.push([e.data[e.pos++],e.data[e.pos++],e.data[e.pos++]]);return s}_parseImg(t){const e=t=>{const e=this.pixelBufSize/t;this.interlacedBufSize!==this.pixelBufSize&&(this.deinterlaceBuf=new Uint8Array(this.pixelBufSize),this.interlacedBufSize=this.pixelBufSize);let s=0;for(let i=0;i<4;i++)for(let a=this.interlaceOffsets[i];a<e;a+=this.interlaceSteps[i])this.deinterlaceBuf.set(this.pixelBuf.subarray(s,s+t),a*t),s+=t},s={};this.frames.push(s),s.disposalMethod=this.disposalMethod,s.time=this.length,s.delay=10*this.delayTime,this.length+=s.delay,this.transparencyGiven?s.transparencyIndex=this.transparencyIndex:s.transparencyIndex=void 0,s.leftPos=t.data[t.pos++]+(t.data[t.pos++]<<8),s.topPos=t.data[t.pos++]+(t.data[t.pos++]<<8),s.width=t.data[t.pos++]+(t.data[t.pos++]<<8),s.height=t.data[t.pos++]+(t.data[t.pos++]<<8);const i=t.data[t.pos++];s.localColourTableFlag=!!(128&i),s.localColourTableFlag&&(s.localColourTable=this._parseColourTable(1<<1+(7&i),t)),this.pixelBufSize!==s.width*s.height&&(this.pixelBuf=new Uint8Array(s.width*s.height),this.pixelBufSize=s.width*s.height),this._lzwDecode(t.data[t.pos++],t.readSubBlocksB()),64&i?(s.interlaced=!0,e(s.width)):s.interlaced=!1,this._processFrame(s)}_lzwDecode(t,e){let s,i,a,r,h,o,n,l,d;a=i=0;let p=[];const u=1<<t,m=u+1;for(r=t+1,d=!1;!d;){for(o=h,h=0,s=0;s<r;s++)e[a>>3]&1<<(7&a)&&(h|=1<<s),a++;if(h===u){for(p=[],r=t+1,s=0;s<u;s++)p[s]=[s];p[u]=[],p[m]=null}else{if(h===m)return void(d=!0);for(h>=p.length?p.push(p[o].concat(p[o][0])):o!==u&&p.push(p[o].concat(p[h][0])),n=p[h],l=n.length,s=0;s<l;s++)this.pixelBuf[i++]=n[s];p.length===1<<r&&r<12&&r++}}}_processFrame(t){t.image=document.createElement("canvas"),t.image.width=this.width,t.image.height=this.height,t.ctx=t.image.getContext("2d");const e=t.localColourTableFlag?t.localColourTable:this.globalColourTable;null===this.lastFrame&&(this.lastFrame=t);const s=2===this.lastFrame.disposalMethod||3===this.lastFrame.disposalMethod;s||t.ctx.drawImage(this.lastFrame.image,0,0,this.width,this.height);const i=t.ctx.getImageData(t.leftPos,t.topPos,t.width,t.height),a=t.transparencyIndex,r=i.data,h=t.interlaced?this.deinterlaceBuf:this.pixelBuf,o=h.length;let n,l,d=0;for(let p=0;p<o;p++)n=h[p],l=e[n],a!==n?(r[d++]=l[0],r[d++]=l[1],r[d++]=l[2],r[d++]=255):s?(r[d+3]=0,d+=4):d+=4;t.ctx.putImageData(i,t.leftPos,t.topPos),this.lastFrame=t}_parseExt(t){const e=t.data[t.pos++];e===a.GCExt?this._parseGCExt(t):e===a.COMMENT?this.comment+=t.readSubBlocks():e===a.APPExt?this._parseAppExt(t):(e===a.UNKNOWN&&(t.pos+=13),t.readSubBlocks())}_parseAppExt(t){t.pos+=1,"NETSCAPE"===t.getString(8)?t.pos+=8:(t.pos+=3,t.readSubBlocks())}_parseGCExt(t){t.pos++;const e=t.data[t.pos++];this.disposalMethod=(28&e)>>2,this.transparencyGiven=!!(1&e),this.delayTime=t.data[t.pos++]+(t.data[t.pos++]<<8),this.transparencyIndex=t.data[t.pos++],t.pos++}_finishedLoading(){this.loading=!1,this.frameCount=this.frames.length,this.lastFrame=null,this.complete=!0,this.disposalMethod=void 0,this.transparencyGiven=void 0,this.delayTime=void 0,this.transparencyIndex=void 0,this.waitTillDone=void 0,this.pixelBuf=void 0,this.deinterlaceBuf=void 0,this.pixelBufSize=void 0,this.deinterlaceBuf=void 0,this.currentFrameNumber=0,this.frames.length>0&&this._setCurrentFrame(0),this.playOnLoad&&this.play()}_play(){let t,e;0!==this.playSpeed?(this.playSpeed<0?(this.currentFrameNumber-=1,this.currentFrameNumber<0&&(this.currentFrameNumber=this.frames.length-1),e=this.currentFrameNumber,e-=1,e<0&&(e=this.frames.length-1),t=1*-this.frames[e].delay/this.playSpeed):(this.currentFrameNumber+=1,this.currentFrameNumber%=this.frames.length,t=1*this.frames[this.currentFrameNumber].delay/this.playSpeed),this._setCurrentFrame(this.currentFrameNumber),this.timerID=window.setTimeout((()=>this._play()),t)):this.pause()}_setCurrentFrame(t){const e=this.frames[t];this.currentFrame={frameData:e.image,top:0,left:0,width:this.width,height:this.height}}}class l{constructor(t){this.pos=0,this.data=new Uint8ClampedArray(t),this.len=this.data.length}getString(t){let e="";for(;t--;)e+=String.fromCharCode(this.data[this.pos++]);return e}readSubBlocks(){let t,e,s="";do{for(e=t=this.data[this.pos++];e--;)s+=String.fromCharCode(this.data[this.pos++])}while(0!==t&&this.pos<this.len);return s}readSubBlocksB(){let t,e;const s=[];do{for(e=t=this.data[this.pos++];e--;)s.push(this.data[this.pos++])}while(0!==t&&this.pos<this.len);return s}}/* harmony default export */ __webpack_exports__["default"] = (n);


/***/ }),

/***/ "JlMO":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/navigation/actions/Pan.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../geometry/Point.js */ "SuVq");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../geometry.js */ "4GrV");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../Viewpoint.js */ "y3LX");
/* harmony import */ var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../viewpointUtils.js */ "qYtE");
/* harmony import */ var _navigation_PanPlanarMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../navigation/PanPlanarMomentumEstimator.js */ "TkeS");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let c=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(t){super(t),this.animationTime=0,this.momentumEstimator=new _navigation_PanPlanarMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_17__["PanPlanarMomentumEstimator"](500,6,.92),this.momentum=null,this.tmpMomentum=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_13__["c"])(),this.momentumFinished=!1,this.viewpoint=new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_15__["default"]({targetGeometry:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__["default"],scale:0,rotation:0}),this.watch("momentumFinished",(t=>{t&&this.navigation.stop()}))}begin(t,i){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(i),this.previousDrag=i}update(t,i){this.addToEstimator(i);let o=i.center.x,s=i.center.y;const e=this.previousDrag;o=e?e.center.x-o:-o,s=e?s-e.center.y:s,t.viewpoint=Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_16__["translateBy"])(this.viewpoint,t.viewpoint,[o||0,s||0]),this.previousDrag=i}end(t,i){this.addToEstimator(i);const o=t.navigation.momentumEnabled;this.momentum=o?this.momentumEstimator.evaluateMomentum():null,this.animationTime=0,this.momentum&&this.onAnimationUpdate(t),this.previousDrag=null,this.navigation.end()}addToEstimator(t){const i=t.center.x,o=t.center.y,s=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__["createScreenPointArray"])(-i,o),e=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_13__["f"])(-i,o,0);this.momentumEstimator.add(s,e,.001*t.timestamp)}onAnimationUpdate(t){this.navigation.animationManager.animateContinous(t.viewpoint,((i,o)=>{this.momentumFinished=!this.momentum||this.momentum.isFinished(this.animationTime);const s=.001*o;if(!this.momentumFinished){const o=this.momentum.valueDelta(this.animationTime,s);Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__["a"])(this.tmpMomentum,this.momentum.direction,o),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_16__["translateBy"])(i,i,this.tmpMomentum),t.constraints.constrainByGeometry(i)}this.animationTime+=s}))}stopMomentumNavigation(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],c.prototype,"momentumFinished",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],c.prototype,"viewpoint",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],c.prototype,"navigation",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.navigation.actions.Pan")],c);var d=c;/* harmony default export */ __webpack_exports__["default"] = (d);


/***/ }),

/***/ "KOSm":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/navigation/actions/Rotate.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../geometry/Point.js */ "SuVq");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../geometry.js */ "4GrV");
/* harmony import */ var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../Viewpoint.js */ "y3LX");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../viewpointUtils.js */ "qYtE");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const v=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_13__["a"])(),d=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_13__["a"])();let j=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(e){super(e),this._previousCenter=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_13__["a"])(),this.viewpoint=new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_12__["default"]({targetGeometry:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__["default"],scale:0,rotation:0})}begin(e,t){this.navigation.begin(),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__["s"])(this._previousCenter,t.center.x,t.center.y)}update(e,t){const{state:{size:o,padding:r}}=e;Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__["s"])(v,t.center.x,t.center.y),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_15__["getAnchor"])(d,o,r),e.viewpoint=Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_15__["rotateBy"])(this.viewpoint,e.state.paddedViewState.viewpoint,Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_15__["angleBetween"])(d,this._previousCenter,v)),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__["c"])(this._previousCenter,v)}end(){this.navigation.end()}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],j.prototype,"viewpoint",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],j.prototype,"navigation",void 0),j=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.actions.Rotate")],j);var h=j;/* harmony default export */ __webpack_exports__["default"] = (h);


/***/ }),

/***/ "KVK4":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionEngine.js ***!
  \***************************************************************************************/
/*! exports provided: CollisionEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollisionEngine", function() { return f; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions.js */ "jIHu");
/* harmony import */ var _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CollisionGrid.js */ "1agI");
/* harmony import */ var _LayerCollisionInfo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LayerCollisionInfo.js */ "A+Tu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const l=254,d=255,c=0;function h(t,i){const s=[];t.forEachTile((e=>s.push(e))),s.sort(((e,t)=>e.instanceId-t.instanceId)),s.forEach((t=>{Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t.labelMetrics)&&t.isReady&&i(t,t.labelMetrics.getCursor())}))}class f{constructor(e){this._layers=new Map,this._tilingScheme=e}get collisionInfos(){return Array.from(this._layers.values())}registerLayerView(e,t){if(this._layers.has(e))return;const i=_LayerCollisionInfo_js__WEBPACK_IMPORTED_MODULE_3__["default"].create(e,t,this.collisionInfos,this._tilingScheme);this._layers.set(e,i)}unregisterLayerView(e){if(!this._layers.has(e))return;const t=this._layers.get(e);_LayerCollisionInfo_js__WEBPACK_IMPORTED_MODULE_3__["default"].delete(t.index,this.collisionInfos),this._layers.delete(e)}run(e,t){this._transformMetrics(e),this._runCollision(e,t)}_runCollision(e,t){const[i,o]=e.state.size,r=new _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_2__["CollisionBitsetGrid"](i,o);this._forEachLayer(((e,i)=>{const s=e.zoomRanges.some((e=>"none"===e.deconflictionStrategy)),o=i.featuresView.attributeView;s?h(i,((e,t)=>{for(;t.nextId();)o.setLabelMinZoom(t.id,c)})):(this._prepare(i),this._collideVisible(r,i,t),this._collideInvisible(r,i))}))}_isFiltered(e,s,o){const r=s.getFilterFlags(e),n=!o.hasFilter||!!(r&_definitions_js__WEBPACK_IMPORTED_MODULE_1__["FILTER_FLAG_0"]),a=!o.effect||o.effect.excludedLabelsVisible||!!(r&_definitions_js__WEBPACK_IMPORTED_MODULE_1__["EFFECT_FLAG_0"]);return!(n&&a)}_prepare(e){const t=e.featuresView.attributeView,i=new Set;h(e,((s,o)=>{for(;o.nextId();){if(i.has(o.id))continue;if(i.add(o.id),this._isFiltered(o.id,t,e.layerView)){t.setLabelMinZoom(o.id,l);continue}t.getLabelMinZoom(o.id)!==c?t.setLabelMinZoom(o.id,d):t.setLabelMinZoom(o.id,c)}}))}_collideVisible(e,t,i){const s=t.featuresView.attributeView,a=new Set;h(t,((t,d)=>{for(;d.nextId();)if(!a.has(d.id))if(t.key.level===i){if(0===s.getLabelMinZoom(d.id)){switch(e.insertMetrics(d)){case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_2__["OUTSIDE_EXTENT"]:break;case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_2__["HAS_COLLISION"]:s.setLabelMinZoom(d.id,l),a.add(d.id);break;case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_2__["NONE"]:s.setLabelMinZoom(d.id,c),a.add(d.id)}}}else s.setLabelMinZoom(d.id,l)}))}_collideInvisible(e,t){const i=t.featuresView.attributeView,s=new Set;h(t,((t,a)=>{for(;a.nextId();)if(!s.has(a.id)&&i.getLabelMinZoom(a.id)===d){switch(e.insertMetrics(a)){case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_2__["OUTSIDE_EXTENT"]:break;case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_2__["HAS_COLLISION"]:i.setLabelMinZoom(a.id,d),s.add(a.id);break;case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_2__["NONE"]:i.setLabelMinZoom(a.id,c),s.add(a.id)}}}))}_transformMetrics(e){this._forEachLayer(((t,i)=>{h(i,((s,o)=>{const r=i.featuresView.attributeView,n=s.transforms.labelMat2d;n[4]=Math.round(n[4]),n[5]=Math.round(n[5]);const a=n[4],l=n[5],d="polyline"===t.geometryType;for(;o.next();){const i=o.boundsCount,s=o.anchorX,c=o.anchorY;let h=0,f=0;if(t.hasVV()){const e=r.getVVSize(o.id),i=t.vvEval(e),s=isNaN(i)||null==i||i===1/0?o.size:i;h=o.directionX*(s/2),f=o.directionY*(s/2)}for(let t=0;t<i;t++){let i=s,r=o.anchorY;if(d){let s=i+o.boundsCenterX(t)+h,d=r+o.boundsCenterY(t)+f;e.state.rotation?(s=n[0]*s+n[2]*d+n[4],d=n[1]*s+n[3]*d+n[5]):(s+=a,d+=l),o.setBoundsComputedAnchorX(t,Math.floor(s)),o.setBoundsComputedAnchorY(t,Math.floor(d))}else{e.state.rotation?(i=n[0]*s+n[2]*c+n[4],r=n[1]*s+n[3]*c+n[5]):(i+=a,r+=l);const d=i+o.boundsCenterX(t)+h,u=r+o.boundsCenterY(t)+f;o.setBoundsComputedAnchorX(t,d),o.setBoundsComputedAnchorY(t,u)}}}}))}))}_forEachLayer(e){const t=[];this._layers.forEach((e=>t.push(e))),t.sort(((e,t)=>e.order-t.order)),t.forEach((t=>{var i;const s=null==(i=t.layerView)?void 0:i.tileRenderer;s&&e(t,s)}))}}


/***/ }),

/***/ "L/m8":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/HighlightPrograms.js ***!
  \**************************************************************************************/
/*! exports provided: blur, highlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blur", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlight", function() { return r; });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ "vpBa");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const r={shaders:{vertexShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("highlight/textured.vert"),fragmentShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("highlight/highlight.frag")},attributes:{a_position:0,a_texcoord:1}},e={shaders:{vertexShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("highlight/textured.vert"),fragmentShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("highlight/blur.frag")},attributes:{a_position:0,a_texcoord:1}};


/***/ }),

/***/ "N4te":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WebGLDriverTest.js ***!
  \****************************************************************************/
/*! exports provided: testSamplerPrecision, testWebGLDriver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testSamplerPrecision", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testWebGLDriver", function() { return p; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _webgl_Program_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/Program.js */ "jjdI");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_testSVGPremultipliedAlpha_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/testSVGPremultipliedAlpha.js */ "N3sV");
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VertexStream.js */ "gjrC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const a=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.engine.webgl.WebGLDriverTest");class l{constructor(e){this.svgAlwaysPremultipliesAlpha=!1,this._ignoresSamplerPrecision=null,this._context=e,Object(_webgl_testSVGPremultipliedAlpha_js__WEBPACK_IMPORTED_MODULE_7__["testSVGPremultipliedAlpha"])(e).then((e=>{this.svgAlwaysPremultipliesAlpha=!e}))}get ignoresSamplerPrecision(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this._ignoresSamplerPrecision)&&(this._ignoresSamplerPrecision=m(this._context)),this._ignoresSamplerPrecision}}const p=e=>new l(e),m=e=>{const r=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__["default"](e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),n="\nprecision highp float;\n\nattribute vec2 a_pos;\n\nuniform highp sampler2D u_texture;\nvarying vec4 v_color;\n\nfloat getBit(in float bitset, in int bitIndex) {\n  float offset = pow(2.0, float(bitIndex));\n\n  return mod(floor(bitset / offset), 2.0);\n}\n\nvoid main() {\n  vec4 value = texture2D(u_texture, vec2(0.0));\n\n  float bit = getBit(value.x * 255.0, 1);\n\n  v_color = bit * vec4(1.0);\n\n  gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n}\n",l="\nprecision highp float;\n\nvarying vec4 v_color;\n\nvoid main() {\n  gl_FragColor = v_color;\n}\n",p=new Uint8Array(4),m=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_8__["default"](e,[0,0,1,0,0,1,1,1]),g=new _webgl_Program_js__WEBPACK_IMPORTED_MODULE_3__["default"](e,n,l,{a_pos:0}),c=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__["default"](e,{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1},new Uint8Array([2,255,0,0]));g.setUniform1i("u_texture",0),e.bindTexture(c,0);const d=e.getBoundFramebufferObject();e.bindFramebuffer(r),e.bindProgram(g);const{x:h,y:u,width:w,height:f}=e.getViewport();e.setViewport(0,0,1,1),m.draw(),e.setViewport(h,u,w,f),r.readPixels(0,0,1,1,6408,5121,p),g.dispose(),m.dispose(),r.dispose();const b=255!==p[0]||255!==p[1]||255!==p[2]||255!==p[3];return b&&a.warn(`A problem was detected with your graphics driver. Your driver does not appear to honor sampler precision specifiers, which may result in rendering issues due to numerical instability. We recommend ensuring that your drivers have been updated to the latest version. Applying lowp sampler workaround. [${p[0]}.${p[1]}.${p[2]}.${p[3]}]`),e.bindFramebuffer(d),b};


/***/ }),

/***/ "Nhtl":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLMaterialManager.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _webgl_Program_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../webgl/Program.js */ "jjdI");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _Programs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Programs.js */ "6ldq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class c{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach((e=>e.dispose())),this._programByKey.clear()}getMaterialProgram(r,t,a){const s=t.key<<2|this._getMaterialOptionsValue(t.type,a);if(this._programByKey.has(s))return this._programByKey.get(s);const o=this._getProgramTemplate(t.type),{shaders:n}=o,{vertexShader:i,fragmentShader:c}=n(a),p=t.getShaderHeader(),m=t.getShaderMain(),u=i.replace("#pragma header",p).replace("#pragma main",m),g=new _webgl_Program_js__WEBPACK_IMPORTED_MODULE_2__["default"](r,u,c,t.getAttributeLocations());return this._programByKey.set(s,g),g}_getMaterialOptionsValue(e,r){switch(e){case 0:{const e=r;return(e.pattern?1:0)<<1|(e.id?1:0)}case 1:{const e=r;return(e.pattern?1:0)<<1|(e.id?1:0)}case 2:return r.id?1:0;case 3:{const e=r;return(e.pattern?1:0)<<1|(e.id?1:0)}case 4:{const e=r;return(e.sdf?1:0)<<1|(e.id?1:0)}case 5:return r.id?1:0;case 6:return r.id?1:0;default:return 0}}_getProgramTemplate(e){switch(e){case 0:return _Programs_js__WEBPACK_IMPORTED_MODULE_5__["background"];case 5:return _Programs_js__WEBPACK_IMPORTED_MODULE_5__["circle"];case 1:return _Programs_js__WEBPACK_IMPORTED_MODULE_5__["fill"];case 4:return _Programs_js__WEBPACK_IMPORTED_MODULE_5__["icon"];case 3:return _Programs_js__WEBPACK_IMPORTED_MODULE_5__["line"];case 2:return _Programs_js__WEBPACK_IMPORTED_MODULE_5__["outline"];case 6:return _Programs_js__WEBPACK_IMPORTED_MODULE_5__["text"];default:return null}}}/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "PNHs":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/FeatureEffect.js ***!
  \**********************************************************************************/
/*! exports provided: FeatureEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureEffect", function() { return t; });
/* harmony import */ var _Effect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Effect.js */ "FrEu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class t extends _Effect_js__WEBPACK_IMPORTED_MODULE_0__["Effect"]{constructor(e){super(),this.name=this.constructor.name,this.defines=[e]}dispose(){}bind({context:e,painter:t}){this._prev=e.getBoundFramebufferObject();const{width:s,height:r}=e.getViewport(),o=t.getFbos(s,r).effect0;e.bindFramebuffer(o),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind(){}draw(e,t){const{context:s,painter:r,state:o,deltaTime:n}=e,c=r.getPostProcessingEffects(t.effects),i=s.getBoundFramebufferObject();c.length&&t.transitionStep(n,o.scale);for(const{postProcessingEffect:f,effect:a}of c)f.draw(e,i,a);s.bindFramebuffer(this._prev),s.setStencilTestEnabled(!1),r.blitTexture(s,i.colorTexture,9728),s.setStencilTestEnabled(!0)}}


/***/ }),

/***/ "QSUW":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/sources/resolver.js ***!
  \*******************************************************************************************/
/*! exports provided: resolveIncludes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveIncludes", function() { return s; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../webgl/ShaderCompiler.js */ "SfCL");
/* harmony import */ var _shaderRepository_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shaderRepository.js */ "V+Bw");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function o(r){let o=_shaderRepository_js__WEBPACK_IMPORTED_MODULE_6__["default"];return r.split("/").forEach((r=>{o&&(o=o[r])})),o}const t=new _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_5__["default"](o);function s(r){return t.resolveIncludes(r)}


/***/ }),

/***/ "TjnP":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/BufferDataPool.js ***!
  \*************************************************************************************/
/*! exports provided: BufferDataPool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferDataPool", function() { return s; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _DisplayRecordReader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisplayRecordReader.js */ "n21L");
/* harmony import */ var _BufferData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BufferData.js */ "3d+Z");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class s{constructor(){this._pools=new Map}acquire(e,r,s=0){const i=_DisplayRecordReader_js__WEBPACK_IMPORTED_MODULE_2__["DisplayRecordReader"].from(e.records,s),c=i.size();i.next();const n=i.vertexCount,u=i.indexCount,a=this._tryAcquire(e.stride,r,n,u);return _BufferData_js__WEBPACK_IMPORTED_MODULE_3__["BufferData"].createPooled(a,e,r,n,u,c,this)}release(e){e.isReleased||e.destroy()}destroy(){this._pools.forEach((r=>{Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(r)&&r.clear((e=>e.destroy()))}))}_tryAcquire(o,t,s,i){const c=o<<3|t,n=this._pools.get(c);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(n))return null;const u=n.dequeue();return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(u)&&u.vertexBufferSize>=s&&u.indexBufferSize>=i?u:null}}


/***/ }),

/***/ "TkeS":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/PanPlanarMomentumEstimator.js ***!
  \**********************************************************************************/
/*! exports provided: PanPlanarMomentum, PanPlanarMomentumEstimator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanPlanarMomentum", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanPlanarMomentumEstimator", function() { return h; });
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilteredFiniteDifference.js */ "DKFY");
/* harmony import */ var _Momentum_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Momentum.js */ "sz4w");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class c extends _Momentum_js__WEBPACK_IMPORTED_MODULE_3__["Momentum"]{constructor(e,t,i,s,n){super(e,t,i),this.sceneVelocity=s,this.direction=n}value(e){return super.valueFromInitialVelocity(this.sceneVelocity,e)}}class h{constructor(t=300,i=12,s=.84){this.minimumInitialVelocity=t,this.stopVelocity=i,this.friction=s,this.enabled=!0,this.time=new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.6),this.screen=[new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.4),new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.4)],this.scene=[new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.6),new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.6),new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.6)],this.tmpDirection=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])()}add(e,t,i){if(this.enabled){if(this.time.hasLastValue){if(this.time.computeDelta(i)<.015)return}this.screen[0].update(e[0]),this.screen[1].update(e[1]),this.scene[0].update(t[0]),this.scene[1].update(t[1]),this.scene[2].update(t[2]),this.time.update(i)}}reset(){this.screen[0].reset(),this.screen[1].reset(),this.scene[0].reset(),this.scene[1].reset(),this.scene[2].reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.screen[0].hasFilteredDelta)return null;const e=this.screen[0].filteredDelta,t=this.screen[1].filteredDelta,i=Math.sqrt(e*e+t*t)/this.time.filteredDelta;return Math.abs(i)<this.minimumInitialVelocity?null:this.createMomentum(i,this.stopVelocity,this.friction)}createMomentum(e,n,r){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(this.tmpDirection,this.scene[0].filteredDelta,this.scene[1].filteredDelta,this.scene[2].filteredDelta);const h=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["l"])(this.tmpDirection);h>0&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(this.tmpDirection,this.tmpDirection,1/h);const a=h/this.time.filteredDelta;return new c(e,n,r,a,this.tmpDirection)}}


/***/ }),

/***/ "UBW5":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/magnifier/resources.js ***!
  \****************************************************************/
/*! exports provided: loadMagnifierResources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMagnifierResources", function() { return s; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../support/requestImageUtils.js */ "LbAs");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
async function s(s){const r=__webpack_require__.e(/*! import() | mask-svg-js */ "mask-svg-js").then(__webpack_require__.bind(null, /*! ./mask-svg.js */ "RzSf")),i=__webpack_require__.e(/*! import() | overlay-svg-js */ "overlay-svg-js").then(__webpack_require__.bind(null, /*! ./overlay-svg.js */ "o3Xd")),o=Object(_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_1__["requestImage"])((await r).default,{signal:s}),e=Object(_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_1__["requestImage"])((await i).default,{signal:s}),m={mask:await o,overlay:await e};return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["throwIfAborted"])(s),m}


/***/ }),

/***/ "V+Bw":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/sources/shaderRepository.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
var n={background:{"background.frag":"#ifdef PATTERN\nuniform lowp float u_opacity;\nuniform mediump vec2 u_pattern_tl;\nuniform mediump vec2 u_pattern_br;\nuniform sampler2D u_texture;\nvarying mediump vec2 v_tileTextureCoord;\n#else\nuniform lowp vec4 u_color;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main() {\n#ifdef PATTERN\n  mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\n  mediump vec2 samplePos = mix(u_pattern_tl, u_pattern_br, normalizedTextureCoord);\n  lowp vec4 color = texture2D(u_texture, samplePos);\n  gl_FragColor = u_opacity * color;\n#else\n  gl_FragColor = u_color;\n#endif\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}","background.vert":"precision mediump float;\nattribute vec2 a_pos;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform mediump float u_coord_range;\nuniform mediump float u_depth;\n#ifdef PATTERN\nuniform mediump mat3 u_pattern_matrix;\nvarying mediump vec2 v_tileTextureCoord;\n#endif\nvoid main() {\n  gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);\n#ifdef PATTERN\n  v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;\n#endif\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif\n}"},circle:{"circle.frag":"precision lowp float;\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\n  mediump float dist = length(v_offset);\n  mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);\n  lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));\n  gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}","circle.vert":"precision mediump float;\nattribute vec2 a_pos;\n#pragma header\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump vec2 u_circleTranslation;\nuniform mediump float u_depth;\nuniform mediump float u_antialiasingWidth;\nvoid main()\n{\n#pragma main\n  v_color = color * opacity;\n  v_stroke_color = stroke_color * stroke_opacity;\n  v_stroke_width = stroke_width;\n  v_radius = radius;\n  v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));\n  mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\n  v_offset = offset;\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif\n  mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);\n  gl_Position = vec4(pos.xy, u_depth, 1.0);\n}"},fill:{"fill.frag":"precision lowp float;\n#ifdef PATTERN\nuniform mediump vec2 u_pattern_tl;\nuniform mediump vec2 u_pattern_br;\nuniform lowp sampler2D u_texture;\nvarying mediump vec2 v_tileTextureCoord;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvec4 mixColors(vec4 color1, vec4 color2) {\n  float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\n  vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\n  return vec4(compositeColor, compositeAlpha);\n}\nvoid main()\n{\n#ifdef PATTERN\n  mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);\n  mediump vec2 samplePos = mix(u_pattern_tl, u_pattern_br, normalizedTextureCoord);\n  lowp vec4 color = texture2D(u_texture, samplePos);\n  gl_FragColor = v_color[3] * color;\n#else\n  gl_FragColor = v_color;\n#endif\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}","fill.vert":"precision mediump float;\nattribute vec2 a_pos;\n#pragma header\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump float u_depth;\nuniform mediump vec2 u_fillTranslation;\n#ifdef PATTERN\nuniform mediump mat3 u_pattern_matrix;\nvarying mediump vec2 v_tileTextureCoord;\n#endif\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvoid main()\n{\n#pragma main\n  v_color = color * opacity;\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif\n#ifdef PATTERN\n  v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;\n#endif\n  vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);\n  gl_Position = vec4(pos.xy, u_depth, 1.0);\n}"},icon:{"icon.frag":"precision mediump float;\nuniform lowp sampler2D u_texture;\n#ifdef SDF\nuniform lowp vec4 u_color;\nuniform lowp vec4 u_outlineColor;\n#endif\nvarying mediump vec2 v_tex;\nvarying lowp float v_opacity;\nvarying mediump vec2 v_size;\nvarying lowp vec4 v_color;\n#ifdef SDF\nvarying mediump flaot v_halo_width;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\n#include <util/encoding.glsl>\nvec4 mixColors(vec4 color1, vec4 color2) {\n  float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\n  vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\n  return vec4(compositeColor, compositeAlpha);\n}\nvoid main()\n{\n#ifdef SDF\n  lowp vec4 fillPixelColor = v_color;\n  float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;\n  const float softEdgeRatio = 0.248062016;\n  float size = max(v_size.x, v_size.y);\n  float dist = d * softEdgeRatio * size;\n  fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);\n  if (v_halo_width > 0.25) {\n    lowp vec4 outlinePixelColor = u_outlineColor;\n    const float outlineLimitRatio = (16.0 / 86.0);\n    float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));\n    outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);\n    gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);\n  }\n  else {\n    gl_FragColor = v_opacity * fillPixelColor;\n  }\n#else\n  lowp vec4 texColor = texture2D(u_texture, v_tex);\n  gl_FragColor = v_opacity * texColor;\n#endif\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}","icon.vert":"attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_texAngleRange;\nattribute vec4 a_levelInfo;\nattribute float a_opacityInfo;\n#pragma header\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\n#ifdef SDF\nvarying mediump float v_halo_width;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump vec2 u_iconTranslation;\nuniform vec2 u_mosaicSize;\nuniform mediump float u_depth;\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\nuniform lowp float u_keepUpright;\nuniform mediump float u_fadeDuration;\nvarying mediump vec2 v_tex;\nvarying lowp float v_opacity;\nvarying mediump vec2 v_size;\nconst float C_OFFSET_PRECISION = 1.0 / 8.0;\nconst float C_256_TO_RAD = 3.14159265359 / 128.0;\nconst float C_DEG_TO_RAD = 3.14159265359 / 180.0;\nconst float tileCoordRatio = 1.0 / 8.0;\nuniform highp float u_time;\nvoid main()\n{\n#pragma main\n  v_color = color;\n  v_opacity = opacity;\n#ifdef SDF\n  v_halo_width = halo_width;\n#endif\n  float modded = mod(a_opacityInfo, 128.0);\n  float targetOpacity = (a_opacityInfo - modded) / 128.0;\n  float startOpacity = modded / 127.0;\n  float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);\n  v_opacity *= interpolatedOpacity;\n  mediump float a_angle         = a_levelInfo[1];\n  mediump float a_minLevel      = a_levelInfo[2];\n  mediump float a_maxLevel      = a_levelInfo[3];\n  mediump vec2 a_tex            = a_texAngleRange.xy;\n  mediump float delta_z = 0.0;\n  mediump float rotated = mod(a_angle + u_mapRotation, 256.0);\n  delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));\n  delta_z += 1.0 - step(a_minLevel, u_level);\n  delta_z += step(a_maxLevel, u_level);\n  delta_z += step(v_opacity, 0.0);\n  vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;\n  v_size = abs(offset);\n#ifdef SDF\n  offset = (120.0 / 86.0) * offset;\n#endif\n  mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);\n  gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif\n  v_tex = a_tex.xy / u_mosaicSize;\n}"},line:{"line.frag":"varying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\nvarying mediump float v_lineHalfWidth;\nvarying lowp vec4 v_color;\nvarying mediump float v_blur;\n#ifdef PATTERN\nuniform mediump vec2 u_pattern_tl;\nuniform mediump vec2 u_pattern_br;\nuniform mediump vec2 u_spriteSize;\nuniform sampler2D u_texture;\nconst mediump float tileCoordRatio = 8.0;\n#else\nvarying mediump vec2 v_dasharray;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\n  mediump float fragDist = length(v_normal) * v_lineHalfWidth;\n  lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);\n#ifdef PATTERN\n  mediump float relativeTexX = mod((v_accumulatedDistance + v_normal.x * v_lineHalfWidth * tileCoordRatio) / u_spriteSize.x, 1.0);\n  mediump float relativeTexY = 0.5 + (v_normal.y * v_lineHalfWidth / u_spriteSize.y);\n  mediump vec2 texCoord = mix(u_pattern_tl, u_pattern_br, vec2(relativeTexX, relativeTexY));\n  lowp vec4 color = texture2D(u_texture, texCoord);\n  gl_FragColor = alpha * v_color[3] * color;\n#else\n  lowp float dashPos =  mod(v_accumulatedDistance, v_dasharray.x + v_dasharray.y);\n  lowp float dashAlpha = clamp(min(dashPos, v_dasharray.x - dashPos) + 0.5, 0.0, 1.0);\n  dashAlpha = max(sign(-v_dasharray.y), dashAlpha);\n  alpha *= dashAlpha;\n  gl_FragColor = alpha * v_color;\n#endif\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}","line.vert":"attribute vec2 a_pos;\nattribute vec4 a_offsetAndNormal;\nattribute vec2 a_accumulatedDistance;\n#pragma header\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump vec2 u_lineTranslation;\nuniform mediump float u_antialiasing;\nuniform mediump float u_depth;\nvarying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\nconst float scale = 1.0 / 31.0;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvarying mediump float v_lineHalfWidth;\nvarying mediump float v_blur;\n#ifndef PATTERN\nuniform mediump vec2 u_dasharray;\nvarying mediump vec2 v_dasharray;\n#endif\nvoid main()\n{\n#pragma main\n  v_color = color * opacity;\n  v_blur = blur + u_antialiasing;\n  v_normal = a_offsetAndNormal.zw * scale;\n  v_lineHalfWidth += (width + u_antialiasing) * 0.5;\n#ifndef PATTERN\n  v_dasharray = u_dasharray * width;\n#endif\n  mediump vec2 dist = v_lineHalfWidth * scale * a_offsetAndNormal.xy;\n  mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) +  u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);\n  gl_Position = vec4(pos.xy, u_depth, 1.0);\n  v_accumulatedDistance = a_accumulatedDistance.x;\n  #ifdef ID\n    v_id = u_id / 255.0;\n  #endif\n}"},outline:{"outline.frag":"varying lowp vec4 v_color;\nvarying mediump vec2 v_normal;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\n  lowp float dist = abs(v_normal.y);\n  lowp float alpha = smoothstep(1.0, 0.0, dist);\n  gl_FragColor = alpha * v_color;\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}","outline.vert":"attribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_xnormal;\n#pragma header\nvarying lowp vec4 v_color;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump vec2 u_fillTranslation;\nuniform mediump float u_depth;\nuniform mediump float u_outline_width;\nvarying lowp vec2 v_normal;\nconst float scale = 1.0 / 15.0;\nvoid main()\n{\n#pragma main\n  v_color = color * opacity;\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif\n  v_normal = a_xnormal;\n  mediump vec2 dist = u_outline_width * scale * a_offset;\n  mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);\n  gl_Position = vec4(pos.xy, u_depth, 1.0);\n}"},text:{"text.frag":"uniform lowp sampler2D u_texture;\nvarying lowp vec2 v_tex;\nvarying lowp vec4 v_color;\nvarying mediump float v_edgeWidth;\nvarying mediump float v_edgeDistance;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\n  lowp float dist = texture2D(u_texture, v_tex).a;\n  mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);\n  gl_FragColor = alpha * v_color;\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}","text.vert":"attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_texAngleRange;\nattribute vec4 a_levelInfo;\nattribute float a_opacityInfo;\n#pragma header\nvarying lowp vec4 v_color;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump vec2 u_textTranslation;\nuniform vec2 u_mosaicSize;\nuniform mediump float u_depth;\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\nuniform lowp float u_keepUpright;\nuniform mediump float u_fadeDuration;\nvarying lowp vec2 v_tex;\nconst float offsetPrecision = 1.0 / 8.0;\nconst mediump float edgePos = 0.75;\nuniform mediump float u_antialiasingWidth;\nvarying mediump float v_edgeDistance;\nvarying mediump float v_edgeWidth;\nuniform lowp float u_halo;\nconst float sdfFontScale = 1.0 / 24.0;\nconst float sdfPixel = 3.0;\nuniform highp float u_time;\nvoid main()\n{\n#pragma main\n  if (u_halo > 0.5)\n  {\n    v_color = halo_color * opacity;\n    halo_width *= sdfPixel;\n    halo_blur *= sdfPixel;\n  }\n  else\n  {\n    v_color = color * opacity;\n    halo_width = 0.0;\n    halo_blur = 0.0;\n  }\n  float modded = mod(a_opacityInfo, 128.0);\n  float targetOpacity = (a_opacityInfo - modded) / 128.0;\n  float startOpacity = modded / 127.0;\n  float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);\n  v_color *= interpolatedOpacity;\n  mediump float a_angle       = a_levelInfo[1];\n  mediump float a_minLevel    = a_levelInfo[2];\n  mediump float a_maxLevel    = a_levelInfo[3];\n  mediump vec2 a_tex          = a_texAngleRange.xy;\n  mediump float a_visMinAngle    = a_texAngleRange.z;\n  mediump float a_visMaxAngle    = a_texAngleRange.w;\n  mediump float delta_z = 0.0;\n  mediump float angle = mod(a_angle + u_mapRotation, 256.0);\n  if (a_visMinAngle < a_visMaxAngle)\n  {\n    delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));\n  }\n  else\n  {\n    delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));\n  }\n  delta_z += 1.0 - step(a_minLevel, u_level);\n  delta_z += step(a_maxLevel, u_level);\n  delta_z += step(v_color[3], 0.0);\n  v_tex = a_tex.xy / u_mosaicSize;\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif\n  v_edgeDistance = edgePos - halo_width / size;\n  v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;\n  mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);\n  gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);\n}"},util:{"encoding.glsl":"const vec4 rgba2float_factors = vec4(\n    255.0 / (256.0),\n    255.0 / (256.0 * 256.0),\n    255.0 / (256.0 * 256.0 * 256.0),\n    255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n  );\nfloat rgba2float(vec4 rgba) {\n  return dot(rgba, rgba2float_factors);\n}"}};/* harmony default export */ __webpack_exports__["default"] = (n);


/***/ }),

/***/ "VfAO":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/MomentumEstimator.js ***!
  \*************************************************************************/
/*! exports provided: MomentumEstimator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentumEstimator", function() { return s; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilteredFiniteDifference.js */ "DKFY");
/* harmony import */ var _Momentum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Momentum.js */ "sz4w");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class s{constructor(t=2.5,i=.01,s=.95,l=12){this.minimumInitialVelocity=t,this.stopVelocity=i,this.friction=s,this.maxVelocity=l,this.enabled=!0,this.value=new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_1__["FilteredFiniteDifference"](.8),this.time=new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_1__["FilteredFiniteDifference"](.3)}add(t,e){if(this.enabled){if(this.time.hasLastValue){if(this.time.computeDelta(e)<.01)return;if(this.value.hasFilteredDelta){const e=this.value.computeDelta(t);this.value.filteredDelta*e<0&&this.value.reset()}}this.time.update(e),this.value.update(t)}}reset(){this.value.reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.value.hasFilteredDelta)return null;let e=this.value.filteredDelta/this.time.filteredDelta;return e=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(e,-this.maxVelocity,this.maxVelocity),Math.abs(e)<this.minimumInitialVelocity?null:this.createMomentum(e,this.stopVelocity,this.friction)}createMomentum(t,e,s){return new _Momentum_js__WEBPACK_IMPORTED_MODULE_2__["Momentum"](t,e,s)}}


/***/ }),

/***/ "W3i+":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/Painter.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/Renderbuffer.js */ "kbDN");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _brushes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../brushes.js */ "Oxob");
/* harmony import */ var _vectorTiles_shaders_VTLMaterialManager_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../vectorTiles/shaders/VTLMaterialManager.js */ "Nhtl");
/* harmony import */ var _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BitBlitRenderer.js */ "bfVh");
/* harmony import */ var _MaterialManager_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MaterialManager.js */ "FGzj");
/* harmony import */ var _TextureManager_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TextureManager.js */ "v9+0");
/* harmony import */ var _effects_AnimationEffect_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./effects/AnimationEffect.js */ "ac4n");
/* harmony import */ var _effects_BlendEffect_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./effects/BlendEffect.js */ "viFY");
/* harmony import */ var _effects_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./effects/FeatureEffect.js */ "PNHs");
/* harmony import */ var _effects_HighlightEffect_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./effects/HighlightEffect.js */ "0O54");
/* harmony import */ var _effects_HittestEffect_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./effects/HittestEffect.js */ "60EV");
/* harmony import */ var _effects_post_processing_EffectManager_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./effects/post-processing/EffectManager.js */ "Coxz");
/* harmony import */ var _painter_RenderPass_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./painter/RenderPass.js */ "sAsQ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class p{constructor(e,t){this.context=e,this._blitRenderer=new _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_10__["BitBlitRenderer"],this._brushCache=new Map,this._vtlMaterialManager=new _vectorTiles_shaders_VTLMaterialManager_js__WEBPACK_IMPORTED_MODULE_9__["default"],this._blendEffect=new _effects_BlendEffect_js__WEBPACK_IMPORTED_MODULE_14__["BlendEffect"],this.effects={highlight:new _effects_HighlightEffect_js__WEBPACK_IMPORTED_MODULE_16__["default"],hittest:new _effects_HittestEffect_js__WEBPACK_IMPORTED_MODULE_17__["HittestEffect"],integrate:new _effects_AnimationEffect_js__WEBPACK_IMPORTED_MODULE_13__["AnimationEffect"],insideEffect:new _effects_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_15__["FeatureEffect"]("inside"),outsideEffect:new _effects_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_15__["FeatureEffect"]("outside")},this.materialManager=new _MaterialManager_js__WEBPACK_IMPORTED_MODULE_11__["default"](e),this.textureManager=new _TextureManager_js__WEBPACK_IMPORTED_MODULE_12__["default"](t),this._effectsManager=new _effects_post_processing_EffectManager_js__WEBPACK_IMPORTED_MODULE_18__["EffectManager"](t)}get vectorTilesMaterialManager(){return this._vtlMaterialManager}getRenderTarget(){return this._renderTarget}setRenderTarget(e){this._renderTarget=e}getFbos(e,r){if(e!==this._lastWidth||r!==this._lastHeight){if(this._lastWidth=e,this._lastHeight=r,this._fbos){for(const t in this._fbos)this._fbos[t].resize(e,r);return this._fbos}const i={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:e,height:r},n={colorTarget:0,depthStencilTarget:3},o=new _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.context,{width:e,height:r,internalFormat:34041});this._stencilBuf=o,this._fbos={output:new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__["default"](this.context,n,i,o),blend:new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__["default"](this.context,n,i,o),effect0:new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__["default"](this.context,n,i,o)}}return this._fbos}getSharedStencilBuffer(){return this._stencilBuf}beforeRenderLayers(t,s=null){const{width:r,height:i}=t.getViewport();this._prevFBO=t.getBoundFramebufferObject();const n=this.getFbos(r,i);if(t.bindFramebuffer(n.output),t.setColorMask(!0,!0,!0,!0),t.setDepthWriteEnabled(!0),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(s)){const{r:e,g:r,b:i,a:n}=s.color;t.setClearColor(n*e/255,n*r/255,n*i/255,n)}else t.setClearColor(0,0,0,0);t.setClearDepth(1),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT),t.setDepthWriteEnabled(!1)}beforeRenderLayer(e,t,s){const{context:r,blendMode:i,effects:n,requireFBO:o}=e;if(o||m(i,n,s))r.bindFramebuffer(this._fbos.blend),r.setColorMask(!0,!0,!0,!0),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT);else{const e=this._getOutputFBO();r.bindFramebuffer(e)}r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setStencilTestEnabled(!0),r.setClearStencil(t),r.setStencilWriteMask(255),r.clear(r.gl.STENCIL_BUFFER_BIT)}compositeLayer(t,s){const{context:i,blendMode:n,effects:o,requireFBO:a}=t;if(a||m(n,o,s)){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(o)&&o.length>0&&t.drawPhase===_enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLDrawPhase"].MAP&&this._applyEffects(t,o);const a=this._getOutputFBO();i.bindFramebuffer(a),i.setStencilTestEnabled(!1),i.setStencilWriteMask(0),i.setBlendingEnabled(!0),i.setBlendFunctionSeparate(1,771,1,771),i.setColorMask(!0,!0,!0,!0);const h=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(n)?n:"normal";this._blendEffect.draw(t,this._fbos.blend.colorTexture,9728,h,s)}}renderLayers(e){if(e.bindFramebuffer(this._prevFBO),!this._fbos)return;const t=this._getOutputFBO();e.setStencilTestEnabled(!1),e.setStencilWriteMask(0),this.blitTexture(e,t.colorTexture,9728)}dispose(){if(this.materialManager.dispose(),this.textureManager.dispose(),this._blitRenderer&&(this._blitRenderer.dispose(),this._blitRenderer=null),this._brushCache&&(this._brushCache.forEach((e=>e.dispose())),this._brushCache.clear(),this._brushCache=null),this._fbos)for(const e in this._fbos)this._fbos[e]&&this._fbos[e].dispose();if(this.effects)for(const e in this.effects)this.effects[e]&&this.effects[e].dispose();this._vtlMaterialManager&&(this._vtlMaterialManager.dispose(),this._vtlMaterialManager=null),this._prevFBO=null}getGeometryBrush(e){const t={[_enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLGeometryType"].FILL]:_brushes_js__WEBPACK_IMPORTED_MODULE_8__["brushes"].fill,[_enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLGeometryType"].LINE]:_brushes_js__WEBPACK_IMPORTED_MODULE_8__["brushes"].line,[_enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLGeometryType"].MARKER]:_brushes_js__WEBPACK_IMPORTED_MODULE_8__["brushes"].marker,[_enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLGeometryType"].TEXT]:_brushes_js__WEBPACK_IMPORTED_MODULE_8__["brushes"].text}[e];let s=this._brushCache.get(t);return void 0===s&&(s=new t,this._brushCache.set(t,s)),this._brushCache.get(t)}renderObject(e,t,s,r){const i=_brushes_js__WEBPACK_IMPORTED_MODULE_8__["brushes"][s];if(!i)return null;let o=this._brushCache.get(i);void 0===o&&(o=new i,this._brushCache.set(i,o)),o.prepareState(e,t,r),o.draw(e,t,r)}renderObjects(e,t,s,r){const i=_brushes_js__WEBPACK_IMPORTED_MODULE_8__["brushes"][s];if(!i)return null;let o=this._brushCache.get(i);void 0===o&&(o=new i,this._brushCache.set(i,o)),o.drawMany(e,t,r)}registerRenderPass(e){const t=e.brushes.map((e=>(this._brushCache.has(e)||this._brushCache.set(e,new e),this._brushCache.get(e))));return new _painter_RenderPass_js__WEBPACK_IMPORTED_MODULE_19__["default"](t,e)}setHighlightOptions(e){this.effects.highlight.setHighlightOptions(e)}blitTexture(e,t,s,r=1){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(1,771,1,771),e.setColorMask(!0,!0,!0,!0),this._blitRenderer.render(e,t,s,r)}getPostProcessingEffects(e){return this._effectsManager.getPostProcessingEffects(e)}_getOutputFBO(){return null!=this._renderTarget?this._renderTarget:this._fbos.output}_applyEffects(e,t){const{context:s}=e,r=this._effectsManager.getPostProcessingEffects(t);for(const{postProcessingEffect:i,effect:n}of r)s.bindFramebuffer(this._fbos.blend),i.draw(e,this._fbos.blend,n)}}function m(t,s,r){return 1!==r||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t)&&"normal"!==t||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(s)&&s.length>0}/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "Wmhs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/FreeList.js ***!
  \*******************************************************************************/
/*! exports provided: FreeList, List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeList", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return e; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class e{constructor(t){if(!Array.isArray(t))return void(this.data=t);this.data=t[0];let a=this;for(let n=1;n<t.length;n++)a.next=new e([t[n]]),a=a.next}find(t){var e;return t(this.data)?this:null==(e=this.next)?void 0:e.find(t)}max(t,e=this){const a=t(this.data)>t(e.data)?this:e;return this.next?this.next.max(t,a):a}remove(t,e=null){return this===t?e?(e.next=this.next,e):this.next:this.next.remove(t,this)}get last(){return this.next?this.next.last:this}}class a{constructor(a){this._head=null,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a)||(this._head=new e(a))}get head(){return this._head}maxAvailableSpace(){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._head))return 0;const e=this._head.max((t=>t.end-t.start));return e.data.end-e.data.start}firstFit(e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._head))return null;let a=null,n=this._head;for(;n;){const t=n.data.end-n.data.start;if(t===e)return a?a.next=n.next:this._head=n.next,n.data.start;if(t>e){const t=n.data.start;return n.data.start+=e,t}a=n,n=n.next}return null}free(a,n){const r=a+n;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._head)){const t=new e({start:a,end:r});return void(this._head=t)}if(r<=this._head.data.start){if(r===this._head.data.start)return void(this._head.data.start-=n);const t=new e({start:a,end:r});return t.next=this._head,void(this._head=t)}let s=this._head,i=s.next;for(;i;){if(i.data.start>=r){if(s.data.end===a)return void(s.data.end+=n);if(i.data.start===r)return void(i.data.start-=n);const t=new e({start:a,end:r});return t.next=s.next,void(s.next=t)}s=i,i=i.next}if(a===s.data.end)return void(s.data.end+=n);const d=new e({start:a,end:r});s.next=d}}


/***/ }),

/***/ "XDzM":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/Stage.js ***!
  \************************************************************/
/*! exports provided: EXTRA_RENDER_TIME, Stage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTRA_RENDER_TIME", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return T; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/events.js */ "nYOO");
/* harmony import */ var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/scheduling.js */ "WBXD");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_common_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../chunks/common.js */ "QhKk");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/watchUtils.js */ "N5XI");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../support/screenshotUtils.js */ "TcGo");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _webgl_context_util_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../webgl/context-util.js */ "zBXm");
/* harmony import */ var _chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../chunks/mat2d.js */ "opr1");
/* harmony import */ var _chunks_mat2df64_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../chunks/mat2df64.js */ "9+ss");
/* harmony import */ var _support_Timeline_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../support/Timeline.js */ "Snp0");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../webgl/VertexArrayObject.js */ "D6bk");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../webgl/programUtils.js */ "1F90");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./webgl/enums.js */ "yE7X");
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Container.js */ "AMBt");
/* harmony import */ var _webgl_Painter_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./webgl/Painter.js */ "W3i+");
/* harmony import */ var _webgl_Profiler_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./webgl/Profiler.js */ "oQiY");
/* harmony import */ var _webgl_WebGLDriverTest_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./webgl/WebGLDriverTest.js */ "N4te");
/* harmony import */ var _webgl_cpuMapped_BufferDataPool_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./webgl/cpuMapped/BufferDataPool.js */ "TjnP");
/* harmony import */ var _webgl_shaders_StencilPrograms_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./webgl/shaders/StencilPrograms.js */ "3wQP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const E=2e3;class T extends _Container_js__WEBPACK_IMPORTED_MODULE_21__["Container"]{constructor(r,n){super(),this._trash=new Set,this._clipData=new Float32Array(8),this._upperLeft=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_7__["a"])(),this._upperRight=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_7__["a"])(),this._lowerLeft=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_7__["a"])(),this._lowerRight=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_7__["a"])(),this._mat2=Object(_chunks_mat2df64_js__WEBPACK_IMPORTED_MODULE_12__["c"])(),this._clipRendererInitialized=!1,this._supersampleScreenshots=!0,this._pools={bufferData:new _webgl_cpuMapped_BufferDataPool_js__WEBPACK_IMPORTED_MODULE_25__["BufferDataPool"]},this.renderRequested=!1,this.stage=this,this._stationary=!0;const{canvas:o=document.createElement("canvas"),alpha:h=!0,stencil:l=!0,renderContext:d="webgl",supersampleScreenshots:c=!0,contextOptions:p={}}=n;this._canvas=o;const _=Object(_webgl_context_util_js__WEBPACK_IMPORTED_MODULE_10__["createContextOrErrorHTML"])(o,{alpha:h,antialias:!1,depth:!0,stencil:l},d);this.context=new _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_19__["default"](_,p),this.painter=new _webgl_Painter_js__WEBPACK_IMPORTED_MODULE_22__["default"](this.context,this),Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-2d-profiler")&&(this._debugOutput=document.createElement("div"),this._debugOutput.setAttribute("style","margin: 24px 64px; position: absolute; color: red;"),r.appendChild(this._debugOutput)),this._renderParameters={drawPhase:0,state:this.state,pixelRatio:window.devicePixelRatio,stationary:!1,globalOpacity:1,blendMode:null,deltaTime:-1,time:0,inFadeTransition:!1,effects:null,context:this.context,painter:this.painter,timeline:n.timeline||new _support_Timeline_js__WEBPACK_IMPORTED_MODULE_13__["Timeline"],renderingOptions:n.renderingOptions,requireFBO:!1,driverTestResult:Object(_webgl_WebGLDriverTest_js__WEBPACK_IMPORTED_MODULE_24__["testWebGLDriver"])(this.context),profiler:new _webgl_Profiler_js__WEBPACK_IMPORTED_MODULE_23__["Profiler"](this.context,this._debugOutput),dataUploadCounter:0},this._taskHandle=Object(_core_scheduling_js__WEBPACK_IMPORTED_MODULE_3__["addFrameTask"])({render:e=>this.renderFrame(e)}),this._taskHandle.pause(),this._supersampleScreenshots=c,this._lostWebGLContextHandle=Object(_core_events_js__WEBPACK_IMPORTED_MODULE_2__["on"])(o,"webglcontextlost",(()=>{this.emit("webgl-error",{error:new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("webgl-context-lost")})})),o.setAttribute("style","width: 100%; height:100%; display:block;"),r.appendChild(o)}destroy(){this.removeAllChildren(),this._emptyTrash(),this._taskHandle.remove(),this._taskHandle=null,this._boundFBO=null,this._clipFBO&&(this._clipFBO.dispose(),this._clipFBO=null),this._clipVAO&&(this._clipVAO.dispose(),this._clipVAO=null,this._clipVBO=null),this._clipStencilProgram&&(this._clipStencilProgram.dispose(),this._clipStencilProgram=null),this._lostWebGLContextHandle&&(this._lostWebGLContextHandle.remove(),this._lostWebGLContextHandle=null),this._canvas.parentNode&&this._canvas.parentNode.removeChild(this._canvas),this._debugOutput&&this._debugOutput.parentNode&&this._debugOutput.parentNode.removeChild(this._debugOutput),this.highlightOptions=null,this._pools.bufferData.destroy(),this.painter.dispose(),this.context.dispose(),this._canvas=null}get background(){return this._background}set background(e){this._background=e,this.requestRender()}get highlightOptions(){return this._highlightOptions}set highlightOptions(e){this._highlightOptionsHandle&&(this._highlightOptionsHandle.remove(),this._highlightOptionsHandle=null),this._highlightOptions=e,this._highlightOptions&&(this._highlightOptionsHandle=Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__["init"])(this._highlightOptions,"version",(()=>{this.painter.setHighlightOptions(e),this.requestRender()})))}get pools(){return this._pools}get renderingOptions(){return this._renderingOptions}set renderingOptions(e){this._renderingOptions=e,this.requestRender()}get state(){return this._state}set state(e){this._state=e,this.requestRender()}get stationary(){return this._stationary}set stationary(e){this._stationary!==e&&(this._stationary=e,this.requestRender())}trashDisplayObject(e){this._trash.add(e),this.requestRender()}untrashDisplayObject(e){return this._trash.delete(e)}requestRender(){this._lastRenderRequestTime=performance.now(),this.renderRequested||(this.renderRequested=!0,this.emit("will-render"),this._taskHandle.resume())}renderFrame(e){e.time-this._lastRenderRequestTime>=E&&this._taskHandle.pause(),this.renderRequested=!1,this._renderParameters.state=this._state,this._renderParameters.stationary=this.stationary,this._renderParameters.pixelRatio=window.devicePixelRatio,this._renderParameters.globalOpacity=1,this._renderParameters.time=e.time,this._renderParameters.deltaTime=e.deltaTime,this._renderParameters.effects=null,this.processRender(this._renderParameters),this._emptyTrash(),this.emit("post-render")}renderChildren(e){for(const t of this.children)t.beforeRender(e);this._renderChildren(this.children,e);for(const t of this.children)t.afterRender(e)}_renderChildren(t,i){const s=this.context;i.profiler.recordStart("drawLayers"),i.dataUploadCounter=0,this._beforeRenderChildren(i),i.drawPhase=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_20__["WGLDrawPhase"].MAP,this.painter.beforeRenderLayers(s,this.background);for(const e of t)e.processRender(i);this.painter.renderLayers(s),i.drawPhase=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_20__["WGLDrawPhase"].HIGHLIGHT,this.painter.beforeRenderLayers(s);for(const e of t)e.processRender(i);this.painter.renderLayers(s);if(this._isLabelDrawPhaseRequired(t)){i.drawPhase=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_20__["WGLDrawPhase"].LABEL,this.painter.beforeRenderLayers(s);for(const e of t)e.processRender(i);this.painter.renderLayers(s)}if(Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-tiles-debug")){i.drawPhase=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_20__["WGLDrawPhase"].DEBUG,this.painter.beforeRenderLayers(s);for(const e of t)e.processRender(i);this.painter.renderLayers(s)}i.profiler.recordEnd("drawLayers"),this._afterRenderChildren()}_beforeRenderChildren(e){const{context:t}=this,{state:i,pixelRatio:s}=e;t.enforceState();const{size:n,rotation:a}=i,o=Math.round(n[0]*s),h=Math.round(n[1]*s);this._boundFBO=t.getBoundFramebufferObject();if(!(i.spatialReference&&(i.spatialReference._isWrappable?i.spatialReference._isWrappable():i.spatialReference.isWrappable)))return void(this._clipFrame=!1);const l=Object(_chunks_common_js__WEBPACK_IMPORTED_MODULE_5__["t"])(a),d=Math.abs(Math.cos(l)),u=Math.abs(Math.sin(l)),g=Math.round(o*d+h*u),b=Math.round(i.worldScreenWidth);if(g<=b)return void(this._clipFrame=!1);this._clipFBO&&this._clipFBO.width===o&&this._clipFBO.height===h||(this._clipFBO=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_17__["default"](t,{colorTarget:0,depthStencilTarget:3,width:o,height:h}));const w=(this.state.padding.left-this.state.padding.right)/2,O=(this.state.padding.bottom-this.state.padding.top)/2,x=.5*o,y=.5*h,C=1/o,F=1/h,v=b*s*.5,P=.5*(o*u+h*d),j=this._upperLeft,B=this._upperRight,S=this._lowerLeft,E=this._lowerRight;Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["s"])(j,-v,-P),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["s"])(B,v,-P),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["s"])(S,-v,P),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["s"])(E,v,P),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["i"])(this._mat2),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["t"])(this._mat2,this._mat2,[x+w,y+O]),0!==a&&Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["r"])(this._mat2,this._mat2,l),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["t"])(j,j,this._mat2),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["t"])(B,B,this._mat2),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["t"])(S,S,this._mat2),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["t"])(E,E,this._mat2);const T=this._clipData;T.set([2*S[0]*C-1,2*(h-S[1])*F-1,2*E[0]*C-1,2*(h-E[1])*F-1,2*j[0]*C-1,2*(h-j[1])*F-1,2*B[0]*C-1,2*(h-B[1])*F-1]),this._clipRendererInitialized||this._initializeClipRenderer(t),this._clipVBO.setData(T),this._boundFBO=t.getBoundFramebufferObject(),t.bindFramebuffer(this._clipFBO),t.setDepthWriteEnabled(!0),t.setStencilWriteMask(255),t.setClearColor(0,0,0,0),t.setClearDepth(1),t.setClearStencil(0),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT|t.gl.STENCIL_BUFFER_BIT),t.setDepthWriteEnabled(!1),this._clipFrame=!0}_afterRenderChildren(){const e=this.context;if(e.logIno(),this._clipFrame&&this._clipRendererInitialized){if(e.bindFramebuffer(this._boundFBO),this._boundFBO=null,e.bindVAO(this._clipVAO),e.bindProgram(this._clipStencilProgram),e.setDepthWriteEnabled(!1),e.setDepthTestEnabled(!1),e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(7680,7680,7681),e.setStencilWriteMask(255),e.setStencilFunction(519,1,255),e.drawElements(4,6,5123,0),e.bindVAO(),e.setColorMask(!0,!0,!0,!0),null!=this.background){const{r:t,g:i,b:s,a:r}=this.background.color;e.setClearColor(r*t/255,r*i/255,r*s/255,r)}else e.setClearColor(0,0,0,0);e.clear(e.gl.COLOR_BUFFER_BIT),e.setBlendingEnabled(!0),e.setStencilFunction(514,1,255),this.painter.blitTexture(e,this._clipFBO.colorTexture,9728,1),e.setStencilTestEnabled(!1)}}doRender(e){const t=this.context,{state:i,pixelRatio:s}=e;this._resizeCanvas(e),this.context.enforceState(),t.setViewport(0,0,s*i.size[0],s*i.size[1]),t.setDepthWriteEnabled(!0),t.setStencilWriteMask(255),super.doRender(e)}async takeScreenshot(e,t){const i=Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_8__["screenshotSuperSampleSettings"])(e,this._supersampleScreenshots,this._state.padding),{framebufferWidth:s,framebufferHeight:r}=i,n=this.context,a=e.layers;let l=this.children;const d={...this._renderParameters,drawPhase:null,globalOpacity:1,stationary:!0,state:this._renderParameters.state.clone(),pixelRatio:i.pixelRatio,time:Date.now(),deltaTime:0,blendMode:null,effects:null,inFadeTransition:!1};if(null!=e.rotation){const t=d.state.viewpoint;t.rotation=e.rotation,d.state.viewpoint=t}a.length>0&&(l=[],a.forEach((e=>{const i=t.find((t=>t.layer.id===e.id));i&&"container"in i&&i.container&&l.push(i.container)})));const c=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_17__["default"](n,{colorTarget:0,depthStencilTarget:3,width:s,height:r}),p=n.getBoundFramebufferObject(),u=n.getViewport();n.bindFramebuffer(c),n.setViewport(0,0,s,r),this._renderChildren(l,d);const _=this._readbackScreenshot(i);n.bindFramebuffer(p),n.setViewport(u.x,u.y,u.width,u.height),this.requestRender();const m=this._ensureScreenshotEncodeCanvas();return Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_8__["encodeResult"])(_,e,m,{flipY:!0,premultipliedAlpha:!0})}_ensureScreenshotEncodeCanvas(){return this._screenshotEncodeCanvas||(this._screenshotEncodeCanvas=document.createElement("canvas")),this._screenshotEncodeCanvas}_readbackScreenshot(e){const{framebufferWidth:t,framebufferHeight:i,region:s,resample:r}=e,n=this.context.gl;if(r){const e=Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_8__["createEmptyImageData"])(t,i,this._ensureScreenshotEncodeCanvas());n.readPixels(0,0,t,i,6408,5121,new Uint8Array(e.data.buffer));const a=Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_8__["createEmptyImageData"])(s.width,s.height,this._ensureScreenshotEncodeCanvas());return Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_8__["resampleHermite"])(e,a,!0,r.region.x,i-(r.region.y+r.region.height),r.region.width,r.region.height)}{const e=Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_8__["createEmptyImageData"])(s.width,s.height,this._ensureScreenshotEncodeCanvas());return n.readPixels(s.x,i-(s.y+s.height),s.width,s.height,6408,5121,new Uint8Array(e.data.buffer)),e}}_resizeCanvas(e){const t=this._canvas,i=t.style,{state:{size:s},pixelRatio:r}=e,n=s[0],a=s[1],o=Math.round(n*r),h=Math.round(a*r);t.width===o&&t.height===h||(t.width=o,t.height=h),i.width=n+"px",i.height=a+"px"}_initializeClipRenderer(e){if(this._clipRendererInitialized)return!0;const t=_webgl_shaders_StencilPrograms_js__WEBPACK_IMPORTED_MODULE_26__["stencil"].attributes,i=Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_18__["createProgram"])(e,_webgl_shaders_StencilPrograms_js__WEBPACK_IMPORTED_MODULE_26__["stencil"]);if(!i)return!1;const s=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_15__["default"].createVertex(e,35040,32),r=new Uint16Array([0,1,2,2,1,3]),n=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_15__["default"].createIndex(e,35044,r),a=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_16__["default"](e,t,{geometry:[{name:"a_pos",count:2,type:5126,offset:0,stride:8,normalized:!1,divisor:0}]},{geometry:s},n);return this._clipStencilProgram=i,this._clipVBO=s,this._clipVAO=a,this._clipRendererInitialized=!0,!0}_emptyTrash(){for(;this._trash.size>0;){const e=Array.from(this._trash);this._trash.clear();for(const t of e)t.processDetach()}}_isLabelDrawPhaseRequired(e){let t=!1;for(const i of e){if(!(i instanceof _Container_js__WEBPACK_IMPORTED_MODULE_21__["Container"])){t=t||!1;break}if(i.hasLabels)return!0;t=t||this._isLabelDrawPhaseRequired(i.children)}return t}}


/***/ }),

/***/ "YbU1":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/SpriteMosaic.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./definitions.js */ "jIHu");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Rect.js */ "qcDN");
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GeometryUtils.js */ "HQFP");
/* harmony import */ var _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RectangleBinPack.js */ "rhr1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
function h(t){return t&&"static"===t.type}class c{constructor(t,e,i,s=0){this._mosaicPages=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects=new Map,this._spriteCopyQueue=[],this.pixelRatio=1,(e<=0||i<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=e,this._pageHeight=i,this._requestRender=t,s>0&&(this._maxItemSize=s),this.pixelRatio=window.devicePixelRatio||1,this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_10__["default"](this._pageWidth,this._pageHeight);const a=Math.floor(this._pageWidth),r=Math.floor(this._pageHeight);this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(a*r)},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0})}getWidth(t){return t>=this._mosaicPages.length?-1:this._mosaicPages[t].size[0]}getHeight(t){return t>=this._mosaicPages.length?-1:this._mosaicPages[t].size[1]}getPageTexture(t){return t<this._mosaicPages.length?this._mosaicPages[t].texture:null}has(t){return this._mosaicRects.has(t)}get itemCount(){return this._mosaicRects.size}getSpriteItem(t){return this._mosaicRects.get(t)}addSpriteItem(t,e,i,s,r,o){if(this._mosaicRects.has(t))return this._mosaicRects.get(t);let c,n,g;if(h(i))[c,n,g]=this._allocateImage(e[0],e[1]);else{c=new _Rect_js__WEBPACK_IMPORTED_MODULE_8__["default"](0,0,e[0],e[1]),n=this._mosaicPages.length;const t=void 0;this._mosaicPages.push({mosaicsData:i,size:e,dirty:!0,texture:t})}if(c.width<=0||c.height<=0)return null;const m={rect:c,width:e[0],height:e[1],sdf:r,simplePattern:o,pixelRatio:1,page:n};return this._mosaicRects.set(t,m),h(i)&&this._copy({rect:c,spriteSize:e,spriteData:i.data,page:n,pageSize:g,repeat:s,sdf:r}),m}hasItemsToProcess(){return 0!==this._spriteCopyQueue.length}processNextItem(){const t=this._spriteCopyQueue.pop();t&&this._copy(t)}getSpriteItems(t){const e={};for(const i of t)e[i]=this.getSpriteItem(i);return e}getMosaicItemPosition(t){const e=this.getSpriteItem(t),s=e&&e.rect;if(!s)return null;s.width=e.width,s.height=e.height;const a=e.width,r=e.height,o=_definitions_js__WEBPACK_IMPORTED_MODULE_3__["SPRITE_PADDING"],h=this._mosaicPages[e.page];return{size:[e.width,e.height],tl:[(s.x+o)/h[0],(s.y+o)/h[1]],br:[(s.x+o+a)/h[0],(s.y+o+r)/h[1]],page:e.page}}bind(e,i,s=0,a=0){const r=this._mosaicPages[s],o=r.mosaicsData;let c=r.texture;if(c||(c=n(e,o,r.size),r.texture=c),c.setSamplingMode(i),h(o))e.bindTexture(c,a),r.dirty&&(c.setData(new Uint8Array(o.data.buffer)),c.generateMipmap());else{const i=o.data,s=i.bindFrame(e,c,a);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._requestRender)&&s&&i.frameCount>0&&this._requestRender.requestRender(),i.bindFrame(e,c,a)}r.dirty=!1}static _copyBits(t,e,i,s,a,r,o,h,c,n,g){let m=s*e+i,p=h*r+o;if(g){p-=r;for(let o=-1;o<=n;o++,m=((o+n)%n+s)*e+i,p+=r)for(let e=-1;e<=c;e++)a[p+e]=t[m+(e+c)%c]}else for(let u=0;u<n;u++){for(let e=0;e<c;e++)a[p+e]=t[m+e];m+=e,p+=r}}_copy(t){if(t.page>=this._mosaicPages.length)return;const s=this._mosaicPages[t.page],a=s.mosaicsData;if(!h(s.mosaicsData))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-invalid-resource","unsuitable data type!");const r=t.spriteData,o=a.data;o&&r||console.error("Source or target images are uninitialized!"),c._copyBits(r,t.spriteSize[0],0,0,o,t.pageSize[0],t.rect.x+_definitions_js__WEBPACK_IMPORTED_MODULE_3__["SPRITE_PADDING"],t.rect.y+_definitions_js__WEBPACK_IMPORTED_MODULE_3__["SPRITE_PADDING"],t.spriteSize[0],t.spriteSize[1],t.repeat),s.dirty=!0}_allocateImage(t,e){t+=2*_definitions_js__WEBPACK_IMPORTED_MODULE_3__["SPRITE_PADDING"],e+=2*_definitions_js__WEBPACK_IMPORTED_MODULE_3__["SPRITE_PADDING"];const s=Math.max(t,e);if(this._maxItemSize&&this._maxItemSize<s){const i=2**Math.ceil(Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_9__["log2"])(t)),s=2**Math.ceil(Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_9__["log2"])(e)),o=new _Rect_js__WEBPACK_IMPORTED_MODULE_8__["default"](0,0,t,e);return this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(i*s)},size:[i,s],dirty:!0,texture:void 0}),[o,this._mosaicPages.length-1,[i,s]]}const c=this._binPack.allocate(t,e);if(c.width<=0){const i=this._mosaicPages[this._currentPage];return!i.dirty&&h(i.mosaicsData)&&(i.mosaicsData.data=null),this._currentPage=this._mosaicPages.length,this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(this._pageWidth*this._pageHeight)},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0}),this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_10__["default"](this._pageWidth,this._pageHeight),this._allocateImage(t,e)}return[c,this._currentPage,[this._pageWidth,this._pageHeight]]}dispose(){this._binPack=null;for(const t of this._mosaicPages){const e=t.texture;e&&e.dispose();const i=t.mosaicsData;if(!h(i)){i.data.pause()}}this._mosaicPages=null,this._mosaicRects.clear()}}function n(t,e,i){return h(e)?new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__["default"](t,{pixelFormat:6408,dataType:5121,width:i[0],height:i[1]},new Uint8Array(e.data.buffer)):new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__["default"](t,{pixelFormat:6408,dataType:5121,samplingMode:9729,wrapMode:33071,width:i[0],height:i[1]},null)}/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "YeA2":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/Buffer.js ***!
  \*****************************************************************************/
/*! exports provided: Buffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buffer", function() { return d; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _FreeList_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FreeList.js */ "Wmhs");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const h=32767,n=h<<16|h;class d{constructor(t,i,s){const r=new Uint32Array(i*s);this.strideInt=s,this.bufferType=t,this.dirty={start:1/0,end:0},this.cpu=r,this.gpu=null,this.clear()}destroy(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(this.gpu,(t=>t.dispose()))}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new _FreeList_js__WEBPACK_IMPORTED_MODULE_6__["FreeList"]({start:0,end:this.cpu.length/this.strideInt}),this.fillPointer=0}get bufferSize(){return this.cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(t,s,r,e){const h=r*this.strideInt,n=s*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,d=new Uint32Array(t,n,h),a=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOrThrow"])(this.freeList.firstFit(r),"First fit region must be defined"),f=a*this.strideInt,u=h*this.strideInt,o=a-s;if(0!==e)for(let i=0;i<d.length;i++)d[i]+=e;return this.cpu.set(d,f),this.dirty.start=Math.min(this.dirty.start,f),this.dirty.end=Math.max(this.dirty.end,f+u),this.fillPointer=Math.max(this.fillPointer,f+u),o}free(t,i,s){const r=t*this.strideInt,e=(t+i)*this.strideInt;if(!0===s)for(let h=t;h!==t+i;h++)this.cpu[h*this.strideInt]=n;this.dirty.start=Math.min(this.dirty.start,r),this.dirty.end=Math.max(this.dirty.end,e),this.freeList.free(t,i)}upload(t){if(this.dirty.end){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this.gpu))return this.gpu=this._createBuffer(t),this.dirty.start=1/0,void(this.dirty.end=0);this.gpu.setSubData(this.cpu,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0}}_createBuffer(t){const i=35048;return"index"===this.bufferType?_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"].createIndex(t,i,this.cpu):_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"].createVertex(t,i,this.cpu)}}


/***/ }),

/***/ "aK+o":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightRenderer.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../webgl/VertexArrayObject.js */ "D6bk");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../webgl/programUtils.js */ "1F90");
/* harmony import */ var _parameters_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parameters.js */ "fGRN");
/* harmony import */ var _shaders_HighlightPrograms_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shaders/HighlightPrograms.js */ "L/m8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class m{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.quadGeometry.dispose(),this._resources.quadVAO.dispose(),this._resources.highlightProgram.dispose(),this._resources.blurProgram.dispose(),this._resources=null)}preBlur(e,s){e.bindTexture(s,_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_HIGHLIGHT_0"]),e.bindProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[1,0,1/this._width,0]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",_parameters_js__WEBPACK_IMPORTED_MODULE_8__["ALPHA_TO_RGBA_CHANNEL_SELECTOR_MATRIX"]),e.bindVAO(this._resources.quadVAO),e.drawArrays(5,0,4),e.bindVAO()}finalBlur(e,s){e.bindTexture(s,_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_HIGHLIGHT_0"]),e.bindProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[0,1,0,1/this._height]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",_parameters_js__WEBPACK_IMPORTED_MODULE_8__["RGBA_TO_RGBA_CHANNEL_SELECTOR_MATRIX"]),e.bindVAO(this._resources.quadVAO),e.drawArrays(5,0,4),e.bindVAO()}renderHighlight(e,s,i){e.bindTexture(s,_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_HIGHLIGHT_0"]),e.bindProgram(this._resources.highlightProgram),i.applyHighlightOptions(e,this._resources.highlightProgram),e.bindVAO(this._resources.quadVAO),e.setBlendingEnabled(!0),e.setBlendFunction(1,771),e.drawArrays(5,0,4),e.bindVAO()}_initialize(o,h,m){this._width=h,this._height=m;const d=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"].createVertex(o,35044,new Int8Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]).buffer),g=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__["default"](o,{a_position:0,a_texcoord:1},{geometry:[{name:"a_position",count:2,type:5120,offset:0,stride:4,normalized:!1},{name:"a_texcoord",count:2,type:5121,offset:2,stride:4,normalized:!1}]},{geometry:d}),l=Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_7__["createProgram"])(o,_shaders_HighlightPrograms_js__WEBPACK_IMPORTED_MODULE_9__["highlight"]),_=Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_7__["createProgram"])(o,_shaders_HighlightPrograms_js__WEBPACK_IMPORTED_MODULE_9__["blur"]);l.setUniform1i("u_texture",_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_HIGHLIGHT_0"]),l.setUniform1i("u_shade",_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_HIGHLIGHT_1"]),l.setUniform4fv("u_sigmas",_parameters_js__WEBPACK_IMPORTED_MODULE_8__["SIGMAS"]),_.setUniform1i("u_texture",_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_HIGHLIGHT_0"]),_.setUniform4fv("u_sigmas",_parameters_js__WEBPACK_IMPORTED_MODULE_8__["SIGMAS"]),this._resources={quadGeometry:d,quadVAO:g,highlightProgram:l,blurProgram:_}}setup(r,e,s){this._resources?(this._width=e,this._height=s):this._initialize(r,e,s)}}/* harmony default export */ __webpack_exports__["default"] = (m);


/***/ }),

/***/ "ac4n":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/AnimationEffect.js ***!
  \************************************************************************************/
/*! exports provided: AnimationEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationEffect", function() { return o; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions.js */ "jIHu");
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VertexStream.js */ "gjrC");
/* harmony import */ var _Effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Effect.js */ "FrEu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class o extends _Effect_js__WEBPACK_IMPORTED_MODULE_3__["Effect"]{constructor(){super(...arguments),this.defines=[],this._desc={vsPath:"fx/integrate",fsPath:"fx/integrate",attributes:{a_position:0}}}dispose(){this._quad&&this._quad.dispose()}bind(){}unbind(){}draw(i,r){if(!r.size)return;const{context:a,renderingOptions:o}=i;this._quad||(this._quad=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_2__["default"](a,[0,0,1,0,0,1,1,1]));const n=a.getBoundFramebufferObject(),{x:m,y:u,width:d,height:f}=a.getViewport();r.bindTextures(a);const c=r.getBlock(_definitions_js__WEBPACK_IMPORTED_MODULE_1__["ATTRIBUTE_DATA_ANIMATION"]);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(c))return;const _=c.getFBO(a),l=c.getFBO(a,1);a.setViewport(0,0,r.size,r.size),this._computeDelta(i,l,o.labelsAnimationTime),this._updateAnimationState(i,l,_),a.bindFramebuffer(n),a.setViewport(m,u,d,f)}_computeDelta(e,t,s){const{context:a,painter:o,displayLevel:n}=e,m=o.materialManager.getProgram(e,this._desc,["delta"]);a.bindFramebuffer(t),a.setClearColor(0,0,0,0),a.clear(a.gl.COLOR_BUFFER_BIT),a.bindProgram(m),m.setUniform1i("u_maskTexture",_definitions_js__WEBPACK_IMPORTED_MODULE_1__["TEXTURE_BINDING_ATTRIBUTE_DATA_0"]),m.setUniform1i("u_sourceTexture",_definitions_js__WEBPACK_IMPORTED_MODULE_1__["TEXTURE_BINDING_ATTRIBUTE_DATA_1"]),m.setUniform1f("u_timeDelta",e.deltaTime),m.setUniform1f("u_animationTime",s),m.setUniform1f("u_zoomLevel",Math.round(10*n)),this._quad.draw()}_updateAnimationState(e,t,i){const{context:r,painter:s}=e,a=s.materialManager.getProgram(e,this._desc,["update"]);r.bindTexture(t.colorTexture,1),r.bindProgram(a),a.setUniform1i("u_sourceTexture",1),r.bindFramebuffer(i),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT),this._quad.draw()}}


/***/ }),

/***/ "bfVh":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/BitBlitRenderer.js ***!
  \****************************************************************************/
/*! exports provided: BitBlitRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitBlitRenderer", function() { return s; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "D6bk");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/programUtils.js */ "1F90");
/* harmony import */ var _shaders_BitBlitPrograms_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shaders/BitBlitPrograms.js */ "q6Gj");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class s{constructor(){this._initialized=!1}dispose(){this._program&&(this._program.dispose(),this._program=null),this._vertexArrayObject&&(this._vertexArrayObject.dispose(),this._vertexArrayObject=null)}render(r,t,e,i){r&&(this._initialized||this._initialize(r),r.setBlendFunctionSeparate(1,771,1,771),r.bindVAO(this._vertexArrayObject),r.bindProgram(this._program),t.setSamplingMode(e),r.bindTexture(t,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",i),r.drawArrays(5,0,4),r.bindTexture(null,0),r.bindVAO())}_initialize(s){if(this._initialized)return!0;const o=_shaders_BitBlitPrograms_js__WEBPACK_IMPORTED_MODULE_7__["bitBlit"].attributes,a=Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__["createProgram"])(s,_shaders_BitBlitPrograms_js__WEBPACK_IMPORTED_MODULE_7__["bitBlit"]);if(!a)return!1;const n={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:4,normalized:!1,divisor:0},{name:"a_tex",count:2,type:5120,offset:2,stride:4,normalized:!1,divisor:0}]},m=new Int8Array(16);m[0]=-1,m[1]=-1,m[2]=0,m[3]=0,m[4]=1,m[5]=-1,m[6]=1,m[7]=0,m[8]=-1,m[9]=1,m[10]=0,m[11]=1,m[12]=1,m[13]=1,m[14]=1,m[15]=1;const p=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__["default"](s,o,n,{geometry:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"].createVertex(s,35044,m)});return this._program=a,this._vertexArrayObject=p,this._initialized=!0,!0}}


/***/ }),

/***/ "cZ4F":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/visualVariableSimpleUtils.js ***!
  \*************************************************************************************************/
/*! exports provided: getSizeForValueSimple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSizeForValueSimple", function() { return r; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../renderers/support/lengthUtils.js */ "m0D6");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const e=Math.PI;function r(t,n){switch(n.transformationType){case"additive":return i(t,n);case"constant":return s(n,t);case"clamped-linear":return u(t,n);case"proportional":return o(t,n);case"stops":return c(t,n);case"real-world-size":return l(t,n);case"identity":return t;case"unknown":return null}}function a(t,n){return"number"==typeof t?t:r(n,t)}function i(t,n){return t+(a(n.minSize,t)||n.minDataValue)}function s(t,n){const e=t.stops;let r=e&&e.length&&e[0].size;return null==r&&(r=t.minSize),a(r,n)}function u(t,n){const e=(t-n.minDataValue)/(n.maxDataValue-n.minDataValue),r=a(n.minSize,t),i=a(n.maxSize,t);return t<=n.minDataValue?r:t>=n.maxDataValue?i:r+e*(i-r)}function o(n,e){const r=n/e.minDataValue,i=a(e.minSize,n),s=a(e.maxSize,n);let u=null;return u=r*i,Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(u,i,s)}function c(t,n){const[e,r,i]=m(t,n.cache.ipData);if(e===r)return a(n.stops[e].size,t);{const s=a(n.stops[e].size,t);return s+(a(n.stops[r].size,t)-s)*i}}function l(r,i){const s=_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_1__["meterIn"][i.valueUnit],u=a(i.minSize,r),o=a(i.maxSize,r),{valueRepresentation:c}=i;let l=null;return l="area"===c?2*Math.sqrt(r/e)/s:"radius"===c||"distance"===c?2*r/s:r/s,Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(l,u,o)}function m(t,n){if(!n)return;let e=0,r=n.length-1;return n.some(((n,a)=>t<n?(r=a,!0):(e=a,!1))),[e,r,(t-n[e])/(n[r]-n[e])]}


/***/ }),

/***/ "cwtj":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/navigation/actions/Pinch.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../geometry/Point.js */ "SuVq");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../geometry.js */ "4GrV");
/* harmony import */ var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../Viewpoint.js */ "y3LX");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../viewpointUtils.js */ "qYtE");
/* harmony import */ var _navigation_RotationMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../navigation/RotationMomentumEstimator.js */ "EdjT");
/* harmony import */ var _navigation_ZoomMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../navigation/ZoomMomentumEstimator.js */ "jm8U");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
let l=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(t){super(t),this._animationTime=0,this._momentumFinished=!1,this._rotationMomentumEstimator=new _navigation_RotationMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_16__["RotationMomentumEstimator"](.6,.15,.95),this._rotationDirection=1,this._zoomDirection=1,this._zoomMomentumEstimator=new _navigation_ZoomMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_17__["ZoomMomentumEstimator"],this._zoomOnly=null,this.zoomMomentum=null,this.rotateMomentum=null,this.viewpoint=new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_12__["default"]({targetGeometry:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__["default"],scale:0,rotation:0}),this.watch("_momentumFinished",(t=>{t&&this.navigation.stop()}))}begin(t,o){this.navigation.begin(),this._rotationMomentumEstimator.reset(),this._zoomMomentumEstimator.reset(),this._zoomOnly=null,this._previousAngle=this._startAngle=o.angle,this._previousRadius=this._startRadius=o.radius,this._previousCenter=o.center,this._updateTimestamp=null,t.constraints.rotationEnabled&&this.addToRotateEstimator(0,o.timestamp),this.addToZoomEstimator(o,1)}update(t,o){null===this._updateTimestamp&&(this._updateTimestamp=o.timestamp);const i=o.angle,s=o.radius,e=o.center,n=Math.abs(180*(i-this._startAngle)/Math.PI),m=Math.abs(s-this._startRadius),a=this._startRadius/s;if(this._previousRadius){const r=s/this._previousRadius;let h=180*(i-this._previousAngle)/Math.PI;this._rotationDirection=h>=0?1:-1,this._zoomDirection=r>=1?1:-1,t.constraints.rotationEnabled?(null===this._zoomOnly&&o.timestamp-this._updateTimestamp>200&&(this._zoomOnly=m-n>0),null===this._zoomOnly||this._zoomOnly?h=0:this.addToRotateEstimator(i-this._startAngle,o.timestamp)):h=0,this.addToZoomEstimator(o,a),this.navigation.setViewpoint([e.x,e.y],1/r,h,[this._previousCenter.x-e.x,e.y-this._previousCenter.y])}this._previousAngle=i,this._previousRadius=s,this._previousCenter=e}end(t){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum(),this._animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(t),this.navigation.end()}addToRotateEstimator(t,o){this._rotationMomentumEstimator.add(t,.001*o)}addToZoomEstimator(t,o){this._zoomMomentumEstimator.add(o,.001*t.timestamp)}canZoomIn(t){const o=t.scale,i=t.constraints.effectiveMaxScale;return 0===i||o>i}canZoomOut(t){const o=t.scale,i=t.constraints.effectiveMinScale;return 0===i||o<i}onAnimationUpdate(t){this.navigation.animationManager.animateContinous(t.viewpoint,((o,i)=>{const s=!this.canZoomIn(t)&&this._zoomDirection>1||!this.canZoomOut(t)&&this._zoomDirection<1,e=!this.rotateMomentum||this.rotateMomentum.isFinished(this._animationTime),n=s||!this.zoomMomentum||this.zoomMomentum.isFinished(this._animationTime),p=.001*i;if(this._momentumFinished=e&&n,!this._momentumFinished){const i=this.rotateMomentum?Math.abs(this.rotateMomentum.valueDelta(this._animationTime,p))*this._rotationDirection*180/Math.PI:0;let s=this.zoomMomentum?Math.abs(this.zoomMomentum.valueDelta(this._animationTime,p)):1;const e=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_13__["a"])(),n=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_13__["a"])();if(this._previousCenter){Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__["s"])(e,this._previousCenter.x,this._previousCenter.y),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_15__["getPaddingScreenTranslation"])(n,t.size,t.padding),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__["h"])(e,e,n);const{constraints:m,scale:p}=t,c=p*s;s<1&&!m.canZoomInTo(c)?(s=p/m.effectiveMaxScale,this.zoomMomentum=null,this.rotateMomentum=null):s>1&&!m.canZoomOutTo(c)&&(s=p/m.effectiveMinScale,this.zoomMomentum=null,this.rotateMomentum=null),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_15__["scaleAndRotateBy"])(o,t.viewpoint,s,i,e,t.size),t.constraints.constrainByGeometry(o)}}this._animationTime+=p}))}stopMomentumNavigation(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop())}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"_momentumFinished",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"viewpoint",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"navigation",void 0),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.navigation.actions.Pinch")],l);var _=l;/* harmony default export */ __webpack_exports__["default"] = (_);


/***/ }),

/***/ "fGRN":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/parameters.js ***!
  \*****************************************************************************************/
/*! exports provided: ALPHA_TO_RGBA_CHANNEL_SELECTOR_MATRIX, HIGHLIGHT_SIZING, RGBA_TO_RGBA_CHANNEL_SELECTOR_MATRIX, SHADE_TEXTURE_SIZE, SIGMAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALPHA_TO_RGBA_CHANNEL_SELECTOR_MATRIX", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIGHLIGHT_SIZING", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBA_TO_RGBA_CHANNEL_SELECTOR_MATRIX", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHADE_TEXTURE_SIZE", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGMAS", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const o=[void 0,void 0,void 0,1],i=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],d=256,n={outlineWidth:.7,outerHaloWidth:.7,innerHaloWidth:.7,outlinePosition:0};


/***/ }),

/***/ "fUoV":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/MagnifierPrograms.js ***!
  \**************************************************************************************/
/*! exports provided: createMagnifierProgram, magnifierProgramTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMagnifierProgram", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magnifierProgramTemplate", function() { return t; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../webgl/programUtils.js */ "1F90");
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sources/resolver.js */ "vpBa");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t={shaders:{vertexShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("magnifier/magnifier.vert"),fragmentShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("magnifier/magnifier.frag")},attributes:{a_pos:0}};function i(e){return Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_5__["createProgram"])(e,t)}


/***/ }),

/***/ "jE2w":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/SDFConverter.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _packingUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./packingUtils.js */ "E7yl");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const i=1e20;class r{constructor(t){this.size=t;const s=document.createElement("canvas");s.width=s.height=t,this._context=s.getContext("2d"),this._gridOuter=new Float64Array(t*t),this._gridInner=new Float64Array(t*t),this._f=new Float64Array(t),this._d=new Float64Array(t),this._z=new Float64Array(t+1),this._v=new Int16Array(t)}dispose(){this._context=this._gridOuter=this._gridInner=this._f=this._d=this._z=this._v=null,this._svg&&(document.body.removeChild(this._svg),this._svg=null)}draw(r,h,n=31){this._initSVG();const o=this._createSVGString(r);return new Promise(((r,d)=>{const a=new Image;a.src="data:image/svg+xml; charset=utf8, "+encodeURIComponent(o),a.onload=()=>{a.onload=null,this._context.clearRect(0,0,this.size,this.size),this._context.drawImage(a,0,0,this.size,this.size);const t=this._context.getImageData(0,0,this.size,this.size),s=new Uint8Array(this.size*this.size*4);for(let e=0;e<this.size*this.size;e++){const s=t.data[4*e+3]/255;this._gridOuter[e]=1===s?0:0===s?i:Math.max(0,.5-s)**2,this._gridInner[e]=1===s?i:0===s?0:Math.max(0,s-.5)**2}this._edt(this._gridOuter,this.size,this.size),this._edt(this._gridInner,this.size,this.size);for(let i=0;i<this.size*this.size;i++){const t=this._gridOuter[i]-this._gridInner[i];Object(_packingUtils_js__WEBPACK_IMPORTED_MODULE_1__["packFloatRGBA"])(.5-t/(2*n),s,4*i)}r(s)};const l=h&&h.signal;l&&Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["onAbort"])(l,(()=>d(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["createAbortError"])())))}))}_initSVG(){if(!this._svg){const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("style","position: absolute;"),t.setAttribute("width","0"),t.setAttribute("height","0"),t.setAttribute("aria-hidden","true"),t.setAttribute("role","presentation"),document.body.appendChild(t),this._svg=t}}_createSVGString(t){const s=document.createElementNS("http://www.w3.org/2000/svg","path");s.setAttribute("d",t),this._svg.appendChild(s);const e=s.getBBox(),i=e.width/e.height,r=this.size/2;let h,n,o,d;if(i>1){n=h=r/e.width;const t=r*(1/i);o=this.size/4,d=r-t/2}else{h=n=r/e.height;o=r-r*i/2,d=this.size/4}const a=-e.x*h+o,l=-e.y*n+d;s.setAttribute("style",`transform: matrix(${h}, 0, 0, ${n}, ${a}, ${l})`);const _=`<svg style="fill:red;" height="${this.size}" width="${this.size}" xmlns="http://www.w3.org/2000/svg">${this._svg.innerHTML}</svg>`;return this._svg.removeChild(s),_}_edt(t,s,e){const i=this._f,r=this._d,h=this._v,n=this._z;for(let o=0;o<s;o++){for(let r=0;r<e;r++)i[r]=t[r*s+o];this._edt1d(i,r,h,n,e);for(let i=0;i<e;i++)t[i*s+o]=r[i]}for(let o=0;o<e;o++){for(let e=0;e<s;e++)i[e]=t[o*s+e];this._edt1d(i,r,h,n,s);for(let e=0;e<s;e++)t[o*s+e]=Math.sqrt(r[e])}}_edt1d(t,s,e,r,h){e[0]=0,r[0]=-i,r[1]=+i;for(let n=1,o=0;n<h;n++){let s=(t[n]+n*n-(t[e[o]]+e[o]*e[o]))/(2*n-2*e[o]);for(;s<=r[o];)o--,s=(t[n]+n*n-(t[e[o]]+e[o]*e[o]))/(2*n-2*e[o]);o++,e[o]=n,r[o]=s,r[o+1]=+i}for(let i=0,n=0;i<h;i++){for(;r[n+1]<i;)n++;s[i]=(i-e[n])*(i-e[n])+t[e[n]]}}}/* harmony default export */ __webpack_exports__["default"] = (r);


/***/ }),

/***/ "jm8U":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/ZoomMomentumEstimator.js ***!
  \*****************************************************************************/
/*! exports provided: ZoomMomentum, ZoomMomentumEstimator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomMomentum", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomMomentumEstimator", function() { return s; });
/* harmony import */ var _Momentum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Momentum.js */ "sz4w");
/* harmony import */ var _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MomentumEstimator.js */ "VfAO");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class r extends _Momentum_js__WEBPACK_IMPORTED_MODULE_0__["Momentum"]{constructor(e,t,r){super(e,t,r)}value(e){const t=super.value(e);return Math.exp(t)}valueDelta(e,t){const r=super.value(e),s=super.value(e+t)-r;return Math.exp(s)}}class s extends _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_1__["MomentumEstimator"]{constructor(e=2.5,t=.01,r=.95,s=12){super(e,t,r,s)}add(e,t){super.add(Math.log(e),t)}createMomentum(e,t,s){return new r(e,t,s)}}


/***/ }),

/***/ "kIoy":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/animatedFormats/apng.js ***!
  \*********************************************************************************/
/*! exports provided: default, getPNGSize, isAnimatedPNG, isPNG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPNGSize", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnimatedPNG", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPNG", function() { return h; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "9MzC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const r=new Uint32Array(256);for(let b=0;b<256;b++){let t=b;for(let e=0;e<8;e++)t=0!=(1&t)?3988292384^t>>>1:t>>>1;r[b]=t}function a(t,e=0,a=t.length-e){let i=-1;for(let n=e,s=e+a;n<s;n++)i=i>>>8^r[255&(i^t[n])];return-1^i}const i=new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Not a PNG"),n=new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Not an animated PNG"),s=new Uint8Array([137,80,78,71,13,10,26,10]);function h(t){const e=t.constructor===Uint8Array?t:new Uint8Array(t);return!s.some(((t,r)=>t!==e[r]))}function u(t){let e,r;return p(new Uint8Array(t),((t,a,i)=>{const n=new DataView(a.buffer);"IHDR"===t&&(e=n.getUint32(i+8),r=n.getUint32(i+12))})),[e,r]}function l(t){const e=new Uint8Array(t);if(!h(e))return!1;let r=!1;return p(e,(t=>!(r="acTL"===t))),r}class o{constructor(){this.width=0,this.height=0,this.numPlays=0,this.playTime=0,this.frames=[],this.paused=!1,this.playing=!1,this.playSpeed=1,this.currentFrameNumber=0,this._lastUsedFrame=-1}static async create(r,a){const i=new o;try{await i._load(r,a)}catch(n){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(n))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid-resource",`Could not load PNG: ${n.message}`)}return i}play(){this.playing||(this.paused=!1,this.playing=!0,this._play())}pause(){this.paused=!0,this.playing=!1,clearTimeout(this.timerID)}togglePlay(){this.paused||!this.playing?this.play():this.pause()}bindFrame(t,e,r){t.bindTexture(e,r);const a=this.frameChanged();if(!a)return!1;const i=this.currentFrame,n=i.frameData,s=e.descriptor;return(i.left||i.top||i.width!==s.width||i.height!==s.height)&&e.setData(null),e.updateData(0,i.left,i.top,i.width,i.height,n),this.updateUsedFrame(),a}frameChanged(){return this._lastUsedFrame!==this.currentFrameNumber}updateUsedFrame(){this._lastUsedFrame=this.currentFrameNumber}async _load(r,a){try{const t=d(this,r);if(t!==this)return t;this._resizeCanvas=document.createElement("canvas"),this._resizeCanvas.width=this.width,this._resizeCanvas.height=this.height,await Promise.all(this.frames.map((t=>t.createImage(this._resizeCanvas))))}catch(i){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(i))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid-resource","Could not parse PNG")}this.play()}_play(){let t,e;if(0===this.playSpeed)return void this.pause();this.playSpeed<0?(this.currentFrameNumber-=1,this.currentFrameNumber<0&&(this.currentFrameNumber=this.frames.length-1),e=this.currentFrameNumber,e-=1,e<0&&(e=this.frames.length-1),t=1*-this.frames[e].delay/this.playSpeed):(this.currentFrameNumber+=1,this.currentFrameNumber%=this.frames.length,t=1*this.frames[this.currentFrameNumber].delay/this.playSpeed);const r=this.frames[this.currentFrameNumber];this.currentFrame={frameData:r.imageData,top:r.top,left:r.left,width:r.width,height:r.height},this.timerID=window.setTimeout((()=>this._play()),t)}}class c{constructor(){this.left=0,this.top=0,this.width=0,this.height=0,this.delay=0,this.disposeOp=0,this.blendOp=0,this.data=null,this.imageData=null}async createImage(t){if(null===this.imageData)return new Promise(((e,r)=>{const a=URL.createObjectURL(this.data),i=document.createElement("img");i.onload=()=>{URL.revokeObjectURL(a),this.imageData=m(i,t),e()},i.onerror=()=>{URL.revokeObjectURL(a),this.imageData=null,r(new Error("Image creation error"))},i.src=a}))}}function m(t,e){e.width=t.width,e.height=t.height;const r=e.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const a=r.getImageData(0,0,t.width,t.height),i=new Uint8Array(a.data);let n;for(let s=0;s<i.length;s+=4)n=i[s+3]/255,i[s]=i[s]*n,i[s+1]=i[s+1]*n,i[s+2]=i[s+2]*n;return new ImageData(new Uint8ClampedArray(i.buffer),t.width,t.height)}function d(t,e){const r=new Uint8Array(e);if(s.some(((t,e)=>t!==r[e])))return i;let a=!1;if(p(r,(t=>!(a="acTL"===t))),!a)return n;const h=[],u=[];let l=null,o=null,m=0;if(p(r,((e,r,a,i)=>{const n=new DataView(r.buffer);switch(e){case"IHDR":l=r.subarray(a+8,a+8+i),t.width=n.getUint32(a+8),t.height=n.getUint32(a+12);break;case"acTL":t.numPlays=n.getUint32(a+8+4);break;case"fcTL":{o&&(t.frames.push(o),m++),o=new c,o.width=n.getUint32(a+8+4),o.height=n.getUint32(a+8+8),o.left=n.getUint32(a+8+12),o.top=n.getUint32(a+8+16);const e=n.getUint16(a+8+20);let r=n.getUint16(a+8+22);0===r&&(r=100),o.delay=1e3*e/r,o.delay<=10&&(o.delay=100),t.playTime+=o.delay,o.disposeOp=n.getUint8(a+8+24),o.blendOp=n.getUint8(a+8+25),o.dataParts=[],0===m&&2===o.disposeOp&&(o.disposeOp=1);break}case"fdAT":o&&o.dataParts.push(r.subarray(a+8+4,a+8+i));break;case"IDAT":o&&o.dataParts.push(r.subarray(a+8,a+8+i));break;case"IEND":u.push(w(r,a,12+i));break;default:h.push(w(r,a,12+i))}})),0===t.frames.length)return n;t.frameCount=t.frames.length;const d=new Blob(h),g=new Blob(u);return t.frames.forEach((t=>{let e=[];e.push(s),l.set(U(t.width),0),l.set(U(t.height),4),e.push(y("IHDR",l)),e.push(d),t.dataParts.forEach((t=>e.push(y("IDAT",t)))),e.push(g),t.data=new Blob(e,{type:"image/png"}),delete t.dataParts,e=null})),t}function p(t,e){const r=new DataView(t.buffer);let a,i,n,s=8;do{i=r.getUint32(s),a=g(t,s+4,4),n=e(a,t,s,i),s+=12+i}while(!1!==n&&"IEND"!==a&&s<t.length)}function g(t,e,r){const a=Array.prototype.slice.call(t.subarray(e,e+r));return String.fromCharCode.apply(String,a)}function f(t){const e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e}function w(t,e,r){const a=new Uint8Array(r);return a.set(t.subarray(e,e+r)),a}function y(t,e){const r=t.length+e.length,i=new Uint8Array(r+8),n=new DataView(i.buffer);n.setUint32(0,e.length),i.set(f(t),4),i.set(e,8);const s=a(i,4,r);return n.setUint32(r+4,s),i}function U(t){return new Uint8Array([t>>>24&255,t>>>16&255,t>>>8&255,255&t])}/* harmony default export */ __webpack_exports__["default"] = (o);


/***/ }),

/***/ "krN3":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GlyphSource.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../request.js */ "Lqtk");
/* harmony import */ var _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/pbf.js */ "ATu9");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class s{constructor(t){for(this._metrics=[],this._bitmaps=[];t.next();)switch(t.tag()){case 1:{const e=t.getMessage();for(;e.next();)switch(e.tag()){case 3:{const t=e.getMessage();let s,a,r,n,i,c,g;for(;t.next();)switch(t.tag()){case 1:s=t.getUInt32();break;case 2:a=t.getBytes();break;case 3:r=t.getUInt32();break;case 4:n=t.getUInt32();break;case 5:i=t.getSInt32();break;case 6:c=t.getSInt32();break;case 7:g=t.getUInt32();break;default:t.skip()}t.release(),s&&(this._metrics[s]={width:r,height:n,left:i,top:c,advance:g},this._bitmaps[s]=a);break}default:e.skip()}e.release();break}default:t.skip()}}getMetrics(t){return this._metrics[t]}getBitmap(t){return this._bitmaps[t]}}class a{constructor(){this._ranges=[]}getRange(t){return this._ranges[t]}addRange(t,e){this._ranges[t]=e}}class r{constructor(t){this._glyphInfo={},this._baseURL=t}getRange(a,r,n){const i=this._getFontStack(a);if(i.getRange(r))return Promise.resolve();const c=256*r,g=c+255,o=this._baseURL.replace("{fontstack}",a).replace("{range}",c+"-"+g);return Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o,{responseType:"array-buffer",...n}).then((t=>{i.addRange(r,new s(new _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__["default"](new Uint8Array(t.data),new DataView(t.data))))}))}getGlyph(t,e){const s=this._getFontStack(t);if(!s)return;const a=Math.floor(e/256);if(a>256)return;const r=s.getRange(a);return r?{metrics:r.getMetrics(e),bitmap:r.getBitmap(e)}:void 0}_getFontStack(t){let e=this._glyphInfo[t];return e||(e=this._glyphInfo[t]=new a),e}}/* harmony default export */ __webpack_exports__["default"] = (r);


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

/***/ "mvnU":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/LabelManager.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/HandleOwner.js */ "kJYu");
/* harmony import */ var _core_throttle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/throttle.js */ "5C/r");
/* harmony import */ var _engine_webgl_collisions_CollisionEngine_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./engine/webgl/collisions/CollisionEngine.js */ "KVK4");
/* harmony import */ var _engine_webgl_collisions_LayerViewSorter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./engine/webgl/collisions/LayerViewSorter.js */ "yCUC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const d=32,u=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.layers.labels.LabelManager");let c=class extends(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_11__["HandleOwnerMixin"])(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_10__["default"])){constructor(e){super(e),this._applyVisibilityPassThrottled=Object(_core_throttle_js__WEBPACK_IMPORTED_MODULE_12__["throttle"])(this._applyVisibilityPass,d,this),this.lastUpdateId=-1,this.updateRequested=!1,this.view=null}initialize(){this.collisionEngine=new _engine_webgl_collisions_CollisionEngine_js__WEBPACK_IMPORTED_MODULE_13__["CollisionEngine"](this.view.featuresTilingScheme),this._layerViewSorter=new _engine_webgl_collisions_LayerViewSorter_js__WEBPACK_IMPORTED_MODULE_14__["LayerViewSorter"](((e,t)=>{this.collisionEngine.registerLayerView(e,t),this.requestUpdate()}),(e=>{this.collisionEngine.unregisterLayerView(e),this.requestUpdate()})),this.handles.add(this.view.allLayerViews.on("change",(e=>{this._layerViewSorter.update(e)})))}destroy(){this._layerViewSorter.destroy(),this._layerViewSorter=null,this.collisionEngine=null,this._applyVisibilityPassThrottled.remove(),this._applyVisibilityPassThrottled=null}get updating(){return this.updateRequested}update(e){this._applyVisibilityPassThrottled(e)}viewChange(){this.requestUpdate()}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}processUpdate(e){this._set("updateParameters",e),this.updateRequested&&(this.updateRequested=!1,this.update(e))}_applyVisibilityPass(e){try{const t=this.view.featuresTilingScheme.getClosestInfoForScale(e.state.scale).level;this.collisionEngine.run(e,t)}catch(t){u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("mapview-labeling","Encountered an error during label decluttering",t))}}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],c.prototype,"updateRequested",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],c.prototype,"updateParameters",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],c.prototype,"updating",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],c.prototype,"view",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.labels.LabelManager")],c);var h=c;/* harmony default export */ __webpack_exports__["default"] = (h);


/***/ }),

/***/ "oQiY":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/Profiler.js ***!
  \*********************************************************************/
/*! exports provided: Profiler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profiler", function() { return o; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Evented.js */ "zm0L");
/* harmony import */ var _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/CircularArray.js */ "lx5q");
/* harmony import */ var _webgl_capabilities_DisjointTimerQuery_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/capabilities/DisjointTimerQuery.js */ "GprA");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const i=Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-2d-profiler");class o{constructor(e,s){if(this._events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__["default"],this._entries=new Map,this._timings=new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_3__["default"](10),!i)return;this._ext=Object(_webgl_capabilities_DisjointTimerQuery_js__WEBPACK_IMPORTED_MODULE_4__["createDisjointTimerQuery"])(e.gl,{}),this._debugOutput=s;const o=e.gl;if(this.enableCommandLogging)for(const t in o)if("function"==typeof o[t]){const e=o[t],s=-1!==t.indexOf("draw");o[t]=(...r)=>(this._events.emit("command",{container:this._currentContainer,pass:this._currentPass,brush:this._currentBrush,method:t,args:r,isDrawCommand:s}),this._currentSummary&&(this._currentSummary.commands++,s&&this._currentSummary.drawCommands++),e.apply(o,r))}}get enableCommandLogging(){return!("object"==typeof i&&i.disableCommands)}recordContainerStart(e){i&&(this._currentContainer=e)}recordContainerEnd(){i&&(this._currentContainer=null)}recordPassStart(e){i&&(this._currentPass=e,this._initSummary())}recordPassEnd(){i&&(this._currentPass=null,this._emitSummary())}recordBrushStart(e){i&&(this._currentBrush=e)}recordBrushEnd(){i&&(this._currentBrush=null)}recordStart(e){if(i&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._ext)){if(this._entries.has(e)){const t=this._entries.get(e),r=this._ext.resultAvailable(t.query),n=this._ext.disjoint();if(r&&!n){const r=this._ext.getResult(t.query)/1e6;let n=0;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._timings.enqueue(r))){const e=this._timings.entries,s=e.length;let t=0;for(const r of e)t+=r;n=t/s}const i=r.toFixed(2),o=n?n.toFixed(2):"--";this.enableCommandLogging?(console.groupCollapsed(`Frame report for ${e}, ${i} ms (${o} last 10 avg)\n${t.commandsLen} Commands (${t.drawCommands} draw)`),console.log("RenderPass breakdown: "),console.table(t.summaries),console.log("Commands: ",t.commands),console.groupEnd()):console.log(`Frame report for ${e}, ${i} ms (${o} last 10 avg)`),this._debugOutput.innerHTML=`${i} (${o})`}for(const e of t.handles)e.remove();this._entries.delete(e)}const t={name:e,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]};this.enableCommandLogging&&(t.handles.push(this._events.on("command",(e=>{t.commandsLen++,t.commands.push(e),e.isDrawCommand&&t.drawCommands++}))),t.handles.push(this._events.on("summary",(e=>{t.summaries.push(e)})))),this._ext.beginTimeElapsed(t.query),this._entries.set(e,t)}}recordEnd(e){i&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._ext)&&this._entries.has(e)&&this._ext.endTimeElapsed()}_initSummary(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0})}_emitSummary(){this.enableCommandLogging&&this._events.emit("summary",this._currentSummary)}}


/***/ }),

/***/ "q6Gj":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BitBlitPrograms.js ***!
  \************************************************************************************/
/*! exports provided: bitBlit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bitBlit", function() { return r; });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ "vpBa");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const r={shaders:{vertexShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("bitBlit/bitBlit.vert"),fragmentShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("bitBlit/bitBlit.frag")},attributes:{a_pos:0,a_tex:1}};


/***/ }),

/***/ "qnLi":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/navigation/ZoomBox.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/screenUtils.js */ "qRWG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const s={container:"esri-zoom-box__container",overlay:"esri-zoom-box__overlay",background:"esri-zoom-box__overlay-background",box:"esri-zoom-box__outline"},a={zoom:"Shift",counter:"Ctrl"};let n=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(t){super(t),this._container=null,this._overlay=null,this._backgroundShape=null,this._boxShape=null,this._box={x:0,y:0,width:0,height:0},this._redraw=this._redraw.bind(this)}destroy(){this.view=null}set view(t){this._handles&&this._handles.forEach((t=>{t.remove()})),this._handles=null,this._destroyOverlay(),this._set("view",t),t&&(t.on("drag",[a.zoom],(t=>this._handleDrag(t,1))),t.on("drag",[a.zoom,a.counter],(t=>this._handleDrag(t,-1))))}_start(){this._createContainer(),this._createOverlay(),this.navigation.begin()}_update(t,e,r,o){this._box.x=t,this._box.y=e,this._box.width=r,this._box.height=o,this._rafId||(this._rafId=requestAnimationFrame(this._redraw))}_end(t,e,r,o,s){const a=this.view,n=a.toMap(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_10__["createScreenPoint"])(t+.5*r,e+.5*o));let h=Math.max(r/a.width,o/a.height);-1===s&&(h=1/h),this._destroyOverlay(),this.navigation.end(),a.goTo({center:n,scale:a.scale*h})}_updateBox(t,e,r,o){const i=this._boxShape;i.setAttributeNS(null,"x",""+t),i.setAttributeNS(null,"y",""+e),i.setAttributeNS(null,"width",""+r),i.setAttributeNS(null,"height",""+o),i.setAttributeNS(null,"class",s.box)}_updateBackground(t,e,r,o){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(t,e,r,o,this.view.width,this.view.height))}_createContainer(){const t=document.createElement("div");t.className=s.container,this.view.root.appendChild(t),this._container=t}_createOverlay(){const t=this.view.width,e=this.view.height,r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttributeNS(null,"d","M 0 0 L "+t+" 0 L "+t+" "+e+" L 0 "+e+" Z"),r.setAttributeNS(null,"class",s.background);const o=document.createElementNS("http://www.w3.org/2000/svg","rect"),i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),i.setAttributeNS(null,"class",s.overlay),i.appendChild(r),i.appendChild(o),this._container.appendChild(i),this._backgroundShape=r,this._boxShape=o,this._overlay=i}_destroyOverlay(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null}_toSVGPath(t,e,r,o,i,s){const a=t+r,n=e+o;return"M 0 0 L "+i+" 0 L "+i+" "+s+" L 0 "+s+" ZM "+t+" "+e+" L "+t+" "+n+" L "+a+" "+n+" L "+a+" "+e+" Z"}_handleDrag(t,e){const r=t.x,o=t.y,i=t.origin.x,s=t.origin.y;let a,n,h,l;switch(r>i?(a=i,h=r-i):(a=r,h=i-r),o>s?(n=s,l=o-s):(n=o,l=s-o),t.action){case"start":this._start();break;case"update":this._update(a,n,h,l);break;case"end":this._end(a,n,h,l,e)}t.stopPropagation()}_redraw(){if(!this._rafId)return;if(this._rafId=null,!this._overlay)return;const{x:t,y:e,width:r,height:o}=this._box;this._updateBox(t,e,r,o),this._updateBackground(t,e,r,o),this._rafId=requestAnimationFrame(this._redraw)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],n.prototype,"navigation",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],n.prototype,"view",null),n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.navigation.ZoomBox")],n);var h=n;/* harmony default export */ __webpack_exports__["default"] = (h);


/***/ }),

/***/ "rhr1":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/RectangleBinPack.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rect.js */ "qcDN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class t{constructor(t,e){this._width=0,this._height=0,this._free=[],this._width=t,this._height=e,this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](0,0,t,e))}get width(){return this._width}get height(){return this._height}allocate(t,e){if(t>this._width||e>this._height)return new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"];let i=null,s=-1;for(let h=0;h<this._free.length;++h){const r=this._free[h];t<=r.width&&e<=r.height&&(null===i||r.y<=i.y&&r.x<=i.x)&&(i=r,s=h)}return null===i?new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"]:(this._free.splice(s,1),i.width<i.height?(i.width>t&&this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x+t,i.y,i.width-t,e)),i.height>e&&this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x,i.y+e,i.width,i.height-e))):(i.width>t&&this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x+t,i.y,i.width-t,i.height)),i.height>e&&this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x,i.y+e,t,i.height-e))),new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x,i.y,t,e))}release(h){for(let t=0;t<this._free.length;++t){const e=this._free[t];if(e.y===h.y&&e.height===h.height&&e.x+e.width===h.x)e.width+=h.width;else if(e.x===h.x&&e.width===h.width&&e.y+e.height===h.y)e.height+=h.height;else if(h.y===e.y&&h.height===e.height&&h.x+h.width===e.x)e.x=h.x,e.width+=h.width;else{if(h.x!==e.x||h.width!==e.width||h.y+h.height!==e.y)continue;e.y=h.y,e.height+=h.height}this._free.splice(t,1),this.release(h)}this._free.push(h)}}/* harmony default export */ __webpack_exports__["default"] = (t);


/***/ }),

/***/ "sAsQ":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/painter/RenderPass.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums.js */ "yE7X");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class a{constructor(r,e){var s;this.brushes=r,this.name=e.name,this.drawPhase=e.drawPhase||_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLDrawPhase"].MAP,this._targetFn=e.target,this.effects=e.effects||[],this.enableDefaultDraw=null!=(s=e.enableDefaultDraw)?s:()=>!0,this.has=e.has}render(e){const{context:s,profiler:t}=e,a=this._targetFn(),o=this.drawPhase&e.drawPhase;if(t.recordPassStart(this.name),o&&(!this.has||Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.has))){this.enableDefaultDraw()&&this._doRender(e,a),t.recordPassEnd();for(const r of this.effects){if(!r.enable())continue;const o=r.apply;t.recordPassStart(this.name+"."+o.name),t.recordBrushStart(o.name);const i=r.args&&r.args(),{x:n,y:h,width:f,height:d}=s.getViewport(),c=s.getBoundFramebufferObject();o.bind(e,i),this._doRender(e,a,o.defines),o.draw(e,i),o.unbind(e,i),s.bindFramebuffer(c),s.setViewport(n,h,f,d),t.recordBrushEnd(),t.recordPassEnd()}}}_doRender(r,t,a){if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t))if(Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__["isArrayLike"])(t)){for(const e of t)if(e.visible)for(const s of this.brushes)r.profiler.recordBrushStart(s.name),s.prepareState(r,e,a),s.draw(r,e,a),r.profiler.recordBrushEnd()}else for(const e of this.brushes)r.profiler.recordBrushStart(e.name),e.prepareState(r,t,a),e.draw(r,t,a),r.profiler.recordBrushEnd()}}/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ }),

/***/ "sz4w":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/Momentum.js ***!
  \****************************************************************/
/*! exports provided: Momentum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Momentum", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
class t{constructor(t,i,o){this._initialVelocity=t,this._stopVelocity=i,this._friction=o,this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction))}get duration(){return this._duration}isFinished(t){return t>this.duration}get friction(){return this._friction}value(t){return this.valueFromInitialVelocity(this._initialVelocity,t)}valueDelta(t,i){const o=this.value(t);return this.value(t+i)-o}valueFromInitialVelocity(t,i){i=Math.min(i,this.duration);const o=1-this.friction;return t*(o**i-1)/Math.log(o)}}


/***/ }),

/***/ "tGAV":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/mapViewDeps.js ***!
  \***********************************************************/
/*! exports provided: LabelManager, Stage, GraphicsView2D, GraphicContainer, MapViewNavigation, MagnifierView2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LabelManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LabelManager.js */ "mvnU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelManager", function() { return _LabelManager_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _engine_Stage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/Stage.js */ "XDzM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return _engine_Stage_js__WEBPACK_IMPORTED_MODULE_1__["Stage"]; });

/* harmony import */ var _layers_graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layers/graphics/GraphicsView2D.js */ "Vh9r");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphicsView2D", function() { return _layers_graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _layers_graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layers/graphics/GraphicContainer.js */ "q03O");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphicContainer", function() { return _layers_graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _navigation_MapViewNavigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/MapViewNavigation.js */ "1dih");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapViewNavigation", function() { return _navigation_MapViewNavigation_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _magnifier_MagnifierView2D_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./magnifier/MagnifierView2D.js */ "0Ht6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MagnifierView2D", function() { return _magnifier_MagnifierView2D_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/



/***/ }),

/***/ "v9+0":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TextureManager.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config.js */ "EyXx");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../request.js */ "Lqtk");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./definitions.js */ "jIHu");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _support_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../support/QueueProcessor.js */ "tUFA");
/* harmony import */ var _util_BidiText_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util/BidiText.js */ "t7mB");
/* harmony import */ var _symbols_cim_Rasterizer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../symbols/cim/Rasterizer.js */ "e4KH");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _fontUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fontUtils.js */ "5ROZ");
/* harmony import */ var _GlyphMosaic_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./GlyphMosaic.js */ "BaZm");
/* harmony import */ var _GlyphSource_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./GlyphSource.js */ "krN3");
/* harmony import */ var _SDFConverter_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SDFConverter.js */ "jE2w");
/* harmony import */ var _SpriteMosaic_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SpriteMosaic.js */ "YbU1");
/* harmony import */ var _animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./animatedFormats/apng.js */ "kIoy");
/* harmony import */ var _animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./animatedFormats/gif.js */ "G+vY");
/* harmony import */ var _util_Result_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./util/Result.js */ "GqaZ");
/* harmony import */ var _util_symbolUtils_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./util/symbolUtils.js */ "DRKG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const j=Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_9__["c"])(),C="arial-unicode-ms-regular",F=126,U=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.engine.webgl.TextureManager"),P=e=>"esriSMS"===e.type&&e.path,B=e=>e.url||e.imageData,G=e=>e.url&&-1!==e.url.indexOf(".gif")||e.contentType&&"image/gif"===e.contentType||e.imageData&&-1!==e.imageData.indexOf("data:image/gif"),L=e=>e.url&&-1!==e.url.indexOf(".png")||e.contentType&&"image/png"===e.contentType||e.imageData&&-1!==e.imageData.indexOf("data:image/png"),O=e=>e.type&&-1!==e.type.toLowerCase().indexOf("3d");function $(e){switch(e.type){case"CIMSolidStroke":case"CIMSolidFill":return!0;case"esriSFS":return"esriSFSSolid"===e.style||"esriSFSNull"===e.style;case"esriSLS":return"esriSLSSolid"===e.style||"esriSLSNull"===e.style;default:return!1}}const k=e=>-1!==e.indexOf("data:image/svg+xml");function q(e){switch(e.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":case"CIMVectorMarker":case"CIMPictureMarker":case"CIMCharacterMarker":return!1;default:return!0}}function D(e){const t=[];for(let i=0;i<e.length;i++)t.push(e.charCodeAt(i));return t}async function A(e,t){const i=e.imageData?`data:${e.contentType};base64,${e.imageData}`:e.url;let r;const n=";base64,";if(-1!==i.indexOf(n)){const e=i.indexOf(n)+n.length,t=i.substring(e),s=atob(t),a=new Uint8Array(s.length);for(let i=0;i<s.length;i++)a[i]=s.charCodeAt(i);r=a.buffer}else try{const{data:e}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_6__["default"])(i,{responseType:"array-buffer",...t});r=e}catch(c){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["isAbortError"])(c))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource",`Could not fetch requested resource at ${i}`)}return r}function N(e,t){const i=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__["pt2px"])(t)*window.devicePixelRatio),s=i>=128?2:4;return Math.min(e,i*s)}const Q=(e,t,i)=>U.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](e,t,i));class E{constructor(e,t,i){this.mosaicType=e,this.page=t,this.sdf=i}static fromMosaic(e,t){return new E(e,t.page,t.sdf)}}class H{constructor(t){this._invalidFontsMap=new Map,this._sdfConverter=new _SDFConverter_js__WEBPACK_IMPORTED_MODULE_17__["default"](F),this._bindingInfos=new Array,this._hashToBindingIndex=new Map,this._rasterizer=new _symbols_cim_Rasterizer_js__WEBPACK_IMPORTED_MODULE_12__["default"],this._ongoingRasterizations=new Map,this._imageRequestQueue=new _support_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_10__["QueueProcessor"]({concurrency:10,process:async(e,t)=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["throwIfAborted"])(t);try{return await Object(_request_js__WEBPACK_IMPORTED_MODULE_6__["default"])(e,{responseType:"image",signal:t})}catch(i){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["isAbortError"])(i))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource",`Could not fetch requested resource at ${e}`,i);throw i}}}),this._spriteMosaic=new _SpriteMosaic_js__WEBPACK_IMPORTED_MODULE_18__["default"](t,2048,2048,500),this._glyphSource=new _GlyphSource_js__WEBPACK_IMPORTED_MODULE_16__["default"](`${_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].fontsUrl}/{fontstack}/{range}.pbf`),this._glyphMosaic=new _GlyphMosaic_js__WEBPACK_IMPORTED_MODULE_15__["default"](1024,1024,this._glyphSource)}dispose(){this._spriteMosaic.dispose(),this._glyphMosaic.dispose(),this._rasterizer.dispose(),this._sdfConverter.dispose(),this._spriteMosaic=null,this._glyphMosaic=null,this._rasterizer=null,this._sdfConverter=null,this._hashToBindingIndex.clear(),this._hashToBindingIndex=null,this._bindingInfos=null,this._ongoingRasterizations.clear(),this._ongoingRasterizations=null,this._imageRequestQueue.clear(),this._imageRequestQueue=null}get sprites(){return this._spriteMosaic}get glyphs(){return this._glyphMosaic}async rasterizeItem(e,i,s,r){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(e))return Q("mapview-null-resource","Unable to rasterize null resource"),null;switch(e.type){case"CIMTextSymbol":case"esriTS":{const t=await this._rasterizeText(e,s,r);return t.forEach((e=>this._setTextureBinding(_enums_js__WEBPACK_IMPORTED_MODULE_13__["MosaicType"].GLYPH,e))),{glyphMosaicItems:t}}case"esriSMS":case"esriPMS":case"esriSFS":case"esriPFS":case"esriSLS":default:{if(O(e))return Q("mapview-invalid-type",`MapView does not support symbol type: ${e.type}`,e),null;const t=await this._rasterizeSpriteSymbol(e,i,r);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_21__["ok"])(t)&&t&&this._setTextureBinding(_enums_js__WEBPACK_IMPORTED_MODULE_13__["MosaicType"].SPRITE,t),{spriteMosaicItem:t}}}}bindTextures(e,t,i,s=!1){if(0===i.textureBinding)return;const r=this._bindingInfos[i.textureBinding-1],a=r.page,n=s?9987:9729;switch(r.mosaicType){case _enums_js__WEBPACK_IMPORTED_MODULE_13__["MosaicType"].SPRITE:{const i=this.sprites.getWidth(a),s=this.sprites.getHeight(a),r=Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_7__["s"])(j,i,s);return this._spriteMosaic.bind(e,n,a,_definitions_js__WEBPACK_IMPORTED_MODULE_8__["TEXTURE_BINDING_SPRITE_ATLAS"]),t.setUniform1i("u_texture",_definitions_js__WEBPACK_IMPORTED_MODULE_8__["TEXTURE_BINDING_SPRITE_ATLAS"]),void t.setUniform2fv("u_mosaicSize",r)}case _enums_js__WEBPACK_IMPORTED_MODULE_13__["MosaicType"].GLYPH:{const i=this.glyphs.width,s=this.glyphs.height,r=Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_7__["s"])(j,i,s);return this._glyphMosaic.bind(e,n,a,_definitions_js__WEBPACK_IMPORTED_MODULE_8__["TEXTURE_BINDING_GLYPH_ATLAS"]),t.setUniform1i("u_texture",_definitions_js__WEBPACK_IMPORTED_MODULE_8__["TEXTURE_BINDING_GLYPH_ATLAS"]),void t.setUniform2fv("u_mosaicSize",r)}default:U.error("mapview-texture-manager",`Cannot handle unknown type ${r.mosaicType}`)}}_hashMosaic(e,t){return 1|e<<1|(t.sdf?1:0)<<2|t.page<<3}_setTextureBinding(e,t){const i=this._hashMosaic(e,t);if(!this._hashToBindingIndex.has(i)){const s=E.fromMosaic(e,t),r=this._bindingInfos.length+1;this._hashToBindingIndex.set(i,r),this._bindingInfos.push(s)}t.textureBinding=this._hashToBindingIndex.get(i)}async _rasterizeText(e,t,i){const s=Object(_fontUtils_js__WEBPACK_IMPORTED_MODULE_14__["getFullyQualifiedFontName"])(e.font),r=this._invalidFontsMap.has(s),a=t||D(Object(_util_BidiText_js__WEBPACK_IMPORTED_MODULE_11__["bidiText"])(e.text)[0]);try{return await this._glyphMosaic.getGlyphItems(r?C:s,a,i)}catch(n){return Q("mapview-invalid-resource",`Couldn't find font ${s}. Falling back to Arial Unicode MS Regular`),this._invalidFontsMap.set(s,!0),this._glyphMosaic.getGlyphItems(C,a,i)}}async _rasterizeSpriteSymbol(e,t,i){if($(e))return null;const r=Object(_util_symbolUtils_js__WEBPACK_IMPORTED_MODULE_22__["keyFromSymbol"])(e);if(this._spriteMosaic.has(r))return this._spriteMosaic.getSpriteItem(r);if(P(e)||B(e))return this._handleAsyncResource(r,e,i);const a=this._rasterizer.rasterizeJSONResource(e,t);if(a){const{size:t,image:i,sdf:s,simplePattern:n}=a;return this._addItemToMosaic(r,t,{type:"static",data:i},q(e),s,n)}return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("TextureManager","unrecognized or null rasterized image")}async _handleAsyncResource(e,t,i){if(this._ongoingRasterizations.has(e))return this._ongoingRasterizations.get(e);let s;s=P(t)?this._handleSVG(t,e,i):this._handleImage(t,e,i),this._ongoingRasterizations.set(e,s);try{await s,this._ongoingRasterizations.delete(e)}catch{this._ongoingRasterizations.delete(e)}return s}async _handleSVG(e,t,i){const s=[F,F],r=await this._sdfConverter.draw(e.path,i);return this._addItemToMosaic(t,s,{type:"static",data:new Uint32Array(r.buffer)},!1,!0,!0)}async _handleGIFOrPNG(e,t,i){const r=await A(e,i);if(Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_21__["ok"])(r)){const o=Object(_animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_20__["isGIF"])(r),c=Object(_animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_19__["isPNG"])(r);if(!o&&!c)return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource","Image data is neither GIF nor PNG!");let h;try{o&&Object(_animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_20__["isAnimatedGIF"])(r)?h=await _animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_20__["default"].create(r,i):c&&Object(_animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_19__["isAnimatedPNG"])(r)&&(h=await _animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_19__["default"].create(r,i))}catch(n){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["isAbortError"])(n))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource","Could not fetch requested resource!")}if(h&&Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_21__["ok"])(h))return this._addItemToMosaic(t,[h.width,h.height],{type:"animated",data:h},q(e),!1,!1);const u=new Blob([r],{type:o?"image/gif":"image/png"}),d=await this._imageFromBlob(u);if(d&&d instanceof HTMLImageElement){let i=d.width,s=d.height;"esriPMS"===e.type&&(i=Math.round(N(d.width,e.width)),s=Math.round(d.height*(i/d.width)));const{size:r,sdf:a,image:n}=this._rasterizer.rasterizeImageResource(i,s,d,e.colorSubstitutions);return this._addItemToMosaic(t,r,{type:"static",data:n},q(e),a,!1)}}return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource","Could not handle resource!")}async _handleImage(e,t,i){if(G(e)||L(e))return this._handleGIFOrPNG(e,t,i);const r=e.imageData?`data:${e.contentType};base64,${e.imageData}`:e.url;try{const{data:s}=await this._imageRequestQueue.push(r,{...i});k(r)&&(s.width=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__["pt2px"])(e.width),s.height=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__["pt2px"])(e.height));let a=s.width,o=s.height;"esriPMS"===e.type&&(a=Math.round(N(s.width,e.width)),o=Math.round(s.height*(a/s.width)));const{size:c,sdf:h,image:u}=this._rasterizer.rasterizeImageResource(a,o,s,e.colorSubstitutions);return this._addItemToMosaic(t,c,{type:"static",data:u},q(e),h,!1)}catch(o){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["isAbortError"])(o))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource",`Could not fetch requested resource at ${r}. ${o.message}`)}}async _imageFromBlob(e){const t=window.URL.createObjectURL(e);try{const{data:e}=await this._imageRequestQueue.push(t);return window.URL.revokeObjectURL(t),e}catch(i){if(window.URL.revokeObjectURL(t),!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["isAbortError"])(i))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource",`Could not fetch requested resource at ${t}`);throw i}}_addItemToMosaic(e,t,i,s,r,a){return this._spriteMosaic.addSpriteItem(e,t,i,s,r,a)}}/* harmony default export */ __webpack_exports__["default"] = (H);


/***/ }),

/***/ "vEyU":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BlendPrograms.js ***!
  \**********************************************************************************/
/*! exports provided: blend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blend", function() { return a; });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ "vpBa");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const r=e=>e.replace("-","_").toUpperCase(),t=e=>`#define ${r(e)}\n`,a={attributes:{a_pos:0,a_tex:1},shaders:r=>({vertexShader:t(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("blend/blend.vert"),fragmentShader:t(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("blend/blend.frag")})};


/***/ }),

/***/ "viFY":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/BlendEffect.js ***!
  \********************************************************************************/
/*! exports provided: BlendEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlendEffect", function() { return u; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../webgl/ProgramCache.js */ "kGdt");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../enums.js */ "yE7X");
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../VertexStream.js */ "gjrC");
/* harmony import */ var _shaders_BlendPrograms_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shaders/BlendPrograms.js */ "vEyU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const d=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect");class u{constructor(){this._size=[0,0]}dispose(e){this._backBufferTexture&&(this._backBufferTexture.dispose(),this._backBufferTexture=null),this._programCache&&(this._programCache.dispose(),this._programCache=null),this._quad&&(this._quad.dispose(),this._quad=null)}draw(e,r,i,s,a){const{context:u,drawPhase:c}=e;if(this._setupShader(u),s&&"normal"!==s&&c!==_enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLDrawPhase"].LABEL)return void this._drawBlended(e,r,i,s,a);const m=this._programCache.getProgram(_shaders_BlendPrograms_js__WEBPACK_IMPORTED_MODULE_11__["blend"],"normal");if(!m)return void d.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-BlendEffect",'Error creating shader program for blend mode "normal"'));u.bindProgram(m),r.setSamplingMode(i),u.bindTexture(r,0),m.setUniform1i("u_layerTexture",0),m.setUniform1f("u_opacity",a),u.setBlendingEnabled(!0),u.setBlendFunction(1,771);const h=this._quad;h.draw(),h.unbind()}_drawBlended(r,i,s,o,a){const{context:u,state:c,pixelRatio:m,inFadeTransition:h}=r,{size:f}=c,l=u.getBoundFramebufferObject();let p,g;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(l)){const e=l.descriptor;p=e.width,g=e.height}else p=Math.round(m*f[0]),g=Math.round(m*f[1]);this._createOrResizeTexture(r,p,g);const _=this._backBufferTexture;l.copyToTexture(0,0,p,g,0,0,_),u.setStencilTestEnabled(!1),u.setStencilWriteMask(0),u.setBlendingEnabled(!0),u.setDepthTestEnabled(!1),u.setDepthWriteEnabled(!1);const b=this._programCache.getProgram(_shaders_BlendPrograms_js__WEBPACK_IMPORTED_MODULE_11__["blend"],o);if(!b)return void d.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-BlendEffect",`Error creating shader program for blend mode ${o}`));u.bindProgram(b),_.setSamplingMode(s),u.bindTexture(_,0),b.setUniform1i("u_backbufferTexture",0),i.setSamplingMode(s),u.bindTexture(i,1),b.setUniform1i("u_layerTexture",1),b.setUniform1f("u_opacity",a),b.setUniform1f("u_inFadeOpacity",h?1:0),u.setBlendFunction(1,0);const x=this._quad;x.draw(),x.unbind(),u.setBlendFunction(1,771)}_setupShader(e){this._programCache||(this._programCache=new _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_8__["default"](e),this._quad||(this._quad=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_10__["default"](e,[-1,-1,1,-1,-1,1,1,1])))}_createOrResizeTexture(e,r,t){const{context:s}=e;null!==this._backBufferTexture&&r===this._size[0]&&t===this._size[1]||(this._backBufferTexture?this._backBufferTexture.resize(r,t):this._backBufferTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__["default"](s,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r,height:t}),this._size[0]=r,this._size[1]=t)}}


/***/ }),

/***/ "yCUC":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/LayerViewSorter.js ***!
  \***************************************************************************************/
/*! exports provided: LayerViewSorter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerViewSorter", function() { return n; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const t=4294967295,i=-1,a=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.collisions.LayerViewSorter");function s(e){return"esri.views.2d.layers.FeatureLayerView2D"===e.declaredClass||"esri.views.2d.layers.StreamLayerView2D"===e.declaredClass}function l(e){if(!e.layer||!e.layer.renderer)return!1;switch(e.layer.renderer.type){case"class-breaks":case"simple":case"unique-value":case"dictionary":case"dot-density":return!0;default:return a.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("mapview-labeling",`Renderer of type ${e.layer.renderer.type} does not currently support labeling`)),!1}}class n{constructor(e,r){this.registerLayer=e,this.unregisterLayer=r,this._layerViewState=new Map}findIndex(e){return e.view.allLayerViews.findIndex((r=>r.uid===e.uid))}update(e){const{added:r,removed:t}=e;for(const i of t)s(i)&&this._layerViewState.has(i)&&this._deleteState(i);for(const i of r)s(i)&&l(i)&&!this._layerViewState.has(i)&&this._createState(i);this._recomputeOrder()}destroy(){this._layerViewState.forEach((e=>e.handles.forEach((e=>e.remove()))))}_createState(e){const r={priority:-1,handles:null};return r.handles=[e.layer.watch("visible",this._recomputeOrder.bind(this)),e.layer.watch("labelsVisible",this._recomputeOrder.bind(this)),e.layer.watch("labelingInfo",this._recomputeOrder.bind(this)),e.layer.watch("featureReduction",this._recomputeOrder.bind(this))],this._layerViewState.set(e,r),r}_deleteState(e){if(!this._layerViewState.has(e))return;const r=this._layerViewState.get(e);r.handles.forEach((e=>e.remove())),r.priority!==i&&this.unregisterLayer(e),this._layerViewState.delete(e)}_recomputeOrder(){this._layerViewState.forEach(((e,r)=>{const a=r.view.map.allLayers.findIndex((e=>e.uid===r.layer.uid)),s=r.layer,l=s.featureReduction,n=l&&"cluster"===l.type&&l.labelsVisible&&l.labelingInfo&&l.labelingInfo.length,o=s.labelsVisible&&s.labelingInfo&&s.labelingInfo.length||n,d=s.visible&&o?t-a:i;d!==e.priority&&(e.priority=d,this.unregisterLayer(r),d!==i&&this.registerLayer(r,d))}))}}


/***/ }),

/***/ "ygGI":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightGradient.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _parameters_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parameters.js */ "fGRN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
const n=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");function h(o,i){i.fillColor[0]=o.color.r/255,i.fillColor[1]=o.color.g/255,i.fillColor[2]=o.color.b/255,i.fillColor[3]=o.color.a,o.haloColor?(i.outlineColor[0]=o.haloColor.r/255,i.outlineColor[1]=o.haloColor.g/255,i.outlineColor[2]=o.haloColor.b/255,i.outlineColor[3]=o.haloColor.a):(i.outlineColor[0]=i.fillColor[0],i.outlineColor[1]=i.fillColor[1],i.outlineColor[2]=i.fillColor[2],i.outlineColor[3]=i.fillColor[3]),i.fillColor[3]*=o.fillOpacity,i.outlineColor[3]*=o.haloOpacity,i.fillColor[0]*=i.fillColor[3],i.fillColor[1]*=i.fillColor[3],i.fillColor[2]*=i.fillColor[3],i.outlineColor[0]*=i.outlineColor[3],i.outlineColor[1]*=i.outlineColor[3],i.outlineColor[2]*=i.outlineColor[3],i.outlineWidth=_parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].outlineWidth,i.outerHaloWidth=_parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].outerHaloWidth,i.innerHaloWidth=_parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].innerHaloWidth,i.outlinePosition=_parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].outlinePosition}const s=[0,0,0,0];class a{constructor(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:_parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].outlinePosition,outlineWidth:_parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].outlineWidth,innerHaloWidth:_parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].innerHaloWidth,outerHaloWidth:_parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].outerHaloWidth},this.shadeTexChanged=!0,this.texelData=new Uint8Array(4*_parameters_js__WEBPACK_IMPORTED_MODULE_7__["SHADE_TEXTURE_SIZE"]),this.minMaxDistance=[0,0]}setHighlightOptions(o){const i=this._convertedHighlightOptions;h(o,i);const t=i.outlinePosition-i.outlineWidth/2-i.outerHaloWidth,e=i.outlinePosition-i.outlineWidth/2,a=i.outlinePosition+i.outlineWidth/2,d=i.outlinePosition+i.outlineWidth/2+i.innerHaloWidth,u=Math.sqrt(Math.PI/2)*_parameters_js__WEBPACK_IMPORTED_MODULE_7__["SIGMAS"][3],g=Math.abs(t)>u?Math.round(10*(Math.abs(t)-u))/10:0,C=Math.abs(d)>u?Math.round(10*(Math.abs(d)-u))/10:0;let f;g&&!C?n.error("The outer rim of the highlight is "+g+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!g&&C?n.error("The inner rim of the highlight is "+C+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):g&&C&&n.error("The highlight is "+Math.max(g,C)+"px away from the edge of the feature; consider reducing some width values.");const c=[void 0,void 0,void 0,void 0];function m(o,i,t){c[0]=(1-t)*o[0]+t*i[0],c[1]=(1-t)*o[1]+t*i[1],c[2]=(1-t)*o[2]+t*i[2],c[3]=(1-t)*o[3]+t*i[3]}const{texelData:p}=this;for(let r=0;r<_parameters_js__WEBPACK_IMPORTED_MODULE_7__["SHADE_TEXTURE_SIZE"];++r)f=t+r/(_parameters_js__WEBPACK_IMPORTED_MODULE_7__["SHADE_TEXTURE_SIZE"]-1)*(d-t),f<t?(c[4*r+0]=0,c[4*r+1]=0,c[4*r+2]=0,c[4*r+3]=0):f<e?m(s,i.outlineColor,(f-t)/(e-t)):f<a?[c[0],c[1],c[2],c[3]]=i.outlineColor:f<d?m(i.outlineColor,i.fillColor,(f-a)/(d-a)):[c[4*r+0],c[4*r+1],c[4*r+2],c[4*r+3]]=i.fillColor,p[4*r+0]=255*c[0],p[4*r+1]=255*c[1],p[4*r+2]=255*c[2],p[4*r+3]=255*c[3];this.minMaxDistance[0]=t,this.minMaxDistance[1]=d,this.shadeTexChanged=!0}applyHighlightOptions(o,e){this.shadeTex||(this.shadeTex=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__["default"](o,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,width:_parameters_js__WEBPACK_IMPORTED_MODULE_7__["SHADE_TEXTURE_SIZE"],height:1,samplingMode:9729})),this.shadeTexChanged&&(this.shadeTex.updateData(0,0,0,_parameters_js__WEBPACK_IMPORTED_MODULE_7__["SHADE_TEXTURE_SIZE"],1,this.texelData),this.shadeTexChanged=!1),o.bindTexture(this.shadeTex,_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_HIGHLIGHT_1"]),e.setUniform2fv("u_minMaxDistance",this.minMaxDistance)}destroy(){this.shadeTex&&(this.shadeTex.dispose(),this.shadeTex=null)}}/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ })

}]);
//# sourceMappingURL=mapViewDeps-js.js.map