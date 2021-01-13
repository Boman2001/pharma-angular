import { Component, OnInit } from "@angular/core";
import {NgbCalendar, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-consult-visit-policy",
  templateUrl: "./consult-visit-policy.component.html",
  styleUrls: ["./consult-visit-policy.component.css"]
})
export class ConsultVisitPolicyComponent implements OnInit {
  model: NgbDateStruct;
  medicineStartDate: { year: number, month: number };
  medicineEndDate: { year: number, month: number };
  intoleranceStartDate: { year: number, month: number };
  intoleranceEndDate: { year: number, month: number };

  constructor(private calendar: NgbCalendar) {
    this.model = this.calendar.getToday();
  }

  ngOnInit(): void {
  }

}
