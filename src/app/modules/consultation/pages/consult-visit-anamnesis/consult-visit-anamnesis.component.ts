import { Component, OnInit } from "@angular/core";
import {NgbCalendar, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-consult-visit-anamnesis",
  templateUrl: "./consult-visit-anamnesis.component.html",
  styleUrls: ["./consult-visit-anamnesis.component.css"]
})
export class ConsultVisitAnamnesisComponent implements OnInit {
  model: NgbDateStruct;
  date: { year: number, month: number };

  constructor(private calendar: NgbCalendar) {
    this.model = this.calendar.getToday();
  }

  ngOnInit(): void {
  }

}
