(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\62707\source\repos\Angular-GIS\src\main.ts */"zUnb");


/***/ }),

/***/ "2IJj":
/*!************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.ts ***!
  \************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SideBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SideBarComponent.ɵfac = function SideBarComponent_Factory(t) { return new (t || SideBarComponent)(); };
SideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideBarComponent, selectors: [["app-side-bar"]], decls: 3, vars: 0, consts: [["id", "side-bar"]], template: function SideBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " side bar here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#side-bar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 4rem;\r\n    \r\n    bottom: 20px;\r\n    \r\n    right: 1%;\r\n    width: 13%;\r\n    min-width: 150px;\r\n    background: brown;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzaWRlLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NpZGUtYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNHJlbTtcclxuICAgIC8qIEhlYWRlciBIZWlnaHQgKi9cclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIC8qIEZvb3RlciBIZWlnaHQgKi9cclxuICAgIHJpZ2h0OiAxJTtcclxuICAgIHdpZHRoOiAxMyU7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogYnJvd247XHJcbn0iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/map.component */ "cNoH");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "2IJj");




class AppComponent {
    constructor() {
        this.title = 'Angular-GIS';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-side-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__["SideBarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "2IJj");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.component */ "cNoH");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_2__["SideBarComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();


/***/ }),

/***/ "cNoH":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _arcgis_core_Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @arcgis/core/Map */ "bRsD");
/* harmony import */ var _arcgis_core_views_MapView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @arcgis/core/views/MapView */ "phGV");
/* harmony import */ var _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @arcgis/core/Graphic */ "jWBI");
/* harmony import */ var _arcgis_core_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @arcgis/core/layers/GraphicsLayer */ "zgsL");
/* harmony import */ var _arcgis_core_widgets_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @arcgis/core/widgets/Home */ "hJHO");
/* harmony import */ var _arcgis_core_widgets_Track__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @arcgis/core/widgets/Track */ "BThK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class MapComponent {
    constructor() { }
    ngOnInit() {
        // Add Based Map
        const map = new _arcgis_core_Map__WEBPACK_IMPORTED_MODULE_0__["default"]({
            basemap: "streets-vector"
        });
        // add initial view, position, and zoom
        const view = new _arcgis_core_views_MapView__WEBPACK_IMPORTED_MODULE_1__["default"]({
            map: map,
            container: "viewDiv",
            center: [-79.502938, 43.767854],
            zoom: 12
        });
        // adds the home widget to the top left corner of the MapView
        const homeWidget = new _arcgis_core_widgets_Home__WEBPACK_IMPORTED_MODULE_4__["default"]({
            view: view
        });
        view.ui.add(homeWidget, "top-left");
        const track = new _arcgis_core_widgets_Track__WEBPACK_IMPORTED_MODULE_5__["default"]({
            view: view,
            graphic: new _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_2__["default"]({
                symbol: {
                    type: "simple-marker",
                    size: "12px",
                    color: "green",
                    outline: {
                        color: "#efefef",
                        width: "1.5px"
                    }
                }
            }),
            useHeadingEnabled: false
        });
        view.ui.add(track, "top-left");
        let pos = [[-79.502938, 43.767854]];
        track.on("track", function (trackEvent) {
            // console.log(trackEvent);
            console.log(trackEvent.position.coords.longitude);
            console.log(trackEvent.position.coords.latitude);
            let current_location = [trackEvent.position.coords.longitude, trackEvent.position.coords.latitude];
            pos.push(current_location);
            // create a layer to draw
            const graphicsLayer = new _arcgis_core_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_3__["default"]();
            map.add(graphicsLayer);
            // draw current point
            const point = {
                type: "point",
                longitude: trackEvent.position.coords.longitude,
                latitude: trackEvent.position.coords.latitude
            };
            const simpleMarkerSymbol = {
                type: "simple-marker",
                color: "green",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            };
            const pointGraphic = new _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_2__["default"]({
                geometry: point,
                symbol: simpleMarkerSymbol
            });
            graphicsLayer.add(pointGraphic);
            // draw lines 
            const polyline = {
                type: "polyline",
                paths: pos
            };
            const simpleLineSymbol = {
                type: "simple-line",
                color: "green",
                width: 2
            };
            const polylineGraphic = new _arcgis_core_Graphic__WEBPACK_IMPORTED_MODULE_2__["default"]({
                geometry: polyline,
                symbol: simpleLineSymbol
            });
            graphicsLayer.add(polylineGraphic);
        });
        // // draw lines 
        // const graphicsLayer = new GraphicsLayer();
        // map.add(graphicsLayer);
        // // add a ramdom point every 5 second
        // let pos = [[-79.502938, 43.767854], [-79.503, 43.7677]];
        // let timer;
        // timer = setInterval(function () {
        //   let random_lat_diff = (Math.random() - 0.25) * 0.001;
        //   let random_long_diff = (Math.random() - 0.25) * 0.001;
        //   let current_location = [pos[pos.length-1][0] + random_lat_diff, pos[pos.length-1][1] + random_long_diff]
        //   pos.push(current_location);
        //   const polyline = {
        //     type: "polyline",
        //     paths: pos
        //   };
        //   const simpleLineSymbol = {
        //     type: "simple-line",
        //     color: "green", // Orange
        //     width: 2
        //   };
        //   const polylineGraphic = new Graphic({
        //     geometry: polyline,
        //     symbol: simpleLineSymbol
        //   } as any
        //   );
        //   graphicsLayer.add(polylineGraphic);
        // }, 5000);
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 1, vars: 0, consts: [["id", "viewDiv"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 0);
    } }, styles: ["@import 'https://js.arcgis.com/4.19/esri/themes/light/main.css';\n\n#viewDiv[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 4rem;\r\n    \r\n    bottom: 20px;\r\n    \r\n    left: 1%;\r\n    width: 84%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsK0RBQStEO0FBRi9ELGtDQUFrQztBQUdsQztJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7QUFDZCIsImZpbGUiOiJtYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGltcG9ydCB0aGUgcmVxdWlyZWQgSlNBUEkgY3NzICovXHJcblxyXG5AaW1wb3J0ICdodHRwczovL2pzLmFyY2dpcy5jb20vNC4xOS9lc3JpL3RoZW1lcy9saWdodC9tYWluLmNzcyc7XHJcbiN2aWV3RGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNHJlbTtcclxuICAgIC8qIEhlYWRlciBIZWlnaHQgKi9cclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIC8qIEZvb3RlciBIZWlnaHQgKi9cclxuICAgIGxlZnQ6IDElO1xyXG4gICAgd2lkdGg6IDg0JTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 0, consts: [[1, "main__header"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Angular GIS Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main__header[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: grid;\r\n    text-align: center;\r\n    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\r\n    height: 3.5rem;\r\n    margin: 0;\r\n    align-items: center;\r\n    transition: background-color 500ms linear;\r\n    animation: 1s ease-in-out 0ms 1 fadein;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLGNBQWM7SUFDZCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxzQ0FBc0M7QUFDMUMiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9faGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycmVtIHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xyXG4gICAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBsaW5lYXI7XHJcbiAgICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDBtcyAxIGZhZGVpbjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map