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
  label :string;
  markerOptions!: google.maps.MarkerOptions;
  circleOptions: any
  constructor()
  {
    this.center = {lat: 45.506738, lng: 9.190766};
    this.position = [this.center, {lat: 45.512971, lng: 9.13770}];
    this.label = "Sono qua";
    this.circleOptions = {fillColor : 'red'};

    let iconData : google.maps.Icon = {
      url:'./assets/img/1200x630cw.ico',
      scaledSize : new google.maps.Size(60,60)
    }
  
    this.markerOptions = {icon:iconData}
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
}