import { Component, OnInit } from "@angular/core";
import {Consultation} from "../../models/consultation.model";

@Component({
  selector: "app-consult-visit",
  templateUrl: "./consult-visit.component.html",
  styleUrls: ["./consult-visit.component.css"]
})
export class ConsultVisitComponent implements OnInit {
  consult: Consultation;

  constructor() { }

  ngOnInit(): void {
    this.consult = new Consultation();
    this.consult.Id = 1;
  }

}
