import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center : any;
  position : any;
  vertices!: google.maps.LatLngLiteral[];
  vertices1!: google.maps.LatLngLiteral[];
  label :string;
  markerOptions!: google.maps.MarkerOptions;
  polygonOptions!: google.maps.PolygonOptions;

  circleOptions: any
  constructor()
  {
    this.center = {lat: 45.506738, lng: 9.190766};
    this.position = [this.center, {lat: 45.512971, lng: 9.13770}];
    this.label = "Sono qua";
    this.circleOptions = {fillColor : 'red'};

    let iconData : google.maps.Icon = {
      url:'./assets/img/cat_acrobat.ico',
      scaledSize : new google.maps.Size(60,60)
    }
  
    this.markerOptions = {icon:iconData}
    this.vertices = [
      {  lat: this.center.lat + 0.001, lng: this.center.lng - 0.002 },
      {  lat: this.center.lat, lng: this.center.lng },
      {  lat: this.center.lat - 0.001, lng: this.center.lng - 0.002}
    ];
    this.vertices1 = [
      {  lat: this.center.lat + 0.0005, lng: this.center.lng},
      {  lat: this.center.lat + 0.0005, lng: this.center.lng + 0.003},
      {  lat: this.center.lat - 0.0005, lng: this.center.lng + 0.003},
      {  lat: this.center.lat - 0.0005, lng: this.center.lng},

    ];

  }







  Giallo() {  
    this.circleOptions = {fillColor : 'yellow'};
  }  
  Rosso() {  
    this.circleOptions = {fillColor : 'red'};
  }  
  Blu() {  
    this.circleOptions = {fillColor : 'blue'};
  }  
  Giallo1() {  
    this.polygonOptions = {fillColor : 'yellow'};
  }  
  Rosso1() {  
    this.polygonOptions = {fillColor : 'red'};
  }  
  Blu1() {  
    this.polygonOptions = {fillColor : 'blue'};
  }  
}