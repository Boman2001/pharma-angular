import { Component, OnInit } from "@angular/core";
import { DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: "app-patient-detail",
  templateUrl: "./patient-detail.component.html",
  styleUrls: ["./patient-detail.component.css"]
})
export class PatientDetailComponent implements OnInit {
  address: string;
  map: string;

  constructor(public sanitizer: DomSanitizer) {
    this.address = "Dreef 4,Made,Nederland";
  }

  ngOnInit(): void {
    this.map = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCBVzozETyDe794IpgWsIe7zi5iFwCPP54&q=" + this.address;
  }
}
