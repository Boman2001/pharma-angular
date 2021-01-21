import { Component, OnInit } from "@angular/core";
import { AgmInfoWindow } from "@agm/core";
import { ConsultationService } from "../../services/consultation.service";
import {Consultation} from "../../models/consultation.model";
import {HttpParams} from "@angular/common/http";
import * as moment from "moment";


@Component({
  selector: "app-google-maps",
  templateUrl: "./google-maps.component.html",
  styleUrls: ["./google-maps.component.css"]
})

export class GoogleMapsComponent implements OnInit {

  public selectedDate;

  center = { lat: 0 , lng: 0};
  initial = { lat: 51.578980, lng: 4.790310 }; // Eggestraat 3, Breda (HUISARTSENPOST)
  renderOptions = { suppressMarkers: true };
  origin = {};
  destination = {};
  showMap = false;
  destinations: any[] = [];
  currentIW: AgmInfoWindow;
  previousIW: AgmInfoWindow;

  consultations: Consultation[] = [];

  constructor(protected consultationService: ConsultationService) {
    this.selectedDate = moment();
  }

  async nextDay(): Promise<void> {
    this.selectedDate.add(1, "day");
    await this.refresh();
  }

  async previousDay(): Promise<void> {
    this.selectedDate.subtract(1, "day");
    await this.refresh();
  }

  async refresh(): Promise<void> {

    try {
      await this.previousIW?.close();
      await this.currentIW?.close();
    }
    catch (e) {
      // @TODO: GlobalModalService // ToastService?
      console.error(e);
    }

    this.showMap = false;
    this.origin = null;
    this.destination = null;
    this.destinations = [];

    this.consultations = await this.consultationService.GetAll(
      null,
      new HttpParams()
        .set("date", this.selectedDate.toISOString())
    )
    .toPromise();
    this.origin = this.initial;

    this.calculateCenter();
    this.setDestinations();
  }

  async ngOnInit(): Promise<void> {
    await this.refresh();
  }

  async clickedMarker(index: number, infoWindow: any): Promise<void> {

    await this.previousIW?.close();
    this.currentIW = infoWindow;

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
