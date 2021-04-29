import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import EsriMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
    const map = new EsriMap({
      basemap: "streets-vector"
    });

    const view = new MapView({
      map: map,
      container: "viewDiv",
      center: [-79.502938, 43.767854],
      zoom: 12
    });
  }
}

