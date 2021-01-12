import {Component, OnInit } from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {NgbCalendar, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-consult-visit-info",
  templateUrl: "./consult-visit-info.component.html",
  styleUrls: ["./consult-visit-info.component.css"]
})
export class ConsultVisitInfoComponent implements OnInit {
  model: NgbDateStruct;
  date: { year: number, month: number };
  address: string;
  map: string;

  constructor(private calendar: NgbCalendar, public sanitizer: DomSanitizer) {
    this.model = this.calendar.getToday();
    this.address = "Dreef 4,Made,Nederland";
  }

  ngOnInit(): void {
    this.map = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCLsoYzJ84PGUrhtghT1CPJPGAYZQDdRnw&q=" + this.address;
  }

}
