import { Component, OnInit } from "@angular/core";
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

  constructor(private calendar: NgbCalendar) {
    this.model = this.calendar.getToday();
  }

  ngOnInit(): void {
  }

}
