import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  // this is needed to be able to create the MapView at the DOM element in this component
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  constructor() { }

  ngOnInit() {
    loadModules([
      'esri/Map',
      'esri/views/MapView'
    ])
      .then(([EsriMap, EsriMapView]) => {
        const map = new EsriMap({
          basemap: 'streets'
        });

        const mapView = new EsriMapView({
          container: this.mapViewEl.nativeElement,
          center: [-79.502938, 43.767854],
          zoom: 15,
          map: map
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

}