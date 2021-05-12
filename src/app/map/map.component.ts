import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
// import { Chart } from 'chart.js';

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

export class MapComponent {
  map: EsriMap;
  view: MapView;
  totalDistance: number;
  totalCal: number;
  Speed: number[];

  constructor() {

  }

  ngOnInit() {
    // Function to calculate distance 
    function distanceInKmBetweenEarthCoordinates(lat1: number, lon1: number, lat2: number, lon2: number) {
      var p = 0.017453292519943295;    // Math.PI / 180
      var c = Math.cos;
      var a = 0.5 - c((lat2 - lat1) * p) / 2 +
        c(lat1 * p) * c(lat2 * p) *
        (1 - c((lon2 - lon1) * p)) / 2;
      return 12742 * Math.asin(Math.sqrt(a)) * 1000;
    };

    // draw Points and Line
    function drawPointdrawLine(line: any[], point: object, graphicsLayer: GraphicsLayer) {
      // draw point
      const simpleMarkerSymbol = {
        type: "simple-marker",
        color: "green",  // Orange
        size: 8,
        outline: {
          color: [255, 255, 255], // White
          width: 0.5
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

    // Add Based Map
    const map = new EsriMap({
      basemap: "streets-navigation-vector"
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

    // draw trajectory in track mode
    let totalDistance = 0;
    let totalCal = 0;
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

      totalDistance += distanceInKmBetweenEarthCoordinates(pos[pos.length - 2][0], pos[pos.length - 2][1], current_location[0], current_location[1]);
      MapComponent.prototype.totalDistance = Math.round(totalDistance);
    })


    // use fake location, every 5 seconds
    // create a layer to draw
    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);
    
    let speed_list = [0];
    let labels = ['1'];
    // let canvas = <HTMLCanvasElement>document.getElementById('myChart');
    // let ctx = canvas.getContext('2d');

    // this.Speed = speed_list;
    // var data = {
    //   labels: labels,
    //   datasets: [{
    //     label: 'My First Dataset',
    //     data: speed_list,
    //     fill: false,
    //     borderColor: 'rgb(75, 192, 192)',
    //     tension: 0.1
    //   }]
    // };
    // var myChart = new Chart(ctx, {
    //   type: 'line',
    //   data: data,      
    // });

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

      let dateTime = new Date()
      let currtTime = dateTime.getHours() + '-' + dateTime.getMinutes() + '-' + dateTime.getSeconds();
      labels.push(currtTime);

      // var data = {
      //   labels: labels,
      //   datasets: [{
      //     label: 'My First Dataset',
      //     data: speed_list,
      //     fill: false,
      //     borderColor: 'rgb(75, 192, 192)',
      //     tension: 0.1
      //   }]
      // };
      // var myChart = new Chart(ctx, {
      //   type: 'line',
      //   data: data,
      //   options: {
      //     scales: {
      //       y: {
      //         beginAtZero: true
      //       }
      //     }
      //   }
      // });

    }, 5000);

  }
}


