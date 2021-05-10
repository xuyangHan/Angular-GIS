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

    let pos = [[-79.502938, 43.767854]];
    // let pos = [];

    function drawPointdrawLine(line: any[], point: object, graphicsLayer: GraphicsLayer) {

      const simpleMarkerSymbol = {
        type: "simple-marker",
        color: "green",  // Orange
        outline: {
          color: [255, 255, 255], // White
          width: 0.8
        }
      };

      const pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol
      } as any
      );
      graphicsLayer.add(pointGraphic);

      // draw lines 
      const polyline = {
        type: "polyline",
        paths: line
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

    // draw trajectory in track mode
    track.on("track", function (trackEvent) {

      // console.log(trackEvent);
      console.log(trackEvent.position.coords.longitude);
      console.log(trackEvent.position.coords.latitude);

      let current_location = [trackEvent.position.coords.longitude, trackEvent.position.coords.latitude];
      pos.push(current_location);

      // draw current point
      const point = { //Create a point
        type: "point",
        longitude: trackEvent.position.coords.longitude,
        latitude: trackEvent.position.coords.latitude
      };

      // create a layer to draw
      const graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);

      drawPointdrawLine(pos, point, graphicsLayer);
    })

    // use fake location, every 5 seconds
    // create a layer to draw
    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    let timer;
    timer = setInterval(function () {
      let random_lat_diff = (Math.random() - 0.25) * 0.001;
      let random_long_diff = (Math.random() - 0.25) * 0.001;
      let current_location = [pos[pos.length - 1][0] + random_lat_diff, pos[pos.length - 1][1] + random_long_diff]
      pos.push(current_location);

      // draw current point
      const point = { //Create a point
        type: "point",
        longitude: current_location[0],
        latitude: current_location[1]
      };

      drawPointdrawLine(pos, point, graphicsLayer);

    }, 5000);    
  }   
}


