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
    const homeWidget = new Home({
      view: view
    });
    view.ui.add(homeWidget, "top-left");

    const track = new Track({
      view: view,
      graphic: new Graphic({
        symbol: {
          type: "simple-marker",
          size: "12px",
          color: "green",
          outline: {
            color: "#efefef",
            width: "1.5px"
          }
        } as any
      }),
      useHeadingEnabled: false
    });
    view.ui.add(track, "top-left");

    // draw lines 
    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    const polyline = {
      type: "polyline",
      paths: [
        [-79.502938, 43.767854], //Longitude, latitude
        [-79.503, 43.7677], //Longitude, latitude
        [-79.5031, 43.7676]  //Longitude, latitude
      ]
    };
    const simpleLineSymbol = {
      type: "simple-line",
      color: "green", // Orange
      width: 2
    };

    const polylineGraphic = new Graphic({
      geometry: polyline,
      symbol: simpleLineSymbol
    } as any
    );
    graphicsLayer.add(polylineGraphic);
  }
}


