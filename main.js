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
SideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideBarComponent, selectors: [["app-side-bar"]], decls: 0, vars: 0, template: function SideBarComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlLWJhci5jb21wb25lbnQuY3NzIn0= */"] });


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
// import { Chart } from 'chart.js';







class MapComponent {
    constructor() {
    }
    ngOnInit() {
        // Function to calculate distance 
        function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
            var p = 0.017453292519943295; // Math.PI / 180
            var c = Math.cos;
            var a = 0.5 - c((lat2 - lat1) * p) / 2 +
                c(lat1 * p) * c(lat2 * p) *
                    (1 - c((lon2 - lon1) * p)) / 2;
            return 12742 * Math.asin(Math.sqrt(a)) * 1000;
        }
        ;
        // draw Points and Line
        function drawPointdrawLine(line, point, graphicsLayer) {
            // draw point
            const simpleMarkerSymbol = {
                type: "simple-marker",
                color: "green",
                size: 8,
                outline: {
                    color: [255, 255, 255],
                    width: 0.5
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
                paths: line
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
        }
        // Add Based Map
        const map = new _arcgis_core_Map__WEBPACK_IMPORTED_MODULE_0__["default"]({
            basemap: "streets-navigation-vector"
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
        // let pos = [];    
        // draw trajectory in track mode
        let totalDistance = 0;
        let totalCal = 0;
        let speed_list = [0];
        track.on("track", function (trackEvent) {
            // console.log(trackEvent);
            console.log(trackEvent.position.coords.longitude);
            console.log(trackEvent.position.coords.latitude);
            let current_location = [trackEvent.position.coords.longitude, trackEvent.position.coords.latitude];
            pos.push(current_location);
            // draw current point
            const point = {
                type: "point",
                longitude: trackEvent.position.coords.longitude,
                latitude: trackEvent.position.coords.latitude
            };
            // create a layer to draw
            const graphicsLayer = new _arcgis_core_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_3__["default"]();
            map.add(graphicsLayer);
            drawPointdrawLine(pos, point, graphicsLayer);
            let newDist = distanceInKmBetweenEarthCoordinates(pos[pos.length - 2][0], pos[pos.length - 2][1], current_location[0], current_location[1]);
            totalDistance += newDist;
            MapComponent.prototype.totalDistance = Math.round(totalDistance);
            let currSpeed = Math.round(newDist / 5 * 3600 / 1000);
            speed_list.push(currSpeed);
            MapComponent.prototype.Speed = speed_list;
            let METs = 1.02532235513438 * currSpeed - 0.100512661177567;
            let BMR = 1794;
            totalCal += METs * 5 / 3600 * BMR / 24;
            MapComponent.prototype.totalCal = Math.round(totalCal);
        });
        // // use fake location, every 5 seconds
        // // create a layer to draw
        // const graphicsLayer = new GraphicsLayer();
        // map.add(graphicsLayer);
        // let timer;
        // timer = setInterval(function () {
        //   let random_lat_diff = (Math.random() - 0.25) * 0.001;
        //   let random_long_diff = (Math.random() - 0.25) * 0.001;
        //   let current_location = [pos[pos.length - 1][0] + random_lat_diff, pos[pos.length - 1][1] + random_long_diff]
        //   pos.push(current_location);
        //   // draw current point
        //   const point = { //Create a point
        //     type: "point",
        //     longitude: current_location[0],
        //     latitude: current_location[1]
        //   };
        //   drawPointdrawLine(pos, point, graphicsLayer);
        //   let newDist = distanceInKmBetweenEarthCoordinates(pos[pos.length - 2][0], pos[pos.length - 2][1], current_location[0], current_location[1]);
        //   totalDistance += newDist;
        //   MapComponent.prototype.totalDistance = Math.round(totalDistance);
        //   let currSpeed = Math.round(newDist / 5 * 3600 / 1000);
        //   speed_list.push(currSpeed);
        //   MapComponent.prototype.Speed = speed_list;
        //   let METs = 1.02532235513438 * currSpeed - 0.100512661177567;
        //   let BMR = 1794;
        //   totalCal += METs * 5 / 3600 * BMR / 24;
        //   MapComponent.prototype.totalCal = Math.round(totalCal);
        // }, 5000);
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 24, vars: 3, consts: [["id", "viewDiv"], ["id", "side-bar"], [1, "container"], [1, "row"], [1, "col"], ["id", "display-box-1", 1, "display-box"], [1, "font-weight-bold", "text-center"], ["id", "display-box-2", 1, "display-box"], ["id", "display-box-3"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Total Running Distance: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Burned Calories:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Current Running Speed: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.totalDistance, " m.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.totalCal, " kCal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.Speed[ctx.Speed.length - 1], " km/h. ");
    } }, styles: ["@import 'https://js.arcgis.com/4.19/esri/themes/light/main.css';\n\n#viewDiv[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 4rem;\r\n    \r\n    bottom: 45%;\r\n    \r\n    left: 1%;\r\n    width: 98%;\r\n}\n#side-bar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    \r\n    bottom: 20px;\r\n    \r\n    right: 1%;\r\n    width: 98%;\r\n    height: 40%;\r\n    min-height: 200px;\r\n    background: linear-gradient(to right top, #65dfc9, #6cdbeb);\r\n    box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);\r\n    border-radius: 2rem;\r\n}\n.col[_ngcontent-%COMP%] {\r\n    padding-top: 1rem;\r\n}\n.display-box[_ngcontent-%COMP%] {\r\n    background: linear-gradient( to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));\r\n    height: 40%;\r\n    min-height: 100px;\r\n    border-radius: 1rem;\r\n    padding: 1rem;\r\n    box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);\r\n}\n#display-box-3[_ngcontent-%COMP%] {\r\n    background: linear-gradient( to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));\r\n    height: 40%;\r\n    min-height: 100px;\r\n    border-radius: 1rem;\r\n    padding: 1rem;\r\n    box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsK0RBQStEO0FBRi9ELGtDQUFrQztBQUdsQztJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7QUFDZDtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiwyREFBMkQ7SUFDM0QsbURBQW1EO0lBQ25ELG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxpR0FBaUc7SUFDakcsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1EQUFtRDtBQUN2RDtBQUVBO0lBQ0ksaUdBQWlHO0lBQ2pHLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtREFBbUQ7QUFDdkQiLCJmaWxlIjoibWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpbXBvcnQgdGhlIHJlcXVpcmVkIEpTQVBJIGNzcyAqL1xyXG5cclxuQGltcG9ydCAnaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMTkvZXNyaS90aGVtZXMvbGlnaHQvbWFpbi5jc3MnO1xyXG4jdmlld0RpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDRyZW07XHJcbiAgICAvKiBIZWFkZXIgSGVpZ2h0ICovXHJcbiAgICBib3R0b206IDQ1JTtcclxuICAgIC8qIEZvb3RlciBIZWlnaHQgKi9cclxuICAgIGxlZnQ6IDElO1xyXG4gICAgd2lkdGg6IDk4JTtcclxufVxyXG5cclxuI3NpZGUtYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8qIEhlYWRlciBIZWlnaHQgKi9cclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIC8qIEZvb3RlciBIZWlnaHQgKi9cclxuICAgIHJpZ2h0OiAxJTtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgIzY1ZGZjOSwgIzZjZGJlYik7XHJcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDIwcHggcmdiYSgxMjIsIDEyMiwgMTIyLCAwLjIxMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG59XHJcblxyXG4uY29sIHtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uZGlzcGxheS1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCB0byByaWdodCBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpKTtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDZweCA2cHggMjBweCByZ2JhKDEyMiwgMTIyLCAxMjIsIDAuMjEyKTtcclxufVxyXG5cclxuI2Rpc3BsYXktYm94LTMge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCB0byByaWdodCBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpKTtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDZweCA2cHggMjBweCByZ2JhKDEyMiwgMTIyLCAxMjIsIDAuMjEyKTtcclxufSJdfQ== */"] });


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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Running Tracker");
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