import { Component, OnInit } from "@angular/core";
import { AgmInfoWindow } from "@agm/core";


@Component({
  selector: "app-google-maps",
  templateUrl: "./google-maps.component.html",
  styleUrls: ["./google-maps.component.css"]
})

export class GoogleMapsComponent implements OnInit {

  // center = { lat: 52.092876, lng: 5.104480 }; // UTRECHT
  center = { lat: 0 , lng: 0};
  initial = { lat: 51.578980, lng: 4.790310 }; // Eggestraat 3, Breda (HUISARTSENPOST)
  renderOptions = { suppressMarkers: true };
  origin = {};
  destination = {};
  showMap = false;
  destinations: any[] = [];
  currentIW: AgmInfoWindow;
  previousIW: AgmInfoWindow;

  consultations: any[] = [
    {id: 1, date: "14-01-2021 09:00:00", patient: {name: "Dion Rodie", phoneNumber: "06123456789", postalCode: "4835GC", city: "Breda", country: "NL", street: "Kerkhofweg", houseNumber: 66, houseNumberAddon: "", latitude: 51.567720, longitude: 4.792250 }},
    {id: 1, date: "14-01-2021 10:00:00", patient: {name: "Max Bogaers", phoneNumber: "06123456789", postalCode: "4921ZB", city: "Made", country: "NL", street: "Dreef", houseNumber: 4, houseNumberAddon: "", latitude: 51.680240, longitude: 4.791620 }},
    {id: 1, date: "14-01-2021 11:00:00", patient: {name: "Maarten Donkersloot", phoneNumber: "06123456789", postalCode: "4273CV", city: "Hank", country: "NL", street: "Lepelaarstraat", houseNumber: 20, houseNumberAddon: "", latitude: 51.739650 , longitude: 4.899030}},
    {id: 1, date: "14-01-2021 12:00:00", patient: {name: "Dion Rodie V2", phoneNumber: "06123456789", postalCode: "4814RS", city: "Breda", country: "NL", street: "Neerloopweg", houseNumber: 4, houseNumberAddon: "A", latitude: 51.590423 , longitude: 4.738946}},
    {id: 1, date: "14-01-2021 16:00:00", patient: {name: "Dion Rodie V3", phoneNumber: "06123456789", postalCode: "9711CK", city: "Groningen", country: "NL", street: "Grote Raamstraat", houseNumber: 9, houseNumberAddon: "", latitude: 53.214340 , longitude: 6.568120}},
  ];

  constructor() { }

  ngOnInit(): void {
    this.origin = this.initial;
    this.calculateCenter();
    this.setDestinations();
  }

  clickedMarker(index: number, infoWindow: any): void {

    if (this.previousIW) {
      this.currentIW = infoWindow;
      this.previousIW.close();
    }
    this.previousIW = infoWindow;

    this.showMap = true;
    this.getDestination(index);
  }

  setDestinations(): void{
      for (let i = 0; i < this.consultations.length; i++) {
        if (i === 0) {
          this.destinations.push({index: i, origin: this.initial, destination: { lat: this.consultations[i].patient.latitude, lng: this.consultations[i].patient.longitude  }});
        }else{
          this.destinations.push({index: i, origin: {lat: this.consultations[i - 1].patient.latitude, lng: this.consultations[i - 1].patient.longitude}, destination: { lat: this.consultations[i].patient.latitude, lng: this.consultations[i].patient.longitude }});
        }
    }
  }

  getDestination(index: number): void {
    this.origin = this.destinations[index].origin;
    this.destination = this.destinations[index].destination;
  }

  urlMapsGenerator(patientInfo: any): string{
    const base = "https://www.google.com/maps/place/";

    let url = "";
    if (patientInfo.houseNumberAddon !== ""){
      url = base + patientInfo.street + "+" + patientInfo.houseNumber + "" + patientInfo.houseNumberAddon + "+" + patientInfo.city + "+" + patientInfo.country;
    }else{
      url = base + patientInfo.street + "+" + patientInfo.houseNumber + "+" + patientInfo.city + "+" + patientInfo.country;
    }

    return url;
  }

  calculateCenter(): void{
    let totalLat = 0;
    let totalLng = 0;

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.consultations.length; i++) {
      totalLat += this.consultations[i].patient.latitude;
      totalLng += this.consultations[i].patient.longitude;
    }

    const centerLat = totalLat / this.consultations.length;
    const centerLng = totalLng / this.consultations.length;
    this.center = { lat: centerLat, lng: centerLng};
  }
}
