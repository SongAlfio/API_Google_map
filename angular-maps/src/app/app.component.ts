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
  circleOptions: any
  constructor()
  {
    this.center = {lat: 45.506738, lng: 9.190766};
    this.position = [this.center, {lat: 45.512971, lng: 9.13770}];
    this.label = "Sono qua";
    this.circleOptions = {fillColor : 'red'}

  }

}