import { Component } from '@angular/core';
import {} from 'googlemaps';
/// <reference types="@types/googlemaps" />

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  latitude = 10.678418;
  longitude = 5.809007;
  locationChoosen = false

  onChoseLocation(event: any) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChoosen = true
  }
}
