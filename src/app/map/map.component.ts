import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import EsriMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Home from "@arcgis/core/widgets/Home";
import Track from "@arcgis/core/widgets/Track";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  map: EsriMap;
  view: MapView;

  constructor() { }

  ngOnInit() {

    // Add Based Map
    const map = new EsriMap({
      basemap: "streets-vector"
    });

    // add initial view, position, and zoom
    const view = new MapView({
      map: map,
      container: "viewDiv",
      center: [-79.502938, 43.767854],
      zoom: 12
    });

    // adds the home widget to the top left corner of the MapView
    var homeWidget = new Home({
      view: view
    });
    view.ui.add(homeWidget, "top-left");

    // add a locate myself widget 
    // const locate = new Locate({
    //   view: view,
    //   useHeadingEnabled: false,
    //   goToOverride: function(view, options) {
    //     options.target.scale = 1500;
    //     return view.goTo(options.target);
    //   }
    // });
    // view.ui.add(locate, "top-left");


    const track = new Track({
      view: view,
      graphic: new Graphic({
        symbol: {
          // type: "simple-marker",
          // size: "12px",
          color: "green",
          // outline: {
          //   color: "#efefef",
          //   width: "1.5px"
          // }
        }
      }),
      useHeadingEnabled: false
    });
    view.ui.add(track, "top-left");


    // draw a point on a layer
    const point = { //Create a point
      type: "point",
      longitude: -79.502938,
      latitude: 43.767854
    };

    const simpleMarkerSymbol = {
      geometry: point,
      type: "simple-marker",
      color: [226, 119, 40],  // Orange
      outline: {
        color: [255, 255, 255], // White
        width: 1
      }
    };

    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);
    const pointGraphic = new Graphic({
      // geometry: point,
      symbol: simpleMarkerSymbol
    });
    graphicsLayer.add(pointGraphic);

  }
}


