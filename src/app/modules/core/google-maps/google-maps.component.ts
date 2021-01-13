import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-google-maps",
  templateUrl: "./google-maps.component.html",
  styleUrls: ["./google-maps.component.css"]
})

export class GoogleMapsComponent implements OnInit {

  center = { lat: 52.092876, lng: 5.104480 }; // UTRECHT
  initial = { lat: 51.578980, lng: 4.790310 }; // Eggestraat 3, Breda (HUISARTSENPOST)
  renderOptions = { suppressMarkers: true };

  origin = {};
  destination = {};
  showMap = false;
  destinations: any[] = [];

  appointments: any[] = [
    [{appointment: "08:30", client: "Dion Rodie", address: "Kerkhofweg 66, 4835GB Breda, Nederland", urlstring: "Kerkhofweg+66+Breda+Nederland"}, { lat: 51.567720, lng: 4.792250 }],
    [{appointment: "09:30", client: "Max Bogaers", address: "Dreef 4, 4921ZB Made, Nederland", urlstring: "Dreef+4+Made+Nederland"}, { lat: 51.680240, lng: 4.791620 }],
    [{appointment: "10:30", client: "Maarten Donkersloot", address: "Lepelaarstraat 20, 4273CV Hank, Nederland", urlstring: "Lepelaarstraat+20+Hank+Nederland"}, { lat: 51.739650 , lng: 4.899030 }],
  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.appointments);
    this.origin = this.initial;
    this.setDestinations();
  }

  clickedMarker(index: number): void {
    this.showMap = true;
    this.getDestination(index);
  }

  setDestinations(): void{
      for (let i = 0; i < this.appointments.length; i++) {
        if (i === 0) {
          this.destinations.push({index: i, origin: this.initial, destination: this.appointments[i][1]});
        }else{
          this.destinations.push({index: i, origin: this.appointments[i - 1][1], destination: this.appointments[i][1]});
        }
    }
  }

  getDestination(index: number): void {
    this.origin = this.destinations[index].origin;
    this.destination = this.destinations[index].destination;
  }
}
