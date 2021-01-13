import { Component, OnInit } from "@angular/core";
import {NgbCalendar, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-consult-visit-biometrics",
  templateUrl: "./consult-visit-biometrics.component.html",
  styleUrls: ["./consult-visit-biometrics.component.css"]
})
export class ConsultVisitBiometricsComponent implements OnInit {
  model: NgbDateStruct;
  date: { year: number, month: number };

  constructor(private calendar: NgbCalendar) {
    this.model = this.calendar.getToday();
  }

  ngOnInit(): void {
  }

}
